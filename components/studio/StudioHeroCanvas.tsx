import { ProductBox, SerumBottle } from './Products';

function PhoneAd() {
  return (
    <div className="relative mx-auto aspect-[9/19] w-[13.5rem] rounded-[2.4rem] border border-white/10 bg-[#0a0a09] p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[radial-gradient(120%_80%_at_50%_10%,#1d2008,#060606_70%)]">
        {/* story progress */}
        <div className="absolute inset-x-3 top-3 z-10 flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="ad-seg h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
              <i />
            </span>
          ))}
        </div>
        <div className="absolute left-3 top-6 z-10 flex items-center gap-1.5">
          <span className="h-5 w-5 rounded-full bg-[#d8f938]" />
          <span className="text-[9px] font-semibold text-white">yourbrand</span>
          <span className="text-[8px] text-white/50">Sponsored</span>
        </div>

        <div className="ad-orb absolute left-1/2 top-[30%] h-36 w-36 -translate-x-1/2 rounded-full bg-[#d8f938]/25 blur-xl" />
        <div className="absolute inset-x-0 top-[16%] flex justify-center">
          <SerumBottle className="ad-product h-44 w-auto" />
        </div>

        {/* brand slash wipe */}
        <div className="ad-wipe absolute -top-10 bottom-[-2.5rem] left-1/3 w-24 bg-[#d8f938]" />

        <div className="absolute inset-x-4 bottom-20">
          <p className="ad-line overflow-hidden font-display text-[22px] font-semibold leading-[1.05] text-white">
            <span>Glow in</span>
          </p>
          <p className="ad-line overflow-hidden font-display text-[22px] font-semibold leading-[1.05] text-[#d8f938]">
            <span>7 days.</span>
          </p>
        </div>
        <div className="absolute inset-x-4 bottom-6">
          <div className="ad-cta relative flex items-center justify-center rounded-full bg-[#d8f938] py-2.5 text-[11px] font-semibold text-[#040404]">
            Shop now →
            <span className="ad-tap absolute right-8 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductShoot() {
  return (
    <div className="gradient-border relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#e9e9e3,#cfcfc6)]">
      {/* seamless backdrop + pedestal */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,#d4d4cb,#bdbdb2)]" />
      <div className="absolute bottom-[18%] left-1/2 h-6 w-40 -translate-x-1/2 rounded-[50%] bg-[#b0b0a5]" />
      <div className="vf-turn absolute inset-x-0 bottom-[20%] flex justify-center">
        <ProductBox className="h-40 w-auto" />
      </div>

      {/* viewfinder */}
      <div className="pointer-events-none absolute inset-4">
        {['left-0 top-0 border-l-2 border-t-2', 'right-0 top-0 border-r-2 border-t-2', 'left-0 bottom-0 border-l-2 border-b-2', 'right-0 bottom-0 border-r-2 border-b-2'].map((c) => (
          <span key={c} className={`absolute h-5 w-5 border-[#040404]/70 ${c}`} />
        ))}
        <span className="vf-focus absolute left-1/2 top-[52%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 border-2 border-white" />
        <div className="absolute left-1 top-1 flex items-center gap-1.5 font-mono text-[9px] text-[#040404]/70">
          <span className="rec-blink h-1.5 w-1.5 rounded-full bg-red-500" /> RAW · ISO 100 · 1/125
        </div>
      </div>
      <div className="vf-flash pointer-events-none absolute inset-0 bg-white" />

      {/* captured thumbnails */}
      <div className="absolute bottom-3 left-3 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="vf-thumb flex h-9 w-7 items-end justify-center overflow-hidden rounded-md border border-white/70 bg-[#d9d9d1]"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <ProductBox className="h-5 w-auto" />
          </span>
        ))}
      </div>
    </div>
  );
}

function EditTimeline() {
  return (
    <div className="gradient-border w-full overflow-hidden rounded-3xl bg-gnk-card/80 p-3 backdrop-blur-xl">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#070707]">
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_70%_30%,rgba(216,249,56,0.18),transparent)]" />
        <div className="ed-shape absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16">
          <svg viewBox="0 0 84 48" className="h-full w-full" aria-hidden>
            <path d="M44 0H84L40 48H0Z" fill="#d8f938" />
          </svg>
        </div>
        <p className="absolute bottom-3 left-4 font-display text-sm font-semibold text-white">Launch film · v3</p>
        <span className="absolute right-3 top-3 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white/80">00:15 · 16:9</span>
      </div>
      {/* tracks */}
      <div className="relative mt-3 space-y-1.5">
        <div className="flex gap-1">
          {[28, 18, 34, 20].map((w, i) => (
            <span key={i} className={`h-5 rounded ${i === 2 ? 'bg-[#d8f938]' : 'bg-gnk-fg/15'}`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex h-5 items-center gap-[3px] rounded bg-gnk-fg/5 px-1">
          {Array.from({ length: 40 }, (_, i) => (
            <span
              key={i}
              className="ed-wave w-[2px] flex-1 rounded-full bg-gnk-fg/40"
              style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i % 7) * 0.12}s` }}
            />
          ))}
        </div>
        <span className="ed-playhead absolute -top-1 bottom-[-0.25rem] w-px bg-[#d8f938] shadow-[0_0_8px_#d8f938]" />
      </div>
    </div>
  );
}

/** Hero composition: an ad playing, a product being shot, a film being cut. Zero client JS. */
export function StudioHeroCanvas() {
  return (
    <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
      <div className="hidden md:block">
        <ProductShoot />
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">Product photography</p>
      </div>
      <div>
        <PhoneAd />
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">Motion ad · 9:16</p>
      </div>
      <div className="hidden md:block">
        <EditTimeline />
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gnk-muted">Video production &amp; edit</p>
      </div>
    </div>
  );
}
