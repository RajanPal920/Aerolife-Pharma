import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: 'How can I apply for an exclusive PCD Pharma Franchise with Aerolife Pharma?',
    a: 'You can apply directly through our website by submitting the Request Quotation form or calling our corporate desk at +91 7045147453. We provide exclusive district-wise monopoly marketing rights along with complete promotional support, product glossaries, and visual aids.'
  },
  {
    q: 'What quality certifications and regulatory standards do your manufacturing facilities follow?',
    a: 'All Aerolife Pharma products are manufactured in compliance with international WHO-GMP, ISO 9001:2015, and revised Schedule M guidelines. Our operations feature Class 100,000 cleanrooms, automated blister packaging lines, and rigorous HPLC analytical quality testing.'
  },
  {
    q: 'Can I download the complete commercial product catalogue?',
    a: 'Yes, our complete 84+ monograph product catalogue (CATLOP.pdf) is available for healthcare professionals and franchise partners, detailing active compositions, pack sizes, MRPs, and therapeutic categories across all 7 dosage forms.'
  },
  {
    q: 'What is the standard delivery timeline and dispatch procedure?',
    a: 'Orders are processed directly from our central distribution hub in Vasai East, Palghar (Maharashtra). Standard commercial consignments are packed in protective, tamper-evident corrugated shippers and dispatched within 24 to 48 working hours across India.'
  },
  {
    q: 'Do you offer third-party contract manufacturing and customized packaging?',
    a: 'Yes, we provide end-to-end third-party manufacturing solutions, including formulation batch trials, customized Alu-Alu or Blister pack designing, stability testing, and regulatory dossier preparation for institutional and franchise clients.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
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
            Essential information regarding our commercial formulations, monopoly PCD agreements, and quality testing standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
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
  );
}
