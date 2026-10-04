"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Handshake,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Mail,
  Phone,
  MapPin,
  UserCheck,
  Package,
} from "lucide-react";
import { useQuote } from "@/components/QuoteContext";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

const COMPANY_STATS = [
  { value: "14+", label: "Product Categories" },
  { value: "Global", label: "Sourcing & Trading" },
  { value: "100%", label: "B2B Focus" },
  { value: "Cross-Border", label: "Supply Network" },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description:
      "Honest business practices, transparency, and responsible communication create the foundation for our long-term commercial relationships.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We focus on recurring supply relationships, moving beyond single transactions to drive sustainable mutual growth.",
  },
  {
    icon: Globe2,
    title: "Global Sourcing",
    description:
      "Connecting manufacturers, distributors, and buyers across domestic and cross-border international markets.",
  },
  {
    icon: Layers,
    title: "Comprehensive Portfolio",
    description:
      "Supplying raw materials across 14 diverse industrial sectors including dyes, pigments, polymers, and specialty chemicals.",
  },
];

const PRODUCT_PORTFOLIO = [
  { 
    id: "01", 
    name: "Industrial Dyes", 
    desc: "Reactive, Acid, Disperse, Solvent, and specialty colouring materials for textile & leather.",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop" // Vivid powder dyes/pigments
  },
  { 
    id: "02", 
    name: "Pigments & Colours", 
    desc: "Organic, inorganic, powder, and specialty pigments for paints, coatings, plastics, and printing.",
    img: "https://images.unsplash.com/photo-1571109322740-68b895461c3d?q=80&w=870&auto=format&fit=crop" // Color mixing / vibrant pigments
  },
  { 
    id: "03", 
    name: "Specialty & Industrial Chemicals", 
    desc: "Process chemicals, additives, auxiliaries, intermediates, and surface treatment materials.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop" // Chemical lab flasks & solutions
  },
  { 
    id: "04", 
    name: "Textile Chemicals", 
    desc: "Wetting agents, levelling agents, finishing chemicals, dyeing auxiliaries, and softeners.",
    img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=800&auto=format&fit=crop" // Fabric rolls / textile processing
  },
  { 
    id: "05", 
    name: "Printing & Printing Chemicals", 
    desc: "Inks, pigments, solvents, cleaning chemicals, and additives for printing applications.",
    img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop" // Printing press & industrial inks
  },
  { 
    id: "06", 
    name: "Industrial Solvents", 
    desc: "Organic, formulation, and application-specific solvents for paints, inks, and adhesives.",
    img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=872&auto=format&fit=crop" // Chemical glass barrels / liquids
  },
  { 
    id: "07", 
    name: "Plastic & Polymer Industry", 
    desc: "Polymer raw materials, masterbatches, release agents, processing aids, and additives.",
    img: "https://images.unsplash.com/photo-1722293865590-fe6ba983f1fe?q=80&w=870&auto=format&fit=crop" // Colorful plastic raw resin granules
  },
  { 
    id: "08", 
    name: "PVC, Pipes & Fittings", 
    desc: "PVC raw materials, stabilisers, compounding inputs, and processing additives.",
    img: "https://images.unsplash.com/photo-1616661317985-aeb2a13016d6?q=80&w=869&auto=format&fit=crop" // Industrial piping & conduit inputs
  },
  { 
    id: "09", 
    name: "Rubber & Elastomer Industry", 
    desc: "Compounding chemicals, vulcanisation materials, processing aids, and additives.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" // Industrial rubber manufacturing component
  },
  { 
    id: "10", 
    name: "Paints & Coatings", 
    desc: "Resins, pigments, coating additives, dispersing agents, and surface chemicals.",
    img: "https://images.unsplash.com/photo-1581079949099-ea95c980d186?q=80&w=869&auto=format&fit=crop" // Paint bucket and coating mixing
  },
  { 
    id: "11", 
    name: "Automotive & Engineering", 
    desc: "Coatings, refinishing chemicals, elastomers, sealants, and industrial cleaners.",
    img: "https://images.unsplash.com/photo-1589320012458-ce28bd1c86b1?q=80&w=870&auto=format&fit=crop" // Precision automotive manufacturing
  },
  { 
    id: "12", 
    name: "Adhesives & Sealants", 
    desc: "Resin materials, raw bonding agents, surface preparation chemicals, and sealants.",
    img: "https://images.unsplash.com/photo-1590096227076-ebf4b077c89d?q=80&w=870&auto=format&fit=crop" // Industrial gluing & bonding process
  },
  { 
    id: "13", 
    name: "Construction & Industrial", 
    desc: "Concrete additives, waterproofing agents, sealants, and building chemical inputs.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" // Large modern infrastructure construction
  },
  { 
    id: "14", 
    name: "General Industrial Raw Materials", 
    desc: "Tailored sourcing and procurement according to specific client technical specifications.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" // Industrial logistics / raw material packaging
  },
];

const BUSINESS_WORKFLOW = [
  { step: "01", title: "Listen", desc: "Understand exact customer or partner technical and commercial requirements." },
  { step: "02", title: "Source", desc: "Identify suitable product categories, global suppliers, or trading opportunities." },
  { step: "03", title: "Evaluate", desc: "Analyze specifications, compliance, quantities, and commercial terms." },
  { step: "04", title: "Connect & Supply", desc: "Facilitate seamless cross-border or domestic procurement and delivery." },
  { step: "05", title: "Build", desc: "Develop the recurring relationship beyond a single commercial transaction." },
];

export default function CompanyPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <Navbar />
      <main className="bg-[#F4F6F5] text-[#0A2540] overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative bg-[#0A2540] text-white pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8] block mb-4">
                  Global B2B Trading • Industrial Chemicals • Colours • Raw Materials
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.02] tracking-[-0.03em] font-[family-name:var(--font-display)] font-semibold">
                  Connecting Markets. Creating Opportunities. Building Trust Beyond Borders.
                </h1>
              </div>

              <div className="lg:col-span-4">
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                  PAK COLOUR & CHEMICAL is a professionally driven B2B trading, sourcing, and industrial supply partner dealing in dyes, pigments, specialty chemicals, and raw materials.
                </p>
                <button
                  onClick={openQuote}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0052FF] hover:bg-[#0043CC] text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-[#0052FF]/20"
                >
                  Request Commercial Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-white border-b border-[#D8DEE4] px-6 md:px-12 lg:px-16 py-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {COMPANY_STATS.map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#0052FF] pl-6">
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

        {/* OVERVIEW & MISSION / VISION WITH REAL FACILITY IMAGE */}
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-white border-b border-[#D8DEE4]">
          <div className="max-w-[1400px] mx-auto space-y-20">
            {/* Facility Overview Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative h-[400px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D8DEE4] group">
                  {/* Real Photo of PAK COLOUR & CHEMICAL facility */}
                  <Image
                    src="/hero.jpg"
                    alt="PAK COLOUR & CHEMICAL Headquarters, Warehouse and Chemical Dispatch Hub in Karachi, Pakistan"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#38BDF8] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" /> Central Distribution Hub • Karachi, Pakistan
                    </span>
                    <p className="text-lg font-semibold">
                      PAK COLOUR & CHEMICAL Headquarters & Warehousing Facility
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0052FF]">
                  Company Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold tracking-tight text-[#0A2540]">
                  A dependable platform for industrial sourcing, purchasing, and cross-border trade.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  We work with businesses, manufacturers, wholesalers, distributors, industrial buyers, and commercial partners to facilitate purchasing, sourcing, trading, sales, and supply requirements.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We believe that successful trading is not simply about buying and selling products. It is about understanding requirements, connecting the right businesses, creating value, and building relationships that continue for years.
                </p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-[#F4F6F5] p-3.5 rounded-xl border border-[#D8DEE4]">
                    <CheckCircle2 className="w-5 h-5 text-[#0052FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#0A2540]">Cross-Border B2B Trade</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F4F6F5] p-3.5 rounded-xl border border-[#D8DEE4]">
                    <CheckCircle2 className="w-5 h-5 text-[#0052FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#0A2540]">Global Sourcing Network</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F4F6F5] p-3.5 rounded-xl border border-[#D8DEE4]">
                    <CheckCircle2 className="w-5 h-5 text-[#0052FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#0A2540]">Technical Specs (TDS / SDS)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F4F6F5] p-3.5 rounded-xl border border-[#D8DEE4]">
                    <CheckCircle2 className="w-5 h-5 text-[#0052FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#0A2540]">Industrial Scale Logistics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="bg-[#F4F6F5] p-8 md:p-10 rounded-2xl border border-[#D8DEE4] space-y-4 relative overflow-hidden">
                <div className="p-3 bg-[#0A2540] text-white w-fit rounded-xl">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0A2540]">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  To develop PAK COLOUR & CHEMICAL into a recognized and trusted international B2B trading and industrial supply partner, connecting manufacturers, suppliers, distributors, and buyers across global markets.
                </p>
                <blockquote className="border-l-4 border-[#0052FF] pl-4 italic text-sm text-slate-700 pt-2 font-medium">
                  “To connect businesses across borders through trusted trading, reliable sourcing, professional service, and long-term partnerships.”
                </blockquote>
              </div>

              <div className="bg-[#F4F6F5] p-8 md:p-10 rounded-2xl border border-[#D8DEE4] space-y-4">
                <div className="p-3 bg-[#0052FF] text-white w-fit rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0A2540]">Our Mission</h3>
                <ul className="text-slate-600 text-sm space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] mt-2 shrink-0" />
                    <span>Source products strictly according to specific customer requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] mt-2 shrink-0" />
                    <span>Connect commercial buyers with vetted global and local chemical producers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] mt-2 shrink-0" />
                    <span>Facilitate efficient wholesale distribution and industrial raw material supply.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] mt-2 shrink-0" />
                    <span>Provide commercially practical, transparent, and long-term trading solutions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER & CEO PROFILE */}
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-[#F4F6F5] border-b border-[#D8DEE4]">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-white rounded-3xl border border-[#D8DEE4] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0A2540]/5 rounded-full text-xs font-semibold text-[#0A2540] uppercase tracking-wider">
                    <UserCheck className="w-4 h-4 text-[#0052FF]" /> Executive Leadership Profile
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#0A2540]">
                      Tariq Ahmed
                    </h2>
                    <p className="text-[#0052FF] font-semibold text-lg mt-1">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                  <blockquote className="bg-[#F4F6F5] p-6 rounded-2xl border-l-4 border-[#0052FF] text-slate-700 font-medium italic text-sm md:text-base leading-relaxed">
                    “Build every relationship with trust, conduct every transaction with integrity, and grow together through long-term partnership.”
                  </blockquote>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                      <span>Focus on relationship-driven commercial trade</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                      <span>Expanding domestic and cross-border B2B networks</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-[#D8DEE4] pt-8 lg:pt-0 lg:pl-12">
                  <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight">
                    Building Business Beyond Transactions
                  </h3>
                  <p>
                    Tariq Ahmed leads PAK COLOUR & CHEMICAL with a vision centered on B2B trading, industrial sourcing, commercial relationships, and long-term business development.
                  </p>
                  <p>
                    For Tariq Ahmed, business is not simply about completing an isolated transaction. It is about understanding the people and businesses behind that transaction and developing relationships that create value over the long term.
                  </p>
                  <div className="bg-[#0A2540] text-white p-6 md:p-8 rounded-2xl space-y-2 mt-4 shadow-lg">
                    <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold block">
                      Leadership Philosophy
                    </span>
                    <p className="text-lg md:text-xl font-medium leading-snug">
                      “Trust is the foundation. Relationships are the strength. Integrity is the standard. Growth is the journey.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL PRODUCT PORTFOLIO GRID */}
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-white border-b border-[#D8DEE4]">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0052FF]">
                Product Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold tracking-tight text-[#0A2540]">
                14 Industrial Sectors & Raw Material Categories
              </h2>
              <p className="text-slate-600 text-base md:text-lg">
                Our extensive product portfolio covers multiple industrial sectors. Products are sourced according to customer specifications, technical applications, and commercial requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PRODUCT_PORTFOLIO.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F4F6F5] rounded-2xl border border-[#D8DEE4] overflow-hidden hover:border-[#0052FF] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-xs font-mono font-bold text-[#0A2540] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-sm">
                        {item.id}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#0052FF] transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <button 
                      onClick={openQuote}
                      className="text-xs font-semibold text-[#0052FF] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Inquire Specifications <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-[#F4F6F5] border-b border-[#D8DEE4]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0052FF]">
                Our Guiding Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold tracking-tight text-[#0A2540]">
                Our Core Business Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CORE_VALUES.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white p-8 rounded-2xl border border-[#D8DEE4] space-y-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-white flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540]">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BUSINESS WORKFLOW */}
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-white border-b border-[#D8DEE4]">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0052FF]">
                How We Connect Businesses
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold tracking-tight text-[#0A2540]">
                Our Sourcing & Supply Approach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {BUSINESS_WORKFLOW.map((wf) => (
                <div key={wf.step} className="bg-[#F4F6F5] p-6 rounded-2xl border border-[#D8DEE4] relative space-y-3">
                  <span className="text-2xl font-black text-[#0052FF]">{wf.step}</span>
                  <h3 className="text-lg font-bold text-[#0A2540]">{wf.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        <ContactSection />
      </main>
    </>
  );
}