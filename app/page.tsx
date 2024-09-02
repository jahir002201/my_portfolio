import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Overview from "@/components/Overview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"
import Work from "@/components/Work";

export default function Home() {
  return (
   <main>
    {/* Header Section */}
    <Header/>
    {/* Hero Section */}
    <Hero/>
    {/* About Section */}
    <About/>
    {/* Overview Section Component */}
    <Overview/>
    {/* Work Experience Section */}
    <Work/>
    {/* Contact Section */}
    <Contact/>
    {/* Footer */}
    <Footer/>
   </main>
  );
}
