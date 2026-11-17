import React from 'react';
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
  FileBadge
} from 'lucide-react';

export default function CertificatesPage() {
  const certificates = [
    {
      id: 'tm-reg',
      title: 'Trademark Registration Certificate',
      authority: 'Trade Marks Registry, Government of India',
      regNo: 'No. 6512683 (Class 5)',
      issueDate: '08/07/2024',
      badge: 'Statutory Registered Brand',
      desc: 'Official certificate of registration under the Trade Marks Act, 1999, securing brand identity and exclusive manufacturing rights for medicinal and pharmaceutical preparations under Class 5.',
      details: [
        'Proprietor: Aero Life Pharma',
        'Official File Reference: aerolife pharma TM REG.pdf',
        'Category: Medicinal & Pharmaceutical Preparations'
      ]
    },
    {
      id: 'who-gmp',
      title: 'WHO-GMP Compliance Certification',
      authority: 'State Drug Licensing Authority & CDSCO Guidelines',
      regNo: 'cGMP / WHO Guidelines Compliant',
      issueDate: 'Renewed Periodically',
      badge: 'International Standard',
      desc: 'Certification confirming compliance with World Health Organization Good Manufacturing Practices (WHO-GMP) for solid orals, liquid orals, dry syrups, and injectables.',
      details: [
        'Class 100,000 / Class 10,000 Cleanroom Validation',
        'Automated HVAC systems with HEPA air terminal filtration',
        'Validated reverse osmosis & purified water generation systems'
      ]
    },
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Quality Management',
      authority: 'International Organization for Standardization',
      regNo: 'ISO 9001:2015 Certified QMS',
      issueDate: 'Certified Standards',
      badge: 'QMS Accredited',
      desc: 'Systematic Quality Management System covering development, formulation processing, analytical quality control, supply chain integrity, and customer satisfaction.',
      details: [
        'Rigorous risk-based quality management frameworks',
        'Internal audit protocols and continual improvement loop',
        'Zero-deviation batch release governance'
      ]
    },
    {
      id: 'drug-license',
      title: 'State Drug Authority Manufacturing Licenses',
      authority: 'Food & Drug Administration (FDA) / Drug Control Administration',
      regNo: 'Form 25 & Form 28 Drug Licenses',
      issueDate: 'Statutory Operational License',
      badge: 'State Approved',
      desc: 'Statutory drug manufacturing and distribution licenses authorizing commercial formulation of all Schedule H, H1, and G medications across therapeutic categories.',
      details: [
        'Valid for Tablets, Capsules, Syrups, Injections & Ointments',
        'Periodic state regulatory inspections & compliance clearances',
        'Strict adherence to the Drugs and Cosmetics Act, 1940'
      ]
    },
    {
      id: 'glp-cert',
      title: 'GLP (Good Laboratory Practice) Compliance',
      authority: 'Quality Assurance Testing Council',
      regNo: 'GLP Accredited Testing Unit',
      issueDate: 'Current Standard',
      badge: 'Analytical Integrity',
      desc: 'Accreditation confirming testing laboratories adhere to Good Laboratory Practice (GLP) for precision analysis, data integrity, and chromatographic method validation.',
      details: [
        'HPLC & Spectrophotometric assay validation protocols',
        'Microbiological clean air workstations and sterility testing',
        'ICH stability testing chamber monitoring'
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#071F38] via-[#0C1B2A] to-[#071F38] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#00AEEF]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accreditations & Regulatory Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Certificates & Accreditations
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Verified corporate credentials, statutory trademark registrations, and WHO-GMP compliance documentation certifying Aero Life Pharma manufacturing excellence.
          </p>
        </div>
      </section>

      {/* 2. Main Certificates Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Intro Highlight Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center flex-shrink-0">
              <FileBadge className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#071F38]">
                Regulatory Dossiers & Quality Monograph Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                Distribution partners, institutional hospitals, and tender authorities can request authenticated certificate copies and formulation dossiers directly.
              </p>
            </div>
          </div>
          <Link
            to="/quote"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-sm transition-all"
          >
            <span>Request Regulatory Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#00AEEF] shadow-sm hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Authority */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-full">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {cert.regNo}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#071F38] group-hover:text-[#00AEEF] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Issued by: {cert.authority}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.desc}
                </p>

                {/* Specific bullets */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {cert.details.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  Status: <strong className="text-emerald-600 font-semibold">Active & Verified</strong>
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire on Accreditation</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

