'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductCatalog({ initialProducts, categories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = initialProducts.filter((product) => {
    const title = product.fields.title?.toLowerCase() || '';
    const cas = product.fields.casNumber?.toLowerCase() || '';
    const categoryTitle = product.fields.category?.fields?.title || '';
    
    const matchesSearch = title.includes(searchTerm.toLowerCase()) || cas.includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || categoryTitle === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Search Bar & Category Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <input
          type="text"
          placeholder="Search by chemical name or CAS number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-80 border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === 'All'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.sys.id}
              onClick={() => setSelectedCategory(cat.fields.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.fields.title
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.fields.title}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 border border-dashed rounded-xl text-slate-500">
          No chemicals or dyes match your search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const { title, slug, casNumber, grade, category } = product.fields;
            return (
              <div
                key={product.sys.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {category?.fields?.title || 'Chemical & Color'}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p><span className="font-medium text-slate-800">CAS:</span> {casNumber || 'N/A'}</p>
                    <p><span className="font-medium text-slate-800">Grade:</span> {grade || 'Industrial Grade'}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/products/${slug}`}
                    className="text-sm font-semibold text-slate-900 hover:text-emerald-600 flex items-center gap-1 transition"
                  >
                    View Details & RFQ &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}