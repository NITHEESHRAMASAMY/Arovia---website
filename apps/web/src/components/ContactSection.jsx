import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      items: [
        { text: '+91 6382129125', link: 'https://wa.me/916382129125' },
        { text: '+91 9363924187', link: 'https://wa.me/919363924187' }
      ]
    },
    {
      icon: Mail,
      label: 'Email',
      items: [
        { text: 'arovia.04@gmail.com', link: 'mailto:arovia.04@gmail.com' }
      ]
    },
    {
      icon: Instagram,
      label: 'Instagram',
      items: [
        { text: '@_arovia._', link: 'https://instagram.com/_arovia._' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-primary/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-foreground mb-4">Arovia</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">Coimbatore</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Crafting premium homemade products with love and tradition. 
              Experience the authentic taste of quality ingredients and time-honored recipes.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h4>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{contact.label}</p>
                    {contact.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground hover:text-primary transition-colors duration-300 mb-1"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Arovia. All rights reserved. Made with ❤️ in Coimbatore
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactSection;