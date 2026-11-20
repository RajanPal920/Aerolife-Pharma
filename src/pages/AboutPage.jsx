import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Building,
  Target,
  Eye,
  HeartHandshake,
  Microscope,
  ArrowRight,
  ChevronRight,
  Sparkles,
  FileText,
  BadgeCheck,
  TrendingUp,
  Clock,
  Layers,
  Pill,
  FlaskConical,
  PhoneCall,
  Lock,
  Compass
} from 'lucide-react';
import PartnershipBannerSection from '../components/PartnershipBannerSection';

export default function AboutPage() {
  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Aerolife%20Pharma,%20I%20would%20like%20to%20know%20more%20about%20your%20company%20and%20PCD%20franchise%20partnership.`;

  return (
    <div className="min-h-screen w-full bg-white font-sans text-slate-800 select-none overflow-x-hidden">
      
      {/* 
        ========================================================================
        1. ABOUT HERO SECTION: UNIFIED CLEAN NAVY CENTER-ALIGNED DESIGN
        Centered layout with zero hero images
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden flex flex-col justify-center">
        {/* Subtle technical background grid */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        
        {/* Giant Watermark Typography Centered */}
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter leading-none"
          aria-hidden="true"
        >
          ABOUT
        </div>

        {/* Top Razor-thin Dual Gradient Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">About Us</span>
          </nav>

          {/* Centered Category Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
            <span>01 / ABOUT • AEROLIFE PHARMA</span>
          </div>

          {/* Centered Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5">
            DRIVEN BY PURPOSE. <br />
            <span className="text-[#00AEEF]">GROUNDED IN CLINICAL INTEGRITY.</span>
          </h1>

          {/* Centered Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            Aerolife Pharma is dedicated to delivering quality pharmaceutical formulations with reliability, responsibility, and an unwavering commitment to the evolving therapeutic needs of modern healthcare across India.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="#who-we-are"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98"
            >
              <span>DISCOVER OUR APPROACH</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs transition-all duration-200 active:scale-98"
            >
              <span>VIEW OUR PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
            </Link>
          </div>

          {/* Centered Key Facts Bar */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-white">84+</span>
              <span className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">Catalog Products</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-[#00AEEF]">Class 5</span>
              <span className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">Registered Mark</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-emerald-400">100%</span>
              <span className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">WHO-GMP Standard</span>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. WHO WE ARE (Inspiration: 3-Image Collage & Corporate Narrative)
        Original Aerolife Pharma Design with Cyan/Navy Harmony
        ========================================================================
      */}
      <section id="who-we-are" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Side: 3-Image Photographic Collage */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
              
              {/* Primary Large Image */}
              <div className="col-span-7 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative group">
                <img
                  src="/assets/about_pharma_formulation.jpg"
                  alt="Aerolife Pharmaceutical Research & Analysis"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4B]/70 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-[#102D4B]/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  Analytical Validation
                </span>
              </div>

              {/* Stacked Images on Right */}
              <div className="col-span-5 flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group flex-1">
                  <img
                    src="/assets/hero_manufacturing_1794824908214.jpg"
                    alt="Precision Pharmaceutical Cleanroom"
                    className="w-full h-full min-h-[150px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold text-white bg-[#00AEEF]/90 px-2 py-0.5 rounded">
                    Cleanroom Lines
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group flex-1">
                  <img
                    src="/assets/hero_manufacturing_slide4.jpg"
                    alt="Automated Blister Packaging Equipment"
                    className="w-full h-full min-h-[150px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold text-white bg-[#102D4B]/90 px-2 py-0.5 rounded">
                    Monograph Packaging
                  </span>
                </div>
              </div>

            </div>

            {/* Right Side: Structured Narrative */}
            <div className="lg:col-span-6">
              
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
                <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                  Who We Are
                </span>
                <span className="w-6 h-[2px] bg-[#ED1C24] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight leading-snug mb-5">
                FOCUSED ON QUALITY. <br />
                <span className="text-[#00AEEF]">BUILT AROUND HEALTHCARE NEEDS.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Aerolife Pharma is dedicated to building a dependable pharmaceutical portfolio grounded in rigorous formulation quality, continuous consistency, and the evolving needs of patients and clinical practitioners.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Our approach brings together a focused product portfolio with verified clinical processes and long-term partnerships across the healthcare ecosystem. Operating with strict compliance under Indian trademark and pharmaceutical standards, we provide monopoly distribution opportunities and reliable medicine access.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#102D4B]/5 text-[#102D4B] border border-[#102D4B]/10">
                  QUALITY FOCUSED
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20">
                  HEALTHCARE DRIVEN
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  RESPONSIBLE APPROACH
                </span>
              </div>

              {/* Link */}
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#102D4B] hover:bg-[#00AEEF] transition-all duration-200 shadow-md group"
              >
                <span>EXPLORE 84+ FORMULATIONS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        3. OUR VISION & OUR MISSION
        Dual High-Contrast Cards (Navy & Clean White) with Numbered Commitments
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                Our Purpose
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
              OUR VISION &amp; OUR MISSION
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Guided by quality, responsibility, and a focused approach to healthcare, we are committed to building dependable pharmaceutical solutions and meaningful long-term partnerships.
            </p>
          </div>

          {/* Side-by-Side Asymmetric Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Our Vision (Deep Navy Theme) */}
            <div className="bg-[#102D4B] rounded-3xl p-7 sm:p-10 text-white shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle glowing orb */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#00AEEF]/20 blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-[#00AEEF] text-white font-extrabold text-sm flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    01
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-white/10 border border-white/15">
                    Our Vision
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 tracking-tight">
                  OUR VISION
                </h3>

                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-4 border-[#00AEEF] pl-4 sm:pl-6 my-4">
                  "To become a trusted and leading pharmaceutical enterprise in India, committed to advancing human health through uncompromising formulation quality, therapeutic innovation, steadfast reliability, and accessible pricing. We aspire to build enduring alliances with healthcare professionals, hospitals, and distributor networks while contributing to a healthier society."
                </blockquote>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-3">
                <Target className="w-5 h-5 text-[#00AEEF]" />
                <span className="text-xs font-semibold text-slate-300">
                  Patient Health • Clinical Standards • Trusted Formulations
                </span>
              </div>
            </div>

            {/* Card 2: Our Mission (Clean White Card with 6 Actionable Commitments) */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 text-slate-800 shadow-xl border border-slate-200/90 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-2xl bg-[#102D4B] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                    02
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#102D4B] bg-slate-100 border border-slate-200">
                    Our Mission
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#102D4B] mb-2 tracking-tight">
                  OUR MISSION
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-6 uppercase tracking-wider">
                  At Aerolife Pharma, our daily mission is to:
                </p>

                {/* 6 Structured Mission Points */}
                <div className="space-y-3.5">
                  {[
                    { num: '01', text: 'Deliver high-quality and reliable pharmaceutical products that meet stringent clinical standards.' },
                    { num: '02', text: 'Make essential healthcare formulations accessible and economically affordable.' },
                    { num: '03', text: 'Continuously focus on quality, stability, and excellence across our 84+ product portfolio.' },
                    { num: '04', text: 'Build strong, transparent relationships with doctors, hospitals, distributors, and PCD partners.' },
                    { num: '05', text: 'Maintain the highest standards of integrity, professional responsibility, and customer satisfaction.' },
                    { num: '06', text: 'Contribute positively to the healthcare industry and community wellbeing across India.' }
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="w-6 h-6 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.num}
                      </span>
                      <span className="text-slate-700 leading-snug font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-bold text-slate-700">
                  Committed to Continuous Quality Evolution
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        4. OUR CORE VALUES
        5 Pillars (Quality, Integrity, Reliability, Responsibility, Improvement)
        Grid layout: 3 on Top, 2 Centered Below
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                Our Core Values
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
              WHAT GUIDES THE WAY WE WORK
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our values shape how we approach products, commercial partnerships, and every responsibility we undertake within the healthcare ecosystem.
            </p>
          </div>

          {/* 5 Cards Arranged: Top 3 Cards, Bottom 2 Cards Centered */}
          <div className="space-y-6">
            
            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 01 Quality */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] font-black text-xs flex items-center justify-center">
                      01
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Standard
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2">
                    QUALITY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Maintaining an uncompromising focus on therapeutic quality, active purity, and strict pharmacopoeial standards across all 84+ formulations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                  <span>WHO-GMP Validated Formulations</span>
                </div>
              </div>

              {/* 02 Integrity */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#102D4B]/10 text-[#102D4B] font-black text-xs flex items-center justify-center">
                      02
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Ethics
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2">
                    INTEGRITY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Building trust through responsible, transparent, and ethical corporate practices across every commercial engagement and distribution agreement.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#102D4B]" />
                  <span>Transparent Corporate Governance</span>
                </div>
              </div>

              {/* 03 Reliability */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#ED1C24]/10 text-[#ED1C24] font-black text-xs flex items-center justify-center">
                      03
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Trust
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2">
                    RELIABILITY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensuring dependable therapeutic availability, consistent supply execution, and steadfast product stability across all seasonal requirements.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#ED1C24]" />
                  <span>On-Time Distribution Logistics</span>
                </div>
              </div>

            </div>

            {/* Bottom Row: 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* 04 Responsibility */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#25D366] font-black text-xs flex items-center justify-center">
                      04
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Care
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2">
                    RESPONSIBILITY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Approaching healthcare with care, scientific discipline, and a deep commitment to patient safety, health improvement, and community wellness.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#25D366]" />
                  <span>Patient-Centric Health Solutions</span>
                </div>
              </div>

              {/* 05 Continuous Improvement */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00AEEF]/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] font-black text-xs flex items-center justify-center">
                      05
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Growth
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2">
                    CONTINUOUS IMPROVEMENT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Constantly refining our processes, updating packaging standards (Alu-Alu, blister, amber bottles), and expanding therapeutic formulation expertise.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#00AEEF]" />
                  <span>Progressive Formulation Portfolio</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        5. OUR APPROACH (Connected 4-Stage Horizontal Process Timeline)
        From Clinical Understanding to Long-term Partnership
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-slate-50/80 border-t border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                How We Work
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
              OUR APPROACH
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              From understanding therapeutic demand to building dependable partnerships, our approach is focused, responsible, and quality-conscious.
            </p>
          </div>

          {/* 4 Connected Process Timeline Nodes */}
          <div className="relative">
            
            {/* Horizontal Connection Line for Desktop */}
            <div 
              className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-[#00AEEF] via-[#102D4B] to-[#ED1C24] -z-0" 
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 rounded-full bg-[#102D4B] text-white border-4 border-white shadow-xl flex items-center justify-center font-black text-lg mb-5 group-hover:bg-[#00AEEF] transition-colors">
                  01
                </div>
                <h3 className="text-base font-bold text-[#102D4B] mb-2 uppercase tracking-wide">
                  UNDERSTAND
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Understanding healthcare practitioner requirements, seasonal ailment patterns, and regional distributor needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 rounded-full bg-[#00AEEF] text-white border-4 border-white shadow-xl flex items-center justify-center font-black text-lg mb-5 group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-base font-bold text-[#102D4B] mb-2 uppercase tracking-wide">
                  FOCUS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Building a focused product and therapeutic portfolio spanning 84+ verified solid and liquid dosage forms.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 rounded-full bg-[#102D4B] text-white border-4 border-white shadow-xl flex items-center justify-center font-black text-lg mb-5 group-hover:bg-[#00AEEF] transition-colors">
                  03
                </div>
                <h3 className="text-base font-bold text-[#102D4B] mb-2 uppercase tracking-wide">
                  DELIVER
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintaining a quality-conscious and responsible manufacturing protocol with batch COA documentation.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 rounded-full bg-[#ED1C24] text-white border-4 border-white shadow-xl flex items-center justify-center font-black text-lg mb-5 group-hover:scale-105 transition-transform">
                  04
                </div>
                <h3 className="text-base font-bold text-[#102D4B] mb-2 uppercase tracking-wide">
                  BUILD TRUST
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Creating dependable long-term relationships through monopoly rights, marketing collateral, and ethical support.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. EXCLUSIVE ADDITIONAL SECTION: VERIFIED STATUTORY TRADEMARK & 
           COMMERCIAL MONOPOLY PCD ADVANTAGE
           (Guarantees distinctiveness so the page NEVER looks like Suyash Pharma)
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#102D4B] to-[#0A1D32] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
            {/* Background circular watermarks */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#00AEEF]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-60 h-60 rounded-full bg-[#ED1C24]/10 blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Authentic Legal & Trademark Monograph */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-4">
                  <BadgeCheck className="w-4 h-4 text-[#00AEEF]" />
                  <span>Statutory Intellectual Property &amp; Commercial Assurance</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
                  REGISTERED TRADEMARK NO. 4665534
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Aerolife Pharma is an officially registered trademark under <strong>Class 5 (Medical &amp; Pharmaceutical)</strong>, granted by the <strong>Trade Marks Registry, Government of India</strong> (Certificate No. 3333225, Section 23(2), Rule 56(1)). This statutory registration provides complete legal assurance and brand exclusivity for all commercial partners.
                </p>

                {/* Statutory Fact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 text-xs">
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Registration Jurisdiction:</span>
                    <span className="text-white font-bold text-xs">Trade Marks Registry, Mumbai (Govt. of India)</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Registration Class:</span>
                    <span className="text-white font-bold text-xs">Class 5 (Pharmaceutical &amp; Medical Preparations)</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Commercial Packaging:</span>
                    <span className="text-white font-bold text-xs">Alu-Alu, Blister, Amber PET Bottles, Lami Tubes</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Batch Validation:</span>
                    <span className="text-white font-bold text-xs">Certificate of Analysis (COA) Dispatched with Every Batch</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/certificates"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-[#102D4B] bg-white hover:bg-slate-100 transition-colors shadow-md"
                  >
                    <span>VIEW REGISTRATION CERTIFICATE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00AEEF]" />
                  </Link>

                  <a
                    href="tel:7045147453"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00AEEF] hover:underline"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Commercial Desk: +91 70451 47453</span>
                  </a>
                </div>
              </div>

              {/* Right Column: PCD Marketing Support Grid */}
              <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-7">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00AEEF]" />
                  <span>Monopoly PCD Franchise Support</span>
                </h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  We empower our business partners with complete marketing inputs, exclusive district distribution rights, and prompt logistics across India.
                </p>

                <div className="space-y-3">
                  {[
                    { title: 'District-Wise Monopoly Rights', desc: 'Secure exclusive marketing rights for your target territory.' },
                    { title: 'Comprehensive Marketing Collateral', desc: 'Visual aids, MR working bags, reminder cards & product glossy catalogs.' },
                    { title: '84+ Diversified Formulations', desc: 'Tablets, softgels, dry syrups, ointments, pediatric suspensions & ORS.' },
                    { title: 'Rapid Dispatch & Inventory Stability', desc: 'Consistent batch supply with zero seasonal stockouts.' }
                  ].map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                        <p className="text-[11px] text-slate-300 leading-snug">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        7. COMMERCIAL PARTNERSHIP CTA WITH WHATSAPP ACTION (Bespoke for About Page)
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="COLLABORATE WITH AEROLIFE"
        title="JOIN HANDS WITH A DEPENDABLE PHARMACEUTICAL PARTNER."
        description="Learn more about our ethical PCD distribution, regulatory compliance, and pan-India reach across hospital and retail healthcare networks."
        primaryText="REQUEST PCD PROPOSAL"
        primaryLink="/contact"
        secondaryText="EXPLORE FORMULATIONS"
        secondaryLink="/products"
        whatsappMessage="Hi Aerolife Pharma, I would like to inquire about PCD franchise collaboration and distribution terms."
      />

    </div>
  );
}
