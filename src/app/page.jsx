import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import { getProducts } from "@/lib/contentful";
import Footer from "@/components/Footer";

export const revalidate = 60; // refresh Contentful data every minute

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Home products={products} />
      </main>
    
    </>
  );
}