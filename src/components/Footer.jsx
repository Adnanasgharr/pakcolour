"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Product Catalog", href: "/products" },
  { label: "Company", href: "/company" },

  { label: "Contact Us", href: "/contact" },
];

const PRODUCT_CATEGORIES = [
  { label: "Industrial Dyes", href: "/products?category=Industrial+Dyes" },
  { label: "Pigments & Colours", href: "/products?category=Pigments+%26+Colours" },
  { label: "Specialty Chemicals", href: "/products?category=Specialty+Chemicals" },
  { label: "Textile Auxiliaries", href: "/products?category=Textile+Auxiliaries" },
];

export default function Footer() {
  const { openQuote } = useQuote();

  return (
    <footer className="bg-[#071B2E] text-slate-300 font-[family-name:var(--font-body)] border-t border-slate-800">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="relative w-44 h-24 block">
              <Image
                src="/pcc-logo.jpg"
                alt="Pak Colour & Chemical"
                fill
                priority
                sizes="176px"
                className=""
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Trusted suppliers of high-grade industrial dyes, pigments, and performance chemical solutions across Pakistan.
            </p>
            <button
              onClick={() => openQuote()}
              className="inline-flex items-center gap-1.5 bg-[#E8A317] hover:bg-[#d4960f] text-[#0A2540] font-semibold px-4 py-2 rounded-md transition text-xs shadow-sm mt-2"
            >
              Request a Quotation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-[family-name:var(--font-display)] font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#E8A317] transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Portfolio */}
          <div>
            <h3 className="text-white font-[family-name:var(--font-display)] font-semibold text-base mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="hover:text-[#E8A317] transition-colors duration-150 inline-block"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-[family-name:var(--font-display)] font-semibold text-base mb-4">
              Contact & Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8A317] shrink-0 mt-1" />
                <span>Karachi, Sindh, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E8A317] shrink-0" />
                <a href="tel:+923333499966" className="hover:text-white transition">
                  +92 333 3499966
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E8A317] shrink-0" />
                <a
                  href="mailto:pakcolourchemical@outlook.com"
                  className="hover:text-white transition break-all"
                >
                  pakcolourchemical@outlook.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#051423] text-xs text-slate-500 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pak Colour & Chemical. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-slate-400 transition">
              Support
            </Link>
            <Link href="/products" className="hover:text-slate-400 transition">
              Catalog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}