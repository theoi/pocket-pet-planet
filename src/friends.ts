/** Friendship points between two pets (0–100), keyed by their ids in sorted order. */
export type Friendships = Record<string, number>;

export interface DiaryEntry {
  at: number;
  icon: string;
  text: string;
  /** Entries with the same key are written only once (e.g. one per festival per year). */
  key?: string;
}

export const DIARY_CAP = 80;
export const FRIEND_MAX = 100;

export const LEVELS = [
  { min: 50, name: 'Best friends', hearts: 3 },
  { min: 25, name: 'Friends', hearts: 2 },
  { min: 8, name: 'Pals', hearts: 1 },
] as const;

export const pairKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

export function levelOf(points: number): (typeof LEVELS)[number] | null {
  return LEVELS.find((l) => points >= l.min) ?? null;
}

export const heartsOf = (points: number) => {
  const n = levelOf(points)?.hearts ?? 0;
  return '♥'.repeat(n) + '♡'.repeat(3 - n);
};

/** Add points; returns the new level when the pair just reached a higher one. */
export function befriend(f: Friendships, a: string, b: string, amount: number): (typeof LEVELS)[number] | null {
  if (a === b) return null;
  const k = pairKey(a, b);
  const before = f[k] ?? 0;
  const after = Math.min(FRIEND_MAX, before + amount);
  f[k] = Math.round(after * 1000) / 1000;
  const l0 = levelOf(before), l1 = levelOf(after);
  return l1 && l1 !== l0 ? l1 : null;
}

/** A pet's friends, best first. */
export function friendsOf(f: Friendships, id: string): { id: string; points: number }[] {
  const out: { id: string; points: number }[] = [];
  for (const [k, points] of Object.entries(f)) {
    const [a, b] = k.split('|');
    if (a === id) out.push({ id: b, points });
    else if (b === id) out.push({ id: a, points });
  }
  return out.sort((x, y) => y.points - x.points);
}

/** Drop friendships with pets that no longer exist and junk values from old or hand-edited saves. */
export function cleanFriendships(raw: unknown, ids: string[]): Friendships {
  const out: Friendships = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    const [a, b] = k.split('|');
    if (typeof v !== 'number' || !Number.isFinite(v) || !ids.includes(a) || !ids.includes(b) || a === b) continue;
    out[pairKey(a, b)] = Math.min(FRIEND_MAX, Math.max(0, v));
  }
  return out;
}

export function cleanDiary(raw: unknown): DiaryEntry[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((e) => e && typeof e.at === 'number' && Number.isFinite(e.at) && typeof e.text === 'string' && typeof e.icon === 'string')
    .map((e) => ({ at: e.at, icon: e.icon, text: e.text.slice(0, 140), ...(typeof e.key === 'string' ? { key: e.key } : {}) }))
    .slice(-DIARY_CAP);
}

/** Append an entry (oldest first), keeping only the newest DIARY_CAP. Returns false for a duplicate key. */
export function writeDiary(diary: DiaryEntry[], entry: DiaryEntry): boolean {
  if (entry.key && diary.some((e) => e.key === entry.key)) return false;
  diary.push(entry);
  if (diary.length > DIARY_CAP) diary.splice(0, diary.length - DIARY_CAP);
  return true;
}

export const and = (names: string[]) => (names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`);

/** "Today", "Yesterday" or a short date, for grouping diary pages. */
export function dayLabel(at: number, now = Date.now()): string {
  const d = new Date(at), n = new Date(now);
  const day = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const diff = Math.round((day(n) - day(d)) / 86_400_000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  return d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: d.getFullYear() === n.getFullYear() ? undefined : 'numeric' });
}
