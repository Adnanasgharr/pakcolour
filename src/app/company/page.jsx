"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  Headset,
  Boxes,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { useQuote } from "@/components/QuoteContext";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";


const COMPANY_STATS = [
  { value: "100%", label: "Spec-Verified Batches" },
  { value: "4+", label: "Core Product Lines" },
  { value: "Nationwide", label: "Logistics Network" },
  { value: "Direct", label: "Technical Support" },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product batch is systematically tested against specification parameters prior to delivery to ensure batch-to-batch consistency for your manufacturing lines.",
  },
  {
    icon: Boxes,
    title: "Flexible Scalability",
    description:
      "From initial laboratory testing samples to full drum and ISO container loads, we accommodate orders tailored to your current production stage.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Integrated transport and dispatch protocols ensuring timely chemical supplies delivered safely across industrial hubs in Pakistan.",
  },
  {
    icon: Headset,
    title: "Technical Knowledge",
    description:
      "Our team understands formulation chemistry and application parameters, giving you direct access to meaningful technical consultation.",
  },
];

const MILESTONES = [
  {
    step: "01",
    title: "Specification Matching",
    description:
      "We analyze your exact technical requirements, performance metrics, and compliance parameters.",
  },
  {
    step: "02",
    title: "Source Verification",
    description:
      "Chemicals are procured from vetted global and local manufacturers with strict quality oversight.",
  },
  {
    step: "03",
    title: "Quality Check & Dispatch",
    description:
      "Each lot undergoes strict pre-shipment inspection before controlled transit to your facility.",
  },
];

export default function CompanyPage() {
  const { openQuote } = useQuote();

  return (
    <>
    <Navbar/>
    <main className="bg-[#F4F6F5] text-[#0A2540] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-[#0A2540] text-white pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/50 block mb-4">
                About PAK COLOUR & CHEMICAL
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[0.95] tracking-[-0.04em] font-[family-name:var(--font-display)] font-semibold">
                Building reliable chemical supply chains for Pakistan’s industries.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="text-white/75 text-base md:text-lg leading-relaxed">
                We bridge chemical manufacturing with industrial demand through spec-checked sourcing, dependable logistics, and practical technical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b border-[#D8DEE4] px-6 md:px-12 lg:px-16 py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-[#0A2540] pl-6">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-bold text-[#0A2540] tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-xs md:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW & MISSION SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-white border-b border-[#D8DEE4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] md:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D8DEE4]">
                <Image
                  src="/hero.jpg"
                  alt="Industrial chemical manufacturing and supply warehouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-semibold opacity-75">
                    Focus Area
                  </span>
                  <p className="text-lg font-semibold mt-1">
                    Textile, Leather, Paints, Coatings & Specialty Chemicals
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0A2540]/50 block mb-3">
                01 / Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.04em] font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                A partner focused on clarity, consistency, and compliance.
              </h2>

              <div className="space-y-4 text-[#0A2540]/75 text-base md:text-lg leading-relaxed mt-6">
                <p>
                  At <strong>PAK COLOUR & CHEMICAL</strong>, we recognize that raw material variations directly impact factory yields, color matching accuracy, and product durability.
                </p>
                <p>
                  Our operation is designed around eliminating supply uncertainty. We partner with industrial producers to deliver quality-checked industrial dyes, pigments, and process auxiliaries on predictable schedules.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#D8DEE4]">
                {[
                  "Rigorous pre-dispatch testing",
                  "Traceable batch documentation",
                  "Dedicated logistics coordination",
                  "Direct technical consultative access",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0A2540] shrink-0" />
                    <span className="text-sm font-semibold text-[#0A2540]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-[#F4F6F5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-14 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0A2540]/50 block mb-3">
              02 / Core Commitments
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[0.98] tracking-[-0.045em] font-[family-name:var(--font-display)] font-semibold">
              How we protect your production line.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-[#D8DEE4] rounded-xl p-8 transition-all duration-300 hover:border-[#0A2540] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#F4F6F5] border border-[#D8DEE4] flex items-center justify-center text-[#0A2540] mb-6">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 mt-3">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-y border-[#D8DEE4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-14 md:mb-20">
            <div className="lg:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0A2540]/50 block mb-3">
                03 / Workflow
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[0.98] tracking-[-0.045em] font-[family-name:var(--font-display)] font-semibold">
                Our supply process.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[#0A2540]/70 text-base md:text-lg leading-relaxed">
                From technical specification to dockside delivery, our structured workflow minimizes lead times and eliminates quality variances.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#D8DEE4] pt-12">
            {MILESTONES.map(({ step, title, description }) => (
              <div key={step} className="relative">
                <span className="text-sm font-bold text-[#0A2540]/40 block mb-3">
                  {step}
                </span>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mt-2 max-w-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] text-white px-6 md:px-12 lg:px-16 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 block mb-3">
                Next Steps
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-[-0.04em] font-[family-name:var(--font-display)] font-semibold">
                Ready to review raw material specifications?
              </h2>
              <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl">
                Request a formal quote or request testing samples for your technical laboratory.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-4">
              <button
                onClick={() => openQuote()}
                className="group inline-flex items-center gap-3 bg-white text-[#0A2540] px-6 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                Request a quotation
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <Link
                href="/products"
                className="group inline-flex items-center gap-3 border border-white/25 text-white px-6 py-4 text-sm font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Browse Catalogue
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />
    </main>
    </>
  );
}