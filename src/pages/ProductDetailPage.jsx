import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CATEGORIES,
  getCategoryBySlug,
  getProductBySlug,
  getRelatedProducts
} from '../data/productsData';
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Package,
  Layers,
  FileText,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Share2,
  ShieldCheck,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import PartnershipBannerSection from '../components/PartnershipBannerSection';

export default function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams();
  const navigate = useNavigate();

  // Find category and product
  const category = useMemo(() => {
    return getCategoryBySlug(categorySlug) || CATEGORIES[0];
  }, [categorySlug]);

  const product = useMemo(() => {
    return getProductBySlug(category.slug, productSlug);
  }, [category, productSlug]);

  // Related products from same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(category.slug, product.slug, 4);
  }, [category, product]);

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 select-none">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
          <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Product Not Found</h2>
          <p className="text-xs text-slate-600 mb-6">
            The requested formulation could not be located in our verified product database.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] text-white text-xs font-bold shadow-md hover:bg-[#0097D1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Commercial Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Aerolife Pharma, I would like to inquire about ${product.name} (Composition: ${product.composition}, Pack: ${product.pack}) for commercial supply / PCD franchise.`
  );

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none">
      
      {/* 
        ========================================================================
        BREADCRUMB HEADER
        ========================================================================
      */}
      <div className="bg-[#102D4B] text-white py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00AEEF] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/products" className="hover:text-[#00AEEF] transition-colors">Commercial Catalogue</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to={`/products/${category.slug}`} className="hover:text-[#00AEEF] transition-colors">
              {category.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00AEEF] font-bold truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 
        ========================================================================
        MAIN PRODUCT DETAIL SHOWCASE
        Desktop: Left Image (bg-white, big packaging) + Right Monograph Information
        Mobile: Stacked Image First -> Specs -> CTAs
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to={`/products/${category.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#00AEEF] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to {category.title}</span>
          </Link>
        </div>

        {/* Product Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* 
              LEFT COLUMN (lg:col-span-5):
              Clean Product Packaging Image on Soft Neutral Studio Stage
            */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-[4/3] bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F1F5F9]/80 rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex items-center justify-center relative shadow-inner overflow-hidden group">
                <div 
                  className="absolute inset-x-12 bottom-3 h-8 bg-radial from-slate-200/40 via-slate-100/20 to-transparent blur-xs pointer-events-none"
                  aria-hidden="true" 
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105 relative z-10"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                  }}
                />

                {/* Verified Product Badge */}
                <div className="absolute top-3 left-3 bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 z-20">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Verified Product</span>
                </div>

                {/* Catalog Monograph Stamp */}
                <div className="absolute top-3 right-3 bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Catalog Verified</span>
                </div>

                <div className="absolute bottom-3 right-3 text-[10px] font-semibold text-slate-400 bg-white/90 px-2 py-0.5 rounded shadow-xs border border-slate-100">
                  Genuine Commercial Pack
                </div>
              </div>

              {/* Security & Quality Trust Seals under Image */}
              <div className="grid grid-cols-3 gap-2 w-full mt-4 text-center">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] mx-auto mb-1" />
                  <span className="block text-[10px] font-bold text-slate-700">100% Verified</span>
                  <span className="block text-[9px] text-slate-400">Original Monograph</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5">
                  <Award className="w-4 h-4 text-[#00AEEF] mx-auto mb-1" />
                  <span className="block text-[10px] font-bold text-slate-700">GMP Standard</span>
                  <span className="block text-[9px] text-slate-400">Strict Quality Control</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5">
                  <Package className="w-4 h-4 text-[#00AEEF] mx-auto mb-1" />
                  <span className="block text-[10px] font-bold text-slate-700">Tamper-Proof</span>
                  <span className="block text-[9px] text-slate-400">Secure Packaging</span>
                </div>
              </div>
            </div>

            {/* 
              RIGHT COLUMN (lg:col-span-7):
              Complete Verified Product Monograph & Inquiry CTAs
            */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                
                {/* Category & Page Badge */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Link
                    to={`/products/${category.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00AEEF]/10 text-[#00AEEF] hover:bg-[#00AEEF]/20 transition-colors"
                  >
                    <span>{category.title}</span>
                  </Link>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                    {product.dosageForm}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-bold text-[#ED1C24] bg-red-50 border border-red-100">
                    Commercial Supply Ready
                  </span>
                </div>

                {/* Brand Name */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102D4B] tracking-tight leading-tight mb-3">
                  {product.name}
                </h1>

                {/* Active Composition Box */}
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Active Pharmaceutical Ingredients / Composition:
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {product.composition}
                  </div>
                </div>

                {/* Product Technical Specifications Table */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-xs">
                  <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Product Monograph &amp; Specifications
                    </span>
                    <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      Catalog Verified
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-slate-500">Commercial Packaging:</span>
                      <span className="col-span-2 font-bold text-slate-900">{product.pack}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-slate-500">Dosage Form:</span>
                      <span className="col-span-2 font-bold text-slate-900">{product.dosageForm}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-slate-500">Active Composition:</span>
                      <span className="col-span-2 font-bold text-slate-900 leading-snug">{product.composition}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-slate-500">Strength / Specification:</span>
                      <span className="col-span-2 font-bold text-[#00AEEF] leading-snug">{product.strength}</span>
                    </div>
                    {product.therapeuticCategory && (
                      <div className="grid grid-cols-3 p-3">
                        <span className="font-semibold text-slate-500">Therapeutic Category:</span>
                        <span className="col-span-2 font-bold text-slate-800">{product.therapeuticCategory}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-slate-500">Quality Standard:</span>
                      <span className="col-span-2 font-bold text-slate-900">
                        Official Monograph Specifications • Batch Analytical Standards
                      </span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="font-semibold text-slate-500">Storage Guidelines:</span>
                      <span className="col-span-2 font-medium text-slate-700 leading-relaxed">
                        Store in a cool, dry and dark place below 25°C. Protect from direct moisture &amp; light.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Monograph Overview */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

              </div>

              {/* 
                ================================================================
                ACTION CTA BUTTONS
                Get a Quote, WhatsApp Direct, Call Commercial Desk
                ================================================================
              */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                
                {/* Primary CTA: Get a Quote */}
                <Link
                  to={`/quote?product=${encodeURIComponent(product.name)}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Request Commercial Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary CTA: WhatsApp Direct with Official WhatsApp Icon */}
                <a
                  href={`https://wa.me/917045147453?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-green-500/25 transition-all duration-200"
                >
                  <svg 
                    className="w-4 h-4 fill-white flex-shrink-0" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
                  </svg>
                  <span>WhatsApp Inquiry</span>
                </a>

                {/* Tertiary CTA: Direct Call */}
                <a
                  href="tel:7045147453"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#ED1C24]" />
                  <span>+91 70451 47453</span>
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* 
          ======================================================================
          RELATED FORMULATIONS IN SAME CATEGORY
          ======================================================================
        */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#102D4B]">
                  Related Formulations in {category.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Explore other verified formulations in our pharmaceutical portfolio
                </p>
              </div>

              <Link
                to={`/products/${category.slug}`}
                className="text-xs font-bold text-[#00AEEF] hover:underline flex items-center gap-1"
              >
                <span>View all in {category.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
                >
                  {/* Product Packaging Image on Pure White Canvas */}
                  <div className="w-full h-44 bg-white p-4 flex items-center justify-center border-b border-slate-100/70 relative">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/products/placeholder-pharmaceutical.svg';
                }}
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded">
                      {rel.pack}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#00AEEF] transition-colors line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                        {rel.composition}
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-semibold text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                        {rel.pack}
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/products/${category.slug}/${rel.slug}`}
                        className="text-xs font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/quote?product=${encodeURIComponent(rel.name)}`}
                        className="text-[11px] font-bold text-[#ED1C24] hover:underline"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* 
        ========================================================================
        PRODUCT COMMERCIAL PARTNERSHIP CTA WITH WHATSAPP ACTION
        ========================================================================
      */}
      <PartnershipBannerSection
        tag="PRODUCT DOSSIER & SUPPLY"
        title={`INTERESTED IN ${product.name.toUpperCase()}?`}
        description={`Connect directly with our commercial desk to request minimum order quantities (MOQ), wholesale pricing, and Certificate of Analysis (COA) for ${product.name}.`}
        primaryText="REQUEST PRODUCT QUOTE"
        primaryLink={`/quote?product=${encodeURIComponent(product.name)}`}
        secondaryText="EXPLORE ALL PRODUCTS"
        secondaryLink="/products"
        whatsappMessage={`Hello Aerolife Pharma, I would like to inquire about ${product.name} (Composition: ${product.composition}, Pack: ${product.pack}) for commercial supply / PCD franchise.`}
      />

    </div>
  );
}
