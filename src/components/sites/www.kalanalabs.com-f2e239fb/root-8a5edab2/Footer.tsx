import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FFF3E0] text-[#D62828] py-12 border-t border-[#D62828]/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/logo-kalana.svg" alt="Kalana Labs Logo" className="h-8" />
          </Link>
          <p className="text-sm text-[#D62828]/70 leading-relaxed mt-2">
            Kami adalah agensi digital asal Purwokerto yang fokus membangun produk IT fungsional dan estetis untuk membantu bisnis Anda berkembang secara eksponensial.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="https://www.instagram.com" className="text-[#D62828]/70 hover:text-[#D62828] transition-colors">
              <span className="sr-only">Instagram</span>
              {/* Simple Instagram Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.tiktok.com" className="text-[#D62828]/70 hover:text-[#D62828] transition-colors">
              <span className="sr-only">TikTok</span>
              {/* Simple TikTok Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.67-6.22 1.25-.97 2.82-1.43 4.39-1.42.01 1.34 0 2.67.01 4.01-.98-.12-1.99.07-2.82.63-.78.53-1.33 1.34-1.5 2.27-.22 1.15.17 2.37 1.01 3.13.88.8 2.11 1.05 3.23.69.95-.29 1.71-1.04 2-2 .16-.54.21-1.11.21-1.67V.02h4.03z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* EKSPLORASI */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#D62828] font-semibold tracking-wide">EKSPLORASI</h3>
          <ul className="flex flex-col gap-3">
            {['Tentang Kami', 'Layanan', 'Portofolio', 'Proses Kerja', 'Kontak'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-[#D62828]/70 hover:text-[#D62828] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LAYANAN UTAMA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#D62828] font-semibold tracking-wide">LAYANAN UTAMA</h3>
          <ul className="flex flex-col gap-3">
            {['Landing Page', 'Company Profile', 'E-Commerce', 'Sistem Informasi', 'Website Portofolio', 'Desain UI/UX', 'Mobile Apps'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-[#D62828]/70 hover:text-[#D62828] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* HUBUNGI KAMI */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#D62828] font-semibold tracking-wide">HUBUNGI KAMI</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="mailto:kalanalabs@gmail.com" className="text-sm text-[#D62828]/70 hover:text-[#D62828] transition-colors flex items-start gap-2">
                <span className="font-semibold text-[#D62828]/80">EMAIL</span> <br />
                kalanalabs@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/6285196811722" className="text-sm text-[#D62828]/70 hover:text-[#D62828] transition-colors flex items-start gap-2">
                <span className="font-semibold text-[#D62828]/80">WHATSAPP</span> <br />
                +62 851 9681 1722
              </a>
            </li>
            <li>
              <span className="text-sm text-[#D62828]/70 flex items-start gap-2">
                <span className="font-semibold text-[#D62828]/80">LOKASI</span> <br />
                Purwokerto, Jawa Tengah, Indonesia
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#D62828]/10 text-center text-sm text-[#D62828]/60">
        &copy; 2026 Kalana Labs. All rights reserved.
      </div>
    </footer>
  );
}
