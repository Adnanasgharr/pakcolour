'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FileText, FlaskConical, Tag } from 'lucide-react';
import { getProductImage } from '@/lib/productImage';
import { useQuote } from '@/components/QuoteContext';

// Shared by ProductCatalog and FeaturedProducts.
// - Clicking anywhere on the card opens the full specs page (stretched link).
// - The "Request Quote" button sits above the link and opens the quote modal
//   prefilled with this product.
export default function ProductCard({ product }) {
  const { openQuote } = useQuote();
  const { title, slug, casNumber, grade, category } = product.fields || {};
  const categoryTitle = category?.fields?.title;
  const categoryName = categoryTitle || 'Chemical & Color';
  const image = getProductImage(product.fields);

  const handleRequestQuote = () => {
    const productDetails =
      `${title || ''}` +
      `${casNumber ? ` (CAS: ${casNumber})` : ''}` +
      `${grade ? ` - ${grade}` : ''}`;

    const prefill = { productDetails };
    if (categoryTitle) prefill.category = categoryTitle;

    openQuote(prefill);
  };

  return (
    <div className="group relative bg-white border border-[#D8DEE4] hover:border-[#0A2540] rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        {/* Product image (placeholder icon when none is set) */}
        <div className="relative -mx-6 -mt-6 aspect-[4/3] bg-[#F4F6F5] border-b border-[#D8DEE4] flex items-center justify-center">
          {image ? (
            <Image
              src={image.url}
              alt={image.alt || title || 'Product image'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4"
            />
          ) : (
            <FlaskConical className="w-10 h-10 text-slate-300" />
          )}
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1F7A5C] bg-[#1F7A5C]/10 px-2.5 py-1 rounded uppercase tracking-wider">
            <Tag className="w-3 h-3" />
            {categoryName}
          </span>
          {grade && (
            <span className="text-[11px] font-medium text-slate-500 border border-[#D8DEE4] px-2 py-0.5 rounded bg-[#F4F6F5]">
              {grade}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-lg font-[family-name:var(--font-display)] font-bold text-[#0A2540] group-hover:text-[#0d2f52] transition leading-snug">
          {title}
        </h2>

        {/* Specs */}
        <div className="text-xs text-slate-600 bg-[#F4F6F5] p-3 rounded-lg border border-[#D8DEE4]/60 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">CAS Number:</span>
            <span className="font-mono font-semibold text-[#0A2540]">{casNumber || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Standard Grade:</span>
            <span className="font-semibold text-[#0A2540]">{grade || 'Industrial Grade'}</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-[#D8DEE4] flex items-center justify-between gap-3">
        {/* Stretched link: the ::after covers the whole card so any click opens the specs */}
        <Link
          href={`/products/${slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A2540] group-hover:text-[#E8A317] transition after:absolute after:inset-0 after:content-['']"
        >
          View Full Specs
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Sits above the stretched link so it doesn't trigger navigation */}
        <button
          type="button"
          onClick={handleRequestQuote}
          className="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#E8A317] hover:text-[#0A2540] px-3.5 py-2 rounded transition"
        >
          <FileText className="w-3.5 h-3.5" />
          Request Quote
        </button>
      </div>
    </div>
  );
}