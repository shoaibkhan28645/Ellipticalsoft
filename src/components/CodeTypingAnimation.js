"use client";

import { useState, useEffect, useRef } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

export default function CodeTypingAnimation() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const typingRef = useRef(null);
  const resetRef = useRef(null);

  const fullCode = `function solveProblem(challenge) {
  const solution = EllipticalSoft.analyze(challenge);
  const optimizedCode = solution.generateCode();
  return result; // Problem solved!
}
solveProblem(yourBusiness);`;

  // Start/restart typing animation
  const startTypingAnimation = () => {
    setDisplayedCode("");
    setCurrentPosition(0);
    setIsComplete(false);
  };

  // Handle the typing animation
  useEffect(() => {
    if (isComplete) {
      // Reset after a delay when animation completes
      resetRef.current = setTimeout(() => {
        startTypingAnimation();
      }, 8000);

      return () => clearTimeout(resetRef.current);
    }

    if (currentPosition < fullCode.length) {
      // Continue typing
      typingRef.current = setTimeout(() => {
        setDisplayedCode(fullCode.substring(0, currentPosition + 1));
        setCurrentPosition((prev) => prev + 1);
      }, 20 + Math.random() * 20); // Random typing speed for realism
    } else {
      // Animation complete
      setIsComplete(true);
    }

    return () => clearTimeout(typingRef.current);
  }, [currentPosition, isComplete, fullCode]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get viewport dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate mouse position as percentage of viewport (-0.5 to 0.5 range)
      const mouseXPercentage = e.clientX / windowWidth - 0.5;
      const mouseYPercentage = e.clientY / windowHeight - 0.5;

      // Update state
      setMousePosition({ x: mouseXPercentage, y: mouseYPercentage });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Start animation on first render
  useEffect(() => {
    startTypingAnimation();
    return () => {
      clearTimeout(typingRef.current);
      clearTimeout(resetRef.current);
    };
  }, []);

  // Custom theme inspired by Apple's light mode
  const appleLightTheme = {
    backgroundColor: "#ffffff",
    textColor: "#1d1d1f",
    substringColor: "#0071e3",
    keywordColor: "#e8453c",
    attributeColor: "#9400d3",
    selectorAttributeColor: "#9400d3",
    docTagColor: "#0068da",
    nameColor: "#2d7ff9",
    builtInColor: "#2d7ff9",
    literalColor: "#35a744",
    bulletColor: "#007aff",
    codeColor: "#1d1d1f",
    additionColor: "#35a744",
    regexpColor: "#ff9500",
    symbolColor: "#2d7ff9",
    variableColor: "#d88200",
    templateVariableColor: "#d88200",
    linkColor: "#0071e3",
    selectorClassColor: "#2d7ff9",
    commentColor: "#8e8e93",
  };

  // Calculate the rotation based on mouse position
  const rotateX = mousePosition.y * -20; // Invert Y axis for natural tilt
  const rotateY = mousePosition.x * 20;
  const translateZ =
    20 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 10;

  return (
    <div
      className="relative group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
    >
      {/* Subtle shadow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05)",
        }}
      ></div>

      {/* Main container with mouse tracking */}
      <div
        className="relative bg-white rounded-2xl p-6 shadow-lg w-[400px] h-[320px] overflow-hidden border border-gray-100 transition-all duration-300 transform"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
          transition: "transform 0.5s ease-out",
          boxShadow: `
            ${-mousePosition.x * 20}px ${
            -mousePosition.y * 20
          }px 30px rgba(0, 0, 0, 0.08),
            0 10px 15px rgba(0, 0, 0, 0.03),
            inset ${mousePosition.x * 10}px ${
            mousePosition.y * 10
          }px 30px rgba(255, 255, 255, 0.5)
          `,
        }}
      >
        {/* Glass reflection overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `linear-gradient(
              ${135 + mousePosition.x * 30}deg,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0) 50%
            )`,
            borderRadius: "16px",
          }}
        ></div>

        {/* Header with simple filename - removed all copy buttons */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-red-800 transition-opacity">
                ×
              </span>
            </div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-yellow-800 transition-opacity">
                −
              </span>
            </div>
            <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-green-800 transition-opacity">
                +
              </span>
            </div>
          </div>
          <div className="text-gray-500 text-xs font-mono">code.js</div>
        </div>

        {/* Code editor area with subtle background pattern */}
        <div className="h-[calc(100%-40px)] overflow-hidden relative rounded-xl bg-gray-50 p-2 z-10">
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="relative z-10 h-full">
            <CodeBlock
              text={displayedCode}
              language="javascript"
              theme={appleLightTheme}
              showLineNumbers={false}
              wrapLongLines={true}
              codeBlock
              customStyle={{
                height: "100%",
                background: "transparent",
                borderRadius: "8px",
                overflow: "hidden",
                fontSize: "0.85rem",
                fontFamily: "SF Mono, Menlo, Monaco, Consolas, monospace",
              }}
              // Remove the copied prop entirely
            />
            {!isComplete && (
              <span className="animate-pulse text-black absolute bottom-6 right-6">
                |
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
