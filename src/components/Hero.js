import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 pt-20 pb-32 overflow-hidden">
      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl pt-12">
        <h1 className="text-[76px] md:text-[86px] lg:text-[96px] font-medium leading-[0.95] mb-2">
          <span className="text-[#acacac]">The Ultimate Solution </span>
          <span className="text-black">for</span>
        </h1>
        <h1 className="text-[76px] md:text-[86px] lg:text-[96px] font-medium leading-[0.95] mb-12">
          Financial Inclusion
        </h1>

        <p className="text-xl mb-12 max-w-3xl font-normal">
          NAKA is revolutionising financial accessibility by enabling businesses
          to offer their customers vital financial services.
        </p>

        <Link
          href="/start"
          className="inline-flex items-center border border-black rounded-full px-8 py-3 cta-button"
        >
          Start Now <span className="ml-2">↗</span>
        </Link>
      </div>
    </section>
  );
}
