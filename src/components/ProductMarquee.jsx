import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '../data/productsData';

// Exactly 7 authentic products representing each major verified dosage form from CATLOP.pdf
const MARQUEE_PRODUCT_IDS = [
  'aeromark-sp-tablets',
  'aeromox-500-capsules',
  'aeroliv-syrup',
  'clavaero-cv-dry-syrup',
  'aeromax-oc-cream',
  'aero-protein-powder-vanilla-flavour',
  'moxi-aero-d-eye-drops'
];

export default function ProductMarquee({ onProductClick }) {
  const navigate = useNavigate();

  // Map IDs to verified product objects with their category info
  const genuineProducts = React.useMemo(() => {
    return MARQUEE_PRODUCT_IDS.map((id) => {
      const prod = ALL_PRODUCTS.find((p) => p.id === id);
      if (!prod) return null;
      const cat = CATEGORIES.find((c) => c.id === prod.category) || CATEGORIES[0];
      return {
        ...prod,
        categorySlug: cat.slug,
        categoryTitle: cat.title,
      };
    }).filter(Boolean);
  }, []);

  // Duplicate for seamless infinite horizontal scroll
  const marqueeItems = [...genuineProducts, ...genuineProducts];

  const handleClick = (e, item) => {
    e.preventDefault();
    if (onProductClick) {
      onProductClick(item);
    } else {
      navigate(`/products/${item.categorySlug}/${item.slug}`);
    }
  };

  return (
    <div
      className="relative w-full max-w-full bg-[#ED1C24] h-[76px] sm:h-[84px] lg:h-[88px] flex items-center overflow-hidden select-none z-20 no-scrollbar m-0 p-0 border-0 shadow-inner"
      style={{
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
      }}
      aria-label="Aerolife Pharma Flagship Products Marquee"
    >
      {/* Scrolling Content Track - Seamless Infinite Loop, Pause on Hover */}
      <div className="animate-marquee flex items-center gap-3 sm:gap-4 md:gap-5 pl-4 no-scrollbar">
        {marqueeItems.map((prod, idx) => (
          <React.Fragment key={`${prod.id}-${idx}`}>
            <div
              onClick={(e) => handleClick(e, prod)}
              className="flex-shrink-0 group flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.02]"
              role="button"
              tabIndex={0}
              title={`${prod.name} - ${prod.composition}`}
            >
              {/* Product Thumbnail on Pure White Canvas */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-xs border border-white/40 overflow-hidden">
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

              {/* Product Info */}
              <div className="flex flex-col justify-center text-left">
                <div className="flex items-center gap-2">
                  {/* Brand Name */}
                  <span className="text-sm sm:text-[15px] font-extrabold text-white tracking-tight whitespace-nowrap">
                    {prod.name}
                  </span>

                  {/* Dosage Form Badge */}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-white/20 border border-white/30 px-2 py-0.5 rounded-full flex-shrink-0">
                    {prod.dosageForm}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-0.5">
                  {/* Active Composition */}
                  <span className="text-xs text-white/90 font-medium truncate max-w-[150px] sm:max-w-[220px] lg:max-w-[280px]">
                    {prod.composition}
                  </span>

                  {/* Pack Size */}
                  <span className="text-[11px] text-white/80 font-semibold whitespace-nowrap hidden md:inline">
                    • {prod.pack}
                  </span>
                </div>
              </div>

              {/* White Arrow */}
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1" />
            </div>

            {/* Pure White separator dot between products */}
            <span className="text-white/60 text-sm font-bold flex-shrink-0" aria-hidden="true">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
