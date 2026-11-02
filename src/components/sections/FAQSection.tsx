import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { businessData } from '../../data/business';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'How does mobile detailing work? Do I need to be home?',
    a: 'You can be home or working! As long as we have access to your vehicle and adequate space around it in your driveway or parking space, you can leave keys or unlock it remotely. We text you when we arrive and when the vehicle is completed.',
  },
  {
    q: 'Do you need to connect to my water spigot or electricity?',
    a: 'OnlySuds travels with commercial pressure equipment. If a standard outdoor water spigot and standard electrical outlet are accessible on your property, we plug right in for maximum efficiency. If not, let us know when requesting your quote so we can prep accordingly.',
  },
  {
    q: 'How do you price your detailing packages?',
    a: 'Because a 2-door coupe requires different attention than a 3-row family SUV with embedded pet hair, we provide customized, accurate quotes upfront. There are never any surprise charges—what we quote is what you pay.',
  },
  {
    q: 'Can you completely remove stubborn pet hair and stains?',
    a: 'Yes! We specialize in heavy pet hair removal using specialized rubber blades, pumice stones, and commercial hot water extraction to lift fur and stains embedded deep within carpet fibers.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Zelle, Venmo, Cash, and all major credit/debit cards upon job completion and your full satisfaction.',
  },
];

export const FAQSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-carbon-dark relative border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-race/40 bg-red-soft/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-glow mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-race" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            FREQUENTLY ASKED{' '}
            <span className="text-red-race">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-surface-border bg-surface-card overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl border border-surface-border flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-red-race text-white' : 'bg-surface text-text-secondary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-text-secondary leading-relaxed border-t border-surface-border pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact bar */}
        <div className="p-6 rounded-3xl border border-surface-border bg-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-white text-base">
              Have a custom vehicle or fleet inquiry?
            </h4>
            <p className="text-xs text-text-secondary">
              Brice is ready to answer questions directly via text or phone call.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessData.phone.telLink}
              className="px-4 py-2.5 rounded-xl border border-surface-border text-xs font-bold uppercase text-white hover:border-red-race transition-colors"
            >
              Call {businessData.phone.display}
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-red-race text-xs font-black uppercase text-white shadow-supercar hover:bg-red-electric transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
