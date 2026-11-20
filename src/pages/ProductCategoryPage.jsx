import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CATEGORIES,
  getCategoryBySlug,
  getProductsByCategory,
  searchProducts
} from '../data/productsData';
import {
  ChevronRight,
  Search,
  Filter,
  ArrowRight,
  ArrowLeft,
  Package,
  Layers,
  FileText,
  CheckCircle2,
  PhoneCall,
  Pill,
  FlaskConical,
  Baby,
  ShieldCheck,
  Sparkles,
  Eye,
  ExternalLink
} from 'lucide-react';
import PartnershipBannerSection from '../components/PartnershipBannerSection';

const ICON_MAP = {
  Pill: Pill,
  Layers: Layers,
  FlaskConical: FlaskConical,
  Baby: Baby,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Eye: Eye
};

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Find category by slug or alias
  const currentCategory = useMemo(() => {
    return getCategoryBySlug(categorySlug) || CATEGORIES[0];
  }, [categorySlug]);

  const [inCategorySearch, setInCategorySearch] = useState('');
  const [selectedDosageFilter, setSelectedDosageFilter] = useState('all');

  // Category products
  const categoryProducts = useMemo(() => {
    return getProductsByCategory(currentCategory.slug);
  }, [currentCategory]);

  // Unique dosage forms within this category for filter pills
  const availableDosageForms = useMemo(() => {
    const forms = new Set(categoryProducts.map(p => p.dosageForm));
    return ['all', ...Array.from(forms)];
  }, [categoryProducts]);

  // Filtered products within category
  const filteredProducts = useMemo(() => {
    let prods = categoryProducts;

    if (selectedDosageFilter !== 'all') {
      prods = prods.filter(p => p.dosageForm === selectedDosageFilter);
    }

    if (inCategorySearch.trim()) {
      const q = inCategorySearch.toLowerCase().trim();
      prods = prods.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.pack.toLowerCase().includes(q) ||
        String(p.page).includes(q)
      );
    }

    return prods;
  }, [categoryProducts, selectedDosageFilter, inCategorySearch]);

  const IconComponent = ICON_MAP[currentCategory.icon] || Pill;

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none">
      
      {/* 
        ========================================================================
        CATEGORY HEADER & BREADCRUMBS: CENTER-ALIGNED UNIFIED NAVY
        ========================================================================
      */}
      <section className="bg-[#102D4B] text-white pt-14 pb-18 sm:pt-16 sm:pb-22 relative overflow-hidden flex flex-col justify-center">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        
        {/* Cyan/Red top seam line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/products" className="hover:text-[#00AEEF] transition-colors">Commercial Catalogue</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF] font-bold">{currentCategory.title}</span>
          </nav>

          {/* Centered Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <IconComponent className="w-4 h-4 text-[#00AEEF]" />
            <span>WHO-GMP Validated Formulation Category</span>
          </div>

          {/* Centered Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            {currentCategory.title}
          </h1>

          {/* Centered Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-6">
            {currentCategory.description}
          </p>

          {/* Category Stats Centered */}
          <div className="inline-flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-3 mb-6">
            <div>
              <span className="block text-2xl font-black text-white">{categoryProducts.length}</span>
              <span className="text-[11px] text-slate-300 font-medium">Verified Products</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#00AEEF]">Portfolio</span>
              <span className="text-xs font-semibold text-white">Commercial Monograph</span>
            </div>
          </div>

          {/* Quick Category Switcher Tabs Centered */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex-shrink-0">
              Categories:
            </span>
            {CATEGORIES.map((cat) => {
              const isCurrent = cat.id === currentCategory.id;
              return (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 flex-shrink-0 flex items-center gap-2 ${
                    isCurrent
                      ? 'bg-[#00AEEF] text-white shadow-md shadow-cyan-500/25 scale-105'
                      : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isCurrent ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {cat.count}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        MAIN CONTENT: SEARCH/FILTER BAR + RESPONSIVE PRODUCT GRID
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1">
        
        {/* Controls Toolbar: In-Category Search + Dosage Filters */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* In-category Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={inCategorySearch}
              onChange={(e) => setInCategorySearch(e.target.value)}
              placeholder={`Search within ${currentCategory.title}...`}
              className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-slate-800 placeholder-slate-400 transition-colors"
            />
            {inCategorySearch && (
              <button
                onClick={() => setInCategorySearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dosage Form Filter Pills */}
          {availableDosageForms.length > 2 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 flex-shrink-0">
                Filter:
              </span>
              {availableDosageForms.map((form) => (
                <button
                  key={form}
                  type="button"
                  onClick={() => setSelectedDosageFilter(form)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors flex-shrink-0 ${
                    selectedDosageFilter === form
                      ? 'bg-[#102D4B] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {form === 'all' ? 'All Types' : form}
                </button>
              ))}
            </div>
          )}

          {/* Counter Display */}
          <div className="text-xs font-bold text-slate-500 text-right flex-shrink-0">
            Showing <span className="text-[#00AEEF] font-extrabold">{filteredProducts.length}</span> of {categoryProducts.length} Formulations
          </div>
        </div>

        {/* 
          ======================================================================
          RESPONSIVE PRODUCT CARDS GRID
          Displaying verified products with crisp packaging on clean white canvas
          ======================================================================
        */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Big Crisp Product Image on Pure White Canvas */}
                <div className="w-full h-52 bg-white p-4 flex items-center justify-center border-b border-slate-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-108"
                    onError={(e) => { e.currentTarget.src = '/assets/products/clavaero-cv-625.jpg'; }}
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded border border-[#00AEEF]/15">
                    Formulation #{product.page}
                  </span>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {product.dosageForm}
                  </span>
                </div>

                {/* Product Information Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand Name */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00AEEF] transition-colors leading-snug line-clamp-1 mb-1.5">
                      {product.name}
                    </h3>

                    {/* Active Pharmaceutical Composition */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 min-h-[32px]">
                      {product.composition}
                    </p>

                    {/* Packaging Specification Badge */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                      <Package className="w-3.5 h-3.5 text-[#00AEEF]" />
                      <span>Pack: {product.pack}</span>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/products/${currentCategory.slug}/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors group-hover:translate-x-0.5 duration-150"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to={`/quote?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#ED1C24] hover:bg-[#D9161D] shadow-xs transition-colors"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No Formulations Matched</h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find any products in {currentCategory.title} matching "{inCategorySearch}".
            </p>
            <button
              onClick={() => {
                setInCategorySearch('');
                setSelectedDosageFilter('all');
              }}
              className="px-4 py-2 bg-[#00AEEF] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#0097D1] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Categories</span>
          </Link>

          <div className="text-xs text-slate-400">
            All formulations verified against <strong className="text-slate-600">Official Product Dossier</strong> • Aerolife Pharma
          </div>
        </div>

      </div>

      {/* 
        ========================================================================
        CATEGORY COMMERCIAL PARTNERSHIP CTA WITH WHATSAPP ACTION
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="FORMULATION MONOGRAPHS"
        title={`INTERESTED IN ${currentCategory.title.toUpperCase()}?`}
        description={`Connect with our commercial desk to request batch pricing, MOQ requirements, and formulation dossiers for ${currentCategory.title}.`}
        primaryText="REQUEST CATEGORY QUOTE"
        primaryLink="/quote"
        secondaryText="EXPLORE ALL 84 PRODUCTS"
        secondaryLink="/products"
        whatsappMessage={`Hi Aerolife Pharma, I would like to inquire about commercial supply and dossiers for ${currentCategory.title}.`}
      />

    </div>
  );
}
