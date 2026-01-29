'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Building, Handshake, Users, TrendingUp, Mail, Phone } from 'lucide-react';

export default function BusinessClient() {
  const businessServices = [
    {
      icon: Handshake,
      title: 'Partnership Opportunities',
      description: 'Collaborate with MILLIONBONE for mutual growth and success',
      features: [
        'Strategic partnerships',
        'Cross-promotion opportunities',
        'Joint marketing campaigns',
        'Revenue sharing models'
      ]
    },
    {
      icon: Building,
      title: 'Wholesale Program',
      description: 'Bulk purchasing options for retailers and distributors',
      features: [
        'Volume discounts',
        'Dedicated account manager',
        'Custom packaging options',
        'Flexible payment terms'
      ]
    },
    {
      icon: Users,
      title: 'Corporate Sales',
      description: 'Custom merchandise solutions for businesses and events',
      features: [
        'Custom branding options',
        'Bulk order management',
        'Corporate pricing',
        'Event merchandise'
      ]
    }
  ];

  const stats = [
    { icon: Users, label: 'Community Members', value: '50K+' },
    { icon: TrendingUp, label: 'Monthly Growth', value: '25%' },
    { icon: Building, label: 'Business Partners', value: '15+' },
    { icon: Handshake, label: 'Successful Campaigns', value: '100+' }
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
              <Building className="h-16 w-16 text-brand-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
              BUSINESS
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Partner with MILLIONBONE for business opportunities, wholesale programs, and corporate solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border hover-lift"
              >
                <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <div className="text-2xl font-black text-brand-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-brand-secondary text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Business Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border hover-lift"
              >
                <div className="bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-brand-accent" />
                </div>
                
                <h3 className="text-brand-primary font-bold text-xl mb-3">
                  {service.title}
                </h3>
                
                <p className="text-brand-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-brand-secondary font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              Why Partner with MILLIONBONE?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">Growing Community</h3>
                <p className="text-brand-secondary">
                  Access to our rapidly growing community of 50,000+ engaged members
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">Strong Brand</h3>
                <p className="text-brand-secondary">
                  Partner with a trusted and recognized brand in the crypto space
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">Mutual Success</h3>
                <p className="text-brand-secondary">
                  We believe in win-win partnerships that benefit all parties involved
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wholesale Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              Wholesale Program Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Minimum Orders</h3>
                <ul className="space-y-2 text-brand-secondary">
                  <li>• Apparel: 50 pieces minimum</li>
                  <li>• Accessories: 25 pieces minimum</li>
                  <li>• Mixed orders: $1,000 minimum</li>
                  <li>• Custom orders: Quote based</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">Pricing Tiers</h3>
                <ul className="space-y-2 text-brand-secondary">
                  <li>• 50-99 pieces: 20% discount</li>
                  <li>• 100-249 pieces: 30% discount</li>
                  <li>• 250-499 pieces: 40% discount</li>
                  <li>• 500+ pieces: Custom pricing</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-brand-accent/10 rounded-xl">
              <h4 className="font-bold text-brand-primary mb-2">Ready to Get Started?</h4>
              <p className="text-brand-secondary">
                Contact our business development team to discuss wholesale opportunities 
                and custom solutions for your business needs.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white"
          >
            <h2 className="text-3xl text-brand-primary font-bold mb-8 text-center">
              Let's Work Together
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-bold text-brand-secondary text-lg mb-2">Business Inquiries</h3>
                <a href="mailto:business@millionbone.com" className="text-brand-secondary hover:text-white">
                  business@millionbone.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">Partnership Team</h3>
                <a href="mailto:partnerships@millionbone.com" className="text-brand-secondary hover:text-white">
                  partnerships@millionbone.com
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-brand-secondary mb-6">
                We typically respond to business inquiries within 24 hours. 
                Let's explore how we can grow together!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <a href="mailto:business@millionbone.com">
                  Contact Business Team
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}