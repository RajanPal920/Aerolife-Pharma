import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Microscope,
  CheckCircle2,
  FileCheck,
  FlaskRound as Flask,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Building,
  FileText,
  Clock,
  HelpCircle
} from 'lucide-react';

export default function QualityPage() {
  const [activeSlide, setActiveSlide] = useState(2); // Slide 03 active by default to match screenshot
  const [openFaq, setOpenFaq] = useState(null);

  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Aerolife%20Pharma,%20I%20am%20inquiring%20about%20your%20Quality%20Assurance%20protocols,%20batch%20COA,%20and%20Schedule%20M%20compliance.`;

  // 5 Pillars inspired by Screenshot 1 ("WHY CHOOSE US?")
  const whyChoosePoints = [
    {
      num: '01',
      title: 'QUALITY-FOCUSED APPROACH',
      desc: 'Our approach places quality, consistency and reliability at the centre of every pharmaceutical process, from active raw ingredient selection to final dispensary delivery.'
    },
    {
      num: '02',
      title: 'FOCUSED PRODUCT PORTFOLIO',
      desc: 'A focused portfolio of 84+ pharmaceutical formulations designed around evolving healthcare requirements, high clinical efficacy, and practical patient needs.'
    },
    {
      num: '03',
      title: 'RESPONSIBLE PHARMACEUTICAL PRACTICES',
      desc: 'We follow a responsible, quality-conscious approach across all manufacturing operations, with strict attention to batch consistency, safety and regulatory standards.'
    },
    {
      num: '04',
      title: 'HEALTHCARE-CENTRIC THINKING',
      desc: 'Our products and processes are guided by a clear understanding of therapeutic needs and the vital importance of dependable, bioequivalent pharmaceutical solutions.'
    },
    {
      num: '05',
      title: 'LONG-TERM COMMERCIAL PARTNERSHIPS',
      desc: 'We believe in building lasting relationships with doctors, PCD franchise distributors, and hospital buyers through transparent communication and dependable service.'
    }
  ];

  // 3 Therapeutic Focus Cards inspired by Screenshot 2
  const therapeuticFocusCards = [
    {
      id: '01',
      count: '20+ PRODUCTS',
      category: 'ANTI-INFECTIVE FOCUS',
      title: 'BROAD-SPECTRUM ANTIBIOTICS & COMBINATION THERAPY',
      desc: 'A focused portfolio of anti-infective formulations, including cephalosporins, penicillins with beta-lactamase inhibitors (Clavulanate), macrolides, and fluoroquinolones.',
      link: '/products/tablets-capsules'
    },
    {
      id: '02',
      count: '15+ PRODUCTS',
      category: 'GASTROINTESTINAL CARE',
      title: 'GASTROINTESTINAL & DIGESTIVE SUPPORT',
      desc: 'Specialized proton pump inhibitors, prokinetics, and digestive enzyme suspensions engineered for immediate mucosal protection and sustained gastric comfort.',
      link: '/products/capsules-softgels'
    },
    {
      id: '03',
      count: '25+ PRODUCTS',
      category: 'SUPPORTIVE & ADJUNCTIVE CARE',
      title: 'ANALGESIC, ANTI-INFLAMMATORY & COLD CARE',
      desc: 'Potent non-steroidal anti-inflammatory combinations, muscle relaxants, antihistamines, and paediatric drops engineered for rapid systemic bioavailability.',
      link: '/products/oral-liquids-syrups'
    }
  ];

  // 4 Stages of Quality Testing
  const qualityStages = [
    {
      num: '01',
      title: 'Raw Material & API Assay Validation',
      desc: 'Every active pharmaceutical ingredient (API) and excipient undergoes comprehensive chemical, physical, and chromatographic identification prior to dispensary release.',
      points: [
        'Chromatographic purity assay by HPLC',
        'Heavy metals, related substances & residual solvents limits',
        'Microbiological bioburden profiling under cleanroom conditions'
      ]
    },
    {
      num: '02',
      title: 'In-Process Quality Control (IPQC)',
      desc: 'Continuous real-time analytical parameters monitored on automated tablet compression, capsule filling, and aseptic liquid filling tanks.',
      points: [
        'Tablet weight variation, hardness & friability limits',
        'Disintegration & in-vitro dissolution kinetics testing',
        'Liquid syrup fill volume, specific gravity & pH stability'
      ]
    },
    {
      num: '03',
      title: 'Finished Product Assurance & Batch COA',
      desc: 'Independent analytical certification before batch clearance into commercial trade, ensuring 100% compliance with IP, BP, and USP pharmacopoeial monographs.',
      points: [
        'Finished formulation potency assay verification',
        'Seal integrity, pinhole leak test & blister packaging security',
        'Individual Certificate of Analysis (COA) dispatched with every batch'
      ]
    },
    {
      num: '04',
      title: 'ICH Climatic Zone Stability Studies',
      desc: 'Controlled climate test chambers simulating international tropical climatic zones (Zone IVb) to guarantee shelf-life stability, potency, and organoleptic parameters.',
      points: [
        'Real-time ambient stability profiling (30°C / 75% RH)',
        'Accelerated stress stability testing (40°C / 75% RH)',
        'Photostability and packaging degradation resistance'
      ]
    }
  ];

  // Analytical Instrumentation Grid
  const instrumentation = [
    {
      name: 'High Performance Liquid Chromatography (HPLC)',
      use: 'Automated quantitative assay of active ingredients, related substances, and impurity profiling.'
    },
    {
      name: 'UV-Visible Double Beam Spectrophotometer',
      use: 'Precise wavelength absorbance measurements for raw materials and finished drug formulations.'
    },
    {
      name: 'Automated 8-Station Dissolution Tester',
      use: 'Bioavailability and in-vitro dissolution kinetics comparison against innovator standards.'
    },
    {
      name: 'Stability Environmental Test Chambers',
      use: 'Microprocessor controlled temperature and relative humidity testing under ICH Q1A guidelines.'
    },
    {
      name: 'Karl Fischer Moisture Titrator',
      use: 'Accurate sub-ppm moisture content evaluation in dry syrups, tablets, and moisture-sensitive capsules.'
    },
    {
      name: 'Microbiology Clean Air Laminar Workstations',
      use: 'Sterility testing, microbial enumeration, and environmental monitoring under Class 100 conditions.'
    }
  ];

  // Quality FAQs
  const faqs = [
    {
      q: 'Does Aerolife Pharma provide a Certificate of Analysis (COA) with each batch?',
      a: 'Yes. Every commercial batch dispatched by Aerolife Pharma is accompanied by an authenticated Certificate of Analysis (COA) detailing the exact chemical assay, dissolution rates, microbiological limits, and pharmacopoeial compliance (IP/BP/USP).'
    },
    {
      q: 'What manufacturing standards govern Aerolife Pharma formulations?',
      a: 'All formulations listed in our official CATLOP.pdf catalogue are produced in state-of-the-art partner manufacturing cleanrooms adhering strictly to Revised Schedule M of the Drugs and Cosmetics Act, as well as WHO-GMP quality benchmarks.'
    },
    {
      q: 'How does Aerolife Pharma verify packaging integrity against tropical moisture?',
      a: 'We utilize cold-form Alu-Alu blisters, moisture-barrier PVDC coatings, amber USP Type-III glass/PET bottles, and multi-layer induction-sealed lami tubes. In addition, dry syrups are packaged with hermetically sealed sterile water for injection.'
    },
    {
      q: 'What is the statutory trademark registration status of Aerolife Pharma?',
      a: 'Aerolife Pharma is an officially registered trademark (Trade Mark No. 4665534, Class 5: Medical and Pharmaceutical Preparations) under the Trade Marks Registry, Government of India, Mumbai. Headquartered in Vasai East, Thane, Maharashtra.'
    }
  ];

  return (
    <div className="w-full bg-slate-50/50 font-sans text-slate-800 select-none">
      
      {/* 
        ========================================================================
        1. HERO SECTION: BUILDING TRUST THROUGH QUALITY (Matching Screenshot 3 & 5)
        With Angled Border Divider, Lab Scientist Photo, Pill Tags & Slider Nav
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        {/* Giant Watermark Typography */}
        <div 
          className="absolute -top-10 -left-12 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter leading-none"
          aria-hidden="true"
        >
          QUALITY
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6 sm:mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">Quality Assurance & Standards</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Hero Content (Matching Screenshot 3 & 5) */}
            <div className="lg:col-span-7">
              
              {/* Category Tag Line */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                  Quality & Partnership
                </span>
                <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                BUILDING TRUST <br />
                THROUGH <span className="text-[#00AEEF]">QUALITY.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                Focused on quality, consistency, and dependable pharmaceutical partnerships to support healthcare businesses, PCD franchise partners, and institutional customers nationwide.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200"
                >
                  <span>About Aerolife</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
                >
                  <span>Partner With Us</span>
                  <ChevronRight className="w-4 h-4 text-[#00AEEF]" />
                </Link>
              </div>

              {/* 4 Pill Tags in a 2x2 Grid (Exact match to Screenshot 3 & 5) */}
              <div className="grid grid-cols-2 gap-3 max-w-lg mb-8">
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider uppercase">
                    QUALITY COMMITMENT
                  </span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider uppercase">
                    RELIABLE PARTNERSHIP
                  </span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider uppercase">
                    CUSTOMER FOCUSED
                  </span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wider uppercase">
                    TRUST & CONSISTENCY
                  </span>
                </div>
              </div>

              {/* Slider Indicator Navigation (Exact match to Screenshot 5) */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className={`cursor-pointer ${activeSlide === 0 ? 'text-[#00AEEF]' : 'text-slate-400'}`} onClick={() => setActiveSlide(0)}>01</span>
                  <span className={`cursor-pointer ${activeSlide === 1 ? 'text-[#00AEEF]' : 'text-slate-400'}`} onClick={() => setActiveSlide(1)}>02</span>
                  <span className={`cursor-pointer ${activeSlide === 2 ? 'text-[#00AEEF]' : 'text-slate-400'}`} onClick={() => setActiveSlide(2)}>03</span>
                  <span className={`cursor-pointer ${activeSlide === 3 ? 'text-[#00AEEF]' : 'text-slate-400'}`} onClick={() => setActiveSlide(3)}>04</span>
                </div>

                {/* Progress Line */}
                <div className="w-24 sm:w-32 h-[3px] bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#00AEEF] transition-all duration-300"
                    style={{ width: `${(activeSlide + 1) * 25}%` }}
                  />
                </div>

                {/* Left/Right Arrow Controls */}
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 3))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev < 3 ? prev + 1 : 0))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Laboratory Visual with Angled Cut Border (Screenshot 3 & 5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group">
                
                {/* Laboratory Image */}
                <img
                  src="/assets/hero_quality_1794824912430.jpg"
                  alt="Aerolife Quality Control Scientist with HPLC Instrumentation"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Angled Red/Cyan Edge Accents (Matching Screenshot 3) */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00AEEF] via-[#ED1C24] to-[#00AEEF]" />

                {/* Floating "GENUINE PACKS" Overlay Card (Matching Screenshot 4) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                    <span className="text-[11px] font-extrabold text-[#102D4B] uppercase tracking-wider">
                      GENUINE PACKS
                    </span>
                    <span className="text-[11px] font-bold text-[#00AEEF]">
                      CATLOP.pdf
                    </span>
                  </div>

                  {/* 2 Sample Pack Cards */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex flex-col items-center text-center">
                      <div className="w-12 h-10 flex items-center justify-center">
                        <img
                          src="/assets/products/aeromark-sp.jpg"
                          alt="Aeromark-SP"
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => { e.currentTarget.src = '/assets/products/clavaero-cv-625.jpg'; }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 mt-1">AEROMARK-SP</span>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex flex-col items-center text-center">
                      <div className="w-12 h-10 flex items-center justify-center">
                        <img
                          src="/assets/products/clavaero-cv-625.jpg"
                          alt="Clavaero-625"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 mt-1">CLAVAERO 625</span>
                    </div>
                  </div>

                  <div className="text-center pt-1 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-600">
                      84+ Verified Commercial Formulations
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. "WHY CHOOSE US?" SPLIT SECTION (Exact Match to Screenshot 1)
        Left Dark Navy Card + Right 5 Numbered Circular Badges
        ========================================================================
      */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Container with Soft Shadow & Rounded Border */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column (5 cols): Deep Navy Card (Screenshot 1) */}
          <div className="lg:col-span-5 bg-[#102D4B] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Radial Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Tag Line */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                  WHY AEROLIFE PHARMA
                </span>
              </div>

              {/* Main Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                WHY <br />
                CHOOSE <br />
                <span className="text-[#00AEEF]">US?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-sm mb-6">
                Focused on quality. Driven by healthcare.
              </p>

              <div className="w-12 h-1 bg-[#00AEEF] rounded-full mb-8" />
            </div>

            {/* Bottom Tagline */}
            <div className="pt-6 border-t border-white/15">
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                QUALITY • RELIABILITY • RESPONSIBILITY
              </span>
            </div>

          </div>

          {/* Right Column (7 cols): 5 Numbered Pillars (Screenshot 1) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 divide-y divide-slate-100 flex flex-col justify-center">
            {whyChoosePoints.map((point) => (
              <div key={point.num} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-5">
                
                {/* Number Badge (Dark Navy with White Text) */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#102D4B] text-white font-black text-sm sm:text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  {point.num}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B] tracking-tight uppercase mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>

      {/* 
        ========================================================================
        3. THERAPEUTIC FOCUS SECTION (Exact Match to Screenshot 2)
        Deep Navy Container + 3 White Cards with Category Numbers & Badges
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#102D4B] text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header (Centered like Screenshot 2) */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                THERAPEUTIC FOCUS
              </span>
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
              FOCUSED SOLUTIONS. <br className="hidden sm:inline" />
              BUILT AROUND HEALTHCARE NEEDS.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A structured portfolio of quality pharmaceutical formulations aligned with core clinical and healthcare priorities.
            </p>
          </div>

          {/* 3 White Cards Grid (Screenshot 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {therapeuticFocusCards.map((card) => (
              <div
                key={card.id}
                className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  {/* Top Row: Number + Product Count + Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-[#102D4B]">{card.id}</span>
                      <span className="text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded-full">
                        {card.count}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#102D4B] tracking-tight leading-snug mb-3 group-hover:text-[#00AEEF] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Link (Screenshot 2) */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 group-hover:text-[#00AEEF] transition-colors"
                  >
                    <span>EXPLORE PRODUCTS</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        4. 4-STAGE ANALYTICAL QUALITY PROTOCOL
        ========================================================================
      */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
              Analytical Rigor
            </span>
            <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
            Comprehensive Multi-Stage Quality Workflow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Quality is engineered, validated, and certified at every milestone of pharmaceutical formulation and commercial batch release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#00AEEF]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                    Stage {stage.num} Protocol
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#102D4B] text-white text-xs font-black flex items-center justify-center">
                    {stage.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#102D4B] mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {stage.desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {stage.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Validated against IP / BP / USP Pharmacopoeial Standards</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 
        ========================================================================
        5. ANALYTICAL INSTRUMENTATION GRID
        ========================================================================
      */}
      <section className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
              Instrumentation & Testing Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4B] mt-3">
              Standard Analytical Equipment & Methodologies
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Assuring precision molecular quantification, physical stability, and batch-to-batch repeatability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instrumentation.map((inst, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-4">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#102D4B] mb-2 leading-snug">
                  {inst.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {inst.use}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. STATUTORY REGULATORY TRANSPARENCY
        Verified from aerolife pharma TM REG.pdf
        ========================================================================
      */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#102D4B] to-[#0A1D31] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Statutory Legal & Regulatory Transparency</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Registered Trademark & Certified Partner Cleanrooms
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Aerolife Pharma is an officially registered pharmaceutical trademark (<strong className="text-white">Trade Mark No. 4665534</strong>, Class 5: Medical and Pharmaceutical Preparations) under the Trade Marks Registry, Government of India, Mumbai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Trade Mark No.</span>
                <span className="text-base font-extrabold text-[#00AEEF]">4665534 (Class 5)</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Manufacturing Standard</span>
                <span className="text-base font-extrabold text-white">WHO-GMP & Schedule M</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Batch Clearance</span>
                <span className="text-base font-extrabold text-[#ED1C24]">Individual Batch COA</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        7. QUALITY FAQS ACCORDION / GRID
        ========================================================================
      */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                Frequently Asked Questions
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4B]">
              Quality Assurance FAQs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear answers regarding testing monographs, COA releases, and regulatory documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#102D4B] mb-2.5 flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        8. PARTNERSHIP CTA BANNER
        With Official WhatsApp Action
        ========================================================================
      */}
      <section className="py-16 sm:py-20 bg-[#102D4B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                Quality Partnership
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
              DEMAND ZERO-DEFECT PHARMACEUTICAL QUALITY.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect with our quality assurance team to request technical dossiers, formulation stability records, or sample batch COAs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200"
            >
              <span>Request Commercial Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-green-500/20 transition-all duration-200"
              aria-label="WhatsApp Quality Desk"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
              </svg>
              <span>WhatsApp Quality Desk</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
