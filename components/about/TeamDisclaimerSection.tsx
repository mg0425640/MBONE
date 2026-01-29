'use client';

import { motion } from 'framer-motion';
import { Users, CircleAlert as AlertCircle } from 'lucide-react';

export default function TeamDisclaimerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-accent/20 w-16 h-16 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-brand-accent" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-brand-primary mb-6">
              COMMUNITY-DRIVEN PROJECT
            </h2>

            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <AlertCircle className="h-6 w-6 text-brand-accent" />
                <span className="text-brand-accent font-bold text-lg">Important Notice</span>
              </div>
              <p className="text-brand-secondary text-lg leading-relaxed">
                MILLIONBONE is a completely community-driven project. There is no traditional "team" 
                with individual profiles or centralized leadership. Every decision is made collectively 
                by our community of holders through transparent governance processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-accent mb-2">100%</div>
                <p className="text-brand-secondary">Community Owned</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-accent mb-2">0%</div>
                <p className="text-brand-secondary">Team Allocation</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-accent mb-2">∞</div>
                <p className="text-brand-secondary">Transparency</p>
              </div>
            </div>

            <p className="text-brand-secondarytext-center mt-8 text-lg">
              Join our community channels to participate in governance decisions and 
              help shape the future of MILLIONBONE together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}