import { supabase } from './supabase';

export interface UserProfile {
  id: string;
  wallet_address: string | null;
  email: string;
  username: string | null;
  avatar_url: string | null;
  first_name: string | null;
  last_name: string | null;
  address_line_1: string | null;
  address_line_2: string | null;
  area_locality: string | null;
  city: string | null;
  state_province: string | null;
  country: string | null;
  zip_code: string | null;
  created_at: string;
  updated_at: string;
}

export class AuthService {
  /**
   * Get user profile by email
   */
  static async getUserProfileByEmail(email: string): Promise<UserProfile | null> {
    try {
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      return existingUser;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  /**
   * Update user profile by email
   */
  static async updateUserProfileByEmail(
    email: string, 
    updates: Partial<Omit<UserProfile, 'id' | 'email' | 'created_at'>>
  ): Promise<UserProfile | null> {
    try {
      const updateData = {
        ...updates,
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('users')
        .update(updateData)
        .eq('email', email)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      return null;
    }
  }

  /**
   * Check if username is available
   */
  static async isUsernameAvailable(username: string, currentEmail?: string): Promise<boolean> {
    try {
      let query = supabase
        .from('users')
        .select('id')
        .eq('username', username);

      // If updating current user, exclude their record
      if (currentEmail) {
        query = query.neq('email', currentEmail);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data.length === 0;
    } catch (error) {
      console.error('Error checking username availability:', error);
      return false;
    }
  }

  /**
   * Check if email is available
   */
  static async isEmailAvailable(email: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('email', email);

      if (error) throw error;
      return data.length === 0;
    } catch (error) {
      console.error('Error checking email availability:', error);
      return false;
    }
  }

  /**
   * Update wallet address for user
   */
  static async updateWalletAddress(email: string, walletAddress: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('users')
        .update({ 
          wallet_address: walletAddress,
          updated_at: new Date().toISOString()
        })
        .eq('email', email);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error updating wallet address:', error);
      return false;
    }
  }

  /**
   * Delete user account by email
   */
  static async deleteUser(email: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('email', email);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  }
}