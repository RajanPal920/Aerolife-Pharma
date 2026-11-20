import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';

export default function PartnershipBannerSection() {
  return (
    <section 
      id="partnership-banner" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#102D4B] text-white overflow-hidden scroll-mt-24"
      aria-label="Partner with Aerolife Pharma"
    >
      {/* Subtle Technical Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-grid-pattern z-0" 
        aria-hidden="true" 
      />

      {/* Top and Bottom Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-[#ED1C24] z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#ED1C24] via-[#00AEEF] to-[#00AEEF] z-20" />

      {/* Concentric Circle Radar Background Pattern on the Right (Like Image 3) */}
      <div 
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full border border-sky-400/40 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full border border-sky-400/50 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-sky-400/60 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="text-[#00AEEF] font-black text-sm tracking-widest">//</span>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
                PARTNER WITH AEROLIFE PHARMA
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.15] mb-4">
              LET'S BUILD BETTER <br className="hidden sm:inline" />
              <span className="text-[#00AEEF]">HEALTHCARE CONNECTIONS.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Have a product enquiry or want to partner with Aerolife Pharma for third-party contract manufacturing or exclusive PCD franchise rights? Our executive team is ready to hear from you.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-xl hover:shadow-cyan-500/25 transition-all duration-200 active:scale-[0.98] group"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all duration-200 active:scale-[0.98] group"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
