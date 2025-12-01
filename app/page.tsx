import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Catalog from "@/components/sections/Catalog";
import Benefits from "@/components/sections/Benefits";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Catalog />
      <Footer />
    </main>
  );
}
