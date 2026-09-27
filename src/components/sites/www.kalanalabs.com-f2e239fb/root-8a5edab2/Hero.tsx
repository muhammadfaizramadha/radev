"use client";

import Link from 'next/link';
import { Globe, Mail, MessageCircle, Share2, ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] md:min-h-screen w-full bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0] pt-20 flex flex-col overflow-hidden">
      
      {/* Top Section: Giant Heading */}
      <div className="relative z-10 w-full flex flex-col items-center pt-8 md:pt-16 pb-32 md:pb-48">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A1A1A]/10 bg-white/50 backdrop-blur-md mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-[#D62828]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]">Experience The Future</span>
        </div>
        
        <h1 
          className="text-[#1A1A1A] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] font-black leading-[0.85] tracking-tighter text-center z-10 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          Sentuh Masa<br />Depan Digital.
        </h1>
      </div>

      {/* Central Overlapping Image */}
      <div className="absolute top-[25%] md:top-[20%] left-1/2 -translate-x-1/2 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[35%] max-w-[500px] z-30 pointer-events-none animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <img 
          src="/images/hero-section.png" 
          alt="Future Digital Experience" 
          className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] scale-110 md:scale-125 origin-bottom"
        />
      </div>

      {/* Floating Tooltips (Desktop only for cleaner mobile) */}
      <div className="hidden lg:flex absolute top-[45%] left-[15%] z-40 bg-white rounded-2xl p-4 shadow-2xl shadow-black/10 w-56 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-bold text-[#1A1A1A] text-sm">Performa Cepat</h4>
          </div>
          <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-medium">
            Optimasi arsitektur modern untuk waktu muat yang sangat responsif.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex absolute top-[55%] right-[15%] z-40 bg-white rounded-2xl p-4 shadow-2xl shadow-black/10 w-56 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-bold text-[#1A1A1A] text-sm">Desain Premium</h4>
          </div>
          <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-medium">
            Antarmuka pengguna yang adaptif dan estetik untuk konversi tinggi.
          </p>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="relative z-20 flex-grow w-full bg-[#1A1A1A] rounded-t-[3rem] md:rounded-t-[4rem] px-6 md:px-12 py-16 md:py-20 mt-auto flex flex-col justify-end min-h-[50vh]">
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Left Content */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-tight">
              Rasakan masa depan <br className="hidden lg:block"/>
              inovasi digital.
            </h3>
            <p className="text-white/50 text-sm font-medium leading-relaxed mb-8 max-w-sm">
              Didukung oleh teknologi mutakhir, desain menawan, dan arsitektur handal untuk pengalaman digital yang sepenuhnya imersif.
            </p>
            
            <Link href="#kontak" className="inline-flex items-center gap-4 bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-bold hover:bg-[#FFF3E0] hover:scale-105 active:scale-95 transition-all">
              Mulai Proyek
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>

            {/* Socials - Bottom Left */}
            <div className="flex items-center gap-6 mt-16 md:mt-24">
              <span className="text-white/30 text-xs font-bold uppercase tracking-widest mr-2">Ikuti Kami</span>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#1A1A1A] transition-colors"><Globe className="w-4 h-4" /></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#1A1A1A] transition-colors"><Share2 className="w-4 h-4" /></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#1A1A1A] transition-colors"><Mail className="w-4 h-4" /></Link>
            </div>
          </div>

          {/* Center Space for Image overlap */}
          <div className="hidden lg:block lg:col-span-4 h-full pointer-events-none" />

          {/* Right Content */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            
            <div className="flex flex-row justify-center lg:justify-end gap-12 mb-16 lg:mb-24 w-full">
              <div className="flex flex-col">
                <span className="text-white text-3xl md:text-4xl font-bold tracking-tighter">250+</span>
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider mt-1">Proyek Selesai</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-3xl md:text-4xl font-bold tracking-tighter">99%</span>
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider mt-1">Klien Puas</span>
              </div>
            </div>

            {/* Mini Card bottom right */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 backdrop-blur-md w-full max-w-sm hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-white/10 overflow-hidden shrink-0 p-2">
                <img 
                  src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/logo-kalana.svg" 
                  alt="Kalana Quality" 
                  className="w-full h-full object-contain filter invert opacity-80"
                />
              </div>
              <div className="flex flex-col text-left">
                <h5 className="text-white font-bold text-sm">Kualitas Terjamin</h5>
                <p className="text-white/50 text-xs font-medium">Garansi performa untuk setiap produk digital Anda.</p>
              </div>
              <div className="ml-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

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
