/**
 * All sounds are synthesised live with the Web Audio API (no audio files), so there is nothing to license.
 * The AudioContext is only created inside a user-gesture handler, per browser autoplay rules.
 */

const MUTE_KEY = 'pocket-pet-planet:muted';
// C major pentatonic across a few octaves: everything played together stays consonant.
const PENTA = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
const CHORDS = [
  [130.81, 196.0, 246.94, 329.63], // Cmaj7
  [110.0, 164.81, 196.0, 261.63], // Am7
  [87.31, 130.81, 164.81, 220.0], // Fmaj7
  [98.0, 146.83, 196.0, 246.94], // G6-ish
];

export type Sfx = 'bloom' | 'select' | 'feed' | 'full' | 'treat' | 'evolve' | 'egg' | 'hatch' | 'unlock' | 'wear' | 'catch' | 'gameEnd' | 'rename';

export class Sound {
  ctx: AudioContext | null = null;
  muted: boolean;
  private master: GainNode | null = null;
  private sfxBus: GainNode | null = null;
  private ambBus: GainNode | null = null;
  private chord = 0;
  private padVoices: { osc: OscillatorNode[]; gain: GainNode }[] = [];
  private noise: AudioBuffer | null = null;
  private nightK = 0;
  /** Quieter while the mini-game has its own focus. */
  private ambienceLevel = 1;

  constructor() {
    this.muted = localStorage.getItem(MUTE_KEY) === '1';
    const unlock = () => {
      this.ensure();
      if (this.ctx) {
        for (const t of ['pointerdown', 'keydown', 'touchend']) window.removeEventListener(t, unlock, true);
      }
    };
    for (const t of ['pointerdown', 'keydown', 'touchend']) window.addEventListener(t, unlock, true);
    document.addEventListener('visibilitychange', () => {
      if (!this.ctx) return;
      if (document.visibilityState === 'hidden') void this.ctx.suspend();
      else if (!this.muted) void this.ctx.resume();
    });
  }

  get state(): string {
    return this.ctx ? this.ctx.state : 'none';
  }

  private ensure(): void {
    if (this.ctx) return;
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    // A gentle compressor keeps stacked chimes from ever getting harsh.
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);
    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = 0.5;
    this.sfxBus.connect(this.master);
    this.ambBus = ctx.createGain();
    this.ambBus.gain.value = 0.0;
    this.ambBus.connect(this.master);
    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = this.noise.getChannelData(0);
    let b = 0;
    for (let i = 0; i < len; i++) {
      b = 0.97 * b + 0.03 * (Math.random() * 2 - 1); // brown-ish noise: soft, never hissy
      data[i] = b * 3;
    }
    void ctx.resume();
    this.applyMute(true);
    this.startAmbience();
  }

  /** Listen to the final mix (for level checks). */
  tap(node: AudioNode): void {
    this.master?.connect(node);
  }

  setMuted(m: boolean): void {
    this.muted = m;
    localStorage.setItem(MUTE_KEY, m ? '1' : '0');
    this.applyMute(false);
  }

  private applyMute(first: boolean): void {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(this.muted ? 0 : 0.9, t + (first ? 2.5 : 0.4));
    if (!this.muted && this.ctx.state === 'suspended') void this.ctx.resume();
  }

  private rainGain: GainNode | null = null;

  /** Soft rain hiss under the music while it's raining (0..1). */
  setRain(k: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.ambBus || !this.noise) return;
    if (!this.rainGain) {
      if (k < 0.02) return;
      const src = ctx.createBufferSource();
      src.buffer = this.noise;
      src.loop = true;
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 500;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 2600;
      this.rainGain = ctx.createGain();
      this.rainGain.gain.value = 0;
      src.connect(hp).connect(lp).connect(this.rainGain).connect(this.ambBus);
      src.start();
    }
    this.rainGain.gain.setTargetAtTime(k * 0.22, ctx.currentTime, 0.8);
  }

  setNight(k: number): void {
    this.nightK = k;
    this.updateAmbienceLevel();
  }

  setFocus(game: boolean): void {
    this.ambienceLevel = game ? 0.45 : 1;
    this.updateAmbienceLevel();
  }

  private updateAmbienceLevel(): void {
    if (!this.ctx || !this.ambBus) return;
    const target = (0.75 - this.nightK * 0.3) * this.ambienceLevel;
    this.ambBus.gain.setTargetAtTime(target, this.ctx.currentTime, 1.2);
  }

  // --- ambience ----------------------------------------------------------
  private startAmbience(): void {
    this.updateAmbienceLevel();
    this.nextChord();
    const tick = () => {
      if (!this.ctx) return;
      if (this.ctx.state === 'running' && !this.muted) {
        // A sparse music-box melody; sparser at night.
        if (Math.random() < 0.55 - this.nightK * 0.3) this.musicBox();
      }
      window.setTimeout(tick, 1400 + Math.random() * 2200);
    };
    tick();
    window.setInterval(() => this.nextChord(), 9000);
  }

  private nextChord(): void {
    const ctx = this.ctx;
    if (!ctx || !this.ambBus) return;
    const t = ctx.currentTime;
    for (const v of this.padVoices) {
      v.gain.gain.cancelScheduledValues(t);
      v.gain.gain.setValueAtTime(v.gain.gain.value, t);
      v.gain.gain.linearRampToValueAtTime(0, t + 4);
      v.osc.forEach((o) => o.stop(t + 4.2));
    }
    this.padVoices = [];
    const chord = CHORDS[this.chord++ % CHORDS.length];
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    lp.connect(this.ambBus);
    for (const f of chord) {
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.gain.linearRampToValueAtTime(0.035, t + 4);
      gain.connect(lp);
      const osc = [-4, 4].map((detune) => {
        const o = ctx.createOscillator();
        o.type = 'triangle';
        o.frequency.value = f;
        o.detune.value = detune;
        o.connect(gain);
        o.start(t);
        return o;
      });
      this.padVoices.push({ osc, gain });
    }
  }

  private musicBox(): void {
    const ctx = this.ctx!;
    const f = PENTA[3 + Math.floor(Math.random() * 8)];
    this.tone(f, ctx.currentTime, 1.6, 0.05, 'sine', this.ambBus!);
    if (Math.random() < 0.35) this.tone(f * 1.5, ctx.currentTime + 0.22, 1.3, 0.03, 'sine', this.ambBus!);
  }

  // --- building blocks ---------------------------------------------------
  private tone(freq: number, at: number, dur: number, vol: number, type: OscillatorType = 'sine', bus?: GainNode, glideTo?: number): void {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, at);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, at + dur * 0.6);
    g.gain.setValueAtTime(0, at);
    g.gain.linearRampToValueAtTime(vol, at + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(bus ?? this.sfxBus!);
    o.start(at);
    o.stop(at + dur + 0.05);
  }

  /** Soft bell: fundamental plus a quiet inharmonic partial. */
  private bell(freq: number, at: number, vol = 0.18, dur = 1.1): void {
    this.tone(freq, at, dur, vol, 'sine');
    this.tone(freq * 2.76, at, dur * 0.4, vol * 0.18, 'sine');
  }

  private ready(): boolean {
    return !!this.ctx && this.ctx.state === 'running' && !this.muted;
  }

  play(kind: Sfx, extra = 0): void {
    if (!this.ready()) return;
    const t = this.ctx!.currentTime + 0.01;
    switch (kind) {
      case 'bloom':
        this.bell(PENTA[8 + Math.floor(Math.random() * 3)], t, 0.05, 0.6);
        break;
      case 'select':
        this.bell(PENTA[5], t, 0.12, 0.6);
        this.bell(PENTA[7], t + 0.07, 0.1, 0.7);
        break;
      case 'feed':
        this.tone(330, t, 0.25, 0.16, 'sine', undefined, 520); // little "bloop" of a bite
        this.bell(PENTA[6], t + 0.42, 0.12);
        this.bell(PENTA[8], t + 0.52, 0.1);
        break;
      case 'treat':
        this.tone(392, t, 0.22, 0.15, 'sine', undefined, 660);
        [5, 7, 9, 10].forEach((n, i) => this.bell(PENTA[n], t + 0.4 + i * 0.07, 0.1));
        break;
      case 'full':
        this.tone(220, t, 0.18, 0.1, 'triangle', undefined, 180);
        this.tone(196, t + 0.14, 0.22, 0.09, 'triangle', undefined, 160);
        break;
      case 'evolve':
        [0, 2, 4, 5, 7, 9, 10].forEach((n, i) => this.bell(PENTA[n], t + i * 0.09, 0.12, 1.4));
        this.shimmer(t + 0.7, 1.4);
        break;
      case 'egg':
        this.bell(PENTA[4], t, 0.12);
        this.bell(PENTA[6], t + 0.15, 0.12);
        this.bell(PENTA[9], t + 0.3, 0.1, 1.4);
        break;
      case 'hatch':
        this.tone(600, t, 0.08, 0.1, 'triangle', undefined, 900); // crack
        this.tone(700, t + 0.1, 0.08, 0.1, 'triangle', undefined, 1000);
        [5, 7, 8, 10].forEach((n, i) => this.bell(PENTA[n], t + 0.3 + i * 0.1, 0.11));
        break;
      case 'unlock':
        [4, 6, 8].forEach((n, i) => this.bell(PENTA[n], t + i * 0.11, 0.11, 1.2));
        this.shimmer(t + 0.3, 0.9);
        break;
      case 'wear':
        this.shimmer(t, 0.5);
        this.bell(PENTA[8], t + 0.05, 0.08, 0.6);
        break;
      case 'rename':
        this.bell(PENTA[7], t, 0.1, 0.7);
        this.bell(PENTA[9], t + 0.1, 0.09, 0.8);
        break;
      case 'catch':
        this.bell(PENTA[Math.min(PENTA.length - 1, 4 + (extra % 7))], t, 0.09, 0.5);
        break;
      case 'gameEnd':
        [0, 4, 7, 9].forEach((n, i) => this.bell(PENTA[n] * 1, t + i * 0.13, 0.12, 1.3));
        break;
    }
  }

  private shimmer(at: number, dur: number): void {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const hp = ctx.createBiquadFilter();
    hp.type = 'bandpass';
    hp.frequency.value = 6000;
    hp.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, at);
    g.gain.linearRampToValueAtTime(0.05, at + 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    src.connect(hp).connect(g).connect(this.sfxBus!);
    src.start(at);
    src.stop(at + dur);
  }

  /** A low, rumbly purr: filtered noise, amplitude-modulated at ~24 Hz, in breaths. */
  purr(seconds = 1.6): void {
    if (!this.ready()) return;
    const ctx = this.ctx!;
    const t = ctx.currentTime + 0.01;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 380;
    const am = ctx.createGain();
    am.gain.value = 0.5;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 24;
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 0.5;
    lfo.connect(lfoDepth).connect(am.gain);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, t);
    // Two "breaths": in, out.
    const half = seconds / 2;
    env.gain.linearRampToValueAtTime(0.32, t + half * 0.35);
    env.gain.linearRampToValueAtTime(0.12, t + half);
    env.gain.linearRampToValueAtTime(0.26, t + half * 1.35);
    env.gain.linearRampToValueAtTime(0, t + seconds);
    src.connect(lp).connect(am).connect(env).connect(this.sfxBus!);
    src.start(t);
    lfo.start(t);
    src.stop(t + seconds + 0.05);
    lfo.stop(t + seconds + 0.05);
    this.bell(PENTA[6], t + 0.1, 0.05, 0.6);
  }
}
