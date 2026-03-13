import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard.jsx';
import ProductModal from '@/components/ProductModal.jsx';

const products = [
  {
    id: 1,
    name: 'Brownies',
    image: 'https://horizons-cdn.hostinger.com/6a5f6f25-fe09-462e-91a3-f7cab31a5e9c/5b479d420d471fd87aae32ac8b87a912.jpg',
    description: 'Rich, fudgy homemade brownies crafted with premium chocolate and natural ingredients. Each bite delivers an indulgent experience with perfectly balanced sweetness.',
    benefits: ['100% Natural Ingredients', 'No Preservatives', 'Freshly Baked Daily', 'Premium Belgian Chocolate'],
    cardPrice: 'From ₹299',
    price: [
      { label: '250 grams', value: '₹299' },
      { label: '500 grams', value: '₹599' },
      { label: '1kg', value: '₹1200' }
    ]
  },
  {
    id: 3,
    name: 'Lentil Spice Powder',
    image: 'https://horizons-cdn.hostinger.com/6a5f6f25-fe09-462e-91a3-f7cab31a5e9c/7d11d4ce8b213f6f8abad39748b7d6f3.jpg',
    description: 'Traditional lentil spice blend made from carefully selected lentils and aromatic spices. Perfect for authentic South Indian dishes and healthy cooking.',
    benefits: ['Traditional Recipe', 'Rich in Protein', 'No Additives', 'Authentic Flavor'],
    cardPrice: '₹70',
    price: [
      { label: 'Standard Pack', value: '₹70 + shipping charge' }
    ]
  },
  {
    id: 5,
    name: 'Curry Leaves Powder',
    image: 'https://images.unsplash.com/photo-1690401768959-4f924e796b0a',
    description: 'Pure curry leaves powder packed with nutrients and authentic flavor. A healthy addition to your daily cooking with numerous health benefits.',
    benefits: ['100% Pure', 'Rich in Antioxidants', 'Digestive Benefits', 'Natural Aroma'],
    cardPrice: '₹70',
    price: [
      { label: 'Standard Pack', value: '₹70 + shipping charge' }
    ]
  },
  {
    id: 4,
    name: 'All Curry Masala',
    image: 'https://horizons-cdn.hostinger.com/6a5f6f25-fe09-462e-91a3-f7cab31a5e9c/eafa27d0042b768460deb17a04e29bc7.jpg',
    description: 'Versatile curry masala blend with perfectly balanced spices. Elevate any curry dish with this aromatic, flavorful powder made from premium whole spices.',
    benefits: ['Freshly Ground', 'Premium Spices', 'Versatile Use', 'Aromatic Blend'],
    cardPrice: '₹80',
    price: [
      { label: 'Standard Pack', value: '₹80 + shipping charge' }
    ]
  },
  {
    id: 6,
    name: 'Karuppu Kavuni Kanjii Powder',
    image: 'https://horizons-cdn.hostinger.com/6a5f6f25-fe09-462e-91a3-f7cab31a5e9c/a937767820ac083bee69721f1066c814.jpg',
    description: 'Nutritious traditional black rice porridge powder. A wholesome and healthy start to your day packed with essential nutrients and rich heritage.',
    benefits: ['Traditional Superfood', 'High in Antioxidants', 'Rich in Fiber', 'Natural Energy'],
    cardPrice: '₹90',
    isNew: true,
    price: [
      { label: 'Standard Pack', value: '₹90 + shipping charge' }
    ]
  }
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with love, made with the finest natural ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProductsSection;