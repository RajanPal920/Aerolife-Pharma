import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProductMarquee from '../components/ProductMarquee';
import AboutSection from '../components/AboutSection';
import OurProductsSection from '../components/OurProductsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TherapeuticFocusSection from '../components/TherapeuticFocusSection';
import DosageCapabilitiesSection from '../components/DosageCapabilitiesSection';
import PartnershipBannerSection from '../components/PartnershipBannerSection';
import FaqSection from '../components/FaqSection';

export default function HomePage() {
  const navigate = useNavigate();

  const handleHeroAction = (action) => {
    if (action === 'explore-products') {
      navigate('/products');
    } else if (action === 'contact-us') {
      navigate('/contact');
    } else if (action === 'about') {
      navigate('/about');
    } else if (action === 'enquire') {
      navigate('/quote');
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#F0F8FD]">
      {/* 1. Main Hero Slider */}
      <HeroSlider onActionClick={handleHeroAction} />

      {/* 2. Flagship Formulations Live Marquee (Authentic Aero Life Red Strip - 7 Genuine Catalog Products) */}
      <ProductMarquee onProductClick={(prod) => navigate(`/products/${prod.categorySlug}/${prod.slug}`)} />

      {/* 3. About Aerolife Pharma (Under Marquee - Authentic Details from TM REG & CATLOP) */}
      <AboutSection />

      {/* 4. Our Products Section (Hero Slider Themed with Dual-Tone Lines & Framing) */}
      <OurProductsSection />

      {/* 5. Why Choose Us Section (Image 1: Left Deep Navy Card + 5 Numbered Rows) */}
      <WhyChooseUsSection />

      {/* 6. Therapeutic Focus & Clinical Specialties (Image 2: 5 Specialties + PCD Contracting) */}
      <TherapeuticFocusSection />

      {/* 7. Dosage Spectrum & Delivery Systems (Pharma Value-Add from CATLOP.pdf) */}
      <DosageCapabilitiesSection />

      {/* 8. Direct Partnership & PCD Call-To-Action Banner (Image 3: Radar Graphic + Buttons) */}
      <PartnershipBannerSection />

      {/* 9. Frequently Asked Questions (Pharma Value-Add for Franchise Buyers & Doctors) */}
      <FaqSection />
    </div>
  );
}
