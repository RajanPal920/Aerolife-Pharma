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
import PartnershipBannerSection from '../components/PartnershipBannerSection';

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
    enquiryType: isQuoteMode ? 'Third Party Manufacturing' : 'PCD Pharma Franchise',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
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
    const refId = `ALP-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const submission = {
      ...formData,
      refId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    setSubmittedData(submission);
    setIsSubmitting(false);

    // Navigate to official email client with pre-filled commercial inquiry
    const emailSubject = encodeURIComponent(`[${refId}] Commercial Inquiry: ${formData.enquiryType} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Dear Aerolife Pharma Commercial Desk,\n\n` +
      `I am writing to submit a commercial pharmaceutical inquiry with the following details:\n\n` +
      `----------------------------------------\n` +
      `INQUIRY DETAILS\n` +
      `----------------------------------------\n` +
      `Reference ID: ${refId}\n` +
      `Inquiry Nature: ${formData.enquiryType}\n` +
      `Full Name: ${formData.name}\n` +
      `Mobile / WhatsApp: ${formData.phone}\n` +
      `Official Email: ${formData.email}\n` +
      `Company / Location: ${formData.company || 'Not Specified'}\n\n` +
      `Commercial Requirement / Message:\n` +
      `${formData.message}\n\n` +
      `----------------------------------------\n` +
      `Submitted via Aerolife Pharma Official Portal\n` +
      `Target Desk: info@aerolifepharma.com\n` +
      `Trade Mark No. 4665534 (Class 5)`
    );

    window.location.href = `mailto:info@aerolifepharma.com?subject=${emailSubject}&body=${emailBody}`;
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
      a: 'For repeated orders of approved formulations in our commercial portfolio, dispatch typically takes place within 48 to 72 hours via verified cold-chain and dry freight networks. For contract manufacturing with custom packaging and carton development, initial batch delivery takes approximately 25 to 30 days.'
    },
    {
      q: 'Are all formulations compliant with Schedule M and WHO-GMP guidelines?',
      a: '100% of formulations indexed in our commercial product portfolio are produced in certified cleanroom partner facilities strictly adhering to Revised Schedule M of the Drugs and Cosmetics Act, state FDA manufacturing licenses, and international quality parameters.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-800 select-none">

      {/* 
        ========================================================================
        1. UNIFIED CLEAN HERO SECTION: CORPORATE CONTACT & TRADE DESK
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
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[250px] font-black text-white/[0.04] select-none pointer-events-none uppercase tracking-tighter leading-none z-10"
          aria-hidden="true"
        >
          CONTACT
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">

          {/* Breadcrumb Navigation Centered */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#00AEEF]">{isQuoteMode ? 'Request Commercial Quotation' : 'Corporate Contact & Support'}</span>
          </nav>

          {/* Centered Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00AEEF] text-xs font-bold tracking-wide uppercase mb-5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
            <span>Commercial Correspondence & Trade Desk</span>
          </div>

          {/* Centered Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5">
            CONNECT WITH <br />
            <span className="text-[#00AEEF]">AEROLIFE PHARMA.</span>
          </h1>

          {/* Centered Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Connect directly with our corporate sales desk for monopoly PCD pharma franchise partnerships, third-party contract manufacturing, institutional hospital procurement, and official formulation dossiers.
          </p>

          {/* Quick Hero Highlights Centered */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/15 text-xs font-semibold text-slate-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Pan-India Commercial Supply</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
              <span>Monopoly PCD Franchise Rights</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
              <span>24-Hour Trade Desk Response</span>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98"
            >
              <span>SEND COMMERCIAL INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
                Shop No. 8, Laxmi Appt., Near Hanuman Mandir, Waliv, Vasai (E), Palghar - 401 208, Maharashtra, India.
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
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z" />
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
          <div id="inquiry-form" className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm scroll-mt-24">

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
                Fill out the simple form below. Your requirement will be forwarded directly to our commercial desk at <strong>info@aerolifepharma.com</strong>.
              </p>
            </div>

            {submittedData ? (
              /* Success State Banner with Ref ID and Email Confirmation */
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                  Reference ID: {submittedData.refId}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-emerald-900 mb-2">
                  Inquiry Dispatched to info@aerolifepharma.com
                </h3>

                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong>{submittedData.name}</strong>. Your commercial inquiry for <strong>{submittedData.enquiryType}</strong> has been routed to our corporate trade desk at <strong>info@aerolifepharma.com</strong>. Our team will revert with batch pricing and dossiers.
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
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z" />
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
                      enquiryType: isQuoteMode ? 'Third Party Manufacturing' : 'PCD Pharma Franchise',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* 1. Inquiry Type Selector Tabs */}
                <div>
                  {/* <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-2">
                    Inquiry Nature <span className="text-[#ED1C24]">*</span>
                  </label> */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      // 'PCD Pharma Franchise',
                      // 'Third Party Manufacturing',
                      // 'Institutional Supply',
                      // 'Formulation Dossier'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, enquiryType: type }))}
                        className={`py-2.5 px-2 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${formData.enquiryType === type
                          ? 'bg-[#102D4B] text-white border-[#102D4B] shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Full Name & Mobile / WhatsApp */}
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
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${errors.name ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                        }`}
                    />
                    {errors.name && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.name}</p>}
                  </div>

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
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${errors.phone ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                        }`}
                    />
                    {errors.phone && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* 3. Corporate Email Address & Company / Enterprise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${errors.email ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                        }`}
                    />
                    {errors.email && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                      Company / Location
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Health Enterprises, Mumbai"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Message / Detailed Requirement */}
                <div>
                  <label className="block text-xs font-bold text-[#102D4B] uppercase tracking-wider mb-1">
                    Requirement Details / Commercial Query <span className="text-[#ED1C24]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on dosage strength, preferred formulations (e.g. CLAVAERO 625, AEROMARK-SP), packaging (Alu-Alu, Blister, Amber Bottle), or territory needed..."
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl text-slate-800 focus:bg-white focus:outline-none transition-colors ${errors.message ? 'border-[#ED1C24] focus:ring-1 focus:ring-[#ED1C24]' : 'border-slate-200 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]'
                      }`}
                  />
                  {errors.message && <p className="text-[11px] text-[#ED1C24] mt-1">{errors.message}</p>}
                </div>

                {/* 5. Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching to info@aerolifepharma.com...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>SUBMIT INQUIRY (info@aerolifepharma.com)</span>
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
                    <span>Shop No. 8, Laxmi Appt., Near Hanuman Mandir, Waliv, Vasai (E), Palghar - 401 208, Maharashtra, India.</span>
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
                    Vasai (E), Palghar Location
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Shop+No.+8,+Laxmi+Appt.,+Near+Hanuman+Mandir,+Waliv,+Vasai+(E),+Palghar+-+401+208,+Maharashtra,+India"
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
                  src="https://maps.google.com/maps?q=Shop%20No.%208%2C%20Laxmi%20Appt.%2C%20Near%20Hanuman%20Mandir%2C%20Waliv%2C%20Vasai%20(E)%2C%20Palghar%20-%20401%20208%2C%20Maharashtra%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
        4. FREQUENTLY ASKED QUESTIONS (Exact Match to HomePage FaqSection)
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
              Essential information regarding our commercial formulations, monopoly PCD agreements, and trade compliance.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-sky-100/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
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
            <a
              href={`tel:+91${phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] transition-all flex-shrink-0"
            >
              <span>CALL NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        PARTNERSHIP CTA BANNER WITH WHATSAPP ACTION (Bespoke for Contact Page)
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="DIRECT COMMERCIAL DESK"
        title="START A CONVERSATION WITH OUR SALES DIRECTORS."
        description="Get instant clarification on distribution rights, batch dispatch schedules, institutional tenders, and product dossiers from our Vasai East headquarters."
        primaryText="REQUEST A CALLBACK"
        primaryLink="/quote"
        secondaryText="EXPLORE 84 PRODUCTS"
        secondaryLink="/products"
        whatsappMessage="Hi Aerolife Pharma Trade Desk, I would like to discuss commercial distribution terms and bulk procurement."
      />

    </div>
  );
}
