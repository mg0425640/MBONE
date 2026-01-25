'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export default function EmailContactCard() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@millionbone.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            DIRECT CONTACT
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Reach out to us directly for any questions, partnerships, or support needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border text-center hover-lift"
        >
          <div className="bg-brand-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-10 w-10 text-brand-accent" />
          </div>

          <h3 className="text-2xl font-bold text-brand-primary mb-4">
            Email Support
          </h3>

          <p className="text-brand-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
            For inquiries, partnerships, technical support, or any questions about MILLIONBONE, 
            send us an email. Our community team is always ready to help.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-inner mb-6">
            <a 
              href={`mailto:${email}`}
              className="text-2xl md:text-3xl font-bold text-brand-accent hover:text-brand-primary transition-colors"
            >
              {email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>SEND EMAIL</span>
            </motion.a>

            <motion.button
              onClick={copyToClipboard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center space-x-2"
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </motion.button>
          </div>

          <div className="mt-8 text-sm text-brand-secondary">
            <p>• We typically respond within 24 hours</p>
            <p>• Available Monday-Sunday, 9 AM - 9 PM EST</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}