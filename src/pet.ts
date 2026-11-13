import * as THREE from 'three';
import { buildAccessory } from './accessories';
import { moodOf, SPECIES, type Mood, type PetData } from './state';
import { toon } from './toon';
import { R } from './world';

const BASE = 0.21;
const STAGE_SIZE = [1, 1.25, 1.5];
const WALK_SPEED = 0.13; // radians per second on the unit sphere

const sphere = new THREE.SphereGeometry(1, 32, 24);
const smallSphere = new THREE.SphereGeometry(1, 16, 12);
const cone = new THREE.ConeGeometry(1, 1, 20);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 10);
const smileGeo = new THREE.TorusGeometry(0.1, 0.03, 8, 20, Math.PI);
const flatGeo = new THREE.CapsuleGeometry(0.028, 0.1, 4, 8);
const ringGeo = new THREE.TorusGeometry(1.35, 0.08, 8, 48);
const shadowGeo = new THREE.CircleGeometry(1.05, 28);
const hitGeo = new THREE.SphereGeometry(1.6, 12, 8);
const wingGeo = new THREE.SphereGeometry(1, 20, 14);

const inkMat = new THREE.MeshBasicMaterial({ color: '#3d3047' });
const whiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
const cheekMat = new THREE.MeshBasicMaterial({ color: '#ff9fc0', transparent: true, opacity: 0.85 });
const shadowMat = new THREE.MeshBasicMaterial({ color: '#7a5a8c', transparent: true, opacity: 0.2, depthWrite: false });
const ringMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95 });
const hitMat = new THREE.MeshBasicMaterial({ visible: false });
const wingMat = new THREE.MeshToonMaterial({ color: '#fdf6ff', transparent: true, opacity: 0.9 });

type V3 = [number, number, number];

function mesh(geo: THREE.BufferGeometry, mat: THREE.Material, pos: V3, scale: V3, rot: V3 = [0, 0, 0]): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(...pos);
  m.scale.set(...scale);
  m.rotation.set(...rot);
  return m;
}

const tmpM = new THREE.Matrix4();
const tmpV = new THREE.Vector3();

export class Pet {
  readonly group = new THREE.Group();
  readonly hit: THREE.Mesh;
  private bob = new THREE.Group();
  private body = new THREE.Group();
  private eyes: THREE.Object3D[] = [];
  private mouth: THREE.Mesh | null = null;
  private wings: THREE.Object3D[] = [];
  private ring: THREE.Mesh;
  private shadow: THREE.Mesh;
  private face: Mood['face'] | null = null;

  up = new THREE.Vector3();
  forward = new THREE.Vector3();
  private target: THREE.Vector3 | null = null;
  private idle = Math.random() * 2;
  private phase = Math.random() * 10;
  private blink = 2 + Math.random() * 3;
  private jumpT = 0;
  private shakeT = 0;
  private evolveT = -1;
  private evolveSwapped = false;
  private onEvolveSwap: (() => void) | null = null;
  selected = false;
  facing: THREE.Vector3 | null = null;
  /** A place this pet is heading to on purpose (e.g. to meet a partner); overrides wandering. */
  goal: THREE.Vector3 | null = null;
  moving = false;
  sleeping = false;
  private lean = 0;
  private sleepK = 0;

  constructor(public data: PetData) {
    this.up.set(...data.pos).normalize();
    this.forward.set(0, 1, 0).cross(this.up);
    if (this.forward.lengthSq() < 1e-4) this.forward.set(1, 0, 0);
    this.forward.normalize();

    this.shadow = mesh(shadowGeo, shadowMat, [0, 0.12, 0], [1, 1, 1], [-Math.PI / 2, 0, 0]);
    this.ring = mesh(ringGeo, ringMat, [0, 0.14, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
    this.ring.visible = false;
    this.hit = mesh(hitGeo, hitMat, [0, 1, 0], [1, 1, 1]);
    this.hit.userData.pet = this;
    this.group.add(this.shadow, this.ring, this.hit, this.bob);
    this.bob.add(this.body);
    this.build();
    this.place();
  }

  private shownStage = 0;

  get size(): number {
    return BASE * (STAGE_SIZE[this.shownStage] ?? 1);
  }

  build(): void {
    const { species, stage } = this.data;
    this.shownStage = stage;
    const spec = SPECIES[species];
    const look = this.data.look;
    const feat = look?.feature ?? species;
    const color = look ? '#' + new THREE.Color(look.color).offsetHSL(0, 0.04 * stage, -0.035 * stage).getHexString() : spec.colors[stage] ?? spec.colors[0];
    const bodyMat = toon(color);
    const dark = '#' + new THREE.Color(color).offsetHSL(0, 0.05, -0.08).getHexString();
    const darkMat = toon(dark);
    const accentMat = toon(SPECIES[feat].accent);
    this.body.clear();
    this.eyes = [];
    this.wings = [];
    this.face = null;
    const b = this.body;

    b.add(mesh(sphere, bodyMat, [0, 1, 0], [1, 0.92, 1]));
    b.add(mesh(sphere, toon('#fff7fb'), [0, 0.82, 0.62], [0.62, 0.55, 0.42]));
    for (const s of [-1, 1]) {
      const eye = new THREE.Group();
      eye.position.set(0.36 * s, 1.14, 0.84);
      eye.add(mesh(smallSphere, inkMat, [0, 0, 0], [0.13, 0.15, 0.1]));
      eye.add(mesh(smallSphere, whiteMat, [0.04, 0.05, 0.07], [0.045, 0.045, 0.03]));
      b.add(eye);
      this.eyes.push(eye);
      b.add(mesh(smallSphere, cheekMat, [0.62 * s, 0.9, 0.7], [0.14, 0.08, 0.06], [0, 0.6 * s, 0]));
      b.add(mesh(smallSphere, darkMat, [0.42 * s, 0.14, 0.28], [0.24, 0.14, 0.3]));
    }

    let top = 1.95;
    if (look?.spots) {
      const spotMat = toon(look.spots);
      for (const [x, y, z, s] of [[0.45, 1.55, -0.5, 0.16], [-0.3, 1.7, -0.45, 0.12], [-0.6, 1.1, -0.65, 0.14], [0.2, 1.2, -0.9, 0.11]]) {
        const n = new THREE.Vector3(x, (y - 1) / 0.92, z).normalize();
        const spot = mesh(smallSphere, spotMat, [n.x * 0.98, 1 + n.y * 0.9, n.z * 0.98], [s, s, s * 0.4]);
        spot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
        b.add(spot);
      }
    }
    if (feat === 'mochi') {
      for (const s of [-1, 1]) {
        const ear = new THREE.Group();
        ear.position.set(0.36 * s, 1.75, -0.05);
        ear.rotation.z = -0.22 * s;
        ear.add(mesh(sphere, bodyMat, [0, 0.4, 0], [0.22, 0.55, 0.14]));
        ear.add(mesh(sphere, toon('#ffd9e8'), [0, 0.4, 0.07], [0.12, 0.4, 0.08]));
        if (stage >= 1) ear.rotation.x = -0.25;
        b.add(ear);
      }
      top = 2.75;
    } else if (feat === 'puff') {
      for (const s of [-1, 1]) {
        b.add(mesh(cone, bodyMat, [0.52 * s, 1.78, 0], [0.26, 0.42, 0.2], [0, 0, -0.42 * s]));
        b.add(mesh(cone, toon('#ffe9ef'), [0.5 * s, 1.74, 0.07], [0.14, 0.26, 0.08], [0, 0, -0.42 * s]));
      }
      for (const s of [-1, 1]) b.add(mesh(cyl, inkMat, [0.42 * s, 0.96, 0.92], [0.008, 0.28, 0.008], [0, 0, Math.PI / 2 + 0.15 * s]));
      top = 2.1;
    } else if (feat === 'bloop') {
      b.add(mesh(cyl, darkMat, [0, 2.05, 0], [0.04, 0.35, 0.04]));
      b.add(mesh(sphere, accentMat, [0, 2.3, 0], [0.17, 0.17, 0.17]));
      if (stage >= 1) {
        for (const s of [-1, 1]) b.add(mesh(cyl, darkMat, [0.25 * s, 2.0, 0], [0.03, 0.3, 0.03], [0, 0, -0.5 * s]));
        for (const s of [-1, 1]) b.add(mesh(sphere, accentMat, [0.38 * s, 2.15, 0], [0.11, 0.11, 0.11]));
      }
      top = 2.5;
    } else {
      b.add(mesh(cyl, toon('#88c9a1'), [0, 1.98, 0], [0.035, 0.22, 0.035]));
      for (const s of [-1, 1]) b.add(mesh(sphere, accentMat, [0.2 * s, 2.12, 0], [0.24, 0.07, 0.13], [0, 0, 0.45 * s]));
      if (stage >= 1) {
        const petals = stage >= 2 ? 6 : 0;
        for (let i = 0; i < petals; i++) {
          const a = (i / petals) * Math.PI * 2;
          b.add(mesh(smallSphere, toon('#ffafcc'), [Math.cos(a) * 0.14, 2.28, Math.sin(a) * 0.14], [0.1, 0.05, 0.1]));
        }
        b.add(mesh(smallSphere, toon(stage >= 2 ? '#ffe066' : '#ffafcc'), [0, 2.3, 0], [0.1, 0.08, 0.1]));
      }
      top = 2.4;
    }

    if (stage >= 1) {
      b.add(mesh(sphere, toon('#fffafd'), [0, 0.55, -0.95], [0.27, 0.27, 0.27]));
    }
    if (stage >= 2) {
      for (const s of [-1, 1]) {
        const wing = new THREE.Group();
        wing.position.set(0.55 * s, 1.25, -0.55);
        wing.add(mesh(wingGeo, wingMat, [0.4 * s, 0.15, 0], [0.5, 0.32, 0.08], [0, 0.5 * s, 0.35 * s]));
        b.add(wing);
        this.wings.push(wing);
      }
      // A hat would poke through the halo, so the halo politely steps aside.
      if (!this.data.wear?.head) b.add(mesh(new THREE.TorusGeometry(0.36, 0.06, 10, 36), toon('#ffe08a'), [0, top + 0.2, 0], [1, 1, 1], [Math.PI / 2, 0, 0]));
    }
    for (const id of [this.data.wear?.head, this.data.wear?.neck]) {
      const acc = id ? buildAccessory(id, SPECIES[feat].accent) : null;
      if (acc) b.add(acc);
    }
    this.group.userData.top = top;
    this.updateFace();
    this.place();
  }

  private updateFace(): void {
    const face = this.sleeping ? 'flat' : moodOf(this.data).face;
    if (face === this.face) return;
    this.face = face;
    if (this.mouth) this.body.remove(this.mouth);
    if (face === 'flat') {
      this.mouth = mesh(flatGeo, inkMat, [0, 0.88, 0.97], [1, 1, 1], [0, 0, Math.PI / 2]);
    } else if (face === 'smile') {
      this.mouth = mesh(smileGeo, inkMat, [0, 0.93, 0.95], [1, 1, 1], [0, 0, Math.PI]);
    } else {
      this.mouth = mesh(smileGeo, inkMat, [0, 0.82, 0.96], [0.8, 0.7, 1], [0, 0, 0]);
    }
    this.body.add(this.mouth);
  }

  setSelected(v: boolean): void {
    this.selected = v;
    this.ring.visible = v;
  }

  react(kind: 'feed' | 'pet' | 'full'): void {
    if (kind === 'full') this.shakeT = 0.6;
    else this.jumpT = kind === 'feed' ? 0.7 : 0.5;
  }

  evolve(onSwap: () => void): void {
    this.evolveT = 0;
    this.evolveSwapped = false;
    this.onEvolveSwap = onSwap;
  }

  get evolving(): boolean {
    return this.evolveT >= 0;
  }

  /** World-space point just above the creature's head. */
  headWorld(out = new THREE.Vector3()): THREE.Vector3 {
    return out.copy(this.up).multiplyScalar(R + this.size * ((this.group.userData.top as number) + 0.35));
  }

  centerWorld(out = new THREE.Vector3()): THREE.Vector3 {
    return out.copy(this.up).multiplyScalar(R + this.size);
  }

  /** Give the spot `from` some room (e.g. a fresh egg). */
  stepAway(from: THREE.Vector3): void {
    const dir = this.up.clone().sub(from);
    if (dir.lengthSq() < 1e-8) dir.randomDirection();
    this.target = this.up.clone().addScaledVector(dir.normalize(), 0.3).normalize();
    this.idle = 0;
  }

  private pickTarget(): void {
    const t = new THREE.Vector3().randomDirection();
    t.sub(this.up).multiplyScalar(0.25 + Math.random() * 0.45).add(this.up).normalize();
    this.target = t;
  }

  update(dt: number, time: number): void {
    const hungry = this.data.food < 25;
    this.moving = false;
    if (this.goal && !this.evolving && !this.sleeping) this.target = this.goal;
    if (this.evolving || ((this.selected || this.sleeping) && !this.goal)) {
      this.target = null;
    } else if (this.target) {
      const toT = tmpV.copy(this.target).addScaledVector(this.up, -this.up.dot(this.target));
      if (this.up.angleTo(this.target) < 0.04 || toT.lengthSq() < 1e-8) {
        this.target = null;
        this.idle = 1 + Math.random() * 3.5;
      } else {
        toT.normalize();
        this.forward.lerp(toT, Math.min(1, dt * 5)).normalize();
        this.up.addScaledVector(this.forward, WALK_SPEED * (hungry ? 0.45 : 1) * dt).normalize();
        this.moving = true;
      }
    } else {
      this.idle -= dt;
      if (this.idle <= 0) this.pickTarget();
    }
    if (this.facing) {
      const toC = tmpV.copy(this.facing).addScaledVector(this.up, -this.up.dot(this.facing));
      if (toC.lengthSq() > 1e-6) this.forward.lerp(toC.normalize(), Math.min(1, dt * 6)).normalize();
    }
    this.data.pos = [this.up.x, this.up.y, this.up.z];

    // Hop while walking, gentle breathing while idle, plus reaction overrides.
    let hop = 0;
    this.sleepK += ((this.sleeping ? 1 : 0) - this.sleepK) * Math.min(1, dt * 3);
    let squash = this.sleeping ? Math.sin(time * 1.3 + this.phase) * 0.05 - 0.06 : Math.sin(time * 2.4 + this.phase) * 0.03;
    if (this.moving) {
      this.phase += dt * 9;
      const s = Math.abs(Math.sin(this.phase));
      hop = s * 0.35;
      squash = (s < 0.25 ? (0.25 - s) * -0.5 : 0) + s * 0.06;
    }
    if (this.jumpT > 0) {
      this.jumpT = Math.max(0, this.jumpT - dt);
      const k = this.jumpT / 0.7;
      hop = Math.max(hop, Math.sin(k * Math.PI) * 0.9);
      squash = Math.sin(k * Math.PI * 2) * 0.12;
    }
    let shake = 0;
    if (this.shakeT > 0) {
      this.shakeT = Math.max(0, this.shakeT - dt);
      shake = Math.sin(this.shakeT * 40) * 0.25 * (this.shakeT / 0.6);
    }
    let spin = 0;
    let evoScale = 1;
    if (this.evolveT >= 0) {
      this.evolveT += dt;
      const t = this.evolveT;
      spin = t * t * 9;
      hop = Math.sin(Math.min(1, t / 1.6) * Math.PI) * 1.2;
      evoScale = t < 0.8 ? 1 - t * 0.5 : 0.6 + Math.min(1, (t - 0.8) / 0.4) * 0.4 + Math.sin((t - 0.8) * 12) * 0.08 * Math.max(0, 1 - (t - 0.8));
      if (t >= 0.8 && !this.evolveSwapped) {
        this.evolveSwapped = true;
        this.build();
        this.onEvolveSwap?.();
      }
      if (t >= 1.8) {
        this.evolveT = -1;
        this.jumpT = 0.7;
      }
    }
    this.bob.position.y = hop;
    this.bob.scale.set((1 - squash * 0.5) * evoScale, (1 + squash) * evoScale, (1 - squash * 0.5) * evoScale);
    // Lean back to look up at the camera when it's overhead; otherwise you'd only see the top of their head.
    let lean = 0;
    if (this.facing) {
      const a = this.up.angleTo(tmpV.copy(this.facing).normalize());
      lean = THREE.MathUtils.clamp((Math.PI / 2 - a) * 0.55, 0, 0.6);
    }
    this.lean += (lean - this.lean) * Math.min(1, dt * 6);
    // Sleepy pets nod forward a little.
    this.bob.rotation.set(-this.lean + this.sleepK * 0.18, spin + shake, this.sleepK * Math.sin(time * 0.9 + this.phase) * 0.06);
    this.shadow.scale.setScalar(1 - Math.min(0.5, hop * 0.35));

    this.blink -= dt;
    const eyeY = this.blink < 0.12 || this.sleepK > 0.5 ? 0.15 : 1;
    if (this.blink < 0) this.blink = 2.5 + Math.random() * 4;
    for (const e of this.eyes) e.scale.y = eyeY;
    for (const [i, w] of this.wings.entries()) w.rotation.y = Math.sin(time * 7 + this.phase) * 0.35 * (i === 0 ? 1 : -1);
    if (this.selected) this.ring.scale.setScalar(1 + Math.sin(time * 4) * 0.06);

    this.updateFace();
    this.place();
  }

  private place(): void {
    const up = this.up;
    const fwd = this.forward.addScaledVector(up, -up.dot(this.forward));
    if (fwd.lengthSq() < 1e-6) fwd.set(0, 1, 0).cross(up);
    fwd.normalize();
    const right = new THREE.Vector3().crossVectors(up, fwd);
    tmpM.makeBasis(right, up, fwd);
    this.group.quaternion.setFromRotationMatrix(tmpM);
    this.group.position.copy(up).multiplyScalar(R);
    this.group.scale.setScalar(this.size);
  }
}
