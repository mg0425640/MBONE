'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CircleCheck as CheckCircle, Clock, Target, ArrowRight } from 'lucide-react';

export default function RoadmapPreviewSection() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      status: 'completed',
      icon: CheckCircle,
      items: [
        'Token Launch & Liquidity',
        'Community Building',
        'Initial Marketing Push',
        'Burn Mechanism Activation'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      status: 'active',
      icon: Clock,
      items: [
        'Major Exchange Listings',
        'Strategic Partnerships',
        'Staking Platform Launch',
        'Community Governance'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      status: 'upcoming',
      icon: Target,
      items: [
        'NFT Ecosystem',
        'Mobile App Development',
        'Cross-Chain Bridge',
        'Utility Integration'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-100';
      case 'active':
        return 'text-blue-500 bg-blue-100';
      case 'upcoming':
        return 'text-gray-500 bg-gray-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

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
            ROADMAP PREVIEW
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Our journey to the moon - planned phases of development and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 hover-lift shadow-lg border"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getStatusColor(phase.status)}`}>
                    <phase.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-accent uppercase tracking-wide">
                      {phase.phase}
                    </div>
                    <h3 className="text-brand-primary font-bold text-lg">
                      {phase.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      phase.status === 'completed' 
                        ? 'bg-green-500' 
                        : phase.status === 'active' 
                          ? 'bg-blue-500' 
                          : 'bg-gray-300'
                    }`}></div>
                    <span className="text-brand-secondary font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {phase.status === 'active' && (
                <div className="mt-6 bg-blue-50 rounded-xl p-4">
                  <div className="text-blue-600 font-bold text-sm mb-1">
                    CURRENTLY IN PROGRESS
                  </div>
                  <div className="bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-500 rounded-full h-2 w-2/3"></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border inline-block">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Want More Details?
            </h3>
            <p className="text-brand-secondary mb-6">
              Check out our complete roadmap with detailed timelines and milestones
            </p>
            <Link href="/roadmap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-accent text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg mx-auto"
              >
                <span>VIEW FULL ROADMAP</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}