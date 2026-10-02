"use client";

import { useState, useEffect } from "react";
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

const HERO_HEADINGS = [
  { line1: "Color possibilities.", line2: "Built on partnerships." },
  { line1: "Your trusted partner", line2: "for chemical solutions." },
  { line1: "Quality chemicals.", line2: "Reliable supply." },
];

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

export default function Home({ products = [] }) {
  const { openQuote } = useQuote();

  // Heading rotator state
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setHeadingIndex((prev) => (prev + 1) % HERO_HEADINGS.length);
        setFadeState(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const flagged = products.filter((p) => p.fields?.featured === true);
  const featuredProducts = (flagged.length > 0 ? flagged : products).slice(0, FEATURED_COUNT);

  return (
    <div className="bg-[#F4F6F5] text-[#0A2540] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] md:min-h-[80vh] flex items-center py-12 sm:py-16 md:pt-24 md:pb-12 overflow-hidden border-b border-[#D8DEE4]">

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

          <div className="absolute inset-0 bg-[#F4F6F5]/30 sm:bg-[#F4F6F5]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F6F5] via-[#F4F6F5]/90 sm:via-[#F4F6F5]/80 via-[65%] sm:via-[42%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6F5] via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-6 sm:gap-8">

              {/* Animated Heading */}
              <div className="lg:col-span-8 min-h-[100px] sm:min-h-[140px] md:min-h-[180px] flex items-center">
                <h1
                  className={`max-w-4xl text-[2.15rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[4.5rem] leading-[0.98] sm:leading-[0.92] tracking-[-0.035em] sm:tracking-[-0.045em] font-[family-name:var(--font-display)] font-semibold transition-all duration-500 ease-in-out ${
                    fadeState
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <span className="block">{HERO_HEADINGS[headingIndex].line1}</span>
                  <span className="block">{HERO_HEADINGS[headingIndex].line2}</span>
                </h1>
              </div>

              {/* Description / CTA */}
              <div>
                <div className="max-w-sm sm:max-w-md">
                  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#0A2540]/80">
                    We supply industrial dyes, pigments, and specialty
                    chemicals to manufacturers across Pakistan — sourced
                    against your specification and delivered on your timeline.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openQuote()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#0d2f52] text-white font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md cursor-pointer"
                    >
                      Request a quotation
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <Link
                      href="/products"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md hover:bg-white bg-white/85 sm:bg-white/75 border border-[#0A2540]/20"
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

      {/* HORIZONTAL TRUST BAR */}
      <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 border-b border-[#D8DEE4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
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

      {/* FEATURED PRODUCTS */}
      {featuredProducts.length > 0 && (
        <section className="bg-[#F4F6F5] border-b border-[#D8DEE4] px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                  Featured Stock
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
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

      {/* PRODUCT LINES */}
      {/* pb-28 on mobile keeps the last row clear of the floating WhatsApp / Quote buttons */}
      <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 pt-12 pb-28 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-3 sm:gap-8 mb-8 sm:mb-14 md:mb-20">
            <div className="lg:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0A2540]/50">
               / Product lines
              </span>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.08] sm:leading-[0.98] tracking-[-0.035em] sm:tracking-[-0.045em] font-[family-name:var(--font-display)] font-semibold text-balance">
                Materials for industries that keep moving.
              </h2>
            </div>
          </div>

          {/* ───────── MOBILE (below sm): stacked, thumb-friendly rows ───────── */}
          <div className="sm:hidden border-t border-[#0A2540]/20">
            {CATEGORIES.map(({ number, icon: Icon, title, short, body }) => (
              <button
                key={title}
                type="button"
                onClick={() => openQuote({ category: title })}
                aria-label={`Request a quotation for ${title}`}
                className="group relative block w-full text-left -mx-4 px-4 py-6 border-b border-[#0A2540]/15 transition-colors duration-200 motion-reduce:transition-none active:bg-[#0A2540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0A2540] [-webkit-tap-highlight-color:transparent] [width:calc(100%+2rem)]"
              >
                {/* Top meta row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full border border-[#0A2540]/20 flex items-center justify-center transition-colors duration-200 group-active:border-white/40 group-active:text-white">
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold opacity-50 group-active:text-white group-active:opacity-80">
                      {short}
                    </span>
                  </div>
                  <span className="text-xs font-semibold opacity-40 tabular-nums group-active:text-white group-active:opacity-70">
                    {number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[1.65rem] leading-[1.05] tracking-[-0.035em] font-[family-name:var(--font-display)] font-semibold transition-colors duration-200 group-active:text-white">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#0A2540]/60 max-w-[34ch] transition-colors duration-200 group-active:text-white/75">
                  {body}
                </p>

                {/* Action row */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0A2540] transition-colors duration-200 group-active:text-white">
                    Request a quote
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#0A2540]/20 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none group-active:rotate-45 group-active:bg-white group-active:text-[#0A2540] group-active:border-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ───────── TABLET / DESKTOP (sm and up): original design, unchanged ───────── */}
          <div className="hidden sm:block border-t border-[#0A2540]/20">
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
                className="group w-full text-left border-b border-[#0A2540]/15 py-5 sm:py-7 md:py-9 lg:py-10 transition-all duration-500 sm:hover:px-3 md:hover:px-6 cursor-pointer"
              >
                <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 items-center">

                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-xs font-semibold opacity-40">
                      {number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="hidden sm:block sm:col-span-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#0A2540]/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540]">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="col-span-8 sm:col-span-7 lg:col-span-4">
                    <span className="block text-[9px] tracking-[0.2em] uppercase opacity-40 mb-1">
                      {short}
                    </span>
                    <h3 className="text-lg sm:text-2xl lg:text-[2rem] leading-tight tracking-[-0.03em] font-[family-name:var(--font-display)] font-semibold">
                      {title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 lg:col-span-4 mt-2 lg:mt-0">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#0A2540]/60 sm:text-[#0A2540]/55 max-w-sm">
                      {body}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex justify-end">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-[#0A2540]/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] group-hover:rotate-45">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-4 right-4 sm:bottom-7 sm:right-7 flex flex-col gap-2 z-40">
        <a
          href="https://wa.me/923333023307"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="bg-[#1F7A5C] text-white rounded-full px-3.5 py-2.5 sm:pl-4 sm:pr-5 sm:py-3.5 shadow-xl flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
          <span className="text-xs sm:text-sm font-semibold">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => openQuote()}
          aria-label="Request a quotation"
          className="bg-[#0A2540] text-white rounded-full px-3.5 py-2.5 sm:pl-4 sm:pr-5 sm:py-3.5 shadow-xl flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
          <span className="text-xs sm:text-sm font-semibold">Request Quote</span>
        </button>
      </div>

    </div>
  );
}