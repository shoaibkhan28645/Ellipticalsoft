import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "@/components/Portfolio";
import Background, { FogOverlay } from "@/components/Background";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ServiceExcellence from "@/components/ServiceExcellence";
import Services from "@/components/Services";
import AchievementsSection from "@/components/Achievements";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-transparent">
      {/* Main content wrapper with fog overlay */}
      <div className="relative flex-1">
        {/* Fog overlay - only for main content area */}
        <FogOverlay />

        {/* Background - positioned within proper constraints */}
        <div className="absolute inset-0 z-0">
          <div className="max-w-7xl mx-auto flex justify-end h-full relative">
            <Background className="absolute top-0 -right-4 sm:right-0 xl:right-8 2xl:right-16 h-full w-1/2 sm:w-1/3 lg:w-1/3 max-w-md opacity-60 sm:opacity-100" />
          </div>
        </div>

        {/* Main content with consistent container constraints */}
        <div className="relative z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Hero />
            <ServiceExcellence />
          </div>
          <Services />
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Portfolio />
          </div>
          <AchievementsSection />
          {/* Testimonials - full width section */}
          <div className="lg:max-w-7xl mx-auto lg:px-8">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}
