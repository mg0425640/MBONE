import Link from 'next/link';
import { Mail, Twitter, MessageCircle, Users, Instagram, Bone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Telegram' },
    { icon: Users, href: '#', label: 'Discord' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bone className="h-8 w-8 text-brand-accent" />
              <span className="text-xl font-bold tracking-wide">MILLIONBONE</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A premium community-driven meme coin built for diamond hands. 
              Join the pack and hunt the moon with $MBONE.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@millionbone.com" className="hover:text-brand-accent transition-colors">
                hello@millionbone.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-brand-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-brand-accent transition-colors">
                About
              </Link>
              <Link href="/tokenomics" className="block text-gray-300 hover:text-brand-accent transition-colors">
                Tokenomics
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-brand-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-brand-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MILLIONBONE. All rights reserved. Community-driven project.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This is not financial advice. Cryptocurrency investments are risky.
          </p>
        </div>
      </div>
    </footer>
  );
}