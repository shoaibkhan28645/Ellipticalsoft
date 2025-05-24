import Image from "next/image";
import Background from "./Background";

export default function Path() {
  return (
    <div className="w-full bg-transparent py-30 relative">
      <div className="container mx-auto px-6 items-center relative z-10">
        <h1 className="text-6xl font-light mb-16">
          <span className="text-[#BDBBBB]">Money</span>{" "}
          <span className="text-black">Unlocked</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* First Card */}
          <div className="bg-[#D9D9D9] col-span-2 px-5 py-10 rounded-3xl shadow-sm">
            <h2 className="text-[32px] font-normal text-black mb-20 leading-tight">
              Your Card, Your Customers, Limitless Possibilities
            </h2>
            <p className="text-black text-lg font-light leading-relaxed">
              Whether your needs include a payment card, liquidity for tokenized
              assets, a loyalty or VIP card, or any other innovative solution,
              NAKA will reduce costs, enhance speed, and boost security.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-[#2F2F2F] px-5 py-10 rounded-3xl shadow-sm">
            <h2 className="text-3xl font-normal  text-white mb-20 leading-tight">
              Accept All Major Payment Options
            </h2>
            <p className="text-white text-lg font-light leading-relaxed">
              Our Payment Network seamlessly integrates into any acceptance
              points alongside major ones.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-gray-900 px-5 py-10 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-normal text-white mb-20 leading-tight">
                Include All Your Customers
              </h2>
              <p className="text-white text-lg font-light leading-relaxed">
                Our Payment Network ensures that customers can fully utilize all
                features without needing a bank account.
              </p>
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/icons/react.png"
                alt="Customer using payment services"
                fill
                className="object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
