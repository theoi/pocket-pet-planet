import * as THREE from 'three';
import { canvasTexture, mergeByMaterial, placeOnSphere, toon } from './toon';
import { POND_ANGLE, R } from './world';

export type DecorKind = 'cottage' | 'shroomhouse' | 'lantern' | 'flowerbed' | 'bench' | 'well';

export interface DecorData {
  id: string;
  kind: DecorKind;
  pos: [number, number, number];
  rot: number;
}

export const DECOR_KINDS: { kind: DecorKind; name: string; emoji: string; nap?: boolean; hangout?: boolean }[] = [
  { kind: 'cottage', name: 'Cottage', emoji: '🏡', nap: true },
  { kind: 'shroomhouse', name: 'Mushroom house', emoji: '🍄', nap: true },
  { kind: 'bench', name: 'Bench', emoji: '🪑', hangout: true },
  { kind: 'lantern', name: 'Lantern', emoji: '🏮' },
  { kind: 'flowerbed', name: 'Flower bed', emoji: '🌷' },
  { kind: 'well', name: 'Wishing well', emoji: '🪣', hangout: true },
];
export const DECOR_CAP = 24;
/** Minimum angular gap between two decorations. */
export const DECOR_GAP = 0.2;
const DECOR_SCALE = 1.7;

const sphere = new THREE.SphereGeometry(1, 16, 12);
const box = new THREE.BoxGeometry(1, 1, 1);
const cone4 = new THREE.ConeGeometry(1, 1, 4);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 12);
const half = new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
const windowMat = new THREE.MeshBasicMaterial({ color: '#fff3c4' });
const glowTex = canvasTexture((ctx, s) => {
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,240,190,1)');
  g.addColorStop(0.3, 'rgba(255,220,150,0.6)');
  g.addColorStop(1, 'rgba(255,220,150,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
}, 64);

type V3 = [number, number, number];
function p(geo: THREE.BufferGeometry, mat: string | THREE.Material, pos: V3, scale: V3, rot: V3 = [0, 0, 0]) {
  const m = new THREE.Mesh(geo, typeof mat === 'string' ? toon(mat) : mat);
  m.position.set(...pos);
  m.scale.set(...scale);
  m.rotation.set(...rot);
  return m;
}

function model(kind: DecorKind): { g: THREE.Group; glowAt?: V3[]; top: number } {
  const g = new THREE.Group();
  switch (kind) {
    case 'cottage': {
      g.add(p(box, '#fff4e6', [0, 0.07, 0], [0.16, 0.14, 0.13]));
      g.add(p(cone4, '#ff9aa2', [0, 0.19, 0], [0.135, 0.12, 0.115], [0, Math.PI / 4, 0]));
      g.add(p(box, '#c99a7a', [0, 0.045, 0.066], [0.04, 0.07, 0.006]));
      for (const s of [-1, 1]) g.add(p(box, windowMat, [0.05 * s, 0.085, 0.066], [0.03, 0.03, 0.006]));
      // Seen from above only the roof shows, so a dark chimney and stepping-stone path make it read as a house.
      g.add(p(box, '#c99a7a', [0.05, 0.22, -0.025], [0.03, 0.1, 0.03]));
      g.add(p(box, '#8e6a5a', [0.05, 0.273, -0.025], [0.04, 0.012, 0.04]));
      for (const z of [0.1, 0.14, 0.18]) g.add(p(cyl, '#e8d5c4', [0, 0.003, z], [0.022, 0.006, 0.022]));
      return { g, glowAt: [[0, 0.085, 0.09]], top: 0.28 };
    }
    case 'shroomhouse': {
      g.add(p(cyl, '#fff4e6', [0, 0.07, 0], [0.065, 0.14, 0.065]));
      g.add(p(half, '#cdb4db', [0, 0.13, 0], [0.13, 0.1, 0.13]));
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        g.add(p(sphere, '#ffffff', [Math.cos(a) * 0.08, 0.2, Math.sin(a) * 0.08], [0.018, 0.01, 0.018]));
      }
      g.add(p(box, '#c99a7a', [0, 0.04, 0.064], [0.035, 0.06, 0.006]));
      g.add(p(sphere, windowMat, [0, 0.1, 0.062], [0.016, 0.016, 0.006]));
      return { g, glowAt: [[0, 0.1, 0.085]], top: 0.24 };
    }
    case 'lantern': {
      g.add(p(cyl, '#b9a3c9', [0, 0.11, 0], [0.01, 0.22, 0.01]));
      g.add(p(box, '#b9a3c9', [0.03, 0.215, 0], [0.07, 0.008, 0.008]));
      g.add(p(sphere, new THREE.MeshBasicMaterial({ color: '#ffcf8a' }), [0.06, 0.18, 0], [0.028, 0.034, 0.028]));
      g.add(p(cyl, '#b9a3c9', [0.06, 0.212, 0], [0.012, 0.008, 0.012]));
      return { g, glowAt: [[0.06, 0.18, 0]], top: 0.24 };
    }
    case 'flowerbed': {
      g.add(p(cyl, '#d9b38c', [0, 0.012, 0], [0.11, 0.024, 0.07]));
      g.add(p(cyl, '#9ad3a8', [0, 0.026, 0], [0.1, 0.008, 0.062]));
      const cols = ['#ff9ec7', '#ffe066', '#cdb4db', '#ffb3a7', '#a0c4ff'];
      for (let i = 0; i < 9; i++) {
        const x = ((i % 3) - 1) * 0.06, z = (Math.floor(i / 3) - 1) * 0.035;
        g.add(p(cyl, '#7fc79a', [x, 0.045, z], [0.003, 0.04, 0.003]));
        g.add(p(sphere, cols[i % 5], [x, 0.07, z], [0.016, 0.013, 0.016]));
      }
      return { g, top: 0.1 };
    }
    case 'bench': {
      g.add(p(box, '#e3b98f', [0, 0.04, 0], [0.14, 0.012, 0.045]));
      g.add(p(box, '#e3b98f', [0, 0.075, -0.02], [0.14, 0.04, 0.008]));
      for (const s of [-1, 1]) g.add(p(box, '#b9906c', [0.06 * s, 0.02, 0], [0.01, 0.04, 0.04]));
      return { g, top: 0.1 };
    }
    case 'well': {
      g.add(p(cyl, '#e6dff0', [0, 0.035, 0], [0.06, 0.07, 0.06]));
      g.add(p(cyl, '#a9d4ff', [0, 0.071, 0], [0.048, 0.004, 0.048]));
      for (const s of [-1, 1]) g.add(p(cyl, '#c99a7a', [0.05 * s, 0.1, 0], [0.006, 0.12, 0.006]));
      g.add(p(cone4, '#ff9aa2', [0, 0.18, 0], [0.085, 0.06, 0.06], [0, Math.PI / 4, 0]));
      return { g, top: 0.22 };
    }
  }
}

export interface Decor {
  data: DecorData;
  group: THREE.Group;
  hit: THREE.Mesh;
  glow: THREE.Sprite[];
  ring: THREE.Mesh;
  top: number;
}

const ringGeo = new THREE.TorusGeometry(0.13, 0.008, 6, 36);
const ringOk = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95 });
const ringBad = new THREE.MeshBasicMaterial({ color: '#ff6f91', transparent: true, opacity: 0.95 });

export function buildDecor(data: DecorData): Decor {
  const { g, glowAt, top } = model(data.kind);
  mergeByMaterial(g);
  const group = new THREE.Group();
  group.add(g);
  const hit = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 0.08;
  group.add(hit);
  const glow: THREE.Sprite[] = [];
  for (const at of glowAt ?? []) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
    s.position.set(...at);
    s.scale.setScalar(data.kind === 'lantern' ? 0.32 : 0.22);
    group.add(s);
    glow.push(s);
  }
  const ring = new THREE.Mesh(ringGeo, ringOk);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.01;
  ring.visible = false;
  group.add(ring);
  // Built at "prop" scale; houses read better at roughly pet scale.
  group.scale.setScalar(DECOR_SCALE);
  const d: Decor = { data, group, hit, glow, ring, top };
  hit.userData.decor = d;
  place(d);
  return d;
}

export function place(d: Decor): void {
  placeOnSphere(d.group, new THREE.Vector3(...d.data.pos).normalize(), R - 0.005, d.data.rot);
}

export function setRing(d: Decor, on: boolean, ok = true): void {
  d.ring.visible = on;
  d.ring.material = ok ? ringOk : ringBad;
}

export type SpotProblem = 'pond' | 'crowded' | null;

/** Is `n` a fine spot for a decoration? `ignore` is the one being moved. */
export function spotProblem(n: THREE.Vector3, ponds: THREE.Vector3[], decor: Decor[], ignore?: Decor): SpotProblem {
  if (ponds.some((p) => p.angleTo(n) < POND_ANGLE + 0.05)) return 'pond';
  for (const d of decor) {
    if (d === ignore) continue;
    if (new THREE.Vector3(...d.data.pos).angleTo(n) < DECOR_GAP) return 'crowded';
  }
  return null;
}

export function isDecorKind(k: unknown): k is DecorKind {
  return DECOR_KINDS.some((d) => d.kind === k);
}
