import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <HeroSection id="hero" />
      <section id="projects">
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
      </section>
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <Footer />
    </Suspense>
  );
}
