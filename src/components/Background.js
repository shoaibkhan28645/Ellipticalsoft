"use client";

import React, { useState, useEffect, useRef } from "react";

const Background = ({ className = "", dark = false }) => {
  const [lines, setLines] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Generate random lines with colors on mount
  useEffect(() => {
    const colors = ["#BEF264", "#F7C7AD"]; // Lime and Peach/Salmon
    const generatedLines = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 2 + Math.random() * 2, // Staggered delays with randomness
      duration: 6 + Math.random() * 2, // Varied durations
    }));
    setLines(generatedLines);
  }, []);

  // Handle scroll for fog reveal effect
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

  return (
    <div ref={containerRef} className={`pointer-events-none z-0 ${className}`}>
      {/* Fog overlay that fades with scroll */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-transparent z-10 transition-opacity duration-1000"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 2),
          pointerEvents: "none",
        }}
      />

      {/* Base lines with scroll reveal */}
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={`base-${num}`}
          ref={(el) => (lineRefs.current[num - 1] = el)}
          className={`absolute top-0 h-full w-0.5 bg-gray-200/50 base-line left-${num}/6`}
          style={{
            left: `${(num * 100) / 6}%`,
            transition: "opacity 1.5s ease-out",
            opacity: 0,
          }}
        />
      ))}

      {/* Flowing color segments */}
      {lines.map((line, index) => (
        <div
          key={`flow-${line.id}`}
          className={`absolute w-1 h-24 ${getGlowClass(
            line.color
          )} flowing-line`}
          style={{
            left: `${((index + 1) * 100) / 6}%`,
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
      `}</style>
    </div>
  );
};

export default Background;
