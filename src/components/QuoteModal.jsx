"use client";

import { useState } from "react";
import { MessageCircle, Send, X, Check } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

const WHATSAPP_NUMBER = "923333023307";
const RFQ_EMAIL = "pakcolourchemical@outlook.com";

const CATEGORY_OPTIONS = [
  "Industrial Dyes",
  "Pigments & Colours",
  "Specialty Chemicals",
  "Textile Auxiliaries",
  "Other Sourcing",
];

export default function QuoteModal() {
  const { isOpen, form, setForm, closeQuote } = useQuote();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateQuoteText = () =>
    `Quotation Request - Pak Colour & Chemical\n\n` +
    `Name: ${form.name || "N/A"}\n` +
    `Company: ${form.company || "N/A"}\n` +
    `Contact: ${form.phone || "N/A"} | ${form.email || "N/A"}\n` +
    `Category: ${form.category}\n` +
    `Product / CAS: ${form.productDetails || "Not specified"}\n` +
    `Quantity: ${form.quantity || "Not specified"}\n` +
    `Additional Notes: ${form.notes || "None"}`;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(generateQuoteText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    closeQuote();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = `Quotation Request: ${form.category} - ${form.company || form.name || "RFQ"}`;
    const body = generateQuoteText();

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RFQ_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const win = window.open(gmailUrl, "_blank");

    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const inputClass =
    "w-full px-3 py-2 border border-[#D8DEE4] rounded focus:outline-none focus:border-[#0A2540]";

  return (
    <div className="fixed inset-0 bg-[#0A2540]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#D8DEE4]">
        {/* Header */}
        <div className="bg-[#0A2540] text-white p-5 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">
              Request a Price Quotation
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">Pak Colour & Chemical • Commercial RFQ</p>
          </div>
          <button
            onClick={closeQuote}
            aria-label="Close"
            className="text-slate-300 hover:text-white transition p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4 text-sm text-[#0A2540]">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Customer Name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Company Name</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g. Textile Mills Ltd"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+92 300 0000000"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Product Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`${inputClass} bg-white`}
              >
                {/* Includes the current value, so a Contentful category not in the list still shows */}
                {[...new Set([...CATEGORY_OPTIONS, form.category].filter(Boolean))].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Quantity Required</label>
              <input
                type="text"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 kg / 2 Drums"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              Product Name / CAS Number / Grade
            </label>
            <input
              type="text"
              name="productDetails"
              value={form.productDetails}
              onChange={handleChange}
              placeholder="e.g. Reactive Blue 21 or CAS 147-14-8"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Additional Requirements / Notes</label>
            <textarea
              name="notes"
              rows={2}
              value={form.notes}
              onChange={handleChange}
              placeholder="Mention delivery location or specific specs..."
              className={inputClass}
            />
          </div>

          {copied && (
            <div className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              RFQ details copied to clipboard & email tab opened!
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              type="submit"
              className="flex-1 bg-[#1F7A5C] hover:bg-[#186349] text-white font-semibold py-2.5 rounded transition flex items-center justify-center gap-2 text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="flex-1 bg-[#0A2540] hover:bg-[#0d2f52] text-white font-semibold py-2.5 rounded transition flex items-center justify-center gap-2 text-xs"
            >
              <Send className="w-4 h-4" />
              Send via Email / Gmail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}