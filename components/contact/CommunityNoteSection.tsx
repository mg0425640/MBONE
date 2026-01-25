'use client';

import { motion } from 'framer-motion';
import { Shield, TriangleAlert as AlertTriangle, Heart, Users } from 'lucide-react';

export default function CommunityNoteSection() {
  const safetyNotes = [
    {
      icon: Shield,
      title: 'Official Channels Only',
      description: 'Only trust communications from our verified official social media accounts and email.'
    },
    {
      icon: AlertTriangle,
      title: 'Beware of Scams',
      description: 'We will never ask for private keys, seeds, or passwords. Report suspicious activity immediately.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'All major decisions are made transparently with community input and voting.'
    },
    {
      icon: Heart,
      title: 'Respectful Environment',
      description: 'We maintain a welcoming, respectful environment for all community members.'
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            COMMUNITY SAFETY
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your safety and security are our top priorities. Please read these important guidelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {safetyNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <note.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {note.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {note.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
        >
          <AlertTriangle className="h-12 w-12 text-brand-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Important Disclaimer
          </h3>
          <p className="text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
            MILLIONBONE is a community-driven project and cryptocurrency investment carries inherent risks. 
            Please do your own research, never invest more than you can afford to lose, and be aware that 
            cryptocurrency markets are highly volatile.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-white font-bold mb-1">Not Financial Advice</div>
              <div className="text-white/70 text-sm">DYOR Always</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-white font-bold mb-1">High Risk Investment</div>
              <div className="text-white/70 text-sm">Can Lose Value</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-white font-bold mb-1">Community Project</div>
              <div className="text-white/70 text-sm">Decentralized</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}