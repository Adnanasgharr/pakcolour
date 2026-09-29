import Link from 'next/link';
import { getProducts } from '@/lib/contentful';

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3); // Display top 3 featured items

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <span className="inline-block bg-emerald-50 text-emerald-700 font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-emerald-200">
          Trusted Industrial Chemical & Dye Supplier
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          High-Performance Pigments, Dyes & Specialty Chemicals
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          PAK COLOUR & CHEMICAL delivers premium quality commercial colorants and industrial solutions backed by technical documentation and prompt RFQ turnaround.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/products"
            className="bg-slate-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            Explore Product Catalog &rarr;
          </Link>
          <a
            href="https://wa.me/923333023307"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Quick WhatsApp Inquiry
          </a>
        </div>
      </section>

      {/* Featured Products Overview */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="flex justify-between items-end border-b pb-4 border-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
              <p className="text-slate-600 text-sm mt-1">Key raw materials and specialized dye formulations.</p>
            </div>
            <Link href="/products" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
              View All ({products.length}) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const { title, slug, casNumber, category } = product.fields;
              return (
                <div key={product.sys.id} className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-4">
                  <span className="text-xs font-bold text-emerald-600 uppercase">
                    {category?.fields?.title || 'Chemical'}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600"><span className="font-medium text-slate-800">CAS:</span> {casNumber || 'N/A'}</p>
                  <Link
                    href={`/products/${slug}`}
                    className="inline-block text-sm font-semibold text-slate-900 hover:text-emerald-600"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}