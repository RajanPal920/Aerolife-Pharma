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
        - Layer 0: Background pattern
        - Layer 1 (z-10): Left Navy Panel & Right Image Panel
        - Layer 2 (z-30): Foreground Thin Red & Blue Lines and Razor-thin Diagonal Seam
        - Layer 3 (z-40): Large Text, Bold Headings, Prominent Buttons & Controls
        ========================================================================
      */}
      <div className="relative w-full max-w-full min-h-[580px] sm:min-h-[620px] lg:h-[660px] xl:h-[680px] 2xl:h-[700px] flex flex-col lg:flex-row">
        
        {/* Subtle Technical Grid Background Pattern (Layer 0) */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-grid-pattern z-0" 
          aria-hidden="true" 
        />

        {/* 
          ----------------------------------------------------------------------
          LEFT CONTENT PANEL (Layer 1 - z-20)
          Background: transparent on desktop (section background is #102D4B)
          Ensures NO solid rectangular block covers or misaligns the right image's diagonal cut!
          ----------------------------------------------------------------------
        */}
        <div className="w-full lg:w-[45%] xl:w-[43%] h-full z-20 flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:pl-16 xl:pl-20 relative max-w-full min-w-0 bg-[#102D4B] lg:bg-transparent">
          
          {/* TOP SECTION: Large Brand Label, Big Bold Headline, Clear Paragraph, CTAs & Trust Badges (Layer 3 - z-40) */}
          <div className="relative z-40 pt-1 sm:pt-2 max-w-full min-w-0">
            
            {/* Brand Label with colored accent dash - Enlarged */}
            <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-7 sm:w-9 h-[2.5px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#00AEEF]">
                {activeSlide.label}
              </span>
            </div>

            {/* Large Bold Headline - Enlarged, bold, high-contrast, comfortable leading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] 2xl:text-[58px] font-black tracking-tight leading-[1.14] uppercase text-white mb-4 sm:mb-5">
              {activeSlide.headlinePre}{' '}
              {activeSlide.headlinePost}{' '}
              <span className="text-[#00AEEF] block sm:inline">
                {activeSlide.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Paragraph - Generous comfortable line height & spacing */}
            <p className="text-sm sm:text-base lg:text-[16px] text-slate-200 leading-[1.7] max-w-xl mb-5 sm:mb-6 font-normal">
              {activeSlide.description}
            </p>

            {/* Action CTAs - Directly under text with comfortable spacing */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
              {/* Primary Filled Button */}
              <a
                href={activeSlide.targetPrimary}
                onClick={(e) => handleCtaClick(e, activeSlide.actionPrimary)}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-[0.98] group"
              >
                <span>{activeSlide.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Outlined Ghost Button */}
              <a
                href={activeSlide.targetSecondary}
                onClick={(e) => handleCtaClick(e, activeSlide.actionSecondary)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 hover:border-white/50 transition-all duration-200 active:scale-[0.98] group"
              >
                <span>{activeSlide.ctaSecondary}</span>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
            </div>

            {/* Trust Tags Badges: Inline row with clear readable text */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-4 border-t border-white/15 w-full max-w-xl">
              {activeSlide.trustTags.map((tag, idx) => (
                <div 
                  key={idx} 
                  className="text-xs sm:text-[13px] font-bold tracking-wide uppercase text-slate-200 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </div>
              ))}
            </div>

          </div>

          {/* 
            ====================================================================
            BOTTOM SECTION: Slide Numbers, Progress Bar & Navigation Arrows (Layer 3 - z-40)
            Layout: 01   02   03   04     ━━━━━━━━━     [←] [→]
            Aligned in ONE clean row, completely visible on screen and never hidden behind the image!
            ====================================================================
          */}
          <div className="relative z-40 pt-4 pb-2 mt-auto flex items-center gap-3 sm:gap-4 flex-wrap max-w-md">
            
            {/* Slide Number Indicators: 01  02  03  04 */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {SLIDES_DATA.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`text-base sm:text-lg font-bold tracking-wider transition-all duration-200 focus:outline-none px-1.5 py-0.5 rounded cursor-pointer ${
                      isActive 
                        ? 'text-[#00AEEF] drop-shadow-[0_0_10px_rgba(0,174,239,0.6)]' 
                        : 'text-slate-400 hover:text-white font-semibold'
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
              className="w-16 sm:w-20 md:w-28 lg:w-32 h-[3px] bg-white/20 rounded-full overflow-hidden" 
              aria-hidden="true"
            >
              <div 
                className="h-full bg-[#00AEEF] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Previous & Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/20 bg-white/10 hover:bg-[#00AEEF] hover:border-[#00AEEF] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/20 bg-white/10 hover:bg-[#00AEEF] hover:border-[#00AEEF] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* 
          ----------------------------------------------------------------------
          RIGHT IMAGE PANEL (Layer 1 - z-10)
          - ~58% width on Desktop with Diagonal Angled Cut
          - CLEAN, BRIGHT, NATURAL COLORS: 100% original sharp details
          - object-fit: cover with per-slide object-position calibration
          ----------------------------------------------------------------------
        */}
        <div 
          className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 w-full lg:w-[58%] h-[340px] sm:h-[400px] lg:h-full z-10 overflow-hidden hero-diagonal-clip"
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
        </div>

        {/* 
          ======================================================================
          FOREGROUND SLEEK RED AND BLUE DECORATIVE BORDER ACCENTS (Layer 2 - z-30)
          - RAZOR-THIN (Line jitna patla): 1.5px non-scaling stroke
          - Clearly visible border accents framing the hero section
          - pointer-events: none ensures zero blockage of buttons, text, or links
          - Authentic Aerolife Cyan (#00AEEF) and Red (#ED1C24)
          ======================================================================
        */}
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          
          {/* Top Border Accent Line: Razor-thin 1.5px Cyan to Red line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-[#ED1C24]" />

          {/* Bottom Border Accent Line: Razor-thin 1.5px Red to Cyan line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#ED1C24] via-[#00AEEF] to-[#00AEEF]" />

          {/* Symmetrical Precision Corner Framing Accents - Thin 1.5px */}
          {/* Top-Left: Cyan (#00AEEF) */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 w-6 sm:w-10 h-6 sm:h-10 border-t-[1.5px] border-l-[1.5px] border-[#00AEEF] rounded-tl-sm opacity-80" />

          {/* Bottom-Left: Red (#ED1C24) */}
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 w-6 sm:w-10 h-6 sm:h-10 border-b-[1.5px] border-l-[1.5px] border-[#ED1C24] rounded-bl-sm opacity-80" />

          {/* Top-Right: Red (#ED1C24) */}
          <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-6 sm:w-10 h-6 sm:h-10 border-t-[1.5px] border-r-[1.5px] border-[#ED1C24] rounded-tr-sm opacity-80" />

          {/* Bottom-Right: Cyan (#00AEEF) */}
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 w-6 sm:w-10 h-6 sm:h-10 border-b-[1.5px] border-r-[1.5px] border-[#00AEEF] rounded-br-sm opacity-80" />

          {/* 
            FOREGROUND DIAGONAL BRAND SEPARATOR LINE (Desktop)
            - SLEEK & THIN LIKE A LINE (1.5px non-scaling stroke): Never stretches or becomes thick!
            - No distorted oval circle in the middle.
            - Top Half: Process Cyan (#00AEEF)
            - Bottom Half: Process Red (#ED1C24)
          */}
          <svg 
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" 
            preserveAspectRatio="none" 
            viewBox="0 0 100 100"
          >
            {/* Top Half: Process Cyan (#00AEEF) - 1.5px sleek line */}
            <line 
              x1="50.12" 
              y1="0" 
              x2="46.06" 
              y2="50" 
              stroke="#00AEEF" 
              strokeWidth="1.5" 
              vectorEffect="non-scaling-stroke"
            />
            {/* Bottom Half: Process Red (#ED1C24) - 1.5px sleek line */}
            <line 
              x1="46.06" 
              y1="50" 
              x2="42" 
              y2="100" 
              stroke="#ED1C24" 
              strokeWidth="1.5" 
              vectorEffect="non-scaling-stroke"
            />
          </svg>

        </div>

      </div>
    </section>
  );
}
