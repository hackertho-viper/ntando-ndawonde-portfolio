import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import {
  About,
  Achievements,
  Certifications,
  Education,
  Gallery,
  Projects,
  Skills,
} from "@/components/Sections";
import { Contact, Footer } from "@/components/Contact";

const title =
  "Ntando Ndawonde | Computer Engineering Graduate | Software Developer";
const description =
  "Portfolio of Ntando Ndawonde, a Computer Engineering graduate and AWS Certified Cloud Practitioner based in Bellville, South Africa, working across software development, cloud, IoT and embedded systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
