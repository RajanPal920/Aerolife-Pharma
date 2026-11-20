import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';

export default function FloatingContactButtons() {
  const [showTooltip, setShowTooltip] = useState('');

  const phone = '7045147453';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Aero%20Life%20Pharma,%20I%20am%20interested%20in%20your%20products%20and%20PCD%20franchise.`;
  const telUrl = `tel:${phone}`;

  return (
    <aside 
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-auto"
      aria-label="Floating quick contact buttons"
    >
      {/* 1. Direct Call Floating Button - Enlarged & Borderless */}
      <div className="relative flex items-center">
        {showTooltip === 'call' && (
          <div className="mr-3 px-3.5 py-1.5 rounded-xl bg-[#102D4B] text-white text-xs font-bold shadow-2xl whitespace-nowrap animate-in fade-in zoom-in-95 pointer-events-none">
            Call +91 {phone}
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#102D4B] rotate-45" />
          </div>
        )}
        <a
          href={telUrl}
          onMouseEnter={() => setShowTooltip('call')}
          onMouseLeave={() => setShowTooltip('')}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#102D4B] hover:bg-[#00AEEF] text-white shadow-2xl hover:shadow-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          aria-label={`Direct Call to Aero Life Pharma at +91 ${phone}`}
        >
          <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </a>
      </div>

      {/* 2. Official WhatsApp Floating Button - Enlarged & Borderless */}
      <div className="relative flex items-center">
        {showTooltip === 'whatsapp' && (
          <div className="mr-3 px-3.5 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-2xl whitespace-nowrap animate-in fade-in zoom-in-95 pointer-events-none">
            Chat on WhatsApp
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#25D366] rotate-45" />
          </div>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip('whatsapp')}
          onMouseLeave={() => setShowTooltip('')}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          aria-label="Chat with Aero Life Pharma on WhatsApp"
        >
          {/* Authentic Official WhatsApp Vector Icon - Enlarged */}
          <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.18-.175.2-.351.226-.652.076-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.805-2.146-2.016-2.508-.211-.362-.022-.557.128-.707.135-.136.3-.351.451-.527.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 21.786h-.002c-1.77 0-3.507-.476-5.029-1.38l-.361-.214-3.742.981.999-3.649-.236-.375a10.02 10.02 0 0 1-1.536-5.32c0-5.545 4.512-10.057 10.061-10.057 2.686 0 5.212 1.047 7.11 2.947a10.007 10.007 0 0 1 2.946 7.109c-.002 5.547-4.515 10.058-10.06 10.058zm0-21.786C5.401 0 0 5.402 0 12.042c0 2.12.553 4.19 1.603 6.012L0 24l6.104-1.602a11.98 11.98 0 0 0 5.936 1.554h.005c6.638 0 12.04-5.402 12.04-12.042 0-3.217-1.253-6.241-3.53-8.518A12.002 12.002 0 0 0 12.04 0z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
}
