'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, Package, Globe, Shield } from 'lucide-react';

export default function ShippingRatesClient() {
  const domesticRates = [
    { method: 'Standard Shipping', time: '5-7 business days', price: '$4.99', description: 'Most economical option' },
    { method: 'Express Shipping', time: '2-3 business days', price: '$9.99', description: 'Faster delivery' },
    { method: 'Overnight Shipping', time: '1 business day', price: '$19.99', description: 'Next day delivery' },
    { method: 'Free Shipping', time: '5-7 business days', price: 'FREE', description: 'Orders over $75' }
  ];

  const internationalRates = [
    { region: 'Canada', standard: '$12.99', express: '$24.99', time: '7-14 days' },
    { region: 'Europe', standard: '$15.99', express: '$29.99', time: '10-21 days' },
    { region: 'Asia Pacific', standard: '$18.99', express: '$34.99', time: '12-25 days' },
    { region: 'Rest of World', standard: '$22.99', express: '$39.99', time: '15-30 days' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Packaging',
      description: 'All items are carefully packaged to ensure safe delivery'
    },
    {
      icon: Package,
      title: 'Order Tracking',
      description: 'Track your package from our warehouse to your door'
    },
    {
      icon: Globe,
      title: 'Worldwide Shipping',
      description: 'We ship to most countries around the world'
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
              <Truck className="h-16 w-16 text-brand-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
              SHIPPING RATES
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Fast, reliable shipping worldwide. Get your MILLIONBONE merchandise delivered safely to your door.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border text-center hover-lift"
              >
                <div className="bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Domestic Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              Domestic Shipping (United States)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domesticRates.map((rate, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border hover-lift">
                  <div className="text-center">
                    <h3 className="font-bold text-brand-primary text-lg mb-2">
                      {rate.method}
                    </h3>
                    <div className="text-3xl font-black text-brand-accent mb-2">
                      {rate.price}
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-brand-secondary mb-3">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{rate.time}</span>
                    </div>
                    <p className="text-brand-secondary text-sm">
                      {rate.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* International Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              International Shipping
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-brand-primary">Region</th>
                      <th className="px-6 py-4 text-center font-bold text-brand-primary">Standard</th>
                      <th className="px-6 py-4 text-center font-bold text-brand-primary">Express</th>
                      <th className="px-6 py-4 text-center font-bold text-brand-primary">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internationalRates.map((rate, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-brand-secondary">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-brand-accent" />
                            <span>{rate.region}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-brand-primary">
                          {rate.standard}
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-brand-accent">
                          {rate.express}
                        </td>
                        <td className="px-6 py-4 text-center text-brand-secondary">
                          {rate.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border"
          >
            <h3 className="text-2xl font-bold text-brand-primary mb-6 text-center">
              Important Shipping Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-brand-primary mb-3">Processing Time</h4>
                <ul className="space-y-2 text-brand-secondary">
                  <li>• Standard orders: 1-2 business days</li>
                  <li>• Custom orders: 3-5 business days</li>
                  <li>• Pre-orders: As specified on product page</li>
                  <li>• Orders placed after 2 PM EST ship next business day</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-brand-primary mb-3">Additional Information</h4>
                <ul className="space-y-2 text-brand-secondary">
                  <li>• Free shipping on orders over $75 (US only)</li>
                  <li>• International orders may be subject to customs fees</li>
                  <li>• PO Boxes accepted for standard shipping only</li>
                  <li>• Tracking information provided for all orders</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-brand-accent/10 rounded-xl">
              <h4 className="font-bold text-brand-primary mb-2">Need Help?</h4>
              <p className="text-brand-secondary">
                Have questions about shipping? Contact our customer service team at{' '}
                <a href="mailto:hello@millionbone.com" className="text-brand-accent font-medium">
                  hello@millionbone.com
                </a>{' '}
                or submit a support ticket for assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}