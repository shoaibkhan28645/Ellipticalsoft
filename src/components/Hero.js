import Link from "next/link";
import Artwork from "./common/Artwork";
import RhythmicPulseGrid from "./common/RythmicPulseGrid";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-10 overflow-hidden">
      <div className="relative mx-auto">
        {/* Main hero content - needs to be full width to overlap the code card */}
        <div className="relative z-20 max-w-6xl pt-12">
          <h1 className="text-[76px] md:text-[86px] lg:text-[96px] font-medium leading-[0.95] mb-2">
            <span className="text-[#acacac]">The Ultimate Solution </span>
            <span className="text-black">for</span>
          </h1>
          <h1 className="text-[76px] md:text-[86px] lg:text-[96px] font-medium leading-[0.95] mb-12">
            of Programming
          </h1>

          <p className="text-xl mb-12 max-w-3xl font-normal">
            EllipticalSoft is revolutionising software compnay by providing all
            type solutions to your problems with ease.
          </p>

          <Link
            href="/start"
            className="inline-flex items-center border border-black rounded-full px-8 py-3 cta-button"
          >
            Start Now <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>

      {/* Code typing animation - positioned absolutely with enhanced styling */}
      <div className="hidden lg:block bg-transparent absolute top-0 right-10 lg:right-20 2xl:right-0 z-10 ">
        <RhythmicPulseGrid />
      </div>
    </section>
  );
}
