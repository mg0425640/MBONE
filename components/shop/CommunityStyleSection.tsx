'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Star, Camera } from 'lucide-react';

export default function CommunityStyleSection() {
  const communityFeatures = [
    {
      icon: Users,
      title: 'Pack Unity',
      description: 'Join thousands of diamond hands wearing MBONE gear worldwide'
    },
    {
      icon: Heart,
      title: 'Community Love',
      description: 'Every purchase supports community initiatives and development'
    },
    {
      icon: Star,
      title: 'Exclusive Designs',
      description: 'Limited edition items designed by and for the community'
    },
    {
      icon: Camera,
      title: 'Share Your Style',
      description: 'Tag us on social media to be featured in our community gallery'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            COMMUNITY STYLE
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            More than merchandise - it's a statement of belonging to the strongest pack in crypto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-brand-accent" />
              </div>
              
              <h3 className="text-brand-primary font-bold text-lg mb-3">
                {feature.title}
              </h3>
              
              <p className="text-brand-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-brand-primary mb-4">
            Join the Style Revolution
          </h3>
          <p className="text-brand-secondary leading-relaxed max-w-3xl mx-auto mb-6">
            When you wear MILLIONBONE merchandise, you're not just wearing clothes - 
            you're representing a movement. A community of diamond hands who believe 
            in the power of unity, transparency, and the journey to the moon.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-brand-accent mb-2">50K+</div>
              <p className="text-brand-secondary">Community Members</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-brand-accent mb-2">25+</div>
              <p className="text-brand-secondary">Countries Represented</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-brand-accent mb-2">100%</div>
              <p className="text-brand-secondary">Diamond Hands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}