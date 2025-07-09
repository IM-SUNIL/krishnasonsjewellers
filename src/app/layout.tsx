'use client';
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

// Update font imports and variables as needed for luxury look
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

// WhatsApp floating button with correct number
function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/919810039192" // Krishna Sons Jewellers WhatsApp
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
        {/* SEO Meta Tags for Krishna Sons Jewellers */}
        <title>Krishna Sons Jewellers - Trusted Jewellers Since Generations | Connaught Place, New Delhi</title>
        <meta name="description" content="Krishna Sons Jewellers, Connaught Place, New Delhi - Hallmark Certified Gold, Diamond, Bridal, and Custom Jewellery. Trusted since 1935. F-26-A, Radial Road Number 1, Block F, Connaught Place, New Delhi, Delhi 110001. Phone: 098100 39192" />
        <meta name="keywords" content="jewellery, gold, diamond, hallmark, bridal, Connaught Place, New Delhi, Krishna Sons Jewellers, custom jewellery" />
        <meta name="author" content="Krishna Sons Jewellers" />
        <meta property="og:title" content="Krishna Sons Jewellers - Trusted Jewellers Since Generations" />
        <meta property="og:description" content="Hallmark Certified Gold, Diamond, Bridal, and Custom Jewellery in Connaught Place, New Delhi. Trusted since 1935." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnasonsjewellers.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-white text-[#3d1f1f] font-sans dark:bg-[#181010] dark:text-gold`}>
        {/* Header with updated branding and tagline */}
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-maroon/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-maroon font-bold text-lg">KSJ</span>
              </div>
              <div>
                <span className="text-2xl font-playfair font-bold text-maroon dark:text-gold tracking-wide">Krishna Sons Jewellers</span>
                <p className="text-xs text-gray-600 dark:text-gold/70 font-inter">Trusted Jewellers Since Generations</p>
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
              {/* Update phone number for quick call */}
              <a href="tel:09810039192" className="hidden sm:flex items-center gap-2 text-maroon dark:text-gold hover:text-gold transition-colors duration-300">
                <Phone size={18} />
                <span className="font-inter font-medium">098100 39192</span>
              </a>
              <DarkModeToggle />
            </div>
          </nav>
        </header>
        <main className="min-h-[80vh]">{children}</main>
        {/* Footer with updated branding, address, and social icons */}
        <footer className="bg-gradient-to-b from-maroon to-[#600000] text-gold py-12 shadow-inner dark:bg-gradient-to-b dark:from-[#181010] dark:to-[#0f0a0a]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Krishna Sons Jewellers</h3>
                <p className="text-gold/80 font-inter mb-4">Trusted Jewellers Since Generations</p>
                <div className="flex gap-4">
                  {/* Update social links as needed */}
                  <a href="https://instagram.com/krishnasonsjewellers" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors duration-300">
                    <Instagram size={24} />
                  </a>
                  <a href="https://wa.me/919810039192" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors duration-300">
                    <MessageCircle size={24} />
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
                    <span>F-26-A, Radial Road Number 1, Block F, Connaught Place, New Delhi, Delhi 110001</span>
                  </div>
                  <div className="flex items-center gap-2 text-gold/80">
                    <Phone size={16} />
                    <a href="tel:09810039192" className="hover:text-gold transition-colors duration-300">098100 39192</a>
                  </div>
                  <div className="flex items-center gap-2 text-gold/80">
                    <Clock size={16} />
                    <span>Mon-Sun: 11AM-8PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-4">Trust & Quality</h4>
                <div className="space-y-2 font-inter text-gold/80">
                  <p>✓ Hallmark Certified</p>
                  <p>✓ Since 1935</p>
                  <p>✓ Custom Orders</p>
                  <p>✓ Expert Consultation</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gold/20 pt-8 text-center">
              <p className="font-inter text-gold/80">
                © Since 1935 - Krishna Sons Jewellers | All rights reserved
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
