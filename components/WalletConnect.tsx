'use client'

import { useState, useEffect, useRef } from 'react';
import { useAccount, useDisconnect, useConnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wallet,
  User,
  ShoppingCart,
  History,
  FileText,
  LogOut,
  ChevronDown,
} from 'lucide-react'
import Link from 'next/link'
import { useAuth } from './auth/AuthProvider';
import { supabase } from '@/lib/supabase';

export default function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isConnectingWallet, setIsConnectingWallet] = useState(false)
  const { user, signOut } = useAuth();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Handle wallet connection and save to database
  useEffect(() => {
    const saveWalletToDatabase = async () => {
      if (isConnected && address && user && !isConnectingWallet) {
        setIsConnectingWallet(true);
        try {
          // Update user's wallet address in the database
          const { error } = await supabase
            .from('users')
            .update({ 
              wallet_address: address,
              updated_at: new Date().toISOString()
            })
            .eq('email', user.email);

          if (error) {
            console.error('Error updating wallet address:', error);
          } else {
            console.log('Wallet address saved successfully');
          }
        } catch (error) {
          console.error('Error saving wallet address:', error);
        } finally {
          setIsConnectingWallet(false);
        }
      }
    };

    saveWalletToDatabase();
  }, [isConnected, address, user, isConnectingWallet]);

  const menuItems = [
    { icon: User, label: 'Dashboard', href: '/dashboard' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: ShoppingCart, label: 'Cart', href: '/cart' },
    { icon: History, label: 'Order History', href: '/history' },
    { icon: FileText, label: 'Transactions', href: '/transactions' },
  ]

  const handleDisconnect = () => {
    disconnect();
    setOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    disconnect();
    setOpen(false);
  };
  if (!isConnected) {
    return (
      <ConnectButton.Custom>
        {({ openConnectModal }) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openConnectModal}
            className="bg-brand-accent text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 disabled:opacity-50"
            disabled={isConnectingWallet}
          >
            <Wallet className="h-4 w-4" />
            {isConnectingWallet ? 'Connecting...' : 'Connect Wallet'}
          </motion.button>
        )}
      </ConnectButton.Custom>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 disabled:opacity-50"
        disabled={isConnectingWallet}
      >
        <Wallet className="h-4 w-4" />
        {isConnectingWallet ? 'Setting up...' : `${address?.slice(0, 6)}…${address?.slice(-4)}`}
        <ChevronDown className="h-4 w-4" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border z-50"
          >
            <div className="py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-brand-secondary"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}

              <hr className="my-2" />

              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-4 py-2 text-orange-600 hover:bg-orange-50 w-full text-left"
              >
                <User className="h-4 w-4" />
                Sign Out
              </button>

              <button
                onClick={handleDisconnect}
                className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
              >
                <LogOut className="h-4 w-4" />
                Disconnect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
