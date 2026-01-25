'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Every decision is made with our community in mind. We listen, we adapt, and we grow together.',
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Open books, open source, open communication. No hidden agendas, no surprises.',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'Strength comes from togetherness. As a pack, we support each other through every market cycle.',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to bring new features and value to our token holders.',
      color: 'bg-yellow-500'
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
            OUR VALUES
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            The core principles that guide everything we do in the MILLIONBONE ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center hover-lift shadow-lg border group-hover:border-brand-accent transition-all duration-300 h-full">
                <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-brand-accent" />
                </div>
                
                <h3 className="text-brand-primary font-bold text-lg mb-3">
                  {value.title}
                </h3>
                
                <p className="text-brand-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}