export type Species = 'mochi' | 'puff' | 'bloop' | 'sprout';
export type Vec3 = [number, number, number];

/** Inherited appearance for babies: body color plus the head feature of (possibly) another species. */
export interface Look {
  color: string;
  feature: Species;
  spots?: string;
}

export interface Wear {
  head?: string;
  neck?: string;
}

export interface PetData {
  id: string;
  name: string;
  species: Species;
  stage: number;
  food: number;
  joy: number;
  care: number;
  pos: Vec3;
  look?: Look;
  wear?: Wear;
  parents?: [string, string];
}

export interface EggData {
  id: string;
  pos: Vec3;
  hatchAt: number;
  baby: Pick<PetData, 'name' | 'species' | 'look' | 'parents'>;
}

export interface Game {
  pets: PetData[];
  eggs: EggData[];
  snacks: number;
  /** Lifetime care given across all pets; unlocks accessories. */
  totalCare: number;
  lastEggAt: number;
  /** Per-flower bloom (0 bud … 1 open), indexed like the planet's flowers. */
  flowers?: number[];
  /** Collect-a-dex: entry id → when/where/who first discovered it. */
  dex?: Record<string, { at: number; by: string; where: string; backfilled?: boolean }>;
}

interface SaveV1 {
  version: 1;
  savedAt: number;
  pets: PetData[];
}

interface SaveV2 extends Game {
  version: 2;
  savedAt: number;
}

export interface SaveData extends Game {
  version: 3;
  savedAt: number;
  /** When the writing tab opened; the most recently opened tab owns the save. */
  claim?: number;
}

const KEY = 'pocket-pet-planet:v1';
export const SAVE_KEY = KEY;
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

export function defaultSave(): Game {
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
  return { pets, eggs: [], snacks: 0, totalCare: 0, lastEggAt: 0 };
}

function cleanWear(p: PetData): void {
  if (p.wear && typeof p.wear !== 'object') delete p.wear;
}

function isPet(x: unknown): x is PetData {
  const p = x as PetData;
  return !!p && typeof p.id === 'string' && typeof p.name === 'string' && p.species in SPECIES &&
    [p.stage, p.food, p.joy, p.care].every((n) => typeof n === 'number' && Number.isFinite(n)) &&
    Array.isArray(p.pos) && p.pos.length === 3;
}

const num = (v: unknown, d: number) => (typeof v === 'number' && Number.isFinite(v) ? v : d);

/** Accepts v1 saves (pets only) and v2 saves, always returning a complete v2 game. */
export function migrate(parsed: SaveV1 | SaveV2 | SaveData): (Game & { savedAt: number }) | null {
  if (!parsed || !Array.isArray(parsed.pets) || !parsed.pets.every(isPet) || parsed.pets.length === 0) return null;
  if (parsed.version === 1) {
    return {
      savedAt: num(parsed.savedAt, Date.now()),
      pets: parsed.pets,
      eggs: [],
      snacks: 0,
      totalCare: parsed.pets.reduce((s, p) => s + p.care, 0),
      lastEggAt: 0,
    };
  }
  if (parsed.version === 2 || parsed.version === 3) {
    parsed.pets.forEach(cleanWear);
    const dex = parsed.version === 3 && parsed.dex && typeof parsed.dex === 'object' ? parsed.dex : undefined;
    return {
      savedAt: num(parsed.savedAt, Date.now()),
      pets: parsed.pets,
      eggs: Array.isArray(parsed.eggs) ? parsed.eggs.filter((e) => e && Array.isArray(e.pos) && typeof e.hatchAt === 'number' && e.baby) : [],
      snacks: num(parsed.snacks, 0),
      totalCare: num(parsed.totalCare, 0),
      lastEggAt: num(parsed.lastEggAt, 0),
      flowers: Array.isArray(parsed.flowers) ? parsed.flowers.map((x) => num(x, 0.35)) : undefined,
      dex,
    };
  }
  return null;
}

export function load(now = Date.now()): { data: Game; offlineMs: number; fresh: boolean } {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const game = migrate(JSON.parse(raw));
      if (game) {
        const offlineMs = Math.min(MAX_OFFLINE_MS, Math.max(0, now - game.savedAt));
        game.pets.forEach((p) => decay(p, offlineMs));
        const { savedAt: _, claim: __, ...data } = game as typeof game & { claim?: number };
        return { data, offlineMs, fresh: false };
      }
    }
  } catch {
    // Corrupt or blocked storage: fall through to a fresh planet.
  }
  return { data: defaultSave(), offlineMs: 0, fresh: true };
}

export function save(game: Game, claim?: number, now = Date.now()): void {
  const data: SaveData = { version: 3, savedAt: now, claim, ...game };
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // Storage full or disabled (private mode); the game keeps running in memory.
  }
}

export function clearSave(): void {
  localStorage.removeItem(KEY);
}
