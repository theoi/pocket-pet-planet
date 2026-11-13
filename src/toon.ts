import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

let gradient: THREE.DataTexture | null = null;

function gradientMap(): THREE.DataTexture {
  if (!gradient) {
    gradient = new THREE.DataTexture(new Uint8Array([110, 185, 255]), 3, 1, THREE.RedFormat);
    gradient.minFilter = THREE.NearestFilter;
    gradient.magFilter = THREE.NearestFilter;
    gradient.generateMipmaps = false;
    gradient.needsUpdate = true;
  }
  return gradient;
}

const cache = new Map<string, THREE.MeshToonMaterial>();

/** Shared soft toon material per color; cached so dozens of props don't each compile a program. */
export function toon(color: string): THREE.MeshToonMaterial {
  let m = cache.get(color);
  if (!m) {
    m = new THREE.MeshToonMaterial({ color, gradientMap: gradientMap() });
    cache.set(color, m);
  }
  return m;
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const UP = new THREE.Vector3(0, 1, 0);

/** Place `obj` on a sphere of `radius` at unit `normal`, standing upright, with a random spin. */
export function placeOnSphere(obj: THREE.Object3D, normal: THREE.Vector3, radius: number, spin = 0): void {
  obj.position.copy(normal).multiplyScalar(radius);
  obj.quaternion.setFromUnitVectors(UP, normal);
  obj.rotateY(spin);
}

export function canvasTexture(draw: (ctx: CanvasRenderingContext2D, s: number) => void, size = 128): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  draw(ctx, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/**
 * Bakes every mesh under `root` (except direct children flagged `userData.keep`) into one mesh per material,
 * in root-local space. Static decorations become a handful of draw calls instead of hundreds.
 */
export function mergeByMaterial(root: THREE.Object3D): void {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert();
  const buckets = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const m = new THREE.Matrix4();
  const visit = (o: THREE.Object3D, top: boolean) => {
    for (const c of o.children) {
      if (top && c.userData.keep) continue;
      if (c instanceof THREE.Mesh && !Array.isArray(c.material) && c.visible) {
        const g = c.geometry.index ? c.geometry.toNonIndexed() : c.geometry.clone();
        for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
        g.applyMatrix4(m.multiplyMatrices(inv, c.matrixWorld));
        const list = buckets.get(c.material) ?? [];
        list.push(g);
        buckets.set(c.material, list);
      }
      visit(c, false);
    }
  };
  visit(root, true);
  const kept = root.children.filter((c) => c.userData.keep);
  root.clear();
  for (const k of kept) root.add(k);
  for (const [mat, geos] of buckets) {
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, mat);
    mesh.userData.merged = true;
    root.add(mesh);
  }
}

/** Free geometries created by mergeByMaterial under `root`. */
export function disposeMerged(root: THREE.Object3D): void {
  root.traverse((o) => {
    if (o.userData.merged && o instanceof THREE.Mesh) o.geometry.dispose();
  });
}
