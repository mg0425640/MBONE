'use client';

import { motion } from 'framer-motion';
import { Bone } from 'lucide-react';

export default function AboutHero() {
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
            <Bone className="h-16 w-16 text-brand-accent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-brand-primary mb-6 tracking-tight"
        >
          ABOUT
          <span className="text-brand-accent block">MILLIONBONE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We believe in the power of community, the strength of diamond hands, 
          and the endless possibilities that come from unity. MILLIONBONE represents 
          more than just a token—it's a movement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
        >
          <h2 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h2>
          <p className="text-lg text-brand-secondary leading-relaxed">
            To create a sustainable, community-driven ecosystem where every member has a voice, 
            every holder is rewarded, and every transaction contributes to the collective growth 
            of our pack. We're not just building a meme coin—we're building a legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}