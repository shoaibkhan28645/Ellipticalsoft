// components/Portfolio.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Portfolio = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking for interactive tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth mouse following
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

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

  // Handle mouse movement for tilt effect
  const handleMouseMove = (e) => {
    if (!phoneRef.current) return;

    const rect = phoneRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

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

  // Enhanced phone animation with floating effect
  const phoneVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotateX: 20,
      rotateY: -20,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 1.2,
      },
    },
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [-1, 1, -1],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
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

  // Enhanced screen glow
  const screenGlowVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 0.6, 0, 0.4, 0],
      scale: [1, 1.05, 1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
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
      y: [0, -100, -200],
      x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
      transition: {
        duration: 4,
        repeat: Infinity,
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
      x: [-100, 100, 200],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-transparent py-16 md:py-24 overflow-hidden"
      id="portfolio-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
          <div className="max-w-xl">
            <motion.h3
              className="text-gray-400 font-normal text-xl mb-3"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Liquidity
            </motion.h3>
            <motion.h2
              className="text-5xl md:text-6xl font-light mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-gray-400">Use Your</span>{" "}
              <span className="text-black font-normal">Non-Liquid Assets</span>
            </motion.h2>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Protect your assets from inflation and access immediate liquidity.
              Connect any tokenized asset to the NAKA Card and spend it as the
              fiat currency of your choice.
            </motion.p>
          </div>
        </div>

        {/* Right Content - Enhanced Phone Animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            className="relative w-[250px] h-[500px]"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-70"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                variants={particleVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              />
            ))}

            {/* Dynamic Shadow */}
            <motion.div
              className="absolute bottom-0 left-1/2 w-[70%] h-[30px] bg-gradient-to-r from-transparent via-black to-transparent rounded-full blur-xl transform -translate-x-1/2 translate-y-8"
              variants={shadowVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              style={{
                scaleX: useTransform(rotateY, [-15, 15], [0.8, 1.2]),
                opacity: useTransform(rotateY, [-15, 15], [0.2, 0.4]),
              }}
            />

            {/* Phone Container with Interactive Tilt */}
            <motion.div
              ref={phoneRef}
              className="relative w-full h-full cursor-pointer"
              variants={phoneVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
                rotateX: rotateX,
                rotateY: rotateY,
                scale: isHovering ? 1.05 : 1,
              }}
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
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{
                    objectFit: "contain",
                    borderRadius: "30px",
                  }}
                  priority
                />

                {/* Enhanced Screen Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/30 to-pink-400/20 rounded-[30px]"
                  style={{ mixBlendMode: "overlay" }}
                  variants={screenGlowVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                />

                {/* Screen Reflection */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-[30px] w-[20px]"
                  variants={reflectionVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                />

                {/* Interactive Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-[30px]"
                  animate={{
                    opacity: isHovering ? 0.6 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                {/* Phone Frame Highlight */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-[30px]"
                  animate={{
                    borderColor: isHovering
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(255,255,255,0.1)",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
