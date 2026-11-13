import * as THREE from 'three';
import type { Season } from './seasons';
import { canvasTexture, mulberry32 } from './toon';
import { R, type Cloud, type World } from './world';

export type WeatherKind = 'clear' | 'rain' | 'snow' | 'rainbow';
const KINDS: WeatherKind[] = ['clear', 'rain', 'snow', 'rainbow'];

export function parseWeatherOverride(search = location.search): WeatherKind | null {
  const w = new URLSearchParams(search).get('weather');
  return KINDS.includes(w as WeatherKind) ? (w as WeatherKind) : null;
}

const SEGMENT_MS = 8 * 60_000;
const RAINBOW_MS = 90_000;
export const BLOOM_DEFAULT = 0.35;

/** Weather for an 8-minute slice of real time; seeded so a reload mid-shower keeps the shower. */
export function scheduledKind(segment: number, night: number, season: Season = 'autumn'): WeatherKind {
  const r = mulberry32(segment * 7919 + 13)();
  // Winter is the snowy season; rain is rarer then. Snow never falls in summer.
  const [rain, snow] = { spring: [0.3, 0], summer: [0.15, 0], autumn: [0.3, 0.03], winter: [0.06, 0.4 + night * 0.1] }[season];
  if (r < rain) return 'rain';
  if (r < rain + snow) return 'snow';
  return 'clear';
}

const flakeTex = () =>
  canvasTexture((ctx, s) => {
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.45, 'rgba(255,255,255,0.9)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
  }, 32);

const RAINBOW = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#bdb2ff'];
const DROPS_PER_CLOUD = 26;
const FLAKES = 520;

export interface WeatherView {
  kind: WeatherKind;
  rain: number;
  snow: number;
  dust: number;
  rainbow: number;
  bloomAvg: number;
  bloomMin: number;
  bloomMax: number;
  blooms: number[];
}

export class Weather {
  kind: WeatherKind = 'clear';
  /** Smoothed intensities, 0..1. */
  rain = 0;
  snow = 0;
  dust = 0;
  rainbow = 0;
  blooms: number[];
  onBloom: ((pos: THREE.Vector3, up: THREE.Vector3) => void) | null = null;

  private segment = -1;
  private rainbowUntil = 0;
  private extra: Cloud[] = [];
  private drops: THREE.LineSegments;
  private dropState: { cloud: number; off: THREE.Vector2; h: number; v: number }[] = [];
  private flakes: THREE.Points;
  private flakeState: { dir: THREE.Vector3; t1: THREE.Vector3; h: number; v: number; ph: number }[] = [];
  private bow: THREE.Group;
  private bowMats: THREE.MeshBasicMaterial[] = [];
  private planetBase: Float32Array;
  private planetNoise: Float32Array;
  private lastDust = -1;
  private tint: HTMLElement;
  private cloudColor = new THREE.Color();
  private cloudWorld: THREE.Vector3[] = [];

  constructor(
    scene: THREE.Scene,
    camera: THREE.Camera,
    private world: World,
    private override: WeatherKind | null,
    savedBlooms: number[] | undefined,
  ) {
    this.blooms = world.flowers.map((_, i) => (typeof savedBlooms?.[i] === 'number' ? THREE.MathUtils.clamp(savedBlooms[i], 0, 1) : BLOOM_DEFAULT));

    for (let i = 0; i < 6; i++) {
      const c = world.makeCloud();
      c.extra = true;
      c.cloud.scale.setScalar(0.001);
      world.clouds.push(c);
      this.extra.push(c);
    }

    const allClouds = world.clouds.length;
    this.cloudWorld = world.clouds.map(() => new THREE.Vector3());
    const dropPos = new Float32Array(allClouds * DROPS_PER_CLOUD * 6);
    for (let c = 0; c < allClouds; c++)
      for (let i = 0; i < DROPS_PER_CLOUD; i++)
        this.dropState.push({ cloud: c, off: new THREE.Vector2((Math.random() - 0.5) * 0.36, (Math.random() - 0.5) * 0.16), h: Math.random(), v: 1.6 + Math.random() * 0.6 });
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(dropPos, 3));
    this.drops = new THREE.LineSegments(dg, new THREE.LineBasicMaterial({ color: '#a9c8ff', transparent: true, opacity: 0, depthWrite: false }));
    this.drops.frustumCulled = false;
    this.drops.visible = false;
    scene.add(this.drops);

    const fp = new Float32Array(FLAKES * 3);
    for (let i = 0; i < FLAKES; i++) {
      const dir = new THREE.Vector3().randomDirection();
      const t1 = new THREE.Vector3().randomDirection().cross(dir).normalize();
      this.flakeState.push({ dir, t1, h: Math.random(), v: 0.18 + Math.random() * 0.12, ph: Math.random() * 10 });
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.BufferAttribute(fp, 3));
    this.flakes = new THREE.Points(fg, new THREE.PointsMaterial({ map: flakeTex(), size: 0.07, transparent: true, depthWrite: false, opacity: 0 }));
    this.flakes.frustumCulled = false;
    this.flakes.visible = false;
    scene.add(this.flakes);

    // A pastel rainbow pinned to the sky behind the planet.
    this.bow = new THREE.Group();
    RAINBOW.forEach((c, i) => {
      const m = new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0, depthWrite: false });
      this.bowMats.push(m);
      const arc = new THREE.Mesh(new THREE.TorusGeometry(5.6 - i * 0.16, 0.085, 8, 96, Math.PI), m);
      this.bow.add(arc);
    });
    this.bow.position.set(0, -1.6, -15);
    this.bow.visible = false;
    this.bow.renderOrder = -1;
    camera.add(this.bow);

    const colors = world.planet.geometry.getAttribute('color') as THREE.BufferAttribute;
    this.planetBase = Float32Array.from(colors.array as Float32Array);
    const pos = world.planet.geometry.getAttribute('position') as THREE.BufferAttribute;
    this.planetNoise = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const n = 0.5 + 0.25 * Math.sin(x * 5.1 + y * 2.3) * Math.cos(z * 4.7 - x * 1.1) + 0.25 * Math.sin(y * 7.3 + z * 3.1);
      // Snow settles first on the "poles" so the dusting reads as weather, not mould.
      this.planetNoise[i] = THREE.MathUtils.clamp(n * 0.7 + Math.abs(y / R) * 0.3, 0, 1);
    }

    this.tint = document.createElement('div');
    this.tint.className = 'weather-tint';
    document.body.prepend(this.tint);

    this.kind = override ?? 'clear';
    const k = this.kind;
    // Start already in the weather (no fade from clear) so a reload mid-shower looks the same.
    this.rain = k === 'rain' ? 1 : 0;
    this.snow = k === 'snow' ? 1 : 0;
    this.rainbow = k === 'rainbow' ? 1 : 0;
    this.dust = k === 'snow' ? 1 : 0;
  }

  set(kind: WeatherKind, night = 0): void {
    if (kind === this.kind) return;
    if (this.kind === 'rain' && kind === 'clear' && night < 0.4) {
      kind = 'rainbow';
      this.rainbowUntil = Date.now() + RAINBOW_MS;
    }
    if (kind === 'rainbow' && !this.rainbowUntil) this.rainbowUntil = Date.now() + RAINBOW_MS;
    this.kind = kind;
  }

  get emoji(): string {
    return { clear: '', rain: '🌧️', snow: '❄️', rainbow: '🌈' }[this.kind];
  }

  view(): WeatherView {
    const b = this.blooms;
    return {
      kind: this.kind,
      rain: this.rain,
      snow: this.snow,
      dust: this.dust,
      rainbow: this.rainbow,
      bloomAvg: b.reduce((a, x) => a + x, 0) / b.length,
      bloomMin: Math.min(...b),
      bloomMax: Math.max(...b),
      blooms: [...b],
    };
  }

  /** Flowers slowly close again over hours without rain. */
  dryOut(ms: number): void {
    const k = ms / 3_600_000;
    this.blooms = this.blooms.map((b) => Math.max(0.2, b - 0.03 * k));
  }

  tick(dt: number, time: number, night: number): void {
    if (!this.override) {
      const seg = Math.floor(Date.now() / SEGMENT_MS);
      if (seg !== this.segment) {
        const first = this.segment < 0;
        this.segment = seg;
        const next = scheduledKind(seg, night, this.world.season);
        if (first) {
          this.kind = next;
          this.rain = next === 'rain' ? 1 : 0;
          this.snow = this.dust = next === 'snow' ? 1 : 0;
        } else this.set(next, night);
      }
    }
    if (this.kind === 'rainbow' && (night > 0.5 || (!this.override && Date.now() > this.rainbowUntil))) {
      this.kind = 'clear';
      this.rainbowUntil = 0;
    }

    const ease = (cur: number, target: number, rate: number) => cur + (target - cur) * Math.min(1, dt * rate);
    this.rain = ease(this.rain, this.kind === 'rain' ? 1 : 0, 0.6);
    this.snow = ease(this.snow, this.kind === 'snow' ? 1 : 0, 0.6);
    this.rainbow = ease(this.rainbow, this.kind === 'rainbow' && night < 0.5 ? 1 : 0, 0.5);
    this.dust = THREE.MathUtils.clamp(this.dust + (this.kind === 'snow' ? dt / 25 : -dt / 40), 0, 1);

    const cloudy = Math.max(this.rain, this.snow * 0.6);
    this.cloudColor.set('#ffffff').lerp(new THREE.Color('#bcb4d6'), this.rain * 0.85).lerp(new THREE.Color('#eef0ff'), this.snow * 0.5);
    this.world.cloudMat.color.copy(this.cloudColor);
    for (const c of this.extra) c.cloud.scale.setScalar(Math.max(0.001, cloudy));
    this.tint.style.opacity = String(cloudy * (0.35 - night * 0.2));

    this.updateRain(dt);
    this.updateSnow(dt, time);
    this.updateBow();
    this.updateDust();
    this.updateFlowers(dt);
  }


  private updateRain(dt: number) {
    const on = this.rain > 0.02;
    this.drops.visible = on;
    if (!on) return;
    (this.drops.material as THREE.LineBasicMaterial).opacity = this.rain * 0.7;
    this.world.clouds.forEach((c, i) => c.cloud.getWorldPosition(this.cloudWorld[i]));
    const arr = this.drops.geometry.getAttribute('position') as THREE.BufferAttribute;
    const a = arr.array as Float32Array;
    const up = new THREE.Vector3(), t1 = new THREE.Vector3(), t2 = new THREE.Vector3(), p = new THREE.Vector3();
    this.dropState.forEach((d, i) => {
      const cw = this.cloudWorld[d.cloud];
      const top = cw.length();
      up.copy(cw).normalize();
      t1.set(0, 1, 0).cross(up).normalize();
      t2.crossVectors(up, t1);
      d.h += d.v * dt / (top - R);
      if (d.h > 1) d.h -= 1;
      const r = top - 0.08 - (top - 0.08 - R) * d.h;
      // Small clouds (extras still growing) rain proportionally less.
      const scale = this.world.clouds[d.cloud].cloud.scale.x;
      const len = scale > 0.2 ? 0.07 : 0;
      p.copy(up).multiplyScalar(r).addScaledVector(t1, d.off.x * scale).addScaledVector(t2, d.off.y * scale);
      a.set([p.x, p.y, p.z], i * 6);
      p.addScaledVector(up, -len);
      a.set([p.x, p.y, p.z], i * 6 + 3);
    });
    arr.needsUpdate = true;
  }

  private updateSnow(dt: number, time: number) {
    const on = this.snow > 0.02;
    this.flakes.visible = on;
    if (!on) return;
    (this.flakes.material as THREE.PointsMaterial).opacity = this.snow;
    const arr = this.flakes.geometry.getAttribute('position') as THREE.BufferAttribute;
    const a = arr.array as Float32Array;
    this.flakeState.forEach((f, i) => {
      f.h -= f.v * dt;
      if (f.h < 0) {
        f.h += 1;
        f.dir.randomDirection();
        f.t1.randomDirection().cross(f.dir).normalize();
      }
      const r = R + 0.02 + f.h * 1.3;
      const sway = Math.sin(time * 1.3 + f.ph) * 0.05;
      a[i * 3] = f.dir.x * r + f.t1.x * sway;
      a[i * 3 + 1] = f.dir.y * r + f.t1.y * sway;
      a[i * 3 + 2] = f.dir.z * r + f.t1.z * sway;
    });
    arr.needsUpdate = true;
  }

  private updateBow() {
    this.bow.visible = this.rainbow > 0.01;
    this.bowMats.forEach((m) => (m.opacity = this.rainbow * 0.7));
  }

  private updateDust() {
    if (Math.abs(this.dust - this.lastDust) < 0.01 && !(this.dust === 0 && this.lastDust > 0)) return;
    this.lastDust = this.dust;
    const colors = this.world.planet.geometry.getAttribute('color') as THREE.BufferAttribute;
    const a = colors.array as Float32Array;
    const cover = 1 - this.dust;
    for (let i = 0; i < this.planetNoise.length; i++) {
      const w = THREE.MathUtils.smoothstep(this.planetNoise[i] - cover, -0.02, 0.12) * 0.88;
      for (let c = 0; c < 3; c++) a[i * 3 + c] = this.planetBase[i * 3 + c] + (1 - this.planetBase[i * 3 + c]) * w;
    }
    colors.needsUpdate = true;
  }

  private updateFlowers(dt: number) {
    const raining = this.rain > 0.3;
    const near = 0.42;
    const tmp = new THREE.Vector3();
    this.world.flowers.forEach((f, i) => {
      let b = this.blooms[i];
      if (raining) {
        // Under a rain cloud: perks up fast. Elsewhere: the general dampness still helps a little.
        let under = false;
        for (let c = 0; c < this.world.clouds.length; c++) {
          if (this.world.clouds[c].cloud.scale.x < 0.3) continue;
          if (tmp.copy(this.cloudWorld[c]).normalize().angleTo(f.normal) < near) {
            under = true;
            break;
          }
        }
        const before = b;
        b = Math.min(1, b + dt * (under ? 0.14 : 0.012) * this.rain);
        if (before < 0.9 && b >= 0.9) this.onBloom?.(f.obj.position.clone().addScaledVector(f.normal, 0.12), f.normal);
      }
      this.blooms[i] = b;
      // Bud (folded petals, droopy, small) → open bloom (flat petals, tall, big).
      const s = f.baseScale * (0.75 + 0.5 * b);
      f.obj.scale.setScalar(s);
      f.stem.scale.y = 0.8 + 0.35 * b;
      f.head.position.y = 0.085 * (0.8 + 0.35 * b);
      f.head.rotation.z = (1 - b) * 0.55;
      const fold = (1 - b) * 1.15;
      for (const p of f.petals) p.rotation.z = fold;
      f.head.scale.setScalar(0.8 + 0.6 * b);
    });
  }
}
