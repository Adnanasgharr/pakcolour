import { getProducts, getCategories } from '@/lib/contentful';
import ProductCatalog from '@/components/ProductCatalog';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Product Catalog | PAK COLOUR & CHEMICAL',
  description:
    'Browse our comprehensive catalog of industrial dyes, organic & inorganic pigments, and chemical solutions. Search by chemical name or CAS number.',
  openGraph: {
    title: 'Product Catalog | PAK COLOUR & CHEMICAL',
    description:
      'Search and filter our complete catalog of industrial chemicals, pigments, and dyes in Pakistan.',
    type: 'website',
  },
};

export const revalidate = 60; // ISR fallback every 60 seconds

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">Product Catalog</h1>
          <p className="text-slate-600 mt-2">
            Explore our complete range of industrial colors, dyes, and specialized chemical solutions.
          </p>
        </div>

        <ProductCatalog initialProducts={products} categories={categories} />
      </main>
    </>
  );
}