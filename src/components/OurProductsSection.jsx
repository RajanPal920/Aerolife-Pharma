import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Package, Sparkles } from 'lucide-react';

const FEATURED_PRODUCTS = [
  {
    id: 'clavaero-cv-625-tablets-10-x-6',
    slug: 'clavaero-cv-625-tablets-10-x-6',
    categorySlug: 'tablets-capsules',
    name: 'CLAVAERO - CV 625',
    category: 'tablets',
    dosageForm: 'TABLETS',
    composition: 'Amoxycillin & Potassium Clavulanate Tablets I.P.',
    pack: '10 × 6 Tablets',
    image: '/assets/products/clavaero-cv-625.jpg',
    badge: 'Antibiotic'
  },
  {
    id: 'aeromark-sp-tablets',
    slug: 'aeromark-sp-tablets',
    categorySlug: 'tablets-capsules',
    name: 'AEROMARK - SP',
    category: 'tablets',
    dosageForm: 'TABLETS',
    composition: 'Aceclofenac, Paracetamol & Serratiopeptidase Tablets',
    pack: '10 × 10 Tablets',
    image: '/assets/products/aeromark-sp.jpg',
    badge: 'Analgesic & NSAID'
  },
  {
    id: 'aeromox-500-capsules',
    slug: 'aeromox-500-capsules',
    categorySlug: 'capsules-softgels',
    name: 'AEROMOX - 500',
    category: 'capsules',
    dosageForm: 'CAPSULES',
    composition: 'Amoxycillin Capsules I.P. 500 mg',
    pack: '20 × 10 Capsules',
    image: '/assets/products/aeromox-500.jpg',
    badge: 'Antibacterial'
  },
  {
    id: 'itraero-200-capsules',
    slug: 'itraero-200-capsules',
    categorySlug: 'capsules-softgels',
    name: 'ITRAERO 200',
    category: 'capsules',
    dosageForm: 'CAPSULES',
    composition: 'Itraconazole Capsules 200 mg',
    pack: '10 × 1 × 10 Capsules',
    image: '/assets/products/itraero-200.jpg',
    badge: 'Anti-Fungal'
  },
  {
    id: 'omefist-d-capsules',
    slug: 'omefist-d-capsules',
    categorySlug: 'capsules-softgels',
    name: 'OMEFIST D',
    category: 'capsules',
    dosageForm: 'CAPSULES',
    composition: 'Omeprazole & Domperidone Capsules IP',
    pack: '20 × 15 Capsules',
    image: '/assets/products/omefist-d.jpg',
    badge: 'Gastro Care'
  },
  {
    id: 'aerofol-z-dry-syrup',
    slug: 'aerofol-z-dry-syrup',
    categorySlug: 'pediatric-dry-syrups',
    name: 'AEROFOL - Z',
    category: 'syrups',
    dosageForm: 'DRY SYRUP',
    composition: 'Lactic Acid Bacillus, Niacinamide, Folic Acid & Zinc Dry Syrup',
    pack: '60 ml (Orange Flavour)',
    image: '/assets/products/aerofol-z.jpg',
    badge: 'Probiotic & Vitamins'
  },
  {
    id: 'aeromark-p-tablets',
    slug: 'aeromark-p-tablets',
    categorySlug: 'tablets-capsules',
    name: 'AEROMARK - P',
    category: 'tablets',
    dosageForm: 'TABLETS',
    composition: 'Aceclofenac & Paracetamol Tablets IP',
    pack: '20 × 10 Tablets',
    image: '/assets/products/aeromark-p.jpg',
    badge: 'Pain Relief'
  },
  {
    id: 'aerovita-z-instant-energy-drink-booster',
    slug: 'aerovita-z-instant-energy-drink-booster',
    categorySlug: 'nutraceuticals-dry-powders',
    name: 'AEROVITA - Z',
    category: 'supplements',
    dosageForm: 'ENERGY BOOSTER',
    composition: 'Dextrose with Vitamin C & Zinc Instant Energy Drink Powder',
    pack: '105 gm / 200 g (Orange)',
    image: '/assets/products/aerovita-z.jpg',
    badge: 'Immunity Booster'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Formulations (84+)' },
  { id: 'tablets', label: 'Tablets' },
  { id: 'capsules', label: 'Capsules' },
  { id: 'syrups', label: 'Syrups' },
  { id: 'supplements', label: 'Supplements' }
];

export default function OurProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const filteredProducts = activeCategory === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  const handleProductClick = (prod) => {
    navigate(`/products/${prod.categorySlug}/${prod.slug}`);
  };

  return (
    <section
      id="our-products"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#102D4B] text-white overflow-hidden select-none scroll-mt-24"
      aria-label="Our Pharmaceutical Products Section"
    >
      {/* 
        ========================================================================
        HERO SLIDER THEMED ACCENTS (Image 3 Style)
        - Subtle technical grid background pattern (Layer 0)
        - Razor-thin 1.5px top Cyan-to-Red gradient accent line
        - Razor-thin 1.5px bottom Red-to-Cyan gradient accent line
        - Precision 1.5px corner framing brackets (Cyan & Red)
        - Diagonal accent seam
        ========================================================================
      */}

      {/* Subtle Technical Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-grid-pattern z-0"
        aria-hidden="true"
      />

      {/* Razor-thin 1.5px Top Accent Line: Cyan to Red */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-[#ED1C24] z-20" />

      {/* Razor-thin 1.5px Bottom Accent Line: Red to Cyan */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#ED1C24] via-[#00AEEF] to-[#00AEEF] z-20" />

      {/* Symmetrical Precision Corner Framing Accents (1.5px) */}
      {/* Top-Left: Cyan (#00AEEF) */}
      <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 w-6 sm:w-10 h-6 sm:h-10 border-t-[1.5px] border-l-[1.5px] border-[#00AEEF] rounded-tl-sm opacity-80 z-20 pointer-events-none" />

      {/* Bottom-Left: Red (#ED1C24) */}
      <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 w-6 sm:w-10 h-6 sm:h-10 border-b-[1.5px] border-l-[1.5px] border-[#ED1C24] rounded-bl-sm opacity-80 z-20 pointer-events-none" />

      {/* Top-Right: Red (#ED1C24) */}
      <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-6 sm:w-10 h-6 sm:h-10 border-t-[1.5px] border-r-[1.5px] border-[#ED1C24] rounded-tr-sm opacity-80 z-20 pointer-events-none" />

      {/* Bottom-Right: Cyan (#00AEEF) */}
      <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 w-6 sm:w-10 h-6 sm:h-10 border-b-[1.5px] border-r-[1.5px] border-[#00AEEF] rounded-br-sm opacity-80 z-20 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          {/* Sub-label */}
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 sm:w-8 h-[2px] bg-[#00AEEF] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
              OUR PHARMACEUTICAL PORTFOLIO
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#00AEEF] rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">
            OUR <span className="text-[#00AEEF]">PRODUCTS</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our verified commercial formulations developed to meet diverse clinical and healthcare requirements across <strong className="text-[#00AEEF]">84+</strong> monographs.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-[#00AEEF] text-white shadow-lg shadow-cyan-500/25 scale-105'
                      : 'bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white border border-white/15'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* 
          ======================================================================
          8-PRODUCT CARDS GRID (4 cols on Desktop, 2 on Tablet, 1 on Mobile)
          Clean White Cards with High Contrast & Hover Elevation
          ======================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => handleProductClick(prod)}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-cyan-500/20 border border-white/20 p-4 sm:p-5 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Hover Line (Dual-tone Cyan to Red) */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#ED1C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Card Top Row: Dosage Form & Category Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20">
                    {prod.dosageForm}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                    {prod.badge}
                  </span>
                </div>

                {/* Product Packaging Image */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl bg-slate-50/50 flex items-center justify-center p-2 mb-3.5 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Brand Name */}
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors leading-snug">
                  {prod.name}
                </h3>

                {/* Generic Active Composition */}
                <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2 min-h-[32px]">
                  {prod.composition}
                </p>
              </div>

              {/* Card Footer: Pack details & Explore Link */}
              <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-700">
                  {prod.pack}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00AEEF] group-hover:text-[#0097D1] transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Button: View Complete Catalogue */}
        <div className="text-center pt-2">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-xl hover:shadow-cyan-500/30 transition-all duration-200 active:scale-[0.98] group"
          >
            <span>VIEW All PRODUCT RANGE</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

    </section>
  );
}
