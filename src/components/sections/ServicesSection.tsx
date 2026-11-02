import React, { useState } from 'react';
import { servicesData, addOnServices } from '../../data/services';
import { businessData } from '../../data/business';
import { Sparkles, Check, Flame, MessageSquare, Phone, ShieldCheck, Car } from 'lucide-react';
import { soundManager } from '../animations/SoundEffects';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

const VEHICLE_TIERS = [
  { id: 'coupe', label: 'Coupe / 2-Door', sub: 'Compact footprint' },
  { id: 'sedan', label: 'Sedan / Hatchback', sub: 'Standard passenger' },
  { id: 'suv', label: 'Crossover / Mid SUV', sub: '2-row seating' },
  { id: 'truck', label: 'Full Truck / 3-Row SUV', sub: 'Extended cabin & bed' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (name: string) => {
    soundManager.playSpray();
    if (selectedAddons.includes(name)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== name));
    } else {
      setSelectedAddons([...selectedAddons, name]);
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-carbon-dark relative border-t border-surface-border">
      {/* Supercar Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-red-race/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-race/40 bg-red-soft/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-glow shadow-subtle-glow mb-4">
            <Flame className="w-3.5 h-3.5 text-red-race" />
            <span>Doorstep Detailing Packages</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            PRECISION PACKAGES{' '}
            <span className="text-red-race block sm:inline">
              & CUSTOM QUOTES
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-text-secondary">
            Every vehicle is unique. Because pricing depends on your vehicle’s specific size, interior condition, and dirt buildup, Brice provides fast, straightforward custom quotes.
          </p>
        </div>

        {/* Interactive Vehicle Size Selector Bar */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-3xl border border-surface-border bg-surface-card shadow-supercar">
          <div className="flex items-center gap-2 mb-3">
            <Car className="w-4 h-4 text-red-race" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Step 1: Select Your Vehicle Type for Tailored Pricing
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {VEHICLE_TIERS.map((tier) => {
              const active = selectedVehicle === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedVehicle(tier.id);
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    active
                      ? 'border-red-race bg-red-soft/40 text-white shadow-subtle-glow translate-y-[-2px]'
                      : 'border-surface-border bg-surface text-text-secondary hover:border-red-race/50'
                  }`}
                >
                  <span className="block font-display font-bold text-xs sm:text-sm text-white">
                    {tier.label}
                  </span>
                  <span className="block text-[11px] text-text-muted mt-0.5">
                    {tier.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {servicesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.badge === 'Most Popular'
                  ? 'border-red-race bg-surface-card shadow-supercar ring-1 ring-red-race/50'
                  : 'border-surface-border bg-surface hover:border-red-race/60'
              }`}
            >
              <div>
                {/* Badge Row */}
                <div className="flex items-center justify-between mb-4">
                  {pkg.badge && (
                    <span className="rounded-full bg-red-race px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-subtle-glow">
                      {pkg.badge}
                    </span>
                  )}
                  <span className="text-xs font-mono text-text-secondary ml-auto">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features Checklist */}
                <div className="mb-6 rounded-2xl border border-surface-border bg-carbon p-4">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-red-race font-bold mb-3">
                    Package Inclusions
                  </span>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-text-primary">
                        <Check className="w-4 h-4 text-red-race shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 border-t border-surface-border">
                <div className="mb-4">
                  <span className="block text-[11px] font-mono text-text-muted uppercase">
                    Pricing
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-black text-white">
                    {pkg.priceDisplay}
                  </span>
                  <span className="block text-xs text-text-secondary mt-0.5">
                    {pkg.priceNote}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-race py-3 font-display text-sm font-black uppercase tracking-wider text-white shadow-supercar hover:bg-red-electric transition-all"
                >
                  <Flame className="w-4 h-4" />
                  <span>Request Quote For This</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Add-on Upgrades Selector */}
        <div className="rounded-3xl border border-surface-border bg-surface-card p-6 sm:p-8 mb-14">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-red-race" />
            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase">
              Specialized Add-On Treatments
            </h3>
          </div>
          <p className="text-xs text-text-secondary mb-6">
            Tap any add-on treatment to include it in your custom quote request with Brice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {addOnServices.map((addon) => {
              const isSelected = selectedAddons.includes(addon.name);
              return (
                <button
                  key={addon.name}
                  type="button"
                  onClick={() => toggleAddon(addon.name)}
                  className={`p-4 rounded-2xl border text-left flex items-start justify-between gap-3 transition-all ${
                    isSelected
                      ? 'border-red-race bg-red-soft/30 shadow-subtle-glow'
                      : 'border-surface-border bg-surface hover:border-red-race/40'
                  }`}
                >
                  <div>
                    <span className="font-display font-bold text-sm text-white block">
                      {addon.name}
                    </span>
                    <span className="text-xs text-text-secondary mt-0.5 block">
                      {addon.note}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-red-race border-red-race text-white' : 'border-surface-border bg-surface-card'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fast Action Banner */}
        <div className="rounded-3xl border-2 border-red-race bg-gradient-to-r from-red-dark via-carbon-dark to-carbon p-6 sm:p-10 shadow-supercar">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-glow">
                <ShieldCheck className="w-4 h-4" />
                No Shop Drop-Off Required
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                Ready for your vehicle to look showroom fresh?
              </h3>
              <p className="text-sm text-text-secondary max-w-xl">
                Text or call Brice directly with your car make, model, and neighborhood for an immediate estimate and schedule window.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={businessData.phone.telLink}
                className="inline-flex items-center gap-2 rounded-2xl border border-surface-border bg-surface px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white hover:border-red-race transition-all"
              >
                <Phone className="w-4 h-4 text-red-race" />
                <span>Call (979) 451-5519</span>
              </a>

              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-red-race px-6 py-3.5 font-display text-sm font-black uppercase tracking-wider text-white shadow-supercar hover:bg-red-electric transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Text / WhatsApp Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
