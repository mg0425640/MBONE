'use client';

import { motion } from 'framer-motion';
import { Eye, Globe, Lightbulb, Target } from 'lucide-react';

export default function VisionSection() {
  const visions = [
    {
      icon: Eye,
      title: 'Long-term Vision',
      description: 'Building a sustainable ecosystem that rewards loyalty and creates lasting value for our community members.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connecting diamond hands from around the world in a unified mission to revolutionize meme coin culture.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Constantly evolving our tokenomics and features based on community feedback and market dynamics.'
    },
    {
      icon: Target,
      title: 'Clear Goals',
      description: 'Transparent roadmap with achievable milestones that benefit every member of the MILLIONBONE pack.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            OUR VISION
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Looking beyond the moon - our long-term vision for the MILLIONBONE ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 hover-lift shadow-lg border"
            >
              <div className="bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <vision.icon className="h-8 w-8 text-brand-accent" />
              </div>
              
              <h3 className="text-brand-primary font-bold text-xl mb-4">
                {vision.title}
              </h3>
              
              <p className="text-brand-secondary leading-relaxed text-lg">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border text-center"
        >
          <h3 className="text-2xl font-bold text-brand-primary mb-4">
            The Ultimate Goal
          </h3>
          <p className="text-lg text-brand-secondary leading-relaxed max-w-3xl mx-auto">
            To establish MILLIONBONE as the premier community-driven meme coin that 
            demonstrates how transparency, innovation, and genuine care for holders 
            can create sustainable value in the crypto space. We're not just reaching 
            for the moon—we're building a rocket ship that can take us to the stars.
          </p>
        </motion.div>
      </div>
    </section>
  );
}