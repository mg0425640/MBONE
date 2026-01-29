'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

type AuthView = 'login' | 'signup' | 'forgot-password';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [currentView, setCurrentView] = useState<AuthView>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    });
    setError(null);
    setSuccess(null);
    setShowPassword(false);
  };

  const handleViewChange = (view: AuthView) => {
    setCurrentView(view);
    resetForm();
  };

  const handleClose = () => {
    resetForm();
    setCurrentView('login');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      if (data.user) {
        onLoginSuccess(data.user);
        handleClose();
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        setSuccess('Account created successfully! Please check your email to verify your account.');
        setTimeout(() => {
          setCurrentView('login');
          resetForm();
        }, 2000);
      }
    } catch (err: any) {
      setError(err.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setSuccess('Password reset email sent! Please check your inbox.');
      setTimeout(() => {
        setCurrentView('login');
        resetForm();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label className="block text-brand-secondary font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label className="block text-brand-secondary font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-brand-accent text-white py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </motion.button>

      <div className="text-center space-y-2">
        <button
          type="button"
          onClick={() => handleViewChange('forgot-password')}
          className="text-brand-accent hover:text-brand-primary transition-colors text-sm"
        >
          Forgot your password?
        </button>
        <div className="text-brand-secondary">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => handleViewChange('signup')}
            className="text-brand-accent hover:text-brand-primary font-medium transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );

  const renderSignupForm = () => (
    <form onSubmit={handleSignup} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-brand-secondary font-medium mb-2">
            First Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              placeholder="First name"
            />
          </div>
        </div>
        <div>
          <label className="block text-brand-secondary font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label className="block text-brand-secondary font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label className="block text-brand-secondary font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Create a password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-brand-secondary font-medium mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Confirm your password"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-brand-accent text-white py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </motion.button>

      <div className="text-center">
        <div className="text-brand-secondary">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => handleViewChange('login')}
            className="text-brand-accent hover:text-brand-primary font-medium transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleForgotPassword} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-brand-primary mb-2">
          Reset Your Password
        </h3>
        <p className="text-brand-secondary">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div>
        <label className="block text-brand-secondary font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-brand-accent text-white py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Reset Link'}
      </motion.button>

      <div className="text-center">
        <button
          type="button"
          onClick={() => handleViewChange('login')}
          className="text-brand-accent hover:text-brand-primary transition-colors"
        >
          Back to Sign In
        </button>
      </div>
    </form>
  );

  const getTitle = () => {
    switch (currentView) {
      case 'login':
        return 'Welcome Back';
      case 'signup':
        return 'Create Account';
      case 'forgot-password':
        return 'Forgot Password';
      default:
        return 'Welcome';
    }
  };

  const getSubtitle = () => {
    switch (currentView) {
      case 'login':
        return 'Sign in to your MILLIONBONE account';
      case 'signup':
        return 'Join the MILLIONBONE community';
      case 'forgot-password':
        return 'Reset your password';
      default:
        return '';
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          <div className="flex h-full">
            {/* Left Side - Image */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <Image
                src="/image/hero-bone.png"
                alt="MILLIONBONE"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h2 className="text-3xl font-black mb-4">MILLIONBONE</h2>
                  <p className="text-lg opacity-90">
                    Join the pack of diamond hands
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-8 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              <div className="max-w-sm mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-brand-primary mb-2">
                    {getTitle()}
                  </h1>
                  <p className="text-brand-secondary">
                    {getSubtitle()}
                  </p>
                </div>

                {/* Error/Success Messages */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-3 mb-6"
                  >
                    <p className="text-red-700 text-sm">{error}</p>
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-3 mb-6"
                  >
                    <p className="text-green-700 text-sm">{success}</p>
                  </motion.div>
                )}

                {/* Forms */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentView}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentView === 'login' && renderLoginForm()}
                    {currentView === 'signup' && renderSignupForm()}
                    {currentView === 'forgot-password' && renderForgotPasswordForm()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}