import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';
import { FX } from './fx';
import { Pet } from './pet';
import { clearSave, decay, formName, load, MAX_STAGE, moodOf, save, STAGE_CARE } from './state';
import { DayNight, parseTimeOverride } from './daynight';
import { buildWorld } from './world';

const HOUR = 3600_000;
const debugMode = new URLSearchParams(location.search).has('debug');
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

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

const world = buildWorld(scene);
const fx = new FX(scene);
const timeOverride = parseTimeOverride();
const dayNight = new DayNight(scene, hemi, sun, timeOverride, world.halo);
const awakeUntil = new WeakMap<Pet, number>();
const wake = (pet: Pet) => awakeUntil.set(pet, performance.now() + 45_000);

// --- state ---------------------------------------------------------------
const loaded = load();
const pets = loaded.data.pets.map((d) => new Pet(d));
for (const p of pets) scene.add(p.group);
let selected: Pet | null = null;
let resetting = false;

const persist = () => {
  if (!resetting) save(pets.map((p) => p.data));
};
persist();
setInterval(persist, 3000);
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
  const el = document.createElement('div');
  el.className = 'floater';
  el.textContent = text;
  el.style.left = `${s.x}px`;
  el.style.top = `${s.y}px`;
  floaters.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function refreshPanel() {
  if (!selected) return;
  const d = selected.data;
  const mood = selected.sleeping ? { label: 'Sleeping', emoji: '😴' } : moodOf(d);
  $('petName').textContent = d.name;
  $('petForm').textContent = formName(d);
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
  if (pet) {
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
    floater(pet, `✨ ${formName(d)}! ✨`);
    refreshPanel();
  });
}

function feed(pet: Pet) {
  const d = pet.data;
  if (pet.evolving) return;
  if (d.food >= 90) {
    pet.react('full');
    floater(pet, 'Too full!');
    return;
  }
  wake(pet);
  d.food = Math.min(100, d.food + 30);
  d.joy = Math.min(100, d.joy + 8);
  d.care += 1;
  persist();
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

const lastPetAt = new WeakMap<Pet, number>();
function cuddle(pet: Pet) {
  const d = pet.data;
  if (pet.evolving) return;
  wake(pet);
  d.joy = Math.min(100, d.joy + 12);
  const now = performance.now();
  if (now - (lastPetAt.get(pet) ?? 0) > 3000) d.care += 0.25;
  lastPetAt.set(pet, now);
  pet.react('pet');
  fx.hearts(pet.headWorld(), pet.up, 4);
  floater(pet, '♥');
  persist();
  refreshPanel();
  checkEvolve(pet);
}

$('feedBtn').addEventListener('click', () => selected && feed(selected));
$('petBtn').addEventListener('click', () => selected && cuddle(selected));
$('close').addEventListener('click', () => select(null));
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
  const hits = raycaster.intersectObjects([world.planet, ...pets.map((p) => p.hit)], false);
  const first = hits[0];
  const pet = first?.object.userData.pet as Pet | undefined;
  if (pet) {
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
  persist();
  refreshPanel();
}
function debugEvolve() {
  const pet = selected ?? pets[0];
  if (pet.data.stage >= MAX_STAGE) return;
  pet.data.care = Math.max(pet.data.care, STAGE_CARE[pet.data.stage]);
  checkEvolve(pet);
}
if (debugMode) {
  $('debug').classList.remove('hidden');
  $('dbgFF').addEventListener('click', () => fastForward(4));
  $('dbgEvolve').addEventListener('click', debugEvolve);
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
      evolving: p.evolving,
      visible: facesCamera(p),
      screen: toScreen(p.centerWorld()),
    })),
  camera: () => camera.position.toArray(),
  sky: () => ({ hour: dayNight.hour, night: dayNight.night, fireflies: dayNight.fireflyOpacity }),
  selected: () => selected?.data.id ?? null,
  ...(debugMode ? { fastForward, evolve: debugEvolve } : {}),
};

// --- loop ----------------------------------------------------------------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
let panelTimer = 0;
let twinkleTimer = 0;
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
  adaptQuality(raw);
  const dt = Math.min(0.1, raw);
  const t = clock.elapsedTime;
  dayNight.tick(dt, t);
  const now = performance.now();
  for (const p of pets) {
    decay(p.data, dt * 1000);
    p.sleeping = dayNight.night > 0.6 && !p.evolving && now > (awakeUntil.get(p) ?? 0);
    p.facing = p === selected ? camera.position : null;
    p.update(dt, t);
  }
  twinkleTimer -= dt;
  if (twinkleTimer <= 0) {
    twinkleTimer = 0.25;
    for (const p of pets) {
      if (p.data.stage >= 2 && Math.random() < 0.4) fx.twinkle(p.headWorld(), p.up);
      if (p.sleeping && Math.random() < 0.18) fx.zzz(p.headWorld(), p.up);
    }
    const hh = Math.floor(dayNight.hour), mm = Math.floor((dayNight.hour % 1) * 60);
    clockEl.textContent = `${dayNight.night > 0.5 ? '🌙' : dayNight.night > 0.05 ? '🌇' : '☀️'} ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  }
  fx.update(dt);
  world.update(dt);
  controls.update();

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
