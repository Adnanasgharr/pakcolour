'use client';

import { useState } from 'react';
import { Search, X, FlaskConical, Filter } from 'lucide-react';
import ProductCard from '@/components/ProductCard';


export default function ProductCatalog({ initialProducts = [], categories = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = initialProducts.filter((product) => {
    const title = product.fields.title?.toLowerCase() || '';
    const cas = product.fields.casNumber?.toLowerCase() || '';
    const categoryTitle = product.fields.category?.fields?.title || '';

    const matchesSearch =
      title.includes(searchTerm.toLowerCase()) || cas.includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || categoryTitle === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    
    <div className="space-y-8 font-[family-name:var(--font-body)]">
      {/* Search & Category Filter Controls */}
    
      <div className="bg-white border border-[#D8DEE4] rounded-xl p-5 md:p-6 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by chemical name, CAS number, or grade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-sm text-[#0A2540] placeholder:text-slate-400 bg-[#F4F6F5] border border-[#D8DEE4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#0A2540]" />
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-3 border-t border-[#D8DEE4]/60 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider mr-1">
            Category:
          </span>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition border ${
              selectedCategory === 'All'
                ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                : 'bg-white text-slate-600 border-[#D8DEE4] hover:bg-[#F4F6F5] hover:text-[#0A2540]'
            }`}
          >
            All Products
          </button>

          {categories.map((cat) => {
            const categoryTitle = cat.fields?.title || cat.title;
            const isSelected = selectedCategory === categoryTitle;
            return (
              <button
                key={cat.sys?.id || categoryTitle}
                onClick={() => setSelectedCategory(categoryTitle)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition border ${
                  isSelected
                    ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                    : 'bg-white text-slate-600 border-[#D8DEE4] hover:bg-[#F4F6F5] hover:text-[#0A2540]'
                }`}
              >
                {categoryTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid / Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white border border-dashed border-[#D8DEE4] rounded-xl p-8 space-y-3">
          <FlaskConical className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#0A2540] text-base">
            No chemicals or dyes match your criteria
          </h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Try adjusting your search terms or clearing the category filters. For custom sourcing or unlisted specs, send an inquiry directly.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A2540] bg-[#F4F6F5] border border-[#D8DEE4] px-4 py-2 rounded hover:bg-[#0A2540] hover:text-white transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.sys?.id || product.fields?.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}