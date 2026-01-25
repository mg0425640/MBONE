'use client';

import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Users, Instagram, ArrowRight } from 'lucide-react';

export default function CommunityCTASection() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', count: '25.5K' },
    { icon: MessageCircle, href: '#', label: 'Telegram', count: '18.2K' },
    { icon: Users, href: '#', label: 'Discord', count: '12.8K' },
    { icon: Instagram, href: '#', label: 'Instagram', count: '8.9K' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            JOIN THE PACK
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connect with thousands of diamond hands in our vibrant community. 
            Stay updated on the latest news, participate in discussions, and never miss important announcements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift hover:bg-white/20 transition-all border border-white/20"
            >
              <div className="bg-brand-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <social.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-white font-bold text-lg mb-2">
                {social.label}
              </h3>
              
              <div className="text-brand-accent font-bold text-xl mb-2">
                {social.count}
              </div>
              
              <p className="text-white/70 text-sm">
                Followers
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(254, 127, 45, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-accent text-white px-8 py-4 rounded-full text-xl font-bold flex items-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg mx-auto"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          
          <p className="text-white/70 mt-4">
            Ready to become part of the strongest pack in crypto?
          </p>
        </motion.div>
      </div>
    </section>
  );
}