import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <Technology />
      <FAQ />
      <Footer />
    </main>
  );
}
