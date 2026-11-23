import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CATEGORIES,
  getCategoryBySlug,
  getProductsByCategory,
  searchProducts
} from '../data/productsData';
import {
  ChevronRight,
  ChevronLeft,
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
  Activity,
  HeartPulse,
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
  Eye: Eye,
  Activity: Activity,
  HeartPulse: HeartPulse
};

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

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

  // Auto-scroll active tab into view when category changes on mobile
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentCategory.id]);

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none overflow-x-hidden">
      
      {/* 
        ========================================================================
        PHASE 4 & 5: CATEGORY HERO SECTION & FULL-WIDTH DESKTOP TABS
        Clean, centered layout with balanced spacing, verified information,
        full-width desktop view with ZERO scrollbar, and smooth touch-scroll on mobile.
        ========================================================================
      */}
      <section className="bg-[#102D4B] text-white pt-10 pb-8 sm:pt-14 sm:pb-12 relative overflow-hidden flex flex-col justify-center items-center text-center w-full">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        
        {/* Cyan/Red top seam line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full flex flex-col items-center">
          
          {/* 1. Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-300 mb-4 sm:mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <Link to="/products" className="hover:text-[#00AEEF] transition-colors">Commercial Catalogue</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-[#00AEEF] font-bold">{currentCategory.title}</span>
          </nav>

          {/* 2. Category Label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-3.5 shadow-sm">
            <IconComponent className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Product Portfolio</span>
          </div>

          {/* 3. Category Heading (Responsive font size with zero overflow) */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3 px-2 break-words text-center">
            {currentCategory.title}
          </h1>

          {/* 4. Short, Accurate Category Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto mb-4 px-2 text-center">
            {currentCategory.description}
          </p>

          {/* 5. Dynamically Calculated Product Count & Catalog Information */}
          <div className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 sm:px-5 py-2 mb-6 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black text-white">
                {categoryProducts.length}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {categoryProducts.length === 1 ? 'Product' : 'Products'} Available
              </span>
            </div>
            <div className="w-[1px] h-4 bg-white/25" />
            <div className="text-xs text-[#00AEEF] font-bold">
              Official Catalog
            </div>
          </div>

        </div>

        {/* 
          6. CATEGORY NAVIGATION TABS (ZERO SCROLLBAR ON DESKTOP - FULL WIDTH)
          Desktop (lg+): Full-width 7-column layout, NO scroll, all category names and counts 100% visible.
          Mobile/Tablet (< lg): Smooth touch scroll without any native scrollbar.
        */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-4 relative z-10">
          
          {/* DESKTOP VIEW (lg+): Full-width 7-column grid with ZERO scrollbar */}
          <div className="hidden lg:grid lg:grid-cols-7 gap-2.5 w-full">
            {CATEGORIES.map((cat) => {
              const isCurrent = cat.id === currentCategory.id;
              const catProdCount = getProductsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  className={`flex flex-col items-center justify-center text-center px-2 py-3 rounded-xl transition-all duration-200 border min-h-[72px] ${
                    isCurrent
                      ? 'bg-[#00AEEF] text-white shadow-lg shadow-cyan-500/25 border-[#00AEEF] ring-2 ring-[#00AEEF]/40 scale-[1.02]'
                      : 'bg-white/10 text-slate-200 hover:text-white hover:bg-white/15 border-white/10'
                  }`}
                >
                  <span className="text-xs font-bold leading-snug mb-1.5 text-center">
                    {cat.title}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isCurrent ? 'bg-white/25 text-white' : 'bg-white/10 text-slate-300'
                  }`}>
                    {catProdCount} {catProdCount === 1 ? 'Product' : 'Products'}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* MOBILE & TABLET VIEW (< lg): Horizontally scrollable without native scrollbar */}
          <div
            ref={tabsContainerRef}
            className="lg:hidden w-full overflow-x-auto no-scrollbar flex items-center gap-2 py-1 px-1 touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {CATEGORIES.map((cat) => {
              const isCurrent = cat.id === currentCategory.id;
              const catProdCount = getProductsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  ref={isCurrent ? activeTabRef : null}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex-shrink-0 flex items-center gap-2 whitespace-nowrap active:scale-95 ${
                    isCurrent
                      ? 'bg-[#00AEEF] text-white shadow-md shadow-cyan-500/25 ring-2 ring-[#00AEEF]/50 scale-[1.02]'
                      : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isCurrent ? 'bg-white/25 text-white' : 'bg-white/10 text-slate-400'
                  }`}>
                    {catProdCount}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>

      </section>

      {/* 
        ========================================================================
        PHASE 6: PRODUCT SEARCH & FILTERS TOOLBAR
        Responsive desktop, tablet, and mobile design with clean wrapping.
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1">
        
        {/* Controls Toolbar: In-Category Search + Dosage Filters */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* In-category Search Input */}
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={inCategorySearch}
              onChange={(e) => setInCategorySearch(e.target.value)}
              placeholder={`Search ${categoryProducts.length} products in ${currentCategory.title}...`}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-slate-800 placeholder-slate-400 transition-colors"
            />
            {inCategorySearch && (
              <button
                onClick={() => setInCategorySearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dosage Form Filter Pills */}
          {availableDosageForms.length > 2 && (
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1 w-full md:w-auto">
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
          <div className="text-xs font-bold text-slate-500 text-left md:text-right flex-shrink-0">
            Showing <span className="text-[#00AEEF] font-extrabold">{filteredProducts.length}</span> of {categoryProducts.length} Products
          </div>
        </div>

        {/* 
          ======================================================================
          PHASE 7: RESPONSIVE PRODUCT CARDS GRID
          Displaying verified products with authentic packaging on clean transparent canvas.
          ======================================================================
        */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-[#00AEEF]/50 hover:border-[#00AEEF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Product Packaging Image on Clean Soft Neutral Studio Stage */}
                <div className="w-full h-52 sm:h-56 bg-[#EAE8F2] p-4 sm:p-5 flex items-center justify-center border-b border-slate-100 relative overflow-hidden group/canvas">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105 relative z-10"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                    }}
                  />
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-extrabold text-slate-800 bg-[#F1F5F9]/95 border border-slate-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs shadow-xs z-20">
                    {product.dosageForm}
                  </span>

                  {product.page && (
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-bold text-slate-500 bg-white/95 border border-slate-200/90 px-2 py-0.5 rounded shadow-xs z-20">
                      Page {product.page}
                    </span>
                  )}
                </div>

                {/* Product Information Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand Name in bold cyan matching reference */}
                    <h3 className="text-base font-black text-[#00AEEF] hover:text-[#0097D1] transition-colors leading-snug line-clamp-1 mb-1.5">
                      {product.name}
                    </h3>

                    {/* Active Pharmaceutical Composition */}
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed line-clamp-2 mb-3 min-h-[32px]">
                      {product.composition}
                    </p>

                    {/* Packaging Specification Badge */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-800 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg">
                      <Package className="w-3.5 h-3.5 text-[#00AEEF]" />
                      <span>Pack: <strong className="text-slate-900">{product.pack}</strong></span>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/products/${currentCategory.slug}/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-[#00AEEF] hover:text-[#0097D1] transition-all group-hover:translate-x-0.5"
                    >
                      <span>VIEW DETAILS</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/quote?product=${encodeURIComponent(product.name)}`}
                      className="text-xs font-bold text-[#ED1C24] hover:underline"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-sm">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No Products Matched</h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find any products in {currentCategory.title} matching "{inCategorySearch}".
            </p>
            <button
              onClick={() => {
                setInCategorySearch('');
                setSelectedDosageFilter('all');
              }}
              className="px-4 py-2 bg-[#00AEEF] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#0097D1] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#00AEEF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Categories</span>
          </Link>

          <div className="text-xs text-slate-500">
            All 84 products verified against <strong className="text-slate-700 font-semibold">Official Company Catalog</strong> • Aerolife Pharma
          </div>
        </div>

      </div>

      {/* 
        ========================================================================
        CATEGORY COMMERCIAL PARTNERSHIP CTA WITH WHATSAPP ACTION
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="PRODUCT PORTFOLIO"
        title={`INTERESTED IN ${currentCategory.title.toUpperCase()}?`}
        description={`Connect with our commercial desk to request batch pricing, MOQ requirements, and product dossiers for ${currentCategory.title}.`}
        primaryText="REQUEST CATEGORY QUOTE"
        primaryLink="/quote"
        secondaryText="EXPLORE ALL 84 PRODUCTS"
        secondaryLink="/products"
        whatsappMessage={`Hi Aerolife Pharma, I would like to inquire about commercial supply and dossiers for ${currentCategory.title}.`}
      />

    </div>
  );
}
