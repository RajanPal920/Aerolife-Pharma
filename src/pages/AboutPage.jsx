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
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-white font-sans text-slate-800">
      
      {/* 1. Page Header Banner */}
      <section className="bg-gradient-to-r from-[#071F38] via-[#0C1B2A] to-[#071F38] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#00AEEF]/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#ED1C24]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Profile & Legacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About <span className="text-[#00AEEF]">Aero Life Pharma</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Committed to advancing human health through reliable pharmaceutical manufacturing, rigorous therapeutic standards, and accessible healthcare solutions.
          </p>
        </div>
      </section>

      {/* 2. Corporate Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Narrative */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
                Healthcare Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071F38] mt-3 tracking-tight">
                Pioneering Quality Formulations with Uncompromising Integrity
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Aero Life Pharma is a modern pharmaceutical formulation enterprise established with a singular vision: to produce efficacious, safe, and affordable medicines that touch millions of lives across communities.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Our portfolio spans more than 84 carefully formulated therapeutic preparations across all major delivery forms — including oral solid tablets, liquid syrups, beta-lactam and non-beta lactam dry powders, critical care injectables, and dietary supplements.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-black text-[#00AEEF]">84+</span>
                  <p className="text-xs font-semibold text-slate-600 mt-1">Commercial Formulations</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-black text-[#ED1C24]">100%</span>
                  <p className="text-xs font-semibold text-slate-600 mt-1">WHO-GMP & QA Protocols</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="/assets/hero_manufacturing_1794824908214.jpg" 
                  alt="Aero Life Pharma Manufacturing Facility" 
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-slate-200 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#071F38]">Class 100,000 Cleanrooms</h4>
                    <p className="text-[11px] text-slate-500">HVAC with HEPA air filtration</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#00AEEF] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071F38] mb-3">Our Corporate Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To emerge as a trusted global pharmaceutical leader renowned for clinical reliability, consistent drug availability, and technological advancement in life-enhancing therapeutic solutions.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#00AEEF]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Patient-centric healthcare innovation</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#ED1C24] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ED1C24]/10 text-[#ED1C24] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071F38] mb-3">Our Corporate Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To engineer, validate, and manufacture top-tier pharmaceutical medicines adhering to global cGMP parameters, enabling healthcare providers and distribution partners to treat pathologies with absolute clinical confidence.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#ED1C24]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero-defect formulation standards</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Manufacturing & Quality Infrastructure */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
              Infrastructure Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F38] mt-3">
              Modern Facilities Engineered for Regulatory Precision
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Our advanced production infrastructure integrates automated dosage lines, dedicated sampling cubicles, and microbiological testing laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-4">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071F38] mb-2">
                Analytical Testing Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Equipped with High Performance Liquid Chromatography (HPLC), spectrophotometers, and dissolution baths for 100% active compound assay.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071F38] mb-2">
                Automated Packaging
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                High-speed Alu-Alu and blister packaging machines ensuring maximum barrier protection against moisture, light, and ambient contamination.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071F38] mb-2">
                PCD & Contract Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Flexible batch scaling, transparent delivery timelines, and dedicated product support for national distributors and pharmacy chains.
              </p>
            </div>

          </div>

          {/* Quick CTA to Formulations */}
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md transition-all"
            >
              <span>Explore Our 84 Commercial Formulations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

