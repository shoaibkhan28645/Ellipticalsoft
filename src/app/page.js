import Header from "../components/Header";
import Hero from "../components/Hero";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Background />
      <Header />
      <Hero />
    </div>
  );
}
