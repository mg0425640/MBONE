'use client';

import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Users, Instagram, ExternalLink } from 'lucide-react';

export default function SocialMediaCards() {
  const socialLinks = [
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@MILLIONBONE',
      followers: '25.5K',
      description: 'Latest news, updates, and community discussions',
      href: '#',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      borderColor: 'hover:border-blue-300'
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      handle: '@MILLIONBONEofficial',
      followers: '18.2K',
      description: 'Real-time chat with the community and team',
      href: '#',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
      borderColor: 'hover:border-cyan-300'
    },
    {
      icon: Users,
      name: 'Discord',
      handle: 'MILLIONBONE Server',
      followers: '12.8K',
      description: 'Gaming, voice chats, and deeper community connection',
      href: '#',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-500',
      borderColor: 'hover:border-indigo-300'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@millionbone_official',
      followers: '8.9K',
      description: 'Visual updates, memes, and behind-the-scenes content',
      href: '#',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500',
      borderColor: 'hover:border-pink-300'
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
            JOIN OUR COMMUNITY
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Connect with thousands of diamond hands across our social platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className={`${social.bgColor} rounded-2xl p-8 hover-lift shadow-lg border-2 border-transparent ${social.borderColor} transition-all duration-300 group block`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center`}>
                    <social.icon className={`h-8 w-8 ${social.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-brand-primary font-bold text-xl mb-1">
                      {social.name}
                    </h3>
                    <p className="text-brand-secondary font-medium">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-brand-secondary group-hover:text-brand-accent transition-colors" />
              </div>

              <p className="text-brand-secondary leading-relaxed mb-6">
                {social.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="bg-white/60 rounded-xl px-4 py-2">
                  <div className="text-2xl font-black text-brand-accent">
                    {social.followers}
                  </div>
                  <div className="text-sm text-brand-secondary font-medium">
                    Followers
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-2 group-hover:bg-brand-accent transition-colors"
                >
                  <span>JOIN NOW</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.a>
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
            Why Join Our Community?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-brand-accent font-black text-xl mb-2">Real-Time Updates</div>
              <p className="text-brand-secondary">Get the latest news and announcements first</p>
            </div>
            <div>
              <div className="text-brand-accent font-black text-xl mb-2">Expert Insights</div>
              <p className="text-brand-secondary">Learn from experienced traders and holders</p>
            </div>
            <div>
              <div className="text-brand-accent font-black text-xl mb-2">Exclusive Content</div>
              <p className="text-brand-secondary">Access to holder-only channels and events</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}