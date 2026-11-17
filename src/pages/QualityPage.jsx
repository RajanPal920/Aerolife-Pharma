import React from 'react';
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
  Sparkles
} from 'lucide-react';

export default function QualityPage() {
  const qualityStages = [
    {
      title: 'Raw Material & API Testing',
      desc: 'Every active pharmaceutical ingredient (API) and excipient undergoes comprehensive chemical, physical, and microbiological identification prior to dispensary approval.',
      points: ['Chromatographic purity testing', 'Heavy metal limits & assay', 'Microbiological bioburden profiling']
    },
    {
      title: 'In-Process Quality Control (IPQC)',
      desc: 'Real-time parameters monitored continuously on automated tablet presses, capsule fillers, and liquid processing tanks to prevent deviations.',
      points: ['Tablet weight variation & hardness', 'Disintegration & dissolution rates', 'Liquid fill volume & pH stability']
    },
    {
      title: 'Finished Product Assurance',
      desc: 'Independent analytical certification before batch release into commercial distribution channels, ensuring compliance with IP/BP/USP standards.',
      points: ['Assay validation by HPLC', 'Seal integrity & leak test verification', 'Certificate of Analysis (COA) generation']
    },
    {
      title: 'ICH Stability Testing',
      desc: 'Controlled climate chambers simulating international climatic zones to guarantee shelf-life stability, potency, and packaging integrity.',
      points: ['Real-time stability protocols', 'Accelerated 40°C/75% RH testing', 'Photostability & degradation profiling']
    }
  ];

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

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      
      {/* 1. Quality Header Banner */}
      <section className="bg-gradient-to-r from-[#071F38] via-[#0C1B2A] to-[#071F38] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#00AEEF]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Analytical Rigor & Regulatory Adherence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Quality Assurance & GMP Standards
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At Aero Life Pharma, uncompromising quality is engineered into every formulation from molecular sourcing to final consumer packaging.
          </p>
        </div>
      </section>

      {/* 2. Quality Policy Statement */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
              Corporate Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F38] mt-3">
              Our Zero-Defect Quality Policy
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We pledge to develop and manufacture pharmaceutical formulations that unfailingly fulfill all analytical monographs, statutory drug control provisions, and customer expectations of therapeutic safety, potency, and physical stability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#071F38] mb-1">WHO-GMP & Schedule M</h3>
              <p className="text-xs text-slate-500">Fully validated procedures in air-handling, water systems & automated lines.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-[#ED1C24]/10 text-[#ED1C24] flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#071F38] mb-1">Traceable Documentation</h3>
              <p className="text-xs text-slate-500">Complete batch manufacturing records (BMR) and analytical data archiving.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#071F38] mb-1">Continual Validation</h3>
              <p className="text-xs text-slate-500">Regular calibration, cleaning validation, and external audits ensure compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Stage Quality Framework */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
              Testing Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F38] mt-3">
              Comprehensive Multi-Stage Quality Protocols
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Quality is tested and verified at every phase of the manufacturing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStages.map((stage, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-[#00AEEF] bg-slate-50/50 hover:bg-white shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00AEEF] text-white font-extrabold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#071F38] group-hover:text-[#00AEEF] transition-colors">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {stage.desc}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                  {stage.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Advanced Analytical Instrumentation */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
              Laboratory Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F38] mt-3">
              State-of-the-Art Laboratory Instrumentation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Modern analytical instruments operated by experienced pharmaceutical scientists and chemists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instrumentation.map((inst, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0 mt-0.5">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071F38]">{inst.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{inst.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick links to certificates */}
          <div className="mt-12 text-center">
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md transition-all"
            >
              <span>View Regulatory Accreditations & Licenses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

