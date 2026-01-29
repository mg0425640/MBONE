'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { useAuth } from '../auth/AuthProvider';
import { User, Mail, MapPin, Save, CreditCard as Edit3, Check, X, Wallet, Calendar, Globe, Chrome as Home, Phone, CircleAlert as AlertCircle } from 'lucide-react';
import { AuthService, type UserProfile } from '@/lib/auth';

export default function ProfileClient() {
  const { address, isConnected } = useAccount();
  const { user: authUser } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    area_locality: '',
    city: '',
    state_province: '',
    country: '',
    zip_code: '',
  });

  // Load user profile when wallet connects
  useEffect(() => {
    const loadUserProfile = async () => {
      if (authUser?.email) {
        setLoading(true);
        try {
          const profile = await AuthService.getUserProfileByEmail(authUser.email);
          if (profile) {
            setUserProfile(profile);
            setFormData({
              email: profile.email || '',
              username: profile.username || '',
              first_name: profile.first_name || '',
              last_name: profile.last_name || '',
              address_line_1: profile.address_line_1 || '',
              address_line_2: profile.address_line_2 || '',
              area_locality: profile.area_locality || '',
              city: profile.city || '',
              state_province: profile.state_province || '',
              country: profile.country || '',
              zip_code: profile.zip_code || '',
            });
          }
        } catch (err) {
          setError('Failed to load profile');
          console.error('Error loading profile:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, [authUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (!authUser?.email) return;

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      // Validate email and username availability if they changed

      if (formData.username && formData.username !== userProfile?.username) {
        const usernameAvailable = await AuthService.isUsernameAvailable(formData.username, authUser.email);
        if (!usernameAvailable) {
          setError('Username is already taken');
          setSaving(false);
          return;
        }
      }

      const updatedProfile = await AuthService.updateUserProfileByEmail(authUser.email, formData);
      
      if (updatedProfile) {
        setUserProfile(updatedProfile);
        setEditing(false);
        setSuccess('Profile updated successfully!');
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError('Failed to update profile');
      }
    } catch (err) {
      setError('An error occurred while updating profile');
      console.error('Error updating profile:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (userProfile) {
      setFormData({
        email: userProfile.email || '',
        username: userProfile.username || '',
        first_name: userProfile.first_name || '',
        last_name: userProfile.last_name || '',
        address_line_1: userProfile.address_line_1 || '',
        address_line_2: userProfile.address_line_2 || '',
        area_locality: userProfile.area_locality || '',
        city: userProfile.city || '',
        state_province: userProfile.state_province || '',
        country: userProfile.country || '',
        zip_code: userProfile.zip_code || '',
      });
    }
    setEditing(false);
    setError(null);
  };

  if (!authUser) {
    return (
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-brand-background to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-12 shadow-lg border"
            >
              <Wallet className="h-16 w-16 text-brand-accent mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-brand-primary mb-4">
                Please Sign In
              </h1>
              <p className="text-brand-secondary text-lg">
                Please sign in to view and manage your profile.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-brand-background to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="space-y-6">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            MY PROFILE
          </h1>
          <p className="text-xl text-brand-secondary">
            Manage your account information and preferences
          </p>
        </motion.div>

        {/* Alerts */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
          >
            <AlertCircle className="h-5 w-5 text-red-500" />
            <span className="text-red-700">{error}</span>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
          >
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-green-700">{success}</span>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="text-center">
                <div className="bg-brand-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-brand-accent" />
                </div>
                
                <h2 className="text-xl font-bold text-brand-primary mb-2">
                  {formData.first_name || formData.last_name 
                    ? `${formData.first_name} ${formData.last_name}`.trim()
                    : formData.username || 'Anonymous User'
                  }
                </h2>
                
                <p className="text-brand-secondary text-sm mb-4">
                  {formData.email || 'No email provided'}
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="h-4 w-4 text-brand-accent" />
                    <span className="text-sm font-medium text-brand-secondary">Email Address</span>
                  </div>
                  <code className="text-xs bg-white px-2 py-1 rounded font-mono text-brand-primary">
                    {authUser?.email}
                  </code>
                </div>

                {address && (
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wallet className="h-4 w-4 text-brand-accent" />
                      <span className="text-sm font-medium text-brand-secondary">Wallet Address</span>
                    </div>
                    <code className="text-xs bg-white px-2 py-1 rounded font-mono text-brand-primary">
                      {address}
                    </code>
                  </div>
                )}

                {userProfile && (
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center justify-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Joined {new Date(userProfile.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Edit3 className="h-3 w-3" />
                      <span>Updated {new Date(userProfile.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Profile Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-brand-primary">Profile Information</h3>
                
                {!editing ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setEditing(true)}
                    className="bg-brand-accent text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </motion.button>
                ) : (
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSave}
                      disabled={saving}
                      className="bg-green-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-green-600 transition-colors disabled:opacity-50"
                    >
                      {saving ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Check className="h-4 w-4" />
                      )}
                      <span>{saving ? 'Saving...' : 'Save'}</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </motion.button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                
                {/* Personal Information */}
                <div>
                  <h4 className="text-lg font-semibold text-brand-primary mb-4 flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Choose a username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={true}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Enter your email"
                      />
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h4 className="text-lg font-semibold text-brand-primary mb-4 flex items-center space-x-2">
                    <Home className="h-5 w-5" />
                    <span>Address Information</span>
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        name="address_line_1"
                        value={formData.address_line_1}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Street address, P.O. box, company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-brand-secondary font-medium mb-2">
                        Address Line 2 (Optional)
                      </label>
                      <input
                        type="text"
                        name="address_line_2"
                        value={formData.address_line_2}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brand-secondary font-medium mb-2">
                          Area/Locality
                        </label>
                        <input
                          type="text"
                          name="area_locality"
                          value={formData.area_locality}
                          onChange={handleInputChange}
                          disabled={!editing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="Neighborhood, area"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-brand-secondary font-medium mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          disabled={!editing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-brand-secondary font-medium mb-2">
                          State/Province
                        </label>
                        <input
                          type="text"
                          name="state_province"
                          value={formData.state_province}
                          onChange={handleInputChange}
                          disabled={!editing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="State or Province"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-brand-secondary font-medium mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          disabled={!editing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="Country"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-brand-secondary font-medium mb-2">
                          ZIP/Postal Code
                        </label>
                        <input
                          type="text"
                          name="zip_code"
                          value={formData.zip_code}
                          onChange={handleInputChange}
                          disabled={!editing}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="ZIP or Postal Code"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}