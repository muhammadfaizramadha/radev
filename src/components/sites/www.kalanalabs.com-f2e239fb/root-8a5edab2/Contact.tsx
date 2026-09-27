"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = ["UI/UX Design", "Web Development", "Mobile Apps", "Lainnya"];

  return (
    <section id="kontak" className="pt-24 pb-12 bg-[#f8f9fc] text-[#0b0c10] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pre-Footer CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-[#122d78]" />
          <div className="absolute inset-0 bg-[url('/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/noise.png')] opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#D62828] leading-tight mb-6">
                Siap Punya Website yang Bikin Bisnis Anda Lebih Dipercaya?
              </h2>
              <p className="text-blue-100 text-lg">
                Kami bantu Anda merancang dan membangun produk digital yang profesional, cepat, dan sesuai kebutuhan - mulai dari konsultasi gratis, tanpa komitmen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link 
                href="#form"
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap text-center"
              >
                Konsultasi Gratis
              </Link>
              <Link 
                href="#paket"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-[#D62828] rounded-full font-bold hover:bg-[#D62828]/10 transition-colors whitespace-nowrap text-center"
              >
                Lihat Paket Harga
              </Link>
            </div>
          </div>
        </div>

        {/* Contact & Form Section */}
        <div id="form" className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6 text-balance">
              Mari Mulai Sesuatu yang Luar Biasa
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Ceritakan kebutuhan bisnis Anda. Tim ahli kami siap mendengarkan, menganalisis, dan memberikan solusi terbaik untuk pertumbuhan digital Anda.
            </p>

            <div className="flex flex-col gap-8">
              <a href="mailto:kalanalabs@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#D62828] flex items-center justify-center shrink-0 group-hover:bg-[#D62828] transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 group-hover:text-[#D62828] transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#D62828]/70 mb-1 tracking-wider">EMAIL</h4>
                  <p className="text-lg font-semibold group-hover:text-blue-600 transition-colors">kalanalabs@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/6285196811722" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#D62828] flex items-center justify-center shrink-0 group-hover:bg-[#D62828] transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 group-hover:text-[#D62828] transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#D62828]/70 mb-1 tracking-wider">WHATSAPP</h4>
                  <p className="text-lg font-semibold group-hover:text-blue-600 transition-colors">+62 851 9681 1722</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#D62828] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#D62828]/70 mb-1 tracking-wider">LOKASI</h4>
                  <p className="text-lg font-semibold">Purwokerto, Jawa Tengah, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold font-heading mb-2">Ceritakan Kebutuhan Anda</h3>
            <p className="text-gray-500 mb-8">Isi form di bawah ini dan kami akan segera menghubungi Anda via WhatsApp.</p>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Layanan yang Dibutuhkan *</label>
                <div className="flex flex-wrap gap-3">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors border ${
                        selectedService === service 
                        ? 'bg-[#FFF3E0] text-[#D62828] border-[#0b0c10]' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap *</label>
                  <input type="text" placeholder="Cth: Arif Rahman" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor WhatsApp *</label>
                  <input type="tel" placeholder="Cth: 08123456789" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Alamat Email</label>
                <input type="email" placeholder="Cth: arif@perusahaan.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Detail Proyek *</label>
                <textarea rows={4} placeholder="Ceritakan gambaran singkat proyek Anda, tujuan yang ingin dicapai, dan estimasi waktu jika ada..." className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none" required></textarea>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
                <button 
                  type="submit" 
                  disabled={!selectedService}
                  className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold transition-all ${
                    selectedService 
                    ? 'bg-[#D62828] text-[#D62828] hover:bg-[#D62828] shadow-lg shadow-blue-600/30' 
                    : 'bg-gray-200 text-[#D62828]/70 cursor-not-allowed'
                  }`}
                >
                  Kirim via WhatsApp
                </button>
                {!selectedService && (
                  <p className="text-sm text-[#D62828]/70">* Silakan pilih Layanan yang Dibutuhkan terlebih dahulu</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
