import Image from "next/image";

export default function ServiceExcellence() {
  return (
    <div className="w-full bg-transparent py-20 mb-50 lg:py-30 relative">
      <div className="container items-center relative z-10">
        <h1 className="text-4xl lg:text-5xl font-light mb-12 lg:mb-16">
          <span className="text-[#BDBBBB]">Excellence</span>{" "}
          <span className="text-black">Delivered</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* First Card - Consultation First */}
          <div className="bg-[#D9D9D9] lg:col-span-2 px-6 py-8 lg:py-10 rounded-3xl shadow-sm flex flex-col justify-between min-h-[300px] lg:min-h-[350px]">
            <div>
              <h2 className="text-2xl lg:text-[28px] xl:text-[32px] font-normal text-black mb-6 lg:mb-8 leading-tight">
                Consultation First, Solutions Always
              </h2>
              <p className="text-black text-base lg:text-lg font-light leading-relaxed">
                We begin with comprehensive consultation to understand your
                business needs. Our expert team provides strategic
                recommendations and creates a tailored roadmap aligned with your
                goals.
              </p>
            </div>
          </div>

          {/* Second Card - Transparent Development */}
          <div className="bg-[#2F2F2F] px-6 py-8 lg:py-10 rounded-3xl shadow-sm flex flex-col justify-between min-h-[300px] lg:min-h-[350px]">
            <div>
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6 lg:mb-8 leading-tight">
                Transparent Development Process
              </h2>
              <p className="text-white text-base lg:text-lg font-light leading-relaxed">
                Stay informed with regular updates, milestone tracking, and
                client portal access. Complete transparency with agile
                methodologies.
              </p>
            </div>
          </div>

          {/* Third Card - Ongoing Partnership */}
          <div className="bg-gray-900 px-6 py-8 lg:py-10 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px] lg:min-h-[350px]">
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6 lg:mb-8 leading-tight">
                Ongoing Partnership & Support
              </h2>
              <p className="text-white text-base lg:text-lg font-light leading-relaxed">
                24/7 support, maintenance, and scaling solutions to ensure your
                software grows with your business.
              </p>
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/patnership.jpg"
                alt="Software development partnership"
                fill
                className="object-cover opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
