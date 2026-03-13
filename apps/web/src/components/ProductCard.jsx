import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer group h-full"
      onClick={onClick}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform-3d card-3d-hover h-full flex flex-col relative">
        {product.isNew && (
          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground hover:bg-secondary z-10 shadow-lg px-3 py-1 text-xs font-bold tracking-wider">
            NEW!
          </Badge>
        )}
        
        <div className="relative overflow-hidden h-64 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
            <span className="text-xl font-bold text-primary">
              {product.cardPrice}
            </span>
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-md group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
              View Details
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;