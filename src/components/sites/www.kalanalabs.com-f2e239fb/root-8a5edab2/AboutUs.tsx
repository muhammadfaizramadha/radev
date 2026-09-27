"use client";

export default function AboutUs() {
  return (
    <section id="tentang-kami" className="py-24 bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[#1A1A1A] text-2xl font-bold tracking-[0.2em] uppercase mb-16 text-center">
          About Us
        </h2>

        {/* Two Column Text with Divider */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 w-full max-w-4xl mb-24 relative">
          
          <div className="flex-1 text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed text-justify md:text-right">
            Kalana Labs is a modern digital agency dedicated to delivering unmatched digital experiences. Founded with a vision to blend advanced technology and elegant design, we create exceptional digital products that elevate your brand's presence in a competitive market.
          </div>
          
          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]/10 -translate-x-1/2" />
          
          {/* Horizontal Divider (Mobile only) */}
          <div className="block md:hidden w-full h-px bg-[#1A1A1A]/10 my-2" />

          <div className="flex-1 text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed text-justify md:text-left">
            We are driven by functional aesthetics and engineering perfection. Inviting people to the unique realm of superior code quality and appealing design. As a leader in the local IT industry, Kalana Labs continues to redefine technology with innovative solutions.
          </div>
          
        </div>

        {/* 3-Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="aspect-[4/3] w-full overflow-hidden bg-[#1A1A1A]/5 rounded-lg group">
            <img 
              src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/about_teamwork.png" 
              alt="Workspace" 
              className="w-full h-full object-cover mix-blend-multiply grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden bg-[#1A1A1A]/5 rounded-lg group">
            <img 
              src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/about_tech.png" 
              alt="Technology" 
              className="w-full h-full object-cover mix-blend-multiply grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden bg-[#1A1A1A]/5 rounded-lg group">
            <img 
              src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/kalanalabsmockup.webp" 
              alt="Design" 
              className="w-full h-full object-cover mix-blend-multiply grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
