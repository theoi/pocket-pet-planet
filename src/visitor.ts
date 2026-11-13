import * as THREE from 'three';
import { canvasTexture, mergeByMaterial, placeOnSphere } from './toon';
import { R } from './world';

export const VISITOR = { name: 'Twinkle', title: 'the star peddler', emoji: '🌠' };

export interface Ware {
  id: string;
  /** Accessory id, or a seed kind for seed wares. */
  item: string;
  kind: 'outfit' | 'seed';
  price: number;
}
export const WARES: Ware[] = [
  { id: 'cometcap', item: 'cometcap', kind: 'outfit', price: 6 },
  { id: 'stardust', item: 'stardust', kind: 'outfit', price: 8 },
  { id: 'moonhalo', item: 'moonhalo', kind: 'outfit', price: 12 },
  { id: 'seed:sunpeach', item: 'sunpeach', kind: 'seed', price: 2 },
];

/** The evening a moment belongs to: before noon still counts as the previous night. */
export function nightKey(d: Date): string {
  const e = new Date(d.getTime() - 12 * 3600_000);
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, '0')}-${String(e.getDate()).padStart(2, '0')}`;
}

/** About one night in four is a visitor night, the same for everyone on that date; festivals always are. */
export function isVisitorNight(key: string, festival: boolean): boolean {
  if (festival) return true;
  let h = 2166136261;
  for (const c of key) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (h >>> 0) % 4 === 0;
}

export function parseVisitorOverride(search = location.search): boolean | null {
  const v = new URLSearchParams(search).get('visitor');
  return v === '1' ? true : v === '0' ? false : null;
}

const sphere = new THREE.SphereGeometry(1, 16, 12);
// Unlit so the star glows on dark nights.
const mats = new Map<string, THREE.MeshBasicMaterial>();
const glowy = (c: string) => mats.get(c) ?? mats.set(c, new THREE.MeshBasicMaterial({ color: c })).get(c)!;
const cone = new THREE.ConeGeometry(1, 1, 10);
const box = new THREE.BoxGeometry(1, 1, 1);
const glowTex = canvasTexture((ctx, s) => {
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,245,200,1)');
  g.addColorStop(0.35, 'rgba(255,230,170,0.5)');
  g.addColorStop(1, 'rgba(255,230,170,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
}, 64);

type State = 'arriving' | 'here' | 'leaving' | 'gone';

/** A plump little star with a pack of wares and a lantern, hovering just above the ground. */
export class Visitor {
  readonly group = new THREE.Group();
  readonly hit: THREE.Mesh;
  state: State = 'arriving';
  private body = new THREE.Group();
  private t = 0;
  private from = new THREE.Vector3();
  private spot = new THREE.Vector3();
  private trail: THREE.Points;
  private trailPos: Float32Array;

  constructor(readonly up: THREE.Vector3, cameraDir: THREE.Vector3, arriveNow = false) {
    const b = this.body;
    const star = new THREE.Group();
    const core = new THREE.Mesh(sphere, glowy('#fff1a8'));
    core.scale.set(0.16, 0.16, 0.13);
    star.add(core);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const c = new THREE.Mesh(cone, glowy('#fff1a8'));
      c.position.set(Math.sin(a) * 0.17, Math.cos(a) * 0.17, 0);
      c.rotation.z = -a;
      c.scale.set(0.075, 0.16, 0.06);
      star.add(c);
    }
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(sphere, glowy('#4a3b5c'));
      eye.position.set(0.05 * s, 0.02, 0.12);
      eye.scale.set(0.022, 0.03, 0.01);
      star.add(eye);
      const cheek = new THREE.Mesh(sphere, glowy('#ffb3c7'));
      cheek.position.set(0.09 * s, -0.03, 0.105);
      cheek.scale.set(0.025, 0.016, 0.008);
      star.add(cheek);
    }
    const pack = new THREE.Mesh(box, glowy('#c4a8e0'));
    pack.position.set(0, -0.02, -0.13);
    pack.scale.set(0.16, 0.14, 0.09);
    star.add(pack);
    const strap = new THREE.Mesh(box, glowy('#9b7cc0'));
    strap.position.set(0, 0.0, -0.08);
    strap.scale.set(0.17, 0.025, 0.02);
    star.add(strap);
    const lamp = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: '#ffd38a' }));
    lamp.position.set(0.24, -0.1, 0.02);
    lamp.scale.setScalar(0.04);
    star.add(lamp);
    mergeByMaterial(star);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.85 }));
    halo.scale.setScalar(0.9);
    b.add(halo, star);
    b.position.y = 0.32;
    this.group.add(b);
    this.hit = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
    this.hit.position.y = 0.32;
    this.group.add(this.hit);
    this.hit.userData.visitor = this;
    // A short sparkly trail behind it while it flies.
    this.trailPos = new Float32Array(24 * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3));
    this.trail = new THREE.Points(g, new THREE.PointsMaterial({ color: '#fff3b0', size: 0.07, transparent: true, opacity: 0.9, depthWrite: false }));
    this.trail.frustumCulled = false;
    placeOnSphere(this.group, up, R);
    this.spot.copy(this.group.position);
    // Swoop in from high in the sky, off to one side of the view.
    const side = new THREE.Vector3().crossVectors(cameraDir, up).normalize();
    this.from.copy(up).multiplyScalar(R + 4).addScaledVector(side, 3).addScaledVector(cameraDir, 1.5);
    if (arriveNow) {
      this.state = 'here';
      this.t = 1;
    }
    this.update(0, 0);
  }

  get trailObject(): THREE.Points {
    return this.trail;
  }

  leave(): void {
    if (this.state === 'gone' || this.state === 'leaving') return;
    this.state = 'leaving';
    this.t = 0;
  }

  update(dt: number, time: number, camera?: THREE.Vector3): void {
    const ease = (k: number) => k * k * (3 - 2 * k);
    if (this.state === 'arriving' || this.state === 'leaving') this.t = Math.min(1, this.t + dt / 3);
    let k = 1;
    if (this.state === 'arriving') {
      k = ease(this.t);
      if (this.t >= 1) this.state = 'here';
    } else if (this.state === 'leaving') {
      k = 1 - ease(this.t);
      if (this.t >= 1) this.state = 'gone';
    }
    this.group.position.lerpVectors(this.from, this.spot, k);
    this.group.visible = this.state !== 'gone';
    const flying = this.state === 'arriving' || this.state === 'leaving';
    this.body.position.y = 0.32 + Math.sin(time * 2) * 0.04;
    // Always turn its face toward the viewer, with a gentle sway.
    if (camera) this.body.lookAt(camera);
    this.body.rotateY(Math.sin(time * 0.7) * 0.3);
    this.body.rotateZ(Math.sin(time * 1.3) * 0.12 + (flying ? 0.5 : 0));
    // Trail: points spread back along the flight path.
    this.trail.visible = flying;
    if (flying)
      for (let i = 0; i < 8 * 3; i += 3) {
        const j = i / 3;
        const kk = Math.max(0, k - (this.state === 'arriving' ? 1 : -1) * j * 0.02);
        const p = new THREE.Vector3().lerpVectors(this.from, this.spot, kk).addScaledVector(this.up, 0.3);
        this.trailPos[i] = p.x + Math.sin(j * 3 + time * 9) * 0.05;
        this.trailPos[i + 1] = p.y + Math.cos(j * 2 + time * 7) * 0.05;
        this.trailPos[i + 2] = p.z;
      }
    this.trail.geometry.attributes.position.needsUpdate = flying;
  }

  /** World position of the visitor's head, for floaters and hearts. */
  headWorld(): THREE.Vector3 {
    return this.body.getWorldPosition(new THREE.Vector3()).addScaledVector(this.up, 0.15);
  }
}

/** A sticker portrait for the book. */
export function visitorSticker(found: boolean, size = 112): string {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  const s = size / 112;
  ctx.translate(size / 2, size / 2 + 4 * s);
  const star = (r1: number, r2: number) => {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 ? r2 : r1;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
  };
  ctx.lineJoin = 'round';
  star(46 * s, 24 * s);
  ctx.fillStyle = '#fff';
  ctx.lineWidth = 12 * s;
  ctx.strokeStyle = found ? '#fff' : '#e7def0';
  ctx.stroke();
  ctx.fillStyle = found ? '#fff1a8' : '#cfc3dc';
  ctx.fill();
  if (found) {
    ctx.fillStyle = '#4a3b5c';
    for (const x of [-9, 9]) {
      ctx.beginPath();
      ctx.ellipse(x * s, -2 * s, 3 * s, 4.5 * s, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#ffb3c7';
    for (const x of [-16, 16]) {
      ctx.beginPath();
      ctx.ellipse(x * s, 7 * s, 4.5 * s, 2.5 * s, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = '#4a3b5c';
    ctx.lineWidth = 2 * s;
    ctx.beginPath();
    ctx.arc(0, 5 * s, 4 * s, 0.2, Math.PI - 0.2);
    ctx.stroke();
    ctx.fillStyle = '#ffd38a';
    ctx.beginPath();
    ctx.arc(34 * s, 18 * s, 7 * s, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = '#fff';
    ctx.font = `800 ${30 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('?', 0, 2 * s);
  }
  return c.toDataURL('image/png');
}
