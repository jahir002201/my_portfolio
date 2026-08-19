import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Overview from "@/components/Overview";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Overview />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}