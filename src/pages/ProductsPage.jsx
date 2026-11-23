import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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
  ChevronDown,
  PhoneCall,
  ExternalLink,
  HelpCircle,
  Filter,
  X,
  Compass
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

export default function ProductsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeSection, setActiveSection] = useState('tablets');
  const [openFaq, setOpenFaq] = useState(null);

  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Aerolife%20Pharma,%20I%20am%20interested%20in%20your%20products%20and%20commercial%20quotation.`;

  // Total products count
  const totalProductsCount = ALL_PRODUCTS.length;

  // Scroll to section if specified in URL hash or search params
  useEffect(() => {
    const sectionParam = searchParams.get('section');
    if (sectionParam) {
      const el = document.getElementById(`section-${sectionParam}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionParam);
      }
    }
  }, [searchParams]);

  // Synchronize search query with URL if changed
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim()) {
      setSearchParams({ search: val }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  // Filtered products grouped by category
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return CATEGORIES;
    }

    return CATEGORIES.map((cat) => {
      const matchingProducts = cat.products.filter((p) => {
        return (
          p.name.toLowerCase().includes(query) ||
          p.composition.toLowerCase().includes(query) ||
          (p.dosageForm && p.dosageForm.toLowerCase().includes(query)) ||
          (p.strength && p.strength.toLowerCase().includes(query)) ||
          (p.pack && p.pack.toLowerCase().includes(query)) ||
          (p.therapeuticCategory && p.therapeuticCategory.toLowerCase().includes(query))
        );
      });

      return {
        ...cat,
        products: matchingProducts,
        count: matchingProducts.length
      };
    });
  }, [searchQuery]);

  // Count total matching products across all sections
  const totalMatchingProducts = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.products.length, 0);
  }, [filteredCategories]);

  // Scroll smoothly to a specific section anchor
  const scrollToSection = (categoryId) => {
    setActiveSection(categoryId);
    const element = document.getElementById(`section-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqs = [
    {
      q: 'What pharmaceutical formulations does Aerolife Pharma offer?',
      a: 'Aerolife Pharma offers 84 verified commercial products across 7 core dosage forms: Tablets & Caplets (31 products), Hard & Softgel Capsules (10 products), Oral Liquids & Syrups (20 products), Pediatric Dry Syrups with sterile water (3 products), Creams, Gels & Ointments (6 products), Nutraceuticals & Dry Powders (8 products), and Ophthalmic/Ear Drops (6 products). All products are verified against our official commercial monograph catalog (CATLOP.pdf).'
    },
    {
      q: 'Are all products available for nationwide supply and PCD franchise?',
      a: 'Yes. All 84 formulations are produced under stringent WHO-GMP guidelines and are readily available for PCD pharma franchise distribution, commercial hospital supply, and institutional procurement with exclusive district-wise monopoly rights.'
    },
    {
      q: 'What packaging standards are used for Aerolife Pharma products?',
      a: 'Our formulations are packed using industry-leading packaging materials including high-barrier Alu-Alu blister foils, PVC/PVDC blisters, pharmaceutical amber PET bottles with measuring caps, dry syrups with sterile water for injection, leak-resistant laminated tubes, and airtight hermetically sealed 200g dietary powder tins.'
    },
    {
      q: 'How can distributors, hospitals, or PCD franchise partners place an order?',
      a: 'Commercial orders, wholesale rate inquiries, and monopoly franchise applications can be submitted directly through our Request Commercial Quote form, via our official WhatsApp commercial desk (+91 70451 47453), or by emailing info@aerolifepharma.com.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none">

      {/* 
        ========================================================================
        1. HERO SECTION: PHARMACEUTICAL CATALOG OVERVIEW (Unified Centered Navy)
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-16 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden flex flex-col justify-center text-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Giant Watermark Typography Centered */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.04] select-none pointer-events-none uppercase tracking-tighter leading-none z-10"
          aria-hidden="true"
        >
          CATALOG
        </div>

        {/* Brand Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">

          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">All Products</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
            <span>ALL AEROLIFE PHARMA PRODUCTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5">
            PHARMACEUTICAL SOLUTIONS. <br />
            <span className="text-[#00AEEF]">COMPLETE COMMERCIAL CATALOG.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore Aerolife Pharma's complete portfolio of <strong className="text-white font-semibold">{totalProductsCount} verified commercial products</strong> displayed continuously below, organized into <strong className="text-white font-semibold">{CATEGORIES.length} distinct dosage-form sections</strong> from our official catalog.
          </p>

          {/* Fast Global Search Bar Centered */}
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search 84 products by brand name, active composition, or pack..."
                className="w-full pl-12 pr-10 py-3.5 bg-white text-slate-900 rounded-xl text-sm sm:text-base font-medium shadow-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] transition-all placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3.5 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchQuery.trim() && (
              <div className="mt-2 text-xs font-semibold text-slate-300 flex items-center justify-between px-1">
                <span>
                  Showing <strong className="text-white">{totalMatchingProducts}</strong> matching products across {filteredCategories.filter(c => c.products.length > 0).length} sections
                </span>
                <button
                  onClick={clearSearch}
                  className="text-[#00AEEF] hover:underline"
                >
                  Show all 84 products
                </button>
              </div>
            )}
          </div>

          {/* Official Product Catalog Actions Centered (View & Download) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="/documents/CATLOP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00AEEF] hover:bg-[#0097D1] text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98"
            >
              <FileText className="w-4 h-4" />
              <span>View Product Catalog (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>

            <a
              href="/documents/CATLOP.pdf"
              download="Aerolife_Pharma_Product_Catalog.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-xs transition-all duration-200 active:scale-98"
            >
              <Package className="w-4 h-4 text-[#00AEEF]" />
              <span>Download Catalog (57.5 MB)</span>
            </a>
          </div>

          {/* Quick Metrics Bar Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15 max-w-3xl mx-auto">
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-white">
                {totalProductsCount}
              </span>
              <span className="text-xs text-slate-300 font-medium">Total Products</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-[#00AEEF]">
                {CATEGORIES.length}
              </span>
              <span className="text-xs text-slate-300 font-medium">Product Sections</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-white">Class 5</span>
              <span className="text-xs text-slate-300 font-medium">Govt Registered</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-[#ED1C24]">
                100%
              </span>
              <span className="text-xs text-slate-300 font-medium">Catalog Verified</span>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. STICKY QUICK NAVIGATION BAR (Jump to Section)
        Smooth anchor scrolling to each dosage form section on the same page
        ========================================================================
      */}
      <nav
        aria-label="Section Quick Jump Navigation"
        className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 min-w-max">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider pr-2 border-r border-slate-200">
            <Compass className="w-4 h-4 text-[#00AEEF]" />
            <span className="hidden sm:inline">Jump to:</span>
          </div>

          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Pill;
            const isMatch = filteredCategories.find(c => c.id === cat.id)?.products.length > 0;
            const count = filteredCategories.find(c => c.id === cat.id)?.products.length || 0;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToSection(cat.id)}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeSection === cat.id
                    ? 'bg-[#102D4B] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900'
                } ${!isMatch && searchQuery.trim() ? 'opacity-40 line-through' : ''}`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${activeSection === cat.id ? 'text-[#00AEEF]' : 'text-slate-500'}`} />
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                    activeSection === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 
        ========================================================================
        3. CONTINUOUS PRODUCT SHOWCASE (All 7 Product Sections on One Page)
        Every product appears exactly once in its verified dosage section
        ========================================================================
      */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1">

        {/* Global Search Active Banner */}
        {searchQuery.trim() && (
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF] text-white flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B]">
                  Search Results for "{searchQuery}"
                </h3>
                <p className="text-xs text-slate-600">
                  Found <strong className="text-slate-900">{totalMatchingProducts}</strong> matching formulations across our catalog.
                </p>
              </div>
            </div>

            <button
              onClick={clearSearch}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#ED1C24] bg-white border border-[#ED1C24]/30 hover:bg-red-50 transition-colors self-start sm:self-auto"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filter (Show All 84 Products)</span>
            </button>
          </div>
        )}

        {/* 7 Vertically Stacked Product Sections */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {filteredCategories.map((cat, sectionIdx) => {
            const IconComponent = ICON_MAP[cat.icon] || Pill;
            const hasProducts = cat.products.length > 0;

            // When searching, hide sections that have 0 matching products
            if (!hasProducts && searchQuery.trim()) {
              return null;
            }

            return (
              <section
                key={cat.id}
                id={`section-${cat.id}`}
                className="scroll-mt-24"
                aria-label={cat.title}
              >
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 mb-8 sm:mb-10">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                        <IconComponent className="w-4 h-4 text-[#00AEEF]" />
                      </div>
                      <span className="text-xs font-extrabold text-[#00AEEF] tracking-widest uppercase">
                        Section 0{sectionIdx + 1} • {cat.title}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102D4B] tracking-tight">
                      {cat.title}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                      {cat.description || cat.shortDesc}
                    </p>
                  </div>

                  {/* Section Badge with Product Count */}
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#102D4B] text-white tracking-wide shadow-xs">
                      {cat.products.length} {cat.products.length === 1 ? 'Product' : 'Products'}
                    </span>

                    <Link
                      to={`/products/${cat.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors"
                      title={`View ${cat.title} dedicated monograph page`}
                    >
                      <span>Category Monograph</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Product Grid: 4 columns on large desktop, 3 on laptop, 2 on tablet, 1 on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                  {cat.products.map((prod) => (
                    <article
                      key={prod.id}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#00AEEF]/60 transition-all duration-300 flex flex-col overflow-hidden group"
                    >
                      {/* 
                        Product Image Canvas
                        Pure white background (#FFFFFF) with object-contain as requested
                      */}
                      <div className="relative w-full h-52 sm:h-56 bg-white p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                          }}
                        />

                        {/* Dosage Form Badge in Top Right */}
                        <span className="absolute top-3 right-3 text-[10px] font-extrabold text-slate-600 bg-slate-100/90 border border-slate-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs shadow-xs">
                          {prod.dosageForm || 'Product'}
                        </span>

                        {/* Catalog Page Reference Tag */}
                        {prod.page && (
                          <span className="absolute bottom-2.5 left-3 text-[10px] font-semibold text-slate-400 bg-white/90 border border-slate-100 px-2 py-0.5 rounded shadow-xs">
                            Page {prod.page}
                          </span>
                        )}
                      </div>

                      {/* Product Content Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Product Brand Name */}
                          <h3 className="text-base sm:text-[17px] font-black text-[#102D4B] group-hover:text-[#00AEEF] transition-colors leading-snug line-clamp-1">
                            {prod.name}
                          </h3>

                          {/* Active Ingredients / Composition */}
                          <p className="text-xs font-semibold text-slate-600 line-clamp-2 mt-1.5 leading-snug min-h-[2rem]">
                            {prod.composition}
                          </p>

                          {/* Pack Size Specification */}
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg mt-3">
                            <Package className="w-3.5 h-3.5 text-[#00AEEF] flex-shrink-0" />
                            <span className="truncate">Pack: <strong className="text-slate-900">{prod.pack}</strong></span>
                          </div>
                        </div>

                        {/* Actions Footer */}
                        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                          <Link
                            to={`/products/${cat.slug}/${prod.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-[#00AEEF] hover:text-[#0097D1] transition-all group-hover:translate-x-0.5"
                          >
                            <span>VIEW DETAILS</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            to={`/quote?product=${encodeURIComponent(prod.name)}`}
                            className="text-xs font-bold text-[#ED1C24] hover:underline"
                          >
                            Enquire Now
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Zero Results State */}
        {searchQuery.trim() && totalMatchingProducts === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-xs p-8 max-w-xl mx-auto my-12">
            <div className="w-14 h-14 rounded-full bg-red-50 text-[#ED1C24] flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#102D4B] mb-2">No Matching Products Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              We couldn't find any formulation matching "{searchQuery}". Please check your spelling or search by generic ingredient.
            </p>
            <button
              onClick={clearSearch}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0097D1] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>View All 84 Products</span>
            </button>
          </div>
        )}

      </main>

      {/* 
        ========================================================================
        4. PARTNERSHIP BANNER SECTION (Pan-India Monopoly Rights & PCD Supply)
        ========================================================================
      */}
      <PartnershipBannerSection />

      {/* 
        ========================================================================
        5. PHARMACEUTICAL PORTFOLIO FAQ SECTION (Accordion)
        ========================================================================
      */}
      <section
        id="faq-section"
        className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] border-t border-sky-100 relative overflow-hidden scroll-mt-24"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
                COMMON INQUIRIES & GUIDANCE
              </span>
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102D4B] tracking-tight uppercase leading-[1.18] mb-4">
              FREQUENTLY ASKED <span className="text-[#00AEEF]">QUESTIONS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Key questions and answers regarding Aerolife Pharma formulations, dosage forms, distribution, and commercial supply across India.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-sky-100/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-extrabold text-[#102D4B] hover:text-[#00AEEF] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#00AEEF] text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Card */}
          <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#102D4B]">Need a Custom Formulation or Bulk Order?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Connect with our commercial pharmaceutical specialists on WhatsApp or call.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
              >
                <span>WhatsApp Desk</span>
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0097D1] text-white text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Request Quote</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
