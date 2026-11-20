import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
  ChevronDown,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function ContactPage({ isQuoteMode = false }) {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Aerolife%20Pharma,%20I%20am%20inquiring%20about%20commercial%20quotation%20and%20product%20dossiers.`;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    enquiryType: isQuoteMode ? 'Third Party Manufacturing' : 'PCD Pharma Franchise',
    productOfInterest: prefilledProduct,
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        productOfInterest: prefilledProduct,
        message: `I am interested in receiving commercial quotation, MOQ, and technical dossier for ${prefilledProduct}.`
      }));
    }
  }, [prefilledProduct]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please specify your requirement or query';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API registration with reference ID
    setTimeout(() => {
      const refId = `ALP-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        ...formData,
        refId,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      });
      setIsSubmitting(false);
    }, 800);
  };

  // WhatsApp pre-filled text for direct handoff
  const whatsappInquiryUrl = submittedData
    ? `https://wa.me/91${phone}?text=${encodeURIComponent(
        `*New Inquiry - Aerolife Pharma*\n` +
        `Ref ID: ${submittedData.refId}\n` +
        `Name: ${submittedData.name}\n` +
        `Company: ${submittedData.company || 'N/A'}\n` +
        `Phone: ${submittedData.phone}\n` +
        `Type: ${submittedData.enquiryType}\n` +
        `Product: ${submittedData.productOfInterest || 'General Portfolio'}\n` +
        `City/State: ${submittedData.city || ''} ${submittedData.state || ''}\n` +
        `Message: ${submittedData.message}`
      )}`
    : whatsappUrl;

  const faqs = [
    {
      q: 'What are the minimum order quantities (MOQs) for Third-Party Contract Manufacturing?',
      a: 'MOQs depend on the dosage category: For Tablets, standard batch sizes typically start at 50,000 to 100,000 units in Alu-Alu or Blister strips. For Oral Liquid Syrups, standard batches range from 3,000 to 5,000 bottles. We also accommodate initial trial runs for newly launching pharmaceutical marketing enterprises.'
    },
    {
      q: 'Do you offer district-wise monopoly marketing rights for PCD Pharma Franchise?',
      a: 'Yes. Aerolife Pharma grants exclusive district-wise monopoly marketing rights to qualified pharmaceutical professionals, distributors, and sales representatives, accompanied by promotional collateral (visual aids, product literature, catch covers, and MR bags).'
    },
    {
      q: 'What is the commercial dispatch and delivery turnaround time?',
      a: 'For repeated orders of existing approved products in our catalog (CATLOP.pdf), dispatch typically takes place within 48 to 72 hours via verified cold-chain and dry freight networks. For new contract manufacturing with custom packaging and carton development, initial batch delivery takes approximately 25 to 30 days.'
    },
    {
      q: 'Are all formulations compliant with Schedule M and WHO-GMP guidelines?',
      a: '100% of formulations indexed in CATLOP.pdf are produced in certified cleanroom partner facilities strictly adhering to Revised Schedule M of the Drugs and Cosmetics Act, state FDA manufacturing licenses, and international WHO-GMP quality parameters.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 select-none">
      
      {/* 
        ========================================================================
        1. HERO SECTION: COMMERCIAL CORRESPONDENCE (Matching Brand Aesthetics)
        ========================================================================
      */}
      <section className="relative bg-[#102D4B] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Top seam line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] via-[#ED1C24] to-[#00AEEF]" />

        {/* Giant Watermark Typography */}
        <div 
          className="absolute -top-10 -left-12 text-[120px] sm:text-[180px] lg:text-[240px] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter leading-none"
          aria-hidden="true"
        >
          CONTACT
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#00AEEF]">{isQuoteMode ? 'Request Quotation' : 'Corporate Contact'}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>Commercial Correspondence & Trade Desk</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              CONNECT WITH <br />
              <span className="text-[#00AEEF]">AEROLIFE PHARMA.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Get in touch with our commercial sales desk for monopoly PCD pharma franchise opportunities, third-party contract manufacturing, institutional procurement, and complete product dossiers.
            </p>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. 4 CORPORATE CONTACT CHANNELS CARDS
        Verified Details from aerolife pharma TM REG.pdf
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* 1. Registered Corporate Office */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Registered Office
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#102D4B] leading-snug">
                Ground Floor, Shop No. 08, Laxmi Appartment-5482/8, Parmatma Nagar, Walvi, Vasai East, Thane, Maharashtra - 401208
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-slate-500">
              TM No. 4665534 (Class 5)
            </div>
          </div>

          {/* 2. Commercial Sales Helpline */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Commercial Helpline
              </h3>
              <a
                href={`tel:+91${phone}`}
                className="text-sm sm:text-base font-extrabold text-[#102D4B] hover:text-[#00AEEF] transition-colors block"
              >
                +91 {phone}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Direct assistance for trade & bulk queries
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-emerald-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Available Mon - Sat (9:30 AM - 6:30 PM)</span>
            </div>
          </div>

          {/* 3. Official WhatsApp Channel */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
                </svg>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Official WhatsApp
              </h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-extrabold text-[#102D4B] hover:text-[#25D366] transition-colors block"
              >
                +91 {phone}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Instant catalog, quotations & dispatch
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
              >
                <span>Chat Instantly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4. Business Correspondence Email */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ED1C24]/10 text-[#ED1C24] flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Official Email
              </h3>
              <a
                href="mailto:info@aerolifepharma.com"
                className="text-xs sm:text-sm font-bold text-[#102D4B] hover:text-[#ED1C24] transition-colors block truncate"
              >
                info@aerolifepharma.com
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Send official purchase orders & tender docs
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-slate-500">
              Response within 24 business hours
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        3. MAIN GRID: INTERACTIVE INQUIRY FORM & CORPORATE FACILITY
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (7 cols): Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
                <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                  {isQuoteMode ? 'Quotation Request' : 'Direct Trade Inquiry'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4B]">
                {isQuoteMode ? 'Request Commercial Quotation' : 'Send a Business Inquiry'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the formulation details below. Our corporate commercial desk will respond with batch pricing, MOQs, and technical dossiers.
              </p>
            </div>

            {submittedData ? (
              /* Success State Banner with Ref ID and WhatsApp Handoff */
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                  Reference ID: {submittedData.refId}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-emerald-900 mb-2">
                  Inquiry Registered Successfully!
                </h3>

                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong>{submittedData.name}</strong>. Your commercial inquiry for <strong>{submittedData.enquiryType}</strong> ({submittedData.productOfInterest || 'Catalog Products'}) has been recorded in the Aerolife Pharma trade database.
                </p>

                {/* Direct WhatsApp Action for instant dispatch */}
                <div className="bg-white p-4 rounded-xl border border-emerald-200 max-w-md mx-auto mb-6 text-left">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Need instant response?
                  </span>
                  <p className="text-xs text-slate-600 mb-3">
                    Forward your inquiry reference ID directly to our WhatsApp commercial desk for priority quotation:
                  </p>
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow-md transition-colors"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
                    </svg>
                    <span>Forward to WhatsApp Desk</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      state: '',
                      city: '',
                      enquiryType: isQuoteMode ? 'Third Party Manufacturing' : 'PCD Pharma Franchise',
                      productOfInterest: '',
                      quantity: '',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Inquiry Type Selector Tabs */}
                <div>
                  <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-2">
                    Inquiry Nature <span className="text-[#ED1C24]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'PCD Pharma Franchise',
                      'Third Party Manufacturing',
                      'Institutional Supply',
                      'Formulation Dossier'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, enquiryType: type }))}
                        className={`py-2.5 px-2 text-center rounded-xl text-xs font-bold border transition-all ${
                          formData.enquiryType === type
                            ? 'bg-[#102D4B] text-white border-[#102D4B] shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${
                        errors.name ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Company / Enterprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Health Enterprises"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Mobile / WhatsApp Number <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${
                        errors.phone ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Corporate Email Address <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. purchase@apexhealth.in"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${
                        errors.email ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* 4. State & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      State / Territory
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="e.g. Maharashtra, Gujarat, UP..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      District / City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, Pune, Ahmedabad..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                {/* 5. Product of Interest & Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Product of Interest (CATLOP.pdf)
                    </label>
                    <input
                      type="text"
                      name="productOfInterest"
                      value={formData.productOfInterest}
                      onChange={handleChange}
                      placeholder="e.g. CLAVAERO 625, AEROMARK-SP..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Estimated Volume / Batch Units
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5,000 packs, 50,000 tablets..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                {/* 6. Message / Detailed Requirement */}
                <div>
                  <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                    Requirement Details / Target Dosage Form <span className="text-[#ED1C24]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on dosage strength, packaging preference (Alu-Alu, Blister, Amber Bottle), monopoly territory needed, or commercial queries..."
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${
                      errors.message ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.message}</p>}
                </div>

                {/* 7. Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Registering Trade Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT COMMERCIAL INQUIRY</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    🔒 All commercial formulations and inquiries are processed under strict NDA confidentiality.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Column (5 cols): Office Details, Working Hours & Location Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Legal Entity & Regulatory Transparency Card */}
            <div className="bg-[#102D4B] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Entity & Trademark</span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2">
                AEROLIFE PHARMA
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Registered Trade Mark No. <strong className="text-white">4665534</strong> in Class 5 (Medical and Pharmaceutical Preparations) under the Trade Marks Act, 1999, Trade Marks Registry, Mumbai.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/15 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Proprietary Registration:</strong>
                    <span>Ruparam Raika, Trading as: Aerolife Pharma</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ED1C24] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Registered Address:</strong>
                    <span>Ground Floor, Shop No. 08, Laxmi Appartment-5482/8, Parmatma Nagar, Walvi, Vasai East, Thane, Maharashtra - 401208</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Business Hours:</strong>
                    <span>Monday to Saturday: 9:30 AM to 6:30 PM IST (Sunday Closed)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Interactive Map / Location Overview Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00AEEF]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#102D4B]">
                    Vasai East, Thane Location
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Vasai+East+Thane+Maharashtra+401208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#00AEEF] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Map Container */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title="Aerolife Pharma Location Map"
                  src="https://maps.google.com/maps?q=Vasai%20East%2C%20Thane%2C%20Maharashtra%20401208&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <p className="text-[11px] text-slate-500 mt-3 text-center">
                Centrally connected to major pharmaceutical logistics hubs in Maharashtra and Mumbai metropolitan region.
              </p>
            </div>

            {/* 3. Direct WhatsApp Quick Dispatch Callout */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-6 text-white shadow-md flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide">
                  Quick WhatsApp Support
                </h4>
                <p className="text-xs text-emerald-100 mt-0.5">
                  Chat directly with our commercial representative now.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl text-xs font-extrabold shadow-sm transition-colors flex-shrink-0"
              >
                Chat Now
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        4. COMMERCIAL TRADE FAQS
        ========================================================================
      */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#00AEEF] rounded-full" />
              <span className="text-xs font-bold text-[#00AEEF] tracking-widest uppercase">
                Commercial Trade Questions
              </span>
              <span className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4B]">
              Frequently Asked Trade & Franchise Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear guidelines on batch MOQs, monopoly distribution agreements, delivery timelines, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-sm transition-shadow"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#102D4B] mb-2.5 flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
