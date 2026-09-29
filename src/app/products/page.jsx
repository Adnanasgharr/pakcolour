import Link from 'next/link';
import { getProducts, getCategories } from '@/lib/contentful';

export const revalidate = 60; // Revalidate data every 60 seconds (ISR)

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900">Product Catalog</h1>
        <p className="text-slate-600 mt-2">
          Explore our range of industrial colors, dyes, and specialized chemical solutions.
        </p>
      </div>

      {/* Category Pills */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">
            All Products
          </span>
          {categories.map((cat) => (
            <span
              key={cat.sys.id}
              className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full text-sm font-medium cursor-pointer transition"
            >
              {cat.fields.title}
            </span>
          ))}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
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
    </main>
  );
}