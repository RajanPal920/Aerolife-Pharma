import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Package,
  Layers,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function QualityPage() {
  // Accordion state matching HomePage FaqSection
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? -1 : idx);
  };

  // 4 Approach Cards (Screenshot 2)
  const qualityApproachPillars = [
    {
      num: '01',
      title: 'QUALITY FOCUS',
      desc: 'Maintaining a consistent focus on quality across our pharmaceutical approach.'
    },
    {
      num: '02',
      title: 'CONSISTENCY',
      desc: 'Working with disciplined processes and attention to consistency.'
    },
    {
      num: '03',
      title: 'RESPONSIBILITY',
      desc: 'Approaching pharmaceutical responsibilities with care, accountability and professionalism.'
    },
    {
      num: '04',
      title: 'CONTINUOUS IMPROVEMENT',
      desc: 'Continuously reviewing and improving our approach as healthcare needs evolve.'
    }
  ];

  // 5 Process Stages (Screenshot 3)
  const qualityStages = [
    {
      step: '01',
      stage: 'STAGE 01',
      title: 'MATERIAL SELECTION',
      desc: 'Careful attention to incoming materials and product requirements.'
    },
    {
      step: '02',
      stage: 'STAGE 02',
      title: 'PROCESS CONTROL',
      desc: 'Quality-conscious control throughout relevant processing stages.'
    },
    {
      step: '03',
      stage: 'STAGE 03',
      title: 'TESTING & CHECKS',
      desc: 'Appropriate checks and testing based on product and process requirements.'
    },
    {
      step: '04',
      stage: 'STAGE 04',
      title: 'PACKAGING & INSPECTION',
      desc: 'Attention to packaging, presentation and product integrity.'
    },
    {
      step: '05',
      stage: 'STAGE 05',
      title: 'FINAL VERIFICATION',
      desc: 'Final quality-focused review before the product moves forward.'
    }
  ];

  // 3 Portfolio Quality Cards (Screenshot 5)
  const portfolioQualityPoints = [
    {
      num: '01',
      title: 'PRODUCT FOCUS',
      desc: 'Our portfolio is built around focused pharmaceutical solutions and evolving healthcare needs.'
    },
    {
      num: '02',
      title: 'PROCESS DISCIPLINE',
      desc: 'Quality-conscious thinking remains important across the product journey.'
    },
    {
      num: '03',
      title: 'CONTINUOUS IMPROVEMENT',
      desc: 'We continue to refine our approach with attention to consistency, responsibility and long-term trust.'
    }
  ];

  // Quality FAQs matching HomePage accordion format
  const faqs = [
    {
      q: 'How does Aerolife Pharma approach pharmaceutical quality and consistency?',
      a: 'Aerolife Pharma prioritizes quality at every stage of the formulation lifecycle. From careful selection of active pharmaceutical ingredients and excipients to in-process quality oversight, batch consistency, and tamper-evident packaging, our focus is delivering safe, reliable, and clinically dependable healthcare formulations.'
    },
    {
      q: 'Where can I inspect the verified formulations offered by Aerolife Pharma?',
      a: 'Our complete commercial portfolio is documented in our official catalogue (CATLOP.pdf), featuring 84 verified commercial formulations across 7 primary dosage categories: Tablets & Caplets, Capsules & Softgels, Oral Liquids & Syrups, Pediatric Dry Syrups, Creams & Ointments, Nutraceuticals & Dry Powders, and Ophthalmic/Ear Drops.'
    },
    {
      q: 'What is the statutory trademark registration status of Aerolife Pharma?',
      a: 'Aerolife Pharma is an officially registered pharmaceutical trademark (Trade Mark No. 4665534, Class 5: Medical and Pharmaceutical Preparations) registered under the Trade Marks Act, 1999, with the Trade Marks Registry, Government of India, Mumbai. Our registered office is located in Vasai East, Thane, Maharashtra.'
    },
    {
      q: 'How is packaging integrity verified for shelf-life stability?',
      a: 'We pay close attention to packaging presentation and barrier integrity. Formulations are housed in high-integrity packaging formats—including moisture-barrier Alu-Alu strips, PVDC blisters, induction-sealed amber PET bottles, and dry syrup bottles with hermetically sealed sterile water—to ensure physical protection across diverse Indian climatic conditions.'
    },
    {
      q: 'How do healthcare providers and PCD partners connect with Aerolife Pharma?',
      a: 'Doctors, distributors, hospital procurement managers, and prospective franchise partners can submit inquiries directly through our Request Quotation portal, reach out via our official commercial desk (+91 70451 47453), or message our corporate WhatsApp channel for prompt monograph and pricing assistance.'
    }
  ];

  const scrollToApproach = (e) => {
    e.preventDefault();
    const el = document.getElementById('quality-approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800 select-none">
      
      {/* 
        ========================================================================
        1. HERO SECTION: QUALITY AT EVERY STAGE (Exact Match to Screenshot 1)
        Navy Background + Subtle Watermark + QC Scientist Visual + Overlay Badge
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Top seam line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        {/* Giant Watermark Typography (Screenshot 1: "QUALITY") */}
        <div 
          className="absolute -top-12 -left-8 text-[120px] sm:text-[180px] lg:text-[230px] font-black text-white/[0.035] select-none pointer-events-none uppercase tracking-tighter leading-none"
          aria-hidden="true"
        >
          QUALITY
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Hero Content (Screenshot 1) */}
            <div className="lg:col-span-7">
              
              {/* Category Pill Badge: 01 / QUALITY QUALITY ASSURANCE */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#00AEEF] text-xs font-bold tracking-wider uppercase mb-5">
                <span className="text-white">01 / QUALITY</span>
                <span className="w-1 h-1 rounded-full bg-[#00AEEF]" />
                <span>QUALITY ASSURANCE</span>
              </div>

              {/* Headline: QUALITY AT EVERY STAGE. */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-5">
                QUALITY <br />
                AT EVERY <br />
                <span className="text-[#00AEEF]">STAGE.</span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                From product-focused processes to careful quality considerations, our approach is built around consistency, responsibility and dependable pharmaceutical solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#quality-approach"
                  onClick={scrollToApproach}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all duration-200 active:scale-98"
                >
                  <span>EXPLORE OUR QUALITY APPROACH</span>
                  <ArrowRight className="w-4 h-4 text-[#102D4B]" />
                </a>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all duration-200"
                >
                  <span>VIEW OUR PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
                </Link>
              </div>

              {/* Bottom Metrics Bar (Screenshot 1) */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Process Discipline
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Rigorous checks at relevant milestones
                  </p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Product Integrity
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Careful formulation presentation
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Hero Image Card with Overlay Badge (Screenshot 1) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
                
                {/* Laboratory QC Scientist Visual (Cropped from user reference) */}
                <img
                  src="/assets/quality/quality_hero_qc.jpg"
                  alt="Aerolife Pharma Quality Oversight"
                  className="w-full h-80 sm:h-96 lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/hero_quality_1794824912430.jpg';
                  }}
                />

                {/* Overlay Badge at Bottom Right of Photo (Screenshot 1) */}
                <div className="absolute bottom-0 right-0 bg-white/95 backdrop-blur-md rounded-tl-3xl p-4 sm:p-5 shadow-2xl border-t border-l border-slate-200 min-w-[220px] sm:min-w-[260px]">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#102D4B] block mb-1">
                    ASSURANCE & INTEGRITY
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#00AEEF]">
                    Indian Pharmaceutical Quality Focus
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. OUR QUALITY APPROACH SECTION (Exact Match to Screenshot 2)
        Light Background + Left Photo with Badge + Right 2x2 Grid of Cards
        ========================================================================
      */}
      <section id="quality-approach" className="py-16 sm:py-24 bg-[#F4F9FD] border-b border-sky-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header (Screenshot 2) */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                OUR QUALITY APPROACH
              </span>
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight leading-snug mb-3">
              QUALITY IS BUILT <br />
              INTO THE WAY WE WORK.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We believe dependable healthcare outcomes start with structured thinking, disciplined workflow oversight, and an enduring responsibility toward patient wellness.
            </p>
          </div>

          {/* Grid: Left Photo + Right 2x2 Cards (Screenshot 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (5 cols): Microscope / Lab Oversight Image with Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
                <img
                  src="/assets/quality/quality_lab_oversight.jpg"
                  alt="Disciplined Laboratory Oversight at Aerolife Pharma"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/about_pharma_formulation.jpg';
                  }}
                />

                {/* Overlay Card at Bottom (Screenshot 2) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-slate-200">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102D4B] mb-1">
                    DISCIPLINED OVERSIGHT
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    Careful attention to incoming materials and disciplined verification before progressing to subsequent phases.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): 2x2 Grid of 4 Cards (Screenshot 2) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {qualityApproachPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Top line with number and green/cyan line accent */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                      <span className="text-base font-extrabold text-[#102D4B]">
                        {pillar.num}
                      </span>
                      <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-tight text-[#102D4B] mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-50 flex justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        3. OUR QUALITY PROCESS: FROM MATERIAL TO FINISHED PRODUCT (Screenshot 3)
        Deep Navy Background + 5 Connected Process Stage Cards
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#102D4B] text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header (Screenshot 3) */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                OUR QUALITY PROCESS
              </span>
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
              FROM MATERIAL <br />
              TO FINISHED PRODUCT.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A structured, systematic flow upholding product requirements, process control, and presentation integrity across each vital phase.
            </p>
          </div>

          {/* 5 Connected Process Stage Cards with Connecting Line (Screenshot 3) */}
          <div className="relative">
            
            {/* Connecting Horizontal Line (desktop) */}
            <div 
              className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#00AEEF]/40 z-0" 
              aria-hidden="true" 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
              {qualityStages.map((stage) => (
                <div
                  key={stage.step}
                  className="bg-[#0C243C] rounded-2xl p-5 border border-white/10 shadow-lg flex flex-col justify-between hover:border-[#00AEEF]/50 transition-colors"
                >
                  <div>
                    {/* Number Circle Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#102D4B] border-2 border-[#00AEEF] text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-md">
                      {stage.step}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF] block mb-1">
                      {stage.stage}
                    </span>

                    <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-tight mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* 
            ====================================================================
            4. DOCUMENTATION & REVIEWS HIGHLIGHT CARD (Screenshot 4)
            Three Specialists Reviewing SOP Documentation Binders
            ====================================================================
          */}
          <div className="mt-12 sm:mt-16 bg-[#0C243C] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15">
              <img
                src="/assets/quality/quality_doc_review.jpg"
                alt="Disciplined Documentation and SOP Reviews"
                className="w-full h-64 sm:h-72 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/hero_manufacturing_1794824908214.jpg';
                }}
              />
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <FileText className="w-3.5 h-3.5" />
                <span>DOCUMENTATION & REVIEWS</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
                Disciplined Verification at Every Step
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Every batch journey is supported by standard operating procedures, disciplined documentation checks, and clear cross-functional review before formulations reach healthcare providers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Standard Operating Procedures (SOPs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Batch Manufacturing Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Cross-Functional Sign-Offs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Traceable Distribution Records</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        5. QUALITY & PRODUCTS PORTFOLIO (Exact Match to Screenshot 5)
        Cleanroom Packaging Inspection Visual + 3 Stacked Cards + CTA Button
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#F4F9FD] border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header (Screenshot 5) */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                QUALITY & PRODUCTS
              </span>
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight leading-snug mb-3">
              A QUALITY-FOCUSED <br />
              APPROACH TO OUR PORTFOLIO.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Connecting our structured quality methodology to the real formulations delivering clinical value every day across Indian healthcare settings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (6 cols): Cleanroom Packaging Inspection Visual with Inset (Screenshot 5) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-white">
                <img
                  src="/assets/quality/quality_pkg_inspection.jpg"
                  alt="Packaging and Integrity Inspection at Cleanroom Table"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/hero_healthcare_1794824904141.jpg';
                  }}
                />

                {/* Overlay Badge at Top Left (Screenshot 5) */}
                <div className="absolute top-4 left-4 bg-[#102D4B]/95 text-white backdrop-blur-md rounded-xl px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  PACKAGING & INTEGRITY INSPECTION
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): 3 Stacked Cards + CTA Button (Screenshot 5) */}
            <div className="lg:col-span-6 space-y-4">
              {portfolioQualityPoints.map((point) => (
                <div
                  key={point.num}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-base font-extrabold text-[#102D4B] pt-0.5">
                      {point.num}
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-[#102D4B] mb-1">
                        {point.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom CTA Button (Screenshot 5) */}
              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#102D4B] hover:bg-[#0C1B2A] shadow-md transition-all duration-200 group"
                >
                  <span>EXPLORE OUR PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. STATUTORY REGULATORY TRANSPARENCY
        Clear distinction of Registered Trademark (Trade Mark No. 4665534, Class 5)
        No unsupported certification claims
        ========================================================================
      */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#102D4B] to-[#0A1D31] text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-white/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Legal & Trademark Transparency</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Registered Trademark Protection (Class 5)
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Aerolife Pharma is an officially registered pharmaceutical trademark (<strong className="text-white">Trade Mark No. 4665534</strong>, Class 5: Medical and Pharmaceutical Preparations) under the Trade Marks Act, 1999, registered with the Trade Marks Registry, Government of India, Mumbai.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15 text-xs text-slate-300">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Trade Mark No.</span>
                  <span className="text-sm font-extrabold text-[#00AEEF]">4665534 (Class 5)</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Registered Office</span>
                  <span className="text-sm font-semibold text-white">Vasai East, Thane, MH</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Product Portfolio</span>
                  <span className="text-sm font-semibold text-white">84+ Formulations (CATLOP.pdf)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. FREQUENTLY ASKED QUESTIONS (Exact Match to HomePage FaqSection)
        Accordion Design with Question, Rotating Chevron, Answer, and Help Strip
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
              Essential information regarding our commercial formulations, quality approach, and pharmaceutical compliance.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-sky-100/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
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

          {/* Bottom Contact Help Strip (Matching HomePage FaqSection) */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-[#102D4B]">Have more questions or need a custom price quotation?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Reach out to our executive support team directly via phone or WhatsApp.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] transition-all flex-shrink-0"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        8. PARTNERSHIP CALL-TO-ACTION SECTION (Exact Match to Screenshot 6)
        Deep Navy + Concentric Circles Graphic + Dual Buttons
        ========================================================================
      */}
      <section className="py-16 sm:py-20 bg-[#102D4B] text-white relative overflow-hidden">
        {/* Subtle background radar / concentric circles (Screenshot 6) */}
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
                  PARTNER WITH AEROLIFE PHARMA
                </span>
                <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
                LET'S BUILD BETTER HEALTHCARE CONNECTIONS.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have a product enquiry or want to connect with Aerolife Pharma? Our team is ready to hear from you.
              </p>
            </div>

            {/* Action Buttons (Screenshot 6) */}
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
