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
  ChevronDown,
  PhoneCall,
  ExternalLink,
  HelpCircle
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Aerolife%20Pharma,%20I%20am%20interested%20in%20your%20products%20and%20commercial%20quotation.`;

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

  const faqs = [
    {
      q: 'What pharmaceutical formulations does Aerolife Pharma offer?',
      a: 'Aerolife Pharma offers 84+ verified commercial formulations across 7 core dosage forms: Tablets & Caplets, Hard & Softgel Capsules, Oral Liquids & Syrups, Pediatric Dry Syrups with sterile water, Creams, Gels & Ointments, Nutraceuticals & Dry Powders (including WHO-formula ORS), and Ophthalmic/Ear Drops. All products are verified against our official commercial monograph catalogue.'
    },
    {
      q: 'What dosage forms and packaging specifications are available?',
      a: 'Our formulations are available in modern, high-integrity pharmaceutical packaging including Alu-Alu blister strips, PVC/PVDC blisters, sealed amber PET oral liquid bottles, dry syrup glass/HDPE bottles with separate sterile water ampoules, lami tubes with tamper-evident seals, and 200g sealed dietary tins.'
    },
    {
      q: 'How can institutional buyers, distributors, or PCD partners inquire?',
      a: 'Commercial inquiries, wholesale purchase requests, and monopoly PCD franchise applications can be submitted directly through our online Request Commercial Quote form, via our official WhatsApp dispatch channel (+91 70451 47453), or by calling our commercial desk directly.'
    },
    {
      q: 'Where is Aerolife Pharma located and where does it distribute?',
      a: 'Aerolife Pharma is headquartered in Vasai East, Thane, Maharashtra (Registered Trademark No. 4665534). We provide nationwide Pan-India distribution with district-wise monopoly marketing rights, complete promotional collateral, and Certificate of Analysis (COA) dispatched with every batch.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none">

      {/* 
        ========================================================================
        1. HERO SECTION: PHARMACEUTICAL CATALOGUE OVERVIEW (Unified Centered Navy)
        Clean, centered layout with Search, Verified Stats & Catalog PDF actions
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden flex flex-col justify-center text-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Giant Watermark Typography Centered */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.04] select-none pointer-events-none uppercase tracking-tighter leading-none z-10"
          aria-hidden="true"
        >
          PRODUCTS
        </div>

        {/* Brand Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">

          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">AeroLife Products</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
            <span>ALL AEROLIFE PHARMA PRODUCTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5">
            PHARMACEUTICAL SOLUTIONS. <br />
            <span className="text-[#00AEEF]">FOCUSED ON HEALTHCARE.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore Aerolife Pharma's comprehensive portfolio of <strong className="text-white font-semibold">{totalProductsCount} verified commercial products</strong> across <strong className="text-white font-semibold">{CATEGORIES.length} primary dosage forms</strong>, formulated under strict quality control as documented in our official commercial catalog.
          </p>

          {/* Fast Global Search Bar Centered */}
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search 84 products by brand name, active composition, or dosage..."
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
              <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 text-left">
                <div className="p-2.5 border-b border-slate-100 flex items-center justify-between bg-slate-50 text-[11px] font-bold text-slate-500">
                  <span>{searchResults.length} Products Found</span>
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
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{prod.name}</h4>
                          <p className="text-[11px] text-slate-500 truncate">{prod.composition}</p>
                          <span className="text-[10px] font-semibold text-[#00AEEF]">{prod.pack}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-slate-500">
                    No matching products found for "{searchQuery}".
                  </div>
                )}
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
              <span className="text-xs text-slate-300 font-medium">Product Categories</span>
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
        2. PRIMARY FORMULATION CATEGORIES GRID
        Clean Category-First Architecture
        ========================================================================
      */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

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
            Select a therapeutic category below to inspect all verified formulations, active compositions, packaging specifications, and clinical monographs from <strong className="text-slate-800">our approved commercial catalogue</strong>.
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
                <div className="relative w-full h-48 bg-white flex items-center justify-center p-4 overflow-hidden border-b border-slate-100/70">
                  <img
                    src={category.flagshipImage}
                    alt={category.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                    }}
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
        3. FEATURED COMMERCIAL FORMULATIONS SHOWCASE
        Big Packaging Images with Pure White Background (CATLOP.pdf)
        ========================================================================
      */}
      <section className="py-14 sm:py-18 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
                <span className="text-xs font-bold text-[#ED1C24] tracking-widest uppercase">
                  Flagship Formulations
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4B] tracking-tight">
                Featured Commercial Formulations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                High-demand antibiotic, analgesic, anti-fungal, and nutritional formulations from our commercial portfolio.
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
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Clean Product Visual on Pure White Canvas */}
                  <div className="w-full h-52 bg-white p-4 flex items-center justify-center border-b border-slate-100/70 relative overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                      }}
                    />
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                      {prod.dosageForm || 'Product'}
                    </span>
                  </div>

                  {/* Product Information Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF]">
                        {cat.title}
                      </span>
                      <h3 className="text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mt-0.5 line-clamp-1">
                        {prod.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 line-clamp-2 mt-1 leading-snug">
                        {prod.composition}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md mt-2.5">
                        <Package className="w-3.5 h-3.5 text-[#00AEEF]" />
                        <span>Pack: <strong className="text-slate-900">{prod.pack}</strong></span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/products/${cat.slug}/${prod.slug}`}
                        className="text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>VIEW PRODUCT</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/quote?product=${encodeURIComponent(prod.name)}`}
                        className="text-xs font-bold text-[#ED1C24] hover:underline"
                      >
                        Inquire Now
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
        4. PHARMACEUTICAL PORTFOLIO FAQ SECTION (Matching HomePage FaqSection)
        ========================================================================
      */}
      <section
        id="faq-section"
        className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] border-b border-sky-100 relative overflow-hidden scroll-mt-24"
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
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Contact Help Strip */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-[#102D4B]">Have more questions or need a custom price quotation?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Reach out to our executive support team directly via phone or WhatsApp.</p>
            </div>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] transition-all flex-shrink-0"
            >
              <span>REQUEST QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        5. COMMERCIAL PARTNERSHIP CTA BANNER WITH WHATSAPP ACTION (Bespoke for Products Page)
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="COMMERCIAL SUPPLY & MONOPOLY PCD"
        title="READY TO EXPAND YOUR PHARMACEUTICAL FORMULATION PORTFOLIO?"
        description="Request commercial price lists, minimum order quantities (MOQ), and formulation dossiers across our 84+ verified commercial preparations."
        primaryText="REQUEST COMMERCIAL QUOTE"
        primaryLink="/quote"
        secondaryText="CONTACT SALES TEAM"
        secondaryLink="/contact"
        whatsappMessage="Hi Aerolife Pharma, I would like to request product pricing, MOQ, and commercial franchise terms."
      />

    </div>
  );
}
