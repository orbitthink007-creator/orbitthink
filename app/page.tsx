import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <AboutSection />
      <Testimonials />
    </>
  );
}
