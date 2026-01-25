'use client';

import { motion } from 'framer-motion';
import { Users, Droplets, Zap, Lock } from 'lucide-react';

export default function DistributionSection() {
  const distribution = [
    {
      icon: Users,
      title: 'Community Sale',
      percentage: '85%',
      amount: '850M $MBONE',
      description: 'Public sale and liquidity provision for fair distribution',
      color: 'bg-brand-primary'
    },
    {
      icon: Droplets,
      title: 'Marketing & Partnerships',
      percentage: '10%',
      amount: '100M $MBONE',
      description: 'Strategic partnerships and marketing initiatives',
      color: 'bg-brand-accent'
    },
    {
      icon: Zap,
      title: 'Development Fund',
      percentage: '3%',
      amount: '30M $MBONE',
      description: 'Future development and ecosystem growth',
      color: 'bg-brand-secondary'
    },
    {
      icon: Lock,
      title: 'Liquidity Reserve',
      percentage: '2%',
      amount: '20M $MBONE',
      description: 'Locked liquidity to ensure market stability',
      color: 'bg-brand-highlight'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            TOKEN DISTRIBUTION
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Fair and transparent allocation ensuring maximum community ownership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {distribution.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover-lift shadow-lg border group-hover:border-brand-accent/50 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color.replace('bg-', 'bg-')}/10`}>
                    <item.icon className={`h-8 w-8 ${item.color.replace('bg-', 'text-')}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-brand-primary font-bold text-lg">
                        {item.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-white font-bold text-sm ${item.color}`}>
                        {item.percentage}
                      </span>
                    </div>
                    
                    <div className="text-2xl font-black text-brand-accent mb-2">
                      {item.amount}
                    </div>
                    
                    <p className="text-brand-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.percentage }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Community Focused</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            85% of all tokens are allocated directly to the community through public sale and liquidity. 
            No team allocation, no private presales - just fair distribution for everyone who believes in the vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}