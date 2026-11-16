import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Search,
  Pill,
  Sparkles,
  Layers,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { menuCategories } from '../data/menuProducts';

export default function Navbar({ onNavigate, activeTab = 'home' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).get('menu') === 'open';
    } catch {
      return false;
    }
  });

  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).get('dropdown') === 'products';
    } catch {
      return false;
    }
  });

  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).get('mobile_dropdown') === 'products';
    } catch {
      return false;
    }
  });

  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);

  // Total formulation count across all categories
  const totalFormulationsCount = useMemo(() => {
    return menuCategories.reduce((sum, cat) => sum + cat.products.length, 0);
  }, []);

  // Filtered products list based on active tab & search query
  const displayedProducts = useMemo(() => {
    let list = [];
    if (activeCategoryTab === 'all') {
      list = menuCategories.flatMap(cat =>
        cat.products.map(p => ({ ...p, categoryName: cat.name }))
      );
    } else {
      const selected = menuCategories.find(c => c.id === activeCategoryTab);
      list = selected ? selected.products.map(p => ({ ...p, categoryName: selected.name })) : [];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.composition && p.composition.toLowerCase().includes(q)) ||
        (p.pack && p.pack.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategoryTab, searchQuery]);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handlePlaceholderClick = (e, item) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(item);
    }
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleProductItemClick = (e, product) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(`product-${product.name}`);
    }
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 relative select-none ${isScrolled
        ? 'shadow-md border-b border-slate-100'
        : 'border-b border-slate-200/90'
        }`}
    >
      {/* 
        ========================================================================
        DECORATIVE SIDE WINGS (LEFT & RIGHT EDGES)
        Angled geometric shapes using Aero Life Pharma's Cyan & Red brand colors.
        Scaled proportionally to match the sleek ~90-94px desktop height.
        ========================================================================
      */}

      {/* LEFT EDGE: Angled geometric chevron (Cyan top, Red bottom) */}
      <div 
        className="absolute left-0 top-0 bottom-0 h-full w-5 sm:w-8 md:w-11 lg:w-14 xl:w-16 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Top polygon: Original Cyan / Light Blue (#00AEEF) */}
          <polygon 
            points="0,0 48,0 96,50 0,62" 
            fill="#00AEEF" 
          />
          {/* Bottom polygon: Original Red (#ED1C24) */}
          <polygon 
            points="0,62 96,50 48,100 0,100" 
            fill="#ED1C24" 
          />
        </svg>
      </div>

      {/* RIGHT EDGE: Matching angled geometric chevron (Red top, Cyan bottom) */}
      <div 
        className="absolute right-0 top-0 bottom-0 h-full w-5 sm:w-8 md:w-11 lg:w-14 xl:w-16 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Top polygon: Original Red (#ED1C24) */}
          <polygon 
            points="52,0 100,0 100,62 4,50" 
            fill="#ED1C24" 
          />
          {/* Bottom polygon: Original Cyan / Light Blue (#00AEEF) */}
          <polygon 
            points="4,50 100,62 100,100 52,100" 
            fill="#00AEEF" 
          />
        </svg>
      </div>

      {/* 
        ========================================================================
        MAIN NAVBAR CONTENT CONTAINER
        - Height: Sleek ~84-88px consistent height across viewports.
        - Balanced left & right padding to give clear breathing space from the wings.
        - Perfectly aligned: Left Logo | Centered Navigation | Right CTA
        ========================================================================
      */}
      <div className="w-full h-20 md:h-[84px] lg:h-[88px] xl:h-[88px] px-3 sm:px-6 md:px-8 lg:px-10 relative flex items-center justify-between">
        
        {/* LEFT SECTION: Original Logo with generous clearance from left wing */}
        <div className="flex-shrink-0 min-w-0 flex items-center pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24 z-20">
          <a 
            href="#" 
            onClick={(e) => handlePlaceholderClick(e, 'home')}
            className="flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 rounded transition-transform duration-200 hover:scale-[1.01]"
            aria-label="Aero Life Pharma Home"
          >
            <img 
              src="/assets/aerolife-logo.svg" 
              alt="Aero Life Pharma - Original Logo" 
              className="h-9 sm:h-10 md:h-11 lg:h-11 xl:h-11 w-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[215px] xl:max-w-[225px] object-contain"
            />
          </a>
        </div>

        {/* 
          CENTER SECTION: Horizontally Centered Navigation Group
          Mathematically centered across the full navbar width via absolute centering.
          Vertically aligned with balanced spacing and typography.
        */}
        <nav
          className="hidden lg:flex items-center space-x-6 xl:space-x-9 absolute left-1/2 -translate-x-1/2 z-20"
          aria-label="Main Navigation"
        >
          {/* Home */}
          <a
            href="#"
            onClick={(e) => handlePlaceholderClick(e, 'home')}
            className={`group relative py-1 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center ${activeTab === 'home'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>Home</span>
            {activeTab === 'home' ? (
              <span
                className="w-6 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200"
                aria-hidden="true"
              />
            ) : (
              <span
                className="w-0 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200 group-hover:w-6 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
          </a>

          {/* About */}
          <a
            href="#about"
            onClick={(e) => handlePlaceholderClick(e, 'about')}
            className={`group relative py-1 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center ${activeTab === 'about'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>About</span>
            {activeTab === 'about' ? (
              <span
                className="w-6 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200"
                aria-hidden="true"
              />
            ) : (
              <span
                className="w-0 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200 group-hover:w-6 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
          </a>

          {/* Products with Full Catalogue Mega-Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className={`group relative py-1 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1.5 focus:outline-none ${activeTab === 'products' || isProductsDropdownOpen
                ? 'text-[#00AEEF]'
                : 'text-slate-800 hover:text-[#00AEEF]'
                }`}
              aria-expanded={isProductsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180 text-[#00AEEF]' : 'text-slate-400 group-hover:text-[#00AEEF]'
                  }`}
              />
              {activeTab === 'products' && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#00AEEF] rounded-full transition-all duration-200"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* 
              ==================================================================
              PRODUCTS MEGA-MENU: ALL 84 FORMULATIONS FROM CATLOP.PDF
              ==================================================================
            */}
            {isProductsDropdownOpen && (
              <div
                className="fixed lg:absolute top-[84px] lg:top-full left-1/2 -translate-x-1/2 mt-2 w-[920px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
                aria-orientation="vertical"
              >
                {/* Mega-Menu Top Header & Search Bar */}
                <div className="px-5 py-3.5 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0C1B2A] tracking-tight flex items-center gap-2">
                        <span>Aero Life Pharma Formulation Portfolio</span>
                        <span className="text-[11px] font-semibold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded-full">
                          {totalFormulationsCount} Products (CATLOP.pdf)
                        </span>
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Select a category to view formulations or search by brand name & active composition.
                      </p>
                    </div>
                  </div>

                  {/* Fast Search Input */}
                  <div className="relative w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search 84 formulations..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-slate-800 placeholder-slate-400 transition-colors"
                      autoFocus={false}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Mega-Menu Body: Two-Column Layout */}
                <div className="flex h-[420px]">

                  {/* LEFT PANE: Categories Tab List */}
                  <div className="w-64 flex-shrink-0 bg-slate-50/70 border-r border-slate-200/80 p-3 flex flex-col justify-between overflow-y-auto">
                    <div className="space-y-1">
                      <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Dosage Categories
                      </div>

                      {/* All Products Tab */}
                      <button
                        type="button"
                        onClick={() => setActiveCategoryTab('all')}
                        className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between group ${activeCategoryTab === 'all'
                          ? 'bg-[#00AEEF] text-white shadow-sm font-bold'
                          : 'text-slate-700 hover:bg-white hover:text-[#00AEEF]'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <Layers className={`w-4 h-4 ${activeCategoryTab === 'all' ? 'text-white' : 'text-slate-400 group-hover:text-[#00AEEF]'}`} />
                          <span>All Formulations</span>
                        </div>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${activeCategoryTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'
                          }`}>
                          {totalFormulationsCount}
                        </span>
                      </button>

                      {/* Individual Category Tabs */}
                      {menuCategories.map((cat) => {
                        const isCurrent = activeCategoryTab === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setActiveCategoryTab(cat.id)}
                            className={`w-full px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between group ${isCurrent
                              ? 'bg-[#00AEEF] text-white shadow-sm font-bold'
                              : 'text-slate-700 hover:bg-white hover:text-[#00AEEF]'
                              }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <Pill className={`w-3.5 h-3.5 flex-shrink-0 ${isCurrent ? 'text-white' : 'text-slate-400 group-hover:text-[#00AEEF]'}`} />
                              <span className="truncate">{cat.name}</span>
                            </div>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold flex-shrink-0 ml-1.5 ${isCurrent ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'
                              }`}>
                              {cat.products.length}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Catalogue Reference Card */}
                    <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0C1B2A]">
                        <FileText className="w-3.5 h-3.5 text-[#ED1C24]" />
                        <span>CATLOP.pdf Verified</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                        84 formulations indexed directly with original brand packaging.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT PANE: Scrollable Products Grid */}
                  <div className="flex-1 p-4 bg-white flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-700">
                        Showing {displayedProducts.length} {displayedProducts.length === 1 ? 'Product' : 'Products'}
                        {searchQuery && ` matching "${searchQuery}"`}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Scroll to explore all
                      </span>
                    </div>

                    {/* Product Cards Container */}
                    <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                      {displayedProducts.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
                          <Pill className="w-8 h-8 text-slate-300 mb-2" />
                          <p className="text-sm font-semibold text-slate-600">No matching formulation found</p>
                          <p className="text-xs text-slate-400 mt-1">Try searching by brand name or composition salt.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5">
                          {displayedProducts.map((p, idx) => (
                            <div
                              key={`${p.name}-${idx}`}
                              onClick={(e) => handleProductItemClick(e, p)}
                              className="group p-2.5 rounded-xl border border-slate-150 hover:border-[#00AEEF] hover:bg-[#F0F9FF]/40 transition-all duration-150 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-sm"
                            >
                              <div>
                                <div className="flex items-start justify-between gap-1 mb-1">
                                  <h4 className="text-xs font-bold text-[#0C1B2A] group-hover:text-[#00AEEF] line-clamp-1 leading-snug">
                                    {p.name}
                                  </h4>
                                </div>
                                <p className="text-[10.5px] text-slate-500 line-clamp-2 leading-relaxed">
                                  {p.composition}
                                </p>
                              </div>

                              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                                <span className="font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                                  {p.pack || 'Standard Pack'}
                                </span>
                                <span className="text-slate-400 font-medium">
                                  Page {p.page}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Dropdown Bottom Bar */}
                    <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">
                        Need wholesale or third-party manufacturing information?
                      </span>
                      <a
                        href="#enquire"
                        onClick={(e) => handlePlaceholderClick(e, 'enquire')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] group"
                      >
                        <span>Enquire for Catalogue Monograph</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Quality */}
          <a
            href="#quality"
            onClick={(e) => handlePlaceholderClick(e, 'quality')}
            className={`group relative py-1 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center ${activeTab === 'quality'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>Quality</span>
            {activeTab === 'quality' ? (
              <span
                className="w-6 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200"
                aria-hidden="true"
              />
            ) : (
              <span
                className="w-0 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200 group-hover:w-6 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
          </a>

          {/* Contact */}
          <a
            href="#contact"
            onClick={(e) => handlePlaceholderClick(e, 'contact')}
            className={`group relative py-1 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center ${activeTab === 'contact'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>Contact</span>
            {activeTab === 'contact' ? (
              <span
                className="w-6 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200"
                aria-hidden="true"
              />
            ) : (
              <span
                className="w-0 h-[3px] bg-[#00AEEF] rounded-full mt-1 transition-all duration-200 group-hover:w-6 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
          </a>
        </nav>

        {/* 
          RIGHT SECTION: CTA Button & Mobile Hamburger
          Generous right-side padding so button has balanced breathing space from the right wing!
        */}
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 pr-8 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24 z-20">
          {/* Prominent Rectangular CTA Button with slightly rounded corners */}
          <a
            href="#enquire"
            onClick={(e) => handlePlaceholderClick(e, 'enquire')}
            className="hidden sm:inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#ED1C24] hover:bg-[#D9141B] shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:ring-offset-2"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#00AEEF] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

      </div>

      {/* 
        ========================================================================
        MOBILE NAVIGATION DRAWER
        Responsive off-canvas navigation featuring all 84 products under categories
        ========================================================================
      */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[72px] sm:top-[80px] z-40 lg:hidden bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl p-5 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
            id="mobile-menu"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Navigation
                </span>
                <span className="text-xs font-semibold text-[#00AEEF]">
                  Aero Life Pharma
                </span>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-1">
                <a
                  href="#"
                  onClick={(e) => handlePlaceholderClick(e, 'home')}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${activeTab === 'home'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>Home</span>
                  {activeTab === 'home' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </a>

                <a
                  href="#about"
                  onClick={(e) => handlePlaceholderClick(e, 'about')}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${activeTab === 'about'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>About</span>
                  {activeTab === 'about' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </a>

                {/* Mobile Products Accordion */}
                <div className="border border-slate-150 rounded-xl overflow-hidden my-1">
                  <button
                    type="button"
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className="w-full px-3 py-2.5 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span>Products</span>
                      <span className="text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-1.5 py-0.5 rounded-full">
                        84
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180 text-[#00AEEF]' : ''
                      }`} />
                  </button>

                  {isMobileProductsOpen && (
                    <div className="bg-slate-50 p-2.5 space-y-2 border-t border-slate-100 max-h-72 overflow-y-auto">
                      {menuCategories.map((cat) => {
                        const isOpen = mobileActiveCategory === cat.id;
                        return (
                          <div key={cat.id} className="bg-white rounded-lg border border-slate-200/80 overflow-hidden">
                            <button
                              type="button"
                              onClick={() => setMobileActiveCategory(isOpen ? null : cat.id)}
                              className="w-full px-3 py-2 text-left text-xs font-bold text-slate-800 flex items-center justify-between hover:bg-slate-50"
                            >
                              <span>{cat.name}</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-slate-500 font-medium">{cat.products.length}</span>
                                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
                              </div>
                            </button>

                            {isOpen && (
                              <div className="px-3 py-2 border-t border-slate-100 bg-slate-50/50 space-y-1.5 max-h-48 overflow-y-auto">
                                {cat.products.map((p, pIdx) => (
                                  <div
                                    key={pIdx}
                                    onClick={(e) => handleProductItemClick(e, p)}
                                    className="py-1 cursor-pointer hover:text-[#00AEEF]"
                                  >
                                    <p className="text-[11px] font-bold text-slate-700 hover:text-[#00AEEF] leading-tight">
                                      {p.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400 truncate">
                                      {p.pack} • Page {p.page}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <a
                  href="#quality"
                  onClick={(e) => handlePlaceholderClick(e, 'quality')}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${activeTab === 'quality'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>Quality</span>
                  {activeTab === 'quality' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handlePlaceholderClick(e, 'contact')}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${activeTab === 'contact'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>Contact</span>
                  {activeTab === 'contact' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </a>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Section */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href="#enquire"
                onClick={(e) => handlePlaceholderClick(e, 'enquire')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#ED1C24] hover:bg-[#D9141B] shadow-sm transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Aero Life Pharma Corporate Catalogue & Formulations
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
