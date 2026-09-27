"use client";

export default function AboutUs() {
  return (
    <section id="tentang-kami" className="py-32 bg-[#FFF3E0] text-[#D62828] font-sans overflow-hidden selection:bg-[#D62828] selection:text-[#FFF3E0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tight mb-8">
              Mitra digital<br />yang sesungguhnya.
            </h2>
            
            <p className="text-xl md:text-2xl text-[#D62828]/80 leading-relaxed mb-6 font-medium">
              Kami percaya teknologi terbaik adalah yang terasa tidak terlihat.
            </p>

            <p className="text-lg text-[#D62828]/60 leading-relaxed font-medium">
              Kalana Labs didirikan dengan satu prinsip: membuang kerumitan. Dari website hingga sistem kompleks, kami merancangnya agar Anda bisa fokus pada bisnis, bukan pada layar.
            </p>
          </div>

          {/* Right Column: Refined Image Presentation */}
          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center">
            {/* Single strong focus point */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#D62828]/5 border border-[#D62828]/10 group">
              <img 
                src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/about_teamwork.png" 
                alt="Tim Kalana Labs"
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
