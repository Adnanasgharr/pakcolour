import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getProducts } from '@/lib/contentful';
import ProductCard from '@/components/ProductCard';

const FEATURED_COUNT = 3; // matches the 3-column grid below

export default async function FeaturedProducts() {
  const products = await getProducts();

  // If you add a "featured" Boolean field to the Product model in Contentful,
  // products ticked as featured are shown first; otherwise the first few are used.
  const flagged = products.filter((p) => p.fields?.featured === true);
  const featured = (flagged.length > 0 ? flagged : products).slice(0, FEATURED_COUNT);

  if (featured.length === 0) return null;

  return (
    <section className="bg-[#F4F6F5] border-y border-[#D8DEE4] px-6 md:px-12 py-16 font-[family-name:var(--font-body)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
              Featured Stock
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Frequently requested industrial chemicals, available for immediate dispatch across Pakistan.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A2540] hover:text-[#E8A317] transition"
          >
            View all products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.sys?.id || product.fields?.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}