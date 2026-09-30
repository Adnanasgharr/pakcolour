'use client';

import { FileText } from 'lucide-react';
import { useQuote } from '@/components/QuoteContext';

// Opens the global quote modal prefilled with this product.
export default function ProductQuoteButton({ productDetails, category, className = '' }) {
  const { openQuote } = useQuote();

  const handleClick = () => {
    const prefill = { productDetails };
    if (category) prefill.category = category;
    openQuote(prefill);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#0d2f52] text-white font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md ${className}`}
    >
      <FileText className="w-4 h-4" />
      Request a Quote
    </button>
  );
}