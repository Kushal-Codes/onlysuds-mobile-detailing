import React from 'react';
import { SupercarLogo } from '../illustrations/SupercarMotifs';
import { businessData } from '../../data/business';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-red-race bg-carbon-dark text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SupercarLogo className="w-10 h-10 drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]" />
              <div>
                <h3 className="font-display text-xl font-black uppercase text-white leading-tight">
                  ONLY<span className="text-red-race">SUDS</span>
                </h3>
                <span className="font-display text-xs font-bold text-text-secondary uppercase">
                  Mobile Detailing Austin
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Showroom shine straight to your driveway. Professional paint-safe hand washes, interior shampoo extraction, and paint protection throughout Austin, Texas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-red-race mb-4 pb-2 border-b border-surface-border">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#services" className="hover:text-white transition-colors">Detailing Packages</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Real Driveway Portfolio</a></li>
              <li><a href="#area" className="hover:text-white transition-colors">Austin Service Area</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews (5.0★)</a></li>
            </ul>
          </div>

          {/* Service Hours */}
          <div>
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-red-race mb-4 pb-2 border-b border-surface-border">
              Operating Hours
            </h4>
            <div className="space-y-2 text-sm text-text-secondary">
              <div className="flex justify-between py-1 border-b border-surface-border">
                <span>Monday – Saturday</span>
                <span className="font-mono text-white font-bold">8 AM – 6:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface-border">
                <span>Sunday</span>
                <span className="font-mono text-red-race font-bold">By Appointment</span>
              </div>
              <p className="text-xs text-text-muted pt-1">
                Direct mobile dispatch across Austin metro.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-red-race mb-4 pb-2 border-b border-surface-border">
              Direct Contact
            </h4>
            <address className="not-italic space-y-2.5 text-sm text-text-secondary">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-race shrink-0" />
                <span>Austin, Texas 78758</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-race shrink-0" />
                <a href={businessData.phone.telLink} className="text-white hover:text-red-race transition-colors font-bold">
                  {businessData.phone.display}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-race shrink-0" />
                <a href={`mailto:${businessData.email}`} className="text-white hover:text-red-race transition-colors truncate">
                  {businessData.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={businessData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-race hover:underline"
                >
                  <span>Facebook Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} OnlySuds Mobile Detailing. All rights reserved. Austin, TX.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs font-bold uppercase text-text-secondary hover:text-red-race transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
