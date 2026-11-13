import { drawCritter } from './critter2d';
import { featureOf } from './eggs';
import { SPECIES, type PetData, type Species } from './state';

export interface Discovery {
  at: number;
  by: string;
  where: string;
  /** True when recorded from a save made before the dex existed. */
  backfilled?: boolean;
}
export type DexRecord = Record<string, Discovery>;

export interface DexEntry {
  id: string;
  kind: 'form' | 'mix';
  name: string;
  species: Species;
  feature: Species;
  stage: number;
  hint: string;
}

const ORDER: Species[] = ['mochi', 'puff', 'bloop', 'sprout'];
const FEATURE_WORD: Record<Species, string> = { mochi: 'bunny ears', puff: 'kitty ears', bloop: 'antenna', sprout: 'leaf sprout' };
const STAGE_HINT = ['Starts on the planet', 'Evolve with care', 'Evolve again with lots of care'];

export const DEX: DexEntry[] = [
  ...ORDER.flatMap((s) =>
    SPECIES[s].forms.map((form, stage) => ({
      id: `form:${s}:${stage}`,
      kind: 'form' as const,
      name: `${['Baby', 'Young', 'Starry'][stage]} ${form}`,
      species: s,
      feature: s,
      stage,
      hint: STAGE_HINT[stage],
    })),
  ),
  ...ORDER.flatMap((s) =>
    ORDER.filter((f) => f !== s).map((f) => ({
      id: `mix:${s}+${f}`,
      kind: 'mix' as const,
      name: `${SPECIES[s].forms[0]} with ${FEATURE_WORD[f]}`,
      species: s,
      feature: f,
      stage: 0,
      hint: `Hatch a ${SPECIES[s].forms[0]} baby from a ${SPECIES[f].forms[0]} parent`,
    })),
  ),
];

export const dexEntry = (id: string) => DEX.find((e) => e.id === id);

/** Every dex entry a pet currently demonstrates (all forms up to its stage, plus its trait mix). */
export function entriesFor(p: Pick<PetData, 'species' | 'stage' | 'look'>): string[] {
  const ids: string[] = [];
  for (let s = 0; s <= Math.min(2, p.stage); s++) ids.push(`form:${p.species}:${s}`);
  const f = featureOf(p);
  if (f !== p.species) ids.push(`mix:${p.species}+${f}`);
  return ids;
}

/** Cozy place names for where on the planet something happened. */
export function regionName([x, y, z]: [number, number, number]): string {
  if (y > 0.62) return 'Frosty North';
  if (y < -0.62) return 'Southern Burrows';
  const a = Math.atan2(z, x);
  const names = ['Blossom Meadow', 'Mushroom Glade', 'Pebble Shore', 'Lantern Hollow'];
  return names[Math.floor(((a + Math.PI) / (Math.PI * 2)) * 4) % 4];
}

const cache = new Map<string, string>();

export function sticker(e: DexEntry, found: boolean, size = 112): string {
  const key = `${e.id}:${found}:${size}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  const s = size / 112;
  if (found) {
    // Die-cut sticker look: white blob outline behind the critter.
    ctx.shadowColor = 'rgba(140,90,160,0.25)';
    ctx.shadowBlur = 6 * s;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2 + 4 * s, 44 * s, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  const color = e.kind === 'mix' ? mixColor(e.species, e.feature) : SPECIES[e.species].colors[e.stage];
  drawCritter(ctx, size / 2, size / 2 + 14 * s, 26 * s, {
    color,
    feature: e.feature,
    stage: e.stage,
    happy: true,
    silhouette: found ? undefined : '#cbbfdc',
  });
  if (!found) {
    ctx.fillStyle = '#ffffff';
    ctx.font = `800 ${26 * s}px ui-rounded, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('?', size / 2, size / 2 + 14 * s);
  }
  const url = c.toDataURL('image/png');
  cache.set(key, url);
  return url;
}

function mixColor(a: Species, b: Species): string {
  const pa = hex(SPECIES[a].colors[0]), pb = hex(SPECIES[b].colors[0]);
  const m = pa.map((v, i) => Math.round(v * 0.6 + pb[i] * 0.4));
  return '#' + m.map((v) => v.toString(16).padStart(2, '0')).join('');
}
const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

export function formatWhen(at: number): string {
  return new Date(at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}
