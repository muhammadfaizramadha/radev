"use client";

import Link from 'next/link';
import { Globe, Mail, MessageCircle, Share2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FFFFF0]/60 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center flex-grow">
        
        {/* Massive Centered Heading */}
        <div className="text-center w-full flex flex-col items-center justify-center animate-fade-in-up" style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          <h1 className="text-[#1A1A1A] text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight z-10">
            KALANA
          </h1>
          <p className="text-[#D62828] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base mt-2 md:mt-4 z-10">
            Elevate Your Digital Experience
          </p>
        </div>

        {/* Central Product/Feature Image */}
        {/* Removed negative margins to prevent overlap breakage. Added max-h constraint. */}
        <div className="relative w-full max-w-3xl z-20 flex justify-center mt-8 md:mt-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {/* Subtle pedestal shadow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-[#1A1A1A]/10 blur-xl rounded-full" />
          <img 
            src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/kalanalabsmockup.webp" 
            alt="Kalana Labs Digital Product" 
            className="relative w-full h-auto max-h-[350px] md:max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(26,26,26,0.15)] hover:-translate-y-2 transition-transform duration-700"
          />
        </div>

        {/* Bottom Split Content (Left: Text, Right: Socials) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-auto gap-8 px-0 lg:px-8 z-30 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          
          <div className="max-w-xs text-center md:text-left">
            <p className="text-[#1A1A1A]/70 text-sm md:text-base font-medium leading-relaxed">
              We design and build digital products with simplicity, precision, and functional beauty for forward-thinking brands.
            </p>
            <Link href="#kontak" className="inline-flex items-center gap-2 mt-4 text-[#D62828] font-bold text-sm hover:underline underline-offset-4 decoration-2">
              Discover Kalana <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#1A1A1A]/50 hover:text-[#D62828] transition-colors"><Globe className="w-5 h-5" /></Link>
            <Link href="#" className="text-[#1A1A1A]/50 hover:text-[#D62828] transition-colors"><Share2 className="w-5 h-5" /></Link>
            <Link href="#" className="text-[#1A1A1A]/50 hover:text-[#D62828] transition-colors"><Mail className="w-5 h-5" /></Link>
            <Link href="#" className="text-[#1A1A1A]/50 hover:text-[#D62828] transition-colors"><MessageCircle className="w-5 h-5" /></Link>
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
