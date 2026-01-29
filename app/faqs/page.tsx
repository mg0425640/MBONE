'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQsClient() {

const [searchTerm, setSearchTerm] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>('general');

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is MILLIONBONE?',
          answer: 'MILLIONBONE ($MBONE) is a community-driven meme coin built for diamond hands. We focus on transparency, holder rewards, and building a strong community ecosystem.'
        },
        {
          question: 'How do I buy $MBONE tokens?',
          answer: 'You can buy $MBONE tokens through decentralized exchanges like Uniswap. Connect your wallet, ensure you have ETH for gas fees, and swap for $MBONE using our contract address.'
        },
        {
          question: 'What wallets are supported?',
          answer: 'We support all major Ethereum wallets including MetaMask, WalletConnect, Coinbase Wallet, and Rainbow Wallet. Make sure your wallet is connected to the Ethereum mainnet.'
        },
        {
          question: 'Is MILLIONBONE safe?',
          answer: 'Yes, our smart contract has been audited and we maintain full transparency. Our liquidity is locked, and we have no team allocation. Always DYOR and never invest more than you can afford to lose.'
        }
      ]
    },
    {
      id: 'orders',
      title: 'Orders & Shipping',
      icon: HelpCircle,
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Domestic shipping takes 5-7 business days for standard shipping, 2-3 days for express. International shipping varies by location but typically takes 10-25 business days.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship worldwide! International shipping rates vary by destination. Check our shipping rates page for detailed pricing and delivery times for your country.'
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on the carrier\'s website or in your account dashboard.'
        },
        {
          question: 'Can I change or cancel my order?',
          answer: 'Orders can be modified or cancelled within 2 hours of placement. After that, orders enter processing and cannot be changed. Contact customer service immediately if you need to make changes.'
        }
      ]
    },
    {
      id: 'returns',
      title: 'Returns & Refunds',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer 30-day returns on all items in original condition with tags attached. Custom or personalized items cannot be returned unless defective.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Contact our customer service team to initiate a return. We\'ll provide a return authorization number and prepaid shipping label. Package items securely and ship back to us.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive your returned items. The refund will be credited to your original payment method.'
        },
        {
          question: 'Do you offer exchanges?',
          answer: 'Yes, we offer exchanges for different sizes or colors of the same item. Contact customer service to arrange an exchange instead of a return and repurchase.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: HelpCircle,
      questions: [
        {
          question: 'I can\'t connect my wallet',
          answer: 'Make sure you\'re using a supported wallet and browser. Clear your browser cache, disable ad blockers, and ensure your wallet extension is updated to the latest version.'
        },
        {
          question: 'Transaction failed, what do I do?',
          answer: 'Failed transactions are usually due to insufficient gas fees or network congestion. Check your gas settings and try again with higher gas fees during busy periods.'
        },
        {
          question: 'Website is loading slowly',
          answer: 'Try refreshing the page, clearing your browser cache, or switching to a different browser. If issues persist, check our social media for any known technical issues.'
        },
        {
          question: 'How do I contact technical support?',
          answer: 'For technical issues, submit a support ticket with detailed information about your problem, including browser type, wallet used, and error messages received.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
            className="text-center mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-full shadow-lg inline-block mb-8">
              <HelpCircle className="h-16 w-16 text-brand-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Find answers to common questions about MILLIONBONE, our products, and services.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-lg"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (categoryIndex * 0.1) }}
                className="bg-white rounded-2xl shadow-lg border overflow-hidden"
              >
                <button
                  onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-brand-accent" />
                    </div>
                    <h2 className="text-xl font-bold text-brand-primary">
                      {category.title}
                    </h2>
                    <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
                      {category.questions.length}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-secondary transition-transform ${
                      openCategory === category.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {openCategory === category.id && (
                  <div className="border-t border-gray-100">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="px-8 py-6 border-b border-gray-50 last:border-b-0">
                        <h3 className="font-bold text-brand-primary mb-3 text-lg">
                          {faq.question}
                        </h3>
                        <p className="text-brand-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm && filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                No results found
              </h3>
              <p className="text-brand-secondary">
                Try searching with different keywords or browse all categories above.
              </p>
            </motion.div>
          )}

          {/* Still Need Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white text-center"
          >
            <MessageCircle className="h-12 w-12 text-brand-accent mx-auto mb-4" />
            <h3 className="text-2xl text-brand-primary font-bold mb-4">Still Need Help?</h3>
            <p className="text-brand-secondary text-lg mb-6">
              Can't find what you're looking for? Our customer service team is here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-primary px-6 py-3 rounded-full border border-brand-primary font-bold hover:bg-gray-100 transition-colors"
              >
                <a href="/support-ticket">Submit Support Ticket</a>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-white hover:text-brand-primary transition-colors"
              >
                <a href="mailto:hello@millionbone.com">Send Email</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}