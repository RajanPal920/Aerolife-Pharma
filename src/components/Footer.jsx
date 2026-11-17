import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck2,
  Clock
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#071F38] text-slate-300 border-t border-slate-800 relative z-20 font-sans">
      {/* Top Accent Strip with Aero Life Pharma Cyan and Red */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-[#ED1C24]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl shadow-md">
              <img 
                src="/assets/aerolife-logo.svg" 
                alt="Aero Life Pharma" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/aerolife-logo.png';
                }}
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Aero Life Pharma is a progressive pharmaceutical enterprise dedicated to delivering high-efficacy formulations, ethical therapeutics, and WHO-GMP compliant healthcare solutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/20 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>WHO-GMP Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#38bdf8] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                <Award className="w-3.5 h-3.5" />
                <span>ISO 9001:2015</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00AEEF] rounded-full" />
              <span>Quick Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Product Formulations</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Quality & Standards</span>
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Certificates & Accreditations</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Contact & Enquiry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Dosage Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#ED1C24] rounded-full" />
              <span>Formulation Portfolio</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/products?category=tablets" className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group">
                  <span>Tablets (Analgesic & Antibiotic)</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400">31</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=capsules" className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group">
                  <span>Capsules & Antimicrobials</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400">13</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=syrups" className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group">
                  <span>Syrups & Pediatric Suspensions</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400">16</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=dry-syrups" className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group">
                  <span>Dry Syrups (Cephalosporins)</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400">4</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=injectables" className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group">
                  <span>Injectables (Critical Care)</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400">5</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=powders-nutra" className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group">
                  <span>Nutraceuticals & Dietary Powders</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400">10</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Enquire */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00AEEF] rounded-full" />
              <span>Corporate Contact</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                <span>Aero Life Pharma Corporate Headquarters & Distribution Network, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                <a href="mailto:info@aerolifepharma.com" className="hover:text-white transition-colors">
                  info@aerolifepharma.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                <span>+91 (Trade & PCD Franchise Support)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/quote"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Request Quotation / PCD Enquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & TM Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} <span className="text-white font-semibold">AERO LIFE PHARMA</span>. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500 text-center md:text-right">
            Registered Trademark (Govt. of India, Class 5, TM No. 6512683). Compliant with Schedule M & WHO-GMP Guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}

