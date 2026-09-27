export default function AboutUs() {
  return (
    <section id="tentang-kami" className="py-24 bg-white text-[#0b0c10] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Mitra Pertumbuhan Digital Anda
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Kalana Labs adalah tim yang berdedikasi untuk menciptakan solusi teknologi inovatif. Kami menggabungkan keahlian dalam desain dan pengembangan untuk menghasilkan produk digital yang tidak hanya indah, tetapi juga berkinerja tinggi.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Dari website profil perusahaan hingga sistem informasi kompleks, kami siap membantu mewujudkan visi Anda menjadi realitas digital yang berdampak nyata pada pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Right Column: Image Grid */}
        <div className="relative grid grid-cols-2 gap-6 w-full h-full">
          <div className="flex flex-col justify-end mt-12 group">
            <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-white">
              <img 
                src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/about_tech.png" 
                alt="Solusi Teknologi Kalana Labs"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-12 group">
            <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-white">
              <img 
                src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/about_teamwork.png" 
                alt="Kerja Sama Tim Kalana Labs"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50 rounded-full blur-3xl opacity-50" />
        </div>

      </div>
    </section>
  );
}
