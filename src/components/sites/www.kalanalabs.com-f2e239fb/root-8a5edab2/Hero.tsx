"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#FFF3E0] overflow-hidden flex flex-col items-center justify-end font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      
      {/* Giant Text - Layer 1 (Background) */}
      <div className="absolute top-[25%] md:top-[20%] w-full flex justify-center z-10 animate-fade-in-up" style={{ animation: 'fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
        <h1 className="text-[#1A1A1A] text-[22vw] md:text-[18vw] lg:text-[15rem] font-black leading-none tracking-tighter text-center">
          KALANA
        </h1>
      </div>

      {/* Hero Subject Image - Layer 2 (Foreground) overlapping the text */}
      <div className="relative z-20 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] max-w-[700px] mt-auto flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <img 
          src="/images/hero-section.png" 
          alt="Masa Depan Digital" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(26,26,26,0.2)]"
        />
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
