import * as THREE from 'three';
import type { Festival, Season } from './seasons';
import { toon } from './toon';

// Worn items get their own materials with a soft self-glow that the night turns up, so a hat on a sleeping
// pet still reads in the dark. Separate from the shared world materials so nothing else glows.
const wornMats = new Map<string, THREE.MeshToonMaterial>();
function worn(color: string): THREE.MeshToonMaterial {
  let m = wornMats.get(color);
  if (!m) {
    m = toon(color).clone();
    m.emissive = new THREE.Color(color);
    m.emissiveIntensity = 0;
    wornMats.set(color, m);
  }
  return m;
}
export function setWornGlow(k: number): void {
  for (const m of wornMats.values()) m.emissiveIntensity = k;
}
import { pumpkin } from './world';

export type Slot = 'head' | 'neck';

export interface Accessory {
  id: string;
  name: string;
  emoji: string;
  slot: Slot;
  /** Lifetime care across the whole planet needed to unlock. */
  unlock: number;
  /** Seasonal/festival items are gifted while their season or festival is on, then kept forever. */
  season?: Season;
  festival?: Festival['id'];
  /** Only sold by the night visitor. */
  visitor?: boolean;
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
  { id: 'sakura', name: 'Blossom pin', emoji: '🌸', slot: 'head', unlock: 0, season: 'spring' },
  { id: 'sunhat', name: 'Sun hat', emoji: '👒', slot: 'head', unlock: 0, season: 'summer' },
  { id: 'acorn', name: 'Acorn cap', emoji: '🌰', slot: 'head', unlock: 0, season: 'autumn' },
  { id: 'leafscarf', name: 'Maple scarf', emoji: '🍁', slot: 'neck', unlock: 0, season: 'autumn' },
  { id: 'earmuffs', name: 'Earmuffs', emoji: '🎧', slot: 'head', unlock: 0, season: 'winter' },
  { id: 'daisychain', name: 'Daisy chain', emoji: '🌼', slot: 'neck', unlock: 0, festival: 'midsummer' },
  { id: 'pumpkinhat', name: 'Pumpkin hat', emoji: '🎃', slot: 'head', unlock: 0, festival: 'pumpkin' },
  { id: 'lanternhat', name: 'Lantern hat', emoji: '🏮', slot: 'head', unlock: 0, festival: 'lantern' },
  { id: 'fairylights', name: 'Fairy lights', emoji: '✨', slot: 'neck', unlock: 0, festival: 'winterlights' },
  { id: 'cometcap', name: 'Comet cap', emoji: '☄️', slot: 'head', unlock: 0, visitor: true },
  { id: 'stardust', name: 'Stardust scarf', emoji: '🌌', slot: 'neck', unlock: 0, visitor: true },
  { id: 'moonhalo', name: 'Moon halo', emoji: '🌙', slot: 'head', unlock: 0, visitor: true },
];

export const isSeasonal = (a: Accessory) => !!(a.season || a.festival);
/** Items you have to be given or buy (not unlocked by care). */
export const isOwnedOnly = (a: Accessory) => isSeasonal(a) || !!a.visitor;
/** Whether an item can be worn: care-unlocked, or a gift/purchase the player owns. */
export const isAvailable = (a: Accessory, totalCare: number, owned: string[]) => (isOwnedOnly(a) ? owned.includes(a.id) : totalCare >= a.unlock);
export const giftsFor = (season: Season, festival: Festival['id'] | undefined) =>
  ACCESSORIES.filter((a) => a.season === season || (festival && a.festival === festival));

export const accessoryById = (id: string | undefined) => ACCESSORIES.find((a) => a.id === id);
export const unlockedAt = (totalCare: number) => ACCESSORIES.filter((a) => !isOwnedOnly(a) && totalCare >= a.unlock);

const sphere = new THREE.SphereGeometry(1, 20, 14);
const basics = new Map<string, THREE.MeshBasicMaterial>();
const basic = (c: string) => basics.get(c) ?? basics.set(c, new THREE.MeshBasicMaterial({ color: c })).get(c)!;
const cone = new THREE.ConeGeometry(1, 1, 24);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 24);

type V3 = [number, number, number];
function m(geo: THREE.BufferGeometry, color: string, pos: V3, scale: V3, rot: V3 = [0, 0, 0]): THREE.Mesh {
  const x = new THREE.Mesh(geo, worn(color));
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
      const cap = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), worn('#c8b6ff'));
      cap.scale.set(0.72, 0.5, 0.72);
      g.add(cap);
      g.add(m(cyl, '#b39cf5', [0, 0.02, 0], [0.74, 0.1, 0.74]));
      g.add(m(sphere, '#ffffff', [0, 0.52, 0], [0.13, 0.13, 0.13]));
      break;
    }
    case 'flowers': {
      g.position.set(0, 1.72, 0);
      g.rotation.x = -0.15;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.045, 8, 36), worn('#95d5b2'));
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
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.13, 10, 40), worn('#ff9aa2'));
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
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.05, 8, 40), worn(tint));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      g.add(m(sphere, '#ffd166', [0, -0.1, 0.96], [0.13, 0.13, 0.13]));
      g.add(m(cyl, '#c99a2e', [0, -0.16, 1.07], [0.02, 0.07, 0.02], [Math.PI / 2, 0, 0]));
      break;
    }
    case 'sakura': {
      g.position.set(0.48, 1.72, 0.42);
      g.rotation.set(0.3, 0.4, -0.5);
      for (const [x, y, s] of [[0, 0, 1], [0.2, 0.08, 0.8], [-0.16, 0.1, 0.75]] as V3[]) {
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2;
          g.add(m(sphere, '#ffc8dd', [x + Math.cos(a) * 0.08 * s, y, Math.sin(a) * 0.08 * s], [0.07 * s, 0.03 * s, 0.07 * s]));
        }
        g.add(m(sphere, '#ffe066', [x, y + 0.02, 0], [0.035 * s, 0.03 * s, 0.035 * s]));
      }
      break;
    }
    case 'sunhat': {
      g.position.set(0, 1.74, 0);
      g.rotation.set(-0.12, 0, 0.12);
      g.add(m(cyl, '#fff1c9', [0, 0, 0], [1.05, 0.04, 1.05]));
      const dome = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), worn('#fff1c9'));
      dome.scale.set(0.58, 0.42, 0.58);
      g.add(dome);
      g.add(m(cyl, '#ff9ec7', [0, 0.07, 0], [0.6, 0.1, 0.6]));
      g.add(m(sphere, '#ff9ec7', [0.5, 0.08, 0.3], [0.12, 0.08, 0.06]));
      break;
    }
    case 'acorn': {
      g.position.set(0.12, 1.78, 0);
      g.rotation.z = -0.25;
      const cap = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), worn('#c9925f'));
      cap.scale.set(0.5, 0.36, 0.5);
      g.add(cap);
      g.add(m(cyl, '#a8754a', [0, 0.02, 0], [0.52, 0.06, 0.52]));
      g.add(m(cyl, '#8a5f3c', [0, 0.42, 0], [0.04, 0.16, 0.04], [0, 0, 0.3]));
      break;
    }
    case 'leafscarf': {
      g.position.set(0, 0.6, 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.13, 10, 40), worn('#ffad7a'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      g.add(m(sphere, '#ffad7a', [-0.42, -0.2, 0.8], [0.13, 0.3, 0.08], [0.2, 0, -0.25]));
      for (const [x, y, z, c] of [[0.35, 0.05, 0.88, '#f7a09a'], [-0.6, 0.06, 0.72, '#ffd27a']] as [number, number, number, string][]) {
        for (let i = 0; i < 3; i++) g.add(m(sphere, c, [x, y, z], [0.15, 0.05, 0.08], [1.2, 0, (i - 1) * 0.9]));
      }
      break;
    }
    case 'earmuffs': {
      g.position.set(0, 1.0, 0);
      const band = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.06, 8, 32, Math.PI), worn('#b8a4f0'));
      g.add(band);
      for (const s of [-1, 1]) g.add(m(sphere, '#ffffff', [1.0 * s, 0.05, 0], [0.22, 0.28, 0.24]));
      break;
    }
    case 'daisychain': {
      g.position.set(0, 0.62, 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.035, 6, 40), worn('#95d5b2'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        g.add(m(sphere, '#ffffff', [Math.cos(a) * 0.95, 0, Math.sin(a) * 0.95], [0.13, 0.13, 0.05], [0, -a + Math.PI / 2, 0]));
        g.add(m(sphere, '#ffe066', [Math.cos(a) * 1.0, 0, Math.sin(a) * 1.0], [0.05, 0.05, 0.03], [0, -a + Math.PI / 2, 0]));
      }
      break;
    }
    case 'pumpkinhat': {
      const p = pumpkin(1);
      p.scale.setScalar(9);
      p.position.set(0.1, 1.68, 0);
      p.rotation.z = -0.2;
      g.add(p);
      break;
    }
    case 'lanternhat': {
      g.position.set(0.15, 1.85, 0);
      g.rotation.z = -0.2;
      const glow = basic('#ffb46b');
      const body = new THREE.Mesh(sphere, glow);
      body.scale.set(0.28, 0.32, 0.28);
      body.position.y = 0.32;
      g.add(body);
      g.add(m(cyl, '#ffd166', [0, 0.04, 0], [0.16, 0.05, 0.16]));
      g.add(m(cyl, '#ffd166', [0, 0.62, 0], [0.12, 0.05, 0.12]));
      g.add(m(cyl, '#ff8f8f', [0, -0.08, 0], [0.02, 0.18, 0.02]));
      break;
    }
    case 'fairylights': {
      g.position.set(0, 0.62, 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.02, 6, 40), worn('#6b5a7a'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      const cols = ['#ff8fab', '#ffe066', '#9bf6ff', '#caffbf', '#cdb4db'];
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const b = new THREE.Mesh(sphere, basic(cols[i % 5]));
        b.position.set(Math.cos(a) * 0.96, -0.06, Math.sin(a) * 0.96);
        b.scale.setScalar(0.08);
        g.add(b);
      }
      break;
    }
    case 'cometcap': {
      g.position.set(0.1, 1.74, 0);
      g.rotation.set(-0.2, 0, -0.2);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), worn('#5e60ce'));
      cap.scale.set(0.6, 0.42, 0.6);
      g.add(cap);
      g.add(m(cyl, '#ffd166', [0, 0.02, 0], [0.62, 0.06, 0.62]));
      // The comet's tail streams back off the cap.
      for (let i = 0; i < 4; i++) g.add(m(sphere, ['#fff1a8', '#ffe066', '#ffd1e8', '#c3c8ff'][i], [0, 0.38 - i * 0.05, -0.25 - i * 0.2], [0.12 - i * 0.022, 0.1 - i * 0.018, 0.14 - i * 0.02]));
      g.add(m(cone, '#fff1a8', [0, 0.46, 0.04], [0.09, 0.16, 0.09]));
      break;
    }
    case 'stardust': {
      g.position.set(0, 0.6, 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.13, 10, 40), worn('#6a5acd'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      g.add(m(sphere, '#6a5acd', [0.45, -0.2, 0.8], [0.13, 0.32, 0.08], [0.2, 0, 0.25]));
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const dot = new THREE.Mesh(sphere, basic(i % 3 ? '#fff6a8' : '#ffffff'));
        dot.position.set(Math.cos(a) * 1.02, 0.04 * Math.sin(i * 2.3), Math.sin(a) * 1.02);
        dot.scale.setScalar(0.04);
        g.add(dot);
      }
      break;
    }
    case 'moonhalo': {
      g.position.set(0, 2.0, -0.05);
      g.rotation.x = -0.2;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.04, 8, 36), basic('#fff6c2'));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      const moon = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.055, 8, 20, Math.PI * 1.25), basic('#fff1a8'));
      moon.position.set(0, 0.24, 0);
      moon.rotation.z = Math.PI * 0.6; // a crescent standing on the halo
      g.add(moon);
      break;
    }
    default:
      return null;
  }
  return g;
}
