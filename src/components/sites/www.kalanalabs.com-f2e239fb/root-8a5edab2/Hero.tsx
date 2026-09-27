"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Typography as focal point */}
        <h1 
          className="text-[#D62828] text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] tracking-tighter mb-8 font-heading animate-fade-in-up"
          style={{ animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          Ubah Ide Jadi<br />
          Produk Hebat.
        </h1>
        
        <p 
          className="text-[#D62828]/80 text-lg md:text-2xl leading-relaxed mb-12 max-w-2xl font-medium opacity-0"
          style={{ animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
        >
          Kami merancang dan membangun produk digital dengan kesederhanaan, presisi, dan keindahan yang fungsional.
        </p>
        
        {/* Clean, minimalist CTAs */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto opacity-0"
          style={{ animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' }}
        >
          <Link 
            href="#konsultasi" 
            className="w-full sm:w-auto px-10 py-4 bg-[#D62828] text-[#FFF3E0] rounded-full text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-xl shadow-[#D62828]/20"
          >
            Mulai Konsultasi
          </Link>
          <Link 
            href="#paket" 
            className="w-full sm:w-auto px-10 py-4 bg-transparent text-[#D62828] rounded-full text-lg font-semibold border-2 border-[#D62828]/20 hover:border-[#D62828] active:scale-[0.98] transition-all duration-300"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>
      
      {/* Subtle bottom border line to separate sections smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D62828]/10 to-transparent" />
      
      {/* Required Keyframes (ideally in global css but kept here for strict scoping/simplicity) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}
