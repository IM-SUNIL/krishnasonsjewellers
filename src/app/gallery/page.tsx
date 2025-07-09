'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Crown, Gem, Heart, Sparkles, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Items', icon: Crown },
  { id: 'gold', name: 'Gold Jewellery', icon: Crown },
  { id: 'diamond', name: 'Diamond Collection', icon: Gem },
  { id: 'bridal', name: 'Bridal Sets', icon: Heart },
  { id: 'temple', name: 'Temple Jewellery', icon: Sparkles },
  { id: 'everyday', name: 'Everyday Wear', icon: Star }
];

const galleryItems = [
  // Gold Jewellery
  {
    id: 1,
    title: "Traditional Gold Necklace",
    category: "gold",
    description: "Elegant 22K gold necklace with traditional design",
    image: "/gallery/gold-necklace-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Gold Bangles Set",
    category: "gold",
    description: "Set of 4 beautiful gold bangles",
    image: "/gallery/gold-bangles-1.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Gold Earrings",
    category: "gold",
    description: "Traditional gold earrings with stone work",
    image: "/gallery/gold-earrings-1.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Gold Chain",
    category: "gold",
    description: "Heavy gold chain with traditional design",
    image: "/gallery/gold-chain-1.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Gold Ring",
    category: "gold",
    description: "Beautiful gold ring with stone work",
    image: "/gallery/gold-ring-1.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Gold Pendant",
    category: "gold",
    description: "Elegant gold pendant design",
    image: "/gallery/gold-pendant-1.jpg",
    featured: false
  },
  // Diamond Collection
  {
    id: 7,
    title: "Diamond Ring",
    category: "diamond",
    description: "Solitaire diamond ring in white gold setting",
    image: "/gallery/diamond-ring-1.jpg",
    featured: true
  },
  {
    id: 8,
    title: "Diamond Necklace",
    category: "diamond",
    description: "Elegant diamond necklace with pendant",
    image: "/gallery/diamond-necklace-1.jpg",
    featured: false
  },
  {
    id: 9,
    title: "Diamond Earrings",
    category: "diamond",
    description: "Diamond stud earrings in white gold",
    image: "/gallery/diamond-earrings-1.jpg",
    featured: false
  },
  {
    id: 10,
    title: "Diamond Bracelet",
    category: "diamond",
    description: "Beautiful diamond bracelet design",
    image: "/gallery/diamond-bracelet-1.jpg",
    featured: false
  },
  // Bridal Sets
  {
    id: 11,
    title: "Complete Bridal Set",
    category: "bridal",
    description: "Complete bridal jewellery set with necklace, earrings, and bangles",
    image: "/gallery/bridal-set-1.jpg",
    featured: true
  },
  {
    id: 12,
    title: "Bridal Necklace",
    category: "bridal",
    description: "Heavy bridal necklace with traditional design",
    image: "/gallery/bridal-necklace-1.jpg",
    featured: false
  },
  {
    id: 13,
    title: "Bridal Earrings",
    category: "bridal",
    description: "Traditional bridal earrings",
    image: "/gallery/bridal-earrings-1.jpg",
    featured: false
  },
  {
    id: 14,
    title: "Bridal Bangles",
    category: "bridal",
    description: "Set of bridal bangles",
    image: "/gallery/bridal-bangles-1.jpg",
    featured: false
  },
  // Temple Jewellery
  {
    id: 15,
    title: "Temple Necklace",
    category: "temple",
    description: "Traditional temple jewellery necklace",
    image: "/gallery/temple-necklace-1.jpg",
    featured: true
  },
  {
    id: 16,
    title: "Temple Earrings",
    category: "temple",
    description: "Heavy temple earrings with traditional motifs",
    image: "/gallery/temple-earrings-1.jpg",
    featured: false
  },
  {
    id: 17,
    title: "Temple Bangles",
    category: "temple",
    description: "Traditional temple bangles",
    image: "/gallery/temple-bangles-1.jpg",
    featured: false
  },
  // Everyday Wear
  {
    id: 18,
    title: "Light Gold Chain",
    category: "everyday",
    description: "Lightweight gold chain for daily wear",
    image: "/gallery/everyday-chain-1.jpg",
    featured: false
  },
  {
    id: 19,
    title: "Gold Ring",
    category: "everyday",
    description: "Simple and elegant gold ring",
    image: "/gallery/everyday-ring-1.jpg",
    featured: false
  },
  {
    id: 20,
    title: "Gold Earrings",
    category: "everyday",
    description: "Light gold earrings for daily wear",
    image: "/gallery/everyday-earrings-1.jpg",
    featured: false
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
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
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gold/90 max-w-3xl mx-auto">
              Explore our stunning collection of jewellery through beautiful photographs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-cream dark:bg-[#2a1f1f] border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-inter transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-maroon text-gold shadow-lg scale-105'
                    : 'bg-white dark:bg-[#181010] text-maroon dark:text-gold border border-gold/20 hover:bg-gold hover:text-maroon hover:scale-105'
                }`}
              >
                <category.icon size={18} />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
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
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-lg font-inter text-gray-700 dark:text-gold/80">
              {filteredItems.length} items in this collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-luxury bg-white dark:bg-[#181010] rounded-2xl overflow-hidden shadow-luxury group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square bg-gradient-to-br from-gold/20 to-maroon/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-maroon/10 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10 text-center">
                    <Crown size={48} className="text-maroon mx-auto mb-2" />
                    {item.featured && (
                      <div className="bg-gold text-maroon px-2 py-1 rounded-full text-xs font-inter font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-playfair font-semibold mb-2">Click to view</p>
                      <p className="text-sm opacity-90">View larger image</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-playfair font-semibold text-maroon dark:text-gold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gold/70 font-inter line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
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
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gold transition-colors duration-300"
            >
              <X size={32} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold transition-colors duration-300"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold transition-colors duration-300"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image content */}
            <div
              className="bg-gradient-to-br from-gold/20 to-maroon/20 rounded-2xl p-8 aspect-square flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-white">
                <Crown size={80} className="text-gold mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                  {filteredItems[lightboxIndex]?.title}
                </h3>
                <p className="text-gold/80 font-inter mb-4 max-w-md">
                  {filteredItems[lightboxIndex]?.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gold/70">
                  <span>{lightboxIndex + 1} of {filteredItems.length}</span>
                  <span>•</span>
                  <span>{filteredItems[lightboxIndex]?.category}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

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
              Love What You See?
            </h2>
            <p className="text-xl font-inter text-gold/80 mb-8 max-w-2xl mx-auto">
              Visit our store to see these beautiful pieces in person and get expert consultation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/visit-us"
                className="btn-luxury bg-gold text-maroon px-8 py-4 rounded-full text-lg font-inter font-semibold shadow-gold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Store
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-luxury bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-inter font-semibold hover:bg-gold hover:text-maroon transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 