export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Diskusi & Briefing',
      desc: 'Sesi konsultasi awal untuk memahami kebutuhan, target audiens, dan tujuan bisnis Anda secara mendetail.',
    },
    {
      num: '02',
      title: 'Desain UI/UX',
      desc: 'Pembuatan wireframe dan purwarupa (prototype) visual yang menarik untuk memastikan alur pengguna optimal.',
    },
    {
      num: '03',
      title: 'Pengembangan',
      desc: 'Proses penulisan kode (coding) oleh tim ahli kami menggunakan teknologi terbaru yang aman dan terukur.',
    },
    {
      num: '04',
      title: 'Serah Terima',
      desc: 'Fase uji coba menyeluruh (testing) sebelum peluncuran akhir, dilanjutkan dengan serah terima proyek.',
    },
  ];

  return (
    <section id="proses" className="py-24 bg-[#FFF3E0] text-[#0b0c10] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl font-bold font-heading leading-tight mb-6">
            4 Langkah Mudah Memulai Proyek Anda
          </h2>
          <p className="text-sm md:text-lg text-[#1A1A1A]/70">
            Kami akan memandu Anda secara transparan dari briefing kebutuhan hingga serah terima melalui 4 langkah praktis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-3xl bg-[#FFF3E0] border border-[#1A1A1A]/10 hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-6xl font-black text-[#D62828] mb-6 font-heading">
                {step.num}
              </div>
              <h3 className="text-base md:text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
