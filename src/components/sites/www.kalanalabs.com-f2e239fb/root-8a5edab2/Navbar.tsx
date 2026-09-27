"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Kontak", href: "/kontak" },
    { name: "Tentang Kami", href: "/tentang-kami" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/logo-kalana.svg" alt="Kalana Labs Logo" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/kontak" 
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors"
          >
            Mulai Proyek
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0b0c10] border-b border-white/10 flex flex-col p-6 gap-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold ${
                pathname === link.href ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/kontak" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 mt-4 text-center bg-blue-600 text-white rounded-full text-lg font-bold"
          >
            Mulai Proyek
          </Link>
        </div>
      )}
    </nav>
  );
}
