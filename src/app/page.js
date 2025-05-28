import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "@/components/Portfolio";
import Background from "@/components/Background";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ServiceExcellence from "@/components/ServiceExcellence";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-transparent">
      {/* Background - positioned within proper constraints */}
      <div className="absolute inset-0 z-0">
        <div className="max-w-7xl mx-auto flex justify-end h-full relative">
          <Background className="absolute top-0 right-0 xl:right-8 2xl:right-16 h-full w-1/4 sm:w-1/3 lg:w-1/3 max-w-md" />
        </div>
      </div>

      {/* Main content with consistent container constraints */}
      <div className="relative z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Header />
          <Hero />
          <ServiceExcellence />
          <Portfolio />
        </div>

        {/* Testimonials - full width section */}
        <div className="lg:max-w-7xl mx-auto lg:px-8">
          <Testimonials />
        </div>

        {/* Footer section with dark background */}
        <div className="bg-[#191919] mt-12 md:mt-20 lg:mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
