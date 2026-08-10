import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Studio } from "@/components/sections/Studio";
import { TechStack } from "@/components/sections/TechStack";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Projects />
      <Studio />
      <TechStack />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
