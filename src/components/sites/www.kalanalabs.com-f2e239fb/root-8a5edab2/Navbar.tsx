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

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#1A1A1A]/10 backdrop-blur-md transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[60] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer (Slide from right) */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-[#FFF3E0] border-l border-[#D62828]/10 shadow-[-20px_0_40px_rgba(26,26,26,0.1)] z-[70] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 pb-4 border-b border-[#D62828]/5">
          <span className="text-xl font-bold tracking-tight text-[#D62828]">Menu</span>
          <button 
            className="text-[#D62828] p-2 bg-[#D62828]/5 rounded-full border border-[#D62828]/10 active:scale-95 transition-transform" 
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-3">
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
        </div>

        <div className="p-6 border-t border-[#D62828]/5">
          <Link 
            href="/kontak" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-6 py-4 bg-[#D62828] text-[#FFF3E0] rounded-2xl text-base font-bold shadow-lg shadow-[#D62828]/20 active:scale-95 transition-transform"
          >
            Mulai Proyek
          </Link>
        </div>
      </div>
    </header>
  );
}
