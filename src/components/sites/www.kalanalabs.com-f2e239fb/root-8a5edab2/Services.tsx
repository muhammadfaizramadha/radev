import { Monitor, Smartphone, PenTool, Database } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Kami membangun website profesional, cepat, responsif, dan ramah SEO untuk memperkuat kehadiran online bisnis Anda.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Rancangan antarmuka yang menarik, modern, dan intuitif untuk memberikan pengalaman terbaik bagi pengguna aplikasi Anda.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: 'Mobile Apps',
    description: 'Pengembangan aplikasi mobile berbasis Android maupun iOS dengan performa tinggi menggunakan teknologi terkini.',
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: 'Sistem Informasi',
    description: 'Pembuatan platform digital khusus (custom) yang disesuaikan untuk mengelola data dan operasional bisnis Anda.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-[#f8f9fc] text-[#0b0c10] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Solusi Digital Lengkap untuk Bisnis Anda
          </h2>
          <p className="text-lg text-gray-600">
            Kami menawarkan berbagai layanan pengembangan produk digital yang dirancang khusus untuk memenuhi kebutuhan unik industri Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
