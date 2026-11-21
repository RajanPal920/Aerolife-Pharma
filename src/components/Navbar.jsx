import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  FileText,
  Award,
  FileCheck2
} from 'lucide-react';
import { menuCategories } from '../data/menuProducts';

export default function Navbar({ onNavigate }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  // Derive active tab from location pathname
  const currentTab = useMemo(() => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/products')) return 'products';
    if (pathname.startsWith('/quality')) return 'quality';
    if (pathname.startsWith('/certificates')) return 'certificates';
    if (pathname.startsWith('/contact')) return 'contact';
    if (pathname.startsWith('/quote')) return 'quote';
    return '';
  }, [pathname]);

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

  const [isDocsDropdownOpen, setIsDocsDropdownOpen] = useState(false);
  const docsDropdownRef = useRef(null);
  const docsLeaveTimeoutRef = useRef(null);

  const handleOpenDocsDropdown = () => {
    if (docsLeaveTimeoutRef.current) {
      clearTimeout(docsLeaveTimeoutRef.current);
      docsLeaveTimeoutRef.current = null;
    }
    setIsDocsDropdownOpen(true);
  };

  const handleCloseDocsDropdown = () => {
    if (docsLeaveTimeoutRef.current) {
      clearTimeout(docsLeaveTimeoutRef.current);
    }
    docsLeaveTimeoutRef.current = setTimeout(() => {
      setIsDocsDropdownOpen(false);
    }, 180);
  };

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
  const leaveTimeoutRef = useRef(null);

  // Smooth hover handlers with debounce to prevent accidental disappearance
  const handleOpenDropdown = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleCloseDropdown = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 180);
  };

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsDocsDropdownOpen(false);
  }, [pathname, location.search]);

  // Total formulation count across all categories
  const totalFormulationsCount = useMemo(() => {
    return menuCategories.reduce((sum, cat) => sum + cat.products.length, 0);
  }, []);

  // Filtered products list based on active tab & search query
  const displayedProducts = useMemo(() => {
    let list = [];
    if (activeCategoryTab === 'all') {
      list = menuCategories.flatMap(cat =>
        cat.products.map(p => ({ ...p, categoryName: cat.name, categoryId: cat.id }))
      );
    } else {
      const selected = menuCategories.find(c => c.id === activeCategoryTab);
      list = selected ? selected.products.map(p => ({ ...p, categoryName: selected.name, categoryId: selected.id })) : [];
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

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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

  const handleProductSelect = (product) => {
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const cat = menuCategories.find(c => c.id === product.categoryId || c.name === product.categoryName) || menuCategories[0];
    const catSlug = cat.slug || cat.id;
    const prodSlug = product.slug || product.id || encodeURIComponent(product.name);
    navigate(`/products/${catSlug}/${prodSlug}`);
  };

  const handleCategoryNavigate = (catId) => {
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (catId === 'all') {
      navigate('/products');
    } else {
      const cat = menuCategories.find(c => c.id === catId);
      const catSlug = cat ? (cat.slug || cat.id) : catId;
      navigate(`/products/${catSlug}`);
    }
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
        Scaled proportionally to match the sleek desktop height.
        ========================================================================
      */}

      {/* LEFT EDGE: Angled geometric chevron (Cyan top, Red bottom) */}
      <div
        className="absolute left-0 top-0 bottom-0 h-full w-5 sm:w-8 md:w-11 lg:w-14 xl:w-16 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 70 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ display: 'block' }}
        >
          {/* Top polygon: Aero Cyan (#00AEEF) */}
          <polygon
            points="0,0 35,0 70,50 0,60"
            fill="#00AEEF"
          />
          {/* Bottom polygon: Aero Red (#ED1C24) */}
          <polygon
            points="0,60 70,50 35,100 0,100"
            fill="#ED1C24"
          />
        </svg>
      </div>

      {/* RIGHT EDGE: Mirrored angled geometric chevron (Red top, Cyan bottom) */}
      <div
        className="absolute right-0 top-0 bottom-0 h-full w-5 sm:w-8 md:w-11 lg:w-14 xl:w-16 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 70 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ display: 'block' }}
        >
          {/* Top polygon: Aero Red (#ED1C24) */}
          <polygon
            points="70,0 35,0 0,50 70,60"
            fill="#ED1C24"
          />
          {/* Bottom polygon: Aero Cyan (#00AEEF) */}
          <polygon
            points="70,60 0,50 35,100 70,100"
            fill="#00AEEF"
          />
        </svg>
      </div>

      {/* 
        ========================================================================
        MAIN NAVBAR CONTENT BAR
        Height: h-20 sm:h-22 md:h-[96px] lg:h-[102px] xl:h-[106px]
        Balanced breathing space for the prominent logo and centered nav items.
        CRITICAL FIX: NO 'overflow-hidden' here so the Products dropdown is NEVER clipped!
        ========================================================================
      */}
      <div className="w-full max-w-full h-20 sm:h-22 md:h-[96px] lg:h-[102px] xl:h-[106px] px-2 sm:px-6 md:px-8 lg:px-10 relative flex items-center justify-between z-20">

        {/* LEFT SECTION: Original Logo (230-260px on desktop) vertically centered */}
        <div className="flex-shrink-0 min-w-0 flex items-center pl-6 sm:pl-10 md:pl-14 lg:pl-18 xl:pl-20 z-20">
          <Link
            to="/"
            className="flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 rounded transition-transform duration-200 hover:scale-[1.01]"
            aria-label="Aero Life Pharma Home"
          >
            <img
              src="/assets/aerolife-logo.svg"
              alt="Aero Life Pharma - Original Logo"
              className="h-9 sm:h-11 md:h-12 lg:h-[58px] xl:h-[62px] w-auto max-w-[170px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[260px] object-contain transition-all duration-200"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/aerolife-logo.png';
              }}
            />
          </Link>
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
          <Link
            to="/"
            className={`group relative h-11 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center justify-center ${currentTab === 'home'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>Home</span>
            {currentTab === 'home' ? (
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
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`group relative h-11 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center justify-center ${currentTab === 'about'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>About</span>
            {currentTab === 'about' ? (
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
          </Link>

          {/* Products with Full Catalogue Mega-Dropdown - Perfectly aligned on same horizontal baseline */}
          <div
            className="relative h-11 flex flex-col items-center justify-center"
            ref={dropdownRef}
            onMouseEnter={handleOpenDropdown}
            onMouseLeave={handleCloseDropdown}
            onFocus={handleOpenDropdown}
            onBlur={(e) => {
              if (!dropdownRef.current?.contains(e.relatedTarget)) {
                handleCloseDropdown();
              }
            }}
          >
            <Link
              to="/products"
              onClick={() => setIsProductsDropdownOpen(false)}
              className={`group relative text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 focus:outline-none ${currentTab === 'products' || isProductsDropdownOpen
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
            </Link>
            {currentTab === 'products' ? (
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

            {/* 
              ==================================================================
              PRODUCTS MEGA-MENU: ALL 84 FORMULATIONS FROM CATLOP.PDF
              - High z-index: z-[70] so it renders above all page elements
              - Invisible bridge prevents mouse-leave gaps
              - Never clipped by parent overflow
              - Smooth fade & slide transition
              ==================================================================
            */}
            {isProductsDropdownOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[920px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(16,45,75,0.25)] border border-slate-200/90 overflow-hidden z-[70] animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
                aria-orientation="vertical"
                onMouseEnter={handleOpenDropdown}
                onMouseLeave={handleCloseDropdown}
              >
                {/* Invisible Hover Bridge to eliminate any dead zone between button and dropdown */}
                <div 
                  className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" 
                  aria-hidden="true" 
                />

                {/* Mega-Menu Top Header & Search Bar */}
                <div className="px-5 py-3.5 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0C1B2A] tracking-tight flex items-center gap-2">
                        <span>Aero Life Pharma Formulation Portfolio</span>
                        <span className="text-[11px] font-semibold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded-full">
                          {totalFormulationsCount} Verified Formulations
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
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeCategoryTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'}`}>
                          {totalFormulationsCount}
                        </span>
                      </button>

                      {/* Category Specific Tabs */}
                      {menuCategories.map((cat) => {
                        const isSelected = activeCategoryTab === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setActiveCategoryTab(cat.id)}
                            className={`w-full px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all duration-150 flex items-center justify-between group ${isSelected
                              ? 'bg-[#00AEEF] text-white shadow-sm font-bold'
                              : 'text-slate-700 hover:bg-white hover:text-[#00AEEF]'
                              }`}
                          >
                            <div className="flex items-center gap-2 truncate pr-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#00AEEF]'}`} />
                              <span className="truncate">{cat.name}</span>
                            </div>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-500'}`}>
                              {cat.products.length}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Left Pane Footer: Direct Link to Products Page */}
                    <div className="pt-2 mt-2 border-t border-slate-200/70">
                      <button
                        type="button"
                        onClick={() => handleCategoryNavigate(activeCategoryTab)}
                        className="w-full py-2 px-3 rounded-lg text-xs font-bold text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors flex items-center justify-between"
                      >
                        <span>Open Complete Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT PANE: Product Cards Grid */}
                  <div className="flex-1 p-4 overflow-y-auto bg-white flex flex-col justify-between">
                    <div>
                      {/* Sub-header inside product pane */}
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                        <div className="text-xs font-bold text-slate-700 flex items-center gap-2">
                          <span>
                            {activeCategoryTab === 'all'
                              ? 'All Products'
                              : menuCategories.find(c => c.id === activeCategoryTab)?.name}
                          </span>
                          <span className="text-[11px] font-normal text-slate-400">
                            ({displayedProducts.length} formulations available)
                          </span>
                        </div>
                        <span className="text-[10px] font-medium text-slate-400">
                          Click any formulation to inspect
                        </span>
                      </div>

                      {displayedProducts.length === 0 ? (
                        <div className="py-16 text-center text-slate-400">
                          <p className="text-xs">No formulations found matching "{searchQuery}".</p>
                          <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            className="mt-2 text-xs font-bold text-[#00AEEF] hover:underline"
                          >
                            Clear search filter
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5">
                          {displayedProducts.map((p, idx) => (
                            <div
                              key={`${p.name}-${idx}`}
                              onClick={() => handleProductSelect(p)}
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
                      <Link
                        to="/quote"
                        onClick={() => setIsProductsDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] group"
                      >
                        <span>Enquire for Catalogue Monograph</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Quality */}
          <Link
            to="/quality"
            className={`group relative h-11 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center justify-center ${currentTab === 'quality'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>Quality</span>
            {currentTab === 'quality' ? (
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
          </Link>

          {/* Certificates & Documents Dropdown */}
          <div
            className="relative h-11 flex flex-col items-center justify-center"
            ref={docsDropdownRef}
            onMouseEnter={handleOpenDocsDropdown}
            onMouseLeave={handleCloseDocsDropdown}
            onFocus={handleOpenDocsDropdown}
            onBlur={(e) => {
              if (!docsDropdownRef.current?.contains(e.relatedTarget)) {
                handleCloseDocsDropdown();
              }
            }}
          >
            <Link
              to="/certificates"
              onClick={() => setIsDocsDropdownOpen(false)}
              className={`group relative text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 focus:outline-none ${currentTab === 'certificates' || isDocsDropdownOpen
                ? 'text-[#00AEEF]'
                : 'text-slate-800 hover:text-[#00AEEF]'
                }`}
              aria-expanded={isDocsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Certificates</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isDocsDropdownOpen ? 'rotate-180 text-[#00AEEF]' : 'text-slate-400 group-hover:text-[#00AEEF]'
                  }`}
              />
            </Link>
            {currentTab === 'certificates' ? (
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

            {isDocsDropdownOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 z-[70] animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseEnter={handleOpenDocsDropdown}
                onMouseLeave={handleCloseDocsDropdown}
              >
                <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" aria-hidden="true" />
                
                <div className="px-3 py-2 border-b border-slate-100 mb-2">
                  <span className="text-[11px] font-extrabold text-[#102D4B] uppercase tracking-wider block">Corporate Credentials</span>
                  <span className="text-[10px] text-slate-500">Government of India & Regulatory Standards</span>
                </div>

                <div className="space-y-1">
                  <Link
                    to="/certificates"
                    onClick={() => setIsDocsDropdownOpen(false)}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#00AEEF] transition-colors">
                        Certificates & Governance
                      </div>
                      <div className="text-[10.5px] text-slate-500">Schedule M, COA protocols & compliance</div>
                    </div>
                  </Link>

                  <a
                    href="/documents/aerolife-pharma-tm-reg.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-sky-50/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                        <span>Trade Mark Reg (Class 5)</span>
                        <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">PDF</span>
                      </div>
                      <div className="text-[10.5px] text-slate-500">Govt of India Form RG-2 • No. 4665534</div>
                    </div>
                  </a>

                  <a
                    href="/documents/CATLOP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-sky-50/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#ED1C24]/10 text-[#ED1C24] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#ED1C24] transition-colors flex items-center justify-between">
                        <span>Official Product Catalog</span>
                        <span className="text-[9px] font-extrabold bg-red-100 text-[#ED1C24] px-1.5 py-0.5 rounded">PDF</span>
                      </div>
                      <div className="text-[10.5px] text-slate-500">Complete 84 Formulation Monograph (57 MB)</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className={`group relative h-11 text-[15px] xl:text-[16px] font-semibold tracking-wide transition-colors duration-200 flex flex-col items-center justify-center ${currentTab === 'contact'
              ? 'text-[#00AEEF]'
              : 'text-slate-800 hover:text-[#00AEEF]'
              }`}
          >
            <span>Contact</span>
            {currentTab === 'contact' ? (
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
          </Link>
        </nav>

        {/* 
          RIGHT SECTION: CTA Button & Mobile Hamburger
          Generous right-side padding so button has balanced breathing space from the right wing!
        */}
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 pr-6 sm:pr-10 md:pr-14 lg:pr-18 xl:pr-20 z-20">
          {/* Prominent Rectangular CTA Button with slightly rounded corners */}
          <Link
            to="/quote"
            className="hidden sm:inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

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
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${currentTab === 'home'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>Home</span>
                  {currentTab === 'home' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${currentTab === 'about'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>About</span>
                  {currentTab === 'about' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </Link>

                {/* Mobile Products Accordion */}
                <div className="border border-slate-150 rounded-xl overflow-hidden my-1">
                  <div className="w-full px-3 py-2.5 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors">
                    <Link
                      to="/products"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-slate-800 hover:text-[#00AEEF]"
                    >
                      <span>Products</span>
                      <span className="text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-1.5 py-0.5 rounded-full">
                        84
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="p-1 hover:text-[#00AEEF]"
                      aria-label="Toggle products categories"
                    >
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180 text-[#00AEEF]' : ''
                        }`} />
                    </button>
                  </div>

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
                                <button
                                  type="button"
                                  onClick={() => handleCategoryNavigate(cat.id)}
                                  className="w-full py-1 text-left text-[11px] font-bold text-[#00AEEF] hover:underline"
                                >
                                  View all {cat.name} ({cat.products.length}) →
                                </button>
                                {cat.products.map((p, pIdx) => (
                                  <div
                                    key={pIdx}
                                    onClick={() => handleProductSelect(p)}
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

                <Link
                  to="/quality"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${currentTab === 'quality'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>Quality</span>
                  {currentTab === 'quality' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </Link>

                <div className="border border-slate-150 rounded-xl overflow-hidden my-1">
                  <Link
                    to="/certificates"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between ${currentTab === 'certificates'
                      ? 'bg-[#F0F9FF] text-[#00AEEF]'
                      : 'text-slate-700 hover:bg-slate-50'
                      }`}
                  >
                    <span>Certificates & Governance</span>
                    {currentTab === 'certificates' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                  </Link>
                  <div className="bg-slate-50 p-2 border-t border-slate-100 space-y-1">
                    <a
                      href="/documents/aerolife-pharma-tm-reg.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Trademark Reg (Class 5)</span>
                      </span>
                      <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">PDF</span>
                    </a>
                    <a
                      href="/documents/CATLOP.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#ED1C24] hover:bg-red-50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#ED1C24]" />
                        <span>Official Product Catalog</span>
                      </span>
                      <span className="text-[9px] font-bold bg-red-100 text-[#ED1C24] px-1.5 py-0.2 rounded">PDF</span>
                    </a>
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${currentTab === 'contact'
                    ? 'bg-[#F0F9FF] text-[#00AEEF]'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>Contact</span>
                  {currentTab === 'contact' && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                </Link>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Section */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                to="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-sm transition-all"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

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
