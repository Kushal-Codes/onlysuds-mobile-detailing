import React from 'react';
import { SupercarLogo, TachometerMotif } from '../illustrations/SupercarMotifs';
import { getMobileDispatchStatus, businessData } from '../../data/business';
import { Sparkles, MapPin, Star, ShieldCheck, Flame, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const dispatchStatus = getMobileDispatchStatus();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-canvas">
      {/* Supercar Ambient Red Glow Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-red-race/20 via-red-race/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-red-race/15 blur-3xl pointer-events-none" />
      
      {/* Decorative Grid Lines Overlay (Supercar Tech Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242e_1px,transparent_1px),linear-gradient(to_bottom,#1f242e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Dispatch Pill Bar */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-race/50 bg-red-soft/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-red-glow shadow-subtle-glow">
            <span className="w-2.5 h-2.5 rounded-full bg-red-race animate-ping" />
            <span>{dispatchStatus.statusText}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary">
            <MapPin className="w-3.5 h-3.5 text-red-race shrink-0" />
            <span>Austin, TX & Surrounding Metro</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-text-secondary">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">5.0 ★</span>
            <span>(Verified Austin Reviews)</span>
          </div>
        </div>

        {/* Main Grid: Left Typography, Right Real Facebook Image in Supercar Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: 7 Columns */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <SupercarLogo className="w-12 h-12 drop-shadow-[0_0_15px_rgba(229,9,20,0.7)]" />
              <div className="flex flex-col">
                <span className="font-display text-xs font-black tracking-widest uppercase text-red-race">
                  Austin's Doorstep Auto Detailer
                </span>
                <span className="font-display text-sm font-bold text-text-secondary uppercase">
                  Operated by Brice · Mobile Van Dispatch
                </span>
              </div>
            </div>

            {/* Aggressive Supercar Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.98]">
              SHOWROOM SHINE.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-race via-red-electric to-white drop-shadow-[0_0_20px_rgba(229,9,20,0.6)]">
                STRAIGHT TO YOUR DRIVEWAY.
              </span>
            </h1>

            {/* Subcopy */}
            <p className="font-body text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Skip the noisy car wash line. OnlySuds brings professional-grade foam hand washing, deep interior extraction, specialized pet-hair removal, and paint protection directly to your home or office in Austin.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-race px-7 py-4 font-display text-base sm:text-lg font-black uppercase tracking-wider text-white shadow-supercar transition-all hover:bg-red-electric hover:shadow-supercar-lg active:scale-95"
              >
                <Flame className="w-5 h-5 text-white animate-pulse" />
                <span>REQUEST FREE QUOTE</span>
              </button>

              <a
                href={businessData.phone.telLink}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-surface-border bg-surface px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-white hover:border-red-race hover:bg-surface-elevated transition-all"
              >
                <Phone className="w-4 h-4 text-red-race" />
                <span>Call (979) 451-5519</span>
              </a>
            </div>

            {/* Value Pillars */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-surface-border max-w-xl text-xs font-bold uppercase text-text-secondary tracking-wider">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-race shrink-0" />
                <span>100% We Come To You</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-race shrink-0" />
                <span>Paint-Safe Foam Bath</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-race shrink-0" />
                <span>Heavy Pet Hair Removal</span>
              </div>
            </div>
          </div>

          {/* Right: 5 Columns Supercar Card with Real Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Tachometer accent in corner */}
              <div className="hidden sm:block absolute -top-8 -right-8 z-20 opacity-80">
                <TachometerMotif className="w-24 h-24" />
              </div>

              {/* Main Supercar Container Card */}
              <div className="relative rounded-3xl border-2 border-red-race bg-surface-card p-3.5 shadow-supercar-lg overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-carbon-dark border border-surface-border">
                  {/* REAL FACEBOOK IMAGE */}
                  <img
                    src="/images/real/onlysuds_showcase.jpg"
                    alt="OnlySuds Mobile Detailing Austin real customer driveway showcase"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle Red Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-3 left-3 rounded-full border border-red-race bg-canvas/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold uppercase text-red-glow">
                    Verified Facebook Showcase
                  </div>

                  {/* Bottom Info Tag */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-surface-border bg-surface-card/95 backdrop-blur-md p-3 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-mono uppercase text-red-race font-bold">
                          Doorstep Service
                        </span>
                        <span className="font-display text-sm font-bold">
                          Driveway Foam & Full Reset
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-text-secondary bg-surface px-2.5 py-1 rounded-lg border border-surface-border">
                        Austin, TX
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Floating Proof Badge */}
              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-red-race bg-surface-card p-3 shadow-supercar hidden sm:flex items-center gap-3 z-20">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-soft border border-red-race text-red-glow font-black font-display">
                  5★
                </div>
                <div>
                  <span className="block font-display text-xs font-bold text-white uppercase">
                    100% Mobile Service
                  </span>
                  <span className="text-[11px] text-text-secondary">
                    Home or Office Driveway
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
