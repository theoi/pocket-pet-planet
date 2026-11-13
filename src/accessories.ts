import * as THREE from 'three';
import { toon } from './toon';

export type Slot = 'head' | 'neck';

export interface Accessory {
  id: string;
  name: string;
  emoji: string;
  slot: Slot;
  /** Lifetime care across the whole planet needed to unlock. */
  unlock: number;
}

export const ACCESSORIES: Accessory[] = [
  { id: 'bow', name: 'Bow', emoji: '🎀', slot: 'head', unlock: 2 },
  { id: 'scarf', name: 'Scarf', emoji: '🧣', slot: 'neck', unlock: 4 },
  { id: 'party', name: 'Party hat', emoji: '🥳', slot: 'head', unlock: 6 },
  { id: 'bowtie', name: 'Bow tie', emoji: '🎩', slot: 'neck', unlock: 9 },
  { id: 'beanie', name: 'Beanie', emoji: '🧶', slot: 'head', unlock: 12 },
  { id: 'bell', name: 'Bell', emoji: '🔔', slot: 'neck', unlock: 16 },
  { id: 'flowers', name: 'Flower crown', emoji: '🌸', slot: 'head', unlock: 20 },
  { id: 'crown', name: 'Crown', emoji: '👑', slot: 'head', unlock: 28 },
  { id: 'wizard', name: 'Star hat', emoji: '🔮', slot: 'head', unlock: 36 },
];

export const accessoryById = (id: string | undefined) => ACCESSORIES.find((a) => a.id === id);
export const unlockedAt = (totalCare: number) => ACCESSORIES.filter((a) => totalCare >= a.unlock);

const sphere = new THREE.SphereGeometry(1, 20, 14);
const cone = new THREE.ConeGeometry(1, 1, 24);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 24);

type V3 = [number, number, number];
function m(geo: THREE.BufferGeometry, color: string, pos: V3, scale: V3, rot: V3 = [0, 0, 0]): THREE.Mesh {
  const x = new THREE.Mesh(geo, toon(color));
  x.position.set(...pos);
  x.scale.set(...scale);
  x.rotation.set(...rot);
  return x;
}

/**
 * Builds the accessory in the pet's unit body space (body sphere radius 1 centred at y=1).
 * Hats sit jauntily off-centre so they don't collide with ears and antennae.
 */
export function buildAccessory(id: string, tint: string): THREE.Group | null {
  const g = new THREE.Group();
  switch (id) {
    case 'bow': {
      g.position.set(0.5, 1.68, 0.42);
      g.rotation.set(0, 0.5, -0.5);
      g.add(m(cone, '#ff8fb8', [-0.17, 0, 0], [0.16, 0.26, 0.1], [0, 0, Math.PI / 2]));
      g.add(m(cone, '#ff8fb8', [0.17, 0, 0], [0.16, 0.26, 0.1], [0, 0, -Math.PI / 2]));
      g.add(m(sphere, '#ff6fa3', [0, 0, 0.02], [0.08, 0.08, 0.07]));
      break;
    }
    case 'party': {
      g.position.set(0.22, 1.82, 0.05);
      g.rotation.z = -0.32;
      g.add(m(cone, '#a0c4ff', [0, 0.27, 0], [0.24, 0.55, 0.24]));
      for (let i = 0; i < 3; i++) g.add(m(sphere, ['#ffe066', '#ff8fb8', '#ffffff'][i], [Math.cos(i * 2.1) * 0.13, 0.12 + i * 0.12, Math.sin(i * 2.1) * 0.13 + 0.05], [0.04, 0.04, 0.04]));
      g.add(m(sphere, '#ffe066', [0, 0.57, 0], [0.08, 0.08, 0.08]));
      break;
    }
    case 'beanie': {
      g.position.set(0, 1.7, 0);
      g.rotation.x = -0.12;
      const cap = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), toon('#c8b6ff'));
      cap.scale.set(0.72, 0.5, 0.72);
      g.add(cap);
      g.add(m(cyl, '#b39cf5', [0, 0.02, 0], [0.74, 0.1, 0.74]));
      g.add(m(sphere, '#ffffff', [0, 0.52, 0], [0.13, 0.13, 0.13]));
      break;
    }
    case 'flowers': {
      g.position.set(0, 1.72, 0);
      g.rotation.x = -0.15;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.045, 8, 36), toon('#95d5b2'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      const cols = ['#ffafcc', '#fdffb6', '#cdb4db', '#ffffff', '#ffc8a2'];
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2;
        g.add(m(sphere, cols[i % cols.length], [Math.cos(a) * 0.64, 0.04, Math.sin(a) * 0.64], [0.1, 0.07, 0.1]));
        g.add(m(sphere, '#ffe066', [Math.cos(a) * 0.64, 0.09, Math.sin(a) * 0.64], [0.04, 0.03, 0.04]));
      }
      break;
    }
    case 'crown': {
      g.position.set(-0.15, 1.86, 0.05);
      g.rotation.z = 0.25;
      g.add(m(cyl, '#ffd166', [0, 0.06, 0], [0.3, 0.13, 0.3]));
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        g.add(m(cone, '#ffd166', [Math.cos(a) * 0.25, 0.2, Math.sin(a) * 0.25], [0.07, 0.17, 0.07]));
        g.add(m(sphere, ['#ff8fb8', '#a0c4ff', '#b9fbc0'][i % 3], [Math.cos(a) * 0.3, 0.07, Math.sin(a) * 0.3], [0.04, 0.04, 0.03]));
      }
      break;
    }
    case 'wizard': {
      g.position.set(0.18, 1.8, 0);
      g.rotation.z = -0.25;
      g.add(m(cyl, '#7b6fd6', [0, 0, 0], [0.55, 0.04, 0.55]));
      const hat = m(cone, '#8f83e6', [0, 0.38, 0], [0.32, 0.75, 0.32]);
      g.add(hat);
      g.add(m(cyl, '#ffd166', [0, 0.07, 0], [0.33, 0.07, 0.33]));
      for (const [x, y, z] of [[0.15, 0.3, 0.22], [-0.12, 0.5, 0.16], [0.05, 0.62, 0.12]] as V3[]) g.add(m(sphere, '#fff6a8', [x, y, z], [0.04, 0.04, 0.04]));
      break;
    }
    case 'scarf': {
      g.position.set(0, 0.6, 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.13, 10, 40), toon('#ff9aa2'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      g.add(m(sphere, '#ff9aa2', [0.45, -0.2, 0.8], [0.13, 0.32, 0.08], [0.2, 0, 0.25]));
      g.add(m(cyl, '#ffffff', [0.45, -0.38, 0.84], [0.1, 0.05, 0.06], [0.2, 0, 0.25]));
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        g.add(m(sphere, '#ffffff', [Math.cos(a) * 0.98, 0, Math.sin(a) * 0.98], [0.05, 0.05, 0.05]));
      }
      break;
    }
    case 'bowtie': {
      g.position.set(0, 0.62, 0.93);
      g.rotation.x = -0.35;
      g.add(m(cone, '#5e60ce', [-0.13, 0, 0], [0.12, 0.2, 0.08], [0, 0, Math.PI / 2]));
      g.add(m(cone, '#5e60ce', [0.13, 0, 0], [0.12, 0.2, 0.08], [0, 0, -Math.PI / 2]));
      g.add(m(sphere, '#7a7ce0', [0, 0, 0.02], [0.06, 0.06, 0.06]));
      break;
    }
    case 'bell': {
      g.position.set(0, 0.62, 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.05, 8, 40), toon(tint));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      g.add(m(sphere, '#ffd166', [0, -0.1, 0.96], [0.13, 0.13, 0.13]));
      g.add(m(cyl, '#c99a2e', [0, -0.16, 1.07], [0.02, 0.07, 0.02], [Math.PI / 2, 0, 0]));
      break;
    }
    default:
      return null;
  }
  return g;
}
