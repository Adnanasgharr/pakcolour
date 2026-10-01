"use client";

import { useState, useEffect, useRef } from "react";
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
  Loader2,
} from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { openQuote } = useQuote();

  // Debounced search query to fetch matching products
  useEffect(() => {
    const trimmed = searchQuery.trim();
    if (!trimmed) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/products/search?q=${encodeURIComponent(trimmed)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
          setShowDropdown(true);
        }
      } catch (err) {
        console.error("Failed to fetch suggestions", err);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Hide dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const desktopContains = desktopSearchRef.current?.contains(e.target);
      const mobileContains = mobileSearchRef.current?.contains(e.target);
      if (!desktopContains && !mobileContains) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset drawer & suggestions on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowDropdown(false);
    setSearchQuery("");
  }, [pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowDropdown(false);
      setMobileMenuOpen(false);
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSelectProduct = (slug) => {
    setSearchQuery("");
    setShowDropdown(false);
    setMobileMenuOpen(false);
    router.push(`/products/${slug}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#0A2540] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2 border-b border-white/10">
        <span className="hidden md:block text-slate-400 text-[11px] sm:text-xs text-center sm:text-left">
          Colour and chemical sourcing for industrial buyers
        </span>
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto gap-3 sm:gap-6 text-[11px] sm:text-xs">
          <a
            href="mailto:pakcolourchemical@outlook.com"
            className="hover:text-white transition flex items-center gap-1.5 truncate"
          >
            <Mail className="w-3.5 h-3.5 shrink-0 text-[#E8A317]" />
            <span className="truncate">pakcolourchemical@outlook.com</span>
          </a>
          <a
            href="tel:+923333499966"
            className="hover:text-white transition flex items-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 shrink-0 text-[#E8A317]" />
            <span>+92 333 3499966</span>
          </a>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="bg-white border-b border-[#D8DEE4] px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-32 xs:w-36 sm:w-44 h-10 sm:h-12 lg:h-14 shrink-0 flex items-center"
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

        {/* Desktop Search Bar with Auto-complete Dropdown */}
        <div ref={desktopSearchRef} className="relative flex-1 max-w-lg hidden md:block mx-4">
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full flex border border-[#D8DEE4] rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#0A2540]/30 focus-within:border-[#0A2540]"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim() && setShowDropdown(true)}
              placeholder="Search products, CAS number, application..."
              className="w-full px-4 py-2 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none"
            />
            {isLoading ? (
              <div className="px-2 flex items-center text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            ) : searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="px-2 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
            <button
              type="submit"
              aria-label="Search"
              className="bg-[#0A2540] text-white px-4 hover:bg-[#0d2f52] transition flex items-center justify-center shrink-0"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Desktop Search Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#D8DEE4] rounded-md shadow-xl overflow-hidden z-50">
              {suggestions.length > 0 ? (
                <ul className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {suggestions.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleSelectProduct(item.slug)}
                        className="w-full text-left px-4 py-2.5 hover:bg-[#F4F6F5] transition flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <span className="text-sm font-semibold text-[#0A2540] group-hover:text-[#E8A317] transition-colors block">
                            {item.title}
                          </span>
                          {item.casNumber && (
                            <span className="text-xs text-slate-500 block">
                              CAS: {item.casNumber}
                            </span>
                          )}
                        </div>
                        {item.category && (
                          <span className="text-[10px] uppercase font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                            {item.category}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-xs text-slate-500">
                  No chemical products match &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => openQuote()}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#E8A317] hover:bg-[#d4960f] active:scale-[0.98] text-[#0A2540] font-[family-name:var(--font-display)] font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-md transition text-xs sm:text-sm shadow-sm shrink-0 cursor-pointer"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#0A2540] hover:bg-slate-100 md:hidden transition cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Link Strip */}
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
        </div>
      </nav>

      {/* Mobile Drawer Menu & Responsive Search */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A2540] border-b border-slate-700 px-4 py-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          
          {/* Mobile Search Input */}
          <div ref={mobileSearchRef} className="relative">
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full flex border border-slate-600 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#E8A317]"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                placeholder="Search products, CAS, application..."
                className="w-full px-3 py-2 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none"
              />
              {isLoading ? (
                <div className="px-2 flex items-center text-slate-400 bg-white">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              ) : searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-2 text-slate-400 hover:text-slate-600 bg-white"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null}
              <button
                type="submit"
                aria-label="Search"
                className="bg-[#0A2540] text-white px-3.5 flex items-center justify-center shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Mobile Search Auto-complete Results */}
            {showDropdown && (
              <div className="mt-1.5 bg-white border border-slate-200 rounded-md shadow-xl overflow-hidden text-slate-800 z-50">
                {suggestions.length > 0 ? (
                  <ul className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                    {suggestions.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => handleSelectProduct(item.slug)}
                          className="w-full text-left px-4 py-2.5 hover:bg-[#F4F6F5] active:bg-[#F4F6F5] transition flex items-center justify-between"
                        >
                          <div>
                            <span className="text-sm font-semibold text-[#0A2540] block">
                              {item.title}
                            </span>
                            {item.casNumber && (
                              <span className="text-xs text-slate-500 block">
                                CAS: {item.casNumber}
                              </span>
                            )}
                          </div>
                          {item.category && (
                            <span className="text-[10px] uppercase font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                              {item.category}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-3 text-center text-xs text-slate-500">
                    No results found for &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-1 pt-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition flex items-center justify-between ${
                    isActive
                      ? "bg-[#E8A317] text-[#0A2540] font-semibold"
                      : "text-slate-200 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#0A2540]" />}
                </Link>
              );
            })}
          </div>

          {/* Mobile Quick RFQ Action */}
          <div className="pt-2 border-t border-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote();
              }}
              className="w-full inline-flex items-center justify-center gap-2 text-xs text-[#E8A317] uppercase tracking-wider font-semibold px-4 py-3 border border-[#E8A317]/50 rounded-md hover:bg-[#E8A317] hover:text-[#0A2540] transition cursor-pointer"
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