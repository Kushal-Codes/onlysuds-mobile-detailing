import React, { useState } from 'react';
import { X, Flame, Phone, MessageSquare } from 'lucide-react';
import { businessData } from '../../data/business';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [vehicle, setVehicle] = useState('');
  const [packageSelected, setPackageSelected] = useState('Full Detail');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Brice! I'd like a quick quote for OnlySuds Mobile Detailing in Austin.\n\nVehicle: ${vehicle || 'Not specified'}\nPackage: ${packageSelected}\nNotes: ${notes || 'Standard detailing'}`
  );
  const whatsappUrl = `https://wa.me/19794515519?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border-2 border-red-race bg-surface-card p-6 sm:p-8 shadow-supercar-lg max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-surface-border bg-surface p-2 text-text-secondary hover:text-white hover:border-red-race transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-red-race animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-glow">
            Austin Mobile Dispatch
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
          REQUEST YOUR FREE QUOTE
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
          Tell us about your vehicle and location. Brice will reply right away with an exact estimate and earliest mobile availability window.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappUrl, '_blank');
          }}
          className="space-y-4 mb-6"
        >
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-text-secondary mb-1">
              Vehicle Make, Model & Year
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 2022 Ford F-150 / BMW M4"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm text-white focus:border-red-race focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-text-secondary mb-1">
              Desired Service
            </label>
            <select
              value={packageSelected}
              onChange={(e) => setPackageSelected(e.target.value)}
              className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm text-white focus:border-red-race focus:outline-none"
            >
              <option value="Showroom Full Detail">Showroom Full Detail (Interior + Exterior)</option>
              <option value="Interior Deep Clean & Pet Hair">Interior Deep Clean & Pet Hair Restoration</option>
              <option value="Exterior Foam Hand Wash">Exterior Foam Hand Wash & Gloss Shield</option>
              <option value="Custom Service / Multiple Vehicles">Custom Fleet / Multiple Vehicles</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-text-secondary mb-1">
              Austin Neighborhood / Special Needs (e.g. Pet Hair)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Round Rock / Dog hair on rear seats / Work driveway"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm text-white focus:border-red-race focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-red-race font-display text-sm font-black uppercase tracking-wider text-white shadow-supercar hover:bg-red-electric transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details via Text / WhatsApp</span>
          </button>
        </form>

        {/* Or Direct Call */}
        <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs">
          <span className="text-text-muted">Prefer to talk directly?</span>
          <a
            href={businessData.phone.telLink}
            className="font-bold text-red-race hover:underline flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (979) 451-5519</span>
          </a>
        </div>
      </div>
    </div>
  );
};
