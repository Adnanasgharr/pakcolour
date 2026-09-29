import { getProductBySlug } from '@/lib/contentful';
import QuoteForm from '@/components/QuoteForm';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const fields = product.fields;
  const whatsappMessage = encodeURIComponent(
    `Hello PAK COLOUR & CHEMICAL, I would like information / a quotation for ${fields.title}.`
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <div>
        <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold">
          {fields.category?.fields?.title || 'Chemical & Color'}
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-1">{fields.title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 border p-6 rounded-xl">
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold">CAS Number</p>
          <p className="text-lg font-medium text-slate-800">{fields.casNumber || 'N/A'}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold">Grade</p>
          <p className="text-lg font-medium text-slate-800">{fields.grade || 'Industrial Grade'}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold">Standard Packaging</p>
          <p className="text-lg font-medium text-slate-800">{fields.packagingOptions || '25 kg Bags / Drums'}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {fields.msdsDocument?.fields?.file?.url && (
          <a
            href={`https:${fields.msdsDocument.fields.file.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-white px-5 py-3 rounded-lg font-medium hover:bg-slate-700 transition"
          >
            Download MSDS Sheet (PDF)
          </a>
        )}
        <a
          href={`https://wa.me/923333023307?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
        >
          Inquire via WhatsApp
        </a>
      </div>

      <QuoteForm initialProductName={fields.title} />
    </main>
  );
}