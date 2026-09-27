import Hero from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Hero';
import Footer from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Footer';

import AboutUs from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/AboutUs';
import Services from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Services';
import Portfolio from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Portfolio';
import Process from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Process';
import Clients from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Clients';
import Testimonials from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Testimonials';
import FAQ from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/FAQ';
import Contact from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Contact';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0b0c10]">
      {/* Header / Navbar placeholder */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto w-full mix-blend-difference text-white">
         <div className="font-bold text-xl tracking-tight">Kalana Labs</div>
         <nav className="hidden md:flex gap-8 text-sm font-medium">
           <a href="#tentang-kami" className="hover:text-blue-400 transition-colors">Tentang Kami</a>
           <a href="#layanan" className="hover:text-blue-400 transition-colors">Layanan</a>
           <a href="#portofolio" className="hover:text-blue-400 transition-colors">Portofolio</a>
           <a href="#proses" className="hover:text-blue-400 transition-colors">Proses</a>
         </nav>
         <a href="#kontak" className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200">
           Mulai Proyek
         </a>
      </header>

      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
