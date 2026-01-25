'use client';

import { motion } from 'framer-motion';
import { Flame, Gift, TrendingUp, Clock } from 'lucide-react';

export default function BurnAndRewardsSection() {
  const mechanisms = [
    {
      icon: Flame,
      title: 'Auto-Burn System',
      description: 'Every transaction automatically burns tokens, reducing total supply forever',
      features: [
        '1-2% of every transaction burned',
        'Tokens sent to dead wallet',
        'Deflationary by design',
        'No manual intervention needed'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Gift,
      title: 'Holder Rewards',
      description: 'Passive income for diamond hands - the longer you hold, the more you earn',
      features: [
        'Automatic redistribution',
        'Proportional to holdings',
        'Compounds over time',
        'No claiming required'
      ],
      color: 'bg-green-500'
    }
  ];

  const stats = [
    { icon: Flame, label: 'Tokens Burned', value: '50M+', subtitle: 'And growing daily' },
    { icon: Gift, label: 'Rewards Distributed', value: '$125K+', subtitle: 'To all holders' },
    { icon: TrendingUp, label: 'Supply Reduction', value: '5%', subtitle: 'Since launch' },
    { icon: Clock, label: 'Reward Frequency', value: '24/7', subtitle: 'Continuous' }
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
            BURN & REWARDS
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Deflationary mechanics and passive income that reward loyalty
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center shadow-lg border hover-lift"
            >
              <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="text-2xl font-black text-brand-primary mb-1">
                {stat.value}
              </div>
              <div className="font-bold text-brand-secondary text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mechanisms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mechanisms.map((mechanism, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover-lift shadow-lg border"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${mechanism.color}/10`}>
                <mechanism.icon className={`h-8 w-8 ${mechanism.color.replace('bg-', 'text-')}`} />
              </div>
              
              <h3 className="text-brand-primary font-bold text-xl mb-3">
                {mechanism.title}
              </h3>
              
              <p className="text-brand-secondary mb-6 leading-relaxed">
                {mechanism.description}
              </p>

              <div className="space-y-3">
                {mechanism.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${mechanism.color}`}></div>
                    <span className="text-brand-secondary font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">The Power of Diamond Hands</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Our burn and reward mechanisms create a virtuous cycle: as the supply decreases and 
            rewards accumulate, the value proposition for holding $MBONE becomes stronger over time. 
            True diamond hands are rewarded for their patience and loyalty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}