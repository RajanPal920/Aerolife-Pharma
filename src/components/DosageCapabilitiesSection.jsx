import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NINE_DOSAGE_CATEGORIES = [
  {
    id: 'tablets',
    name: 'Tablets & Caplets',
    count: '31 Formulations',
    mainProduct: 'CLAVAERO - CV 625',
    image: '/assets/products/clavaero-cv-625.jpg',
    desc: 'Analgesics, broad-spectrum antibiotics, NSAIDs, antipyretics & calcium monographs in Alu-Alu and blister strips.',
    badge: 'ALU-ALU & BLISTER',
    link: '/products/tablets-capsules'
  },
  {
    id: 'capsules',
    name: 'Capsules & Softgels',
    count: '10 Formulations',
    mainProduct: 'AEROMOX - 500',
    image: '/assets/products/aeromox-500.jpg',
    desc: 'Hard gelatin antimicrobial capsules, gastro-resistant pellets & softgel formulations for high bio-availability.',
    badge: 'HARD GEL & SOFTGEL',
    link: '/products/capsules-softgels'
  },
  {
    id: 'syrups',
    name: 'Oral Liquids & Syrups',
    count: '20 Formulations',
    mainProduct: 'AEROLIV SYRUP',
    image: '/assets/products/aeroliv_syrup.jpg',
    desc: 'Cough syrups, bronchodilator expectorants, appetite tonics & pediatric suspensions in sealed amber PET bottles.',
    badge: 'AMBER PET BOTTLES',
    link: '/products/oral-liquids-syrups'
  },
  {
    id: 'dry-syrups',
    name: 'Pediatric Dry Syrups',
    count: '3 Formulations',
    mainProduct: 'AEROFOL - Z DRY SYRUP',
    image: '/assets/products/aerofol-z.jpg',
    desc: 'Reconstitutable high-stability dry suspensions (Amoxycillin + Clavulanate) with purified sterile water.',
    badge: 'WITH STERILE WATER',
    link: '/products/pediatric-dry-syrups'
  },
  {
    id: 'creams',
    name: 'Creams, Gels & Ointments',
    count: '6 Formulations',
    mainProduct: 'LULIAERO CREAM',
    image: '/assets/products/luliaero_cream.jpg',
    desc: 'Topical antifungal creams, pain relief gels & antiseptic ointments in lami tubes and tamper-evident jars.',
    badge: 'DERMA & TOPICALS',
    link: '/products/creams-gels-ointments'
  },
  {
    id: 'powders',
    name: 'Nutraceuticals & Dietary Powders',
    count: '8 Formulations',
    mainProduct: 'AERO PROTEIN DHA',
    image: '/assets/products/aero_protein.jpg',
    desc: 'Protein supplements with DHA, maternal nutrition formulas & kids growth tonics in 200g sealed tins.',
    badge: '200G SEALED TINS',
    link: '/products/nutraceuticals-dry-powders'
  },
  {
    id: 'drops',
    name: 'Ophthalmic & Ear Drops',
    count: '6 Formulations',
    mainProduct: 'MOXI AERO-D EYE DROPS',
    image: '/assets/products/moxi_aero_d.jpg',
    desc: 'Sterile ophthalmic antibacterial and anti-inflammatory eye and ear drops packed in Class 100 cleanrooms.',
    badge: 'STERILE 5ML & 10ML',
    link: '/products/ophthalmic-ear-drops'
  },
  {
    id: 'ors',
    name: 'ORS & Instant Energy Drinks',
    count: '3 Formulations',
    mainProduct: 'AEROVITA - Z ENERGY BOOSTER',
    image: '/assets/products/aerovita-z.jpg',
    desc: 'WHO-recommended oral rehydration salts (21.8g sachets) and instant dextrose vitamin C energy drink powders.',
    badge: 'WHO FORMULA SACHETS',
    link: '/products/nutraceuticals-dry-powders'
  },
  {
    id: 'ayurvedic',
    name: 'Ayurvedic & Personal Care',
    count: '3 Formulations',
    mainProduct: 'KESH AERO AYURVEDIC OIL',
    image: '/assets/products/kesh_aero.jpg',
    desc: '100% natural herbal hair oils, medicated antifungal soaps, piles capsules & dermatological face wash gels.',
    badge: 'HERBAL & MEDICATED',
    link: '/products/ophthalmic-ear-drops'
  }
];

export default function DosageCapabilitiesSection() {
  return (
    <section 
      id="dosage-capabilities" 
      className="py-16 sm:py-20 lg:py-24 bg-[#F0F8FD] border-b border-sky-100 relative overflow-hidden scroll-mt-24"
      aria-label="Formulation Diversity & Taxonomy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
                FORMULATION DIVERSITY & TAXONOMY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#102D4B] tracking-tight uppercase leading-[1.18]">
              COMPLETE DOSAGE SPECTRUM <br className="hidden sm:inline" />
              ACROSS <span className="text-[#00AEEF]">84+ COMMERCIAL MONOGRAPHS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Structured across 9 specialized delivery systems with validated bio-equivalence, stable dissolution kinetics, and authentic packaging from our official catalogue.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md transition-all self-start md:self-auto flex-shrink-0"
          >
            <span>VIEW COMPLETE CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 
          ======================================================================
          3x3 ROW & COLUMN GRID (3 Columns × 3 Rows = 9 Cards Total)
          Each box contains its authentic product packaging image on bg-white!
          ======================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NINE_DOSAGE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="bg-white p-5 sm:p-5.5 rounded-2xl border border-sky-100 hover:border-[#00AEEF] shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00AEEF] to-[#ED1C24] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Tag Row */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-extrabold text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-1 rounded-md">
                    {cat.count}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                    {cat.badge}
                  </span>
                </div>

                {/* Main Product Packaging Image on bg-white */}
                <div className="w-full h-24 sm:h-28 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-2 mb-2.5 overflow-hidden shadow-2xs">
                  <img
                    src={cat.image}
                    alt={cat.mainProduct}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Featured Product Label */}
                <div className="text-[10px] sm:text-[11px] font-bold text-[#00AEEF] uppercase tracking-wide truncate mb-1">
                  Main: {cat.mainProduct}
                </div>

                {/* Category Title */}
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors leading-snug mb-1.5">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                  {cat.desc}
                </p>
              </div>

              {/* Bottom Explore Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400">Catalogue Verified</span>
                <span className="text-[#00AEEF] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Explore Formulations</span>
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
