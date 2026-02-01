import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import { getDynamicContent } from "@/lib/data";

export default async function Home() {
  const content = await getDynamicContent();

  return (
    <>
      <Hero content={content.hero} />
      <Services content={content.services} />
      <Process />
      <Portfolio content={content.portfolio} />
      {/* Assuming AboutSection can take props, but I haven't refactored it yet. I will pass it anyway and refactor AboutSection next. */}
      <AboutSection content={content.about} />
      <Testimonials />
    </>
  );
}
