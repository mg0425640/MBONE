'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Headphones, Clock, Mail, MessageCircle, Phone, Users } from 'lucide-react';
import Link from 'next/link';

export default function CustomerServiceClient() {
  const serviceOptions = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email for detailed inquiries and support requests',
      contact: 'hello@millionbone.com',
      responseTime: 'Within 24 hours',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Join our community channels for instant help and discussions',
      contact: 'Telegram & Discord',
      responseTime: 'Instant',
      color: 'bg-green-500'
    },
    {
      icon: Headphones,
      title: 'Support Ticket',
      description: 'Submit a detailed support ticket for complex issues',
      contact: 'Online Form',
      responseTime: 'Within 4 hours',
      color: 'bg-purple-500'
    }
  ];

  const faqCategories = [
    {
      title: 'Account & Wallet',
      questions: [
        'How do I connect my wallet?',
        'What wallets are supported?',
        'How to buy $MBONE tokens?',
        'Transaction fees and gas costs'
      ]
    },
    {
      title: 'Orders & Shipping',
      questions: [
        'How to track my order?',
        'Shipping rates and delivery times',
        'International shipping options',
        'Order cancellation policy'
      ]
    },
    {
      title: 'Returns & Refunds',
      questions: [
        'Return policy guidelines',
        'How to request a refund?',
        'Exchange process',
        'Damaged item claims'
      ]
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-brand-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-full shadow-lg inline-block mb-8">
              <Headphones className="h-16 w-16 text-brand-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
              CUSTOMER SERVICE
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              We're here to help! Get support for your MILLIONBONE experience through multiple channels.
            </p>
          </motion.div>

          {/* Service Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border hover-lift"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${option.color}/10`}>
                  <option.icon className={`h-8 w-8 ${option.color.replace('bg-', 'text-')}`} />
                </div>
                
                <h3 className="text-brand-primary font-bold text-xl mb-3">
                  {option.title}
                </h3>
                
                <p className="text-brand-secondary mb-4 leading-relaxed">
                  {option.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Contact:</span>
                    <span className="font-medium text-brand-primary">{option.contact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Response:</span>
                    <span className="font-medium text-brand-accent">{option.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border mb-16"
          >
            <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center">
              Quick Actions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/support-ticket">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-accent text-white px-6 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
                >
                  Submit Ticket
                </motion.button>
              </Link>
              
              <Link href="/faqs">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-2 border-brand-primary text-brand-primary px-6 py-4 rounded-xl font-bold hover:bg-brand-primary hover:text-white transition-all"
                >
                  View FAQs
                </motion.button>
              </Link>
              
              <a href="mailto:hello@millionbone.com">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
                >
                  Send Email
                </motion.button>
              </a>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-2 border-brand-accent text-brand-accent px-6 py-4 rounded-xl font-bold hover:bg-brand-accent hover:text-white transition-all"
                >
                  Join Community
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* FAQ Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h3 className="font-bold text-brand-primary text-lg mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.questions.map((question, qIndex) => (
                      <div key={qIndex} className="text-brand-secondary text-sm hover:text-brand-accent cursor-pointer transition-colors">
                        • {question}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/faqs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-accent text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
                >
                  View All FAQs
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Contact Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white text-center"
          >
            <Clock className="h-12 w-12 mx-auto mb-4 text-brand-accent" />
            <h3 className="text-2xl font-bold mb-4 text-brand-primary">Support Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="font-bold mb-1 text-brand-primary">Email Support</div>
                <div className="text-brand-secondary">24/7 - Responses within 24 hours</div>
              </div>
              <div>
                <div className="font-bold mb-1 text-brand-primary">Live Chat</div>
                <div className="text-brand-secondary">24/7 - Community channels</div>
              </div>
              <div>
                <div className="font-bold mb-1 text-brand-primary">Priority Support</div>
                <div className="text-brand-secondary">Mon-Fri, 9 AM - 6 PM EST</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}