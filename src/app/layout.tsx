import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lexend_Deca, Outfit, Shrikhand } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const shrikhand = Shrikhand({
  variable: "--font-dirtyline",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "RaDev - Digital Agency",
  description: "Kami adalah agensi digital asal Purwokerto yang fokus membangun produk IT fungsional dan estetis untuk membantu bisnis Anda berkembang secara eksponensial.",
  icons: {
    icon: "/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/favicon.ico",
  }
};

import Navbar from "@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Navbar";
import Footer from "@/components/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${lexendDeca.variable} ${outfit.variable} ${shrikhand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
