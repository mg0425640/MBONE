'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Bone, LogIn } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from './auth/AuthProvider';
import AuthModal from './auth/AuthModal';
import WalletConnect from './WalletConnect';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, loading } = useAuth();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/tokenomics', label: 'Tokenomics' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleLoginSuccess = (user: any) => {
    setShowAuthModal(false);
  };
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="MillionBone"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-brand-primary tracking-wide">
              MILLIONBONE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-secondary hover:text-brand-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {!loading && (
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-accent text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                >
                  BUY $MBONE
                </motion.button>
                
                {user ? (
                  <WalletConnect />
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAuthModal(true)}
                    className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </motion.button>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-secondary hover:text-brand-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-brand-secondary hover:text-brand-accent font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <button className="w-full bg-brand-accent text-white px-4 py-2 rounded-full font-bold">
                  BUY $MBONE
                </button>
                
                {!loading && (
                  <div className="mt-2">
                    {user ? (
                      <WalletConnect />
                    ) : (
                      <button
                        onClick={() => setShowAuthModal(true)}
                        className="w-full bg-brand-primary text-white px-4 py-2 rounded-full font-bold flex items-center justify-center space-x-2"
                      >
                        <LogIn className="h-4 w-4" />
                        <span>Login</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}