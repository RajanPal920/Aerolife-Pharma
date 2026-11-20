import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  Wind, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  HeartPulse
} from 'lucide-react';

const THERAPEUTIC_SEGMENTS = [
  {
    num: '01',
    badge: 'ANTI-INFECTIVE CARE',
    title: 'Broad-Spectrum Antibiotics & Antimicrobial Therapy',
    desc: 'Targeted oral and parenteral therapeutics formulated for bacterial, respiratory, and systemic infections, including cephalosporins, penicillins, and macrolides.',
    keyProducts: ['CLAVAERO-CV 625', 'AEROMOX-500', 'SEFAERO-200', 'AZIAERO 500'],
    searchQuery: 'Amoxycillin',
    color: '#00AEEF'
  },
  {
    num: '02',
    badge: 'GASTROINTESTINAL CARE',
    title: 'Gastroenterology, Antacids & Anti-Ulcerants',
    desc: 'Comprehensive formulations for GERD, dyspepsia, hyperacidity, and gastrointestinal motility disorders combining proton pump inhibitors and prokinetics.',
    keyProducts: ['OMEFIST D', 'RAIKA-DSR', 'AEROCAIN-O', 'OSOAERO'],
    searchQuery: 'Omeprazole',
    color: '#ED1C24'
  },
  {
    num: '03',
    badge: 'PAIN & ORTHOPEDICS',
    title: 'Analgesics, NSAIDs & Muscle Relaxants',
    desc: 'High-efficacy combination molecules engineered for post-operative recovery, musculoskeletal inflammation, arthritis, and acute fever management.',
    keyProducts: ['AEROMARK-SP', 'AEROMARK-P', 'GRAVOGESIC-MR', 'DOLOAERO-650'],
    searchQuery: 'Aceclofenac',
    color: '#102D4B'
  },
  {
    num: '04',
    badge: 'RESPIRATORY & PULMONOLOGY',
    title: 'Cough, Cold & Bronchodilator Formulations',
    desc: 'Specialized dry cough suppressants, mucolytic expectorants, and anti-asthmatic preparations for both pediatric and adult respiratory care.',
    keyProducts: ['AEROCOF-DX', 'AEROCOF-LS JUNIOR', 'LEVOFLAK-M', 'COLDAERO-DS'],
    searchQuery: 'Aerocof',
    color: '#00AEEF'
  },
  {
    num: '05',
    badge: 'NUTRACEUTICALS & HEALTH',
    title: 'Multivitamins, Minerals & Daily Immunity Boosters',
    desc: 'Premium therapeutic dietary supplements, antioxidant tonics, maternal nutrition powders, and electrolyte rehydration solutions.',
    keyProducts: ['AEROVIT 9G', 'AEROVIT GOLD', 'AEROVITA-Z', 'AEROPRO MOM'],
    searchQuery: 'Aerovit',
    color: '#ED1C24'
  }
];

export default function TherapeuticFocusSection() {
  return (
    <section 
      id="therapeutic-focus" 
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-sky-100/80 relative overflow-hidden scroll-mt-24"
      aria-label="Therapeutic Focus Areas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
              CLINICAL SPECIALTIES
            </span>
            <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#102D4B] tracking-tight uppercase leading-[1.18] mb-4">
            FOCUSED SOLUTIONS. <br className="hidden sm:inline" />
            BUILT AROUND <span className="text-[#00AEEF]">HEALTHCARE NEEDS.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            A structured portfolio of quality pharmaceutical formulations aligned with core clinical priorities, general medicine, and institutional demand.
          </p>
        </div>

        {/* 5 Therapeutic Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {THERAPEUTIC_SEGMENTS.map((seg) => (
            <div 
              key={seg.num}
              className="bg-[#F8FBFE] hover:bg-white rounded-2xl border border-sky-100 hover:border-[#00AEEF] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#ED1C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Row: Number and Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-extrabold text-[#102D4B] bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-sm">
                    {seg.num}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-1 rounded-md">
                    {seg.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors leading-snug mb-2.5">
                  {seg.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {seg.desc}
                </p>

                {/* Key Formulations Tags */}
                <div className="space-y-1.5 pt-4 border-t border-slate-200/60 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Brand Monographs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {seg.keyProducts.map((p, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200/80 px-2 py-0.5 rounded shadow-2xs"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Explore Link */}
              <Link
                to={`/products?search=${encodeURIComponent(seg.searchQuery)}`}
                className="inline-flex items-center justify-between text-xs font-bold text-[#00AEEF] group-hover:text-[#0097D1] pt-3 border-t border-slate-100 group"
              >
                <span>EXPLORE THERAPEUTIC RANGE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}

          {/* 6th Card: Custom PCD & Third Party Formulation Card */}
          <div className="bg-[#102D4B] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-grid-pattern" aria-hidden="true" />
            
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#00AEEF] bg-white/10 px-2.5 py-1 rounded-md inline-block mb-4">
                CUSTOM CONTRACTING
              </span>

              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-2.5">
                PCD Franchise & Third-Party Manufacturing
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Looking for exclusive district monopoly rights or customized batch contract formulation? We offer end-to-end documentation, testing, and packaging support.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/15">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-[#102D4B] bg-white hover:bg-slate-100 transition-colors shadow-md"
              >
                <span>REQUEST MONOPOLY PCD PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00AEEF]" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
