import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/QuoteContext";
import QuoteModal from "@/components/QuoteModal";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PAK COLOUR & CHEMICAL | Industrial Colours & Chemicals",
  description:
    "Industrial dyes, pigments, and specialty chemical solutions, sourced and supplied across Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F6F5] text-[#0A2540] font-[family-name:var(--font-body)] selection:bg-[#0A2540] selection:text-white">
        <QuoteProvider>
          <Navbar />
          {children}
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}