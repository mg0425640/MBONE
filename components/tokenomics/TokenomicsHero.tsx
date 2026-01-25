'use client';

import { motion } from 'framer-motion';
import { ChartPie as PieChart, TrendingUp, Coins } from 'lucide-react';

export default function TokenomicsHero() {
  const quickStats = [
    { label: 'Total Supply', value: '1B', subtitle: 'Fixed Supply' },
    { label: 'Circulating', value: '950M', subtitle: '95% in Circulation' },
    { label: 'Burned', value: '50M+', subtitle: 'Auto-Burn Active' }
  ];

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-brand-background via-white to-brand-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-full shadow-lg">
            <PieChart className="h-16 w-16 text-brand-accent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-brand-primary mb-6 tracking-tight"
        >
          TOKENOMICS
          <span className="text-brand-accent block">BREAKDOWN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transparent, sustainable tokenomics designed to reward holders 
          and create long-term value through deflationary mechanisms.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-black text-brand-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-brand-primary mb-1">
                {stat.label}
              </div>
              <div className="text-brand-secondary">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}