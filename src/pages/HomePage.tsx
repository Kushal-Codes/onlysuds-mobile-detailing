import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { ServiceAreaSection } from '../components/sections/ServiceAreaSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { Footer } from '../components/layout/Footer';
import { QuoteModal } from '../components/layout/QuoteModal';
import { StickyMobileBar } from '../components/layout/StickyMobileBar';

export const HomePage: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col font-body selection:bg-red-race selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => setIsQuoteOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Supercar Themed Hero with Real Austin Image */}
        <HeroSection onOpenBooking={() => setIsQuoteOpen(true)} />

        {/* 2. Interactive Before & After Driveway Transformation Slider */}
        <BeforeAfterSection onOpenBooking={() => setIsQuoteOpen(true)} />

        {/* 3. Detailing Packages & Interactive Vehicle Sizing & Add-On Customizer */}
        <ServicesSection onOpenBooking={() => setIsQuoteOpen(true)} />

        {/* 4. Real Driveway Portfolio Showcase */}
        <GallerySection />

        {/* 5. Austin Metro Service Areas */}
        <ServiceAreaSection onOpenBooking={() => setIsQuoteOpen(true)} />

        {/* 6. Customer Reviews & 5.0 Rating */}
        <ReviewsSection />

        {/* 7. Mobile Detailing FAQ Accordion */}
        <FAQSection onOpenBooking={() => setIsQuoteOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bar */}
      <StickyMobileBar onOpenBooking={() => setIsQuoteOpen(true)} />

      {/* Quote / Booking Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};
