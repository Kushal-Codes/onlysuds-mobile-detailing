import React, { useState, useEffect } from 'react';
import { SupercarLogo } from '../illustrations/SupercarMotifs';
import { Menu, X, Phone, MessageSquare, Flame } from 'lucide-react';
import { businessData } from '../../data/business';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Packages', href: '#services' },
    { label: 'Why Mobile', href: '#features' },
    { label: 'Real Showcase', href: '#work' },
    { label: 'Austin Service Area', href: '#area' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-red-race/40 py-2.5 shadow-supercar'
          : 'bg-canvas/80 backdrop-blur-sm py-4 border-b border-surface-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="OnlySuds Mobile Detailing Austin Home"
          >
            <div className="relative">
              <SupercarLogo className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-lg sm:text-xl text-white tracking-wider uppercase leading-none group-hover:text-red-race transition-colors">
                ONLY<span className="text-red-race">SUDS</span>
              </span>
              <span className="font-display font-bold text-[10px] sm:text-xs text-text-secondary tracking-widest uppercase leading-none mt-1">
                MOBILE DETAILING · AUSTIN TX
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display font-bold text-xs uppercase tracking-widest text-text-secondary hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-race hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={businessData.phone.telLink}
              className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-white px-3 py-2 rounded-xl border border-surface-border bg-surface hover:border-red-race transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-race" />
              <span>{businessData.phone.display}</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-race px-5 py-2.5 font-display text-xs font-black uppercase tracking-wider text-white shadow-supercar transition-all hover:bg-red-electric hover:shadow-supercar-lg active:scale-95"
            >
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              <span>GET QUOTE / BOOK</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={businessData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-surface-border bg-surface text-red-race"
              aria-label="Message on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="rounded-xl bg-red-race px-3 py-1.5 font-display text-xs font-black uppercase text-white shadow-supercar"
            >
              BOOK
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-surface-border bg-surface p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-red-race/40 bg-surface px-5 pt-4 pb-6 shadow-supercar">
          <nav className="flex flex-col gap-3 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display text-base font-bold uppercase tracking-wider text-text-primary hover:text-red-race py-1.5 border-b border-surface-border"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a
              href={businessData.phone.telLink}
              className="flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface-card py-3 font-display text-sm font-bold text-white"
            >
              <Phone className="w-4 h-4 text-red-race" />
              <span>Call: {businessData.phone.display}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-race py-3 font-display text-sm font-black uppercase tracking-wider text-white shadow-supercar"
            >
              <Flame className="w-4 h-4" />
              <span>GET FREE QUOTE NOW</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
