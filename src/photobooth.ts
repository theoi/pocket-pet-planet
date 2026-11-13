export type FrameId = 'cozy' | 'scallop' | 'polaroid' | 'starry' | 'none';

export const FRAMES: { id: FrameId; name: string }[] = [
  { id: 'cozy', name: 'Cozy' },
  { id: 'scallop', name: 'Scallop' },
  { id: 'polaroid', name: 'Polaroid' },
  { id: 'starry', name: 'Starry' },
  { id: 'none', name: 'No frame' },
];

export const STICKERS = ['💖', '⭐', '🌸', '🍓', '🎀', '🌈', '✨', '🐾', '🍂', '🏮', '🎃', '❄️', '☁️', '🌙', '🍄', '💌'];

export interface Sticker {
  id: number;
  emoji: string;
  /** Centre, as a fraction of the postcard width/height. */
  x: number;
  y: number;
  /** Size as a fraction of the postcard width. */
  size: number;
  rot: number;
}

export interface Postcard {
  photo: HTMLCanvasElement;
  frame: FrameId;
  stickers: Sticker[];
  caption: string;
}

const FONT = 'ui-rounded, "SF Pro Rounded", "Nunito", "Varela Round", system-ui, sans-serif';

/** Output size: landscape 1600x1200 or portrait 1200x1600, matching the screen's shape. */
export function cardSize(photo: HTMLCanvasElement): [number, number] {
  return photo.width >= photo.height ? [1600, 1200] : [1200, 1600];
}

/** Where the photo sits inside the card for each frame (fractions of the card). */
function photoRect(frame: FrameId, w: number, h: number): [number, number, number, number] {
  const m = Math.min(w, h);
  switch (frame) {
    case 'none':
      return [0, 0, w, h];
    case 'polaroid':
      return [m * 0.06, m * 0.06, w - m * 0.12, h - m * 0.06 - m * 0.2];
    default:
      return [m * 0.07, m * 0.07, w - m * 0.14, h - m * 0.14 - m * 0.05];
  }
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

/** Draws the whole postcard into ctx at w×h. Used for both the live preview and the exported PNG. */
export function drawPostcard(ctx: CanvasRenderingContext2D, w: number, h: number, card: Postcard, opts: { stickers?: boolean } = {}): void {
  const { photo, frame } = card;
  const m = Math.min(w, h);
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  // Card paper
  const paper: Record<FrameId, string> = { cozy: '#fff7fb', scallop: '#ffd9ea', polaroid: '#fffdf8', starry: '#2f2a5e', none: '#000' };
  ctx.fillStyle = paper[frame];
  ctx.fillRect(0, 0, w, h);
  if (frame === 'scallop') {
    ctx.fillStyle = '#ffffff';
    const r = m * 0.022;
    for (let x = r; x < w; x += r * 2.2) for (const y of [r, h - r]) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let y = r; y < h; y += r * 2.2) for (const x of [r, w - r]) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (frame === 'starry') {
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = ['#fff6a8', '#ffd6f0', '#c8f7ff', '#ffffff'][i % 4];
      ctx.globalAlpha = 0.5 + rnd() * 0.5;
      ctx.beginPath();
      ctx.arc(rnd() * w, rnd() * h, m * (0.002 + rnd() * 0.004), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  // Photo, cropped to cover its window.
  const [px, py, pw, ph] = photoRect(frame, w, h);
  ctx.save();
  roundRect(ctx, px, py, pw, ph, frame === 'none' ? 0 : m * 0.035);
  ctx.clip();
  const s = Math.max(pw / photo.width, ph / photo.height);
  const dw = photo.width * s, dh = photo.height * s;
  ctx.drawImage(photo, px + (pw - dw) / 2, py + (ph - dh) / 2, dw, dh);
  ctx.restore();
  if (frame !== 'none') {
    ctx.strokeStyle = frame === 'starry' ? '#ffe08a' : '#ffffff';
    ctx.lineWidth = m * 0.008;
    roundRect(ctx, px, py, pw, ph, m * 0.035);
    ctx.stroke();
  }

  // Caption
  if (frame !== 'none') {
    const cy = frame === 'polaroid' ? py + ph + (h - py - ph) / 2 : py + ph + (h - py - ph) / 2;
    ctx.fillStyle = frame === 'starry' ? '#fff3c4' : '#7a5a8c';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let size = m * (frame === 'polaroid' ? 0.055 : 0.04);
    ctx.font = `800 ${size}px ${FONT}`;
    // Shrink long captions (portrait cards) so they always fit inside the paper.
    const room = w * 0.88;
    const tw = ctx.measureText(card.caption).width;
    if (tw > room) {
      size *= room / tw;
      ctx.font = `800 ${size}px ${FONT}`;
    }
    ctx.fillText(card.caption, w / 2, cy);
  }

  if (opts.stickers !== false) drawStickers(ctx, w, h, card.stickers);
  ctx.restore();
}

export function drawStickers(ctx: CanvasRenderingContext2D, w: number, h: number, stickers: Sticker[]): void {
  for (const st of stickers) {
    const size = st.size * w;
    ctx.save();
    ctx.translate(st.x * w, st.y * h);
    ctx.rotate(st.rot);
    ctx.font = `${size}px "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // White die-cut outline so stickers pop off the photo.
    ctx.shadowColor = 'rgba(255,255,255,0.95)';
    ctx.shadowBlur = size * 0.12;
    ctx.fillText(st.emoji, 0, size * 0.04);
    ctx.shadowColor = 'rgba(90,50,110,0.25)';
    ctx.shadowBlur = size * 0.06;
    ctx.shadowOffsetY = size * 0.03;
    ctx.fillText(st.emoji, 0, size * 0.04);
    ctx.restore();
  }
}

export function exportPostcard(card: Postcard): Promise<Blob> {
  const [w, h] = cardSize(card.photo);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  drawPostcard(c.getContext('2d')!, w, h, card);
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('PNG encoding failed'))), 'image/png'));
}

export function postcardName(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `pocket-pet-planet-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.png`;
}

/**
 * Save the postcard: the share sheet on touch devices that support sharing files, otherwise a normal download.
 * Returns how it was delivered so the UI can show the long-press fallback when neither is certain.
 */
export async function deliver(blob: Blob, name: string): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const file = new File([blob], name, { type: 'image/png' });
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (coarse && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'Pocket Pet Planet' });
      return 'shared';
    } catch (e) {
      if ((e as DOMException).name === 'AbortError') return 'cancelled';
      // Fall through to a download.
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
  return 'downloaded';
}
