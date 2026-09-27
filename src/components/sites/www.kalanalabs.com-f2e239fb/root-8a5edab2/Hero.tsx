"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#FFF3E0] overflow-x-hidden flex flex-col justify-start items-center font-sans selection:bg-[#D62828] selection:text-[#FFF3E0] pt-20 md:pt-24 pb-8 md:pb-12">
      
      {/* Title - Layer 1 (Top) */}
      <div 
        className="relative z-10 w-full px-4 shrink-0 flex justify-center text-center animate-fade-in-up"
        style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        <h1 className="text-[#1A1A1A] text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold leading-none tracking-tight">
          Website & Aplikasi.<br />
          <span className="text-[#D62828]">Dibuat Presisi.</span>
        </h1>
      </div>

      {/* Hero Image - Layer 2 (Middle, heavily height-constrained on mobile) */}
      <div 
        className="relative z-20 w-full max-w-[450px] md:max-w-[550px] mx-auto -mt-8 sm:-mt-10 md:-mt-10 lg:-mt-12 pointer-events-none px-4 flex justify-center animate-fade-in-up"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <img 
          src="/images/hero-section.png?v=6" 
          alt="Kalana Labs - Digital Solutions" 
          className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] object-contain object-top drop-shadow-[0_20px_50px_rgba(26,26,26,0.15)]"
        />
      </div>

      {/* Subtitle - Layer 3 (Bottom, sits naturally below the image) */}
      <div 
        className="relative z-30 w-full max-w-3xl mx-auto px-6 mt-4 sm:mt-6 md:mt-8 shrink-0 flex justify-center text-center animate-fade-in-up"
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
