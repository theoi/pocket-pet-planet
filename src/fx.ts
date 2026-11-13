import * as THREE from 'three';
import { canvasTexture, toon } from './toon';

interface Particle {
  sprite: THREE.Sprite;
  vel: THREE.Vector3;
  grav: THREE.Vector3;
  life: number;
  max: number;
  size: number;
  spin: number;
}

interface Drop {
  obj: THREE.Object3D;
  t: number;
  target: () => THREE.Vector3;
  up: () => THREE.Vector3;
  onLand: () => void;
}

const heartTex = () =>
  canvasTexture((ctx, s) => {
    ctx.translate(s / 2, s / 2 + 6);
    ctx.beginPath();
    const k = s / 128;
    ctx.moveTo(0, 34 * k);
    ctx.bezierCurveTo(-60 * k, -6 * k, -36 * k, -56 * k, 0, -24 * k);
    ctx.bezierCurveTo(36 * k, -56 * k, 60 * k, -6 * k, 0, 34 * k);
    ctx.fillStyle = '#ff86b8';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8 * k;
    ctx.fill();
    ctx.stroke();
  });

const starTex = () =>
  canvasTexture((ctx, s) => {
    const c = s / 2;
    const g = ctx.createRadialGradient(c, c, 0, c, c, c);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.8)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const r = i % 2 === 0 ? c : c * 0.22;
      ctx.lineTo(c + Math.cos(a) * r, c + Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
  });

const SPARKLE_COLORS = ['#fff6a8', '#ffd6f0', '#c8f7ff', '#ffffff', '#e2d4ff'];

export class FX {
  private parts: Particle[] = [];
  private drops: Drop[] = [];
  private heart = heartTex();
  private star = starTex();

  constructor(private scene: THREE.Scene) {}

  private spawn(map: THREE.Texture, color: string, pos: THREE.Vector3, vel: THREE.Vector3, grav: THREE.Vector3, life: number, size: number, spin = 0) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map, color, transparent: true, depthWrite: false }));
    sprite.position.copy(pos);
    sprite.scale.setScalar(size);
    sprite.renderOrder = 5;
    this.scene.add(sprite);
    this.parts.push({ sprite, vel, grav, life, max: life, size, spin });
  }

  hearts(pos: THREE.Vector3, up: THREE.Vector3, n = 5) {
    for (let i = 0; i < n; i++) {
      const jitter = new THREE.Vector3().randomDirection().multiplyScalar(0.18);
      const vel = up.clone().multiplyScalar(0.35 + Math.random() * 0.25).add(jitter);
      this.spawn(this.heart, '#ffffff', pos.clone().add(jitter.clone().multiplyScalar(0.3)), vel, up.clone().multiplyScalar(0.05), 1.2 + Math.random() * 0.4, 0.11 + Math.random() * 0.05);
    }
  }

  sparkles(pos: THREE.Vector3, up: THREE.Vector3, n = 30, spread = 0.9) {
    for (let i = 0; i < n; i++) {
      const dir = new THREE.Vector3().randomDirection();
      const vel = dir.multiplyScalar(spread * (0.4 + Math.random() * 0.8)).addScaledVector(up, 0.3);
      const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      this.spawn(this.star, color, pos.clone(), vel, up.clone().multiplyScalar(-0.6), 0.9 + Math.random() * 0.8, 0.08 + Math.random() * 0.1, (Math.random() - 0.5) * 8);
    }
  }

  twinkle(pos: THREE.Vector3, up: THREE.Vector3) {
    const p = pos.clone().add(new THREE.Vector3().randomDirection().multiplyScalar(0.18));
    this.spawn(this.star, SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)], p, up.clone().multiplyScalar(0.12), new THREE.Vector3(), 0.9, 0.07, 3);
  }

  berry(target: () => THREE.Vector3, up: () => THREE.Vector3, onLand: () => void) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), toon('#ff6f91'));
    b.scale.set(1, 0.9, 1);
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.03, 6), toon('#7fcf9a'));
    leaf.position.y = 0.055;
    leaf.rotation.x = Math.PI;
    g.add(b, leaf);
    this.scene.add(g);
    this.drops.push({ obj: g, t: 0, target, up, onLand });
  }

  update(dt: number) {
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.sprite);
        p.sprite.material.dispose();
        this.parts.splice(i, 1);
        continue;
      }
      p.vel.addScaledVector(p.grav, dt);
      p.vel.multiplyScalar(1 - dt * 1.2);
      p.sprite.position.addScaledVector(p.vel, dt);
      const k = p.life / p.max;
      p.sprite.material.opacity = Math.min(1, k * 2.5);
      p.sprite.material.rotation += p.spin * dt;
      const pop = k > 0.85 ? (1 - k) / 0.15 : 1;
      p.sprite.scale.setScalar(p.size * pop);
    }
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      d.t += dt;
      const fall = Math.min(1, d.t / 0.45);
      const ease = fall * fall;
      const target = d.target();
      d.obj.position.copy(target).addScaledVector(d.up(), 0.6 * (1 - ease));
      d.obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.up());
      d.obj.rotateY(d.t * 6);
      if (fall >= 1) {
        this.scene.remove(d.obj);
        this.drops.splice(i, 1);
        d.onLand();
      }
    }
  }
}
