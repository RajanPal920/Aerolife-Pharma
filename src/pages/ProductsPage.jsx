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
      a: 'Aerolife Pharma offers 84+ verified commercial formulations across 7 core dosage forms: Tablets & Caplets, Hard & Softgel Capsules, Oral Liquids & Syrups, Pediatric Dry Syrups with sterile water, Creams, Gels & Ointments, Nutraceuticals & Dry Powders (including WHO-formula ORS), and Ophthalmic/Ear Drops. All products are verified against our official CATLOP.pdf catalogue.'
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
        1. HERO SECTION: PHARMACEUTICAL CATALOGUE OVERVIEW (Inspired by Screenshot 1)
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        
        {/* Giant Watermark Typography */}
        <div 
          className="absolute -top-6 -left-10 text-[100px] sm:text-[160px] lg:text-[200px] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter leading-none"
          aria-hidden="true"
        >
          PRODUCTS
        </div>

        {/* Brand Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6 sm:mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">Commercial Product Catalogue</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, intro, and search */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                <span>PORTFOLIO / OUR PHARMACEUTICAL PORTFOLIO</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                PHARMACEUTICAL SOLUTIONS. <br />
                <span className="text-[#00AEEF]">FOCUSED ON HEALTHCARE.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Explore Aerolife Pharma's comprehensive portfolio of <strong className="text-white font-semibold">{totalProductsCount} verified commercial formulations</strong> across {CATEGORIES.length} primary dosage forms. Manufactured under stringent WHO-GMP standards with strict quality control.
              </p>

              {/* Fast Global Search Bar */}
              <div className="relative max-w-xl mb-8">
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
                    <div className="p-2.5 border-b border-slate-100 flex items-center justify-between bg-slate-50 text-[11px] font-bold text-slate-500">
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
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

            {/* Right Column: Visual Showcase (Matching Screenshot 1 style with badge) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white p-2">
                <img
                  src="/assets/hero_healthcare_1794824904141.jpg"
                  alt="Aerolife Pharma Monograph Packaging & Quality Testing"
                  className="w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-2xl"
                />
                
                {/* Floating Badge (Like Screenshot 1) */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#102D4B]/95 backdrop-blur-md border border-[#00AEEF]/40 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="text-2xl font-black text-[#00AEEF]">84+</div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Focused Formulations</h4>
                    <p className="text-[11px] text-slate-300">7 Therapeutic Delivery Categories</p>
                  </div>
                </div>
              </div>

              {/* Precision Corner Accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#00AEEF] rounded-tr-3xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#ED1C24] rounded-bl-3xl pointer-events-none" />
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
        5. COMMERCIAL PARTNERSHIP CTA BANNER (Matching Screenshot 5)
        With Authentic WhatsApp Icon & Dual Action Buttons
        ========================================================================
      */}
      <section className="py-16 sm:py-20 bg-[#102D4B] text-white relative overflow-hidden">
        {/* Subtle background radar circles */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5 pointer-events-none"
          aria-hidden="true" 
        />
        <div 
          className="absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/5 pointer-events-none"
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                  Partner With Aerolife Pharma
                </span>
                <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
                LET'S BUILD BETTER HEALTHCARE CONNECTIONS.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Have a product enquiry or want to connect with Aerolife Pharma? Our team is ready to provide commercial quotations and product dossiers.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/30 transition-all duration-200 active:scale-98"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/products/tablets-capsules"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-4 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
              </Link>

              {/* Direct WhatsApp Action with Official Icon */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-green-500/20 transition-all duration-200"
                aria-label="Chat on WhatsApp"
              >
                <svg 
                  className="w-4 h-4 fill-white" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
                </svg>
              </a>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
