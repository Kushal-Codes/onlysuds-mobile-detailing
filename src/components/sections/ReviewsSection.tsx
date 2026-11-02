import React from 'react';
import { reviewsData } from '../../data/gallery';
import { businessData } from '../../data/business';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-carbon-dark relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-race/40 bg-red-soft/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-glow shadow-subtle-glow mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-red-race" />
            <span>Austin Customer Feedback</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            5.0 STAR REPUTATION.{' '}
            <span className="text-red-race block sm:inline">
              REAL CLIENTS.
            </span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-display font-extrabold text-xl text-white">5.0 / 5.0</span>
            <span className="text-sm font-semibold text-text-secondary">on Social Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl border border-surface-border bg-surface-card p-6 flex flex-col justify-between hover:border-red-race/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      {rev.author}
                    </h3>
                    <span className="text-xs text-text-muted">{rev.location}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-red-race/20 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-sm text-text-secondary leading-relaxed pl-3 italic">
                    "{rev.text}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-surface-border text-xs font-mono text-red-race flex items-center justify-between">
                <span>Verified Client</span>
                <span className="text-emerald-500 font-bold">✓ Doorstep Service</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={businessData.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-surface-border bg-surface px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:border-red-race transition-colors"
          >
            <span>Read Recent Activity & Posts on Facebook</span>
            <ExternalLink className="w-3.5 h-3.5 text-red-race" />
          </a>
        </div>
      </div>
    </section>
  );
};
