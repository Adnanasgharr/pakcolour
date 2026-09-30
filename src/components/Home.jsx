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
  FileText,
} from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

const HERO_TAGLINES = [
  ["Color possibilities.", "Built on partnerships."],
  ["Your trusted partner", "for chemical solutions."],
  ["Quality chemicals.", "Reliable supply."],
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

const CATEGORIES = [
  {
    icon: Droplets,
    title: "Industrial Dyes",
    body: "Reactive, acid, and disperse dyes for textile and leather processing.",
  },
  {
    icon: Layers,
    title: "Pigments & Colours",
    body: "Organic and inorganic pigments for paints, coatings, and plastics.",
  },
  {
    icon: FlaskConical,
    title: "Specialty Chemicals",
    body: "Process and performance chemicals sourced to your specification.",
  },
  {
    icon: PackageSearch,
    title: "Textile Auxiliaries",
    body: "Wetting agents, levelling agents, and finishing chemicals.",
  },
];

export default function Home() {
  const { openQuote } = useQuote();
  const [heroIndex, setHeroIndex] = useState(0);

  // Cycle tagline every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_TAGLINES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#F4F6F5] min-h-[500px] md:min-h-[560px] flex items-center overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full md:w-[65%] lg:w-[70%] h-full">
            <Image
              src="/hero.jpg"
              alt="Chemical supply manufacturing background"
              fill
              priority
              className="object-contain object-right"
              sizes="100vw"
            />
            {/* Blend gradient on the left edge of the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F6F5] via-[#F4F6F5]/40 via-[12%] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl px-6 md:px-12 py-12 md:py-20 w-full">
          <div className="max-w-xl space-y-6">
            <div className="grid">
              {HERO_TAGLINES.map((lines, i) => (
                <h1
                  key={lines.join(" ")}
                  className={`col-start-1 row-start-1 text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-[family-name:var(--font-display)] font-bold text-[#0A2540] tracking-tight transition-opacity duration-300 ease-in-out ${
                    i === heroIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="block">{lines[0]}</span>
                  <span className="block">{lines[1]}</span>
                </h1>
              ))}
            </div>

            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-medium bg-[#F4F6F5]/85 backdrop-blur-sm p-3 rounded-md -ml-3">
              We supply industrial dyes, pigments, and specialty chemicals to
              manufacturers across Pakistan — sourced against your
              specification, delivered on your timeline.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openQuote()}
                className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#0d2f52] text-white font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-md"
              >
                Request a quotation
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#0A2540] border border-[#D8DEE4] font-[family-name:var(--font-display)] font-semibold px-6 py-3.5 rounded-md transition text-sm shadow-sm backdrop-blur-sm"
              >
                Browse the catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y border-[#D8DEE4] px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-3">
              <Icon className="w-5 h-5 text-[#0A2540] shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#0A2540] text-sm">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-10">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
              What we supply
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Four product lines, each sourced and quality-checked before it ships.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                onClick={() => openQuote({ category: title })}
                className="group border border-[#D8DEE4] rounded-lg p-6 bg-white hover:border-[#0A2540] transition cursor-pointer"
              >
                <Icon className="w-6 h-6 text-[#0A2540]" strokeWidth={1.75} />
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#0A2540] mt-4">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{body}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#0A2540] font-medium mt-4 opacity-70 group-hover:opacity-100 transition">
                  Request quote
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating actions */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/923333023307"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1F7A5C] hover:bg-[#186349] text-white text-sm font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-lg flex items-center gap-2.5 transition"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <button
          onClick={() => openQuote()}
          className="bg-[#0A2540] hover:bg-[#0d2f52] text-white text-sm font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-lg flex items-center gap-2.5 transition"
        >
          <FileText className="w-5 h-5" />
          Request Quote
        </button>
      </div>
    </>
  );
}

