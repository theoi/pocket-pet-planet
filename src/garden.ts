import * as THREE from 'three';
import { mergeByMaterial, toon } from './toon';

export type SeedKind = 'strawberry' | 'blueberry' | 'sunpeach';

export const SEEDS: Record<SeedKind, { name: string; plural: string; emoji: string; hours: number; yield: number; fruit: string; leaf: string }> = {
  strawberry: { name: 'Strawberry', plural: 'strawberries', emoji: '🍓', hours: 30, yield: 3, fruit: '#ff6f91', leaf: '#7fc98f' },
  blueberry: { name: 'Blueberry', plural: 'blueberries', emoji: '🫐', hours: 24, yield: 2, fruit: '#7d8cf0', leaf: '#8fcfa8' },
  sunpeach: { name: 'Sunpeach', plural: 'sunpeaches', emoji: '🍑', hours: 44, yield: 5, fruit: '#ffb36b', leaf: '#9bd38a' },
};
export const SEED_KINDS = Object.keys(SEEDS) as SeedKind[];
export const isSeedKind = (k: unknown): k is SeedKind => typeof k === 'string' && k in SEEDS;

/** Rain or a watering can speeds growth by this much while the soil is wet. */
export const WET_BOOST = 1.5;
/** How long soil stays wet after watering or rain. */
export const WET_MS = 8 * 3600_000;
export const STARTER_SEEDS: Partial<Record<SeedKind, number>> = { strawberry: 3, blueberry: 2 };

export interface PlotData {
  seed?: SeedKind;
  /** Growth so far, in "dry hours" (ripe at SEEDS[seed].hours). */
  grown: number;
  /** Wall-clock time of the last update. */
  at: number;
  wetUntil: number;
  plantedAt?: number;
}

export const emptyPlot = (now: number): PlotData => ({ grown: 0, at: now, wetUntil: 0 });

/** Advance growth to `now` from timestamps alone, so offline time counts exactly (wet hours count 1.5×). */
export function grow(p: PlotData, now: number, extraWet = false): void {
  const from = p.at;
  p.at = now;
  if (!p.seed || now <= from) return;
  const total = (now - from) / 3600_000;
  const wetEnd = extraWet ? now : Math.min(now, p.wetUntil);
  const wet = Math.max(0, (wetEnd - from) / 3600_000);
  p.grown = Math.min(SEEDS[p.seed].hours, p.grown + total + wet * (WET_BOOST - 1));
}

export function progress(p: PlotData): number {
  return p.seed ? Math.min(1, p.grown / SEEDS[p.seed].hours) : 0;
}

/** 0 empty, 1 sprout, 2 leafy, 3 flowering, 4 ripe. */
export function stageOf(p: PlotData): number {
  if (!p.seed) return 0;
  const k = progress(p);
  return k >= 1 ? 4 : k >= 0.6 ? 3 : k >= 0.25 ? 2 : 1;
}
export const STAGE_NAMES = ['Empty plot', 'Sprouting', 'Leafy', 'Flowering', 'Ripe!'];

/** Hours left to ripen at the dry rate. */
export const hoursLeft = (p: PlotData) => (p.seed ? Math.max(0, SEEDS[p.seed].hours - p.grown) : 0);

export function cleanGarden(raw: unknown, now: number): { plots: Record<string, PlotData>; seeds: Partial<Record<SeedKind, number>> } | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const r = raw as { plots?: unknown; seeds?: unknown };
  const plots: Record<string, PlotData> = {};
  if (r.plots && typeof r.plots === 'object')
    for (const [id, v] of Object.entries(r.plots as Record<string, Partial<PlotData>>)) {
      if (!v || typeof v !== 'object') continue;
      const n = (x: unknown, d: number) => (typeof x === 'number' && Number.isFinite(x) ? x : d);
      const seed = isSeedKind(v.seed) ? v.seed : undefined;
      plots[id] = { ...(seed ? { seed } : {}), grown: Math.max(0, n(v.grown, 0)), at: Math.min(now, n(v.at, now)), wetUntil: n(v.wetUntil, 0), ...(seed && v.plantedAt ? { plantedAt: n(v.plantedAt, now) } : {}) };
    }
  const seeds: Partial<Record<SeedKind, number>> = {};
  if (r.seeds && typeof r.seeds === 'object')
    for (const [k, v] of Object.entries(r.seeds as Record<string, unknown>)) if (isSeedKind(k) && typeof v === 'number' && v > 0) seeds[k] = Math.floor(Math.min(99, v));
  return { plots, seeds };
}

const sphere = new THREE.SphereGeometry(1, 10, 8);
const cone = new THREE.ConeGeometry(1, 1, 6);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 8);

/** The plant growing in a plot (rebuilt when its stage changes). Built at decoration scale (before DECOR_SCALE). */
export function plantModel(p: PlotData): THREE.Group {
  const g = new THREE.Group();
  const stage = stageOf(p);
  if (!p.seed || stage === 0) return g;
  const s = SEEDS[p.seed];
  const spots: [number, number][] = [[-0.045, -0.03], [0.045, -0.03], [0, 0.04]];
  for (const [x, z] of spots) {
    if (stage === 1) {
      for (const sx of [-1, 1]) {
        const leaf = new THREE.Mesh(sphere, toon(s.leaf));
        leaf.position.set(x + sx * 0.012, 0.04, z);
        leaf.rotation.z = sx * 0.5;
        leaf.scale.set(0.02, 0.009, 0.013);
        g.add(leaf);
      }
      continue;
    }
    const h = stage === 2 ? 0.075 : 0.1;
    const bush = new THREE.Mesh(sphere, toon(s.leaf));
    bush.position.set(x, 0.03 + h * 0.4, z);
    bush.scale.set(stage === 2 ? 0.032 : 0.04, h * 0.5, stage === 2 ? 0.032 : 0.04);
    g.add(bush);
    if (stage === 3)
      for (let i = 0; i < 2; i++) {
        const fl = new THREE.Mesh(sphere, toon('#ffffff'));
        fl.position.set(x + (i ? 0.02 : -0.018), 0.03 + h * 0.75, z + (i ? -0.016 : 0.018));
        fl.scale.setScalar(0.014);
        g.add(fl);
      }
    if (stage === 4)
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const fr = new THREE.Mesh(p.seed === 'strawberry' ? cone : sphere, toon(s.fruit));
        fr.position.set(x + Math.cos(a) * 0.036, 0.03 + h * 0.55, z + Math.sin(a) * 0.036);
        if (p.seed === 'strawberry') {
          fr.scale.set(0.017, 0.028, 0.017);
          fr.rotation.x = Math.PI; // point down like a berry
        } else fr.scale.setScalar(p.seed === 'sunpeach' ? 0.024 : 0.017);
        g.add(fr);
      }
  }
  if (stage === 4) {
    const sign = new THREE.Mesh(cyl, toon('#c99a7a'));
    sign.position.set(0.08, 0.05, 0.07);
    sign.scale.set(0.004, 0.08, 0.004);
    g.add(sign);
    const card = new THREE.Mesh(sphere, toon(s.fruit));
    card.position.set(0.08, 0.095, 0.07);
    card.scale.set(0.018, 0.018, 0.006);
    g.add(card);
  }
  mergeByMaterial(g);
  return g;
}
