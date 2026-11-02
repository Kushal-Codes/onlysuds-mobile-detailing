import React from 'react';
import { galleryData } from '../../data/gallery';
import { businessData } from '../../data/business';
import { ExternalLink, Camera, MapPin, Check } from 'lucide-react';

export const GallerySection: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 bg-canvas relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-race/40 bg-red-soft/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-glow shadow-subtle-glow mb-4">
            <Camera className="w-3.5 h-3.5 text-red-race" />
            <span>Real Austin Driveway Work</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            AUTHENTIC RESULTS.{' '}
            <span className="text-red-race block sm:inline">
              NO STOCK PHOTOS.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-text-secondary">
            Verified transformation imagery from OnlySuds Mobile Detailing’s active customer work across Austin, Texas.
          </p>
        </div>

        {/* Real Image Feature Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-red-race bg-surface-card p-4 sm:p-6 shadow-supercar-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Real Image */}
            <div className="md:col-span-7 rounded-2xl overflow-hidden border border-surface-border aspect-[4/3] bg-carbon-dark relative group">
              <img
                src={galleryData[0].imageUrl}
                alt={galleryData[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 rounded-full bg-canvas/90 border border-red-race px-3 py-1 text-xs font-mono font-bold uppercase text-red-glow">
                Live Driveway Dispatch
              </div>
            </div>

            {/* Right: Narrative Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-red-race font-bold uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Austin, Texas & Greater Metro</span>
              </div>

              <h3 className="font-display text-2xl font-black text-white leading-tight">
                {galleryData[0].title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed">
                {galleryData[0].description} Notice the deep mirror gloss reflection, contaminant-free clearcoat, and pristine rim finish executed right on the customer's property.
              </p>

              <div className="space-y-2 pt-2 border-t border-surface-border text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-race" />
                  <span>Doorstep convenience (No drop-off)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-race" />
                  <span>Scratch-free two-bucket foam washing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-race" />
                  <span>Complete interior & pet hair removal</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={businessData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-red-race hover:underline"
                >
                  <span>View Original Post on Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
