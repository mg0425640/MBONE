import { supabase } from './supabase';
import type { Database } from './supabase';

type User = Database['public']['Tables']['users']['Row'];
type UserInsert = Database['public']['Tables']['users']['Insert'];
type UserUpdate = Database['public']['Tables']['users']['Update'];

export interface UserProfile {
  id: string;
  wallet_address: string;
  email: string | null;
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
   * Create or update user when wallet connects
   */
  static async createOrUpdateUser(walletAddress: string): Promise<UserProfile | null> {
    try {
      // First, check if user already exists
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('wallet_address', walletAddress)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (existingUser) {
        // User exists, update the updated_at timestamp
        const { data: updatedUser, error: updateError } = await supabase
          .from('users')
          .update({ updated_at: new Date().toISOString() })
          .eq('wallet_address', walletAddress)
          .select()
          .single();

        if (updateError) throw updateError;
        return updatedUser;
      } else {
        // Create new user
        const newUser: UserInsert = {
          wallet_address: walletAddress,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { data: createdUser, error: createError } = await supabase
          .from('users')
          .insert(newUser)
          .select()
          .single();

        if (createError) throw createError;
        return createdUser;
      }
    } catch (error) {
      console.error('Error creating/updating user:', error);
      return null;
    }
  }

  /**
   * Get user profile by wallet address
   */
  static async getUserProfile(walletAddress: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('wallet_address', walletAddress)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // User not found
          return null;
        }
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  /**
   * Update user profile
   */
  static async updateUserProfile(
    walletAddress: string, 
    updates: Partial<UserUpdate>
  ): Promise<UserProfile | null> {
    try {
      const updateData: UserUpdate = {
        ...updates,
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('users')
        .update(updateData)
        .eq('wallet_address', walletAddress)
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
  static async isUsernameAvailable(username: string, currentWalletAddress?: string): Promise<boolean> {
    try {
      let query = supabase
        .from('users')
        .select('id')
        .eq('username', username);

      // If updating current user, exclude their record
      if (currentWalletAddress) {
        query = query.neq('wallet_address', currentWalletAddress);
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
  static async isEmailAvailable(email: string, currentWalletAddress?: string): Promise<boolean> {
    try {
      let query = supabase
        .from('users')
        .select('id')
        .eq('email', email);

      // If updating current user, exclude their record
      if (currentWalletAddress) {
        query = query.neq('wallet_address', currentWalletAddress);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data.length === 0;
    } catch (error) {
      console.error('Error checking email availability:', error);
      return false;
    }
  }

  /**
   * Delete user account
   */
  static async deleteUser(walletAddress: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('wallet_address', walletAddress);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  }
}