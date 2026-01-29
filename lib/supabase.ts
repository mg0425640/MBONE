import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          wallet_address: string
          email: string | null
          username: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          wallet_address: string
          email?: string | null
          username?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          wallet_address?: string
          email?: string | null
          username?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          mrp: number | null
          discount: number | null
          final_mrp: number | null
          you_save: number | null
          exclusive_reward: string | null
          category_id: string | null
          image_url: string | null
          images: any
          product_image_1: string | null
          product_image_2: string | null
          product_image_3: string | null
          product_image_4: string | null
          product_image_5: string | null
          product_image_6: string | null
          product_image_7: string | null
          product_image_8: string | null
          product_image_9: string | null
          product_image_10: string | null
          size: string | null
          material_composition: string | null
          pattern: string | null
          fit_type: string | null
          sleeve_type: string | null
          collar_style: string | null
          length: string | null
          country_of_origin: string | null
          about_this_item: string | null
          manufacturer: string | null
          packer: string | null
          importer: string | null
          item_weight: string | null
          item_dimensions: string | null
          net_quantity: string | null
          generic_name: string | null
          stock_quantity: number
          is_featured: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          mrp?: number | null
          discount?: number | null
          final_mrp?: number | null
          you_save?: number | null
          exclusive_reward?: string | null
          category_id?: string | null
          image_url?: string | null
          images?: any
          product_image_1?: string | null
          product_image_2?: string | null
          product_image_3?: string | null
          product_image_4?: string | null
          product_image_5?: string | null
          product_image_6?: string | null
          product_image_7?: string | null
          product_image_8?: string | null
          product_image_9?: string | null
          product_image_10?: string | null
          size?: string | null
          material_composition?: string | null
          pattern?: string | null
          fit_type?: string | null
          sleeve_type?: string | null
          collar_style?: string | null
          length?: string | null
          country_of_origin?: string | null
          about_this_item?: string | null
          manufacturer?: string | null
          packer?: string | null
          importer?: string | null
          item_weight?: string | null
          item_dimensions?: string | null
          net_quantity?: string | null
          generic_name?: string | null
          stock_quantity?: number
          is_featured?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          mrp?: number | null
          discount?: number | null
          final_mrp?: number | null
          you_save?: number | null
          exclusive_reward?: string | null
          category_id?: string | null
          image_url?: string | null
          images?: any
          product_image_1?: string | null
          product_image_2?: string | null
          product_image_3?: string | null
          product_image_4?: string | null
          product_image_5?: string | null
          product_image_6?: string | null
          product_image_7?: string | null
          product_image_8?: string | null
          product_image_9?: string | null
          product_image_10?: string | null
          size?: string | null
          material_composition?: string | null
          pattern?: string | null
          fit_type?: string | null
          sleeve_type?: string | null
          collar_style?: string | null
          length?: string | null
          country_of_origin?: string | null
          about_this_item?: string | null
          manufacturer?: string | null
          packer?: string | null
          importer?: string | null
          item_weight?: string | null
          item_dimensions?: string | null
          net_quantity?: string | null
          generic_name?: string | null
          stock_quantity?: number
          is_featured?: boolean
          is_active?: boolean
          updated_at?: string
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string | null
          product_id: string | null
          quantity: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          product_id?: string | null
          quantity?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          product_id?: string | null
          quantity?: number
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          total_amount: number
          status: string
          shipping_address: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          total_amount: number
          status?: string
          shipping_address?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          total_amount?: number
          status?: string
          shipping_address?: any
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          price?: number
        }
      }
      customer_complaints: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          category: string
          priority: string
          status: string
          assigned_to: string | null
          resolution_notes: string | null
          created_at: string
          updated_at: string
          resolved_at: string | null
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          category?: string
          priority?: string
          status?: string
          assigned_to?: string | null
          resolution_notes?: string | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          category?: string
          priority?: string
          status?: string
          assigned_to?: string | null
          resolution_notes?: string | null
          updated_at?: string
          resolved_at?: string | null
        }
      }
      product_images: {
        Row: {
          id: string
          s_no: number
          image_url: string
          alt_text: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          s_no: number
          image_url: string
          alt_text?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          s_no?: number
          image_url?: string
          alt_text?: string | null
          is_active?: boolean
          updated_at?: string
        }
      }
    }
  }
}