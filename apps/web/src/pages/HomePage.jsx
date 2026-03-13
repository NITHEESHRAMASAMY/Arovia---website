import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection.jsx';
import ProductsSection from '@/components/ProductsSection.jsx';
import InstagramSection from '@/components/InstagramSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Arovia - Premium Homemade Products | Where Tradition Meets Taste</title>
        <meta 
          name="description" 
          content="Discover Arovia's premium homemade brownies, cookies, and authentic spice powders. Handcrafted with natural ingredients in Coimbatore. Order via Instagram DM." 
        />
      </Helmet>

      <div className="min-h-screen">
        <HeroSection />
        <ProductsSection />
        <InstagramSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;