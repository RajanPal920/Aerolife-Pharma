import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function ContactPage({ isQuoteMode = false }) {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: isQuoteMode ? 'Third Party Manufacturing' : 'PCD Pharma Franchise',
    productOfInterest: prefilledProduct,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        productOfInterest: prefilledProduct,
        message: `I am interested in requesting quotation and dossier details for ${prefilledProduct}.`
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What are your minimum order quantities (MOQs) for Third-Party Manufacturing?',
      a: 'MOQs depend on the dosage category: For Tablets, typical batch sizes start at 50,000 to 100,000 units in Alu-Alu or Blister. For Liquid Syrups, standard batches range from 3,000 to 5,000 bottles. We also accommodate initial trial runs for new partners.'
    },
    {
      q: 'Do you offer district-wise monopoly rights for PCD Pharma Franchise?',
      a: 'Yes, Aero Life Pharma provides exclusive district monopoly distribution rights to qualified pharmaceutical professionals and distributors, backed by complete promotional materials (visual aids, catch covers, sample packs, and M.R. bags).'
    },
    {
      q: 'What is the standard turnaround delivery time for commercial batches?',
      a: 'For repeated orders of existing approved products, lead time is typically 15 to 20 days. For new third-party contract manufacturing with custom packaging artwork and carton development, initial batch delivery takes approximately 30 to 35 days.'
    },
    {
      q: 'Are all formulations compliant with Schedule M and WHO-GMP guidelines?',
      a: 'Yes, 100% of formulations indexed in CATLOP.pdf are manufactured in certified cleanroom facilities complying with Schedule M, state FDA drug licenses, and international WHO-GMP quality parameters.'
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
            <span>Corporate Correspondence & Trade Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {isQuoteMode ? 'Request Commercial Quotation' : 'Contact Aero Life Pharma'}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our institutional sales and contract manufacturing desk for competitive formulation pricing, franchise opportunities, and technical dossiers.
          </p>
        </div>
      </section>

      {/* 2. Main Grid: Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#071F38]">
                {isQuoteMode ? 'Quotation & Formulation Enquiry Form' : 'Send us a Business Message'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the details below. Our corporate sales team responds within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.enquiryType}</strong> has been logged in the Aero Life Pharma trade system. Our representative will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      enquiryType: 'Third Party Manufacturing',
                      productOfInterest: '',
                      message: ''
                    });
                  }}
                  className="mt-6 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                      Company / Pharmacy Name <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Healthcare Distributors"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                      Phone / Mobile Number <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                      Type of Partnership / Enquiry
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    >
                      <option value="Third Party Manufacturing">Third Party Contract Manufacturing</option>
                      <option value="PCD Pharma Franchise">PCD Pharma Franchise (Monopoly)</option>
                      <option value="Bulk Formulation Supply">Bulk Formulation Supply</option>
                      <option value="Institutional & Hospital Supply">Institutional & Hospital Supply</option>
                      <option value="Dossier & Regulatory Request">Dossier & Regulatory Monograph</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                      Product Formulation of Interest
                    </label>
                    <input
                      type="text"
                      name="productOfInterest"
                      value={formData.productOfInterest}
                      onChange={handleChange}
                      placeholder="e.g. AEROMARK-SP, CLAVAERO-CV"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071F38] uppercase tracking-wider mb-1">
                    Order Details / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify projected quantities, packaging requirements (Alu-Alu / Blister), delivery location, or questions..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md hover:shadow-cyan-500/20 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Corporate Enquiry</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Office Info & Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-[#071F38] mb-4 flex items-center gap-2">
                <span className="w-2 h-4 bg-[#00AEEF] rounded-full" />
                <span>Corporate Headquarters & Plant</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#071F38]">Aero Life Pharma</strong>
                    <span>Pharmaceutical Manufacturing Facilities & Corporate Trade Office, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#071F38]">Email Desk</strong>
                    <a href="mailto:info@aerolifepharma.com" className="text-[#00AEEF] hover:underline">
                      info@aerolifepharma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#071F38]">Helpline & WhatsApp</strong>
                    <span>+91 (Trade Enquiries & PCD Support)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#071F38]">Operating Hours</strong>
                    <span>Monday to Saturday: 9:30 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Assurance Badge Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#071F38] to-[#0d2a4a] text-white shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />
                <h4 className="text-sm font-bold">100% Certified Formulations</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Registered Trademark No. 6512683 (Class 5). All batches dispatched with certified Certificate of Analysis (COA) adhering to IP/BP/USP standards.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-slate-200">WHO-GMP</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-slate-200">ISO 9001:2015</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-slate-200">Schedule M Compliant</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Trade FAQs Section */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#071F38] mt-2">
              Frequently Asked Questions (Trade & Franchise)
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left text-sm font-bold text-[#071F38] flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#00AEEF]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

