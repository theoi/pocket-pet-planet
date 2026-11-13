import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';
import { FX } from './fx';
import { Pet } from './pet';
import { Sound } from './audio';
import { accessoryById, ACCESSORIES, giftsFor, isAvailable, isSeasonal, unlockedAt } from './accessories';
import { SeasonFX } from './seasonfx';
import { cardSize, deliver, drawPostcard, exportPostcard, FRAMES, postcardName, STICKERS, type Postcard, type Sticker } from './photobooth';
import { buildDecor, DECOR_CAP, DECOR_KINDS, isDecorKind, place, setRing, spotProblem, type Decor, type DecorKind } from './decorate';
import { BREED_FOOD, BREED_JOY, Egg, EGG_COOLDOWN_MS, EGG_HATCH_MS, makeBaby, POPULATION_CAP } from './eggs';
import { SAVE_KEY, clearSave, decay, formName, load, MAX_STAGE, moodOf, save, STAGE_CARE, type PetData } from './state';
import { DayNight, parseTimeOverride } from './daynight';
import { colorOf, featureOf } from './eggs';
import { FruitCatch } from './minigame';
import { DEX, dexEntry, entriesFor, formatWhen, regionName, sticker } from './dex';
import { parseWeatherOverride, Weather } from './weather';
import { buildWorld, R } from './world';
import { FESTIVALS, festivalOf, fmtRange, parseDateOverride, SEASONS, seasonOf } from './seasons';
import { and, befriend, dayLabel, friendsOf, heartsOf, levelOf, LEVELS, pairKey, writeDiary } from './friends';

const HOUR = 3600_000;
const debugMode = new URLSearchParams(location.search).has('debug');
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

const sound = new Sound();
const muteBtn = document.getElementById('muteBtn')!;
const showMute = () => {
  muteBtn.textContent = sound.muted ? '🔇' : '🔊';
  muteBtn.setAttribute('aria-pressed', String(sound.muted));
  muteBtn.setAttribute('aria-label', sound.muted ? 'Sound off' : 'Sound on');
};
showMute();
muteBtn.addEventListener('click', () => {
  sound.setMuted(!sound.muted);
  showMute();
});

// --- scene ---------------------------------------------------------------
const app = $('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
scene.add(camera);
const startDistance = () => (camera.aspect < 0.8 ? 10 : 7.4);
camera.position.set(0, 0.55, 1).normalize().multiplyScalar(startDistance());

const hemi = new THREE.HemisphereLight('#fff6fb', '#c9b3e6', 1.6);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffffff', 1.5);
sun.position.set(3, 4, 5);
camera.add(sun); // light follows the camera so the side you look at is always sunny

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.rotateSpeed = 0.6;
controls.zoomSpeed = 0.8;
controls.minDistance = 3.4;
controls.maxDistance = 13;
controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

const calendarOverride = parseDateOverride();
const today = () => calendarOverride ?? new Date();
const season = seasonOf(today());
const festival = festivalOf(today());
const world = buildWorld(scene, season);
const fx = new FX(scene);
const seasonFx = new SeasonFX(scene, world, season, festival);
const timeOverride = parseTimeOverride();
const dayNight = new DayNight(scene, hemi, sun, timeOverride, world.halo);
const awakeUntil = new WeakMap<Pet, number>();
const wake = (pet: Pet) => {
  awakeUntil.set(pet, performance.now() + 45_000);
  if (visits.get(pet)?.arrived) endVisit(pet);
};

// --- state ---------------------------------------------------------------
const loaded = load();
const game = loaded.data;
const pets = game.pets.map((d) => new Pet(d));
for (const p of pets) scene.add(p.group);
const eggs = game.eggs.map((d) => new Egg(d));
for (const e of eggs) scene.add(e.group);
let selected: Pet | null = null;
let resetting = false;
const weather = new Weather(scene, camera, world, parseWeatherOverride(), game.flowers);
if (loaded.offlineMs > 0) weather.dryOut(loaded.offlineMs);
weather.onBloom = (pos, up) => {
  fx.sparkles(pos, up, 6, 0.25);
  sound.play('bloom');
};

const tabClaim = performance.timeOrigin + Math.random();
const decorList: Decor[] = [];
let decorBuilt = false;
const persist = () => {
  if (resetting) return;
  game.pets = pets.map((p) => p.data);
  game.eggs = eggs.map((e) => e.data);
  game.flowers = weather.blooms.map((b) => Math.round(b * 1000) / 1000);
  // Saves made before the decorations are built keep the saved list untouched.
  if (decorBuilt) game.decor = decorList.map((d) => d.data);
  save(game, tabClaim);
};
const addCare = (d: PetData, amount: number) => {
  const before = unlockedAt(game.totalCare).length;
  d.care += amount;
  game.totalCare += amount;
  const now = unlockedAt(game.totalCare);
  if (now.length > before) {
    const a = now[now.length - 1];
    toast(`New outfit unlocked: ${a.emoji} ${a.name}!`);
    sound.play('unlock');
    renderWardrobe();
  }
};

const toastQueue: string[] = [];
let toastBusyUntil = 0;
/** Toasts queue up, so a festival greeting never hides a "new sticker" message and vice versa. */
function toast(text: string) {
  const now = performance.now();
  if (now < toastBusyUntil) {
    if (!toastQueue.includes(text)) toastQueue.push(text);
    return;
  }
  toastBusyUntil = now + 2600;
  setTimeout(() => {
    const next = toastQueue.shift();
    if (next) {
      toastBusyUntil = 0;
      toast(next);
    }
  }, 2650);
  showToast(text);
}
function showToast(text: string) {
  const el = document.getElementById('toast')!;
  el.textContent = text;
  el.classList.remove('hidden');
  // Restart the CSS animation for back-to-back toasts.
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.add('hidden'), 3300);
}
let toastTimer = 0;

function renderWardrobe() {
  const box = document.getElementById('wardrobeItems')!;
  if (!selected || document.getElementById('wardrobe')!.classList.contains('hidden')) return;
  const wear = selected.data.wear ?? {};
  const owned = game.outfits ?? [];
  // Seasonal gifts you own come first; ones from other seasons show as locked teasers at the end.
  const order = [...ACCESSORIES.filter((a) => isSeasonal(a) && owned.includes(a.id)), ...ACCESSORIES.filter((a) => !isSeasonal(a)), ...ACCESSORIES.filter((a) => isSeasonal(a) && !owned.includes(a.id))];
  box.replaceChildren(
    ...order.map((a) => {
      const b = document.createElement('button');
      const unlocked = isAvailable(a, game.totalCare, owned);
      const when = a.season ? SEASONS[a.season].name : a.festival ? FESTIVALS.find((f) => f.id === a.festival)!.name : '';
      const on = wear[a.slot] === a.id;
      b.className = 'chip' + (on ? ' on' : '');
      b.dataset.id = a.id;
      b.disabled = !unlocked;
      if (isSeasonal(a)) b.classList.add('seasonal');
      b.title = unlocked ? a.name : when ? `A gift during ${when}` : `Unlocks at ${a.unlock} care`;
      b.innerHTML = `<span class="e">${unlocked ? a.emoji : '🔒'}</span><span>${unlocked ? a.name : when || `${a.unlock} care`}</span>`;
      b.addEventListener('click', () => toggleWear(a.id));
      return b;
    }),
  );
  const next = ACCESSORIES.find((a) => game.totalCare < a.unlock);
  document.getElementById('wardrobeNote')!.textContent = `Planet care: ${Math.floor(game.totalCare)} ✨ ${next ? `· next unlock at ${next.unlock}` : '· everything unlocked!'}`;
}

function toggleWear(id: string) {
  const a = accessoryById(id);
  if (!selected || !a || !isAvailable(a, game.totalCare, game.outfits ?? [])) return;
  const d = selected.data;
  d.wear = { ...d.wear };
  if (d.wear[a.slot] === id) delete d.wear[a.slot];
  else {
    d.wear[a.slot] = id;
    fx.sparkles(selected.headWorld(), selected.up, 10, 0.4);
    sound.play('wear');
    selected.react('pet');
  }
  selected.build();
  persist();
  renderWardrobe();
}
persist();
setInterval(persist, 3000);
// Another tab saved: stop autosaving here so we never overwrite its newer planet. Reloading makes this tab the
// active one again (its first save then parks the other tab the same way), so two tabs never ping-pong.
window.addEventListener('storage', (e) => {
  if (e.key !== SAVE_KEY || resetting) return;
  let claim = Infinity; // a cleared or foreign write also parks us
  try {
    claim = (e.newValue && JSON.parse(e.newValue).claim) ?? Infinity;
  } catch {
    // unreadable: treat as someone else's
  }
  // An older tab's last autosaves before it notices us must not park the newer tab.
  if (claim <= tabClaim) return;
  resetting = true;
  $('staleBanner').classList.remove('hidden');
});
$('staleReload').addEventListener('click', () => location.reload());

// --- collect-a-dex -------------------------------------------------------
game.dex ??= {};
const dex = game.dex;
const freshStickers = new Set<string>();
/** Record anything new that pets on the planet show; quiet for saves made before the dex existed. */
function scanDex(mode: 'loud' | 'quiet' | 'backfill' = 'loud'): void {
  const quiet = mode !== 'loud';
  const found: string[] = [];
  for (const p of pets) {
    for (const id of entriesFor(p.data)) {
      if (dex[id]) continue;
      dex[id] = { at: Date.now(), by: p.data.name, where: regionName(p.data.pos), ...(mode === 'backfill' ? { backfilled: true } : {}) };
      found.push(id);
    }
  }
  if (!found.length) return;
  updateDexCount();
  persist();
  if (quiet) return;
  for (const id of found) freshStickers.add(id);
  const names = found.map((id) => dexEntry(id)!.name);
  toast(`New sticker${names.length > 1 ? 's' : ''}! 📖 ${names.join(', ')}`);
  sound.play('unlock');
  if (!$('dex').classList.contains('hidden')) renderDex();
}
function updateDexCount() {
  $('dexCount').textContent = `${Object.keys(dex).filter((id) => dexEntry(id)).length}/${DEX.length}`;
}
function renderDex() {
  const n = DEX.filter((e) => dex[e.id]).length;
  $('dexProgress').textContent = `${n} / ${DEX.length} stickers`;
  $('dexBar').style.width = `${(n / DEX.length) * 100}%`;
  const card = (e: (typeof DEX)[number]) => {
    const d = dex[e.id];
    const el = document.createElement('div');
    el.className = 'sticker ' + (d ? 'found' : 'locked') + (freshStickers.has(e.id) ? ' new' : '');
    el.dataset.id = e.id;
    const img = document.createElement('img');
    img.alt = d ? e.name : 'Undiscovered';
    img.src = sticker(e, !!d);
    const name = document.createElement('div');
    name.className = 'n';
    name.textContent = d ? e.name : '???';
    const meta = document.createElement('div');
    meta.className = 'm';
    meta.textContent = d ? `${d.backfilled ? 'Recorded' : 'Found'} ${formatWhen(d.at)} · ${d.where} · by ${d.by}` : e.hint;
    el.append(img, name, meta);
    return el;
  };
  $('dexForms').replaceChildren(...DEX.filter((e) => e.kind === 'form').map(card));
  $('dexMixes').replaceChildren(...DEX.filter((e) => e.kind === 'mix').map(card));
}
$('dexBtn').addEventListener('click', () => {
  select(null);
  renderDex();
  $('dex').classList.remove('hidden');
});
const closeDex = () => {
  $('dex').classList.add('hidden');
  freshStickers.clear();
};
$('dexClose').addEventListener('click', closeDex);
$('dex').addEventListener('click', (e) => {
  if (e.target === $('dex')) closeDex();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('dex').classList.contains('hidden')) closeDex();
});
// A brand-new planet's starters are simply "found"; an older save's pets are "recorded" retroactively.
scanDex(loaded.fresh ? 'quiet' : Object.keys(dex).length === 0 ? 'backfill' : 'loud');
updateDexCount();

// --- seasons & festivals -------------------------------------------------
let welcomeGifts: string[] = [];
{
  game.outfits ??= [];
  const gifts = giftsFor(season, festival?.id).filter((a) => !game.outfits!.includes(a.id));
  game.outfits.push(...gifts.map((a) => a.id));
  welcomeGifts = gifts.map((a) => `${a.emoji} ${a.name}`);
  const badge = $('seasonBadge');
  badge.textContent = festival ? `${festival.emoji} ${festival.name}` : `${SEASONS[season].emoji} ${SEASONS[season].name}`;
  badge.title = festival ? `${festival.blurb} (${fmtRange(festival)})` : SEASONS[season].name;
  badge.addEventListener('click', () =>
    toast(festival ? `${festival.emoji} ${festival.name}: ${festival.blurb}! (${fmtRange(festival)})` : `${SEASONS[season].emoji} It's ${SEASONS[season].name.toLowerCase()} on the planet`),
  );
  const parts: string[] = [];
  if (festival) parts.push(`${festival.emoji} ${festival.name} is on!`);
  if (gifts.length) parts.push(`Gift${gifts.length > 1 ? 's' : ''}: ${gifts.map((a) => `${a.emoji} ${a.name}`).join(', ')}`);
  if (parts.length) setTimeout(() => toast(parts.join(' · ')), 900);
  if (gifts.length) persist();
}
// --- friendships & diary -------------------------------------------------
const oldSave = !loaded.fresh && game.diary === undefined;
game.friends ??= {};
game.diary ??= [];
const friends = game.friends;
const diary = game.diary;
const petById = (id: string) => pets.find((p) => p.data.id === id);
let diarySeen = Number(localStorage.getItem('pocket-pet-planet:diarySeen')) || 0;
function note(icon: string, text: string, key?: string): boolean {
  if (!writeDiary(diary, { at: Date.now(), icon, text, key })) return false;
  persist();
  updateDiaryDot();
  if (!$('diary').classList.contains('hidden')) renderDiary();
  return true;
}
/** Like note(), but skips text already written within `withinMs` (so naps and visits don't flood the diary). */
function noteNow(icon: string, text: string, withinMs: number): boolean {
  const since = Date.now() - withinMs;
  if (diary.some((e) => e.text === text && e.at > since)) return false;
  return note(icon, text);
}
function updateDiaryDot() {
  $('diaryDot').classList.toggle('hidden', !diary.some((e) => e.at > diarySeen));
}
const isFamily = (a: PetData, b: PetData) =>
  !!(a.parentIds?.includes(b.id) || b.parentIds?.includes(a.id) || a.parents?.includes(b.name) || b.parents?.includes(a.name));
const LEVEL_TEXT: Record<string, [string, string]> = { Pals: ['🤝', 'became pals'], Friends: ['🌼', 'are friends now'], 'Best friends': ['💞', 'became best friends'] };
function friendGain(a: Pet, b: Pet, amount: number) {
  const lvl = befriend(friends, a.data.id, b.data.id, amount);
  if (!lvl) return;
  const [icon, text] = LEVEL_TEXT[lvl.name];
  note(icon, `${a.data.name} and ${b.data.name} ${text}`, `lvl:${pairKey(a.data.id, b.data.id)}:${lvl.name}`);
  fx.hearts(a.headWorld(), a.up, 4);
  fx.hearts(b.headWorld(), b.up, 4);
  if (lvl.hearts >= 2) {
    toast(`${icon} ${a.data.name} and ${b.data.name} ${text}!`);
    sound.play('unlock');
  }
  if (selected === a || selected === b) refreshPanel();
}
{
  const year = today().getFullYear();
  const names = pets.map((p) => p.data.name);
  if (loaded.fresh) note('🏡', `${and(names)} moved onto the planet`, 'start');
  else if (oldSave) {
    note('📔', `Started a diary for ${and(names)}`, 'start');
    // Families already on the planet start out as friends.
    for (const c of pets)
      for (const p of pets) if (c !== p && isFamily(c.data, p.data) && (c.data.parentIds?.includes(p.data.id) || c.data.parents?.includes(p.data.name))) befriend(friends, c.data.id, p.data.id, 30);
  }
  const seasonYear = today().getMonth() < 2 ? year - 1 : year;
  note(SEASONS[season].emoji, `${SEASONS[season].name} came to the planet`, `season:${season}:${seasonYear}`);
  if (festival) note(festival.emoji, `The ${festival.name} began: ${festival.blurb.toLowerCase()}`, `fest:${festival.id}:${today().getMonth() === 0 ? year - 1 : year}`);
  if (welcomeGifts.length) note('🎁', `Got ${and(welcomeGifts)} as a ${festival ? festival.name : SEASONS[season].name.toLowerCase()} gift`);
  persist();
}

const seeks = new Map<Pet, { friend: Pet; until: number }>();
function endSeek(p: Pet) {
  if (!seeks.delete(p)) return;
  p.goal = null;
}
/** Every 1.5 s of planet time: pets near each other grow closer, and best friends go and find each other. */
function friendTick(now: number) {
  for (let i = 0; i < pets.length; i++)
    for (let j = i + 1; j < pets.length; j++) {
      const a = pets[i], b = pets[j];
      if (a.evolving || b.evolving) continue;
      const va = visits.get(a), vb = visits.get(b);
      let gain = 0;
      if (va && vb && va.decor === vb.decor && va.arrived && vb.arrived) {
        gain = va.kind === 'nap' ? 0.6 : 0.8;
        const spot = DECOR_KINDS.find((k) => k.kind === va.decor.data.kind)!;
        const where = spot.name.toLowerCase();
        if (va.kind === 'nap') noteNow('😴', `${a.data.name} and ${b.data.name} napped together in the ${where}`, 3 * HOUR);
        else noteNow(spot.emoji, `${a.data.name} and ${b.data.name} hung out by the ${where}`, 3 * HOUR);
      } else {
        const angle = a.up.angleTo(b.up);
        if (angle < 0.35) gain = a.sleeping && b.sleeping ? 0.04 : a.sleeping || b.sleeping ? 0 : 0.08;
      }
      if (!gain) continue;
      if (isFamily(a.data, b.data)) gain *= 1.5;
      friendGain(a, b, gain);
    }
  for (const p of pets) {
    if (seeks.has(p) || p === selected || p.goal || p.sleeping || p.evolving || visits.has(p) || courtship?.a === p || courtship?.b === p) continue;
    const best = friendsOf(friends, p.data.id)[0];
    const f = best && best.points >= LEVELS[0].min ? petById(best.id) : undefined;
    if (!f || f.sleeping || f.evolving || seeks.get(f)?.friend === p || p.up.angleTo(f.up) < 0.6 || Math.random() > 0.12) continue;
    seeks.set(p, { friend: f, until: now + 60_000 });
  }
}
function seekFrame(now: number) {
  for (const [p, s] of seeks) {
    const f = s.friend;
    if (!pets.includes(f) || p === selected || p.sleeping || now > s.until || visits.has(p)) {
      endSeek(p);
      continue;
    }
    if (p.up.angleTo(f.up) < 0.22) {
      endSeek(p);
      p.facing = f.group.position;
      fx.hearts(p.headWorld(), p.up, 4);
      fx.hearts(f.headWorld(), f.up, 3);
      floater(p, `💞 ${f.data.name}!`);
      friendGain(p, f, 1);
      noteNow('💞', `${p.data.name} went looking for best friend ${f.data.name}`, 3 * HOUR);
      continue;
    }
    const side = p.up.clone().addScaledVector(f.up, -f.up.dot(p.up));
    if (side.lengthSq() < 1e-6) side.copy(f.forward);
    p.goal = f.up.clone().addScaledVector(side.normalize(), 0.15).normalize();
  }
}

function renderFriends(d: PetData) {
  const list = friendsOf(friends, d.id)
    .filter((f) => levelOf(f.points) && petById(f.id))
    .slice(0, 3);
  const sig = list.map((f) => `${f.id}:${heartsOf(f.points)}:${petById(f.id)!.data.name}`).join(',') + '|' + d.id;
  const box = $('petFriends');
  if (box.dataset.sig === sig) return;
  box.dataset.sig = sig;
  if (!list.length) {
    box.innerHTML = '<span class="soft">No friends yet. Pets who play near each other become friends.</span>';
    return;
  }
  box.replaceChildren(
    ...list.map((f) => {
      const p = petById(f.id)!;
      const b = document.createElement('button');
      b.className = 'friend';
      b.dataset.id = f.id;
      b.title = levelOf(f.points)!.name;
      b.innerHTML = `<span class="fn"></span> <span class="h">${heartsOf(f.points)}</span>`;
      b.querySelector('.fn')!.textContent = p.data.name;
      b.addEventListener('click', () => select(p));
      return b;
    }),
  );
}

function renderDiary() {
  const pairs = Object.entries(friends)
    .filter(([k, v]) => levelOf(v) && k.split('|').every((id) => petById(id)))
    .sort((x, y) => y[1] - x[1])
    .slice(0, 6);
  const pairBox = $('diaryPairs');
  pairBox.replaceChildren(
    ...pairs.map(([k, v]) => {
      const row = document.createElement('div');
      row.className = 'pair';
      row.dataset.pair = k;
      row.innerHTML = '<span></span><b class="h"></b><i></i>';
      row.children[0].textContent = k.split('|').map((id) => petById(id)!.data.name).join(' & ');
      row.children[1].textContent = heartsOf(v);
      row.children[2].textContent = levelOf(v)!.name;
      return row;
    }),
  );
  if (!pairs.length) pairBox.innerHTML = '<p class="soft">No friendships yet. Pets who play near each other become friends.</p>';
  const box = $('diaryEntries');
  box.replaceChildren();
  let day = '';
  for (const e of [...diary].reverse()) {
    const label = dayLabel(e.at);
    if (label !== day) {
      day = label;
      const h = document.createElement('h3');
      h.textContent = label;
      box.append(h);
    }
    const row = document.createElement('div');
    row.className = 'entry' + (e.at > diarySeen ? ' new' : '');
    const t = new Date(e.at);
    row.innerHTML = '<span class="t"></span><span class="i"></span><span class="x"></span>';
    row.children[0].textContent = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
    row.children[1].textContent = e.icon;
    row.children[2].textContent = e.text;
    box.append(row);
  }
  $('diaryCount').textContent = `${diary.length} ${diary.length === 1 ? 'page' : 'pages'} · newest first`;
}
$('diaryBtn').addEventListener('click', () => {
  select(null);
  renderDiary();
  $('diary').classList.remove('hidden');
  $('diaryEntries').scrollTop = 0;
  diarySeen = Date.now();
  localStorage.setItem('pocket-pet-planet:diarySeen', String(diarySeen));
  updateDiaryDot();
});
const closeDiary = () => $('diary').classList.add('hidden');
$('diaryClose').addEventListener('click', closeDiary);
$('diary').addEventListener('click', (e) => {
  if (e.target === $('diary')) closeDiary();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDiary();
});
updateDiaryDot();

window.addEventListener('pagehide', persist);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') persist();
});

// --- HUD -----------------------------------------------------------------
const panel = $('panel');
const tag = $('tag');
const floaters = $('floaters');
const renameForm = $<HTMLFormElement>('renameForm');
const renameInput = $<HTMLInputElement>('renameInput');

const toScreen = (v: THREE.Vector3) => {
  const p = v.clone().project(camera);
  return { x: (p.x * 0.5 + 0.5) * window.innerWidth, y: (-p.y * 0.5 + 0.5) * window.innerHeight, behind: p.z > 1 };
};
const facesCamera = (pet: Pet) => pet.up.dot(camera.position) > 2.1;

function floater(pet: Pet, text: string) {
  const s = toScreen(pet.headWorld());
  floatAt(s.x, s.y, text);
}

function floatAt(x: number, y: number, text: string) {
  const el = document.createElement('div');
  el.className = 'floater';
  el.textContent = text;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  floaters.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function refreshPanel() {
  if (!selected) return;
  const d = selected.data;
  const mood = selected.sleeping ? { label: 'Sleeping', emoji: '😴' } : moodOf(d);
  $('petName').textContent = d.name;
  $('petForm').textContent = formName(d);
  const fam = $('petFamily');
  fam.classList.toggle('hidden', !d.parents);
  if (d.parents) fam.textContent = `Child of ${d.parents[0]} & ${d.parents[1]}`;
  renderFriends(d);
  $('moodEmoji').textContent = mood.emoji;
  $('moodLabel').textContent = mood.label;
  $('foodBar').style.width = `${d.food.toFixed(1)}%`;
  $('joyBar').style.width = `${d.joy.toFixed(1)}%`;
  const careBar = $('careBar');
  const note = $('careNote');
  if (d.stage >= MAX_STAGE) {
    careBar.style.width = '100%';
    note.textContent = 'Fully grown ✨ What a star!';
  } else {
    const lo = d.stage === 0 ? 0 : STAGE_CARE[d.stage - 1];
    const hi = STAGE_CARE[d.stage];
    careBar.style.width = `${Math.min(100, ((d.care - lo) / (hi - lo)) * 100).toFixed(1)}%`;
    const left = Math.max(0, hi - d.care);
    note.textContent = left > 0 ? `${Math.ceil(left)} more care to evolve ✨ (feed when peckish)` : 'Ready to evolve!';
  }
  tag.textContent = d.name;
}

function select(pet: Pet | null) {
  if (selected === pet) return;
  selected?.setSelected(false);
  if (selected) selected.facing = null;
  selected = pet;
  renameForm.classList.add('hidden');
  $('wardrobe').classList.add('hidden');
  document.body.classList.toggle('panel-open', !!pet);
  if (pet) {
    sound.play('select');
    pet.setSelected(true);
    panel.classList.remove('hidden');
    tag.classList.remove('hidden');
    refreshPanel();
  } else {
    panel.classList.add('hidden');
    tag.classList.add('hidden');
  }
}

function checkEvolve(pet: Pet) {
  const d = pet.data;
  if (d.stage >= MAX_STAGE || d.care < STAGE_CARE[d.stage] || pet.evolving) return;
  d.stage += 1;
  persist();
  fx.sparkles(pet.centerWorld(), pet.up, 18, 0.5);
  pet.evolve(() => {
    fx.sparkles(pet.centerWorld(), pet.up, 45, 1.1);
    sound.play('evolve');
    floater(pet, `✨ ${formName(d)}! ✨`);
    note('✨', `${d.name} evolved into ${formName(d)}`);
    refreshPanel();
    scanDex();
  });
}

function feed(pet: Pet) {
  const d = pet.data;
  if (pet.evolving) return;
  if (d.food >= 90) {
    pet.react('full');
    sound.play('full');
    floater(pet, 'Too full!');
    return;
  }
  wake(pet);
  d.food = Math.min(100, d.food + 30);
  d.joy = Math.min(100, d.joy + 8);
  addCare(d, 1);
  persist();
  sound.play('feed');
  fx.berry(
    () => pet.headWorld().addScaledVector(pet.up, -pet.size * 0.4),
    () => pet.up,
    () => {
      pet.react('feed');
      fx.hearts(pet.headWorld(), pet.up, 6);
      floater(pet, 'Yum!');
      refreshPanel();
      checkEvolve(pet);
    },
  );
  refreshPanel();
}

function treat(pet: Pet) {
  const d = pet.data;
  if (pet.evolving || game.snacks <= 0) return;
  game.snacks -= 1;
  wake(pet);
  d.food = Math.min(100, d.food + 35);
  d.joy = Math.min(100, d.joy + 18);
  addCare(d, 1.5);
  persist();
  updateSnacks();
  sound.play('treat');
  fx.berry(
    () => pet.headWorld().addScaledVector(pet.up, -pet.size * 0.4),
    () => pet.up,
    () => {
      pet.react('feed');
      fx.hearts(pet.headWorld(), pet.up, 8);
      fx.sparkles(pet.headWorld(), pet.up, 8, 0.3);
      floater(pet, 'Sweet treat! ✨');
      refreshPanel();
      checkEvolve(pet);
    },
  );
}

function updateSnacks() {
  $('snackCount').textContent = String(game.snacks);
  $('treatCount').textContent = game.snacks > 0 ? `(${game.snacks})` : '';
  ($('treatBtn') as HTMLButtonElement).disabled = game.snacks <= 0;
}
updateSnacks();

// --- mini-game -----------------------------------------------------------
let miniGame: FruitCatch | null = null;
function openMiniGame() {
  if (miniGame) return;
  const pet = selected ?? [...pets].sort((a, b) => b.data.joy - a.data.joy)[0];
  const d = pet.data;
  select(null);
  sound.setFocus(true);
  miniGame = new FruitCatch(
    { name: d.name, color: colorOf(d), feature: featureOf(d) },
    (score) => {
      sound.play('gameEnd');
      game.snacks += score;
      d.joy = Math.min(100, d.joy + 15);
      wake(pet);
      persist();
      updateSnacks();
    },
    () => {
      miniGame = null;
      sound.setFocus(false);
      clock.getDelta();
      pet.react('feed');
      fx.hearts(pet.headWorld(), pet.up, 5);
    },
  );
}
$('playBtn').addEventListener('click', () => {
  openMiniGame();
  if (miniGame) miniGame.onCatch = (combo) => sound.play('catch', combo);
});

const lastPetAt = new WeakMap<Pet, number>();
function cuddle(pet: Pet) {
  const d = pet.data;
  if (pet.evolving) return;
  wake(pet);
  d.joy = Math.min(100, d.joy + 12);
  const now = performance.now();
  if (now - (lastPetAt.get(pet) ?? 0) > 3000) addCare(d, 0.25);
  lastPetAt.set(pet, now);
  pet.react('pet');
  sound.purr();
  fx.hearts(pet.headWorld(), pet.up, 4);
  floater(pet, '♥');
  persist();
  refreshPanel();
  checkEvolve(pet);
}

$('feedBtn').addEventListener('click', () => selected && feed(selected));
$('treatBtn').addEventListener('click', () => selected && treat(selected));
$('petBtn').addEventListener('click', () => selected && cuddle(selected));
$('close').addEventListener('click', () => select(null));
$('wearBtn').addEventListener('click', () => {
  $('wardrobe').classList.toggle('hidden');
  renameForm.classList.add('hidden');
  renderWardrobe();
});
$('renameBtn').addEventListener('click', () => {
  if (!selected) return;
  renameForm.classList.toggle('hidden');
  renameInput.value = selected.data.name;
  if (!renameForm.classList.contains('hidden')) {
    renameInput.focus();
    renameInput.select();
  }
});
renameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = renameInput.value.trim().slice(0, 16);
  if (selected && name) {
    selected.data.name = name;
    floater(selected, `Hi, I'm ${name}!`);
    sound.play('rename');
    persist();
    refreshPanel();
  }
  renameForm.classList.add('hidden');
});

if (loaded.offlineMs > 10 * 60_000) {
  const hint = $('hint');
  const hrs = loaded.offlineMs / HOUR;
  hint.textContent = `Welcome back! You were away ${hrs < 1 ? `${Math.round(hrs * 60)} min` : `${hrs.toFixed(1)} h`}. Your critters missed you.`;
  setTimeout(() => (hint.textContent = 'Drag to spin · Scroll or pinch to zoom · Tap a critter'), 7000);
}

// --- babies --------------------------------------------------------------
let courtship: { a: Pet; b: Pet; started: number } | null = null;
const canBreed = (p: Pet) =>
  !p.sleeping && !p.evolving && !visits.has(p) && p.data.joy >= BREED_JOY && p.data.food >= BREED_FOOD;
const population = () => pets.length + eggs.length;

function endCourtship() {
  if (!courtship) return;
  courtship.a.goal = courtship.b.goal = null;
  courtship.a.facing = courtship.b.facing = null;
  courtship = null;
}

function startCourtship(a: Pet, b: Pet) {
  endSeek(a);
  endSeek(b);
  courtship = { a, b, started: performance.now() };
  fx.hearts(a.headWorld(), a.up, 3);
  fx.hearts(b.headWorld(), b.up, 3);
  const mid = a.up.clone().add(b.up).normalize();
  for (const [p, q] of [[a, b], [b, a]] as const) {
    const away = p.up.clone().addScaledVector(mid, -p.up.dot(mid));
    if (away.lengthSq() < 1e-6) away.copy(q.forward).negate();
    p.goal = mid.clone().addScaledVector(away.normalize(), 0.13).normalize();
  }
}

function breedTick() {
  if (courtship) {
    const { a, b, started } = courtship;
    if (!pets.includes(a) || !pets.includes(b) || a.sleeping || b.sleeping || performance.now() - started > 60_000) {
      endCourtship();
      return;
    }
    if (a.up.angleTo(a.goal!) < 0.05 && b.up.angleTo(b.goal!) < 0.05) layEgg(a, b);
    return;
  }
  if (population() >= POPULATION_CAP || Date.now() - game.lastEggAt < EGG_COOLDOWN_MS) return;
  const ready = pets.filter(canBreed);
  let best: [Pet, Pet] | null = null;
  let bestD = Infinity;
  for (let i = 0; i < ready.length; i++)
    for (let j = i + 1; j < ready.length; j++) {
      const d = ready[i].up.angleTo(ready[j].up);
      if (d < bestD) [bestD, best] = [d, [ready[i], ready[j]]];
    }
  if (best) startCourtship(...best);
}

function layEgg(a: Pet, b: Pet) {
  const mid = a.up.clone().add(b.up).normalize();
  const used = [...pets.map((p) => p.data.name), ...eggs.map((e) => e.data.baby.name)];
  const egg = new Egg({
    id: Math.floor(Math.random() * 1e9).toString(36) + Date.now().toString(36).slice(-4),
    pos: [mid.x, mid.y, mid.z],
    hatchAt: Date.now() + EGG_HATCH_MS,
    baby: makeBaby(a.data, b.data, used),
  });
  eggs.push(egg);
  scene.add(egg.group);
  game.lastEggAt = Date.now();
  a.react('pet');
  b.react('pet');
  endCourtship();
  a.stepAway(mid);
  b.stepAway(mid);
  fx.hearts(egg.group.position.clone().addScaledVector(mid, 0.25), mid, 8);
  const s = toScreen(egg.group.position.clone().addScaledVector(mid, 0.4));
  floatAt(s.x, s.y, '💞 An egg!');
  sound.play('egg');
  befriend(friends, a.data.id, b.data.id, 15);
  note('🥚', `${a.data.name} and ${b.data.name} found an egg`);
  persist();
}

function hatch(egg: Egg) {
  eggs.splice(eggs.indexOf(egg), 1);
  scene.remove(egg.group);
  const d: PetData = {
    id: egg.data.id,
    ...egg.data.baby,
    stage: 0,
    food: 70,
    joy: 80,
    care: 0,
    pos: egg.data.pos,
  };
  const pet = new Pet(d);
  pets.push(pet);
  scene.add(pet.group);
  pet.react('feed');
  fx.sparkles(pet.centerWorld(), pet.up, 30, 0.7);
  fx.hearts(pet.headWorld(), pet.up, 5);
  floater(pet, `🐣 Meet ${d.name}!`);
  sound.play('hatch');
  for (const p of pets) if (p !== pet && isFamily(d, p.data)) befriend(friends, d.id, p.data.id, 30);
  note('🐣', d.parents ? `${d.name} hatched! Welcome, child of ${d.parents[0]} & ${d.parents[1]}` : `${d.name} hatched!`);
  persist();
  scanDex();
}

function pokeEgg(egg: Egg) {
  egg.poke();
  const left = Math.max(0, egg.data.hatchAt - Date.now());
  const m = Math.floor(left / 60_000), s = Math.floor((left % 60_000) / 1000);
  const p = toScreen(egg.group.position.clone().addScaledVector(egg.up, 0.35));
  floatAt(p.x, p.y, left > 0 ? `🥚 Hatching in ${m}:${String(s).padStart(2, '0')}` : '🥚 Any moment!');
}

// --- picking -------------------------------------------------------------
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let down: { x: number; y: number } | null = null;
renderer.domElement.addEventListener('pointerdown', (e) => {
  if (e.isPrimary) down = { x: e.clientX, y: e.clientY };
});
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!e.isPrimary) return;
  if (endDrag()) {
    down = null;
    return;
  }
  if (!down) return;
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  down = null;
  if (moved > 8) return;
  if (decorating) {
    if (pickKind) {
      const n = surfacePoint(e.clientX, e.clientY);
      if (n) placeDecor(pickKind, n);
    } else if (!decorAt(e.clientX, e.clientY)) {
      selectDecor(null);
      hint(DEFAULT_HINT);
    }
    return;
  }
  ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects([world.planet, ...pets.map((p) => p.hit), ...eggs.map((e) => e.hit)], false);
  const first = hits[0];
  const pet = first?.object.userData.pet as Pet | undefined;
  // Eggs are small and usually sit right next to their parents' generous hit spheres, so they win ties.
  const planetIdx = hits.findIndex((h) => h.object === world.planet);
  const egg = hits.slice(0, planetIdx < 0 ? undefined : planetIdx).find((h) => h.object.userData.egg)?.object.userData.egg as Egg | undefined;
  if (egg) {
    pokeEgg(egg);
  } else if (pet) {
    select(pet);
    cuddleOnTapAgain(pet);
  } else if (first) {
    select(null);
  }
});
let lastTap: { pet: Pet; at: number } | null = null;
function cuddleOnTapAgain(pet: Pet) {
  const now = performance.now();
  if (lastTap && lastTap.pet === pet && now - lastTap.at < 350) cuddle(pet);
  lastTap = { pet, at: now };
}


// --- decorate ------------------------------------------------------------
decorList.push(
  ...(game.decor ?? [])
    .filter((d) => isDecorKind(d.kind))
    .map((d) => buildDecor({ id: d.id, kind: d.kind as DecorKind, pos: d.pos, rot: typeof d.rot === 'number' ? d.rot : 0 })),
);
for (const d of decorList) scene.add(d.group);
decorBuilt = true;
let decorating = false;
let pickKind: DecorKind | null = null;
let selDecor: Decor | null = null;
let dragging: { d: Decor; start: [number, number, number]; moved: boolean; ok: boolean; id: number } | null = null;
const decoHint = $('decoHint');
const DEFAULT_HINT = 'Pick something, then tap the planet to place it. Drag a decoration to move it.';
function hint(text: string, bad = false) {
  decoHint.textContent = text;
  decoHint.classList.toggle('bad', bad);
}
const PROBLEM_TEXT = { pond: "Splash! You can't build on the pond 💧", crowded: 'A little too close to something else' };

function renderTray() {
  $('decoItems').replaceChildren(
    ...DECOR_KINDS.map((k) => {
      const b = document.createElement('button');
      b.className = 'chip' + (pickKind === k.kind ? ' on' : '');
      b.dataset.kind = k.kind;
      b.innerHTML = `<span class="e">${k.emoji}</span><span>${k.name}</span>`;
      b.addEventListener('click', () => {
        pickKind = pickKind === k.kind ? null : k.kind;
        selectDecor(null);
        hint(pickKind ? `Tap the planet to place a ${k.name.toLowerCase()} (${decorList.length}/${DECOR_CAP})` : DEFAULT_HINT);
        renderTray();
      });
      return b;
    }),
  );
}

function selectDecor(d: Decor | null) {
  if (selDecor) setRing(selDecor, false);
  selDecor = d;
  if (d) setRing(d, true);
  $('decoSel').classList.toggle('hidden', !d);
}

function setDecorating(on: boolean) {
  decorating = on;
  document.body.classList.toggle('decorating', on);
  $('decoBtn').setAttribute('aria-pressed', String(on));
  $('decoTray').classList.toggle('hidden', !on);
  if (on) {
    select(null);
    pickKind = null;
    hint(DEFAULT_HINT);
    renderTray();
  } else {
    selectDecor(null);
    pickKind = null;
  }
}
$('decoBtn').addEventListener('click', () => setDecorating(!decorating));
$('decoDone').addEventListener('click', () => setDecorating(false));
$('decoRotate').addEventListener('click', () => {
  if (!selDecor) return;
  selDecor.data.rot = (selDecor.data.rot + Math.PI / 4) % (Math.PI * 2);
  place(selDecor);
  persist();
});
$('decoRemove').addEventListener('click', () => {
  if (!selDecor) return;
  const d = selDecor;
  selectDecor(null);
  decorList.splice(decorList.indexOf(d), 1);
  scene.remove(d.group);
  for (const [p, v] of visits) if (v.decor === d) endVisit(p);
  fx.sparkles(d.group.position.clone(), d.group.position.clone().normalize(), 10, 0.3);
  sound.play('full');
  hint(DEFAULT_HINT);
  persist();
});

function surfacePoint(x: number, y: number): THREE.Vector3 | null {
  ndc.set((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObject(world.planet, false)[0];
  return hit ? hit.point.clone().normalize() : null;
}
function decorAt(x: number, y: number): Decor | null {
  ndc.set((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects([world.planet, ...decorList.map((d) => d.hit)], false);
  const hit = hits[0]?.object.userData.decor as Decor | undefined;
  if (hit) return hit;
  // Near the planet's rim the ray grazes the ground before it reaches a decoration's hit sphere, so
  // fall back to the nearest camera-facing decoration on screen.
  let best: Decor | null = null;
  let bestD = 30;
  for (const d of decorList) {
    const n = new THREE.Vector3(...d.data.pos).normalize();
    if (n.dot(camera.position.clone().normalize()) < 0.05) continue;
    const s = toScreen(n.clone().multiplyScalar(R + 0.12));
    const dist = Math.hypot(s.x - x, s.y - y);
    if (dist < bestD) {
      bestD = dist;
      best = d;
    }
  }
  return best;
}

function placeDecor(kind: DecorKind, n: THREE.Vector3) {
  if (decorList.length >= DECOR_CAP) return hint(`The planet is full of decorations (${DECOR_CAP}). Remove one first.`, true);
  const problem = spotProblem(n, world.ponds, decorList);
  if (problem) {
    const s = toScreen(n.clone().multiplyScalar(R));
    floatAt(s.x, s.y, problem === 'pond' ? '💧 Not on the pond!' : '🙈 Too close');
    sound.play('full');
    return hint(PROBLEM_TEXT[problem], true);
  }
  // Face the camera so a freshly placed cottage shows its door.
  const toCam = camera.position.clone().addScaledVector(n, -camera.position.dot(n));
  const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), n));
  const rot = Math.atan2(new THREE.Vector3().crossVectors(fwd, toCam).dot(n), fwd.dot(toCam));
  const d = buildDecor({ id: Math.floor(Math.random() * 1e9).toString(36), kind, pos: [n.x, n.y, n.z], rot });
  decorList.push(d);
  scene.add(d.group);
  fx.sparkles(n.clone().multiplyScalar(R + 0.05), n, 12, 0.35);
  sound.play('wear');
  hint(`Placed! Tap again for another, or drag it around (${decorList.length}/${DECOR_CAP})`);
  persist();
}

// Runs in the capture phase on the container, before OrbitControls sees the event, so a drag on a
// decoration moves the decoration instead of spinning the planet.
app.addEventListener(
  'pointerdown',
  (e) => {
    if (!decorating || !e.isPrimary) return;
    const d = decorAt(e.clientX, e.clientY);
    if (!d) return;
    controls.enabled = false;
    renderer.domElement.setPointerCapture(e.pointerId);
    dragging = { d, start: [...d.data.pos], moved: false, ok: true, id: e.pointerId };
    selectDecor(d);
    pickKind = null;
    renderTray();
  },
  { capture: true },
);
renderer.domElement.addEventListener('pointermove', (e) => {
  if (!dragging || e.pointerId !== dragging.id) return;
  const n = surfacePoint(e.clientX, e.clientY);
  if (!n) return;
  if (!dragging.moved && new THREE.Vector3(...dragging.start).angleTo(n) < 0.02) return;
  dragging.moved = true;
  const problem = spotProblem(n, world.ponds, decorList, dragging.d);
  dragging.ok = !problem;
  dragging.d.data.pos = [n.x, n.y, n.z];
  place(dragging.d);
  setRing(dragging.d, true, !problem);
  hint(problem ? PROBLEM_TEXT[problem] : 'Let go to drop it here', !!problem);
});
const endDrag = () => {
  if (!dragging) return false;
  const { d, start, moved, ok } = dragging;
  dragging = null;
  controls.enabled = true;
  if (moved) {
    if (!ok) {
      d.data.pos = start;
      place(d);
      hint('That spot didn’t work, so it hopped back.', true);
    } else {
      hint('Moved!');
      sound.play('select');
      for (const [p, v] of visits) if (v.decor === d) endVisit(p);
      persist();
    }
    setRing(d, true, true);
  } else hint('Selected. Drag to move, or turn/remove it below.');
  return true;
};
renderer.domElement.addEventListener('pointercancel', endDrag);

// --- naps and hangouts ---------------------------------------------------
const visits = new Map<Pet, { decor: Decor; kind: 'nap' | 'hang'; arrived: number; until: number }>();
function endVisit(p: Pet) {
  visits.delete(p);
  p.goal = null;
}
const napping = (p: Pet) => {
  const v = visits.get(p);
  return !!v && v.kind === 'nap' && v.arrived > 0;
};
function startVisit(p: Pet, d: Decor) {
  const spec = DECOR_KINDS.find((k) => k.kind === d.data.kind)!;
  const at = new THREE.Vector3(...d.data.pos);
  const side = p.up.clone().addScaledVector(at, -at.dot(p.up));
  if (side.lengthSq() < 1e-6) side.randomDirection().addScaledVector(at, -at.dot(side));
  p.goal = at.clone().addScaledVector(side.normalize(), 0.14).normalize();
  visits.set(p, { decor: d, kind: spec.nap ? 'nap' : 'hang', arrived: 0, until: 0 });
}
function visitTick(force = false) {
  const now = performance.now();
  const spots = decorList.filter((d) => DECOR_KINDS.find((k) => k.kind === d.data.kind)!.nap || DECOR_KINDS.find((k) => k.kind === d.data.kind)!.hangout);
  for (const p of pets) {
    const v = visits.get(p);
    if (v) {
      if (!decorList.includes(v.decor) || p === selected || (v.arrived && now > v.until)) endVisit(p);
      continue;
    }
    // Company is catching: a pet is likelier to wander over when someone is already at a spot nearby.
    const busyNear = [...visits.values()].some((v) => v.arrived && p.up.angleTo(new THREE.Vector3(...v.decor.data.pos)) < 1.1);
    if (!spots.length || p === selected || p.goal || p.evolving || p.sleeping || (!force && Math.random() > (busyNear ? 0.4 : 0.12))) continue;
    // Friends like to share: head for a spot a friend is already visiting if it's in reach.
    const pals = new Set(friendsOf(friends, p.data.id).filter((f) => f.points >= LEVELS[1].min).map((f) => f.id));
    const shared = (d: Decor) => [...visits].some(([q, v]) => v.decor === d && pals.has(q.data.id));
    const near = spots
      .map((d) => ({ d, a: p.up.angleTo(new THREE.Vector3(...d.data.pos)) - (shared(d) ? 0.8 : 0) }))
      .filter((x) => x.a < 1.1)
      .sort((a, b) => a.a - b.a)[0];
    if (near && [...visits.values()].filter((x) => x.decor === near.d).length < 2) {
      startVisit(p, near.d);
      if (force) return;
    }
  }
}
function visitFrame(now: number) {
  for (const [p, v] of visits) {
    if (!v.arrived && p.goal && p.up.angleTo(p.goal) < 0.05) {
      v.arrived = now;
      v.until = now + (v.kind === 'nap' ? 20_000 + Math.random() * 15_000 : 12_000 + Math.random() * 8_000);
      // Whoever is already there stays a bit longer to keep the newcomer company.
      for (const [q, w] of visits) if (q !== p && w.decor === v.decor && w.arrived) w.until = Math.max(w.until, now + 10_000);
      if (v.kind === 'hang') fx.hearts(p.headWorld(), p.up, 3);
      else if (![...visits].some(([q, w]) => q !== p && w.decor === v.decor))
        noteNow('😴', `${p.data.name} took a nap in the ${DECOR_KINDS.find((k) => k.kind === v.decor.data.kind)!.name.toLowerCase()}`, 6 * HOUR);
    }
  }
}

// --- photo booth ---------------------------------------------------------
let booth: { card: Postcard; nextId: number; sel: Sticker | null } | null = null;
const boothStage = $('boothStage');
const boothCanvas = $<HTMLCanvasElement>('boothCanvas');

function boothLayout() {
  if (!booth) return;
  const [cw, ch] = cardSize(booth.card.photo);
  const wrap = $('boothWrap').getBoundingClientRect();
  const s = Math.min(wrap.width / cw, wrap.height / ch);
  const w = Math.floor(cw * s), h = Math.floor(ch * s);
  boothStage.style.width = `${w}px`;
  boothStage.style.height = `${h}px`;
  const dpr = Math.min(window.devicePixelRatio, 2);
  boothCanvas.width = w * dpr;
  boothCanvas.height = h * dpr;
  const ctx = boothCanvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawPostcard(ctx, w, h, booth.card, { stickers: false });
  renderStickers();
}

function renderStickers() {
  if (!booth) return;
  const w = boothStage.clientWidth;
  const box = $('boothStickers');
  box.replaceChildren(
    ...booth.card.stickers.map((st) => {
      const el = document.createElement('span');
      el.className = 'st' + (booth!.sel === st ? ' sel' : '');
      el.dataset.id = String(st.id);
      el.textContent = st.emoji;
      el.style.left = `${st.x * 100}%`;
      el.style.top = `${st.y * 100}%`;
      el.style.fontSize = `${st.size * w}px`;
      el.style.transform = `translate(-50%, -50%) rotate(${st.rot}rad)`;
      el.addEventListener('pointerdown', (e) => startStickerDrag(e, st, el));
      return el;
    }),
  );
  $('boothSel').classList.toggle('hidden', !booth.sel);
}

function startStickerDrag(e: PointerEvent, st: Sticker, el: HTMLElement) {
  e.preventDefault();
  e.stopPropagation();
  booth!.sel = st;
  el.setPointerCapture(e.pointerId);
  const rect = boothStage.getBoundingClientRect();
  const ox = e.clientX - st.x * rect.width, oy = e.clientY - st.y * rect.height;
  const move = (ev: PointerEvent) => {
    st.x = Math.min(1, Math.max(0, (ev.clientX - ox) / rect.width));
    st.y = Math.min(1, Math.max(0, (ev.clientY - oy) / rect.height));
    el.style.left = `${st.x * 100}%`;
    el.style.top = `${st.y * 100}%`;
  };
  const up = () => {
    el.removeEventListener('pointermove', move);
    el.removeEventListener('pointerup', up);
    el.removeEventListener('pointercancel', up);
    renderStickers();
  };
  el.addEventListener('pointermove', move);
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  for (const s of $('boothStickers').children) s.classList.toggle('sel', s === el);
  $('boothSel').classList.remove('hidden');
}

function openBooth() {
  if (booth || miniGame) return;
  select(null);
  if (decorating) setDecorating(false);
  // Render one clean frame and copy it before the browser clears the WebGL buffer.
  renderer.render(scene, camera);
  const photo = document.createElement('canvas');
  photo.width = renderer.domElement.width;
  photo.height = renderer.domElement.height;
  const pctx = photo.getContext('2d')!;
  // The page's sky is CSS behind a transparent canvas, so paint it into the photo first.
  const sky = getComputedStyle(document.body).backgroundImage.match(/rgb[a]?\([^)]+\)/g) ?? ['#c9b8f0', '#f2c6e3', '#ffe1c7'];
  const g = pctx.createLinearGradient(0, 0, 0, photo.height);
  sky.forEach((c, i) => g.addColorStop(i / Math.max(1, sky.length - 1), c));
  pctx.fillStyle = g;
  pctx.fillRect(0, 0, photo.width, photo.height);
  pctx.drawImage(renderer.domElement, 0, 0);
  const d = today();
  const caption = `${festival ? festival.emoji : SEASONS[season].emoji} Pocket Pet Planet · ${d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}`;
  booth = { card: { photo, frame: 'cozy', stickers: [], caption }, nextId: 1, sel: null };
  $('boothResult').classList.add('hidden');
  $('booth').classList.remove('hidden');
  sound.play('select');
  renderBoothTools();
  requestAnimationFrame(boothLayout);
}

function renderBoothTools() {
  if (!booth) return;
  $('boothFrames').replaceChildren(
    ...FRAMES.map((f) => {
      const b = document.createElement('button');
      b.className = 'chip' + (booth!.card.frame === f.id ? ' on' : '');
      b.dataset.frame = f.id;
      b.textContent = f.name;
      b.addEventListener('click', () => {
        booth!.card.frame = f.id;
        renderBoothTools();
        boothLayout();
      });
      return b;
    }),
  );
  $('boothPalette').replaceChildren(
    ...STICKERS.map((emoji) => {
      const b = document.createElement('button');
      b.className = 'chip emoji';
      b.dataset.sticker = emoji;
      b.textContent = emoji;
      b.setAttribute('aria-label', `Add ${emoji} sticker`);
      b.addEventListener('click', () => {
        const n = booth!.card.stickers.length;
        const st: Sticker = { id: booth!.nextId++, emoji, x: 0.3 + ((n * 0.17) % 0.4), y: 0.3 + ((n * 0.23) % 0.4), size: 0.1, rot: (Math.random() - 0.5) * 0.5 };
        booth!.card.stickers.push(st);
        booth!.sel = st;
        sound.play('wear');
        renderStickers();
      });
      return b;
    }),
  );
}

const closeBooth = () => {
  booth = null;
  $('booth').classList.add('hidden');
  clock.getDelta();
};
$('photoBtn').addEventListener('click', openBooth);
$('boothClose').addEventListener('click', closeBooth);
$('boothResultClose').addEventListener('click', () => $('boothResult').classList.add('hidden'));
const withSel = (f: (s: Sticker) => void) => () => {
  if (!booth?.sel) return;
  f(booth.sel);
  renderStickers();
};
$('stBigger').addEventListener('click', withSel((s) => (s.size = Math.min(0.4, s.size * 1.25))));
$('stSmaller').addEventListener('click', withSel((s) => (s.size = Math.max(0.04, s.size / 1.25))));
$('stTurn').addEventListener('click', withSel((s) => (s.rot += Math.PI / 8)));
$('stRemove').addEventListener('click', () => {
  if (!booth?.sel) return;
  booth.card.stickers = booth.card.stickers.filter((s) => s !== booth!.sel);
  booth.sel = null;
  renderStickers();
});
$('boothStage').addEventListener('pointerdown', (e) => {
  if (booth && e.target === boothCanvas) {
    booth.sel = null;
    renderStickers();
  }
});
$('boothSave').addEventListener('click', async () => {
  if (!booth) return;
  const btn = $<HTMLButtonElement>('boothSave');
  btn.disabled = true;
  try {
    const blob = await exportPostcard(booth.card);
    const how = await deliver(blob, postcardName(new Date()));
    lastPostcard = { bytes: blob.size, how };
    const img = $<HTMLImageElement>('boothImg');
    if (img.src.startsWith('blob:')) URL.revokeObjectURL(img.src);
    img.src = URL.createObjectURL(blob);
    $('boothMsg').textContent =
      how === 'shared'
        ? 'Shared! 💌'
        : how === 'cancelled'
          ? 'Not shared. You can long-press the picture to save it.'
          : 'Postcard saved! 💌 If nothing downloaded, long-press (or right-click) the picture to save it.';
    $('boothResult').classList.remove('hidden');
    sound.play('unlock');
  } finally {
    btn.disabled = false;
  }
});
window.addEventListener('resize', () => booth && boothLayout());
let lastPostcard: { bytes: number; how: string } | null = null;
// --- debug ---------------------------------------------------------------
function fastForward(hours: number) {
  for (const p of pets) decay(p.data, hours * HOUR);
  for (const e of eggs) e.data.hatchAt -= hours * HOUR;
  game.lastEggAt -= hours * HOUR;
  persist();
  refreshPanel();
}
function debugEvolve() {
  const pet = selected ?? pets[0];
  if (pet.data.stage >= MAX_STAGE) return;
  pet.data.care = Math.max(pet.data.care, STAGE_CARE[pet.data.stage]);
  checkEvolve(pet);
}
/** Make the selected pet and its nearest awake neighbour happy, put them side by side, and let courtship run. */
function debugBreed() {
  const a = selected ?? pets[0];
  const b = pets.filter((p) => p !== a).sort((x, y) => x.up.angleTo(a.up) - y.up.angleTo(a.up))[0];
  if (!b) return;
  for (const p of [a, b]) {
    p.data.joy = 95;
    p.data.food = 85;
    awakeUntil.set(p, performance.now() + 120_000);
  }
  b.up.copy(a.up).addScaledVector(a.forward, 0.25).normalize();
  game.lastEggAt = 0;
  endCourtship();
  select(null);
  breedTick();
}
if (debugMode) {
  $('debug').classList.remove('hidden');
  $('dbgFF').addEventListener('click', () => fastForward(4));
  $('dbgEvolve').addEventListener('click', debugEvolve);
  $('dbgBreed').addEventListener('click', debugBreed);
  $('dbgReset').addEventListener('click', () => {
    resetting = true;
    clearSave();
    location.reload();
  });
}

declare global {
  interface Window {
    __ppp: Record<string, unknown>;
  }
}
window.__ppp = {
  ready: false,
  pets: () =>
    pets.map((p) => ({
      ...p.data,
      pos: [...p.data.pos],
      moving: p.moving,
      sleeping: p.sleeping,
      napping: napping(p),
      look: p.data.look,
      parents: p.data.parents,
      wear: p.data.wear ?? {},
      evolving: p.evolving,
      visible: facesCamera(p),
      screen: toScreen(p.centerWorld()),
    })),
  camera: () => camera.position.toArray(),
  sky: () => ({ hour: dayNight.hour, night: dayNight.night, fireflies: dayNight.fireflyOpacity }),
  selected: () => selected?.data.id ?? null,
  /** Point the camera at a pet or egg by id (tests and screenshots). */
  focus: (id: string | number[], distance = 6.2) => {
    if (Array.isArray(id)) {
      camera.position.fromArray(id).normalize().multiplyScalar(distance);
      return;
    }
    const up = pets.find((p) => p.data.id === id)?.up ?? eggs.find((e) => e.data.id === id)?.up;
    if (!up) return;
    // Look from slightly "south" of the target so creatures are seen from the front-ish, not top-down.
    const south = new THREE.Vector3(0, -1, 0).addScaledVector(up, up.y);
    if (south.lengthSq() < 1e-6) south.set(0, 0, 1);
    camera.position.copy(up).addScaledVector(south.normalize(), -0.22).normalize().multiplyScalar(distance);
  },
  eggs: () => eggs.map((e) => ({ ...e.data, screen: toScreen(e.group.position) })),
  unlocked: () => unlockedAt(game.totalCare).map((a) => a.id),
  minigame: () => miniGame?.state() ?? null,
  audio: () => ({ state: sound.state, muted: sound.muted }),
  weather: () => weather.view(),
  flowerNormals: () => world.flowers.map((f) => f.normal.toArray()),
  __sound: sound,
  saving: () => !resetting,
  dex: () => ({ ...dex }),
  friends: () => ({ ...friends }),
  diary: () => diary.map((e) => ({ ...e })),
  seeks: () => [...seeks].map(([p, s]) => ({ pet: p.data.id, friend: s.friend.data.id })),
  booth: () => (booth ? { frame: booth.card.frame, stickers: booth.card.stickers.map((s) => ({ ...s })), size: cardSize(booth.card.photo), last: lastPostcard } : { last: lastPostcard }),
  decor: () =>
    decorList.map((d) => ({ ...d.data, screen: toScreen(d.group.position.clone().addScaledVector(d.group.position.clone().normalize(), 0.06)), visible: d.group.position.dot(camera.position) > 2.2, selected: d === selDecor })),
  probe: (x: number, y: number) => {
    const n = surfacePoint(x, y);
    return n ? { hit: true, problem: spotProblem(n, world.ponds, decorList) } : { hit: false, problem: null };
  },
  ponds: () => world.ponds.map((n) => ({ normal: n.toArray(), screen: toScreen(n.clone().multiplyScalar(R)), visible: n.dot(camera.position) > 2.2 })),
  visits: () => [...visits].map(([p, v]) => ({ pet: p.data.id, decor: v.decor.data.id, kind: v.kind, arrived: v.arrived > 0, napping: napping(p) })),
  season: () => ({ season, festival: festival?.id ?? null, decor: seasonFx.decor, props: world.props.map((p) => p.kind), outfits: [...(game.outfits ?? [])] }),
  perf: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, objects: countObjects() }),
  game: () => ({ snacks: game.snacks, totalCare: game.totalCare, lastEggAt: game.lastEggAt, population: population(), courting: !!courtship }),
  ...(debugMode ? { visitNow: () => visitTick(true), fastForward, evolve: debugEvolve, setWeather: (k: Parameters<Weather['set']>[0]) => weather.set(k, dayNight.night) } : {}),
};

function countObjects(): number {
  let n = 0;
  scene.traverseVisible(() => n++);
  return n;
}

// --- loop ----------------------------------------------------------------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  viewShift = -1; // force the view offset to be recomputed for the new size
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// On landscape phones the panel is docked on the right; slide the planet into the space left of it.
const dockedPanel = window.matchMedia('(max-height: 520px) and (min-aspect-ratio: 4/3)');
let viewShift = 0;
function updateViewShift(dt: number) {
  const target = selected && dockedPanel.matches ? (panel.getBoundingClientRect().width + 16) / 2 : 0;
  if (Math.abs(target - viewShift) < 0.5 && (target !== 0 || viewShift === 0)) return;
  viewShift += (target - viewShift) * Math.min(1, dt * 8);
  if (Math.abs(target - viewShift) < 0.5) viewShift = target;
  const w = window.innerWidth, h = window.innerHeight;
  if (viewShift === 0) camera.clearViewOffset();
  else camera.setViewOffset(w, h, viewShift, 0, w, h);
}

const clock = new THREE.Clock();
let panelTimer = 0;
let twinkleTimer = 0;
let breedTimer = 2;
const tagPos = new THREE.Vector3();
const clockEl = $('clock');
// Weak GPUs (and software rendering) get a lower pixel ratio rather than a sluggish planet.
let perfFrames = 0;
let perfTime = 0;
function adaptQuality(raw: number) {
  if (perfFrames < 0) return;
  perfFrames++;
  perfTime += raw;
  if (perfTime < 2) return;
  const avg = perfTime / perfFrames;
  const ratio = renderer.getPixelRatio();
  if (avg > 0.045 && ratio > 1) renderer.setPixelRatio(Math.max(1, ratio / 2));
  else if (avg > 0.045 && ratio > 0.75) renderer.setPixelRatio(0.75);
  else perfFrames = -1;
  if (perfFrames >= 0) perfFrames = perfTime = 0;
}

renderer.setAnimationLoop(() => {
  const raw = clock.getDelta();
  if (miniGame || booth) {
    // The planet sleeps behind the mini-game overlay; needs still tick so time stays honest.
    for (const p of pets) decay(p.data, raw * 1000);
    return;
  }
  adaptQuality(raw);
  const dt = Math.min(0.1, raw);
  const t = clock.elapsedTime;
  weather.tick(dt, t, dayNight.night);
  dayNight.cloudy = Math.max(weather.rain, weather.snow * 0.6);
  dayNight.tick(dt, t);
  const now = performance.now();
  for (const p of pets) {
    decay(p.data, dt * 1000);
    p.sleeping = (dayNight.night > 0.6 || napping(p)) && !p.evolving && now > (awakeUntil.get(p) ?? 0);
    const partner = courtship?.a === p ? courtship.b : courtship?.b === p ? courtship.a : null;
    const visit = visits.get(p);
    p.facing = p === selected ? camera.position : partner ? partner.group.position : visit?.arrived ? visit.decor.group.position : null;
    p.update(dt, t);
  }
  const wall = Date.now();
  for (const e of [...eggs]) {
    e.update(dt, t, wall);
    if (wall >= e.data.hatchAt) hatch(e);
  }
  breedTimer -= dt;
  if (breedTimer <= 0) {
    breedTimer = 1.5;
    breedTick();
    visitTick();
    friendTick(now);
  }
  visitFrame(now);
  seekFrame(now);
  for (const d of decorList)
    for (const g of d.glow) {
      g.material.opacity = dayNight.night * 0.9;
      g.visible = dayNight.night > 0.02; // a transparent sprite still costs a draw call
    }
  twinkleTimer -= dt;
  if (twinkleTimer <= 0) {
    twinkleTimer = 0.25;
    sound.setNight(dayNight.night);
    sound.setRain(weather.rain);
    for (const p of pets) {
      if (p.data.stage >= 2 && Math.random() < 0.4) fx.twinkle(p.headWorld(), p.up);
      if (p.sleeping && Math.random() < 0.18) fx.zzz(p.headWorld(), p.up);
    }
    const hh = Math.floor(dayNight.hour), mm = Math.floor((dayNight.hour % 1) * 60);
    clockEl.textContent = `${weather.emoji ? weather.emoji + ' ' : ''}${dayNight.night > 0.5 ? '🌙' : dayNight.night > 0.05 ? '🌇' : '☀️'} ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  }
  fx.update(dt);
  seasonFx.tick(dt, t, dayNight.night);
  world.update(dt);
  controls.update();

  updateViewShift(dt);
  if (selected) {
    const s = toScreen(selected.headWorld(tagPos));
    tag.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%)`;
    tag.style.opacity = facesCamera(selected) ? '1' : '0.25';
    panelTimer -= dt;
    if (panelTimer <= 0) {
      panelTimer = 0.5;
      refreshPanel();
    }
  }
  renderer.render(scene, camera);
  window.__ppp.ready = true;
});
