import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';
import { FX } from './fx';
import { Pet } from './pet';
import { Sound } from './audio';
import { accessoryById, ACCESSORIES, giftsFor, isAvailable, isSeasonal, unlockedAt } from './accessories';
import { SeasonFX } from './seasonfx';
import { BREED_FOOD, BREED_JOY, Egg, EGG_COOLDOWN_MS, EGG_HATCH_MS, makeBaby, POPULATION_CAP } from './eggs';
import { SAVE_KEY, clearSave, decay, formName, load, MAX_STAGE, moodOf, save, STAGE_CARE, type PetData } from './state';
import { DayNight, parseTimeOverride } from './daynight';
import { colorOf, featureOf } from './eggs';
import { FruitCatch } from './minigame';
import { DEX, dexEntry, entriesFor, formatWhen, regionName, sticker } from './dex';
import { parseWeatherOverride, Weather } from './weather';
import { buildWorld } from './world';
import { FESTIVALS, festivalOf, fmtRange, parseDateOverride, SEASONS, seasonOf } from './seasons';

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
const wake = (pet: Pet) => awakeUntil.set(pet, performance.now() + 45_000);

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
const persist = () => {
  if (resetting) return;
  game.pets = pets.map((p) => p.data);
  game.eggs = eggs.map((e) => e.data);
  game.flowers = weather.blooms.map((b) => Math.round(b * 1000) / 1000);
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

function toast(text: string) {
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
{
  game.outfits ??= [];
  const gifts = giftsFor(season, festival?.id).filter((a) => !game.outfits!.includes(a.id));
  game.outfits.push(...gifts.map((a) => a.id));
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
  !p.sleeping && !p.evolving && p.data.joy >= BREED_JOY && p.data.food >= BREED_FOOD;
const population = () => pets.length + eggs.length;

function endCourtship() {
  if (!courtship) return;
  courtship.a.goal = courtship.b.goal = null;
  courtship.a.facing = courtship.b.facing = null;
  courtship = null;
}

function startCourtship(a: Pet, b: Pet) {
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
  if (!down || !e.isPrimary) return;
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  down = null;
  if (moved > 8) return;
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
  season: () => ({ season, festival: festival?.id ?? null, decor: seasonFx.decor, props: world.props.map((p) => p.kind), outfits: [...(game.outfits ?? [])] }),
  perf: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, objects: countObjects() }),
  game: () => ({ snacks: game.snacks, totalCare: game.totalCare, lastEggAt: game.lastEggAt, population: population(), courting: !!courtship }),
  ...(debugMode ? { fastForward, evolve: debugEvolve, setWeather: (k: Parameters<Weather['set']>[0]) => weather.set(k, dayNight.night) } : {}),
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
  if (miniGame) {
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
    p.sleeping = dayNight.night > 0.6 && !p.evolving && now > (awakeUntil.get(p) ?? 0);
    const partner = courtship?.a === p ? courtship.b : courtship?.b === p ? courtship.a : null;
    p.facing = p === selected ? camera.position : partner ? partner.group.position : null;
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
