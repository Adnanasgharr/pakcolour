import Home from "@/components/Home";
import FeaturedProducts from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60; // refresh Contentful data every minute

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Home />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}