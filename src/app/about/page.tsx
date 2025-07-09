'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Gem, Heart, Award, Users, Clock, Shield } from 'lucide-react';

const milestones = [
  {
    year: "1998",
    title: "Founded",
    description: "Started our journey in Pune with a vision to provide authentic jewellery"
  },
  {
    year: "2005",
    title: "BIS Hallmark",
    description: "Achieved BIS Hallmark certification for all our gold jewellery"
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Moved to Vision One Mall with a larger showroom and better facilities"
  },
  {
    year: "2023",
    title: "25+ Years",
    description: "Celebrated 25+ years of trust and excellence in jewellery business"
  }
];

const values = [
  {
    icon: Shield,
    title: "Authenticity",
    description: "Every piece is BIS Hallmark certified ensuring purity and quality"
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building relationships with customers for over 25 years"
  },
  {
    icon: Gem,
    title: "Excellence",
    description: "Crafting beautiful jewellery with precision and attention to detail"
  },
  {
    icon: Users,
    title: "Service",
    description: "Providing personalized consultation and exceptional customer service"
  }
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    experience: "25+ Years",
    specialty: "Gold & Diamond Expert"
  },
  {
    name: "Priya Sharma",
    role: "Design Head",
    experience: "15+ Years",
    specialty: "Custom Bridal Designs"
  },
  {
    name: "Amit Patel",
    role: "Master Craftsman",
    experience: "20+ Years",
    specialty: "Traditional Jewellery"
  },
  {
    name: "Neha Deshmukh",
    role: "Customer Relations",
    experience: "10+ Years",
    specialty: "Client Consultation"
  }
];

export default function AboutPage() {
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
              About Krishna Sons Jewellers
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gold/90 max-w-3xl mx-auto">
              Connaught Place’s legacy jeweller, trusted since 1935
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-[#181010]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg font-inter text-gray-700 dark:text-gold/80">
                <p>
                  Established in 1935, Krishna Sons Jewellers has been a beacon of trust and craftsmanship in the heart of Connaught Place, New Delhi. For generations, we have been dedicated to creating timeless jewellery that celebrates life’s most precious moments.
                </p>
                <p>
                  Our legacy is built on a foundation of integrity, quality, and hallmark certification. Every piece is crafted with meticulous attention to detail, blending traditional artistry with modern elegance.
                </p>
                <p>
                  As a BIS Hallmark Certified jeweller, we guarantee purity and authenticity in every creation. Our commitment to excellence has earned us the trust of countless families across generations.
                </p>
                <p>
                  Visit us at F-26-A, Radial Road Number 1, Block F, Connaught Place, New Delhi, and experience the heritage of Krishna Sons Jewellers.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold/20 to-maroon/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <img src="/gallery/vintage-placeholder.jpg" alt="Vintage Krishna Sons Jewellers" className="mx-auto mb-6 rounded-lg shadow-lg object-cover w-40 h-40" />
                  <h3 className="text-2xl font-playfair font-bold text-maroon dark:text-gold mb-4">
                    Trusted Since 1935
                  </h3>
                  <p className="text-gray-600 dark:text-gold/70 font-inter">
                    Generations of trust, quality, and hallmark certification
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl p-8 text-center shadow-luxury"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-maroon" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
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
              Our Journey
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Key milestones in our 25+ year journey of excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-gradient-to-br from-maroon to-[#600000] text-white rounded-2xl p-8 text-center shadow-luxury"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-maroon font-bold text-xl">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                  {milestone.title}
                </h3>
                <p className="text-gold/80 font-inter">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Experienced professionals dedicated to serving you with excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl p-8 text-center shadow-luxury"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-maroon font-bold text-2xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                  {member.name}
                </h3>
                <p className="text-gold font-inter font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gold/70 font-inter mb-2">
                  {member.experience} Experience
                </p>
                <p className="text-sm text-gray-600 dark:text-gold/70 font-inter">
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
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
              Why Trust Us?
            </h2>
            <p className="text-xl font-inter text-gold/80 max-w-3xl mx-auto">
              Our commitment to quality and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-luxury bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20"
            >
              <Award size={48} className="text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                BIS Hallmark Certified
              </h3>
              <p className="text-gold/80 font-inter">
                All our gold jewellery is BIS Hallmark certified, ensuring purity and quality standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-luxury bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20"
            >
              <Clock size={48} className="text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                25+ Years Experience
              </h3>
              <p className="text-gold/80 font-inter">
                Over two decades of experience in jewellery making and customer service
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-luxury bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20"
            >
              <Users size={48} className="text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                10,000+ Happy Customers
              </h3>
              <p className="text-gold/80 font-inter">
                Trusted by thousands of satisfied customers across Pune and Maharashtra
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-[#181010]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-6">
              Experience Our Excellence
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 mb-8 max-w-2xl mx-auto">
              Visit our store to see our beautiful collection and meet our expert team
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/collection"
                className="btn-luxury bg-maroon text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
              >
                View Collections
              </Link>
              <Link
                href="/contact"
                className="btn-luxury bg-transparent border-2 border-maroon text-maroon dark:text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-maroon hover:text-gold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 