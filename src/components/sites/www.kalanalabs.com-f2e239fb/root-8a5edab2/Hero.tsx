import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0b0c10] font-sans">
      {/* Background Gradients */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background: 'linear-gradient(160deg, rgb(33, 63, 160) 0%, rgb(26, 50, 133) 45%, rgb(15, 31, 84) 100%)'
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1441a5]/50 to-transparent z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-heading tracking-tight">
            Ubah Ide Jadi Produk Digital Hebat
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Kami membantu merancang dan membangun produk digital fungsional dan estetis untuk membuat bisnis Anda berkembang secara eksponensial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="#konsultasi" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0b0c10] rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center"
            >
              Konsultasi Gratis
            </Link>
            <Link 
              href="#paket" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all text-center"
            >
              Lihat Paket Harga
            </Link>
          </div>
        </div>

        {/* Right Column: Image Composition */}
        <div className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative w-[90%] md:w-[80%] z-10 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <img 
              src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/kalanalabsmockup.webp" 
              alt="Kolaborasi Tim Kalana Labs" 
              className="relative w-full rounded-3xl border border-white/20 shadow-2xl z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          
          <img 
            src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/womanhero.webp" 
            alt="Kalana Labs Hero" 
            className="absolute -bottom-8 lg:-bottom-16 -left-4 lg:-left-12 w-[180px] sm:w-[240px] lg:w-[280px] z-20 pointer-events-none drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
