import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { menuCategories } from '../data/menuProducts';
import {
  Search,
  Filter,
  Package,
  Layers,
  ArrowRight,
  FileText,
  CheckCircle2,
  X,
  PhoneCall,
  Sparkles,
  Info
} from 'lucide-react';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state if URL query params change
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    const s = searchParams.get('search') || '';
    setActiveCategory(cat);
    setSearchTerm(s);
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    const newParams = new URLSearchParams(searchParams);
    if (val.trim()) {
      newParams.set('search', val.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  // Flatten all products with their category metadata
  const allProducts = useMemo(() => {
    return menuCategories.flatMap(cat => 
      cat.products.map(p => ({
        ...p,
        categoryId: cat.id,
        categoryName: cat.name
      }))
    );
  }, []);

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    let list = allProducts;

    if (activeCategory !== 'all') {
      list = list.filter(p => p.categoryId === activeCategory);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.composition && p.composition.toLowerCase().includes(q)) ||
        (p.pack && p.pack.toLowerCase().includes(q))
      );
    }

    return list;
  }, [allProducts, activeCategory, searchTerm]);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 pb-16">
      
      {/* 1. Header Hero Banner */}
      <section className="bg-gradient-to-r from-[#071F38] via-[#0C1B2A] to-[#071F38] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#00AEEF]/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulation Catalogue Index</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Commercial Formulations Portfolio
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Browse our complete WHO-GMP certified catalogue of {allProducts.length} commercial products indexed directly from CATLOP.pdf.
          </p>

          {/* Search bar inside header */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by brand name (e.g. AEROMARK, CLAVAERO) or active salt..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange({ target: { value: '' } })}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          <button
            type="button"
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-[#00AEEF] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Categories ({allProducts.length})
          </button>

          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#00AEEF] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name} ({cat.products.length})
            </button>
          ))}
        </div>

        {/* Results Info Bar */}
        <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <div>
            Showing <span className="font-bold text-[#071F38]">{filteredProducts.length}</span> formulations
            {searchTerm && <span> matching "<span className="text-[#00AEEF] font-semibold">{searchTerm}</span>"</span>}
          </div>
          {(searchTerm || activeCategory !== 'all') && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
                setSearchParams({});
              }}
              className="text-[#00AEEF] hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* 3. Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 mt-6 p-8">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No Formulations Found</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm mx-auto">
              We couldn't find any formulations matching your search. Try searching by generic active ingredient or select another category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
                setSearchParams({});
              }}
              className="mt-4 px-4 py-2 bg-[#00AEEF] text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredProducts.map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#00AEEF] shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-5 group"
              >
                <div>
                  {/* Category & Page Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded-full">
                      {p.categoryName}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Page {p.page} (CATLOP.pdf)
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-base font-extrabold text-[#071F38] group-hover:text-[#00AEEF] transition-colors leading-snug">
                    {p.name}
                  </h3>

                  {/* Active Composition */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {p.composition}
                  </p>
                </div>

                {/* Card Footer: Pack size & CTA */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                    Pack: {p.pack || 'Standard Pack'}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(p)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-[#00AEEF] hover:bg-slate-100 text-xs font-semibold"
                      title="View Details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <Link
                      to={`/quote?product=${encodeURIComponent(p.name)}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-xs hover:shadow transition-all"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* 4. Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-full">
                {selectedProduct.categoryName}
              </span>
              <span className="text-xs text-slate-400">
                Official Monograph Page {selectedProduct.page}
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-[#071F38]">
              {selectedProduct.name}
            </h3>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Active Composition & Formulation Details
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {selectedProduct.composition}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span>Packaging Specification:</span>
              <span className="font-bold text-[#071F38]">{selectedProduct.pack}</span>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <Link
                to={`/quote?product=${encodeURIComponent(selectedProduct.name)}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

