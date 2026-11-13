import { SPECIES, type Species } from './state';

export interface Player {
  name: string;
  color: string;
  feature: Species;
}

interface Fruit {
  x: number;
  y: number;
  vy: number;
  kind: 'berry' | 'peach' | 'blue' | 'star';
  spin: number;
}

interface Pop {
  x: number;
  y: number;
  text: string;
  t: number;
}

/** Snacks are worth real care, so a great round pays well but can't skip the whole evolution path. */
export const MAX_SNACKS_PER_ROUND = 10;
export const snacksFor = (score: number) => Math.min(MAX_SNACKS_PER_ROUND, Math.ceil(score / 3));

const POINTS = { berry: 1, peach: 1, blue: 1, star: 3 } as const;
const FRUIT_COLOR = { berry: '#ff6f91', peach: '#ffb38a', blue: '#8fa8ff', star: '#ffd166' } as const;

export interface MiniState {
  phase: 'intro' | 'play' | 'done';
  reward: number;
  timeLeft: number;
  score: number;
  caught: number;
  missed: number;
  combo: number;
  petX: number;
  catchY: number;
  fruits: { x: number; y: number; kind: string }[];
}

/**
 * A 2D canvas overlay: the pet slides along the bottom catching falling fruit.
 * Physics are swept (previous→current position), so slow frames never let fruit tunnel through the pet.
 */
export class FruitCatch {
  private root: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private fruits: Fruit[] = [];
  private pops: Pop[] = [];
  private phase: MiniState['phase'] = 'intro';
  private reward = 0;
  onCatch: ((combo: number) => void) | null = null;
  private timeLeft: number;
  private score = 0;
  private caught = 0;
  private missed = 0;
  private combo = 0;
  private petX = 0;
  private targetX = 0;
  private spawnT = 0;
  private happyT = 0;
  private last = 0;
  private raf = 0;
  private keys = new Set<string>();
  private w = 0;
  private h = 0;
  private dpr = 1;
  private cleanup: (() => void)[] = [];

  constructor(
    private player: Player,
    private onEnd: (score: number) => void,
    private onClose: () => void,
    private duration = 30,
  ) {
    this.timeLeft = duration;
    this.root = document.getElementById('game')!;
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    document.getElementById('gameTitle')!.textContent = `Fruit Catch with ${player.name}`;
    this.showCard('intro');
    this.root.classList.remove('hidden');
    this.resize();
    this.petX = this.targetX = this.w / 2;

    const on = <K extends keyof WindowEventMap>(t: EventTarget, k: K | string, f: (e: any) => void, o?: AddEventListenerOptions) => {
      t.addEventListener(k, f, o);
      this.cleanup.push(() => t.removeEventListener(k, f, o));
    };
    const aim = (e: PointerEvent) => {
      if (this.phase !== 'play') return;
      const r = this.canvas.getBoundingClientRect();
      this.targetX = Math.min(this.w - 30, Math.max(30, e.clientX - r.left));
    };
    on(this.canvas, 'pointerdown', (e: PointerEvent) => {
      this.canvas.setPointerCapture(e.pointerId);
      aim(e);
    });
    // Hovering steers too on desktop; on touch only an active finger produces moves anyway.
    on(this.canvas, 'pointermove', aim);
    on(window, 'keydown', (e: KeyboardEvent) => {
      this.keys.add(e.key);
      if (e.key === 'Escape') this.close();
    });
    on(window, 'keyup', (e: KeyboardEvent) => this.keys.delete(e.key));
    on(window, 'resize', () => this.resize());
    on(document.getElementById('gameStart')!, 'click', () => this.start());
    on(document.getElementById('gameAgain')!, 'click', () => this.restart());
    for (const id of ['gameClose', 'gameDone']) on(document.getElementById(id)!, 'click', () => this.close());

    this.last = performance.now();
    this.loop();
  }

  private showCard(which: 'intro' | 'done' | null) {
    document.getElementById('gameIntro')!.classList.toggle('hidden', which !== 'intro');
    document.getElementById('gameEnd')!.classList.toggle('hidden', which !== 'done');
  }

  private resize() {
    this.dpr = Math.min(window.devicePixelRatio, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * this.dpr;
    this.canvas.height = this.h * this.dpr;
  }

  get catchY() {
    return this.h - Math.max(110, this.h * 0.16);
  }

  private start() {
    this.phase = 'play';
    this.showCard(null);
  }

  private restart() {
    Object.assign(this, { fruits: [], pops: [], score: 0, reward: 0, caught: 0, missed: 0, combo: 0, timeLeft: this.duration, spawnT: 0 });
    this.start();
  }

  close() {
    cancelAnimationFrame(this.raf);
    this.cleanup.forEach((f) => f());
    this.root.classList.add('hidden');
    this.onClose();
  }

  state(): MiniState {
    return {
      phase: this.phase,
      reward: this.reward,
      timeLeft: this.timeLeft,
      score: this.score,
      caught: this.caught,
      missed: this.missed,
      combo: this.combo,
      petX: this.petX,
      catchY: this.catchY,
      fruits: this.fruits.map((f) => ({ x: f.x, y: f.y, kind: f.kind })),
    };
  }

  private loop = () => {
    const now = performance.now();
    const dt = Math.min(0.12, (now - this.last) / 1000);
    this.last = now;
    if (this.phase === 'play') this.step(dt);
    this.draw(now / 1000);
    this.raf = requestAnimationFrame(this.loop);
  };

  private step(dt: number) {
    this.timeLeft = Math.max(0, this.timeLeft - dt);
    const k = 1 - this.timeLeft / this.duration; // difficulty ramps up gently
    if (this.keys.has('ArrowLeft') || this.keys.has('a')) this.targetX -= 520 * dt;
    if (this.keys.has('ArrowRight') || this.keys.has('d')) this.targetX += 520 * dt;
    this.targetX = Math.min(this.w - 30, Math.max(30, this.targetX));
    this.petX += (this.targetX - this.petX) * Math.min(1, dt * 14);

    this.spawnT -= dt;
    if (this.spawnT <= 0 && this.timeLeft > 0.6) {
      this.spawnT = 0.75 - k * 0.35;
      const r = Math.random();
      const kind: Fruit['kind'] = r < 0.08 ? 'star' : r < 0.4 ? 'berry' : r < 0.7 ? 'peach' : 'blue';
      this.fruits.push({ x: 30 + Math.random() * (this.w - 60), y: -20, vy: (150 + k * 120 + Math.random() * 40) * (kind === 'star' ? 1.25 : 1), kind, spin: Math.random() * 6 });
    }

    const cy = this.catchY;
    const reach = 46;
    for (let i = this.fruits.length - 1; i >= 0; i--) {
      const f = this.fruits[i];
      const prevY = f.y;
      f.y += f.vy * dt;
      f.spin += dt * 2;
      if (prevY < cy && f.y >= cy - 4 && Math.abs(f.x - this.petX) < reach) {
        this.fruits.splice(i, 1);
        this.combo++;
        const bonus = this.combo > 0 && this.combo % 5 === 0 ? 1 : 0;
        const pts = POINTS[f.kind] + bonus;
        this.score += pts;
        this.caught++;
        this.happyT = 0.35;
        this.onCatch?.(this.combo);
        this.pops.push({ x: f.x, y: cy - 50, text: bonus ? `+${pts} combo!` : `+${pts}`, t: 0.9 });
      } else if (f.y > this.h + 30) {
        this.fruits.splice(i, 1);
        this.missed++;
        this.combo = 0;
      }
    }
    for (let i = this.pops.length - 1; i >= 0; i--) {
      this.pops[i].t -= dt;
      this.pops[i].y -= 40 * dt;
      if (this.pops[i].t <= 0) this.pops.splice(i, 1);
    }
    this.happyT = Math.max(0, this.happyT - dt);
    if (this.timeLeft <= 0 && this.fruits.length === 0) this.finish();
    else if (this.timeLeft <= 0) for (const f of this.fruits) f.vy = Math.max(f.vy, 600);
  }

  private finish() {
    this.phase = 'done';
    this.reward = snacksFor(this.score);
    document.getElementById('gameResult')!.textContent = `${this.player.name} caught ${this.caught} fruit!`;
    document.getElementById('gameReward')!.textContent = `+${this.reward} snack${this.reward === 1 ? '' : 's'} 🍓`;
    document.getElementById('gameScore')!.textContent = `${this.score} points`;
    this.showCard('done');
    this.onEnd(this.reward);
  }

  private draw(t: number) {
    const { ctx, w, h, dpr } = this;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#d7c6f5');
    g.addColorStop(0.6, '#f7d3ea');
    g.addColorStop(1, '#ffe6cf');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // Rolling hill
    ctx.fillStyle = '#c4ecce';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, this.catchY + 34);
    ctx.quadraticCurveTo(w / 2, this.catchY + 10, w, this.catchY + 34);
    ctx.lineTo(w, h);
    ctx.fill();
    // Drifting clouds
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    for (let i = 0; i < 4; i++) {
      const x = ((t * (12 + i * 5) + i * 280) % (w + 200)) - 100;
      const y = 90 + i * 70;
      for (const [dx, r] of [[0, 26], [28, 32], [58, 24]]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (const f of this.fruits) this.drawFruit(f);
    this.drawPet(t);
    ctx.textAlign = 'center';
    ctx.font = '800 18px ui-rounded, system-ui, sans-serif';
    for (const p of this.pops) {
      ctx.globalAlpha = Math.min(1, p.t * 2);
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#e37fb1';
      ctx.lineWidth = 4;
      ctx.strokeText(p.text, p.x, p.y);
      ctx.fillText(p.text, p.x, p.y);
    }
    ctx.globalAlpha = 1;
    const hud = document.getElementById('gameHud')!;
    const text = `⏱ ${Math.ceil(this.timeLeft)}s   🍓 ${this.score}${this.combo >= 3 ? `   🔥 ${this.combo}` : ''}`;
    if (hud.textContent !== text) hud.textContent = text;
  }

  private drawFruit(f: Fruit) {
    const { ctx } = this;
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(Math.sin(f.spin) * 0.3);
    if (f.kind === 'star') {
      ctx.fillStyle = FRUIT_COLOR.star;
      ctx.strokeStyle = '#fff6c8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
        const r = i % 2 ? 9 : 20;
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      const r = f.kind === 'blue' ? 12 : 16;
      ctx.fillStyle = FRUIT_COLOR[f.kind];
      ctx.beginPath();
      if (f.kind === 'berry') {
        ctx.moveTo(0, r);
        ctx.bezierCurveTo(-r * 1.3, 0, -r, -r, 0, -r * 0.8);
        ctx.bezierCurveTo(r, -r, r * 1.3, 0, 0, r);
      } else ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.65)';
      ctx.beginPath();
      ctx.arc(-r * 0.35, -r * 0.3, r * 0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#7fcf9a';
      ctx.beginPath();
      ctx.ellipse(3, -r - 2, 7, 3.5, -0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawPet(t: number) {
    const { ctx } = this;
    const { color, feature } = this.player;
    const accent = SPECIES[feature].accent;
    const x = this.petX;
    const happy = this.happyT > 0;
    const hop = happy ? Math.sin((this.happyT / 0.35) * Math.PI) * 10 : Math.abs(Math.sin(t * 6)) * (Math.abs(this.targetX - this.petX) > 4 ? 5 : 1.5);
    const y = this.catchY + 4 - hop;
    const r = 34;
    ctx.save();
    ctx.fillStyle = 'rgba(122,90,140,0.18)';
    ctx.beginPath();
    ctx.ellipse(x, this.catchY + 38, 30, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    // Head feature behind the body
    if (feature === 'mochi') {
      for (const s of [-1, 1]) {
        ctx.save();
        ctx.rotate(0.22 * s);
        ctx.beginPath();
        ctx.ellipse(13 * s, -r - 14, 8, 22, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffd9e8';
        ctx.beginPath();
        ctx.ellipse(13 * s, -r - 14, 4, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    } else if (feature === 'puff') {
      for (const s of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(10 * s, -r + 4);
        ctx.lineTo(24 * s, -r - 16);
        ctx.lineTo(30 * s, -r + 12);
        ctx.fill();
      }
    } else if (feature === 'bloop') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.lineTo(0, -r - 14);
      ctx.stroke();
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(0, -r - 18, 6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = accent;
      for (const s of [-1, 1]) {
        ctx.beginPath();
        ctx.ellipse(8 * s, -r - 6, 9, 4, 0.5 * s, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, 0, r, r * 0.92, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff7fb';
    ctx.beginPath();
    ctx.ellipse(0, 9, r * 0.6, r * 0.48, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#3d3047';
    for (const s of [-1, 1]) {
      ctx.beginPath();
      if (happy) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#3d3047';
        ctx.arc(12 * s, -6, 5, Math.PI * 1.1, Math.PI * 1.9);
        ctx.stroke();
      } else {
        ctx.ellipse(12 * s, -6, 4.5, 5.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(12 * s + 1.5, -8, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#3d3047';
      }
    }
    ctx.fillStyle = 'rgba(255,143,184,0.75)';
    for (const s of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(22 * s, 3, 6, 3.5, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#3d3047';
    ctx.beginPath();
    if (happy) ctx.ellipse(0, 4, 6, 6, 0, 0, Math.PI);
    else ctx.arc(0, 2, 4, 0.15 * Math.PI, 0.85 * Math.PI);
    if (happy) ctx.fill();
    else {
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }
    ctx.restore();
  }
}
