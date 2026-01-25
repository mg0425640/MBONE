'use client';

import { motion } from 'framer-motion';
import { Coins, Gift, Vote, Zap } from 'lucide-react';

export default function TokenUtilitySection() {
  const utilities = [
    {
      icon: Coins,
      title: 'Staking Rewards',
      description: 'Stake your $MBONE tokens and earn passive rewards from transaction fees.'
    },
    {
      icon: Gift,
      title: 'Holder Airdrops',
      description: 'Regular airdrops and exclusive benefits for long-term diamond hands.'
    },
    {
      icon: Vote,
      title: 'Governance Rights',
      description: 'Vote on community proposals and shape the future of MILLIONBONE.'
    },
    {
      icon: Zap,
      title: 'Burn Mechanism',
      description: 'Every transaction burns tokens, making your holdings more valuable over time.'
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
            TOKEN UTILITY
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            $MBONE isn't just a meme - it's a utility token with real benefits for holders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center hover-lift shadow-lg border group-hover:border-brand-accent transition-all duration-300">
                <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent/20 transition-colors">
                  <utility.icon className="h-8 w-8 text-brand-accent" />
                </div>
                
                <h3 className="text-brand-primary font-bold text-lg mb-3">
                  {utility.title}
                </h3>
                
                <p className="text-brand-secondary leading-relaxed">
                  {utility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}