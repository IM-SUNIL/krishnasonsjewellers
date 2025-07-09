'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Bus, Train, Star, Award, Shield } from 'lucide-react';

const businessHours = [
  { day: 'Monday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Tuesday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Thursday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Friday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '11:00 AM - 9:00 PM' }
];

const directions = [
  {
    mode: 'By Car',
    icon: Car,
    description: 'Located in Vision One Mall, easily accessible from Bhumkar Chowk Road. Ample parking available.',
    time: '15-20 mins from Pune Station'
  },
  {
    mode: 'By Bus',
    icon: Bus,
    description: 'Multiple bus routes connect to Tathawade. Get down at Vision One Mall bus stop.',
    time: '25-30 mins from Pune Station'
  },
  {
    mode: 'By Train',
    icon: Train,
    description: 'Nearest railway station is Pune Junction. Take a cab or bus from there.',
    time: '20-25 mins from Pune Station'
  }
];

const amenities = [
  { icon: Shield, title: 'Secure Parking', description: 'Free parking available in mall premises' },
  { icon: Star, title: 'Expert Consultation', description: 'Professional jewellery experts to guide you' },
  { icon: Award, title: 'BIS Hallmark', description: 'All jewellery certified with BIS Hallmark' },
  { icon: Clock, title: 'Extended Hours', description: 'Open 7 days a week, 11 AM to 9 PM' }
];

export default function VisitUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-maroon to-[#600000] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Visit Our Store
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gold/90 max-w-3xl mx-auto">
              Experience luxury in person at our beautiful store in Vision One Mall
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16 bg-white dark:bg-[#181010]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-8">
                Store Location
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                      Address
                    </h3>
                    <p className="text-gray-700 dark:text-gold/80 font-inter leading-relaxed">
                      Vision One Mall, Bhumkar Chowk Road,<br />
                      Tathawade, Pune, Maharashtra 411057
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                      Phone Number
                    </h3>
                    <a 
                      href="tel:8888088140" 
                      className="text-gray-700 dark:text-gold/80 font-inter hover:text-gold transition-colors duration-300 text-lg"
                    >
                      8888088140
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-700 dark:text-gold/80 font-inter">
                      Monday - Sunday: 11:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/918888088140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury bg-maroon text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300 inline-block mr-4"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:8888088140"
                  className="btn-luxury bg-transparent border-2 border-maroon text-maroon dark:text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-maroon hover:text-gold transition-all duration-300 inline-block"
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#181010] rounded-2xl p-6 shadow-luxury"
            >
              <div className="aspect-video bg-gradient-to-br from-gold/20 to-maroon/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="text-maroon mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                    Google Maps
                  </h3>
                  <p className="text-gray-600 dark:text-gold/70 font-inter mb-4">
                    Interactive map will be embedded here
                  </p>
                  <a
                    href="https://maps.google.com/?q=Vision+One+Mall+Tathawade+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury bg-maroon text-gold px-6 py-3 rounded-full text-sm font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-cream dark:bg-[#2a1f1f]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              Business Hours
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80">
              We&apos;re open 7 days a week for your convenience
            </p>
          </motion.div>

          <div className="bg-white dark:bg-[#181010] rounded-2xl p-8 shadow-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex justify-between items-center p-4 rounded-lg ${
                    schedule.day === 'Sunday' 
                      ? 'bg-gradient-to-r from-gold/10 to-maroon/10 border border-gold/20' 
                      : 'bg-gray-50 dark:bg-[#2a1f1f]'
                  }`}
                >
                  <span className="font-playfair font-semibold text-maroon dark:text-gold">
                    {schedule.day}
                  </span>
                  <span className="font-inter text-gray-700 dark:text-gold/80">
                    {schedule.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white dark:bg-[#181010]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              How to Reach Us
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Multiple transportation options to reach our store conveniently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl p-8 text-center shadow-luxury"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <direction.icon size={32} className="text-maroon" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-4">
                  {direction.mode}
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter mb-4">
                  {direction.description}
                </p>
                <div className="bg-gold/10 text-maroon dark:text-gold px-4 py-2 rounded-full text-sm font-inter font-semibold">
                  {direction.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-cream dark:bg-[#2a1f1f]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              Store Amenities
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              We provide a comfortable and luxurious shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl p-8 text-center shadow-luxury"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <amenity.icon size={32} className="text-maroon" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-4">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Visit?
            </h2>
            <p className="text-xl font-inter text-gold/80 mb-8 max-w-2xl mx-auto">
              Plan your visit today and experience our beautiful collection in person
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:8888088140"
                className="btn-luxury bg-gold text-maroon px-8 py-4 rounded-full text-lg font-inter font-semibold shadow-gold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="inline mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/918888088140"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 