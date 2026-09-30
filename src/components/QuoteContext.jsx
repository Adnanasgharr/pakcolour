"use client";

import { createContext, useContext, useState } from "react";

const QuoteContext = createContext(null);

const INITIAL_FORM = {
  name: "",
  company: "",
  phone: "",
  email: "",
  category: "Industrial Dyes",
  productDetails: "",
  quantity: "",
  notes: "",
};

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);

  // Open the modal, optionally prefilling fields: openQuote({ category, productDetails })
  const openQuote = (prefill = {}) => {
    setForm((prev) => ({ ...prev, ...prefill }));
    setIsOpen(true);
  };

  const closeQuote = () => setIsOpen(false);

  return (
    <QuoteContext.Provider value={{ isOpen, form, setForm, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside <QuoteProvider>");
  return ctx;
}