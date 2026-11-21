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
  Clock,
  MessageCircle,
  FileText
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#071F38] text-slate-300 border-t border-slate-800 relative z-20 font-sans">
      {/* Top Accent Strip with Aero Life Pharma Cyan and Red */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-[#ED1C24]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview (Matching Image 4) */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white p-3.5 sm:p-4 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <img 
                src="/assets/aerolife-logo.svg" 
                alt="Aero Life Pharma" 
                className="h-14 sm:h-16 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/aerolife-logo.png';
                }}
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Focused on delivering quality pharmaceutical formulations with reliability, responsible practices, and a commitment to better healthcare across India.
            </p>
            <div className="pt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span>QUALITY</span>
              <span className="text-[#00AEEF]">•</span>
              <span>RELIABILITY</span>
              <span className="text-[#ED1C24]">•</span>
              <span>RESPONSIBILITY</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00AEEF] rounded-full" />
              <span>QUICK LINKS</span>
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
                  <span>Products Portfolio</span>
                </Link>
              </li>
              <li>
                <a href="#therapeutic-focus" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Therapeutic Segments</span>
                </a>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Certificates & TM Reg</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group">
                  <span className="text-[#00AEEF] group-hover:translate-x-1 transition-transform">›</span>
                  <span>Contact</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-700/60 mt-2">
                <a
                  href="/documents/CATLOP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group text-xs text-slate-300"
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#ED1C24]" />
                    <span>Product Catalog</span>
                  </span>
                  <span className="text-[9px] font-bold bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded">PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="/documents/aerolife-pharma-tm-reg.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00AEEF] transition-colors flex items-center justify-between group text-xs text-slate-300"
                >
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#00AEEF]" />
                    <span>Trademark Reg (Class 5)</span>
                  </span>
                  <span className="text-[9px] font-bold bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">Govt</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Focus (Matching Image 4) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#ED1C24] rounded-full" />
              <span>OUR FOCUS</span>
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <Link to="/products/tablets-capsules" className="font-bold text-white hover:text-[#00AEEF] transition-colors block">
                  Broad-Spectrum Antibiotics & Combination Therapy
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF]">
                  CRITICAL CARE & ANTI-INFECTIVES
                </span>
              </div>

              <div>
                <Link to="/products/capsules-softgels" className="font-bold text-white hover:text-[#00AEEF] transition-colors block">
                  Gastrointestinal Support
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#38bdf8]">
                  GASTROENTEROLOGY
                </span>
              </div>

              <div>
                <Link to="/products/nutraceuticals-dry-powders" className="font-bold text-white hover:text-[#00AEEF] transition-colors block">
                  Supportive & Adjunctive Therapy
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF]">
                  NUTRACEUTICAL CARE
                </span>
              </div>

              <div>
                <Link to="/products/oral-liquids-syrups" className="font-bold text-white hover:text-[#00AEEF] transition-colors block">
                  Pediatric & Respiratory Care
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ED1C24]">
                  PULMONOLOGY
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us & WhatsApp Button (Matching Image 4) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00AEEF] rounded-full" />
              <span>CONTACT US</span>
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#00AEEF] mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">PHONE SUPPORT</span>
                  <a href="tel:7045147453" className="text-white hover:text-[#00AEEF] font-bold transition-colors">
                    +91 7045147453
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#00AEEF] mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">EMAIL ENQUIRIES</span>
                  <a href="mailto:aerolife1990@gmail.com" className="text-white hover:text-[#00AEEF] font-medium transition-colors break-all">
                    aerolife1990@gmail.com
                  </a>
                </div>
              </div>

              {/* Address from TM REG & CATLOP */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#00AEEF] mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">CORPORATE ADDRESS</span>
                  <span className="text-slate-300 leading-snug block">
                    Shop No. 8, Laxmi Appt., Near Hanuman Mandir, Waliv, Vasai (E), Palghar - 401 208, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Chat on WhatsApp Button (Image 4 Style) */}
            <div className="pt-2">
              <a
                href="https://wa.me/917045147453?text=Hi%20Aero%20Life%20Pharma,%20I%20am%20interested%20in%20your%20products%20and%20PCD%20franchise."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all active:scale-[0.98] group"
              >
                <svg 
                  className="w-5 h-5 fill-white flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
                </svg>
                <span>CHAT ON WHATSAPP →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & TM Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} <span className="text-white font-semibold">AERO LIFE PHARMA</span>. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 text-center md:text-right">
            Government Registered Trademark (Class 5 Medical & Pharmaceutical, TM No. 4665534). Compliant with Schedule M & WHO-GMP Guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
