import Link from "next/link";
import Artwork from "./common/Artwork";
import RhythmicPulseGrid from "./common/RythmicPulseGrid";

export default function Hero() {
  return (
    <section className="relative mb-32 sm:mb-48 md:mb-64 lg:mb-80 overflow-hidden">
      {/* Container with proper max-width constraints */}
      <div className="relative mx-auto max-w-7xl">
        {/* Main hero content */}
        <div className="relative z-20 pt-8 sm:pt-12 lg:pt-30">
          <div className="max-w-full lg:max-w-5xl">
            {/* Mobile: Two lines, Desktop: Single line */}
            <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[106px] font-medium leading-[0.95] mb-2">
              <span className="text-[#BDBBBB] block sm:inline">The Ultimate</span>
              <span className="text-[#BDBBBB] sm:hidden"> </span>
              <span className="text-[#BDBBBB] block sm:inline">Solution </span>
              <span className="text-black inline">for</span>
            </h1>
            <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[106px] font-medium leading-[0.95] mb-6 sm:mb-8 md:mb-12">
              Programming
            </h1>
            <div className="max-w-full sm:max-w-xl md:max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 font-normal text-gray-700">
                EllipticalSoft is revolutionising software company by providing
                all type solutions to your problems with ease.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center border border-black rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base cta-button hover:bg-black hover:text-white transition-colors duration-200"
              >
                Start Now <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Code typing animation - shown on tablet and above */}
        <div className="hidden md:block absolute top-0 right-0 z-10">
          <div className="relative">
            <RhythmicPulseGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
