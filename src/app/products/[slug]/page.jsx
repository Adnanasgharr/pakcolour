import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Tag,
  FlaskConical,
  Download,
  MessageCircle,
  ShieldCheck,
  Truck,
  Headset,
} from 'lucide-react';
import { getProductBySlug } from '@/lib/contentful';
import { getProductImage } from '@/lib/productImage';

import ProductQuoteButton from '@/components/ProductQuoteButton';
import Navbar from '@/components/Navbar';


export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | PAK COLOUR & CHEMICAL',
    };
  }

  const { title, casNumber, grade, category } = product.fields;
  const categoryName = category?.fields?.title || 'Chemical & Color';
  const image = getProductImage(product.fields);

  return {
    title: `${title} ${casNumber ? `(CAS: ${casNumber})` : ''} | PAK COLOUR & CHEMICAL`,
    description: `Request bulk quotation and technical documents (MSDS/TDS) for ${title}. ${categoryName} supplied in ${grade || 'Industrial Grade'}.`,
    openGraph: {
      title: `${title} | PAK COLOUR & CHEMICAL`,
      description: `Request quotations and MSDS documentation for ${title} (${casNumber ? `CAS: ${casNumber}` : 'Industrial Grade'}).`,
      type: 'website',
      ...(image && { images: [{ url: image.url }] }),
    },
  };
}

const ASSURANCES = [
  { icon: ShieldCheck, text: 'Quality-checked against spec' },
  { icon: Truck, text: 'Nationwide delivery across Pakistan' },
  { icon: Headset, text: 'Direct technical support' },
];

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const fields = product.fields;
  const image = getProductImage(fields);
  const categoryTitle = fields.category?.fields?.title;
  const categoryName = categoryTitle || 'Chemical & Color';
  const msdsUrl = fields.msdsDocument?.fields?.file?.url;

  const productDetails =
    `${fields.title}` +
    `${fields.casNumber ? ` (CAS: ${fields.casNumber})` : ''}` +
    `${fields.grade ? ` - ${fields.grade}` : ''}`;

  const whatsappMessage = encodeURIComponent(
    `Hello PAK COLOUR & CHEMICAL, I would like information / a quotation for ${fields.title}.`
  );

  const specs = [
    { label: 'CAS Number', value: fields.casNumber || 'N/A', mono: true },
    { label: 'Grade', value: fields.grade || 'Industrial Grade' },
    { label: 'Standard Packaging', value: fields.packagingOptions || '25 kg Bags / Drums' },
    { label: 'Category', value: categoryName },
  ];

  return (
    <>
      <Navbar/>

      <main className="flex-1 font-[family-name:var(--font-body)]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#D8DEE4]">
          <nav
            aria-label="Breadcrumb"
            className="max-w-6xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center gap-1.5 text-xs text-slate-500"
          >
            <Link href="/" className="hover:text-[#0A2540] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-[#0A2540] transition">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0A2540] font-semibold truncate">{fields.title}</span>
          </nav>
        </div>

        {/* Product overview */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="md:sticky md:top-6">
              <div className="relative aspect-square bg-white border border-[#D8DEE4] rounded-xl shadow-sm overflow-hidden flex items-center justify-center">
                {image ? (
                  <Image
                    src={image.url}
                    alt={image.alt || fields.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-8"
                  />
                ) : (
                  <FlaskConical className="w-16 h-16 text-slate-300" />
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-7">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1F7A5C] bg-[#1F7A5C]/10 px-2.5 py-1 rounded uppercase tracking-wider">
                    <Tag className="w-3 h-3" />
                    {categoryName}
                  </span>
                  {fields.grade && (
                    <span className="text-[11px] font-medium text-slate-500 border border-[#D8DEE4] px-2 py-0.5 rounded bg-white">
                      {fields.grade}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#0A2540] leading-tight tracking-tight">
                  {fields.title}
                </h1>
              </div>

              {/* Specification table */}
              <div className="bg-white border border-[#D8DEE4] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-[#0A2540] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider">
                  Product Specifications
                </div>
                <dl className="divide-y divide-[#D8DEE4]">
                  {specs.map(({ label, value, mono }) => (
                    <div key={label} className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                      <dt className="text-slate-500 font-medium">{label}</dt>
                      <dd
                        className={`text-right font-semibold text-[#0A2540] ${
                          mono ? 'font-mono' : ''
                        }`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <ProductQuoteButton
                    productDetails={productDetails}
                    category={categoryTitle}
                    className="flex-1"
                  />
                  <a
                    href={`https://wa.me/923333023307?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1F7A5C] hover:bg-[#186349] text-white font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire via WhatsApp
                  </a>
                </div>

                {msdsUrl && (
                  <a
                    href={msdsUrl.startsWith('//') ? `https:${msdsUrl}` : msdsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F4F6F5] text-[#0A2540] border border-[#D8DEE4] hover:border-[#0A2540] font-[family-name:var(--font-display)] font-semibold px-6 py-3 rounded-md transition text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download MSDS Sheet (PDF)
                  </a>
                )}
              </div>

              {/* Assurances */}
              <ul className="grid sm:grid-cols-3 gap-3 pt-1">
                {ASSURANCES.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-2 text-xs text-slate-600 leading-snug"
                  >
                    <Icon className="w-4 h-4 text-[#0A2540] shrink-0" strokeWidth={1.75} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

     
      </main>
    </>
  );
}