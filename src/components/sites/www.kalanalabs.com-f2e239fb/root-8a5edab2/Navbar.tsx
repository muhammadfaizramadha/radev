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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between rounded-full transition-all duration-300 px-6 ${
            scrolled 
              ? "bg-[#0b0c10]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-3" 
              : "bg-transparent border border-transparent py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <img 
              src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/logo-kalana.svg" 
              alt="Kalana Labs Logo" 
              className="h-7 w-auto" 
            />
          </Link>

          {/* Desktop Nav - Pill Style */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-white text-[#0b0c10] shadow-md shadow-white/10" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
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
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Mulai Proyek
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2 bg-white/10 rounded-full border border-white/10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-[#12141d]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-2 shadow-2xl transition-all duration-300 origin-top ${
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
                  ? "bg-white/10 text-white" 
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="pt-4 mt-2 border-t border-white/10">
          <Link 
            href="/kontak" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-6 py-4 bg-blue-600 text-white rounded-2xl text-base font-bold shadow-lg"
          >
            Mulai Proyek
          </Link>
        </div>
      </div>
    </header>
  );
}
