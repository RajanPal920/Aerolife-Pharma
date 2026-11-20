import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CATEGORIES,
  ALL_PRODUCTS,
  searchProducts
} from '../data/productsData';
import {
  Search,
  ArrowRight,
  Pill,
  Layers,
  FlaskConical,
  Baby,
  ShieldCheck,
  Sparkles,
  Eye,
  CheckCircle2,
  FileText,
  Package,
  Award,
  ChevronRight,
  PhoneCall,
  ExternalLink
} from 'lucide-react';

const ICON_MAP = {
  Pill: Pill,
  Layers: Layers,
  FlaskConical: FlaskConical,
  Baby: Baby,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Eye: Eye
};

export default function ProductsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Live search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchProducts(searchQuery).slice(0, 8);
  }, [searchQuery]);

  // Total products count
  const totalProductsCount = ALL_PRODUCTS.length;

  // Flagship showcase formulations from CATLOP.pdf
  const flagshipProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => p.isFlagship).slice(0, 8);
  }, []);

  const handleSearchResultClick = (product) => {
    const category = CATEGORIES.find(c => c.id === product.category) || CATEGORIES[0];
    navigate(`/products/${category.slug}/${product.slug}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none">
      
      {/* 
        ========================================================================
        HERO SECTION: PHARMACEUTICAL CATALOGUE OVERVIEW
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        
        {/* Brand Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">Commercial Product Catalogue</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>OFFICIAL PRODUCT PORTFOLIO • CATLOP.PDF</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Pharmaceutical Formulations &amp; Product Catalogue
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Explore Aerolife Pharma's comprehensive portfolio of <strong className="text-white font-semibold">{totalProductsCount} verified commercial formulations</strong> across {CATEGORIES.length} primary dosage forms. Manufactured under stringent WHO-GMP standards with strict quality control.
            </p>

            {/* Fast Global Search Bar */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder="Search 84 formulations by brand name, composition, or dosage..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 rounded-xl text-sm sm:text-base font-medium shadow-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] transition-all placeholder-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Instant Search Dropdown Preview */}
              {isSearchFocused && searchQuery.trim() && (
                <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50">
                  <div className="p-2 border-b border-slate-100 flex items-center justify-between bg-slate-50 text-[11px] font-bold text-slate-500">
                    <span>{searchResults.length} Formulations Found</span>
                    <span>Click to inspect</span>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                      {searchResults.map((prod) => (
                        <div
                          key={prod.id}
                          onMouseDown={() => handleSearchResultClick(prod)}
                          className="p-3 hover:bg-slate-50 cursor-pointer flex items-center gap-3 transition-colors text-left"
                        >
                          <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex-shrink-0 p-1 flex items-center justify-center">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-contain"
                              onError={(e) => { e.currentTarget.src = '/assets/products/clavaero-cv-625.jpg'; }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{prod.name}</h4>
                            <p className="text-[11px] text-slate-500 truncate">{prod.composition}</p>
                            <span className="text-[10px] font-semibold text-[#00AEEF]">{prod.pack} • Page {prod.page}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-slate-500">
                      No matching formulations found for "{searchQuery}".
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
              <div>
                <span className="block text-2xl font-black text-white">{totalProductsCount}+</span>
                <span className="text-xs text-slate-400">Total Formulations</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#00AEEF]">{CATEGORIES.length}</span>
                <span className="text-xs text-slate-400">Dosage Categories</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-white">WHO-GMP</span>
                <span className="text-xs text-slate-400">Certified Production</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#ED1C24]">100%</span>
                <span className="text-xs text-slate-400">Catalog Verified</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        PHASE 2: PRIMARY FORMULATION CATEGORIES GRID
        "When a visitor opens the Products page, the first thing they should 
         see is a clean, professional grid of the main formulation categories."
        ========================================================================
      */}
      <section className="py-14 sm:py-18 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
              Formulation Taxonomy
            </span>
            <span className="w-6 h-[2px] bg-[#ED1C24] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
            Commercial Formulation Categories
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select a therapeutic category below to inspect all verified formulations, active compositions, packaging specifications, and clinical monographs from <strong className="text-slate-800">CATLOP.pdf</strong>.
          </p>
        </div>

        {/* 7 Canonical Formulation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category, index) => {
            const IconComponent = ICON_MAP[category.icon] || Pill;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Top Badge & Formulation Count */}
                <div className="p-5 pb-3 flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50/70 to-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                      <IconComponent className="w-5 h-5 text-[#00AEEF]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Category 0{index + 1}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20">
                    {category.count} Products
                  </span>
                </div>

                {/* Big Crisp Product Visual on Pure White Canvas */}
                <div className="relative w-full h-48 bg-white flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
                  <img
                    src={category.flagshipImage}
                    alt={category.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = '/assets/products/clavaero-cv-625.jpg'; }}
                  />
                  <span className="absolute bottom-2 right-3 text-[10px] font-semibold text-slate-400 bg-white/90 px-2 py-0.5 rounded shadow-xs border border-slate-100">
                    Verified Packaging
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {category.shortDesc}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      WHO-GMP Validated
                    </span>
                    <Link
                      to={`/products/${category.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md shadow-cyan-500/20 transition-all duration-200 group-hover:translate-x-1"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        FEATURED COMMERCIAL FORMULATIONS SHOWCASE
        Big Packaging Images with Pure White Background (CATLOP.pdf)
        ========================================================================
      */}
      <section className="py-14 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
                <span className="text-xs font-bold text-[#ED1C24] tracking-widest uppercase">
                  Flagship Portfolio
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4B] tracking-tight">
                Featured Commercial Formulations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                High-demand antibiotic, analgesic, anti-fungal, and nutritional formulations from CATLOP.pdf.
              </p>
            </div>

            <Link
              to="/products/tablets-capsules"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors"
            >
              <span>View All 84 Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Featured Product Cards with Big Packaging on bg-white */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {flagshipProducts.map((prod) => {
              const cat = CATEGORIES.find(c => c.id === prod.category) || CATEGORIES[0];
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
                >
                  {/* Big Image on Clean White Canvas */}
                  <div className="w-full h-48 bg-white p-4 flex items-center justify-center border-b border-slate-100 relative">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => { e.currentTarget.src = '/assets/products/clavaero-cv-625.jpg'; }}
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded">
                      CATLOP Page {prod.page}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {cat.title}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#00AEEF] transition-colors mt-0.5 line-clamp-1">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-snug">
                        {prod.composition}
                      </p>
                      <div className="mt-2 text-[11px] font-semibold text-slate-500">
                        Pack: <span className="text-slate-800">{prod.pack}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/products/${cat.slug}/${prod.slug}`}
                        className="text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/quote?product=${encodeURIComponent(prod.name)}`}
                        className="text-[11px] font-bold text-[#ED1C24] hover:underline"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        QUALITY ASSURANCE & COMPLIANCE BANNER
        ========================================================================
      */}
      <section className="bg-slate-100/70 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <CheckCircle2 className="w-6 h-6 text-[#00AEEF] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">WHO-GMP &amp; ISO 9001:2015 Compliant</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Every product listed in our catalog adheres to strict validation and manufacturing protocols in certified cleanroom facilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <FileText className="w-6 h-6 text-[#00AEEF] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Certificate of Analysis (COA) with Each Batch</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Complete documentation, analytical testing, and stability reports are provided for all commercial distribution partnerships.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <PhoneCall className="w-6 h-6 text-[#ED1C24] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">PCD Franchise &amp; Third-Party Manufacturing</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Monopoly PCD franchise rights and contract manufacturing available across India. Call our commercial desk at +91 70451 47453.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
