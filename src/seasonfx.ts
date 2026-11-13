import * as THREE from 'three';
import type { Festival, Season } from './seasons';
import { canvasTexture, mulberry32 } from './toon';
import { R, type World } from './world';

const glowTex = canvasTexture((ctx, s) => {
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.7)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
}, 64);

const leafTex = canvasTexture((ctx, s) => {
  ctx.translate(s / 2, s / 2);
  ctx.rotate(0.6);
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(0, 0, s * 0.42, s * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
}, 32);

interface Faller { dir: THREE.Vector3; t1: THREE.Vector3; h: number; v: number; ph: number }

/** Seasonal particles plus festival dressing. Everything is points or instanced meshes: a handful of draw calls. */
export class SeasonFX {
  private fallers: Faller[] = [];
  private fallPoints: THREE.Points | null = null;
  private glows: { points: THREE.Points; base: number; nightOnly: number }[] = [];
  private lanterns: { mesh: THREE.InstancedMesh; glow: THREE.Points; items: { dir: THREE.Vector3; h: number; v: number; ph: number }[] } | null = null;
  private bunting: THREE.Group | null = null;
  readonly decor: string[] = [];

  constructor(scene: THREE.Scene, world: World, readonly season: Season, readonly festival: Festival | null) {
    const rng = mulberry32(99);
    const fallColors: Partial<Record<Season, string[]>> = {
      spring: ['#ffc8dd', '#ffd6e8', '#fff0f6'],
      autumn: ['#ffb37a', '#f7a09a', '#ffd27a', '#e8957c'],
      summer: ['#ffffff', '#fffbe6'],
    };
    const cols = fallColors[season];
    if (cols) {
      const n = festival?.id === 'blossom' ? 160 : season === 'summer' ? 40 : 80;
      const pos = new Float32Array(n * 3);
      const col = new Float32Array(n * 3);
      const c = new THREE.Color();
      for (let i = 0; i < n; i++) {
        const dir = new THREE.Vector3().randomDirection();
        this.fallers.push({ dir, t1: new THREE.Vector3().randomDirection().cross(dir).normalize(), h: rng(), v: 0.05 + rng() * 0.05, ph: rng() * 10 });
        c.set(cols[i % cols.length]).toArray(col, i * 3);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      this.fallPoints = new THREE.Points(
        g,
        new THREE.PointsMaterial({ size: season === 'summer' ? 0.05 : 0.075, map: season === 'summer' ? glowTex : leafTex, vertexColors: true, transparent: true, depthWrite: false, alphaTest: 0.05 }),
      );
      this.fallPoints.frustumCulled = false;
      scene.add(this.fallPoints);
      this.decor.push(season === 'autumn' ? 'falling-leaves' : season === 'spring' ? 'falling-petals' : 'dandelion-fluff');
    }

    // Pumpkins glow at night in autumn; during Pumpkin Night they glow all day too.
    const pumpkins = world.props.filter((p) => p.kind === 'pumpkin');
    if (pumpkins.length) {
      this.addGlow(
        scene,
        pumpkins.map((p) => p.normal.clone().multiplyScalar(R + 0.06)),
        ['#ffb35c'],
        0.32,
        festival?.id === 'pumpkin' ? 0.55 : 0,
      );
      if (festival?.id === 'pumpkin') this.decor.push('glowing-pumpkins');
    }

    if (festival?.id === 'lantern') this.makeLanterns(scene, rng);
    if (festival?.id === 'winterlights') this.makeFairyLights(scene, world, rng);
    if (festival?.id === 'blossom' || festival?.id === 'midsummer') this.makeBunting(scene, festival.id);
  }

  private addGlow(scene: THREE.Scene, at: THREE.Vector3[], colors: string[], size: number, dayLevel: number): THREE.Points {
    const pos = new Float32Array(at.length * 3);
    const col = new Float32Array(at.length * 3);
    const c = new THREE.Color();
    at.forEach((v, i) => {
      v.toArray(pos, i * 3);
      c.set(colors[i % colors.length]).toArray(col, i * 3);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const points = new THREE.Points(g, new THREE.PointsMaterial({ size, map: glowTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: dayLevel }));
    scene.add(points);
    this.glows.push({ points, base: dayLevel, nightOnly: 1 - dayLevel });
    return points;
  }

  private makeLanterns(scene: THREE.Scene, rng: () => number) {
    const n = 22;
    const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.065, 12, 8), new THREE.MeshBasicMaterial({ color: '#ffffff' }), n);
    const cols = ['#ffb46b', '#ff9a8f', '#ffd27a', '#ffc2a8'];
    const c = new THREE.Color();
    const items = [];
    for (let i = 0; i < n; i++) {
      mesh.setColorAt(i, c.set(cols[i % cols.length]));
      items.push({ dir: new THREE.Vector3().randomDirection(), h: rng(), v: 0.035 + rng() * 0.03, ph: rng() * 10 });
    }
    mesh.frustumCulled = false;
    scene.add(mesh);
    const glow = this.addGlow(scene, items.map(() => new THREE.Vector3()), cols, 0.34, 0.45);
    glow.frustumCulled = false;
    this.lanterns = { mesh, glow, items };
    this.decor.push('floating-lanterns');
  }

  private makeFairyLights(scene: THREE.Scene, world: World, rng: () => number) {
    const trees = world.props.filter((p) => p.kind === 'tree' || p.kind === 'blossom' || p.kind === 'pine');
    const per = 7;
    const n = trees.length * per;
    const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.011, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffffff' }), n);
    const cols = ['#ff8fab', '#ffe066', '#9bf6ff', '#caffbf', '#cdb4db'];
    const at: THREE.Vector3[] = [];
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const c = new THREE.Color();
    trees.forEach((t, ti) => {
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), t.normal);
      for (let k = 0; k < per; k++) {
        const a = (k / per) * Math.PI * 2 + rng();
        const y = 0.22 + (k / per) * 0.14;
        const r = 0.13 - (k / per) * 0.05;
        const local = new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r).multiplyScalar(t.scale);
        const w = local.applyQuaternion(q).add(t.normal.clone().multiplyScalar(R - 0.01));
        m.makeTranslation(w.x, w.y, w.z);
        mesh.setMatrixAt(ti * per + k, m);
        mesh.setColorAt(ti * per + k, c.set(cols[(ti + k) % cols.length]));
        at.push(w.clone());
      }
    });
    scene.add(mesh);
    this.addGlow(scene, at, cols, 0.12, 0.25);
    this.decor.push('fairy-lights');
  }

  private makeBunting(scene: THREE.Scene, id: string) {
    const g = new THREE.Group();
    const r = R + 0.62;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.006, 4, 120), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
    ring.rotation.x = Math.PI / 2;
    g.add(ring);
    const n = 44;
    const flags = new THREE.InstancedMesh(new THREE.ConeGeometry(0.05, 0.11, 3), new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide }), n);
    const cols = id === 'blossom' ? ['#ffc8dd', '#ffffff', '#ffafcc', '#fdffb6'] : ['#ffd75e', '#a0c4ff', '#caffbf', '#ffadad'];
    const c = new THREE.Color();
    const o = new THREE.Object3D();
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      o.position.set(Math.cos(a) * r, -0.06, Math.sin(a) * r);
      o.rotation.set(Math.PI, -a, 0);
      o.scale.set(1, 1, 0.15);
      o.updateMatrix();
      flags.setMatrixAt(i, o.matrix);
      flags.setColorAt(i, c.set(cols[i % cols.length]));
    }
    g.add(flags);
    g.rotation.set(0.45, 0, 0.25);
    scene.add(g);
    this.bunting = g;
    this.decor.push('bunting');
  }

  tick(dt: number, time: number, night: number): void {
    if (this.fallPoints) {
      const a = this.fallPoints.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = a.array as Float32Array;
      this.fallers.forEach((f, i) => {
        f.h -= f.v * dt;
        if (f.h < 0) {
          f.h += 1;
          f.dir.randomDirection();
          f.t1.randomDirection().cross(f.dir).normalize();
        }
        const r = R + 0.01 + f.h * 1.1;
        const sway = Math.sin(time * 1.1 + f.ph) * 0.09;
        arr[i * 3] = f.dir.x * r + f.t1.x * sway;
        arr[i * 3 + 1] = f.dir.y * r + f.t1.y * sway;
        arr[i * 3 + 2] = f.dir.z * r + f.t1.z * sway;
      });
      a.needsUpdate = true;
    }
    for (const g of this.glows) {
      const m = g.points.material as THREE.PointsMaterial;
      m.opacity = (g.base + g.nightOnly * night) * (0.85 + 0.15 * Math.sin(time * 3));
      g.points.visible = m.opacity > 0.01;
    }
    if (this.lanterns) {
      const { mesh, glow, items } = this.lanterns;
      const gp = glow.geometry.getAttribute('position') as THREE.BufferAttribute;
      const m = new THREE.Matrix4();
      const p = new THREE.Vector3();
      items.forEach((it, i) => {
        it.h += it.v * dt;
        if (it.h > 1) {
          it.h = 0;
          it.dir.randomDirection();
        }
        p.copy(it.dir).multiplyScalar(R + 0.15 + it.h * 1.6);
        p.x += Math.sin(time * 0.7 + it.ph) * 0.05;
        const s = Math.min(1, it.h * 8, (1 - it.h) * 5);
        m.makeScale(s, s * 1.25, s).setPosition(p);
        mesh.setMatrixAt(i, m);
        gp.setXYZ(i, p.x, p.y, p.z);
      });
      mesh.instanceMatrix.needsUpdate = true;
      gp.needsUpdate = true;
    }
    if (this.bunting) this.bunting.rotation.y += dt * 0.05;
  }
}
