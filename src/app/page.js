import Path from "@/components/Path";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "@/components/Portfolio";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-transparent px-12 md:px-52 lg:px-30">
      <div className="z-40">
        <Header />
        <Hero />
        <Path />
        <Portfolio />
      </div>

      <Background className="absolute top-0 right-50 h-full w-1/3" />
    </div>
  );
}
