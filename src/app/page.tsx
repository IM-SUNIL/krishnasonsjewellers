'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Star, Phone, MapPin, Clock, MessageCircle, Sparkles, Crown, Gem, Heart } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: "Gold Jewellery",
    description: "Timeless elegance in pure gold",
    image: "/gallery/gold-1.jpg",
    category: "gold"
  },
  {
    id: 2,
    title: "Diamond Collection",
    description: "Sparkling brilliance in every piece",
    image: "/gallery/diamond-1.jpg",
    category: "diamond"
  },
  {
    id: 3,
    title: "Bridal Sets",
    description: "Complete bridal jewellery sets",
    image: "/gallery/bridal-1.jpg",
    category: "bridal"
  },
  {
    id: 4,
    title: "Temple Jewellery",
    description: "Traditional temple jewellery designs",
    image: "/gallery/temple-1.jpg",
    category: "temple"
  },
  {
    id: 5,
    title: "Everyday Wear",
    description: "Elegant pieces for daily wear",
    image: "/gallery/everyday-1.jpg",
    category: "everyday"
  },
  {
    id: 6,
    title: "Kids & Men's Jewellery",
    description: "Special collections for all ages",
    image: "/gallery/kids-1.jpg",
    category: "kids"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing quality and beautiful designs. The bridal set I bought was perfect for my wedding!",
    image: "/testimonials/priya.jpg"
  },
  {
    id: 2,
    name: "Rajesh Patel",
    rating: 5,
    comment: "Trusted jeweller for 15 years. Always provides genuine BIS hallmark jewellery.",
    image: "/testimonials/rajesh.jpg"
  },
  {
    id: 3,
    name: "Anjali Deshmukh",
    rating: 5,
    comment: "Excellent customer service and wide variety of designs. Highly recommended!",
    image: "/testimonials/anjali.jpg"
  }
];

const features = [
  {
    icon: Crown,
    title: "BIS Hallmark Certified",
    description: "All our jewellery is BIS hallmark certified for purity assurance"
  },
  {
    icon: Sparkles,
    title: "25+ Years of Trust",
    description: "Serving Pune with excellence and trust for over two decades"
  },
  {
    icon: Gem,
    title: "Custom Designs",
    description: "Create your own unique jewellery with our expert craftsmen"
  },
  {
    icon: Heart,
    title: "Expert Consultation",
    description: "Get professional advice from our experienced jewellery experts"
  }
];

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with luxury gradient and jewellery showcase image */}
        <div className="absolute inset-0">
          <img src="/gallery/showcase.jpg" alt="Jewellery Showcase" className="w-full h-full object-cover object-center opacity-60" />
          <div className="absolute inset-0 bg-gradient-luxury opacity-90"></div>
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gold/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-maroon/20 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight drop-shadow-lg">
              Krishna Sons Jewellers
            </h1>
            <p className="text-xl md:text-2xl font-inter mb-8 text-gold/90 drop-shadow">
              Crafting Memories Since 1935
            </p>
            <p className="text-lg md:text-xl mb-12 text-white/90 font-inter max-w-2xl mx-auto drop-shadow">
              F-26-A, Radial Road Number 1, Block F, Connaught Place, New Delhi, Delhi 110001.<br />
              Phone: 098100 39192
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => scrollToSection('collections')}
                className="btn-luxury bg-gold text-maroon px-8 py-4 rounded-full text-lg font-inter font-semibold shadow-gold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Collection
              </motion.button>
              <motion.a
                href="tel:09810039192"
                className="btn-luxury bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="inline mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('collections')}
            className="text-white hover:text-gold transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-cream dark:bg-[#2a1f1f]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              Our Collections
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Discover our exquisite range of jewellery crafted with precision and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl overflow-hidden shadow-luxury"
              >
                <div className="h-64 bg-gradient-to-br from-gold/20 to-maroon/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown size={32} className="text-maroon" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold">
                      {collection.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gold/70 font-inter mb-4">
                    {collection.description}
                  </p>
                  <Link
                    href={`/collection?category=${collection.category}`}
                    className="btn-luxury bg-maroon text-gold px-6 py-3 rounded-full text-sm font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300 inline-block"
                  >
                    View More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-[#181010]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              We are committed to providing the highest quality jewellery and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <feature.icon size={40} className="text-maroon" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-maroon to-[#600000] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl font-inter text-gold/80 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gold/90 font-inter mb-6 italic">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-maroon font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-gold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gold/70 text-sm font-inter">Happy Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-cream dark:bg-[#2a1f1f]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              Visit Our Store
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Experience luxury in person at our beautiful store in Dwarka, New Delhi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gold/70 font-inter">
                      Shop No. G-5 G-6, Plot No. 2, H.L Galeria, Sector 12, Ashirwad Chowk, Dwarka, New Delhi, Delhi 110075
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold">
                      Phone
                    </h3>
                    <a href="tel:07683007443" className="text-gray-600 dark:text-gold/70 font-inter hover:text-gold transition-colors duration-300">
                      076830 07443
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold">
                      Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gold/70 font-inter">
                      Monday - Sunday: 11:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/visit-us"
                  className="btn-luxury bg-maroon text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300 inline-block"
                >
                  Get Directions
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#181010] rounded-2xl p-6 shadow-luxury"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                {/* Google Maps iframe for Dwarkadheesh Jewellers */}
                <iframe
                  src="https://www.google.com/maps?q=Shop+No.+G-5+G-6,+Plot+No.+2,+H.L+Galeria,+Sector+12,+Ashirwad+Chowk,+Dwarka,+New+Delhi,+Delhi+110075&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dwarkadheesh Jewellers Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-maroon to-[#600000] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-xl font-inter text-gold/80 mb-8 max-w-2xl mx-auto">
              Visit our store today or contact us to schedule a consultation with our expert jewellers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:07683007443"
                className="btn-luxury bg-gold text-maroon px-8 py-4 rounded-full text-lg font-inter font-semibold shadow-gold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="inline mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/917683007443"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} className="inline mr-2" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
