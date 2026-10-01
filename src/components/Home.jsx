"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  Headset,
  PackageSearch,
  Droplets,
  FlaskConical,
  Boxes,
  Layers,
  ArrowUpRight,
  ChevronRight,
  FileText,
} from "lucide-react";
import { useQuote } from "@/components/QuoteContext";
import ProductCard from "@/components/ProductCard";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Quality-checked sourcing",
    body: "Every batch is verified against spec before it reaches your line.",
  },
  {
    icon: Boxes,
    title: "Sample to bulk",
    body: "Order small for testing, then scale to full drum and container quantities.",
  },
  {
    icon: Truck,
    title: "Nationwide delivery",
    body: "Dispatch and logistics handled to sites across Pakistan.",
  },
  {
    icon: Headset,
    title: "Direct technical support",
    body: "Talk to someone who knows the chemistry, not a call centre script.",
  },
];

const FEATURED_COUNT = 3;

const CATEGORIES = [
  {
    number: "01",
    icon: Droplets,
    title: "Industrial Dyes",
    short: "DYES",
    body: "Reactive, acid, and disperse dyes engineered for textile and leather processing.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Pigments & Colours",
    short: "COLOUR",
    body: "Organic and inorganic pigments for paints, coatings, plastics, and industrial applications.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Specialty Chemicals",
    short: "SPECIALTY",
    body: "Process and performance chemicals sourced according to your technical specification.",
  },
  {
    number: "04",
    icon: PackageSearch,
    title: "Textile Auxiliaries",
    short: "TEXTILE",
    body: "Wetting, levelling, finishing, and process chemicals for modern textile production.",
  },
];

// Whole homepage in one file. `products` comes from Contentful via page.js.
export default function Home({ products = [] }) {
  const { openQuote } = useQuote();

  // Tick a Boolean "featured" field on products in Contentful to choose them;
  // otherwise the first few products are shown.
  const flagged = products.filter((p) => p.fields?.featured === true);
  const featuredProducts = (flagged.length > 0 ? flagged : products).slice(0, FEATURED_COUNT);

  return (
    // page.js already wraps this in <main>, so this is a div, not another <main>
    <div className="bg-[#F4F6F5] text-[#0A2540] overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative h-[80vh] flex items-start pt-16 md:pt-24 pb-8 overflow-hidden border-b border-[#D8DEE4]">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Chemical supply and manufacturing"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#F4F6F5]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F6F5] via-[#F4F6F5]/80 via-[42%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6F5] via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-6 md:gap-8">

              {/* Heading */}
              <div className="lg:col-span-8">
                <div className="grid">
                  <h1 className="col-start-1 row-start-1 max-w-4xl text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[4.5rem] leading-[0.92] tracking-[-0.045em] font-[family-name:var(--font-display)] font-semibold">
                    <span className="block">Color possibilities.</span>
                    <span className="block">Built on partnerships.</span>
                  </h1>
                </div>
              </div>

              {/* Description / CTA */}
              <div>
                <div className="max-w-sm">
                  <p className="text-base md:text-[17px] leading-relaxed text-[#0A2540]/80">
                    We supply industrial dyes, pigments, and specialty
                    chemicals to manufacturers across Pakistan — sourced
                    against your specification and delivered on your timeline.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openQuote()}
                      className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#0d2f52] text-white font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md"
                    >
                      Request a quotation
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <Link
                      href="/products"
                   

                       className="inline-flex items-center gap-2  font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md hover:bg-white bg-white/75 border-[#0A2540]/20"
                    >
                      Catalogue
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>


      {/* =========================================================
          HORIZONTAL TRUST BAR
      ========================================================= */}
      <section className="bg-white px-6 md:px-12 lg:px-16 py-10 md:py-12 border-b border-[#D8DEE4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {TRUST_POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-3.5 items-start">
                <Icon
                  className="w-5 h-5 text-[#0A2540] shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[#0A2540] leading-tight">
                    {title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          FEATURED PRODUCTS
      ========================================================= */}
      {featuredProducts.length > 0 && (
        <section className="bg-[#F4F6F5] border-b border-[#D8DEE4] px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                  Featured Stock
                </h2>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Frequently requested industrial chemicals, available for immediate dispatch across Pakistan.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A2540] hover:text-[#E8A317] transition"
              >
                View all products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.sys?.id || product.fields?.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          PRODUCT LINES
      ========================================================= */}
      <section className="bg-white px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto">

          <div className="grid lg:grid-cols-12 gap-8 mb-14 md:mb-20">
            <div className="lg:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0A2540]/50">
                03 / Product lines
              </span>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[0.98] tracking-[-0.045em] font-[family-name:var(--font-display)] font-semibold">
                Materials for industries that keep moving.
              </h2>
            </div>
          </div>

          {/* Product list: each row opens the quote modal with its category */}
          <div className="border-t border-[#0A2540]/20">
            {CATEGORIES.map(({ number, icon: Icon, title, short, body }) => (
              <div
                key={title}
                role="button"
                tabIndex={0}
                onClick={() => openQuote({ category: title })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openQuote({ category: title });
                  }
                }}
                className="group w-full text-left border-b border-[#0A2540]/15 py-7 md:py-9 lg:py-10 transition-all duration-500 hover:px-3 md:hover:px-6 cursor-pointer"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">

                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-xs font-semibold opacity-40">
                      {number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="hidden md:block md:col-span-1">
                    <div className="w-10 h-10 rounded-full border border-[#0A2540]/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540]">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="col-span-7 md:col-span-4">
                    <span className="block text-[9px] tracking-[0.2em] uppercase opacity-40 mb-1.5">
                      {short}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-[2rem] leading-tight tracking-[-0.03em] font-[family-name:var(--font-display)] font-semibold">
                      {title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="hidden lg:block lg:col-span-4">
                    <p className="text-sm leading-relaxed text-[#0A2540]/55 max-w-sm">
                      {body}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 md:col-span-2 flex justify-end">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#0A2540]/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          FLOATING ACTIONS
      ========================================================= */}
      <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 flex flex-col gap-2.5 z-40">
        <a
          href="https://wa.me/923333023307"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="bg-[#1F7A5C] text-white rounded-full pl-4 pr-5 py-3.5 shadow-xl flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => openQuote()}
          aria-label="Request a quotation"
          className="bg-[#0A2540] text-white rounded-full pl-4 pr-5 py-3.5 shadow-xl flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <FileText className="w-5 h-5" strokeWidth={1.75} />
          <span className="text-sm font-semibold">Request Quote</span>
        </button>
      </div>

    </div>
  );
}