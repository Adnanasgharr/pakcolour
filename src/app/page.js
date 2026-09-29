import Link from 'next/link';
import { getProducts } from '@/lib/contentful';

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-20 py-16 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Trusted Industrial Chemical & Dye Supplier
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          High-Performance Pigments, Dyes & <span className="text-emerald-400">Specialty Chemicals</span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          PAK COLOUR & CHEMICAL delivers premium quality commercial colorants and industrial solutions backed by technical documentation and prompt RFQ turnaround.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/products"
            className="bg-emerald-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20 text-center"
          >
            Explore Product Catalog &rarr;
          </Link>
          <a
            href="https://wa.me/923333023307"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition text-center flex items-center justify-center gap-2"
          >
            Quick WhatsApp Inquiry
          </a>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-slate-800 bg-slate-900/40 rounded-2xl px-6 text-center">
        <div>
          <p className="text-3xl font-extrabold text-white">100%</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Quality Guaranteed</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-white">Fast RFQ</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Same-Day Quote Response</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-white">Full MSDS</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Technical Datasheets Included</p>
        </div>
      </div>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Products</h2>
              <p className="text-slate-400 text-sm mt-1">Key raw materials and specialized dye formulations.</p>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
            >
              View All ({products.length}) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const { title, slug, casNumber, grade, category } = product.fields;
              return (
                <div
                  key={product.sys.id}
                  className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl hover:border-slate-700 transition flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 inline-block">
                      {category?.fields?.title || 'Chemical & Color'}
                    </span>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <div className="text-sm text-slate-400 space-y-1">
                      <p><span className="text-slate-500 font-medium">CAS:</span> {casNumber || 'N/A'}</p>
                      <p><span className="text-slate-500 font-medium">Grade:</span> {grade || 'Industrial Grade'}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <Link
                      href={`/products/${slug}`}
                      className="text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-between transition"
                    >
                      <span>Request Quote</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}