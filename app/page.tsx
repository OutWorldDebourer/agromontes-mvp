import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Catalog from "@/components/sections/Catalog";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Footer from "@/components/ui/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <Suspense fallback={<div>Cargando catálogo...</div>}>
        <Catalog />
      </Suspense>
      <About />
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
