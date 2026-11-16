import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import { Info, X } from 'lucide-react';

export default function App() {
  const [notification, setNotification] = useState(null);

  const handleNavigate = (destination) => {
    // Show a polite corporate notification for future phase links without broken 404s
    if (destination === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (destination === 'enquire') {
      setNotification({
        title: 'Business & Trade Enquiries',
        message: 'Aero Life Pharma corporate enquiry portal will be integrated in the upcoming phase. For immediate correspondence, please contact the corporate office.',
      });
      return;
    }

    if (destination.startsWith('product-')) {
      const prodName = destination.replace('product-', '');
      setNotification({
        title: prodName,
        message: `Official formulation monograph for ${prodName} indexed from CATLOP.pdf. Detailed packaging specifications and dosage parameters will be accessible in the full Products catalogue.`,
      });
      return;
    }

    if (destination.startsWith('category-')) {
      const catName = destination.replace('category-', '');
      setNotification({
        title: `${catName} Catalogue`,
        message: `Detailed formulation monographs for ${catName} will be available in the upcoming Products section.`,
      });
      return;
    }

    // Other placeholders
    const pageNames = {
      about: 'About Us',
      quality: 'Quality & Compliance',
      contact: 'Contact Us',
    };
    
    setNotification({
      title: pageNames[destination] || 'Corporate Navigation',
      message: `The ${pageNames[destination] || destination} section is scheduled for development in the subsequent phase.`,
    });
  };

  const handleHeroAction = (action) => {
    if (action === 'explore-products') {
      setNotification({
        title: 'Product Formulations Portfolio',
        message: 'Explore our complete product catalogue across Tablets, Capsules, Syrups, Powders, and Nutraceuticals in the next development phase.',
      });
    } else if (action === 'contact-us') {
      handleNavigate('contact');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00AEEF]/20 selection:text-[#0C1B2A]">
      {/* 1. Homepage Header / Navbar */}
      <Navbar onNavigate={handleNavigate} activeTab="home" />

      {/* 2. Homepage Hero Section with Professional Image Slider */}
      <main className="flex-1">
        <HeroSlider onActionClick={handleHeroAction} />
      </main>

      {/* Elegant Feedback Toast for future phase navigation (No 404s) */}
      {notification && (
        <div 
          className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-white rounded-xl shadow-2xl border border-slate-200 p-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 pr-2">
              <h4 className="text-sm font-semibold text-[#0C1B2A]">
                {notification.title}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                {notification.message}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setNotification(null)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

