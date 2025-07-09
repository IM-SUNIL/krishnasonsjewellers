'use client';
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("pj-dark");
    if (saved === "1") setDark(true);
  }, []);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("pj-dark", "1");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("pj-dark", "0");
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="ml-4 px-3 py-2 rounded-full border border-gold bg-white/80 dark:bg-maroon/80 text-maroon dark:text-gold shadow-lg hover:bg-gold hover:text-maroon transition-all duration-300 hover:scale-105"
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/918888088140"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Priyanka Jewellers - Where Elegance Meets Excellence</title>
        <meta name="description" content="Pune's most trusted jeweller for generations. Specializing in gold, diamond, and custom bridal jewellery with BIS Hallmark assurance." />
        <meta name="keywords" content="jewellery, gold, diamond, bridal sets, Pune, Priyanka Jewellers, Vision One Mall" />
        <meta name="author" content="Priyanka Jewellers" />
        <meta property="og:title" content="Priyanka Jewellers - Where Elegance Meets Excellence" />
        <meta property="og:description" content="Pune's most trusted jeweller for generations. Specializing in gold, diamond, and custom bridal jewellery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://priyankajewellers.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-white text-[#3d1f1f] font-sans dark:bg-[#181010] dark:text-gold`}>
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-maroon/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-maroon font-bold text-lg">PJ</span>
              </div>
              <div>
                <span className="text-2xl font-playfair font-bold text-maroon dark:text-gold tracking-wide">Priyanka Jewellers</span>
                <p className="text-xs text-gray-600 dark:text-gold/70 font-inter">Where Elegance Meets Excellence</p>
              </div>
            </Link>
            <ul className="hidden md:flex gap-8 text-lg font-medium font-inter">
              <li><Link href="/about" className="hover:text-gold transition-colors duration-300 relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/collection" className="hover:text-gold transition-colors duration-300 relative group">
                Collection
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors duration-300 relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/visit-us" className="hover:text-gold transition-colors duration-300 relative group">
                Visit Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="tel:8888088140" className="hidden sm:flex items-center gap-2 text-maroon dark:text-gold hover:text-gold transition-colors duration-300">
                <Phone size={18} />
                <span className="font-inter font-medium">8888088140</span>
              </a>
              <DarkModeToggle />
            </div>
          </nav>
        </header>
        <main className="min-h-[80vh]">{children}</main>
        <footer className="bg-gradient-to-b from-maroon to-[#600000] text-gold py-12 shadow-inner dark:bg-gradient-to-b dark:from-[#181010] dark:to-[#0f0a0a]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Priyanka Jewellers</h3>
                <p className="text-gold/80 font-inter mb-4">Where Elegance Meets Excellence</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gold hover:text-white transition-colors duration-300">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gold hover:text-white transition-colors duration-300">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 font-inter">
                  <li><Link href="/about" className="text-gold/80 hover:text-gold transition-colors duration-300">About Us</Link></li>
                  <li><Link href="/collection" className="text-gold/80 hover:text-gold transition-colors duration-300">Our Collections</Link></li>
                  <li><Link href="/gallery" className="text-gold/80 hover:text-gold transition-colors duration-300">Gallery</Link></li>
                  <li><Link href="/contact" className="text-gold/80 hover:text-gold transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-4">Contact Info</h4>
                <div className="space-y-3 font-inter">
                  <div className="flex items-center gap-2 text-gold/80">
                    <MapPin size={16} />
                    <span>Vision One Mall, Bhumkar Chowk Rd, Tathawade, Pune, Maharashtra 411057</span>
                  </div>
                  <div className="flex items-center gap-2 text-gold/80">
                    <Phone size={16} />
                    <a href="tel:8888088140" className="hover:text-gold transition-colors duration-300">8888088140</a>
                  </div>
                  <div className="flex items-center gap-2 text-gold/80">
                    <Clock size={16} />
                    <span>Mon-Sun: 11AM-9PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-4">Trust & Quality</h4>
                <div className="space-y-2 font-inter text-gold/80">
                  <p>✓ BIS Hallmark Certified</p>
                  <p>✓ 25+ Years of Trust</p>
                  <p>✓ Custom Designs</p>
                  <p>✓ Expert Consultation</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gold/20 pt-8 text-center">
              <p className="font-inter text-gold/80">
                Priyanka Jewellers © {new Date().getFullYear()} • Website designed by Sunil Singh 😎
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
