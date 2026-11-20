import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Building2,
  FileBadge,
  ChevronDown,
  FileText,
  MapPin,
  Clock,
  Stamp
} from 'lucide-react';
import PartnershipBannerSection from '../components/PartnershipBannerSection';

export default function CertificatesPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? -1 : idx);
  };

  const compliancePillars = [
    {
      id: '01',
      title: 'Statutory Trademark Registration',
      authority: 'Trade Marks Registry, Government of India, Mumbai',
      regNo: 'Trade Mark No. 4665534 (Class 5)',
      desc: 'Officially registered trademark in Class 5 (Medical and Pharmaceutical Preparations) under the Trade Marks Act, 1999 (Certificate No. 3333225), providing exclusive statutory brand protection and commercial distribution rights.',
      points: [
        'Proprietor: Ruparam Raika, Trading as: Aerolife Pharma',
        'Registered Address: Vasai East, Thane, Maharashtra - 401208',
        'Statutory Protection: Class 5 (Medicinal & Pharmaceutical Preparations)'
      ]
    },
    {
      id: '02',
      title: 'Schedule M Partner Manufacturing Adherence',
      authority: 'State Licensing Authority & CDSCO Standards',
      regNo: 'Revised Schedule M Cleanroom Compliance',
      desc: 'Formulations in the Aerolife Pharma portfolio are produced in certified partner manufacturing cleanrooms adhering strictly to Revised Schedule M of the Drugs and Cosmetics Act.',
      points: [
        'Class 100,000 / Class 10,000 cleanroom HVAC air handling',
        'Automated blister packing, liquid bottle filling & sealing lines',
        'Validated purified water & environmental monitoring systems'
      ]
    },
    {
      id: '03',
      title: 'Batch Certificate of Analysis (COA) Protocol',
      authority: 'Quality Assurance Testing Laboratory',
      regNo: 'Pharmacopoeial Batch Release Protocol',
      desc: 'Every commercial consignment dispatched by Aerolife Pharma is supported by an authentic Certificate of Analysis (COA) verifying active chemical assay, dissolution rates, and microbiological limits.',
      points: [
        'Active ingredient assay quantification by chromatographic testing',
        'Uniformity of dosage units, friability & disintegration kinetics',
        'Individual batch COA document dispatched with commercial orders'
      ]
    },
    {
      id: '04',
      title: 'Monograph & Packaging Integrity Governance',
      authority: 'Indian Pharmacopoeia (IP) / BP / USP',
      regNo: 'Tropical Zone IVb Packaging Compliance',
      desc: 'Formulation monographs conform to current pharmacopoeial standards with moisture-barrier Alu-Alu blisters, induction-sealed bottles, and tamper-evident packaging.',
      points: [
        'Cold-form Alu-Alu & PVDC barrier blister packaging',
        'Light-resistant amber PET bottles for oral liquids & dry syrups',
        'Clear statutory batch coding, MRP, manufacturing & expiry dates'
      ]
    }
  ];

  const faqs = [
    {
      q: 'What is the official statutory registration of Aerolife Pharma?',
      a: 'Aerolife Pharma is a legally registered proprietary enterprise of Ruparam Raika, officially registered with the Trade Marks Registry, Government of India, Mumbai under Trade Mark No. 4665534, Class 5 (Certificate No. 3333225) pursuant to Section 23(2), Rule 56(1) of the Trade Marks Act, 1999.'
    },
    {
      q: 'Can hospital buyers and PCD partners obtain batch Certificates of Analysis (COAs)?',
      a: 'Yes. An authenticated batch Certificate of Analysis (COA) is generated and dispatched with each commercial formulation batch, documenting the analytical monograph tests, active pharmaceutical ingredient assay percentages, and microbiological clearance.'
    },
    {
      q: 'What manufacturing standards govern Aerolife Pharma products?',
      a: 'All formulations listed in our commercial catalogue are produced in approved partner manufacturing facilities adhering to Revised Schedule M of the Drugs and Cosmetics Act and international Good Manufacturing Practices (GMP) benchmarks.'
    },
    {
      q: 'How can institutional procurement departments request technical product dossiers?',
      a: 'Tender authorities, hospital purchasing boards, and corporate distribution networks can request complete regulatory dossiers, stability data summaries, and statutory credentials by submitting an inquiry via our Request Quotation portal or contacting our commercial desk at +91 70451 47453.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 select-none">
      
      {/* 
        ========================================================================
        1. UNIFIED CLEAN HERO SECTION: STATUTORY CREDENTIALS & REGULATORY STANDARDS
        Increased Height (Deep Blue Visual Presence) & Dedicated WhatsApp Action
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-24 pb-36 sm:pt-32 sm:pb-48 lg:pt-40 lg:pb-56 min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] overflow-hidden flex flex-col justify-center">
        {/* Subtle technical background grid */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Top seam line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF] z-20" />

        {/* Giant Watermark Typography Centered */}
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.04] select-none pointer-events-none uppercase tracking-tighter leading-none z-10"
          aria-hidden="true"
        >
          CREDENTIALS
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
          
          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6 sm:mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#00AEEF]">Statutory Credentials & Compliance</span>
          </nav>

          {/* Centered Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
            <span>STATUTORY COMPLIANCE & ACCREDITATIONS</span>
          </div>

          {/* Centered Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5">
            STATUTORY CREDENTIALS & <br />
            <span className="text-[#00AEEF]">REGULATORY STANDARDS.</span>
          </h1>

          {/* Centered Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Verified corporate credentials, statutory Government of India trademark registrations, Schedule M partner manufacturing compliance, and transparent batch release governance.
          </p>

          {/* Quick Highlight Badges Centered */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-white/15 text-xs font-semibold text-slate-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
              <span>Trade Mark No. <strong className="text-white">4665534</strong> (Class <strong className="text-[#00AEEF]">5</strong>)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Certificate No. <strong className="text-white">3333225</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <span>Batch COA Protocol</span>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98"
            >
              <span>REQUEST QUOTATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs transition-all duration-200 active:scale-98"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. EXCLUSIVE STATUTORY TRADEMARK CERTIFICATE SHOWCASE
        Verified from aerolife pharma TM REG.pdf (Government of India)
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-30 mb-16 sm:mb-24">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Certificate Visual Document Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-sky-50/50 rounded-2xl border-2 border-slate-200 p-6 sm:p-7 relative shadow-inner">
            
            {/* Government Trademark Header Stamp */}
            <div className="text-center pb-5 border-b border-slate-200">
              <div className="w-14 h-14 rounded-full bg-[#102D4B] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <Stamp className="w-7 h-7 text-[#00AEEF]" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#102D4B] block">
                GOVERNMENT OF INDIA
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                TRADE MARKS REGISTRY • MUMBAI
              </span>
              <div className="mt-2 inline-block px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                REGISTERED TRADEMARK
              </div>
            </div>

            {/* Document Content Monograph */}
            <div className="py-5 space-y-3 text-xs border-b border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Trade Mark No.:</span>
                <span className="font-extrabold text-[#102D4B]">4665534</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Certificate No.:</span>
                <span className="font-extrabold text-[#102D4B]">3333225</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Class:</span>
                <span className="font-extrabold text-[#00AEEF]">Class 5 (Medical Preparations)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Registration Date:</span>
                <span className="font-bold text-slate-800">21-09-2020</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Certificate Sealed Date:</span>
                <span className="font-bold text-slate-800">04-12-2023</span>
              </div>
            </div>

            {/* Proprietor & Address Footnote */}
            <div className="pt-4 text-[11px] text-slate-600 leading-relaxed">
              <strong className="text-[#102D4B] block mb-0.5">Registered Proprietor:</strong>
              <span>Ruparam Raika, Trading as: Aerolife Pharma</span>
              <span className="block text-slate-500 mt-1">Ground Floor, Shop No. 08, Laxmi Appartment-5482/8, Parmatma Nagar, Walvi, Vasai East, Thane, Maharashtra - 401208</span>
            </div>

          </div>

          {/* Legal Analysis & Commercial Assurance (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                STATUTORY BRAND CREDENTIAL
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight leading-tight mb-4">
              Protected Brand Authority Under The Trade Marks Act, 1999
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Aerolife Pharma operates as a fully registered pharmaceutical brand under Certificate No. 3333225 issued by the Registrar of Trade Marks, Government of India. This legal registration confers exclusive commercial marketing and proprietary distribution rights for pharmaceutical and medicinal preparations across India.
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong>Form RG-2 Statutory Compliance:</strong> Duly registered under Section 23(2), Rule 56(1) of the Trade Marks Act, 1999.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong>Monopoly PCD Franchise Assurance:</strong> Gives business partners legal security that Aerolife Pharma brand name and formulations are protected against unauthorized counterfeits.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong>Institutional Procurement Clearance:</strong> Fulfills mandatory statutory registration prerequisites for government tenders, hospital formularies, and institutional purchasing.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md transition-colors"
              >
                <span>Request Trademark & Dossier Copy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/quality"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-[#102D4B] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span>View Quality Approach</span>
                <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* 
        ========================================================================
        3. 4 COMPLIANCE & QUALITY GOVERNANCE PILLARS
        ========================================================================
      */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
            <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
              Regulatory Framework
            </span>
            <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4B] tracking-tight">
            Corporate Compliance & Quality Framework
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            A transparent overview of the regulatory guidelines, testing protocols, and documentation governing formulations in the Aerolife Pharma commercial portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compliancePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#00AEEF]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                    {pillar.authority}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#102D4B] text-white text-xs font-black flex items-center justify-center">
                    {pillar.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#102D4B] mb-1">
                  {pillar.title}
                </h3>
                
                <span className="inline-block text-[11px] font-bold text-emerald-600 mb-3">
                  {pillar.regNo}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {pillar.desc}
                </p>

                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {pillar.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Documentation • Aerolife Pharma Governance</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 
        ========================================================================
        4. FREQUENTLY ASKED QUESTIONS (Matching HomePage FaqSection Accordion)
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
              Clear information regarding our statutory trademark registration, partner manufacturing standards, and batch analytical verification.
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
              <h4 className="text-sm font-bold text-[#102D4B]">Need authenticated document copies or regulatory dossier sheets?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Reach out to our corporate regulatory desk directly.</p>
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
        5. PARTNERSHIP CALL-TO-ACTION SECTION WITH WHATSAPP ACTION (Bespoke for Certificates)
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="REGULATORY VERIFICATION"
        title="NEED STATUTORY TRADEMARK & REGULATORY COMPLIANCE DOSSIERS?"
        description="Access verified Government of India Class 5 trademark records, Schedule M partner audit certificates, and tender supply documentation."
        primaryText="REQUEST COMPLIANCE DOSSIER"
        primaryLink="/contact"
        secondaryText="EXPLORE FORMULATIONS"
        secondaryLink="/products"
        whatsappMessage="Hi Aerolife Pharma, I would like to request statutory trademark and quality compliance dossiers."
      />

    </div>
  );
}
