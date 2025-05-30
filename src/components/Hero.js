import Link from "next/link";
import Artwork from "./common/Artwork";
import RhythmicPulseGrid from "./common/RythmicPulseGrid";

export default function Hero() {
  return (
    <section className="relative pb-100 overflow-hidden">
      {/* Container with proper max-width constraints */}
      <div className="relative mx-auto max-w-7xl">
        {/* Main hero content */}
        <div className="relative z-20 pt-12 lg:pt-30 ">
          <div className="max-w-1xl">
            <h1 className="text-[76px] md:text-[86px] lg:text-[96px] xl:text-[106px] font-medium leading-[0.95] mb-2">
              <span className="text-[#acacac]">The Ultimate Solution </span>
              <span className="text-black">for</span>
            </h1>
            <h1 className="text-[76px] md:text-[86px] lg:text-[96px] xl:text-[106px] font-medium leading-[0.95] mb-12">
              Programming
            </h1>
            <div className="max-w-2xl">
              <p className="text-xl mb-12 font-normal text-gray-700">
                EllipticalSoft is revolutionising software company by providing
                all type solutions to your problems with ease.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center border border-black rounded-full px-8 py-3 cta-button hover:bg-black hover:text-white transition-colors duration-200"
              >
                Start Now <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Code typing animation - positioned within the container */}
        <div className="hidden lg:block absolute top-0 right-0 z-10">
          <div className="relative">
            <RhythmicPulseGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
