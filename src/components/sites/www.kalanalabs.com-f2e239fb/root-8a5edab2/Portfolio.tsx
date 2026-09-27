"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    name: 'Anggana Project',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Anggana%20Project.png',
  },
  {
    name: 'Beresin',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Beresin.png',
  },
  {
    name: 'Dapoer Niknik',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Dapoer%20Niknik.png',
  }
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <h2 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">
            KALANA<br />COLLECTION
          </h2>
          
          <div className="flex items-center gap-6 opacity-70">
            <button className="flex items-center gap-2 text-sm font-semibold hover:text-[#D62828] transition-colors uppercase tracking-widest text-[#1A1A1A]">
              <ChevronLeft strokeWidth={1} className="w-6 h-6" /> Left
            </button>
            <div className="w-12 h-px bg-[#1A1A1A]/20" />
            <button className="flex items-center gap-2 text-sm font-semibold hover:text-[#D62828] transition-colors uppercase tracking-widest text-[#1A1A1A]">
              Right <ChevronRight strokeWidth={1} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Collection Pill Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Small Pill Left */}
          <div className="w-full md:w-1/4 aspect-square md:aspect-[3/4] bg-[#1A1A1A]/[0.03] rounded-[4rem] flex flex-col items-center justify-center p-8 border border-[#1A1A1A]/[0.05] group hover:bg-[#1A1A1A]/[0.05] transition-colors cursor-pointer">
            <img 
              src={projects[0].image} 
              alt={projects[0].name}
              className="w-[80%] object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
            />
            <p className="mt-8 font-semibold text-[#1A1A1A]/60 tracking-wider text-sm">{projects[0].name}</p>
          </div>

          {/* Large Pill Center */}
          <div className="w-full md:w-2/4 aspect-square bg-[#1A1A1A]/[0.03] rounded-[4rem] md:rounded-[6rem] flex flex-col items-center justify-center p-12 border border-[#1A1A1A]/[0.05] group hover:bg-[#1A1A1A]/[0.05] transition-colors cursor-pointer">
            <img 
              src={projects[1].image} 
              alt={projects[1].name}
              className="w-[90%] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
            <p className="mt-12 font-bold text-[#1A1A1A]/80 tracking-widest uppercase">{projects[1].name}</p>
          </div>

          {/* Small Pill Right */}
          <div className="w-full md:w-1/4 aspect-square md:aspect-[3/4] bg-[#1A1A1A]/[0.03] rounded-[4rem] flex flex-col items-center justify-center p-8 border border-[#1A1A1A]/[0.05] group hover:bg-[#1A1A1A]/[0.05] transition-colors cursor-pointer">
            <img 
              src={projects[2].image} 
              alt={projects[2].name}
              className="w-[80%] object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
            />
            <p className="mt-8 font-semibold text-[#1A1A1A]/60 tracking-wider text-sm">{projects[2].name}</p>
          </div>

        </div>

      </div>
    </section>
  );
}
