import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Loader2 } from 'lucide-react';

const InstagramSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleInstagramClick = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      window.open('https://instagram.com/_arovia._', '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <Instagram className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Order via Instagram DM
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with us on Instagram for quick orders and updates
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-muted-foreground mb-2">
              Follow us on Instagram
            </p>
            <p className="text-3xl font-bold text-primary mb-6">
              @_arovia._
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInstagramClick}
              disabled={isLoading}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Opening Instagram...</span>
                </>
              ) : (
                <>
                  <Instagram className="w-5 h-5" />
                  <span>Order via Instagram DM</span>
                </>
              )}
            </motion.button>
          </div>

          <p className="text-sm text-muted-foreground">
            Send us a direct message with your order details and we'll get back to you promptly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;