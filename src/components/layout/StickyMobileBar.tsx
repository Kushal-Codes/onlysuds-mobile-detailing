import React from 'react';
import { Phone, Flame } from 'lucide-react';
import { businessData } from '../../data/business';

export const StickyMobileBar: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-30 lg:hidden border-t border-red-race/40 bg-surface/95 backdrop-blur-md px-4 py-2.5 shadow-supercar">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-red-race uppercase tracking-wider">
            Austin Mobile Units
          </span>
          <span className="font-display text-xs font-bold text-white">
            We Come To Your Driveway
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={businessData.phone.telLink}
            className="p-2.5 rounded-xl border border-surface-border bg-surface text-red-race"
            aria-label="Direct Call"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-race font-display text-xs font-black uppercase text-white shadow-supercar"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>FREE QUOTE</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
