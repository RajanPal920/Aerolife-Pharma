import React from 'react';
import { ShieldCheck, PackageCheck, Award, TrendingUp, Truck, CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    num: '01',
    title: 'QUALITY-FOCUSED & WHO-GMP COMPLIANCE',
    desc: 'Every formulation strictly adheres to Schedule M and WHO-GMP guidelines, manufactured in Class 100,000 cleanrooms with automated blister packaging.',
    accent: '#00AEEF'
  },
  {
    num: '02',
    title: 'COMPREHENSIVE 84+ PRODUCT PORTFOLIO',
    desc: 'Diverse formulation range across 84+ commercial monographs from CATLOP.pdf—including Tablets, Capsules, Dry Syrups, Suspensions, ORS, and Topicals.',
    accent: '#ED1C24'
  },
  {
    num: '03',
    title: 'GOVERNMENT REGISTERED ENTERPRISE',
    desc: 'Registered under Class 5 (Medical & Pharmaceutical) with the Trade Marks Registry, Government of India (TM No. 4665534), ensuring authentic brand trust.',
    accent: '#00AEEF'
  },
  {
    num: '04',
    title: 'ETHICAL PCD MONOPOLY FRANCHISE',
    desc: 'Empowering distributors with exclusive district monopoly rights, comprehensive visual aids, promotional inputs, and transparent business ethics.',
    accent: '#ED1C24'
  },
  {
    num: '05',
    title: 'DEPENDABLE LOGISTICS & TIMELY DISPATCH',
    desc: 'Centralized warehousing in Vasai East (Maharashtra) maintaining high safety stocks, tamper-proof Alu-Alu packaging, and prompt pan-India distribution.',
    accent: '#00AEEF'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section 
      id="why-choose-us" 
      className="py-16 sm:py-20 lg:py-24 bg-[#F0F8FD] relative overflow-hidden scroll-mt-24"
      aria-label="Why Choose Aerolife Pharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container with Two Panels */}
        <div className="bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* 
            --------------------------------------------------------------------
            LEFT NAVY PANEL
            Deep Corporate Navy (#102D4B) with bold white and cyan typography
            --------------------------------------------------------------------
          */}
          <div className="w-full lg:w-[38%] xl:w-[35%] bg-[#102D4B] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Technical Grid Background Pattern */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none bg-grid-pattern" 
              aria-hidden="true" 
            />

            {/* Corner Accent Brackets */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-[#00AEEF] pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-[#ED1C24] pointer-events-none" />

            <div className="relative z-10">
              {/* Sub-label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#00AEEF]">
                  WHY AEROLIFE PHARMA
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-tight leading-[1.12] mb-4">
                WHY <br />
                <span className="text-[#00AEEF]">CHOOSE</span> <br />
                US?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Focused on pharmaceutical quality. Driven by healthcare responsibility and doctor trust.
              </p>
            </div>

            {/* Bottom Brand Values */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <span>QUALITY</span>
                <span className="text-[#00AEEF]">•</span>
                <span>RELIABILITY</span>
                <span className="text-[#ED1C24]">•</span>
                <span>INTEGRITY</span>
              </div>
            </div>
          </div>

          {/* 
            --------------------------------------------------------------------
            RIGHT CONTENT PANEL
            5 Numbered Rows with Clear Hover Elevation
            --------------------------------------------------------------------
          */}
          <div className="w-full lg:w-[62%] xl:w-[65%] p-6 sm:p-8 lg:p-12 divide-y divide-slate-100 bg-white">
            {REASONS.map((item) => (
              <div 
                key={item.num} 
                className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 group hover:bg-sky-50/50 rounded-xl p-3 sm:p-4 -mx-2 sm:-mx-3 transition-colors duration-200"
              >
                {/* Number Badge */}
                <div 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-extrabold text-sm sm:text-base text-white shadow-md flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: item.num === '02' || item.num === '04' ? '#ED1C24' : '#102D4B' }}
                >
                  {item.num}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors leading-snug uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
