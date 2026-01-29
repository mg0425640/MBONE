'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
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

interface ProductGridProps {
  category: string;
  title: string;
}

export default function ProductGrid({ category, title }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [category, currentPage, itemsPerPage]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('products')
        .select('*', { count: 'exact' })
        .eq('is_active', true);

      if (category !== 'all') {
        const { data: categoryData } = await supabase
          .from('categories')
          .select('id')
          .eq('slug', category)
          .single();

        if (categoryData) {
          query = query.eq('category_id', categoryData.id);
        }
      }

      const { data, error, count } = await query
        .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setProducts(data || []);
      setTotalProducts(count || 0);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-3 py-2 rounded-lg border hover:bg-gray-50"
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded-lg border ${
              currentPage === page
                ? 'bg-brand-accent text-white border-brand-accent'
                : 'hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2">...</span>}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-3 py-2 rounded-lg border hover:bg-gray-50"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-background to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            {title}
          </h1>
          <p className="text-xl text-brand-secondary">
            {totalProducts} products found
          </p>
        </motion.div>

        {/* Items per page selector */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-brand-secondary font-medium">Items per page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <option value={12}>12</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
              <option value={80}>80</option>
              <option value={100}>100</option>
            </select>
          </div>
          
          <div className="text-brand-secondary">
            Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalProducts)} of {totalProducts}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(itemsPerPage)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                {renderPagination()}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}