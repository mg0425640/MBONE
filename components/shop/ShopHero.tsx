'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star, Truck } from 'lucide-react';

export default function ShopHero() {
  const features = [
    { icon: Star, text: 'Premium Quality' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: ShoppingBag, text: 'Exclusive Designs' }
  ];

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-brand-background via-white to-brand-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-brand-primary mb-6 tracking-tight"
        >
          MBONE <span className="text-brand-accent">SHOP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Show your pack loyalty with premium MILLIONBONE merchandise. 
          From diamond hands apparel to exclusive collectibles - gear up and represent!
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
            >
              <feature.icon className="h-5 w-5 text-brand-accent" />
              <span className="font-semibold text-brand-secondary">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
        >
          <h2 className="text-2xl font-bold text-brand-primary mb-4">
            Community Merchandise
          </h2>
          <p className="text-lg text-brand-secondary leading-relaxed">
            Every purchase supports the MILLIONBONE community and helps fund development, 
            marketing, and community initiatives. Wear your diamond hands with pride!
          </p>
        </motion.div>
      </div>
    </section>
  );
}