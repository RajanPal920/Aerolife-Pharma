import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Building2,
  FileCheck2,
  PackageCheck
} from 'lucide-react';

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section 
      id="about-overview" 
      className="py-16 sm:py-20 lg:py-24 bg-[#F0F8FD] border-y border-sky-100/90 relative overflow-hidden scroll-mt-24"
      aria-label="About Aerolife Pharma Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 
            ====================================================================
            LEFT COLUMN (5 cols on lg, 6 on xl): 4-CARD VISUAL COMPOSITION
            - Photo 1 (Top-Left): Modern executive consultation & corporate facility
            - Photo 2 (Top-Right): Formulation quality control & analytical testing
            - Photo 3 (Bottom-Left): Advanced sterile manufacturing cleanroom
            - Card 4 (Bottom-Right): Authentic Aerolife product packaging showcase
            - Floating Center Badge: Govt. Registered Trade Mark No. 4665534
            ====================================================================
          */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 relative">
              
              {/* Photo 1: Corporate & Collaboration */}
              <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-white aspect-[4/3]">
                <img 
                  src="/assets/hero_healthcare_1794824904141.jpg" 
                  alt="Aerolife Pharma healthcare collaboration and leadership"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4B]/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide uppercase drop-shadow">
                  Healthcare Leadership
                </span>
              </div>

              {/* Photo 2: Quality Laboratory Testing */}
              <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-white aspect-[4/3]">
                <img 
                  src="/assets/hero_quality_1794824912430.jpg" 
                  alt="Aerolife Pharma analytical testing and laboratory inspection"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4B]/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide uppercase drop-shadow">
                  Quality Assurance
                </span>
              </div>

              {/* Photo 3: Sterile Cleanroom Manufacturing */}
              <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-white aspect-[4/3]">
                <img 
                  src="/assets/hero_manufacturing_slide4.jpg" 
                  alt="Aerolife Pharma advanced automated cleanroom packaging"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4B]/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide uppercase drop-shadow">
                  WHO-GMP Facility
                </span>
              </div>

              {/* Photo 4: Automated Formulation Packaging & Quality Inspection */}
              <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-white aspect-[4/3]">
                <img 
                  src="/assets/about_pharma_formulation.jpg" 
                  alt="Aero Life Pharma automated packaging and blister formulation line"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4B]/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide uppercase drop-shadow">
                  Formulation Packaging
                </span>
              </div>

              {/* Center Floating Seal: Govt Registered Trademark */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#102D4B] border-2 sm:border-4 border-white shadow-xl flex flex-col items-center justify-center text-center p-1 sm:p-2 text-white pointer-events-none"
                aria-hidden="true"
              >
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#00AEEF] mb-0.5" />
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-extrabold uppercase tracking-wider text-[#00AEEF] leading-tight">
                  TM REG.
                </span>
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold text-white/90">
                  4665534
                </span>
              </div>

            </div>
          </div>

          {/* 
            ====================================================================
            RIGHT COLUMN (6 cols on lg, 6 on xl): CONTENT & PILLARS
            - Sub-label: // ABOUT AEROLIFE PHARMA
            - Big Bold Headline: COMMITTED TO BETTER HEALTHCARE. BUILT ON QUALITY.
            - Authentic Paragraphs from TM REG & CATLOP
            - 3 Key Metrics: 84+ Formulations, TM Class 5, WHO-GMP Quality
            - Badge pills
            - Action CTA Button
            ====================================================================
          */}
          <div className="lg:col-span-6 xl:col-span-6">
            
            {/* Top Sub-label */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="text-[#00AEEF] font-black text-sm tracking-widest">//</span>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
                ABOUT AEROLIFE PHARMA
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-[#102D4B] tracking-tight leading-[1.18] uppercase mb-5">
              COMMITTED TO BETTER HEALTHCARE.{' '}
              <span className="text-[#00AEEF] block sm:inline">
                BUILT ON QUALITY.
              </span>
            </h2>

            {/* Paragraph 1: Authentic Company Details */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-normal">
              Aero Life Pharma is a government-registered pharmaceutical enterprise (Trade Mark No. <strong className="text-[#102D4B]">4665534</strong>, Class 5) headquartered in Vasai East, Palghar, Maharashtra. We are dedicated to delivering high-efficacy healthcare therapeutics with an unwavering commitment to analytical precision, patient safety, and dependable ethical practices.
            </p>

            {/* Paragraph 2: Formulation & Compliance Focus */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 font-normal">
              Our comprehensive commercial monograph portfolio combines <strong className="text-[#102D4B]">84+ certified formulations</strong> across Tablets, Capsules, Syrups, Oral Suspensions, and Specialized Preparations—developed to meet the evolving therapeutic needs of healthcare professionals, PCD franchise distributors, and institutional partners nationwide.
            </p>

            {/* 3 Metric / Stat Pillars in a Clean Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-5 border-y border-slate-200/90 mb-7">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00AEEF] tracking-tight">
                  84+
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-wide mt-0.5">
                  COMMERCIAL PRODUCTS
                </div>
                <div className="text-[10px] text-slate-500">
                  CATLOP.pdf Verified
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102D4B] tracking-tight">
                  CLASS 5
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-wide mt-0.5">
                  GOVT. REGISTERED
                </div>
                <div className="text-[10px] text-slate-500">
                  TM No. 4665534
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#ED1C24] tracking-tight">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-wide mt-0.5">
                  QUALITY ASSURED
                </div>
                <div className="text-[10px] text-slate-500">
                  WHO-GMP Compliant
                </div>
              </div>
            </div>

            {/* Core Values Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7">
              <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                QUALITY
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                RELIABILITY
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                HEALTHCARE
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm">
                INTEGRITY
              </span>
            </div>

            {/* Action CTA Button */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 active:scale-[0.98] group"
              >
                <span>DISCOVER AEROLIFE PHARMA</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
