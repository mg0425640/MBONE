'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Eye } from 'lucide-react';

export default function PolicyClient() {
  const policies = [
    {
      icon: Shield,
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information',
      lastUpdated: 'December 2024'
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      description: 'Terms and conditions for using our website and services',
      lastUpdated: 'December 2024'
    },
    {
      icon: Lock,
      title: 'Cookie Policy',
      description: 'Information about cookies and tracking technologies we use',
      lastUpdated: 'December 2024'
    },
    {
      icon: Eye,
      title: 'Refund Policy',
      description: 'Our policy on returns, exchanges, and refunds',
      lastUpdated: 'December 2024'
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
              <Shield className="h-16 w-16 text-brand-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
              POLICIES
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Our commitment to transparency and your rights. Read our policies to understand how we operate.
            </p>
          </motion.div>

          {/* Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border hover-lift cursor-pointer"
              >
                <div className="bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <policy.icon className="h-8 w-8 text-brand-accent" />
                </div>
                
                <h3 className="text-brand-primary font-bold text-xl mb-3">
                  {policy.title}
                </h3>
                
                <p className="text-brand-secondary mb-4 leading-relaxed">
                  {policy.description}
                </p>
                
                <div className="text-sm text-gray-500">
                  Last updated: {policy.lastUpdated}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Privacy Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border mb-8"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-6">Privacy Policy</h2>
            
            <div className="prose max-w-none text-brand-secondary">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Information We Collect</h3>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include your name, email address, 
                shipping address, and payment information.
              </p>

              <h3 className="text-xl font-bold text-brand-primary mb-4">How We Use Your Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your account or transactions</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services and user experience</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-primary mb-4">Information Sharing</h3>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with 
                service providers who assist us in operating our website and conducting business.
              </p>

              <h3 className="text-xl font-bold text-brand-primary mb-4">Data Security</h3>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </div>
          </motion.div>

          {/* Terms of Service Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border mb-8"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-6">Terms of Service</h2>
            
            <div className="prose max-w-none text-brand-secondary">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>

              <h3 className="text-xl font-bold text-brand-primary mb-4">Use License</h3>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on MILLIONBONE's 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title.
              </p>

              <h3 className="text-xl font-bold text-brand-primary mb-4">Disclaimer</h3>
              <p className="mb-4">
                The materials on MILLIONBONE's website are provided on an 'as is' basis. MILLIONBONE 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of merchantability.
              </p>
            </div>
          </motion.div>

          {/* Refund Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-6">Refund Policy</h2>
            
            <div className="prose max-w-none text-brand-secondary">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Return Window</h3>
              <p className="mb-4">
                You have 30 days from the date of delivery to return items for a full refund. 
                Items must be in original condition with tags attached.
              </p>

              <h3 className="text-xl font-bold text-brand-primary mb-4">Return Process</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Contact our customer service team to initiate a return</li>
                <li>Receive return authorization and shipping label</li>
                <li>Package items securely and ship back to us</li>
                <li>Refund processed within 5-7 business days after we receive the return</li>
              </ol>

              <h3 className="text-xl font-bold text-brand-primary mb-4">Non-Returnable Items</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Custom or personalized items</li>
                <li>Items damaged by normal wear and tear</li>
                <li>Items returned after 30 days</li>
                <li>Items without original tags or packaging</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact for Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white text-center mt-8"
          >
            <h3 className="text-2xl text-brand-primary font-bold mb-4">Questions About Our Policies?</h3>
            <p className="text-lg mb-6 text-brand-secondary">
              If you have any questions about these policies, please don't hesitate to contact us.
            </p>
            <a 
              href="mailto:hello@millionbone.com"
              className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}   