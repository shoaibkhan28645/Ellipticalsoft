import Path from "@/components/Path";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "@/components/Portfolio";
import Background from "@/components/Background";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-transparent">
      <Background className="absolute top-0 right-0 md:right-10 lg:right-20 xl:right-50 h-full w-1/4 sm:w-1/3 lg:w-1/3" />

      <div className="z-40 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-30">
        <Header />
        <Hero />
        <Path />
        <Portfolio />
        <Testimonials />
      </div>

      <div className="bg-[#191919] z-40 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-30 mt-12 md:mt-20 lg:mt-50">
        <Footer />
      </div>
    </div>
  );
}
