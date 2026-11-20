import React from 'react';
import { ChevronRight } from 'lucide-react';

const MAIN_PRODUCTS = [
  { name: 'AEROMARK - P', category: 'Tablets', composition: 'Aceclofenac & Paracetamol', pack: '20 x 10 Tabs' },
  { name: 'AEROMOX - 500', category: 'Capsules', composition: 'Amoxycillin Capsules IP', pack: '10 x 10 Caps' },
  { name: 'CLAVAERO - CV 625', category: 'Tablets', composition: 'Amoxycillin & Potassium Clavulanate', pack: '10 x 6 Tabs' },
  { name: 'AERODOM - DSR', category: 'Capsules', composition: 'Rabeprazole & Domperidone SR', pack: '10 x 10 Caps' },
  { name: 'AEROVENT - LS', category: 'Syrup', composition: 'Levosalbutamol, Ambroxol, Guaiphenesin', pack: '100 ml' },
  { name: 'AEROMARK - SP', category: 'Tablets', composition: 'Aceclofenac, PCM & Serratiopeptidase', pack: '10 x 10 Tabs' },
  { name: 'AEROCOF - DX', category: 'Syrup', composition: 'Dextromethorphan HBr & CPM Syrup', pack: '100 ml' },
  { name: 'PANTAERO - DSR', category: 'Capsules', composition: 'Pantoprazole & Domperidone SR', pack: '10 x 10 Caps' },
  { name: 'AERONIM - P', category: 'Tablets', composition: 'Nimesulide & Paracetamol', pack: '20 x 10 Tabs' },
  { name: 'AEROCAL - K2 7', category: 'Tablets', composition: 'Calcium Citrate Malate & Vit K2-7', pack: '1 x 10 Tabs' },
  { name: 'AEROZYME', category: 'Syrup', composition: 'Fungal Diastase & Pepsin Digestive Liquid', pack: '200 ml' },
  { name: 'COLDAERO', category: 'Tablets', composition: 'Paracetamol, Phenylephrine, CPM, Caffeine', pack: '10 x 10 Tabs' },
  { name: 'AEROVIT - TOTAL', category: 'Nutra', composition: 'Multivitamins, Minerals & Antioxidants', pack: '10 x 10 Caps' },
  { name: 'AEROXIME - 200', category: 'Tablets', composition: 'Cefixime Dispersible Tablets IP', pack: '10 x 10 Tabs' },
  { name: 'AEROGEL', category: 'Suspension', composition: 'Magaldrate & Simethicone Antacid Gel', pack: '170 ml' },
  { name: 'GRAVOGESIC - MR', category: 'Tablets', composition: 'Diclofenac, PCM & Chlorzoxazone', pack: '10 x 10 Tabs' },
  { name: 'ITRAAERO - 200', category: 'Capsules', composition: 'Itraconazole Capsules BP', pack: '10 x 1 x 4 Caps' },
  { name: 'AEROFLAM - TH', category: 'Tablets', composition: 'Aceclofenac & Thiocolchicoside', pack: '10 x 10 Tabs' },
  { name: 'IBUTRAP', category: 'Suspension', composition: 'Ibuprofen & Paracetamol Pediatric', pack: '60 ml' },
  { name: 'AERODERM', category: 'Ointment', composition: 'Clobetasol, Neomycin, Miconazole', pack: '15 g Tube' },
  { name: 'AEROX - O', category: 'Tablets', composition: 'Ofloxacin & Ornidazole Tablets', pack: '10 x 10 Tabs' },
  { name: 'KIDAERO - COLD', category: 'Syrup', composition: 'Pediatric Multi-Symptom Cold Formula', pack: '60 ml' },
];

export default function ProductMarquee({ onProductClick }) {
  // Duplicate array for infinite seamless looping
  const marqueeItems = [...MAIN_PRODUCTS, ...MAIN_PRODUCTS];

  const handleClick = (e, item) => {
    e.preventDefault();
    if (onProductClick) {
      onProductClick(item);
    }
  };

  return (
    <div
      className="relative w-full max-w-full bg-red-600 h-[72px] sm:h-[78px] lg:h-[82px] flex items-center overflow-hidden select-none z-20 no-scrollbar m-0 p-0 border-0"
      style={{
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
      }}
      aria-label="Aero Life Pharma Formulations Marquee"
    >
      {/* Scrolling Content Track - Seamless Infinite Loop, Pause on Hover (No corner blur/fade) */}
      <div className="animate-marquee flex items-center gap-3 sm:gap-4 md:gap-5 pl-4 no-scrollbar">
        {marqueeItems.map((prod, idx) => (
          <React.Fragment key={idx}>
            <div
              onClick={(e) => handleClick(e, prod)}
              className="flex-shrink-0 group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.02]"
              role="button"
              tabIndex={0}
              title={`${prod.name} - ${prod.composition}`}
            >
              {/* White accent bullet */}
              <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />

              {/* Product Brand Name in crisp bold white */}
              <span className="text-sm sm:text-[15px] lg:text-[16px] font-extrabold text-white tracking-normal whitespace-nowrap">
                {prod.name}
              </span>

              {/* Dosage Form Badge in crisp white */}
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white bg-white/20 border border-white/30 px-2.5 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                {prod.category}
              </span>

              {/* Active Composition in pure white */}
              <span className="text-xs sm:text-[13px] text-white font-medium truncate max-w-[160px] sm:max-w-[220px] lg:max-w-[280px] hidden sm:inline">
                {prod.composition}
              </span>

              {/* Pack Size in pure white */}
              <span className="text-[11px] sm:text-xs text-white font-medium hidden md:inline">
                ({prod.pack})
              </span>

              {/* Pure White Arrow */}
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-all" />
            </div>

            {/* Pure White separator dot between products */}
            <span className="text-white text-sm font-bold flex-shrink-0" aria-hidden="true">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
