"use client";

import Link from 'next/link';
import { Globe, Mail, MessageCircle, Share2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      
      {/* Absolute positioning for the background soft waves if any */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center mt-12">
        
        {/* Massive Centered Heading */}
        <h1 
          className="text-[#1A1A1A] text-[15vw] md:text-[9rem] lg:text-[12rem] font-black leading-none tracking-tighter z-10 text-center animate-fade-in-up"
          style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          KALANA
        </h1>
        <p className="text-[#D62828] font-bold tracking-[0.3em] uppercase text-sm md:text-base -mt-4 md:-mt-8 z-10 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Elevate Your Digital Experience
        </p>

        {/* Central Product/Feature Image */}
        <div className="relative w-full max-w-2xl md:max-w-4xl -mt-16 md:-mt-32 z-20 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          {/* Subtle pedestal or shadow effect */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/5 blur-xl rounded-full" />
          <img 
            src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/kalanalabsmockup.webp" 
            alt="Kalana Labs Digital Product" 
            className="relative w-[80%] md:w-[70%] object-contain drop-shadow-2xl hover:-translate-y-4 transition-transform duration-700"
          />
        </div>

        {/* Bottom Split Content (Left: Text, Right: Socials) */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-end md:items-center mt-12 md:mt-0 px-4 md:px-12 z-30 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          
          <div className="max-w-xs text-left mt-8 md:mt-0">
            <p className="text-[#1A1A1A]/70 text-sm font-medium leading-relaxed">
              We design and build digital products with simplicity, precision, and functional beauty for forward-thinking brands.
            </p>
            <Link href="#kontak" className="inline-block mt-4 text-[#D62828] font-bold text-sm hover:underline underline-offset-4 decoration-2">
              Discover Kalana &rarr;
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#1A1A1A]/60 hover:text-[#D62828] transition-colors"><Globe className="w-5 h-5" /></Link>
            <Link href="#" className="text-[#1A1A1A]/60 hover:text-[#D62828] transition-colors"><Share2 className="w-5 h-5" /></Link>
            <Link href="#" className="text-[#1A1A1A]/60 hover:text-[#D62828] transition-colors"><Mail className="w-5 h-5" /></Link>
            <Link href="#" className="text-[#1A1A1A]/60 hover:text-[#D62828] transition-colors"><MessageCircle className="w-5 h-5" /></Link>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
