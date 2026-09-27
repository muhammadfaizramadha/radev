"use client";

import { Monitor, Smartphone, PenTool, Database } from 'lucide-react';

const services = [
  {
    icon: <Monitor strokeWidth={1.5} className="w-8 h-8 text-[#D62828]" />,
    title: 'Web Development',
    description: 'Kami membangun website profesional, responsif, dan fungsional untuk menumbuhkan kehadiran digital Anda.',
  },
  {
    icon: <PenTool strokeWidth={1.5} className="w-8 h-8 text-[#D62828]" />,
    title: 'UI/UX Design',
    description: 'Antarmuka yang bersih, modern, dan berfokus pada kemudahan pengguna.',
  },
  {
    icon: <Smartphone strokeWidth={1.5} className="w-8 h-8 text-[#D62828]" />,
    title: 'Mobile Apps',
    description: 'Pengalaman native yang cepat dan mulus untuk iOS dan Android.',
  },
  {
    icon: <Database strokeWidth={1.5} className="w-8 h-8 text-[#D62828]" />,
    title: 'Sistem Informasi',
    description: 'Platform khusus yang disederhanakan untuk mengelola bisnis Anda.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-32 bg-[#FFF3E0] text-[#D62828] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header - Simple typography, heavy whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tight max-w-xl">
            Sederhana di luar.<br />Kuat di dalam.
          </h2>
          <p className="text-sm md:text-xl text-[#D62828]/70 max-w-sm leading-relaxed font-medium pb-2">
            Layanan kami berfokus pada esensi. Tanpa fitur berlebih.
          </p>
        </div>

        {/* Services Grid - Clean lines, no boxes, just typography and space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start border-t border-[#D62828]/10 pt-8 transition-colors duration-500 hover:border-[#D62828]/40"
            >
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-[#D62828]/70 leading-relaxed text-sm md:text-lg font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
