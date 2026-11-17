import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProductMarquee from '../components/ProductMarquee';
import {
  ShieldCheck,
  Award,
  FlaskConical,
  Package,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  FileCheck2
} from 'lucide-react';
import { menuCategories } from '../data/menuProducts';

export default function HomePage() {
  const navigate = useNavigate();

  const handleHeroAction = (action) => {
    if (action === 'explore-products') {
      navigate('/products');
    } else if (action === 'contact-us') {
      navigate('/contact');
    }
  };

  const totalProducts = menuCategories.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Main Hero Slider */}
      <HeroSlider onActionClick={handleHeroAction} />

      {/* 2. Flagship Formulations Live Marquee (Authentic Aero Life Red Strip) */}
      <ProductMarquee onProductClick={(prod) => navigate(`/products?search=${encodeURIComponent(prod.name)}`)} />

      {/* 3. Corporate Excellence & Value Pillars */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pharmaceutical Integrity & Innovation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071F38] tracking-tight">
              Advancing Global Health Through Quality Formulations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Aero Life Pharma combines scientific precision, rigorous quality control, and WHO-GMP compliant manufacturing to produce high-efficacy healthcare therapeutics.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00AEEF] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#071F38] mb-2">
                WHO-GMP Certified
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Adhering strictly to Schedule M and international WHO-GMP protocols with Class 100,000 cleanroom environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00AEEF] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#ED1C24]/10 text-[#ED1C24] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#071F38] mb-2">
                84+ Formulations
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Extensive commercial monographs across 7 dosage categories including Tablets, Capsules, Syrups, and Injectables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00AEEF] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#071F38] mb-2">
                Analytical Testing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                State-of-the-art HPLC, dissolution apparatus, and stability chambers guaranteeing assay precision and bio-equivalence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#00AEEF] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#071F38]/10 text-[#071F38] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#071F38] mb-2">
                PCD & Third Party
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                End-to-end franchise support, contract manufacturing, customized Alu-Alu/Blister packaging, and prompt dispatch.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Dosage Categories Explorer */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                CATALOGUE TAXONOMY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F38] mt-1">
                Explore Formulations By Dosage Form
              </h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#00AEEF] hover:text-[#0097D1] transition-colors group"
            >
              <span>View All {totalProducts} Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="p-5 rounded-2xl border border-slate-200 hover:border-[#00AEEF] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2 py-0.5 rounded-full">
                      {category.products.length} Products
                    </span>
                    <span className="text-xs text-slate-400 font-semibold group-hover:text-[#00AEEF] transition-colors">
                      Explore →
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#071F38] group-hover:text-[#00AEEF] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {category.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>CATLOP.pdf Verified</span>
                  <span className="text-[#00AEEF] font-semibold">View Formulations</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Direct Trade & Partnership Banner */}
      <section className="bg-gradient-to-r from-[#071F38] to-[#0c2e55] text-white py-14 sm:py-16 relative overflow-hidden">
        {/* Accent shapes */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#00AEEF]/15 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full mb-3">
                Commercial Partnerships
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Partner with Aero Life Pharma for Third-Party & PCD Franchise
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our pharmaceutical formulation experts to receive comprehensive product dossiers, competitive institutional quotations, and monopoly marketing agreements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <Link
                to="/quote"
                className="px-6 py-3.5 rounded-lg text-sm font-bold text-[#071F38] bg-white hover:bg-slate-100 shadow-md transition-all active:scale-[0.98]"
              >
                Request Quotation
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0097D1] shadow-md transition-all active:scale-[0.98]"
              >
                Contact Corporate Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

