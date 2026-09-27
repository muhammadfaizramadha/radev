"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Kontak", href: "/kontak" },
    { name: "Tentang Kami", href: "/tentang-kami" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between rounded-full transition-all duration-500 ease-out px-6 ${
            scrolled 
              ? "bg-[#FFF3E0]/70 backdrop-blur-xl border border-[#D62828]/10 shadow-[0_8px_30px_rgb(214,40,40,0.06)] py-3" 
              : "bg-transparent border border-transparent py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 transition-transform active:scale-95">
            {/* Note: In a real scenario, you'd want a red/dark version of the logo here. For now, we apply CSS filters to make it red or text. */}
            <span className="text-xl font-bold tracking-tight text-[#D62828]">Kalana</span>
          </Link>

          {/* Desktop Nav - Clean Minimal Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#D62828]/5 rounded-full p-1 border border-[#D62828]/10 backdrop-blur-md">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-[#D62828] text-[#FFF3E0] shadow-sm shadow-[#D62828]/20" 
                      : "text-[#D62828]/70 hover:text-[#D62828] hover:bg-[#D62828]/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/kontak" 
              className="px-6 py-2.5 bg-[#D62828] text-[#FFF3E0] rounded-full text-sm font-bold hover:bg-[#b01e1e] transition-colors active:scale-95 shadow-md shadow-[#D62828]/20"
            >
              Mulai Proyek
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#D62828] z-50 p-2 bg-[#D62828]/5 rounded-full border border-[#D62828]/10 active:scale-95 transition-transform" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-[#FFF3E0]/95 backdrop-blur-xl border border-[#D62828]/10 rounded-3xl p-6 flex flex-col gap-2 shadow-[0_20px_40px_rgb(214,40,40,0.08)] transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                isActive 
                  ? "bg-[#D62828]/10 text-[#D62828]" 
                  : "text-[#D62828]/70 hover:bg-[#D62828]/5 hover:text-[#D62828]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="pt-4 mt-2 border-t border-[#D62828]/10">
          <Link 
            href="/kontak" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-6 py-4 bg-[#D62828] text-[#FFF3E0] rounded-2xl text-base font-bold shadow-lg shadow-[#D62828]/20"
          >
            Mulai Proyek
          </Link>
        </div>
      </div>
    </header>
  );
}
