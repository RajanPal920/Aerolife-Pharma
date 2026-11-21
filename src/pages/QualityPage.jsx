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
  ExternalLink,
  Pill,
  FlaskConical,
  Eye,
  Sparkles,
  Award,
  Clock,
  Box,
  ChevronRight
} from 'lucide-react';
import PartnershipBannerSection from '../components/PartnershipBannerSection';

export default function QualityPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? -1 : idx);
  };

  // 4 Core Formulation Quality Platforms from Official Catalogue
  const deliveryPlatforms = [
    {
      num: '01',
      title: 'Solid Orals & Compressed Tablets',
      formulationType: 'Tablets, Dispersible & Film-Coated',
      desc: 'Formulated for uniform active drug dispersion, predictable disintegration time, and stable in-vitro dissolution kinetics compliant with pharmacopoeial monographs.',
      packaging: 'Cold-form Alu-Alu blister foil & PVDC moisture-barrier blister strips.',
      monographCheck: 'Hardness, friability (<1%), disintegration, and dissolution kinetics.'
    },
    {
      num: '02',
      title: 'Enteric & Modified-Release Capsules',
      formulationType: 'Hard Gelatin & Sustained-Release Pellets',
      desc: 'Engineered with specialized polymer coatings to resist gastric acid degradation and release active compounds predictably in the alkaline intestinal tract.',
      packaging: 'High-barrier tropical Alu-Alu blister packaging with desiccant protection.',
      monographCheck: 'Acid resistance (pH 1.2), buffer stage dissolution (pH 6.8), and fill uniformity.'
    },
    {
      num: '03',
      title: 'Oral Liquids, Syrups & Dry Suspensions',
      formulationType: 'Palatable Syrups & Pediatric Dry Syrups',
      desc: 'Stable liquid formulations featuring homogeneous suspension of active ingredients, accurate specific gravity, pH balance, and pleasant taste masking.',
      packaging: 'Amber USP PET bottles with tamper-evident caps and separate sterile water ampoules.',
      monographCheck: 'Viscosity, pH profiling, microbial limits, and reconstitution ease.'
    },
    {
      num: '04',
      title: 'Topical Dermals & External Formulations',
      formulationType: 'Antifungal Creams, Ointments & Analgesic Gels',
      desc: 'Micro-fine pharmaceutical emulsions engineered for non-greasy dermal absorption, optimal spreadability, and targeted anti-inflammatory or antifungal action.',
      packaging: 'Multi-layer laminated tubes with hermetically sealed orifice membranes.',
      monographCheck: 'Extrudability, spreadability index, microbial bioburden, and phase stability.'
    }
  ];

  // 6 Verified Commercial Formulations showing outer box packaging directly from Catalogue
  const featuredPackagingBoxes = [
    {
      id: 'clavaero-625',
      name: 'CLAVAERO-CV 625 TABLETS',
      generic: 'Amoxycillin 500mg + Potassium Clavulanate 125mg Tablets IP',
      dosage: 'Tablet',
      boxType: 'Duplex Printed Mono-Carton',
      pack: '10 x 6 Alu-Alu Tablets',
      image: '/assets/products/clavaero-cv-625.jpg',
      category: 'Antibiotic Therapy',
      barrier: 'Cold-Form Alu-Alu Moisture Shield'
    },
    {
      id: 'aeromark-sp',
      name: 'AEROMARK-SP TABLETS',
      generic: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
      dosage: 'Tablet',
      boxType: 'Protective Outer Carton',
      pack: '10 x 10 Blister Tablets',
      image: '/assets/products/aeromark-sp.jpg',
      category: 'Analgesic & NSAID',
      barrier: 'Blister Packaging with Tamper Seal'
    },
    {
      id: 'itraero-200',
      name: 'ITRAERO 200 CAPSULES',
      generic: 'Itraconazole Capsules IP 200mg',
      dosage: 'Capsule',
      boxType: 'Hard-Shell Blister Carton',
      pack: '10 x 1 x 4 Capsules',
      image: '/assets/products/itraero-200.jpg',
      category: 'Antifungal Therapy',
      barrier: 'High-Density Blister Pack'
    },
    {
      id: 'aeroliv',
      name: 'AEROLIV SYRUP',
      generic: 'Hepato-Protective & Liver Stimulant Herbal Formulation',
      dosage: 'Liquid',
      boxType: 'Induction-Sealed Amber Bottle Box',
      pack: '200 ml PET Bottle',
      image: '/assets/products/aeroliv-syrup.jpg',
      category: 'Hepatic Support',
      barrier: 'Amber Light-Barrier Bottle'
    },
    {
      id: 'sefaero-200',
      name: 'SEFAERO-200 TABLETS',
      generic: 'Cefixime 200mg Dispersible Tablets IP',
      dosage: 'Tablet',
      boxType: 'UV Gloss Coated Carton',
      pack: '10 x 10 Alu-Alu Strips',
      image: '/assets/products/sefaero-200-tablets.jpg',
      category: 'Broad-Spectrum Cephalosporin',
      barrier: 'Cold-Form Alu-Alu Foil'
    },
    {
      id: 'aerocal-k2-7',
      name: 'AEROCAL - K2 7 TABLETS',
      generic: 'Calcium Citrate Malate + Vitamin K2-7 + Calcitriol Tablets',
      dosage: 'Tablet',
      boxType: 'Protective Pharmaceutical Carton',
      pack: '10 x 1 x 10 Alu-Alu Strips',
      image: '/assets/products/aerocal-k2-7-tablets.jpg',
      category: 'Nutraceutical / Bone Health',
      barrier: 'Hermetic Blister Seal'
    }
  ];

  // 5 Systematic Quality Stages
  const qualityStages = [
    {
      step: '01',
      stage: 'PHASE 01',
      title: 'API Verification & Raw Material Assay',
      desc: 'Active pharmaceutical ingredients and pharmaceutical-grade excipients undergo identity confirmation, chromatographic purity assay, and bioburden checks prior to formulation clearance.'
    },
    {
      step: '02',
      stage: 'PHASE 02',
      title: 'In-Process Quality Controls (IPQC)',
      desc: 'Continuous analytical checks during granulation, compression, capsule filling, and liquid blending—ensuring uniform tablet hardness, disintegration time, fill weight, and dissolution kinetics.'
    },
    {
      step: '03',
      stage: 'PHASE 03',
      title: 'Finished Monograph Validation',
      desc: 'Finished formulation batches are validated against current Indian Pharmacopoeia (IP), BP, and USP monograph specifications for potency, chemical assay, and uniformity of dosage units.'
    },
    {
      step: '04',
      stage: 'PHASE 04',
      title: 'Barrier Packaging & Integrity Sealing',
      desc: 'Formulations are sealed in high-barrier Alu-Alu foil, PVDC blisters, or amber induction-sealed bottles to withstand Zone IVb tropical humidity and protect product shelf-life.'
    },
    {
      step: '05',
      stage: 'PHASE 05',
      title: 'Batch COA Release & Documentation Audit',
      desc: 'Standard Operating Procedure (SOP) sign-off, Batch Manufacturing Record (BMR) review, and authentication of the individual Certificate of Analysis (COA) dispatched with every batch.'
    }
  ];

  // Quality FAQs matching HomePage accordion format
  const faqs = [
    {
      q: 'How does Aerolife Pharma ensure formulation quality and batch consistency?',
      a: 'Aerolife Pharma follows structured formulation governance. Every batch adheres to validated pharmacopoeial monographs (IP/BP/USP), in-process quality parameters (disintegration, hardness, dissolution), and high-barrier tropical packaging formats to deliver dependable, repeatable therapeutic efficacy.'
    },
    {
      q: 'Does an authentic Certificate of Analysis (COA) accompany every batch?',
      a: 'Yes. An authenticated batch Certificate of Analysis (COA) is generated and dispatched with every commercial order, documenting analytical monograph test results, active pharmaceutical ingredient assay percentages, and microbiological compliance.'
    },
    {
      q: 'How are Aerolife Pharma medicines protected against tropical humidity and heat?',
      a: 'Formulations are packaged in accordance with climatic Zone IVb standards. Sensitive antibiotics and proton pump inhibitors use cold-form Alu-Alu blister foils. Oral syrups and suspensions are housed in amber PET bottles with tamper-evident seals, and dry syrups include separate hermetically sealed sterile water for reconstitution.'
    },
    {
      q: 'What is the official statutory registration status of Aerolife Pharma?',
      a: 'Aerolife Pharma is an officially registered pharmaceutical trademark (Trade Mark No. 4665534, Class 5: Medical and Pharmaceutical Preparations, Certificate No. 3333225) registered under the Trade Marks Act, 1999, with the Trade Marks Registry, Government of India, Mumbai.'
    },
    {
      q: 'Where can healthcare professionals view the complete formulation range?',
      a: 'Our complete commercial portfolio of 84+ verified formulations across 7 primary dosage categories is detailed in our official commercial product catalogue, available through our Products portal or upon request from our commercial desk (+91 70451 47453).'
    }
  ];

  const scrollToStandards = (e) => {
    e.preventDefault();
    const el = document.getElementById('quality-standards');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white font-sans text-slate-800 select-none">
      
      {/* 
        ========================================================================
        1. UNIFIED CLEAN HERO SECTION: QUALITY ENGINEERED AT EVERY PHASE
        Centered layout with zero hero images
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden flex flex-col justify-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Top seam line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        {/* Giant Watermark Typography Centered */}
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.035] select-none pointer-events-none uppercase tracking-tighter leading-none"
          aria-hidden="true"
        >
          QUALITY
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF]">Formulation Quality & Monograph Governance</span>
          </nav>

          {/* Centered Category Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
            <span className="text-white">AEROLIFE PHARMA</span>
            <span className="text-slate-400">•</span>
            <span>RIGOROUS FORMULATION GOVERNANCE</span>
          </div>

          {/* Centered Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5">
            QUALITY ENGINEERED <br />
            AT EVERY <br className="hidden sm:inline" />
            <span className="text-[#00AEEF]">PHARMACEUTICAL PHASE.</span>
          </h1>

          {/* Centered Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
            From strict raw material assay testing and bioequivalent in-vitro dissolution kinetics to tropical moisture-barrier blister packaging, our formulation governance is built around clinical efficacy, repeatability, and patient safety across <strong className="text-white">84+ commercial preparations</strong>.
          </p>

          {/* Centered Action Buttons including Green WhatsApp Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="#quality-standards"
              onClick={scrollToStandards}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all duration-200 active:scale-98"
            >
              <span>EXPLORE QUALITY STANDARDS</span>
              <ArrowRight className="w-4 h-4 text-[#102D4B]" />
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-transparent hover:bg-white/10 border border-white/30 backdrop-blur-xs transition-all duration-200"
            >
              <span>VIEW COMMERCIAL PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
            </Link>
          </div>

          {/* Centered Bottom Metrics Bar */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto text-center sm:text-left">
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <CheckCircle2 className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white">
                  Monograph Compliance
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Conforms to current IP, BP & USP analytical monographs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white">
                  Zone IVb Stability Barrier
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Alu-Alu and PVDC foils resistant to tropical humidity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. OUR QUALITY APPROACH: PHARMACOPOEIAL INTEGRITY BUILT INTO THE WAY WE WORK
        Bespoke 2-Column Layout matching Reference Screenshot 9
        ========================================================================
      */}
      <section id="quality-standards" className="py-16 sm:py-24 bg-[#F4F9FD] border-b border-sky-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                OUR QUALITY APPROACH
              </span>
              <span className="w-6 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight leading-snug mb-3">
              QUALITY IS BUILT INTO THE WAY WE WORK.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We believe dependable healthcare outcomes start with structured scientific thinking, disciplined analytical oversight, and an enduring responsibility toward patient wellness across our 84+ verified commercial preparations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (5 cols): Photo with Full Container View (No Overlays, Crisp Analytical Laboratory Quality Image) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/60 shadow-2xl bg-white p-2 group">
                <div className="h-80 sm:h-96 lg:h-[420px] w-full overflow-hidden rounded-2xl relative">
                  <img
                    src="/assets/quality/quality_lab_testing.jpg"
                    alt="Pharmaceutical Quality Control Laboratory and Chromatographic Testing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/quality/quality_cleanroom_packaging.jpg';
                    }}
                  />
                </div>

                {/* Precision Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00AEEF] rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#ED1C24] rounded-bl-2xl pointer-events-none" />
              </div>

              {/* Bottom Context Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm mt-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00AEEF] block mb-1">
                  DISCIPLINED OVERSIGHT & MONOGRAPH VALIDATION
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Careful chromatographic verification of incoming active ingredients (APIs) and disciplined in-vitro dissolution profiling before progressing to commercial formulation phases.
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): 4 Process Cards (2x2 Grid) (Screenshot 9) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 01 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-md">
                      01
                    </span>
                    <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2 uppercase">
                    QUALITY FOCUS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Maintaining a consistent analytical focus on quality across our pharmaceutical approach, adhering strictly to Indian Pharmacopoeia (IP) and British Pharmacopoeia (BP) monographs.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Card 02 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-md">
                      02
                    </span>
                    <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2 uppercase">
                    CONSISTENCY
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Working with disciplined in-process parameters (IPQC) and rigorous attention to consistency during granulation, compression, and capsule filling stages.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Card 03 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-md">
                      03
                    </span>
                    <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2 uppercase">
                    RESPONSIBILITY
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Approaching pharmaceutical responsibilities with clinical care, accountability, and professionalism through high-barrier Zone IVb packaging protection.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Card 04 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-md">
                      04
                    </span>
                    <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors mb-2 uppercase">
                    CONTINUOUS IMPROVEMENT
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuously reviewing and improving our formulation approach as healthcare needs evolve, releasing an authentic Certificate of Analysis (COA) with each batch.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        3. DEDICATED MEDICINE CARTON BOX & PACKAGING SHOWCASE
        Directly fulfills user requirement: "CATLOP.pdf me joh medicine product box ka h usko box dikhao"
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#ED1C24] rounded-full" />
                <span className="text-xs font-bold text-[#ED1C24] tracking-widest uppercase">
                  AUTHENTIC PACKAGING INTEGRITY
                </span>
                <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
                Authentic Medicine Box & Packaging Presentation
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Inspecting genuine outer carton boxes, protective duplex packaging, and tropical moisture-barrier blister foils as documented in our commercial catalogue.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] bg-sky-50 hover:bg-sky-100 transition-colors self-start md:self-auto flex-shrink-0"
            >
              <span>Explore All 84 Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Grid of 6 Genuine Medicine Box Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPackagingBoxes.map((box) => (
              <div
                key={box.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Crisp Medicine Box Visual on Pure White Canvas */}
                <div className="w-full h-56 bg-white p-5 flex items-center justify-center border-b border-slate-100 relative overflow-hidden">
                  <img
                    src={box.image}
                    alt={box.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-md border border-[#00AEEF]/20">
                    {box.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {box.dosage}
                  </span>
                </div>

                {/* Box Specifications & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#102D4B] group-hover:text-[#00AEEF] transition-colors leading-snug mb-1">
                      {box.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {box.generic}
                    </p>

                    <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-medium">Carton Type:</span>
                        <span className="font-bold text-[#102D4B]">{box.boxType}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-medium">Packing Specification:</span>
                        <span className="font-semibold text-slate-800">{box.pack}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-medium">Barrier Security:</span>
                        <span className="font-semibold text-emerald-600">{box.barrier}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">Catalogue Verified</span>
                    <Link
                      to={`/quote?product=${encodeURIComponent(box.name)}`}
                      className="text-xs font-bold text-[#ED1C24] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Inquire Monograph</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        4. OUR QUALITY PROCESS: FROM MATERIAL TO FINISHED PRODUCT
        Timeline Layout with Connected Numbered Nodes (Screenshot 10)
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#102D4B] text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                OUR QUALITY PROCESS
              </span>
              <span className="w-6 h-[2px] bg-[#00AEEF] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
              FROM MATERIAL TO FINISHED PRODUCT.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A structured, systematic flow upholding product requirements, process control, and presentation integrity across each vital phase.
            </p>
          </div>

          {/* Connected Step Progression Bar (Screenshot 10) */}
          <div className="relative mb-8 hidden lg:block">
            {/* Horizontal Line connecting nodes */}
            <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#00AEEF] via-emerald-400 to-[#00AEEF] z-0" />
            
            <div className="grid grid-cols-5 relative z-10 text-center">
              {['01', '02', '03', '04', '05'].map((num) => (
                <div key={num} className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#102D4B] border-2 border-emerald-400 text-emerald-300 font-extrabold text-sm flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    {num}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Stage Cards Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
            {qualityStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-[#0C243C] rounded-2xl p-5 border border-white/10 shadow-lg flex flex-col justify-between hover:border-[#00AEEF]/50 transition-colors group"
              >
                <div>
                  {/* Step circle on mobile */}
                  <div className="lg:hidden w-10 h-10 rounded-full bg-[#102D4B] border-2 border-[#00AEEF] text-white font-extrabold text-xs flex items-center justify-center mb-3">
                    {stage.step}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF] block mb-1">
                    {stage.stage}
                  </span>

                  <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-tight mb-2 group-hover:text-[#00AEEF] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 
            ====================================================================
            5. ADVANCED CLEANROOM PACKAGING & AUTOMATED INSPECTION SHOWPIECE
            Featuring Generated Image 2: /assets/quality/quality_cleanroom_packaging.jpg
            ====================================================================
          */}
          <div className="bg-[#0C243C] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Cleanroom Packaging Line Photo */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/20 relative group">
              <img
                src="/assets/quality/quality_cleanroom_packaging.jpg"
                alt="Automated Pharmaceutical Cleanroom Packaging Inspection"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-103"
                onError={(e) => {
                  e.currentTarget.src = '/assets/hero_healthcare_1794824904141.jpg';
                }}
              />
              <div className="absolute top-4 left-4 bg-[#102D4B]/95 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider border border-white/20">
                AUTOMATED BLISTER CONVEYOR & CARTON INSPECTION
              </div>
            </div>

            {/* Right: Technical Quality Packaging Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <Box className="w-3.5 h-3.5" />
                <span>PACKAGING INTEGRITY & BARRIER PROTECTION</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
                Zero-Defect Packaging & Batch Traceability
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Pharmaceutical potency depends on uninterrupted barrier integrity. Our packaging lines incorporate shadowless visual illumination, vacuum leak detection, and online batch coding to ensure formulations reach distributors and patients in pristine condition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Vacuum Pinhole Leak Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Indelible Inkjet Batch & Expiry Coding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Tamper-Evident Carton Flap Sealing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>Protective Multi-Ply Corrugated Outer Shippers</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. STATUTORY REGULATORY TRANSPARENCY
        Verified from Government of India Trademark Registration
        ========================================================================
      */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
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
                Aerolife Pharma is an officially registered pharmaceutical trademark (<strong className="text-white">Trade Mark No. 4665534</strong>, Class 5: Medical and Pharmaceutical Preparations, Certificate No. 3333225) registered with the Trade Marks Registry, Government of India, Mumbai.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15 text-xs text-slate-300">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Trade Mark No.</span>
                  <span className="text-sm font-extrabold text-[#00AEEF]">4665534 (Class 5)</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Registered Office</span>
                  <span className="text-sm font-semibold text-white">Vasai East, Thane, Maharashtra</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Commercial Portfolio</span>
                  <span className="text-sm font-semibold text-white">84+ Formulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. FREQUENTLY ASKED QUESTIONS (Matching HomePage FaqSection Accordion)
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
              Essential information regarding our commercial formulations, quality governance, and batch analytical release.
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

          {/* Bottom Contact Help Strip */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-[#102D4B]">Need batch Certificates of Analysis or technical product dossiers?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Reach out to our executive support team directly via phone or WhatsApp.</p>
            </div>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] transition-all flex-shrink-0"
            >
              <span>REQUEST DOSSIER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        8. PARTNERSHIP CALL-TO-ACTION SECTION WITH WHATSAPP ACTION (Bespoke for Quality Page)
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="PHARMACOPOEIAL ASSURANCE"
        title="REQUEST BATCH CERTIFICATES OF ANALYSIS & QUALITY DOSSIERS."
        description="Looking for analytical chromatographic reports, stability study summaries, or batch release COA documents for institutional hospital procurement?"
        primaryText="REQUEST QUALITY DOSSIER"
        primaryLink="/quote"
        secondaryText="EXPLORE 84 PRODUCTS"
        secondaryLink="/products"
        whatsappMessage="Hi Aerolife Pharma QA Desk, I would like to request batch COA and pharmacopoeial monograph dossiers."
      />

    </div>
  );
}
