import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Droplet, 
  HeartHandshake
} from 'lucide-react';

const SLIDES_DATA = [
  {
    id: 1,
    tag: 'PHARMACEUTICAL PRODUCTS',
    categoryName: 'Oral Solid Formulations',
    headline: 'Quality Products. A Healthier Tomorrow.',
    supportingText: 'Explore the Aero Life Pharma portfolio of pharmaceutical formulations, developed to serve diverse healthcare product requirements.',
    ctaPrimary: 'Explore Our Products',
    ctaSecondary: 'Contact Us',
    targetPrimary: '#products',
    targetSecondary: '#contact',
    accentColor: '#00AEEF',
    badgeText: 'Tablets & Capsules',
    products: [
      {
        src: '/assets/slide1-aeromox-capsules.png',
        alt: 'AEROMOX-500 Amoxycillin Capsules packaging and blister pack',
        name: 'AEROMOX - 500',
        type: 'Capsules',
        detail: 'Standardized blister packaging'
      },
      {
        src: '/assets/slide1-aeromark-tablets.png',
        alt: 'AEROMARK-P Pharmaceutical Tablets packaging',
        name: 'AEROMARK - P',
        type: 'Tablets',
        detail: 'Box & Strip presentation'
      }
    ],
    features: [
      'Standardized Solid Dosages',
      'Quality Packaging Integrity',
      'Diverse Therapeutic Scope'
    ]
  },
  {
    id: 2,
    tag: 'PHARMACEUTICAL PRODUCTS',
    categoryName: 'Liquid Preparations',
    headline: 'Thoughtfully Presented Healthcare Solutions.',
    supportingText: 'Discover our range of syrup and suspension formulations across different product categories.',
    ctaPrimary: 'Explore Our Products',
    ctaSecondary: 'Contact Us',
    targetPrimary: '#products',
    targetSecondary: '#contact',
    accentColor: '#00AEEF',
    badgeText: 'Syrups & Suspensions',
    products: [
      {
        src: '/assets/slide2-ibutrap-suspension.png',
        alt: 'IBUTRAP Ibuprofen & Paracetamol Suspension bottle & carton',
        name: 'IBUTRAP Suspension',
        type: 'Oral Suspension',
        detail: '60 ml calibrated pack'
      },
      {
        src: '/assets/slide2-osoaero-suspension.png',
        alt: 'OSOAERO Pharmaceutical Suspension bottle & carton',
        name: 'OSOAERO Suspension',
        type: 'Oral Liquid',
        detail: '100 ml protective carton'
      }
    ],
    features: [
      'Oral Liquid Formulations',
      'Tamper-Evident Closures',
      'Accurate Volumetric Dosing'
    ]
  },
  {
    id: 3,
    tag: 'PHARMACEUTICAL PRODUCTS',
    categoryName: 'Nutritional Care',
    headline: 'Supporting Everyday Health & Wellness.',
    supportingText: 'Explore our range of nutritional and wellness products designed for everyday healthcare needs.',
    ctaPrimary: 'Explore Our Products',
    ctaSecondary: 'Contact Us',
    targetPrimary: '#products',
    targetSecondary: '#contact',
    accentColor: '#00AEEF',
    badgeText: 'Nutraceuticals & Wellness',
    products: [
      {
        src: '/assets/slide3-evaero-softgels.png',
        alt: 'EVAERO-400 Vitamin E Softgel Capsules health supplement pack',
        name: 'EVAERO - 400',
        type: 'Softgel Capsules',
        detail: 'Vitamin E nutritional supplement'
      },
      {
        src: '/assets/slide3-aerovita-z.png',
        alt: 'Aerovita-Z Nutritional supplement packaging',
        name: 'Aerovita-Z',
        type: 'Dietary Supplement',
        detail: 'Everyday wellness formulation'
      }
    ],
    features: [
      'Dietary & Health Supplements',
      'Moisture-Barrier Packaging',
      'Wellness-Focused Formulations'
    ]
  }
];

export default function HeroSlider({ onActionClick }) {
  const [currentSlide, setCurrentSlide] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const s = parseInt(params.get('slide'), 10);
      if (!isNaN(s) && s >= 0 && s < SLIDES_DATA.length) {
        return s;
      }
    } catch {}
    return 0;
  });
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const timerRef = useRef(null);
  const slideCount = SLIDES_DATA.length;

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay timer with 6-second duration (paused on hover or reduced motion)
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused, prefersReducedMotion, currentSlide]);

  const activeSlideData = SLIDES_DATA[currentSlide];

  return (
    <section 
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F8FBFE] to-[#F1F7FC] border-b border-slate-200/70"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Homepage Product Showcase Slider"
      role="region"
    >
      {/* Subtle geometric background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Soft, light cyan radial glow on top right */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#00AEEF]/5 blur-3xl"
          aria-hidden="true" 
        />
        
        {/* Soft, very light red accent glow bottom left */}
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#ED1C24]/3 blur-3xl"
          aria-hidden="true" 
        />

        {/* Subtle geometric lines */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] border-l border-slate-900 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        
        {/* Carousel Viewport */}
        <div className="relative min-h-[540px] sm:min-h-[500px] lg:min-h-[520px] flex items-center">
          
          {SLIDES_DATA.map((slide, index) => {
            const isActive = index === currentSlide;
            
            return (
              <div
                key={slide.id}
                className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ease-out ${
                  isActive 
                    ? 'opacity-100 relative z-10 translate-x-0' 
                    : 'opacity-0 absolute inset-0 z-0 pointer-events-none translate-x-4'
                }`}
                aria-hidden={!isActive}
              >
                {/* LEFT COLUMN: Clean Corporate Copy & CTAs */}
                <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left order-1">
                  
                  {/* Category / Introductory Label */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/20">
                      {slide.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      • {slide.categoryName}
                    </span>
                  </div>

                  {/* Large Professional Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0C1B2A] tracking-tight leading-[1.18] mb-4">
                    {slide.headline}
                  </h1>

                  {/* Short Supporting Paragraph */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-6">
                    {slide.supportingText}
                  </p>

                  {/* Authentic Key Portfolio Attributes (Non-truncated flexible pills) */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
                    {slide.features.map((feature, fIdx) => (
                      <div 
                        key={fIdx} 
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Two CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    {/* Primary CTA: Explore Our Products */}
                    <a
                      href={slide.targetPrimary}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onActionClick) onActionClick('explore-products');
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-[#00AEEF] hover:bg-[#0098D4] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2"
                    >
                      <span>{slide.ctaPrimary}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Secondary CTA: Contact Us */}
                    <a
                      href={slide.targetSecondary}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onActionClick) onActionClick('contact-us');
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-[#0C1B2A] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                      <span>{slide.ctaSecondary}</span>
                    </a>
                  </div>

                  {/* Catalogue Reference Footnote */}
                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                    <span>Aero Life Pharma Official Product Portfolio</span>
                  </div>
                </div>

                {/* RIGHT COLUMN: Asymmetrical Natural Product Arrangement */}
                <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center order-2">
                  <div className="relative w-full max-w-lg lg:max-w-none mx-auto flex items-center justify-center py-4">
                    
                    {/* Clean Frosted Display Pedestal (Very light, subtle background) */}
                    <div 
                      className="absolute inset-0 -m-3 sm:-m-6 bg-gradient-to-tr from-white via-[#F0F8FD]/80 to-white/90 rounded-3xl border border-slate-200/50 shadow-sm"
                      aria-hidden="true"
                    />

                    {/* Subtle decorative geometric circle */}
                    <div 
                      className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-[#00AEEF]/10 bg-radial from-[#00AEEF]/5 to-transparent pointer-events-none"
                      aria-hidden="true" 
                    />

                    {/* Product Composition Container */}
                    <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4">
                      
                      {/* Product Item 1 (Main/Foreground) */}
                      <div className="relative flex flex-col items-center group max-w-[240px] sm:max-w-[270px]">
                        <div className="relative h-56 sm:h-64 md:h-72 w-full flex items-center justify-center p-2">
                          <img
                            src={slide.products[0].src}
                            alt={slide.products[0].alt}
                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_16px_rgba(12,27,42,0.10)] transition-transform duration-300 group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                        {/* Packaging Caption Tag */}
                        <div className="mt-2 text-center bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                          <p className="text-xs font-bold text-[#0C1B2A] tracking-tight">
                            {slide.products[0].name}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {slide.products[0].detail}
                          </p>
                        </div>
                      </div>

                      {/* Product Item 2 (Secondary/Arranged Pack) */}
                      {slide.products[1] && (
                        <div className="relative flex flex-col items-center group max-w-[220px] sm:max-w-[250px] -mt-2 sm:mt-0">
                          <div className="relative h-48 sm:h-56 md:h-64 w-full flex items-center justify-center p-2">
                            <img
                              src={slide.products[1].src}
                              alt={slide.products[1].alt}
                              className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_14px_rgba(12,27,42,0.08)] transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          {/* Packaging Caption Tag */}
                          <div className="mt-2 text-center bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                            <p className="text-xs font-bold text-[#0C1B2A] tracking-tight">
                              {slide.products[1].name}
                            </p>
                            <p className="text-[11px] text-slate-500">
                              {slide.products[1].detail}
                            </p>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Authenticity Badge Tag */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full border border-slate-200 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                      <span className="text-[11px] font-semibold text-slate-700">
                        {slide.badgeText}
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM CONTROLS: Arrows, Dots & Slide Counter */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/60">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Slide Selector">
            {SLIDES_DATA.map((slide, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
                  className={`group relative flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] rounded-full p-1`}
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'w-8 bg-[#00AEEF]' 
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                </button>
              );
            })}
            
            {/* Auto-play pause indicator */}
            <span className="text-xs text-slate-400 ml-2 hidden sm:inline-block">
              {isPaused ? '(Paused)' : '6s auto'}
            </span>
          </div>

          {/* Slide Counter and Arrow Controls */}
          <div className="flex items-center gap-4">
            {/* Slide Number */}
            <div className="text-xs font-semibold text-slate-500 tracking-wider">
              <span className="text-[#0C1B2A] font-bold text-sm">0{currentSlide + 1}</span>
              <span className="mx-1 text-slate-400">/</span>
              <span>0{slideCount}</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#00AEEF] hover:border-[#00AEEF] hover:bg-[#F0F9FF] shadow-2xs transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#00AEEF] hover:border-[#00AEEF] hover:bg-[#F0F9FF] shadow-2xs transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

