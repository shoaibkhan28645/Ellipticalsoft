"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardItem from "@/components/common/ServicesCard";

import { useEffect, useRef, useState } from "react";
import AI from "../../public/assets/AI.avif";
import App from "../../public/assets/App.avif";
import crypto from "../../public/assets/crypto.avif";
import Devops from "../../public/assets/Devops.avif";
import web from "../../public/assets/web.avif";
import cloud from "../../public/assets/cloud.avif";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const cardsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle intersection observer for fade-in effect (not on mobile)
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".card-animate");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [isMobile]);

  // Add scroll event listener for alternating column effect (not on mobile)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Calculate dynamic offset for each column based on scroll position
  // Returns empty style object for mobile devices
  const getScrollOffsetStyle = (columnIndex) => {
    if (isMobile) return {};

    // Base multiplier for scroll effect intensity - reduced for subtler effect
    const baseMultiplier = 0.05;

    // Create alternating directions for columns
    const columnMultipliers = [0.5, -1, 0.5];
    const offset = scrollY * baseMultiplier * columnMultipliers[columnIndex];

    return {
      transform: `translateY(${offset}px)`,
    };
  };

  return (
    <section className="relative w-full flex items-center justify-center py-16 lg:py-0 lg:mb-45">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Animated background elements - hide on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000"></div>
        </>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="lg:col-span-1 lg:pt-8"
            initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
              FEATURED INSIGHTS
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-6 leading-tight">
              <span className="text-[#BDBBBB]">We Don't Just Offer</span>{" "}
              <span className="text-[#191919] block mt-2">
                Services We Deliver Success
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-8 font-outfit">
              Get a glimpse of our impact-driven services.
            </p>

            <Link
              href="/start"
              className="inline-flex items-center border border-black rounded-full px-8 py-3 cta-button"
            >
              Explore Services <span className="ml-2">↗</span>
            </Link>
          </motion.div>

          {/* Right column - Cards */}
          <div
            ref={cardsRef}
            className="lg:col-span-1 w-full flex justify-center items-center"
          >
            {/* On mobile: single column grid */}
            {isMobile ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-md">
                {/* Cards in responsive grid for mobile/tablet */}
                <CardItem
                  image={AI.src}
                  type="Case Study"
                  title="Enabling Seamless Resale Operations Across E-Commerce"
                  isMobile={isMobile}
                  delay={0.1}
                />
                <CardItem
                  image={cloud.src}
                  type="Blogs"
                  title="How Cloud Computing Can Transform Small Businesses"
                  isMobile={isMobile}
                  delay={0.2}
                />
                <CardItem
                  image={web.src}
                  type="Blogs"
                  title="Custom Web Application Development: Everything You Need to Know"
                  isMobile={isMobile}
                  delay={0.3}
                />
                <CardItem
                  image={App.src}
                  type="Case Study"
                  title="Empowering XQUIC for Automated Financial Accuracy"
                  isMobile={isMobile}
                  delay={0.4}
                />
                <CardItem
                  image={Devops.src}
                  type="Blogs"
                  title="Trends of Mobile Design: What's Next for Your Business?"
                  isMobile={isMobile}
                  delay={0.5}
                />
                <CardItem
                  image={AI.src}
                  type="Case Study"
                  title="KUDO's Journey to Bridging Global Communications"
                  isMobile={isMobile}
                  delay={0.6}
                />
                <CardItem
                  image={crypto.src}
                  type="Case Study"
                  title="Automating Financial Insights for Smarter Business Decisions"
                  isMobile={isMobile}
                  delay={0.7}
                />
              </div>
            ) : (
              // Desktop layout with three columns - Fixed overflow issues
              <div className="w-full max-w-lg lg:pt-30">
                <div className="grid grid-cols-3 gap-2 auto-rows-auto">
                  {/* First column/section - 2 cards */}
                  <div
                    className="flex flex-col gap-2 transition-transform duration-700 ease-out -mt-0"
                    style={getScrollOffsetStyle(0)}
                  >
                    <CardItem
                      image={AI.src}
                      type="Case Study"
                      title="Enabling Seamless Resale Operations Across E-Commerce"
                      isMobile={isMobile}
                      delay={0.1}
                    />
                    <CardItem
                      image={cloud.src}
                      type="Blogs"
                      title="How Cloud Computing Can Transform Small Businesses"
                      isMobile={isMobile}
                      delay={0.4}
                    />
                  </div>

                  {/* Second column/section - 3 cards */}
                  <div
                    className="flex flex-col gap-2 transition-transform duration-700 ease-out pt-18"
                    style={getScrollOffsetStyle(1)}
                  >
                    <CardItem
                      image={web.src}
                      type="Blogs"
                      title="Custom Web Application Development: Everything You Need to Know"
                      isMobile={isMobile}
                      delay={0.2}
                    />
                    <CardItem
                      image={App.src}
                      type="Case Study"
                      title="Empowering XQUIC for Automated Financial Accuracy"
                      isMobile={isMobile}
                      delay={0.3}
                    />
                    <CardItem
                      image={Devops.src}
                      type="Blogs"
                      title="Trends of Mobile Design: What's Next for Your Business?"
                      isMobile={isMobile}
                      delay={0.5}
                    />
                  </div>

                  {/* Third column/section - 2 cards */}
                  <div
                    className="flex flex-col gap-2 transition-transform duration-700 ease-out -mt-0"
                    style={getScrollOffsetStyle(2)}
                  >
                    <CardItem
                      image={AI.src}
                      type="Case Study"
                      title="KUDO's Journey to Bridging Global Communications"
                      isMobile={isMobile}
                      delay={0.6}
                    />
                    <CardItem
                      image={crypto.src}
                      type="Case Study"
                      title="Automating Financial Insights for Smarter Business Decisions"
                      isMobile={isMobile}
                      delay={0.7}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

//  <section className="relative w-full bg-teal-200 flex justify-center item-center lg:mb-100">
//       {/* Background with subtle gradient */}
//       <div className="absolute inset-0 bg-transparent" />

//       {/* Animated background elements - hide on mobile */}
//       {!isMobile && (
//         <>
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
//           <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000"></div>
//         </>
//       )}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Two-column layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left column - Text content */}
//           <motion.div
//             className="lg:col-span-1 lg:pt-8"
//             initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
//             animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-[#191919] font-outfit font-medium tracking-wider mb-4 text-xs uppercase">
//               FEATURED INSIGHTS
//             </h3>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-6 leading-tight">
//               <span className="text-[#BDBBBB]">We Don't Just Offer</span>{" "}
//               <span className="text-[#191919] block mt-2">
//                 Services We Deliver Success
//               </span>
//             </h2>
//             <p className="text-lg md:text-xl text-[#6b6b6b] mb-8 font-outfit">
//               Get a glimpse of our impact-driven services.
//             </p>

//             <Link
//               href="/start"
//               className="inline-flex items-center border border-black rounded-full px-8 py-3 cta-button"
//             >
//               Explore Services <span className="ml-2">↗</span>
//             </Link>
//           </motion.div>
