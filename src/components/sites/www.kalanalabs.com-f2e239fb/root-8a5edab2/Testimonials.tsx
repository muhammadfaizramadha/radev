import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Owner UMKM Kuliner",
      content: "I've been using this service to my UMKM and it is very cool! The website is user friendly and the service from the team is exceptional. Sangat membantu penjualan online kami.",
      rating: 5,
    },
    {
      name: "Siti Rahma",
      role: "Founder Tech Startup",
      content: "Kerjasama dengan Kalana Labs sangat profesional. Mereka paham betul UI/UX yang modern sehingga aplikasi yang dibangun sangat intuitif. Proses development juga on-time.",
      rating: 5,
    },
    {
      name: "Ahmad Fauzi",
      role: "Kepala Desa",
      content: "Sistem informasi desa yang dibuat sangat memudahkan pendataan warga dan transparansi anggaran. Warga sangat terbantu. Mantap Kalana Labs!",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-[#FFF3E0] text-[#D62828] font-sans relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D62828]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D62828]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Apa Kata Klien Kami
          </h2>
          <p className="text-sm md:text-lg text-[#D62828]/70">
            Testimoni jujur dari para pemilik bisnis yang telah mempercayakan platform digital mereka bersama tim Kalana Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-3xl bg-[#1a1b23] border border-[#D62828]/10 hover:border-[#D62828]/20 transition-colors flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-[#D62828]/80 leading-relaxed mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#D62828]/20 flex items-center justify-center text-[#D62828] font-bold text-base md:text-xl uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#D62828]">{testimonial.name}</h4>
                  <p className="text-sm text-[#D62828]/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
