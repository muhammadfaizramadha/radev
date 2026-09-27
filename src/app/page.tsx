import Hero from '@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Hero';
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
    <div className="flex flex-col bg-[#0b0c10]">
      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
