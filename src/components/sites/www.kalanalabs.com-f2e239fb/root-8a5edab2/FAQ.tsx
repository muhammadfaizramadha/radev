"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    num: "01",
    question: "Berapa lama proses pembuatan website/aplikasi?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk website profil perusahaan standar biasanya memakan waktu 2-4 minggu, sedangkan sistem informasi atau aplikasi custom bisa memakan waktu 2-4 bulan."
  },
  {
    num: "02",
    question: "Apakah ada biaya bulanan/tahunan?",
    answer: "Ya, terdapat biaya perpanjangan tahunan untuk domain dan hosting/server. Kami akan memberikan rincian biaya ini secara transparan di awal penawaran agar Anda bisa merencanakan budget dengan baik."
  },
  {
    num: "03",
    question: "Apakah saya bisa request revisi?",
    answer: "Tentu. Kami memberikan kuota revisi sesuai dengan paket yang Anda pilih. Revisi biasanya dilakukan pada tahap desain visual (UI/UX) dan tahap final testing sebelum perilisan."
  },
  {
    num: "04",
    question: "Apa saja metode pembayaran yang tersedia?",
    answer: "Kami menerima transfer bank (BCA, BRI, BNI, Mandiri), dompet digital (GoPay, OVO, Dana), dan QRIS. Sistem pembayaran kami terbagi menjadi DP 50% di awal dan pelunasan setelah proyek selesai dan disetujui."
  },
  {
    num: "05",
    question: "Apakah saya akan mendapatkan source code proyeknya?",
    answer: "Penyerahan source code tersedia di paket tertentu (biasanya paket Korporat/Premium) seperti yang tercantum di benefit paket masing-masing. Untuk paket lainnya, Anda tetap memiliki akses penuh ke website/aplikasi yang kami buat."
  },
  {
    num: "06",
    question: "Apakah Kalana Labs melayani klien dari luar Purwokerto?",
    answer: "Tentu. Kami sudah melayani klien dari berbagai kota di Indonesia secara remote. Semua proses - konsultasi, briefing, revisi, hingga serah terima - bisa dilakukan secara online melalui WhatsApp, Zoom, atau platform lain yang Anda prefer."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-[#0b0c10] font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-colors duration-300 ${isOpen ? 'bg-blue-50/50 border-blue-100' : 'bg-white border-gray-100 hover:border-gray-200'}`}
              >
                <button 
                  onClick={() => toggleOpen(index)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4 text-lg font-bold">
                    <span className="text-blue-400 font-heading text-xl">{faq.num}</span>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed pl-10 border-l-2 border-blue-100 ml-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
