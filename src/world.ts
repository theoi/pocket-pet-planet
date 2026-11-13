import * as THREE from 'three';
import type { Season } from './seasons';
import { canvasTexture, mergeByMaterial, mulberry32, placeOnSphere, toon } from './toon';

export const R = 2;
/** Angular radius of a pond cap (radians from its centre normal). */
export const POND_ANGLE = 0.17;

const GROUND: Record<Season, [string, string, string]> = {
  spring: ['#c2ecc4', '#d9f7d2', '#f3f6cb'],
  summer: ['#b3e4b6', '#caf0c0', '#eef6cf'],
  autumn: ['#d4e6b8', '#e6ecbd', '#f6dfb4'],
  winter: ['#d5e9df', '#e7f2ee', '#ece7f6'],
};
const ROUND_LEAVES: Record<Season, string[]> = {
  spring: ['#a8e6a3', '#b9efb0', '#c8f3c2'],
  summer: ['#86d3a0', '#95d5b2', '#a7e8bd'],
  autumn: ['#ffb37a', '#ffd27a', '#f7a09a'],
  winter: ['#e9e4f5', '#dfe8f5', '#f2eef8'],
};
const BLOSSOM_LEAVES: Record<Season, string[]> = {
  spring: ['#ffc8dd', '#ffd6e8', '#f8c4f0'],
  summer: ['#b5ead7', '#c4f0d6', '#a9e6c3'],
  autumn: ['#ff9f80', '#ffbc8a', '#ec98ad'],
  winter: ['#ffffff', '#f6f1ff', '#fbf4fa'],
};

function planetMesh(season: Season): THREE.Mesh {
  const geo = new THREE.SphereGeometry(R, 96, 64);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const [base, light, warm] = GROUND[season].map((c) => new THREE.Color(c));
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const n = Math.sin(x * 2.1 + 1.3) * Math.sin(y * 2.7 + 0.4) * Math.sin(z * 1.9 + 2.2);
    const m = Math.sin(x * 4.3 - y * 1.7) * Math.cos(z * 3.9 + y * 2.1);
    c.copy(base).lerp(light, THREE.MathUtils.smoothstep(n, 0.05, 0.25));
    c.lerp(warm, THREE.MathUtils.smoothstep(m, 0.55, 0.8) * 0.6);
    colors.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = toon('#ffffff').clone();
  mat.vertexColors = true;
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'planet';
  return mesh;
}

const sphere = new THREE.SphereGeometry(1, 20, 16);
const lowSphere = new THREE.SphereGeometry(1, 12, 8);
const cone = new THREE.ConeGeometry(1, 1, 16);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 10);
const halfSphere = new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);

type V3 = [number, number, number];
function part(geo: THREE.BufferGeometry, color: string | THREE.Material, pos: V3, scale: V3, rot: V3 = [0, 0, 0]): THREE.Mesh {
  const m = new THREE.Mesh(geo, typeof color === 'string' ? toon(color) : color);
  m.position.set(...pos);
  m.scale.set(...scale);
  m.rotation.set(...rot);
  return m;
}

/** Canopy materials are private to the world so seasonal recolouring never touches pets or outfits. */
function canopyMats(colors: string[]): THREE.MeshToonMaterial[] {
  return colors.map((c) => {
    const m = toon(c).clone();
    m.color.set(c);
    return m;
  });
}

export interface Flower {
  obj: THREE.Group;
  stem: THREE.Object3D;
  head: THREE.Group;
  petals: THREE.Object3D[];
  normal: THREE.Vector3;
  baseScale: number;
}

function flower(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const petal = ['#ffafcc', '#cdb4db', '#ffd6a5', '#a0c4ff', '#fdffb6', '#ffffff'][Math.floor(rng() * 6)];
  const stem = new THREE.Group();
  stem.add(part(cyl, '#88c9a1', [0, 0.04, 0], [0.006, 0.08, 0.006]));
  stem.add(part(sphere, '#95d5b2', [0.012, 0.035, 0], [0.012, 0.004, 0.007]));
  g.add(stem);
  const head = new THREE.Group();
  head.position.y = 0.085;
  const petals: THREE.Object3D[] = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    // Each petal pivots at the flower's centre so it can fold up into a bud and open into a bloom.
    const pivot = new THREE.Group();
    pivot.rotation.y = -a;
    const p = part(sphere, '#ffffff', [0.022, 0, 0], [0.018, 0.01, 0.018]);
    p.userData.petalColor = petal;
    pivot.add(p);
    head.add(pivot);
    petals.push(pivot);
  }
  head.add(part(sphere, '#ffe066', [0, 0.005, 0], [0.014, 0.012, 0.014]));
  g.add(head);
  g.userData.flower = { stem, head, petals };
  return g;
}

function pond(): THREE.Mesh {
  const geo = new THREE.SphereGeometry(R + 0.006, 32, 6, 0, Math.PI * 2, 0, POND_ANGLE);
  return new THREE.Mesh(geo, toon('#b9dcff'));
}

const cloudMat = toon('#ffffff').clone();

function cloud(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const n = 3 + Math.floor(rng() * 2);
  for (let i = 0; i < n; i++) {
    const s = 0.13 + rng() * 0.08;
    const puff = new THREE.Mesh(sphere, cloudMat);
    puff.position.set((i - n / 2) * 0.16, (rng() - 0.5) * 0.06, (rng() - 0.5) * 0.08);
    puff.scale.set(s, s * 0.8, s);
    g.add(puff);
  }
  mergeByMaterial(g);
  return g;
}

/** Slide a point just past the rim of any pond it landed in (keeps the layout's rng sequence intact). */
export function nudgeOffPonds(n: THREE.Vector3, ponds: THREE.Vector3[], margin = 0.04): THREE.Vector3 {
  for (const p of ponds) {
    const a = p.angleTo(n);
    if (a >= POND_ANGLE + margin) continue;
    const away = n.clone().addScaledVector(p, -p.dot(n));
    if (away.lengthSq() < 1e-8) away.set(1, 0, 0).cross(p);
    const target = POND_ANGLE + margin;
    n.copy(p).multiplyScalar(Math.cos(target)).addScaledVector(away.normalize(), Math.sin(target));
  }
  return n;
}

function randomUnit(rng: () => number): THREE.Vector3 {
  const z = rng() * 2 - 1;
  const a = rng() * Math.PI * 2;
  const r = Math.sqrt(1 - z * z);
  return new THREE.Vector3(r * Math.cos(a), z, r * Math.sin(a));
}

// --- seasonal props ------------------------------------------------------
export function pumpkin(scale = 1): THREE.Group {
  const g = new THREE.Group();
  const s = 0.05 * scale;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    g.add(part(lowSphere, i % 2 ? '#ffb26b' : '#ffa45c', [Math.cos(a) * s * 0.45, s * 0.75, Math.sin(a) * s * 0.45], [s * 0.7, s * 0.75, s * 0.7]));
  }
  g.add(part(cyl, '#8a6b4f', [0, s * 1.5, 0], [s * 0.12, s * 0.4, s * 0.12], [0, 0, 0.2]));
  g.add(part(lowSphere, '#7fcf9a', [s * 0.25, s * 1.45, 0], [s * 0.3, s * 0.08, s * 0.18], [0, 0, -0.4]));
  return g;
}

function leafPile(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const cols = ['#ffb37a', '#f7a09a', '#ffd27a', '#e8957c'];
  for (let i = 0; i < 7; i++) {
    const a = rng() * Math.PI * 2, r = rng() * 0.05;
    g.add(part(lowSphere, cols[i % 4], [Math.cos(a) * r, 0.008 + rng() * 0.012, Math.sin(a) * r], [0.03, 0.008, 0.02], [0, rng() * 3, 0]));
  }
  return g;
}

function snowman(): THREE.Group {
  const g = new THREE.Group();
  g.add(part(lowSphere, '#ffffff', [0, 0.06, 0], [0.07, 0.065, 0.07]));
  g.add(part(lowSphere, '#ffffff', [0, 0.155, 0], [0.048, 0.046, 0.048]));
  g.add(part(cone, '#ffad7a', [0, 0.155, 0.055], [0.008, 0.03, 0.008], [Math.PI / 2, 0, 0]));
  for (const s of [-1, 1]) g.add(part(lowSphere, '#3d3047', [0.016 * s, 0.17, 0.042], [0.006, 0.006, 0.006]));
  const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.042, 0.011, 6, 18), toon('#ff9aa2'));
  scarf.position.y = 0.118;
  scarf.rotation.x = Math.PI / 2;
  g.add(scarf);
  g.add(part(cyl, '#3d3047', [0, 0.205, 0], [0.03, 0.03, 0.03]));
  return g;
}

function tulips(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const cols = ['#ff9ec7', '#ffe066', '#cdb4db', '#ffb3a7'];
  for (let i = 0; i < 3; i++) {
    const x = (i - 1) * 0.03, z = (rng() - 0.5) * 0.03, h = 0.07 + rng() * 0.03;
    g.add(part(cyl, '#7fc79a', [x, h / 2, z], [0.004, h, 0.004]));
    g.add(part(halfSphere, cols[Math.floor(rng() * 4)], [x, h + 0.014, z], [0.016, -0.026, 0.016]));
  }
  return g;
}

function sunflower(): THREE.Group {
  const g = new THREE.Group();
  g.add(part(cyl, '#7fc79a', [0, 0.1, 0], [0.007, 0.2, 0.007]));
  g.add(part(lowSphere, '#9fd8a8', [0.02, 0.08, 0], [0.02, 0.005, 0.012], [0, 0, 0.4]));
  const head = new THREE.Group();
  head.position.set(0, 0.2, 0.01);
  head.rotation.x = 0.5;
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    head.add(part(lowSphere, '#ffd75e', [Math.cos(a) * 0.03, Math.sin(a) * 0.03, 0], [0.016, 0.009, 0.004], [0, 0, a]));
  }
  head.add(part(lowSphere, '#a8775a', [0, 0, 0.004], [0.022, 0.022, 0.008]));
  g.add(head);
  return g;
}

export interface Cloud {
  pivot: THREE.Object3D;
  cloud: THREE.Group;
  speed: number;
  /** Only present during rain; extra clouds fade in and out. */
  extra?: boolean;
}

export interface Placed {
  normal: THREE.Vector3;
  scale: number;
  kind: string;
}

export interface World {
  planet: THREE.Mesh;
  halo: THREE.Sprite;
  flowers: Flower[];
  clouds: Cloud[];
  cloudMat: THREE.MeshToonMaterial;
  ponds: THREE.Vector3[];
  /** Every fixed prop (trees, rocks, seasonal bits), for festival dressing and placement checks. */
  props: Placed[];
  season: Season;
  makeCloud(): Cloud;
  update(dt: number): void;
}

export function buildWorld(scene: THREE.Scene, season: Season = 'spring'): World {
  const rng = mulberry32(20261113);
  const planet = planetMesh(season);
  scene.add(planet);

  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: canvasTexture((ctx, s) => {
        const g = ctx.createRadialGradient(s / 2, s / 2, s * 0.2, s / 2, s / 2, s / 2);
        g.addColorStop(0, 'rgba(255,255,255,0.75)');
        g.addColorStop(0.45, 'rgba(255,240,250,0.35)');
        g.addColorStop(1, 'rgba(255,240,250,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, s, s);
      }, 256),
      depthWrite: false,
      transparent: true,
    }),
  );
  halo.scale.setScalar(R * 3.4);
  halo.renderOrder = -1;
  scene.add(halo);

  const taken: THREE.Vector3[] = [];
  const spot = (minAngle: number, r = rng): THREE.Vector3 => {
    for (let tries = 0; tries < 60; tries++) {
      const v = randomUnit(r);
      if (taken.every((t) => t.angleTo(v) > minAngle)) {
        taken.push(v);
        return v;
      }
    }
    const v = randomUnit(r);
    taken.push(v);
    return v;
  };

  const ponds: THREE.Vector3[] = [];
  for (let i = 0; i < 4; i++) {
    const p = pond();
    const n = spot(0.5);
    ponds.push(n.clone());
    p.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
    scene.add(p);
  }

  const roundMats = canopyMats(ROUND_LEAVES[season]);
  const blossomMats = canopyMats(BLOSSOM_LEAVES[season]);
  const winter = season === 'winter';

  const roundTree = () => {
    const g = new THREE.Group();
    const leaf = roundMats[Math.floor(rng() * 3)];
    g.add(part(cyl, '#d9b38c', [0, 0.12, 0], [0.035, 0.24, 0.035]));
    g.add(part(sphere, leaf, [0, 0.33, 0], [0.16, 0.15, 0.16]));
    g.add(part(sphere, leaf, [0.09, 0.27, 0.03], [0.1, 0.09, 0.1]));
    g.add(part(sphere, leaf, [-0.08, 0.28, -0.04], [0.1, 0.09, 0.1]));
    return g;
  };
  const blossomTree = () => {
    const g = new THREE.Group();
    const leaf = blossomMats[Math.floor(rng() * 3)];
    g.add(part(cyl, '#c9a58a', [0, 0.14, 0], [0.032, 0.28, 0.032]));
    g.add(part(sphere, leaf, [0, 0.36, 0], [0.15, 0.13, 0.15]));
    g.add(part(sphere, leaf, [0.1, 0.31, 0.05], [0.09, 0.08, 0.09]));
    g.add(part(sphere, leaf, [-0.07, 0.32, 0.07], [0.09, 0.08, 0.09]));
    return g;
  };
  const pineTree = () => {
    const g = new THREE.Group();
    g.add(part(cyl, '#d9b38c', [0, 0.06, 0], [0.03, 0.12, 0.03]));
    g.add(part(cone, '#8fd3b0', [0, 0.18, 0], [0.14, 0.18, 0.14]));
    g.add(part(cone, '#a0dcbc', [0, 0.29, 0], [0.11, 0.15, 0.11]));
    g.add(part(cone, '#b2e6c8', [0, 0.38, 0], [0.075, 0.12, 0.075]));
    if (winter) {
      g.add(part(cone, '#ffffff', [0, 0.415, 0], [0.045, 0.06, 0.045]));
      g.add(part(cone, '#ffffff', [0, 0.32, 0], [0.075, 0.05, 0.075]));
    }
    return g;
  };
  const dodeca = new THREE.DodecahedronGeometry(1, 0);
  const rock = () => {
    const g = new THREE.Group();
    const col = ['#e6dff0', '#ddd5ea', '#efe6f5'][Math.floor(rng() * 3)];
    const s = 0.06 + rng() * 0.05;
    g.add(part(dodeca, col, [0, s * 0.35, 0], [s, s * 0.7, s * 0.9]));
    if (rng() < 0.5) g.add(part(dodeca, col, [s * 1.1, s * 0.2, s * 0.3], [s * 0.5, s * 0.4, s * 0.5]));
    if (winter) g.add(part(halfSphere, '#ffffff', [0, s * 0.55, 0], [s * 0.8, s * 0.25, s * 0.7]));
    return g;
  };
  const mushroom = () => {
    const g = new THREE.Group();
    g.add(part(cyl, '#fff4e6', [0, 0.04, 0], [0.022, 0.08, 0.022]));
    g.add(part(halfSphere, '#ff9aa2', [0, 0.075, 0], [0.055, 0.045, 0.055]));
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4;
      g.add(part(sphere, '#ffffff', [Math.cos(a) * 0.03, 0.105, Math.sin(a) * 0.03], [0.009, 0.006, 0.009]));
    }
    return g;
  };

  // The order and rng draws below must stay stable: saved flower blooms are indexed by position in this layout.
  const statics = new THREE.Group();
  const placed: Placed[] = [];
  const flowers: Flower[] = [];
  const kinds: [string, () => THREE.Object3D, number, number][] = [
    ['tree', roundTree, 9, 0.3],
    ['blossom', blossomTree, 7, 0.3],
    ['pine', pineTree, 6, 0.28],
    ['rock', rock, 10, 0.2],
    ['mushroom', mushroom, 8, 0.14],
    ['flower', () => flower(rng), 40, 0.07],
  ];
  for (const [kind, make, count, gap] of kinds) {
    for (let i = 0; i < count; i++) {
      const obj = make();
      const s = 0.85 + rng() * 0.35;
      obj.scale.setScalar(s);
      const n = nudgeOffPonds(spot(gap), ponds);
      placeOnSphere(obj, n, R - 0.01, rng() * Math.PI * 2);
      if (obj.userData.flower) flowers.push({ obj: obj as THREE.Group, ...obj.userData.flower, normal: n.clone(), baseScale: s });
      else {
        statics.add(obj);
        placed.push({ normal: n.clone(), scale: s, kind });
      }
    }
  }

  // Seasonal scenery uses its own random stream so it never shifts the base layout.
  const srng = mulberry32({ spring: 11, summer: 22, autumn: 33, winter: 44 }[season]);
  const seasonal: [string, () => THREE.Object3D, number, number][] =
    season === 'autumn'
      ? [['pumpkin', () => pumpkin(0.9 + srng() * 0.5), 12, 0.12], ['leaves', () => leafPile(srng), 10, 0.1]]
      : season === 'winter'
        ? [['snowman', snowman, 4, 0.2]]
        : season === 'spring'
          ? [['tulips', () => tulips(srng), 12, 0.1]]
          : [['sunflower', sunflower, 8, 0.14]];
  for (const [kind, make, count, gap] of seasonal) {
    for (let i = 0; i < count; i++) {
      const obj = make();
      const n = spot(gap, srng);
      // Keep seasonal bits out of ponds.
      if (ponds.some((p) => p.angleTo(n) < POND_ANGLE + 0.05)) continue;
      placeOnSphere(obj, n, R - 0.01, srng() * Math.PI * 2);
      statics.add(obj);
      placed.push({ normal: n.clone(), scale: 1, kind });
    }
  }
  mergeByMaterial(statics);
  scene.add(statics);

  // Flowers: 40 animated blooms drawn with 4 instanced meshes instead of 320 separate ones.
  const N = flowers.length;
  const stemMesh = new THREE.InstancedMesh(cyl, toon('#88c9a1'), N);
  const leafMesh = new THREE.InstancedMesh(sphere, toon('#95d5b2'), N);
  const centerMesh = new THREE.InstancedMesh(sphere, toon('#ffe066'), N);
  const petalMat = toon('#ffffff').clone();
  const petalMesh = new THREE.InstancedMesh(sphere, petalMat, N * 5);
  const tmpC = new THREE.Color();
  flowers.forEach((f, i) => {
    f.petals.forEach((p, j) => petalMesh.setColorAt(i * 5 + j, tmpC.set(p.children[0].userData.petalColor as string)));
  });
  for (const m of [stemMesh, leafMesh, centerMesh, petalMesh]) {
    m.frustumCulled = false;
    scene.add(m);
  }
  const syncFlowers = () => {
    flowers.forEach((f, i) => {
      f.obj.updateMatrixWorld(true);
      stemMesh.setMatrixAt(i, f.stem.children[0].matrixWorld);
      leafMesh.setMatrixAt(i, f.stem.children[1].matrixWorld);
      centerMesh.setMatrixAt(i, f.head.children[5].matrixWorld);
      f.petals.forEach((p, j) => petalMesh.setMatrixAt(i * 5 + j, p.children[0].matrixWorld));
    });
    for (const m of [stemMesh, leafMesh, centerMesh, petalMesh]) m.instanceMatrix.needsUpdate = true;
  };
  syncFlowers();

  const clouds: Cloud[] = [];
  const makeCloud = (): Cloud => {
    const pivot = new THREE.Object3D();
    pivot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), randomUnit(rng));
    const c = cloud(rng);
    c.position.set(R + 0.75 + rng() * 0.35, 0, 0);
    c.rotation.z = Math.PI / 2;
    pivot.add(c);
    pivot.rotation.y = rng() * Math.PI * 2;
    scene.add(pivot);
    return { pivot, cloud: c, speed: 0.04 + rng() * 0.05 };
  };
  for (let i = 0; i < 6; i++) clouds.push(makeCloud());

  return {
    planet,
    halo,
    flowers,
    clouds,
    cloudMat,
    ponds,
    props: placed,
    season,
    makeCloud,
    update(dt) {
      for (const c of clouds) c.pivot.rotateY(c.speed * dt);
      syncFlowers();
    },
  };
}
