import { InteractiveShell } from "@/components/interactive-shell";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/marketing/hero-section";
import { RerouteSection } from "@/components/marketing/reroute-section";
import { IntelligenceSection } from "@/components/marketing/intelligence-section";
import { HumanOversightSection } from "@/components/marketing/human-oversight-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { FrictionSection } from "@/components/marketing/friction-section";
import { Footer } from "@/components/marketing/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F6F2] text-[#111111] selection:bg-[#111111] selection:text-[#20C979]">
      <InteractiveShell />
      <Navbar />
      <HeroSection />
      <RerouteSection />
      <IntelligenceSection />
      <HumanOversightSection />
      <ProblemSection />
      <FrictionSection />
      <Footer />
    </main>
  );
}
