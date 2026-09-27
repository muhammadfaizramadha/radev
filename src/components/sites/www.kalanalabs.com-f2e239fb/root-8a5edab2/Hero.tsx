"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#FFF3E0] overflow-x-hidden flex flex-col font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      
      {/* Spacer for navbar to prevent overlap at the very top */}
      <div className="h-24 shrink-0" />

      {/* Title - Layer 1 (Top) */}
      <div 
        className="relative z-10 w-full px-4 shrink-0 flex justify-center text-center animate-fade-in-up"
        style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        <h1 className="text-[#1A1A1A] text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight">
          Website & Aplikasi.<br />
          <span className="text-[#D62828]">Dibuat Presisi.</span>
        </h1>
      </div>

      {/* Hero Image - Layer 2 (Middle, Flex-grow for dynamic sizing) */}
      {/* min-h-0 is critical so the flex container allows the image to shrink on landscape screens without pushing text out */}
      <div 
        className="relative z-20 w-full max-w-[500px] md:max-w-[650px] mx-auto flex-grow min-h-0 -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 pointer-events-none px-4 flex justify-center animate-fade-in-up"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <img 
          src="/images/hero-section.png" 
          alt="Kalana Labs - Digital Solutions" 
          className="w-full h-full object-contain object-top drop-shadow-[0_20px_50px_rgba(26,26,26,0.15)]"
        />
      </div>

      {/* Subtitle - Layer 3 (Bottom, ALWAYS visible above the fold) */}
      <div 
        className="relative z-30 w-full max-w-3xl mx-auto px-6 pb-8 md:pb-12 shrink-0 flex justify-center text-center animate-fade-in-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <p className="text-[#1A1A1A]/70 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
          Kembangkan bisnis Anda di era digital. Dari landing page elegan, toko online, hingga sistem informasi khusus, kami merancangnya untuk performa maksimal.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
