import { SPECIES, type Species } from './state';

export interface Critter2D {
  color: string;
  feature: Species;
  stage?: number;
  spots?: string;
  happy?: boolean;
  /** Draw as a flat silhouette (undiscovered sticker). */
  silhouette?: string;
}

/** A flat, sticker-style drawing of a pet, centred on its body at (0,0) with body radius `r`. */
export function drawCritter(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, c: Critter2D): void {
  const sil = c.silhouette;
  const color = sil ?? c.color;
  const accent = sil ?? SPECIES[c.feature].accent;
  const ink = sil ? sil : '#3d3047';
  const stage = c.stage ?? 0;
  const k = r / 34;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(k, k);
  const R = 34;

  if (stage >= 2) {
    // Wings behind everything
    ctx.fillStyle = sil ?? 'rgba(253,246,255,0.95)';
    for (const s of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(34 * s, -8, 20, 11, -0.5 * s, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (stage >= 1) {
    ctx.fillStyle = sil ?? '#fffafd';
    ctx.beginPath();
    ctx.arc(30, 18, 11, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = color;
  if (c.feature === 'mochi') {
    for (const s of [-1, 1]) {
      ctx.save();
      ctx.rotate((stage >= 1 ? 0.35 : 0.22) * s);
      ctx.beginPath();
      ctx.ellipse(13 * s, -R - 14, 8, 22, 0, 0, Math.PI * 2);
      ctx.fill();
      if (!sil) {
        ctx.fillStyle = '#ffd9e8';
        ctx.beginPath();
        ctx.ellipse(13 * s, -R - 14, 4, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = color;
      }
      ctx.restore();
    }
  } else if (c.feature === 'puff') {
    for (const s of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(10 * s, -R + 4);
      ctx.lineTo(24 * s, -R - 16);
      ctx.lineTo(30 * s, -R + 12);
      ctx.fill();
    }
  } else if (c.feature === 'bloop') {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    const tips: [number, number][] = stage >= 1 ? [[0, -R - 18], [-14, -R - 10], [14, -R - 10]] : [[0, -R - 18]];
    for (const [tx, ty] of tips) {
      ctx.beginPath();
      ctx.moveTo(0, -R + 2);
      ctx.lineTo(tx, ty + 4);
      ctx.stroke();
    }
    ctx.fillStyle = accent;
    for (const [tx, ty] of tips) {
      ctx.beginPath();
      ctx.arc(tx, ty, tx === 0 ? 6 : 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    ctx.fillStyle = accent;
    for (const s of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(8 * s, -R - 6, 9, 4, 0.5 * s, 0, Math.PI * 2);
      ctx.fill();
    }
    if (stage >= 1) {
      ctx.fillStyle = sil ?? (stage >= 2 ? '#ffe066' : '#ffafcc');
      ctx.beginPath();
      ctx.arc(0, -R - 9, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 0, R, R * 0.92, 0, 0, Math.PI * 2);
  ctx.fill();
  if (sil) {
    ctx.restore();
    return;
  }
  if (c.spots) {
    ctx.fillStyle = c.spots;
    for (const [sx, sy, sr] of [[-20, -16, 5], [22, -12, 4], [-25, 8, 3.5]]) {
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.fillStyle = '#fff7fb';
  ctx.beginPath();
  ctx.ellipse(0, 9, R * 0.6, R * 0.48, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = ink;
  ctx.strokeStyle = ink;
  for (const s of [-1, 1]) {
    ctx.beginPath();
    if (c.happy) {
      ctx.lineWidth = 3;
      ctx.arc(12 * s, -6, 5, Math.PI * 1.1, Math.PI * 1.9);
      ctx.stroke();
    } else {
      ctx.ellipse(12 * s, -6, 4.5, 5.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(12 * s + 1.5, -8, 1.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = ink;
    }
  }
  ctx.fillStyle = 'rgba(255,143,184,0.75)';
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(22 * s, 3, 6, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = ink;
  ctx.beginPath();
  if (c.happy) {
    ctx.ellipse(0, 4, 6, 6, 0, 0, Math.PI);
    ctx.fill();
  } else {
    ctx.lineWidth = 2.5;
    ctx.arc(0, 2, 4, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
  }
  if (stage >= 2) {
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(0, -R - (c.feature === 'mochi' ? 40 : 26), 15, 5, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}
