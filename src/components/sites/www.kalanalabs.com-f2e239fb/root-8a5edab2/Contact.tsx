"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    'Landing Page', 'Website Profil', 'E-Commerce', 
    'Sistem Custom', 'UI/UX Design', 'Lainnya'
  ];

  return (
    <section id="kontak" className="py-24 bg-[#FFF3E0] font-sans selection:bg-[#D62828] selection:text-[#FFF3E0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Top CTA Banner - Cleaned up to match Apple minimal */}
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#1A1A1A]/5 mb-24 border border-[#1A1A1A]/10">
          
          <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                Siap Punya Website yang Bikin Bisnis Anda Lebih Dipercaya?
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm md:text-xl font-medium">
                Kami merancang produk digital yang profesional, presisi, dan sesuai dengan visi Anda. Mulai dengan konsultasi gratis tanpa komitmen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link 
                href="#form"
                className="w-full sm:w-auto px-8 py-4 bg-[#D62828] text-[#FFF3E0] rounded-full font-bold hover:bg-[#b01e1e] transition-colors whitespace-nowrap text-center shadow-lg shadow-[#D62828]/20"
              >
                Mulai Proyek
              </Link>
            </div>
          </div>
        </div>

        {/* Contact & Form Section */}
        <div id="form" className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start pt-12 border-t border-[#1A1A1A]/10">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="text-2xl md:text-5xl font-bold font-heading text-[#1A1A1A] leading-[1.1] tracking-tight mb-6 text-balance">
              Mari Mulai<br />Sesuatu yang Hebat.
            </h2>
            <p className="text-sm md:text-lg text-[#1A1A1A]/70 font-medium mb-16 leading-relaxed">
              Ceritakan kebutuhan bisnis Anda. Tim kami siap memberikan solusi elegan untuk pertumbuhan digital Anda.
            </p>

            <div className="flex flex-col gap-10">
              <a href="mailto:radev@gmail.com" className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A]/5 transition-colors">
                  <Mail strokeWidth={1.5} className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]/50 mb-1 tracking-widest uppercase">Email</h4>
                  <p className="text-sm md:text-lg font-semibold text-[#1A1A1A] group-hover:text-[#D62828] transition-colors">radev@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/6285196811722" className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A]/5 transition-colors">
                  <Phone strokeWidth={1.5} className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]/50 mb-1 tracking-widest uppercase">WhatsApp</h4>
                  <p className="text-sm md:text-lg font-semibold text-[#1A1A1A] group-hover:text-[#D62828] transition-colors">+62 851 9681 1722</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center shrink-0">
                  <MapPin strokeWidth={1.5} className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]/50 mb-1 tracking-widest uppercase">Lokasi</h4>
                  <p className="text-sm md:text-lg font-semibold text-[#1A1A1A]">Purwokerto, Jawa Tengah</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <h3 className="text-lg md:text-2xl font-bold font-heading text-[#1A1A1A] mb-2 tracking-tight">Ceritakan Kebutuhan Anda</h3>
            <p className="text-[#1A1A1A]/60 font-medium mb-10">Isi form di bawah ini dan kami akan segera menghubungi Anda via WhatsApp.</p>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-4 tracking-wide uppercase">Layanan yang Dibutuhkan</label>
                <div className="flex flex-wrap gap-3">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-6 py-3 rounded-full text-sm font-semibold transition-all border ${
                        selectedService === service 
                        ? 'bg-[#1A1A1A] text-[#FFF3E0] border-[#1A1A1A]' 
                        : 'bg-transparent text-[#1A1A1A]/70 border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-3 tracking-wide uppercase">Nama Lengkap</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-transparent border border-[#1A1A1A]/20 rounded-xl focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-all font-medium" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-3 tracking-wide uppercase">Nomor WhatsApp</label>
                  <input type="tel" placeholder="+62 812 3456 7890" className="w-full px-5 py-4 bg-transparent border border-[#1A1A1A]/20 rounded-xl focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-all font-medium" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-3 tracking-wide uppercase">Detail Proyek</label>
                <textarea rows={4} placeholder="Ceritakan gambaran singkat proyek Anda..." className="w-full px-5 py-4 bg-transparent border border-[#1A1A1A]/20 rounded-xl focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 transition-all resize-none font-medium" required></textarea>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
                <button 
                  type="submit" 
                  disabled={!selectedService}
                  className={`w-full sm:w-auto px-10 py-4 rounded-full font-bold transition-all ${
                    selectedService 
                    ? 'bg-[#D62828] text-[#FFF3E0] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#D62828]/20' 
                    : 'bg-[#1A1A1A]/10 text-[#1A1A1A]/40 cursor-not-allowed'
                  }`}
                >
                  Kirim Pesan
                </button>
                {!selectedService && (
                  <p className="text-sm font-medium text-[#D62828]/80 animate-pulse">
                    * Pilih layanan terlebih dahulu
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
