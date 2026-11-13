import * as THREE from 'three';
import { canvasTexture, mulberry32, placeOnSphere, toon } from './toon';

export const R = 2;

function planetMesh(): THREE.Mesh {
  const geo = new THREE.SphereGeometry(R, 96, 64);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const base = new THREE.Color('#bfe9c9');
  const light = new THREE.Color('#d5f5d3');
  const warm = new THREE.Color('#eef6cf');
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
const cone = new THREE.ConeGeometry(1, 1, 16);
const cyl = new THREE.CylinderGeometry(1, 1, 1, 10);

function part(geo: THREE.BufferGeometry, color: string, pos: [number, number, number], scale: [number, number, number]): THREE.Mesh {
  const m = new THREE.Mesh(geo, toon(color));
  m.position.set(...pos);
  m.scale.set(...scale);
  return m;
}

function roundTree(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const leaf = ['#95d5b2', '#a7e8bd', '#b5ead7'][Math.floor(rng() * 3)];
  g.add(part(cyl, '#d9b38c', [0, 0.12, 0], [0.035, 0.24, 0.035]));
  g.add(part(sphere, leaf, [0, 0.33, 0], [0.16, 0.15, 0.16]));
  g.add(part(sphere, leaf, [0.09, 0.27, 0.03], [0.1, 0.09, 0.1]));
  g.add(part(sphere, leaf, [-0.08, 0.28, -0.04], [0.1, 0.09, 0.1]));
  return g;
}

function blossomTree(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const leaf = ['#ffc8dd', '#ffd6e8', '#f8c4f0'][Math.floor(rng() * 3)];
  g.add(part(cyl, '#c9a58a', [0, 0.14, 0], [0.032, 0.28, 0.032]));
  g.add(part(sphere, leaf, [0, 0.36, 0], [0.15, 0.13, 0.15]));
  g.add(part(sphere, leaf, [0.1, 0.31, 0.05], [0.09, 0.08, 0.09]));
  g.add(part(sphere, leaf, [-0.07, 0.32, 0.07], [0.09, 0.08, 0.09]));
  return g;
}

function pineTree(): THREE.Group {
  const g = new THREE.Group();
  g.add(part(cyl, '#d9b38c', [0, 0.06, 0], [0.03, 0.12, 0.03]));
  g.add(part(cone, '#8fd3b0', [0, 0.18, 0], [0.14, 0.18, 0.14]));
  g.add(part(cone, '#a0dcbc', [0, 0.29, 0], [0.11, 0.15, 0.11]));
  g.add(part(cone, '#b2e6c8', [0, 0.38, 0], [0.075, 0.12, 0.075]));
  return g;
}

const dodeca = new THREE.DodecahedronGeometry(1, 0);
function rock(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const col = ['#e6dff0', '#ddd5ea', '#efe6f5'][Math.floor(rng() * 3)];
  const s = 0.06 + rng() * 0.05;
  g.add(part(dodeca, col, [0, s * 0.35, 0], [s, s * 0.7, s * 0.9]));
  if (rng() < 0.5) g.add(part(dodeca, col, [s * 1.1, s * 0.2, s * 0.3], [s * 0.5, s * 0.4, s * 0.5]));
  return g;
}

function flower(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const petal = ['#ffafcc', '#cdb4db', '#ffd6a5', '#a0c4ff', '#fdffb6', '#ffffff'][Math.floor(rng() * 6)];
  g.add(part(cyl, '#88c9a1', [0, 0.04, 0], [0.006, 0.08, 0.006]));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    g.add(part(sphere, petal, [Math.cos(a) * 0.022, 0.085, Math.sin(a) * 0.022], [0.018, 0.01, 0.018]));
  }
  g.add(part(sphere, '#ffe066', [0, 0.09, 0], [0.014, 0.012, 0.014]));
  return g;
}

function mushroom(): THREE.Group {
  const g = new THREE.Group();
  g.add(part(cyl, '#fff4e6', [0, 0.04, 0], [0.022, 0.08, 0.022]));
  const cap = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), toon('#ff9aa2'));
  cap.position.y = 0.075;
  cap.scale.set(0.055, 0.045, 0.055);
  g.add(cap);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.4;
    g.add(part(sphere, '#ffffff', [Math.cos(a) * 0.03, 0.105, Math.sin(a) * 0.03], [0.009, 0.006, 0.009]));
  }
  return g;
}

function pond(): THREE.Mesh {
  const geo = new THREE.SphereGeometry(R + 0.006, 32, 6, 0, Math.PI * 2, 0, 0.17);
  const m = new THREE.Mesh(geo, toon('#b9dcff'));
  return m;
}

function cloud(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  const n = 3 + Math.floor(rng() * 2);
  for (let i = 0; i < n; i++) {
    const s = 0.13 + rng() * 0.08;
    g.add(part(sphere, '#ffffff', [(i - n / 2) * 0.16, (rng() - 0.5) * 0.06, (rng() - 0.5) * 0.08], [s, s * 0.8, s]));
  }
  return g;
}

function randomUnit(rng: () => number): THREE.Vector3 {
  const z = rng() * 2 - 1;
  const a = rng() * Math.PI * 2;
  const r = Math.sqrt(1 - z * z);
  return new THREE.Vector3(r * Math.cos(a), z, r * Math.sin(a));
}

export interface World {
  planet: THREE.Mesh;
  halo: THREE.Sprite;
  update(dt: number): void;
}

export function buildWorld(scene: THREE.Scene): World {
  const rng = mulberry32(20261113);
  const planet = planetMesh();
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
  const spot = (minAngle: number): THREE.Vector3 => {
    for (let tries = 0; tries < 60; tries++) {
      const v = randomUnit(rng);
      if (taken.every((t) => t.angleTo(v) > minAngle)) {
        taken.push(v);
        return v;
      }
    }
    const v = randomUnit(rng);
    taken.push(v);
    return v;
  };

  for (let i = 0; i < 4; i++) {
    const p = pond();
    p.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), spot(0.5));
    scene.add(p);
  }
  const props: [() => THREE.Object3D, number, number][] = [
    [() => roundTree(rng), 9, 0.3],
    [() => blossomTree(rng), 7, 0.3],
    [() => pineTree(), 6, 0.28],
    [() => rock(rng), 10, 0.2],
    [() => mushroom(), 8, 0.14],
    [() => flower(rng), 40, 0.07],
  ];
  for (const [make, count, gap] of props) {
    for (let i = 0; i < count; i++) {
      const obj = make();
      const s = 0.85 + rng() * 0.35;
      obj.scale.setScalar(s);
      placeOnSphere(obj, spot(gap), R - 0.01, rng() * Math.PI * 2);
      scene.add(obj);
    }
  }

  const clouds: { pivot: THREE.Object3D; speed: number }[] = [];
  for (let i = 0; i < 6; i++) {
    const pivot = new THREE.Object3D();
    pivot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), randomUnit(rng));
    const c = cloud(rng);
    c.position.set(R + 0.75 + rng() * 0.35, 0, 0);
    c.rotation.z = Math.PI / 2;
    pivot.add(c);
    pivot.rotation.y = rng() * Math.PI * 2;
    scene.add(pivot);
    clouds.push({ pivot, speed: 0.04 + rng() * 0.05 });
  }

  return {
    planet,
    halo,
    update(dt) {
      for (const c of clouds) c.pivot.rotateY(c.speed * dt);
    },
  };
}
