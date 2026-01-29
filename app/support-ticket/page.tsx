'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { supabase } from '@/lib/supabase';

export default function SupportTicket() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'shipping', label: 'Shipping & Delivery' },
    { value: 'product', label: 'Product Issues' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'refund', label: 'Refunds & Returns' },
    { value: 'other', label: 'Other' }
  ];

  const priorities = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('customer_complaints')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'general',
        priority: 'medium'
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting your ticket');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <Navbar />
        <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-brand-background to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-4">
                  Ticket Submitted Successfully!
                </h1>
                
                <p className="text-xl text-brand-secondary mb-8">
                  Thank you for contacting us. We've received your support ticket and will respond within 24 hours.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-brand-primary mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-brand-secondary">You'll receive an email confirmation shortly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-brand-secondary">Our team will review your ticket within 4 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-brand-secondary">We'll respond with a solution or update within 24 hours</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-accent text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                >
                  Submit Another Ticket
                </button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-brand-background to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
              SUPPORT TICKET
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Need help? Submit a support ticket and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg border"
              >
                <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">Email Support</h3>
                <p className="text-brand-secondary text-sm mb-3">
                  For general inquiries and support
                </p>
                <a href="mailto:hello@millionbone.com" className="text-brand-accent font-medium">
                  hello@millionbone.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border"
              >
                <div className="bg-brand-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">Live Chat</h3>
                <p className="text-brand-secondary text-sm mb-3">
                  Join our community channels for instant help
                </p>
                <div className="space-y-1">
                  <a href="#" className="block text-brand-accent font-medium text-sm">Telegram</a>
                  <a href="#" className="block text-brand-accent font-medium text-sm">Discord</a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border"
              >
                <div className="bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">Response Time</h3>
                <p className="text-brand-secondary text-sm">
                  • Email: Within 24 hours<br/>
                  • Urgent issues: Within 4 hours<br/>
                  • Live chat: Instant
                </p>
              </motion.div>
            </div>

            {/* Support Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <h2 className="text-2xl font-bold text-brand-primary mb-6">Submit Support Ticket</h2>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                      >
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Priority *
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                      >
                        {priorities.map(priority => (
                          <option key={priority.value} value={priority.value}>{priority.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="Brief description of your issue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-secondary font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                      placeholder="Please provide detailed information about your issue..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-accent text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Ticket</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}   