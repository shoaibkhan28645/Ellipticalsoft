"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up Intersection Observer
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px 0px -150px 0px",
          threshold: 0.15,
        }
      );

      setTimeout(() => {
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
      }, 100);

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  // Container animation
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  // Grey container animation
  const greyContainerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Simplified phone animation (smaller size)
  const phoneVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 1.2,
        delay: 0.3,
      },
    },
  };

  // Floating animation - simplified
  const floatingVariants = {
    animate: {
      y: [-4, 4, -4],
      transition: {
        y: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
  };

  // Dynamic shadow
  const shadowVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Screen glow
  const screenGlowVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 0.6, 0, 0.4, 0],
      scale: [1, 1.02, 1, 1.01, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  // Floating particles
  const particleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -50, -80],
      x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
        delay: Math.random() * 2,
      },
    },
  };

  // Reflection effect
  const reflectionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 0.3, 0],
      x: [-50, 50, 100],
      transition: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-transparent py-16 md:py-24 h-screen overflow-hidden"
      id="portfolio-section"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
          <div className="max-w-xl">
            <h3 className="text-gray-400 font-normal text-xl mb-3">
              Mobile App
            </h3>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="text-gray-400">Storvii</span>{" "}
              <span className="text-black font-normal">
                A Story Telling App
              </span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Storvii is an app that connects people through storytelling. It
              allows users to create and join virtual story rooms, share life
              experiences, and engage in meaningful conversations.
            </p>

            <Link
              href="/start"
              className="inline-flex items-center border border-black rounded-full px-8 py-3 cta-button"
            >
              Explore Projects <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        {/* Right Content - Smaller Mobile */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[400px] h-[600px]">
            {/* Grey Square Container - Smaller */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={greyContainerVariants}
            >
              {/* Subtle pattern overlay for the grey container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-3xl" />

              {/* Subtle border highlight */}
              <div className="absolute inset-0 border border-white/30 rounded-3xl" />

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm" />
            </motion.div>

            {/* Animated Mobile Image Container - Smaller Size */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[450px] z-10"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#BEF264] rounded-full opacity-70"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                    variants={particleVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  />
                ))}
              </div>

              {/* Phone Container - No Interactive Tilt */}
              <motion.div
                className="relative w-full h-full overflow-hidden"
                variants={phoneVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {/* Floating Animation Wrapper */}
                <motion.div
                  className="relative w-full h-full"
                  variants={floatingVariants}
                  animate="animate"
                >
                  {/* Base Phone Image */}
                  <Image
                    src="/images/mobile-app.png"
                    alt="Mobile App Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    style={{
                      objectFit: "contain",
                      borderRadius: "30px",
                    }}
                    priority
                  />

                  {/* Enhanced Screen Glow */}
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-tr from-[#BEF264] via-[#F7C7AD] to-[#BEF264] rounded-[35px]"
                    style={{ mixBlendMode: "overlay" }}
                    variants={screenGlowVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  />

                  {/* Screen Reflection */}
                  <motion.div
                    className="absolute inset-2 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-[25px] w-[15px]"
                    variants={reflectionVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  />

                  {/* Phone Frame Highlight */}
                  <div className="absolute inset-1 border-2 border-white/20 rounded-[28px]" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
