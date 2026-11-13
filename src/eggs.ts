import * as THREE from 'three';
import { SPECIES, type EggData, type Look, type PetData, type Species } from './state';
import { toon } from './toon';
import { R } from './world';

export const EGG_HATCH_MS = 3 * 60_000;
export const EGG_COOLDOWN_MS = 20 * 60_000;
/** Pets plus eggs; keeps the planet readable and the frame rate cozy on phones. */
export const POPULATION_CAP = 12;
export const BREED_JOY = 75;
export const BREED_FOOD = 50;

const A = ['Mo', 'Pi', 'Bu', 'Lu', 'Ko', 'Mi', 'Nu', 'Ta', 'Pu', 'Fi', 'Yu', 'Bo', 'Chi', 'Su'];
const B = ['chi', 'po', 'bu', 'mi', 'ki', 'ri', 'nu', 'lo', 'mo', 'pi', 'ffy', 'ko', 'bean', 'dle'];

export const colorOf = (p: Pick<PetData, 'species' | 'look'>) => p.look?.color ?? SPECIES[p.species].colors[0];
export const featureOf = (p: Pick<PetData, 'species' | 'look'>) => p.look?.feature ?? p.species;

export function babyName(used: string[], rng = Math.random): string {
  for (let i = 0; i < 40; i++) {
    const n = A[Math.floor(rng() * A.length)] + B[Math.floor(rng() * B.length)];
    if (!used.includes(n)) return n;
  }
  return 'Bubbles';
}

/** Mix two parents: species from one, head feature usually from the other, blended body color, maybe spots. */
export function makeBaby(a: PetData, b: PetData, used: string[], rng = Math.random): EggData['baby'] {
  const [main, other] = rng() < 0.5 ? [a, b] : [b, a];
  const species: Species = main.species;
  const feature = rng() < 0.75 ? featureOf(other) : featureOf(main);
  const c = new THREE.Color(colorOf(a)).lerp(new THREE.Color(colorOf(b)), 0.35 + rng() * 0.3);
  c.offsetHSL((rng() - 0.5) * 0.06, 0.04, 0.01);
  const look: Look = { color: '#' + c.getHexString(), feature };
  if (rng() < 0.45) look.spots = SPECIES[other.species].accent;
  return { name: babyName(used, rng), species, look, parents: [a.name, b.name] };
}

const eggGeo = new THREE.SphereGeometry(1, 24, 18);
const dotGeo = new THREE.SphereGeometry(1, 10, 8);

export class Egg {
  readonly group = new THREE.Group();
  readonly hit: THREE.Mesh;
  readonly up: THREE.Vector3;
  private shell = new THREE.Group();
  private nudge = 0;

  constructor(public data: EggData) {
    this.up = new THREE.Vector3(...data.pos).normalize();
    const color = new THREE.Color(colorOf(data.baby)).lerp(new THREE.Color('#ffffff'), 0.35);
    const shellMesh = new THREE.Mesh(eggGeo, toon('#' + color.getHexString()));
    shellMesh.scale.set(0.1, 0.13, 0.1);
    shellMesh.position.y = 0.12;
    this.shell.add(shellMesh);
    const dot = toon(data.baby.look?.spots ?? SPECIES[featureOf(data.baby)].accent);
    for (let i = 0; i < 7; i++) {
      const v = new THREE.Vector3().randomDirection();
      v.y = Math.abs(v.y) * 0.8 + 0.1;
      v.normalize();
      const d = new THREE.Mesh(dotGeo, dot);
      d.position.set(v.x * 0.098, 0.12 + v.y * 0.125, v.z * 0.098);
      d.scale.setScalar(0.018 + Math.random() * 0.01);
      this.shell.add(d);
    }
    const nest = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 8, 20), toon('#e8cfa6'));
    nest.rotation.x = Math.PI / 2;
    nest.position.y = 0.02;
    this.hit = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), new THREE.MeshBasicMaterial({ visible: false }));
    this.hit.position.y = 0.12;
    this.hit.userData.egg = this;
    this.group.add(nest, this.shell, this.hit);
    this.group.position.copy(this.up).multiplyScalar(R);
    this.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), this.up);
  }

  poke(): void {
    this.nudge = 0.8;
  }

  update(dt: number, time: number, now: number): void {
    const left = this.data.hatchAt - now;
    // Wobbles more as hatching gets close.
    const urgency = THREE.MathUtils.clamp(1 - left / EGG_HATCH_MS, 0, 1);
    this.nudge = Math.max(0, this.nudge - dt);
    const amp = 0.04 + urgency * urgency * 0.22 + this.nudge * 0.3;
    const burst = Math.sin(time * 1.7) > 0.6 ? 1 : 0.25;
    this.shell.rotation.z = Math.sin(time * 14) * amp * burst;
    this.shell.rotation.x = Math.cos(time * 11) * amp * 0.4 * burst;
  }
}
