export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Festival {
  id: 'blossom' | 'midsummer' | 'pumpkin' | 'lantern' | 'winterlights';
  name: string;
  emoji: string;
  /** Inclusive month/day range (months 1-12); may wrap over New Year. */
  from: [number, number];
  to: [number, number];
  blurb: string;
}

export const SEASONS: Record<Season, { name: string; emoji: string }> = {
  spring: { name: 'Spring', emoji: '🌸' },
  summer: { name: 'Summer', emoji: '🌻' },
  autumn: { name: 'Autumn', emoji: '🍂' },
  winter: { name: 'Winter', emoji: '❄️' },
};

export const FESTIVALS: Festival[] = [
  { id: 'blossom', name: 'Blossom Festival', emoji: '🌸', from: [4, 1], to: [4, 14], blurb: 'Petals everywhere and bunting in the sky' },
  { id: 'midsummer', name: 'Midsummer', emoji: '🌞', from: [6, 19], to: [6, 25], blurb: 'Flower garlands and the longest days' },
  { id: 'pumpkin', name: 'Pumpkin Night', emoji: '🎃', from: [10, 24], to: [11, 1], blurb: 'Glowing pumpkins all over the planet' },
  { id: 'lantern', name: 'Lantern Festival', emoji: '🏮', from: [11, 8], to: [11, 16], blurb: 'Paper lanterns float up into the sky' },
  { id: 'winterlights', name: 'Winter Lights', emoji: '✨', from: [12, 18], to: [1, 2], blurb: 'Twinkly fairy lights on every tree' },
];

/** `?date=2026-04-05` pins the calendar (tests, screenshots). Time of day stays separate (`?time=`). */
export function parseDateOverride(search = location.search): Date | null {
  const raw = new URLSearchParams(search).get('date');
  const m = raw && /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12);
  return d.getMonth() === Number(m[2]) - 1 ? d : null;
}

/** Meteorological seasons, northern hemisphere. */
export function seasonOf(d: Date): Season {
  const m = d.getMonth() + 1;
  if (m >= 3 && m <= 5) return 'spring';
  if (m >= 6 && m <= 8) return 'summer';
  if (m >= 9 && m <= 11) return 'autumn';
  return 'winter';
}

export function festivalOf(d: Date): Festival | null {
  const md = (d.getMonth() + 1) * 100 + d.getDate();
  for (const f of FESTIVALS) {
    const a = f.from[0] * 100 + f.from[1];
    const b = f.to[0] * 100 + f.to[1];
    if (a <= b ? md >= a && md <= b : md >= a || md <= b) return f;
  }
  return null;
}

export const fmtRange = (f: Festival) => {
  const mon = (m: number) => new Date(2000, m - 1, 1).toLocaleString(undefined, { month: 'short' });
  return `${mon(f.from[0])} ${f.from[1]} – ${mon(f.to[0])} ${f.to[1]}`;
};
