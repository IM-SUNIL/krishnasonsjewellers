'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our jewellery experts',
    value: '8888088140',
    action: 'tel:8888088140',
    color: 'bg-green-500'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Send us a message on WhatsApp',
    value: '8888088140',
    action: 'https://wa.me/918888088140',
    color: 'bg-green-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Visit our store in Vision One Mall',
    value: 'Vision One Mall, Tathawade, Pune',
    action: '/visit-us',
    color: 'bg-maroon'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We\'re open 7 days a week',
    value: '11:00 AM - 9:00 PM',
    action: '/visit-us',
    color: 'bg-gold'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gold/90 max-w-3xl mx-auto">
              Get in touch with us for expert jewellery consultation and personalized service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Get in Touch
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Multiple ways to reach us for your jewellery needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl p-6 text-center shadow-luxury group"
              >
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter mb-4">
                  {method.description}
                </p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="btn-luxury bg-maroon text-gold px-6 py-3 rounded-full text-sm font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300 inline-block"
                >
                  {method.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
              Send Us a Message
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#181010] rounded-2xl p-8 shadow-luxury"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-semibold text-maroon dark:text-gold mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter">
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter font-semibold text-maroon dark:text-gold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-[#2a1f1f] border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-maroon dark:text-gold placeholder-gray-400 font-inter"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-inter font-semibold text-maroon dark:text-gold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-[#2a1f1f] border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-maroon dark:text-gold placeholder-gray-400 font-inter"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-semibold text-maroon dark:text-gold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-[#2a1f1f] border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-maroon dark:text-gold placeholder-gray-400 font-inter"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-inter font-semibold text-maroon dark:text-gold mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-[#2a1f1f] border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-maroon dark:text-gold font-inter"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="gold">Gold Jewellery</option>
                      <option value="diamond">Diamond Collection</option>
                      <option value="bridal">Bridal Sets</option>
                      <option value="custom">Custom Design</option>
                      <option value="appointment">Book Appointment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-semibold text-maroon dark:text-gold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-[#2a1f1f] border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-maroon dark:text-gold placeholder-gray-400 font-inter resize-none"
                    placeholder="Tell us about your jewellery needs..."
                  />
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury bg-maroon text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={20} />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Store Information */}
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
              Visit Our Store
            </h2>
            <p className="text-xl font-inter text-gray-700 dark:text-gold/80 max-w-3xl mx-auto">
              Experience our beautiful collection in person at our store
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-maroon" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                    Store Address
                  </h3>
                  <p className="text-gray-700 dark:text-gold/80 font-inter leading-relaxed">
                    Vision One Mall, Bhumkar Chowk Road,<br />
                    Tathawade, Pune, Maharashtra 411057
                  </p>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/20 to-maroon/20 rounded-2xl p-8 h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={64} className="text-maroon mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                  Google Maps
                </h3>
                <p className="text-gray-600 dark:text-gold/70 font-inter mb-4">
                  Interactive map will be embedded here
                </p>
                <a
                  href="/visit-us"
                  className="btn-luxury bg-maroon text-gold px-6 py-3 rounded-full text-sm font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
                >
                  Get Directions
                </a>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl font-inter text-gold/80 mb-8 max-w-2xl mx-auto">
              Contact us today for expert jewellery consultation and personalized service
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
