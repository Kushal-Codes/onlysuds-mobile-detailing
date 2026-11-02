import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { businessData } from '../../data/business';

const NEIGHBORHOODS = [
  'Downtown Austin & Rainey St',
  'South Congress (SoCo) & Travis Heights',
  'East Austin & Mueller',
  'Domain & North Austin (78758)',
  'Westlake Hills & Barton Creek',
  'Round Rock & Pflugerville',
  'Cedar Park & Leander',
  'Oak Hill & Sunset Valley',
];

export const ServiceAreaSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <section id="area" className="py-20 sm:py-28 bg-canvas relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Neighborhood Coverage (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-race/40 bg-red-soft/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-glow">
              <Navigation className="w-3.5 h-3.5 text-red-race" />
              <span>Full Greater Austin Metro Dispatch</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              WHEREVER YOUR CAR SITS,{' '}
              <span className="text-red-race">WE PULL UP.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Based out of Austin (Zip 78758), Brice dispatches fully equipped mobile detailing units straight to your home driveway, apartment complex parking bay, or corporate office lot.
            </p>

            {/* Neighborhood Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {NEIGHBORHOODS.map((nh) => (
                <div
                  key={nh}
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-surface-border bg-surface text-xs font-bold text-text-primary"
                >
                  <Check className="w-4 h-4 text-red-race shrink-0" />
                  <span>{nh}</span>
                </div>
              ))}
            </div>

            {/* What you need from us vs what we bring */}
            <div className="p-4 rounded-2xl border border-surface-border bg-surface-card flex items-center gap-3 text-xs text-text-secondary">
              <Sparkles className="w-5 h-5 text-red-race shrink-0" />
              <span>
                <strong className="text-white">Self-Contained Mobile Unit:</strong> We supply our own pressure washers, dual-action polishers, extraction tools, and gentle pH-neutral chemical supplies.
              </span>
            </div>
          </div>

          {/* Right Column: Fast Contact Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-red-race bg-surface-card p-6 sm:p-8 shadow-supercar space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-surface-border">
                <MapPin className="w-6 h-6 text-red-race shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Austin Mobile Dispatch
                  </h3>
                  <span className="text-xs text-text-secondary">Mon – Sat · 8:00 AM – 6:30 PM</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={businessData.phone.telLink}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-surface-border bg-surface hover:border-red-race transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-race" />
                    <div>
                      <span className="block text-[11px] font-mono text-text-muted uppercase">Phone / Text</span>
                      <span className="font-display font-bold text-sm text-white">{businessData.phone.display}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-red-race uppercase">Call Now ↗</span>
                </a>

                <a
                  href={businessData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-surface-border bg-surface hover:border-red-race transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-500" />
                    <div>
                      <span className="block text-[11px] font-mono text-text-muted uppercase">Instant Messaging</span>
                      <span className="font-display font-bold text-sm text-white">Text / WhatsApp Direct</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-500 uppercase">Chat ↗</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-4 rounded-2xl bg-red-race font-display text-base font-black uppercase tracking-wider text-white shadow-supercar hover:bg-red-electric transition-all"
              >
                REQUEST INSTANT ESTIMATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
