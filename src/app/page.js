import { QuoteProvider } from "@/components/QuoteContext";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import FeaturedProducts from "@/components/FeaturedProducts";
import QuoteModal from "@/components/QuoteModal";

export default function Page() {
  return (
    <QuoteProvider>
      <Navbar />
      <main className="flex-1">
        <Home />
        <FeaturedProducts />
      </main>
      <QuoteModal />
    </QuoteProvider>
  );
}
