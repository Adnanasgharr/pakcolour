"use client";

import { MessageCircle, Mail, FileText, ArrowUpRight } from "lucide-react";
import { useQuote } from "@/components/QuoteContext";

export default function ContactSection() {
  const { openQuote } = useQuote();

  return (
    <section className="bg-white px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32 border-t border-[#D8DEE4]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0A2540]/50 block mb-3">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.04em] font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
            Let’s talk about your requirement.
          </h2>
          <p className="text-[#0A2540]/65 text-base md:text-lg leading-relaxed mt-4">
            Connect with PAK COLOUR & CHEMICAL for product information, samples, and quotations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/923333023307"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#F4F6F5]/50 border border-[#D8DEE4] rounded-xl p-8 transition-all duration-300 hover:bg-white hover:border-[#0A2540] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-white border border-[#D8DEE4] flex items-center justify-center text-[#0A2540] group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] transition-colors duration-300 mb-6">
                <MessageCircle className="w-6 h-6" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                WhatsApp
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-2">
                +92 333 3023307
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8DEE4]/60 flex items-center justify-between text-sm font-semibold text-[#0A2540]">
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>

          {/* Card 2: Sales & Customer Support */}
          <a
            href="mailto:pakcolourchemical@outlook.com"
            className="group relative bg-[#F4F6F5]/50 border border-[#D8DEE4] rounded-xl p-8 transition-all duration-300 hover:bg-white hover:border-[#0A2540] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-white border border-[#D8DEE4] flex items-center justify-center text-[#0A2540] group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] transition-colors duration-300 mb-6">
                <Mail className="w-6 h-6" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540]">
                Sales & Customer Support
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-2 break-all">
                pakcolourchemical@outlook.com
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8DEE4]/60 flex items-center justify-between text-sm font-semibold text-[#0A2540]">
              <span>Send an email</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>

          {/* Card 3: Request Quotation Modal Trigger */}
          <button
            onClick={() => openQuote()}
            className="group relative text-left bg-[#F4F6F5]/50 border border-[#D8DEE4] rounded-xl p-8 transition-all duration-300 hover:bg-[#0A2540] hover:border-[#0A2540] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-white border border-[#D8DEE4] flex items-center justify-center text-[#0A2540] group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-colors duration-300 mb-6">
                <FileText className="w-6 h-6" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[#0A2540] group-hover:text-white transition-colors">
                Request a quotation
              </h3>
              <p className="text-sm font-medium text-slate-500 group-hover:text-white/70 transition-colors mt-2">
                Share your product and quantity requirement.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8DEE4]/60 group-hover:border-white/20 flex items-center justify-between text-sm font-semibold text-[#0A2540] group-hover:text-white transition-colors">
              <span>Send an inquiry</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}