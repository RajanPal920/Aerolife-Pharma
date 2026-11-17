import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';

const SLIDES_DATA = [
  {
    id: 1,
    label: 'AEROLIFE PHARMA',
    headlinePre: 'YOUR HEALTH.',
    headlineHighlight: 'COMMITMENT.',
    headlinePost: 'OUR',
    description: 'Committed to delivering quality pharmaceutical formulations and supporting better healthcare through reliable products, certified standards, and trusted partnerships.',
    ctaPrimary: 'Explore Products',
    ctaSecondary: 'Contact Us',
    targetPrimary: '#products',
    targetSecondary: '#contact',
    actionPrimary: 'explore-products',
    actionSecondary: 'contact-us',
    trustTags: [
      'QUALITY FOCUSED',
      'HEALTHCARE COMMITMENT',
      'TRUSTED PARTNERSHIP',
      'GLOBAL STANDARDS'
    ],
    image: '/assets/hero_healthcare_1794824904141.jpg',
    imageAlt: 'Aerolife Pharma healthcare commitment and medical conference collaboration',
    objectPosition: 'center 40%'
  },
  {
    id: 2,
    label: 'OUR PRODUCT PORTFOLIO',
    headlinePre: 'QUALITY FORMULATIONS.',
    headlineHighlight: 'HEALTHCARE.',
    headlinePost: 'BETTER',
    description: 'Explore our diverse pharmaceutical product portfolio, developed to serve varied healthcare and formulation requirements across 84+ verified commercial monographs.',
    ctaPrimary: 'View Products',
    ctaSecondary: 'Get a Quote',
    targetPrimary: '#products',
    targetSecondary: '#enquire',
    actionPrimary: 'explore-products',
    actionSecondary: 'enquire',
    trustTags: [
      'TABLETS & CAPSULES',
      'SYRUPS & SUSPENSIONS',
      'PHARMACEUTICAL RANGE',
      'PRODUCT DIVERSITY'
    ],
    image: '/assets/hero_manufacturing_1794824908214.jpg',
    imageAlt: 'Aerolife Pharma modern formulation manufacturing facility',
    objectPosition: 'center center'
  },
  {
    id: 3,
    label: 'QUALITY & PARTNERSHIP',
    headlinePre: 'BUILDING TRUST',
    headlineHighlight: 'QUALITY.',
    headlinePost: 'THROUGH',
    description: 'Focused on quality, consistency, and dependable pharmaceutical partnerships to support healthcare businesses, PCD franchise partners, and institutional customers.',
    ctaPrimary: 'About Aerolife',
    ctaSecondary: 'Partner With Us',
    targetPrimary: '#about',
    targetSecondary: '#enquire',
    actionPrimary: 'about',
    actionSecondary: 'enquire',
    trustTags: [
      'QUALITY COMMITMENT',
      'RELIABLE PARTNERSHIP',
      'CUSTOMER FOCUSED',
      'TRUST & CONSISTENCY'
    ],
    image: '/assets/hero_quality_1794824912430.jpg',
    imageAlt: 'Aerolife Pharma quality inspection and analytical testing laboratory',
    objectPosition: 'center 35%'
  },
  {
    id: 4,
    label: 'INNOVATION & INTEGRITY',
    headlinePre: 'ADVANCING HEALTHCARE.',
    headlineHighlight: 'EXCELLENCE.',
    headlinePost: 'GLOBAL',
    description: 'Dedicated to expanding healthcare accessibility through modern manufacturing facilities, rigorous quality compliance, and trustworthy pharmaceutical partnerships.',
    ctaPrimary: 'Our Facility',
    ctaSecondary: 'Get a Quote',
    targetPrimary: '#about',
    targetSecondary: '#enquire',
    actionPrimary: 'about',
    actionSecondary: 'enquire',
    trustTags: [
      'MODERN INFRASTRUCTURE',
      'STERILE CLEANROOM',
      'GLOBAL ACCESSIBILITY',
      'REGULATORY INTEGRITY'
    ],
    image: '/assets/hero_manufacturing_slide4.jpg',
    imageAlt: 'Aerolife Pharma advanced automated blister packaging line and high-tech cleanroom facility',
    objectPosition: 'center 45%'
  }
];

const AUTOPLAY_INTERVAL = 6000;

export default function HeroSlider({ onActionClick }) {
  const [currentSlide, setCurrentSlide] = useState(() => {
    try {
      const param = new URLSearchParams(window.location.search).get('slide');
      const idx = parseInt(param, 10);
      return !isNaN(idx) && idx >= 0 && idx < SLIDES_DATA.length ? idx : 0;
    } catch {
      return 0;
    }
  });

  const [isPaused, setIsPaused] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).has('slide');
    } catch {
      return false;
    }
  });
  const [progress, setProgress] = useState(0);
  
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const progressTimerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
    setProgress(0);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay with progress line tracking
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / AUTOPLAY_INTERVAL) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPaused, nextSlide, currentSlide]);

  // Touch / Swipe handlers for mobile devices
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleCtaClick = (e, action) => {
    e.preventDefault();
    if (onActionClick) {
      onActionClick(action);
    }
  };

  const activeSlide = SLIDES_DATA[currentSlide];

  return (
    <section 
      className="relative w-full max-w-full overflow-hidden bg-[#102D4B] select-none text-white m-0 p-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Aerolife Pharma Homepage Hero Slider"
      role="region"
    >
      {/* 
        ========================================================================
        HERO SLIDER CONTAINER
        - Left Content Panel: ~42% width, lighter medium/deep corporate navy (#102D4B)
        - Right Image Panel: ~58% width, clean diagonal cut with brand Cyan/Red seam
        - Calibrated height: fits fully in screen without vertical scrollbar cut-offs
        ========================================================================
      */}
      <div className="relative w-full max-w-full min-h-[560px] sm:min-h-[600px] lg:h-[640px] xl:h-[660px] 2xl:h-[680px] flex flex-col lg:flex-row">
        
        {/* 
          ----------------------------------------------------------------------
          LEFT CONTENT PANEL
          Background: medium/deep professional navy (#102D4B)
          Uses flexbox justify-between to position content comfortably:
          - Top group: Label, Headline, Paragraph, Buttons, Trust Tags
          - Bottom group: 01 02 03 04 ━━━━━━ [←] [→] in one clean row
          ----------------------------------------------------------------------
        */}
        <div className="w-full lg:w-[45%] xl:w-[42%] h-full z-20 flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:pl-16 xl:pl-20 relative max-w-full min-w-0 bg-[#102D4B]">
          
          {/* Subtle Technical Grid Background Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none bg-grid-pattern" 
            aria-hidden="true" 
          />

          {/* TOP SECTION: Brand Label, Headline, Paragraph, CTAs & Trust Badges */}
          <div className="relative z-10 pt-2 sm:pt-3 lg:pt-4 max-w-full min-w-0">
            
            {/* Small Uppercase Brand Label with colored accent dash */}
            <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#00AEEF]">
                {activeSlide.label}
              </span>
            </div>

            {/* Large Bold Headline with Open, Natural Letter Spacing (matching Suyash Pharma) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] font-extrabold tracking-normal leading-[1.18] uppercase text-white mb-3 sm:mb-4">
              {activeSlide.headlinePre}{' '}
              {activeSlide.headlinePost}{' '}
              <span className="text-[#00AEEF] block sm:inline">
                {activeSlide.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Paragraph with comfortable line height */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200/90 leading-[1.65] max-w-lg mb-4 sm:mb-6 font-normal">
              {activeSlide.description}
            </p>

            {/* Two Action CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
              {/* Primary Filled Button */}
              <a
                href={activeSlide.targetPrimary}
                onClick={(e) => handleCtaClick(e, activeSlide.actionPrimary)}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] group"
              >
                <span>{activeSlide.ctaPrimary}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Outlined Ghost Button */}
              <a
                href={activeSlide.targetSecondary}
                onClick={(e) => handleCtaClick(e, activeSlide.actionSecondary)}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-200 active:scale-[0.98]"
              >
                <span>{activeSlide.ctaSecondary}</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            {/* Trust Tags Badges: Inline row matching Suyash Pharma */}
            <div className="flex flex-wrap items-center gap-2 pt-3 sm:pt-4 border-t border-white/10 w-full max-w-lg">
              {activeSlide.trustTags.map((tag, idx) => (
                <div 
                  key={idx} 
                  className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-slate-300 bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 rounded"
                >
                  {tag}
                </div>
              ))}
            </div>

          </div>

          {/* 
            ====================================================================
            BOTTOM SECTION: Slide Numbers, Progress Bar & Navigation Arrows
            Layout: 01   02   03   04     ━━━━━━━━━     [←] [→]
            Aligned in ONE clean horizontal row inside the lower left navy panel.
            Visible on the first screen without scrolling.
            ====================================================================
          */}
          <div className="relative z-30 pt-4 sm:pt-6 pb-2 lg:pb-3 mt-4 lg:mt-6 flex items-center gap-3 sm:gap-5 flex-wrap">
            
            {/* Slide Number Indicators: 01  02  03  04 */}
            <div className="flex items-center gap-2 sm:gap-3">
              {SLIDES_DATA.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`text-sm sm:text-[15px] font-semibold tracking-wider transition-all duration-200 focus:outline-none px-1 py-0.5 rounded ${
                      isActive 
                        ? 'text-[#00AEEF] font-bold drop-shadow-[0_0_8px_rgba(0,174,239,0.5)]' 
                        : 'text-slate-400 hover:text-white font-medium'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <span>{String(idx + 1).padStart(2, '0')}</span>
                  </button>
                );
              })}
            </div>

            {/* Horizontal Progress Line Indicator */}
            <div 
              className="w-14 sm:w-20 md:w-28 lg:w-36 h-[2px] bg-white/20 rounded-full overflow-hidden" 
              aria-hidden="true"
            >
              <div 
                className="h-full bg-[#00AEEF] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Previous & Next Arrow Controls: Compact thin-bordered squares */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-white/20 bg-white/5 hover:bg-[#00AEEF] hover:border-[#00AEEF] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-white/20 bg-white/5 hover:bg-[#00AEEF] hover:border-[#00AEEF] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 
          ----------------------------------------------------------------------
          RIGHT IMAGE PANEL (~58% on Desktop with Diagonal Angled Cut)
          CLEAN, BRIGHT, NATURAL COLORS:
          - NO dark overlay, blue tint, gradient overlay, or opacity reduction.
          - 100% sharp, original brightness and natural details.
          - object-fit: cover with per-slide object-position calibration.
          ----------------------------------------------------------------------
        */}
        <div 
          className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 w-full lg:w-[60%] xl:w-[62%] h-[340px] sm:h-[400px] lg:h-full z-10 overflow-hidden hero-diagonal-clip"
        >
          {/* Slides Images: Clean & Bright, Natural Colors, No Overlays */}
          {SLIDES_DATA.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: slide.objectPosition || 'center center' }}
                />
              </div>
            );
          })}

          {/* 
            Thin Diagonal Brand Separator Line along the angled edge
            Dual Cyan (#00AEEF) on top & Red (#ED1C24) on bottom
          */}
          <svg 
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-30" 
            preserveAspectRatio="none" 
            viewBox="0 0 100 100"
          >
            {/* Top Half: Process Cyan */}
            <line 
              x1="14" 
              y1="0" 
              x2="7" 
              y2="50" 
              stroke="#00AEEF" 
              strokeWidth="1.2" 
            />
            {/* Bottom Half: Process Red */}
            <line 
              x1="7" 
              y1="50" 
              x2="0" 
              y2="100" 
              stroke="#ED1C24" 
              strokeWidth="1.2" 
            />
            {/* Center Junction Accent */}
            <circle cx="7" cy="50" r="1.5" fill="#00AEEF" stroke="#ED1C24" strokeWidth="0.8" />
          </svg>

        </div>

      </div>
    </section>
  );
}
