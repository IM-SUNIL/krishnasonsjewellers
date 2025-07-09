'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Crown, Gem, Heart, Sparkles, Star, Phone, MessageCircle, Search } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Collections', icon: Crown },
  { id: 'gold', name: 'Gold Jewellery', icon: Crown },
  { id: 'diamond', name: 'Diamond Collection', icon: Gem },
  { id: 'bridal', name: 'Bridal Jewellery', icon: Heart },
  { id: 'daily', name: 'Daily Wear', icon: Star },
  { id: 'custom', name: 'Custom Orders', icon: Sparkles },
];

const products = [
  // Gold Jewellery
  {
    id: 1,
    name: "Classic Gold Necklace",
    category: "gold",
    description: "Timeless 22K gold necklace with intricate design",
    image: "/gallery/gold-necklace.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Gold Bangles Set",
    category: "gold",
    description: "Set of 4 beautiful gold bangles",
    image: "/gallery/gold-bangles.jpg",
    featured: false
  },
  // Diamond Collection
  {
    id: 3,
    name: "Diamond Ring",
    category: "diamond",
    description: "Solitaire diamond ring in white gold setting",
    image: "/gallery/diamond-ring.jpg",
    featured: true
  },
  {
    id: 4,
    name: "Diamond Necklace",
    category: "diamond",
    description: "Elegant diamond necklace with pendant",
    image: "/gallery/diamond-necklace.jpg",
    featured: false
  },
  // Bridal Jewellery
  {
    id: 5,
    name: "Bridal Set",
    category: "bridal",
    description: "Complete bridal jewellery set with necklace, earrings, and bangles",
    image: "/gallery/bridal-set.jpg",
    featured: true
  },
  // Daily Wear
  {
    id: 6,
    name: "Daily Gold Chain",
    category: "daily",
    description: "Lightweight gold chain for daily wear",
    image: "/gallery/daily-chain.jpg",
    featured: false
  },
  // Custom Orders
  {
    id: 7,
    name: "Custom Name Pendant",
    category: "custom",
    description: "Personalized gold pendant with your name",
    image: "/gallery/custom-pendant.jpg",
    featured: false
  },
];

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(product => product.featured);

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
              Our Collections
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gold/90 max-w-3xl mx-auto">
              Discover our exquisite range of Gold, Diamond, and Bridal Jewellery in Dwarka, New Delhi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-cream dark:bg-[#2a1f1f] border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jewellery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#181010] border border-gold/20 rounded-full focus:outline-none focus:ring-2 focus:ring-gold text-maroon dark:text-gold placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {["gold", "diamond", "bridal"].map((cat) => {
                const catObj = categories.find((c) => c.id === cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full font-inter font-semibold border-2 transition-all duration-300 shadow-luxury ${selectedCategory === cat ? "bg-gold text-maroon border-gold" : "bg-white text-maroon border-maroon hover:bg-gold hover:text-maroon"}`}
                  >
                    {catObj?.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-white dark:bg-[#181010]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon dark:text-gold mb-4">
                Featured Collections
              </h2>
              <p className="text-lg font-inter text-gray-700 dark:text-gold/80">
                Our most popular and exquisite pieces
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-luxury bg-white dark:bg-[#181010] rounded-2xl overflow-hidden shadow-luxury group"
                >
                  <div className="h-64 bg-gradient-to-br from-gold/20 to-maroon/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-maroon/10 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10 text-center">
                      <Crown size={64} className="text-maroon mx-auto mb-4" />
                      <div className="bg-gold text-maroon px-3 py-1 rounded-full text-sm font-inter font-semibold inline-block">
                        Featured
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gold/70 font-inter mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-playfair font-bold text-maroon dark:text-gold">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gold/50 font-inter">
                        {product.weight}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-maroon text-gold px-4 py-2 rounded-full text-sm font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300">
                        Enquire Now
                      </button>
                      <button className="bg-transparent border border-maroon text-maroon dark:text-gold px-4 py-2 rounded-full text-sm font-inter font-semibold hover:bg-maroon hover:text-gold transition-all duration-300">
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16 bg-cream dark:bg-[#2a1f1f]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon dark:text-gold mb-4">
              {selectedCategory === 'all' ? 'All Collections' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-lg font-inter text-gray-700 dark:text-gold/80">
              {filteredProducts.length} items found
            </p>
          </motion.div>

          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Crown size={64} className="text-maroon dark:text-gold mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-semibold text-maroon dark:text-gold mb-2">
                No items found
              </h3>
              <p className="text-gray-600 dark:text-gold/70 font-inter">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card-luxury bg-white dark:bg-[#181010] rounded-2xl overflow-hidden shadow-luxury group"
                >
                  <div className="h-48 bg-gradient-to-br from-gold/20 to-maroon/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-maroon/10 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10 text-center">
                      <Crown size={48} className="text-maroon mx-auto mb-2" />
                      {product.featured && (
                        <div className="bg-gold text-maroon px-2 py-1 rounded-full text-xs font-inter font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-playfair font-semibold text-maroon dark:text-gold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gold/70 font-inter mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-playfair font-bold text-maroon dark:text-gold">
                        {product.price}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gold/50 font-inter">
                        {product.weight}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-maroon text-gold px-3 py-2 rounded-full text-sm font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300">
                        Enquire
                      </button>
                      <button className="bg-transparent border border-maroon text-maroon dark:text-gold px-3 py-2 rounded-full text-sm font-inter font-semibold hover:bg-maroon hover:text-gold transition-all duration-300">
                        <Phone size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl font-inter text-gold/80 mb-8 max-w-2xl mx-auto">
              Contact us for custom designs or to check our latest arrivals
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