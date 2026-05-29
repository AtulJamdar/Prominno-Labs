import Navbar from "../components/layout/Navbar";
import BlogSection from "../components/sections/BlogSection";
import BusinessStrategy from "../components/sections/BusinessStrategy";
import FAQSection from "../components/sections/FAQSection";
import FooterSection from "../components/sections/FooterSection";
import Hero from "../components/sections/Hero";
import PartnersSection from "../components/sections/PartnersSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustSection from "../components/sections/TrustSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection/>
      <BusinessStrategy/>
      <PartnersSection/>
      <BlogSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <FooterSection/>
    </main>
  );
}