'use client';

import { useState } from 'react';

export default function QuoteForm({ initialProductName = '' }) {
  const [productName, setProductName] = useState(initialProductName);
  const [quantity, setQuantity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName, email, phone, productName, quantity, details }),
      });

      if (res.ok) {
        setStatus('success');
        setCompanyName('');
        setEmail('');
        setPhone('');
        setDetails('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-6 rounded-xl border">
      <h3 className="text-xl font-semibold text-slate-900">Request a Commercial Quotation</h3>
      {status === 'success' && (
        <p className="text-emerald-600 bg-emerald-50 p-3 rounded">
          Thank you! Your quote request has been sent to our sales team.
        </p>
      )}
      {status === 'error' && (
        <p className="text-rose-600 bg-rose-50 p-3 rounded">
          Failed to send request. Please try again or contact via WhatsApp.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Required Quantity (e.g. 500 kg / 2 Tons)</label>
          <input
            type="text"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone / WhatsApp Number</label>
        <input
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Additional Specification / Application Details</label>
        <textarea
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 disabled:opacity-50"
      >
        {loading ? 'Submitting Request...' : 'Send RFQ Inquiry'}
      </button>
    </form>
  );
}