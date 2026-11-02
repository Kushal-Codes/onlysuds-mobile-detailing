import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { soundManager } from '../animations/SoundEffects';

export const BeforeAfterSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
    soundManager.playClick();
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    soundManager.playClick();
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-20 sm:py-28 bg-canvas relative overflow-hidden border-t border-surface-border">
      {/* Supercar Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-red-race/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-race/40 bg-red-soft/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-glow shadow-subtle-glow mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-race" />
            <span>Interactive Visual Proof</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            THE DRIVEWAY{' '}
            <span className="text-red-race block sm:inline">
              TRANSFORMATION
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-text-secondary">
            Drag the interactive slider to inspect how OnlySuds takes road grime, brake dust, and Austin sun-baked paint back to pure mirror showroom gloss.
          </p>
        </div>

        {/* Interactive Before / After Slider Card */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onClick={(e) => handleMove(e.clientX)}
            onMouseDown={(e) => {
              setIsDragging(true);
              soundManager.playClick();
              handleMove(e.clientX);
            }}
            onMouseMove={(e) => isDragging && handleMove(e.clientX)}
            onTouchStart={(e) => {
              setIsDragging(true);
              soundManager.playClick();
              handleMove(e.touches[0].clientX);
            }}
            onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="relative select-none overflow-hidden rounded-3xl border-2 border-red-race bg-surface-card shadow-supercar-lg aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize"
          >
            {/* Background Image: AFTER (Real Clean Paint & High-Gloss Mirror Finish) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/real/onlysuds_after.jpg"
                alt="After: Showroom High-Gloss Mirror Paint & Wheel Reflection by OnlySuds"
                className="w-full h-full object-cover object-center filter contrast-110 saturate-110"
                draggable={false}
              />
              <div className="absolute top-4 right-4 z-10 rounded-full border border-red-race bg-canvas/90 backdrop-blur-md px-3.5 py-1 text-xs font-black uppercase tracking-wider text-red-glow shadow-supercar">
                After: Showroom Shine
              </div>
            </div>

            {/* Foreground Clipped Image: BEFORE (Filtered Road Grime / Oxidation Simulator) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/images/real/onlysuds_showcase.jpg"
                alt="Before Detailing: Grime & Road Film"
                className="w-full h-full object-cover object-center filter grayscale-[80%] brightness-75 contrast-90 sepia-[25%]"
                draggable={false}
              />
              <div className="absolute top-4 left-4 z-10 rounded-full border border-surface-border bg-canvas/90 backdrop-blur-md px-3.5 py-1 text-xs font-black uppercase tracking-wider text-text-secondary shadow-md">
                Before: Road Film & Dust
              </div>
            </div>

            {/* Drag Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-red-race shadow-[0_0_15px_#E50914] cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Central Draggable Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white bg-red-race text-white flex items-center justify-center shadow-supercar hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>

              {/* Tag indicator */}
              <div className="absolute bottom-6 -translate-x-1/2 flex items-center gap-1 rounded-full border border-surface-border bg-canvas/95 px-3 py-1 text-[10px] font-mono font-bold text-white uppercase whitespace-nowrap shadow-md">
                <span>Drag Slider</span>
              </div>
            </div>
          </div>

          {/* Bottom Card Controls & Info Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-surface-border bg-surface-card p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-red-race animate-ping" />
              <div className="text-left">
                <span className="block font-display text-sm font-bold text-white">
                  Doorstep Paint-Safe Transformation
                </span>
                <span className="text-xs text-text-secondary">
                  Two-bucket grit guard washing, deep clay bar, & ceramic hydrophobic sealant
                </span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 rounded-xl bg-red-race px-5 py-2.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-supercar hover:bg-red-electric transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get My Car Like This</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
