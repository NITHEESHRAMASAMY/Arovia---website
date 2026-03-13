import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="text-3xl font-bold text-foreground">
                    {product.name}
                  </DialogTitle>
                  {product.isNew && (
                    <Badge className="bg-secondary text-secondary-foreground">
                      NEW!
                    </Badge>
                  )}
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Homemade Product
                </Badge>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden h-80">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <DialogDescription className="text-base text-foreground leading-relaxed">
              {product.description}
            </DialogDescription>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Premium Benefits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between pt-6 border-t border-border gap-6">
              <div className="flex-grow max-w-md">
                <p className="text-sm text-muted-foreground mb-3 font-semibold uppercase tracking-wider">Pricing Options</p>
                <div className="space-y-2">
                  {product.price.map((p, i) => (
                    <div key={i} className="flex items-center justify-between bg-muted/30 p-3 rounded-lg border border-border/50">
                      <span className="font-medium text-foreground">{p.label}</span>
                      <span className="text-xl font-bold text-primary">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-left md:text-right shrink-0">
                <p className="text-sm text-muted-foreground mb-2">
                  Order via Instagram DM
                </p>
                <a
                  href="https://instagram.com/_arovia._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;