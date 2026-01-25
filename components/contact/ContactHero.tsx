'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactHero() {
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
            <MessageCircle className="h-16 w-16 text-brand-accent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-brand-primary mb-6 tracking-tight"
        >
          GET IN
          <span className="text-brand-accent block">TOUCH</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Have questions about MILLIONBONE? Want to join our pack? 
          We're here to help and always excited to connect with our community members.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="h-6 w-6 text-brand-accent" />
            <h2 className="text-2xl font-bold text-brand-primary">Direct Support</h2>
          </div>
          <p className="text-lg text-brand-secondary leading-relaxed">
            For direct inquiries, partnerships, or technical support, reach out to us via email. 
            We typically respond within 24 hours and are committed to providing the best support 
            to our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}