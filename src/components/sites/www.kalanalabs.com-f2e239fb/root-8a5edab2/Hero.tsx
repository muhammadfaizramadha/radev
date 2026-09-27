"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#FFF3E0] overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-[#D62828] selection:text-[#FFF3E0] pt-24 md:pt-32 pb-16">
      
      {/* Title - Layer 1 (Background) */}
      <div 
        className="relative z-10 w-full px-6 flex justify-center text-center animate-fade-in-up" 
        style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        <h1 className="text-[#1A1A1A] text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight">
          Website & Aplikasi.<br />
          <span className="text-[#D62828]">Dibuat Presisi.</span>
        </h1>
      </div>

      {/* Hero Subject Image - Layer 2 (Foreground) overlapping the title slightly */}
      {/* Negative margin (-mt-4 to -mt-16) guarantees a consistent slight overlap across all screen sizes and zooms */}
      <div 
        className="relative z-20 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%] max-w-[550px] -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 flex justify-center animate-fade-in-up pointer-events-none" 
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <img 
          src="/images/hero-section.png" 
          alt="Kalana Labs - Digital Solutions" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(26,26,26,0.15)]"
        />
      </div>

      {/* Subtitle - Layer 3 (Below Image) */}
      <div 
        className="relative z-30 w-full max-w-2xl px-6 mt-4 md:mt-8 flex justify-center text-center animate-fade-in-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <p className="text-[#1A1A1A]/70 text-lg md:text-xl font-medium leading-relaxed">
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
