"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Phone,
  Mail,
  ArrowUpRight,
  X,
  FileText,
  Menu,
} from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { openQuote } = useQuote();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Utility top bar */}
      <div className="bg-[#0A2540] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-12 flex flex-wrap justify-between items-center gap-2 border-b border-white/10">
        <span className="text-slate-400 hidden sm:inline">
          Colour and chemical sourcing for industrial buyers
        </span>
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6 text-xs">
          <a
            href="mailto:pakcolourchemical@outlook.com"
            className="hover:text-white transition flex items-center gap-1.5 truncate"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">pakcolourchemical@outlook.com</span>
          </a>
          <a
            href="tel:+923333023307"
            className="hover:text-white transition flex items-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            +92 333 3023307
          </a>
        </div>
      </div>

      {/* Main header navbar */}
      <div className="bg-white border-b border-[#D8DEE4] px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-36 sm:w-44 h-12 sm:h-14 shrink-0 flex items-center"
        >
          <Image
            src="/pcc-logo.jpg"
            alt="Pak Colour & Chemical"
            fill
            priority
            sizes="(max-width: 640px) 144px, 176px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop search bar */}
        <div className="flex-1 max-w-lg hidden md:flex mx-4">
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full flex border border-[#D8DEE4] rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#0A2540]/30 focus-within:border-[#0A2540]"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, CAS number, application..."
              className="w-full px-4 py-2 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="px-2 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              aria-label="Search"
              className="bg-[#0A2540] text-white px-4 hover:bg-[#0d2f52] transition flex items-center justify-center shrink-0"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Header CTA & Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => openQuote()}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#E8A317] hover:bg-[#d4960f] active:scale-[0.98] text-[#0A2540] font-[family-name:var(--font-display)] font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-md transition text-xs sm:text-sm shadow-sm shrink-0"
          >
            <span className="hidden xs:inline">Request a quote</span>
            <span className="xs:hidden">Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#0A2540] hover:bg-slate-100 md:hidden transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="bg-[#0A2540] px-4 sm:px-6 lg:px-12 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium">
          <div className="flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 transition relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8A317]" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => openQuote()}
            className="inline-flex items-center gap-1.5 text-xs text-[#E8A317] hover:text-white uppercase tracking-wider font-semibold px-3 py-1 border border-[#E8A317]/40 rounded hover:border-white transition"
          >
            <FileText className="w-3.5 h-3.5" />
            Quick RFQ
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A2540] border-b border-slate-700 px-4 py-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* Mobile search inside menu drawer */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full flex border border-slate-600 rounded-md overflow-hidden bg-white"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, CAS, application..."
              className="w-full px-3 py-2 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="bg-[#0A2540] text-white px-3.5 flex items-center justify-center shrink-0"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition ${
                    isActive
                      ? "bg-[#E8A317] text-[#0A2540] font-semibold"
                      : "text-slate-200 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Quick RFQ Mobile button */}
          <div className="pt-2 border-t border-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote();
              }}
              className="w-full inline-flex items-center justify-center gap-2 text-xs text-[#E8A317] uppercase tracking-wider font-semibold px-4 py-2.5 border border-[#E8A317]/50 rounded-md hover:bg-[#E8A317] hover:text-[#0A2540] transition"
            >
              <FileText className="w-4 h-4" />
              Quick RFQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
}