'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Rocket, Trophy } from 'lucide-react';

export default function StorySection() {
  const timeline = [
    {
      icon: Calendar,
      title: 'The Genesis',
      date: 'Q1 2024',
      description: 'MILLIONBONE was born from a simple idea: create a meme coin that actually serves its community. No fancy promises, just pure dedication to our pack.'
    },
    {
      icon: Users,
      title: 'Community Formation',
      date: 'Q2 2024',
      description: 'Our pack grew from a small group of believers to thousands of diamond hands united by a common vision of transparency and mutual support.'
    },
    {
      icon: Rocket,
      title: 'Launch & Growth',
      date: 'Q3 2024',
      description: 'Official launch with innovative tokenomics including auto-burn mechanisms and holder rewards. The journey to the moon officially began.'
    },
    {
      icon: Trophy,
      title: 'The Future',
      date: 'Beyond',
      description: 'Continuous development, community governance, and expansion of the MILLIONBONE ecosystem. This is just the beginning of our story.'
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
            OUR STORY
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            From humble beginnings to a thriving community - the MILLIONBONE journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-brand-accent/20"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:text-left text-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-20 md:ml-0`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover-lift border">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-brand-primary font-bold text-lg">
                          {item.title}
                        </h3>
                        <span className="text-brand-accent font-semibold">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-brand-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}