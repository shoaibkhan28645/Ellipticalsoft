"use client";

import React, { useState, useEffect, useRef } from "react";

const Background = ({ className = "", dark = false, showFog = false }) => {
  const [lines, setLines] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Detect mobile and generate lines accordingly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const colors = ["#BEF264", "#F7C7AD"]; // Lime and Peach/Salmon
    const lineCount = window.innerWidth < 640 ? 3 : 5; // Fewer lines on mobile
    
    const generatedLines = Array.from({ length: lineCount }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 2 + Math.random() * 2, // Staggered delays with randomness
      duration: 6 + Math.random() * 2, // Varied durations
    }));
    setLines(generatedLines);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll for fog intensity adjustment
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for line visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("line-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    lineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      lineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [lines]);

  const getGlowClass = (color) => {
    return color === "#BEF264" ? "glow-lime" : "glow-peach";
  };

  // Calculate fog intensity based on scroll position
  const fogIntensity = Math.max(0.3, 0.8 - scrollProgress * 0.3);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full pointer-events-none ${className}`}
    >
      {/* Fog overlays - only render if showFog is true */}
      {showFog && (
        <>
          {/* Top fog overlay - absolute positioned within container */}
          <div
            className="absolute top-0 left-0 right-0 h-32 z-20"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(255, 255, 255, ${fogIntensity}) 0%, 
                rgba(255, 255, 255, ${fogIntensity * 0.7}) 40%, 
                rgba(255, 255, 255, ${fogIntensity * 0.3}) 70%, 
                transparent 100%)`,
              backdropFilter: `blur(${2 + fogIntensity * 3}px)`,
              transition: "all 0.3s ease-out",
            }}
          />

          {/* Bottom fog overlay - absolute positioned within container */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-20"
            style={{
              background: `linear-gradient(to top, 
                rgba(255, 255, 255, ${fogIntensity}) 0%, 
                rgba(255, 255, 255, ${fogIntensity * 0.7}) 40%, 
                rgba(255, 255, 255, ${fogIntensity * 0.3}) 70%, 
                transparent 100%)`,
              backdropFilter: `blur(${2 + fogIntensity * 3}px)`,
              transition: "all 0.3s ease-out",
            }}
          />
        </>
      )}

      {/* Base lines with scroll reveal - responsive count */}
      {lines.map((_, index) => (
        <div
          key={`base-${index}`}
          ref={(el) => (lineRefs.current[index] = el)}
          className={`absolute top-0 h-full w-0.5 bg-gray-200/30 sm:bg-gray-200/50 base-line`}
          style={{
            left: `${((index + 1) * 100) / (lines.length + 1)}%`,
            transition: "opacity 1.5s ease-out",
            opacity: 0,
          }}
        />
      ))}

      {/* Flowing color segments - smaller on mobile */}
      {lines.map((line, index) => (
        <div
          key={`flow-${line.id}`}
          className={`absolute ${isMobile ? 'w-0.5 h-16' : 'w-1 h-24'} ${getGlowClass(
            line.color
          )} flowing-line`}
          style={{
            left: `${((index + 1) * 100) / (lines.length + 1)}%`,
            backgroundColor: line.color,
            animationDelay: `${line.delay}s`,
            animationDuration: `${line.duration}s`,
            opacity: 0,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes flow-down {
          0% {
            top: -96px;
            opacity: 0;
          }
          5% {
            opacity: 0.5;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .flowing-line {
          animation: flow-down linear infinite;
          will-change: transform;
        }

        .glow-lime {
          box-shadow: 0 0 20px 3px rgba(190, 242, 100, 0.6),
            0 0 40px 6px rgba(190, 242, 100, 0.2);
        }

        .glow-peach {
          box-shadow: 0 0 20px 3px rgba(247, 199, 173, 0.6),
            0 0 40px 6px rgba(247, 199, 173, 0.2);
        }

        .base-line {
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
        }

        .line-visible {
          opacity: 1 !important;
          transform: scaleY(1) !important;
          transition: all 1.5s ease-out !important;
        }
        
        @media (max-width: 640px) {
          .glow-lime,
          .glow-peach {
            box-shadow: 0 0 10px 2px rgba(190, 242, 100, 0.4),
              0 0 20px 4px rgba(190, 242, 100, 0.1);
          }
        }
      `}</style>
    </div>
  );
};

// Export a separate FogOverlay component for viewport-wide fog
export const FogOverlay = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [footerFade, setFooterFade] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
      setScrollProgress(progress);

      // Calculate fade-out as we approach the footer
      const footerStart = documentHeight - windowHeight - 1500; // Start fading 400px before footer
      const footerEnd = documentHeight - windowHeight - 1500; // Complete fade 100px before footer

      if (scrollY > footerEnd) {
        setFooterFade(0);
      } else if (scrollY > footerStart) {
        const fadeProgress =
          (scrollY - footerStart) / (footerEnd - footerStart);
        setFooterFade(1 - fadeProgress);
      } else {
        setFooterFade(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fogIntensity = Math.max(0.3, 0.8 - scrollProgress * 0.3) * footerFade;

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Top fog overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-24 sm:h-32"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, ${fogIntensity}) 0%, 
            rgba(255, 255, 255, ${fogIntensity * 0.7}) 40%, 
            rgba(255, 255, 255, ${fogIntensity * 0.3}) 70%, 
            transparent 100%)`,
          backdropFilter: `blur(${2 + fogIntensity * 3}px)`,
          transition: "all 0.3s ease-out",
          opacity: footerFade,
        }}
      />

      {/* Bottom fog overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32"
        style={{
          background: `linear-gradient(to top, 
            rgba(255, 255, 255, ${fogIntensity}) 0%, 
            rgba(255, 255, 255, ${fogIntensity * 0.7}) 40%, 
            rgba(255, 255, 255, ${fogIntensity * 0.3}) 70%, 
            transparent 100%)`,
          backdropFilter: `blur(${2 + fogIntensity * 3}px)`,
          transition: "all 0.3s ease-out",
          opacity: footerFade,
        }}
      />
    </div>
  );
};

export default Background;
