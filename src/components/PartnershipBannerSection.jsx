import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PartnershipBannerSection({
  tag = 'PARTNER WITH AEROLIFE PHARMA',
  title = "LET'S BUILD BETTER HEALTHCARE CONNECTIONS.",
  description = 'Have a product enquiry or want to partner with Aerolife Pharma for third-party contract manufacturing or exclusive PCD franchise rights? Our commercial team is ready to assist you with complete dossiers and price lists.',
  primaryText = 'GET IN TOUCH',
  primaryLink = '/contact',
  secondaryText = 'EXPLORE PRODUCTS',
  secondaryLink = '/products',
  whatsappMessage = 'Hi Aerolife Pharma, I would like to inquire about commercial distribution and product dossiers.'
}) {
  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section 
      id="partnership-banner" 
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#102D4B] text-white overflow-hidden scroll-mt-24 border-t border-sky-900/40"
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

      {/* Concentric Circle Radar Background Pattern on the Right (Matching Reference Image) */}
      <div 
        className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none opacity-25"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full border border-sky-400/40 flex items-center justify-center">
          <div className="w-[78%] h-[78%] rounded-full border border-sky-400/30 flex items-center justify-center">
            <div className="w-[58%] h-[58%] rounded-full border border-sky-400/20" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs sm:text-sm font-black text-[#00AEEF] tracking-widest uppercase">
                {tag}
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.12] mb-4">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Right Action Buttons: Primary, Secondary, and Dedicated Green WhatsApp Button */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 flex-shrink-0">
            {/* 1. Primary Button */}
            <Link
              to={primaryLink}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98"
            >
              <span>{primaryText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* 2. Secondary Glass Button */}
            <Link
              to={secondaryLink}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs transition-all duration-200 active:scale-98"
            >
              <span>{secondaryText}</span>
              <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
            </Link>

            {/* 3. Dedicated Green WhatsApp Icon Button matching reference screenshot */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Inquiry with Aerolife Pharma"
              title="Chat with Aerolife Pharma on WhatsApp"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
