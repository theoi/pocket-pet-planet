export type Species = 'mochi' | 'puff' | 'bloop' | 'sprout';
export type Vec3 = [number, number, number];

export interface PetData {
  id: string;
  name: string;
  species: Species;
  stage: number;
  food: number;
  joy: number;
  care: number;
  pos: Vec3;
}

export interface SaveData {
  version: 1;
  savedAt: number;
  pets: PetData[];
}

const KEY = 'pocket-pet-planet:v1';
const HOUR = 3600_000;

export const RATES = { foodPerHour: 5, joyPerHour: 3, hungryJoyPerHour: 3, hungryBelow: 30 };
/** Care needed to reach stage 1 and stage 2. */
export const STAGE_CARE = [5, 15];
export const MAX_STAGE = STAGE_CARE.length;
/** Offline decay is capped so a long break never leaves pets at absolute zero forever. */
export const MAX_OFFLINE_MS = 3 * 24 * HOUR;

export const SPECIES: Record<Species, { forms: string[]; colors: string[]; accent: string }> = {
  mochi: { forms: ['Mochi', 'Mochibun', 'Lunabun'], colors: ['#ffc8dd', '#ffb3d1', '#f7a8e0'], accent: '#ff8fab' },
  puff: { forms: ['Puff', 'Puffpaw', 'Sunpuff'], colors: ['#ffe5b4', '#ffd6a5', '#ffc68a'], accent: '#ffad7a' },
  bloop: { forms: ['Bloop', 'Blooplet', 'Starbloop'], colors: ['#d9c8f0', '#c3c8ff', '#a9c8ff'], accent: '#ffe066' },
  sprout: { forms: ['Sprout', 'Sproutling', 'Bloomkin'], colors: ['#fdffb6', '#eef7a6', '#dff0a0'], accent: '#95d5b2' },
};

const NAMES = ['Mochi', 'Pip', 'Bean', 'Tofu', 'Nori', 'Biscuit', 'Pudding', 'Dumpling', 'Pebble', 'Wobble', 'Taffy', 'Clover'];

const clamp = (v: number, lo = 0, hi = 100) => Math.min(hi, Math.max(lo, v));

/** Advance a pet's needs by `ms` of elapsed time, exactly (not per-frame approximations). */
export function decay(p: PetData, ms: number): void {
  if (ms <= 0) return;
  const h = ms / HOUR;
  const f0 = p.food;
  const hoursUntilHungry = Math.max(0, (f0 - RATES.hungryBelow) / RATES.foodPerHour);
  const hungryHours = Math.max(0, h - hoursUntilHungry);
  p.food = clamp(f0 - RATES.foodPerHour * h);
  p.joy = clamp(p.joy - RATES.joyPerHour * h - RATES.hungryJoyPerHour * hungryHours);
}

export interface Mood { label: string; emoji: string; face: 'smile' | 'flat' | 'frown' }

export function moodOf(p: PetData): Mood {
  if (p.food < 20) return { label: 'Starving', emoji: '😣', face: 'frown' };
  if (p.food < 40) return { label: 'Peckish', emoji: '🥺', face: 'frown' };
  if (p.joy >= 80) return { label: 'Overjoyed', emoji: '🥰', face: 'smile' };
  if (p.joy >= 55) return { label: 'Happy', emoji: '😊', face: 'smile' };
  if (p.joy >= 30) return { label: 'Calm', emoji: '🙂', face: 'flat' };
  return { label: 'Lonely', emoji: '😢', face: 'frown' };
}

export function formName(p: PetData): string {
  const prefix = ['Baby', 'Young', 'Starry'][p.stage] ?? '';
  return `${prefix} ${SPECIES[p.species].forms[p.stage]}`;
}

function randomUnit(rng: () => number): Vec3 {
  const z = rng() * 2 - 1;
  const a = rng() * Math.PI * 2;
  const r = Math.sqrt(1 - z * z);
  return [r * Math.cos(a), z, r * Math.sin(a)];
}

export function makePet(species: Species, usedNames: string[], rng = Math.random): PetData {
  const free = NAMES.filter((n) => !usedNames.includes(n));
  const name = free[Math.floor(rng() * free.length)] ?? 'Blob';
  return {
    id: Math.floor(rng() * 1e9).toString(36) + Date.now().toString(36).slice(-4),
    name,
    species,
    stage: 0,
    food: 60 + rng() * 20,
    joy: 60 + rng() * 15,
    care: 0,
    pos: randomUnit(rng),
  };
}

export function defaultSave(): SaveData {
  const pets: PetData[] = [];
  for (const s of ['mochi', 'puff', 'bloop', 'sprout'] as Species[]) {
    pets.push(makePet(s, pets.map((p) => p.name)));
  }
  // Start them all on the side facing the camera so the first view is lively.
  pets.forEach((p, i) => {
    const a = (i / pets.length) * Math.PI * 2;
    const v: Vec3 = [Math.cos(a) * 0.55, 0.3 + Math.sin(a) * 0.45, 0.75];
    const l = Math.hypot(...v);
    p.pos = [v[0] / l, v[1] / l, v[2] / l];
  });
  return { version: 1, savedAt: Date.now(), pets };
}

function isPet(x: unknown): x is PetData {
  const p = x as PetData;
  return !!p && typeof p.id === 'string' && typeof p.name === 'string' && p.species in SPECIES &&
    [p.stage, p.food, p.joy, p.care].every((n) => typeof n === 'number' && Number.isFinite(n)) &&
    Array.isArray(p.pos) && p.pos.length === 3;
}

export function load(now = Date.now()): { data: SaveData; offlineMs: number; fresh: boolean } {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as SaveData;
      if (parsed?.version === 1 && Array.isArray(parsed.pets) && parsed.pets.every(isPet) && parsed.pets.length > 0) {
        const offlineMs = Math.min(MAX_OFFLINE_MS, Math.max(0, now - parsed.savedAt));
        parsed.pets.forEach((p) => decay(p, offlineMs));
        return { data: parsed, offlineMs, fresh: false };
      }
    }
  } catch {
    // Corrupt or blocked storage: fall through to a fresh planet.
  }
  return { data: defaultSave(), offlineMs: 0, fresh: true };
}

export function save(pets: PetData[], now = Date.now()): void {
  const data: SaveData = { version: 1, savedAt: now, pets };
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // Storage full or disabled (private mode); the game keeps running in memory.
  }
}

export function clearSave(): void {
  localStorage.removeItem(KEY);
}
