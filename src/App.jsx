import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButtons from './components/FloatingContactButtons';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00AEEF]/20 selection:text-[#0C1B2A] relative">
      {/* Restores scroll to top on every route change */}
      <ScrollToTop />

      {/* Floating WhatsApp and Call Action Buttons (Site-wide) */}
      <FloatingContactButtons />

      {/* 1. Header / Redesigned Navbar with Real Routes */}
      <Navbar />

      {/* 2. Page Content via React Router */}
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<ContactPage isQuoteMode={true} />} />
          {/* Fallback route safely redirects to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 3. Global Corporate Footer */}
      <Footer />
    </div>
  );
}
