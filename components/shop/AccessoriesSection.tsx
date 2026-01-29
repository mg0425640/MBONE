'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  mrp: number | null;
  discount: number | null;
  final_mrp: number | null;
  you_save: number | null;
  exclusive_reward: string | null;
  image_url: string;
  product_image_1: string | null;
  stock_quantity: number;
}

export default function AccessoriesSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccessoriesProducts();
  }, []);

  const fetchAccessoriesProducts = async () => {
    try {
      const { data: categoryData } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', 'accessories')
        .single();

      if (categoryData) {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', categoryData.id)
          .eq('is_active', true)
          .limit(3);

        if (error) throw error;
        setProducts(data || []);
      }
    } catch (error) {
      console.error('Error fetching accessories products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            ACCESSORIES
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Complete your pack look with premium accessories
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border hover-lift group-hover:border-brand-accent transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.product_image_1 || product.image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && product.discount > 0 && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                          -{product.discount}%
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-brand-primary font-bold text-lg mb-2 group-hover:text-brand-accent transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-brand-secondary text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.mrp && product.final_mrp && product.mrp !== product.final_mrp ? (
                          <>
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-black text-brand-accent">
                                ${product.final_mrp}
                              </span>
                              <span className="text-lg text-gray-500 line-through">
                                ${product.mrp}
                              </span>
                            </div>
                            {product.you_save && (
                              <span className="text-sm text-green-600 font-medium">
                                You save: ${product.you_save}
                              </span>
                            )}
                          </>
                        ) : (
                          <div className="text-2xl font-black text-brand-accent">
                            ${product.final_mrp || product.price}
                          </div>
                        )}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-primary text-white p-2 rounded-full hover:bg-brand-accent transition-colors"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </motion.button>
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-500">
                      {product.stock_quantity > 0 ? (
                        <span className="text-green-600">In Stock ({product.stock_quantity})</span>
                      ) : (
                        <span className="text-red-600">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/shop/accessories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg mx-auto"
            >
              <span>EXPLORE MORE</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}