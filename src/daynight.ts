import * as THREE from 'three';
import { canvasTexture, mulberry32, placeOnSphere, toon } from './toon';
import { R } from './world';

/** `?time=22:00` (or `?time=22`) pins the clock for testing and screenshots. */
export function parseTimeOverride(search = location.search): number | null {
  const raw = new URLSearchParams(search).get('time');
  if (!raw) return null;
  const m = /^(\d{1,2})(?::(\d{2}))?$/.exec(raw.trim());
  if (!m) return null;
  const h = Number(m[1]), min = Number(m[2] ?? 0);
  if (h > 23 || min > 59) return null;
  return h + min / 60;
}

export function localHour(d = new Date()): number {
  return d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600;
}

/** 0 = full day, 1 = full night, with dawn (5–7h) and dusk (17:30–20:30) fades. */
export function nightness(h: number): number {
  const s = (a: number, b: number, x: number) => THREE.MathUtils.smoothstep(x, a, b);
  if (h >= 7 && h <= 17.5) return 0;
  if (h > 17.5 && h < 20.5) return s(17.5, 20.5, h);
  if (h >= 5 && h < 7) return 1 - s(5, 7, h);
  return 1;
}

const SKY = {
  day: ['#c9b8f0', '#f2c6e3', '#ffe1c7'],
  dusk: ['#8e7fd0', '#e59bc3', '#ffc3a0'],
  night: ['#1c1d4a', '#33306e', '#5d4a8a'],
};

function mixPalette(n: number): string[] {
  const [a, b, k] = n < 0.5 ? [SKY.day, SKY.dusk, n * 2] : [SKY.dusk, SKY.night, (n - 0.5) * 2];
  return a.map((c, i) => '#' + new THREE.Color(c).lerp(new THREE.Color(b[i]), k).getHexString());
}

const glowTex = () =>
  canvasTexture((ctx, s) => {
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.2, 'rgba(255,255,255,0.85)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.25)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
  }, 64);

interface Firefly { sprite: THREE.Sprite; base: THREE.Vector3; t1: THREE.Vector3; t2: THREE.Vector3; phase: number; speed: number }

export class DayNight {
  night = 0;
  hour = 12;
  /** Set by the weather: overcast skies dim the light and hide stars and fireflies. */
  cloudy = 0;
  private fireflies: Firefly[] = [];
  private stars: THREE.Points;
  private lanternGlows: THREE.Sprite[] = [];
  private bulbs: THREE.MeshBasicMaterial;
  private sinceSky = 99;
  private lastSky = '';

  constructor(
    scene: THREE.Scene,
    private hemi: THREE.HemisphereLight,
    private sun: THREE.DirectionalLight,
    private override: number | null,
    private halo: THREE.Sprite,
  ) {
    const rng = mulberry32(7);
    const glow = glowTex();

    const starPos: number[] = [];
    const starCol: number[] = [];
    const pal = ['#ffffff', '#ffe9f6', '#e6e0ff', '#fff6cf'].map((c) => new THREE.Color(c));
    for (let i = 0; i < 260; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(35 + rng() * 10);
      starPos.push(v.x, v.y, v.z);
      const c = pal[Math.floor(rng() * pal.length)];
      starCol.push(c.r, c.g, c.b);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    sg.setAttribute('color', new THREE.Float32BufferAttribute(starCol, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.35, map: glow, vertexColors: true, transparent: true, depthWrite: false, opacity: 0 }));
    this.stars.renderOrder = -2;
    scene.add(this.stars);

    this.bulbs = new THREE.MeshBasicMaterial({ color: '#fff3c4' });
    for (let i = 0; i < 7; i++) {
      const n = new THREE.Vector3().randomDirection();
      const post = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 0.26, 8), toon('#b9a3c9'));
      pole.position.y = 0.13;
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.04, 12), toon('#b9a3c9'));
      cap.position.y = 0.3;
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), this.bulbs);
      bulb.position.y = 0.265;
      const g = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: '#ffd98a', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
      g.position.y = 0.265;
      g.scale.setScalar(0.4);
      post.add(pole, cap, bulb, g);
      placeOnSphere(post, n, R - 0.01, rng() * 6);
      scene.add(post);
      this.lanternGlows.push(g);
    }

    for (let i = 0; i < 42; i++) {
      const base = new THREE.Vector3().randomDirection();
      const t1 = new THREE.Vector3().randomDirection().cross(base).normalize();
      const t2 = new THREE.Vector3().crossVectors(base, t1);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: i % 3 ? '#fff7a8' : '#d8ffb0', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
      sprite.scale.setScalar(0.07 + rng() * 0.05);
      sprite.renderOrder = 4;
      scene.add(sprite);
      this.fireflies.push({ sprite, base, t1, t2, phase: rng() * 100, speed: 0.4 + rng() * 0.6 });
    }
    this.tick(0, 0, true);
  }

  get fireflyOpacity(): number {
    return this.fireflies[0]?.sprite.material.opacity ?? 0;
  }

  tick(dt: number, time: number, force = false): void {
    this.sinceSky += dt;
    if (force || this.sinceSky > 1) {
      this.sinceSky = 0;
      this.hour = this.override ?? localHour();
      this.night = nightness(this.hour);
      const p = mixPalette(this.night);
      const css = `linear-gradient(180deg, ${p[0]} 0%, ${p[1]} 50%, ${p[2]} 100%)`;
      if (css !== this.lastSky) {
        this.lastSky = css;
        document.body.style.background = css;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', p[0]);
        document.body.classList.toggle('is-night', this.night > 0.5);
      }
      const n = this.night;
      this.hemi.intensity = THREE.MathUtils.lerp(1.6, 0.75, n) * (1 - this.cloudy * 0.2);
      this.hemi.color.set('#fff6fb').lerp(new THREE.Color('#aab2ff'), n);
      this.hemi.groundColor.set('#c9b3e6').lerp(new THREE.Color('#5b4f9a'), n);
      this.sun.intensity = THREE.MathUtils.lerp(1.5, 0.55, n) * (1 - this.cloudy * 0.35);
      this.sun.color.set('#ffffff').lerp(new THREE.Color('#c9c4ff'), n);
      (this.stars.material as THREE.PointsMaterial).opacity = n * (1 - this.cloudy * 0.8);
      this.halo.material.color.set('#ffffff').lerp(new THREE.Color('#9d8cff'), n);
      this.halo.material.opacity = 1 - n * 0.35;
      this.stars.visible = n > 0.01;
    }
    const n = this.night;
    for (const g of this.lanternGlows) {
      g.material.opacity = n * (0.85 + Math.sin(time * 3 + g.id) * 0.1);
      g.visible = n > 0.01;
    }
    this.bulbs.color.set('#efe4f4').lerp(new THREE.Color('#fff1b8'), n);
    for (const f of this.fireflies) {
      f.sprite.visible = n > 0.01;
      if (!f.sprite.visible) continue;
      const a = time * f.speed + f.phase;
      const off = 0.22;
      f.sprite.position
        .copy(f.base)
        .addScaledVector(f.t1, Math.sin(a) * off)
        .addScaledVector(f.t2, Math.cos(a * 0.7) * off)
        .normalize()
        .multiplyScalar(R + 0.18 + Math.sin(a * 1.3) * 0.08);
      f.sprite.material.opacity = n * (1 - this.cloudy) * (0.55 + 0.45 * Math.sin(a * 3.1));
    }
  }
}
