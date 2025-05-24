"use client";

import React from "react";

const Background = ({ className = "" }) => {
  return (
    <div className={`pointer-events-none z-0 ${className}`}>
      {/* Base lines - increased width and visibility */}
      <div className="absolute left-1/6 top-0 h-full w-0.5 bg-gray-200/30"></div>
      <div className="absolute left-2/6 top-0 h-full w-0.5 bg-gray-200/30"></div>
      <div className="absolute left-3/6 top-0 h-full w-0.5 bg-gray-200/30"></div>
      <div className="absolute left-4/6 top-0 h-full w-0.5 bg-gray-200/30"></div>
      <div className="absolute left-5/6 top-0 h-full w-0.5 bg-gray-200/30"></div>

      {/* Flowing color segments with enhanced brightness and glow */}
      <div className="absolute left-1/6 w-1 h-24 bg-lime-300 animate-flow-1 glow-lime"></div>
      <div className="absolute left-2/6 w-1 h-24 bg-lime-300 animate-flow-2 glow-lime"></div>
      <div className="absolute left-3/6 w-1 h-24 bg-lime-300 animate-flow-3 glow-lime"></div>
      <div className="absolute left-4/6 w-1 h-24 bg-lime-300 animate-flow-4 glow-lime"></div>
      <div className="absolute left-5/6 w-1 h-24 bg-lime-300 animate-flow-5 glow-lime"></div>

      <style jsx>{`
        @keyframes flow-down {
          0% {
            top: -96px;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .animate-flow-1 {
          animation: flow-down 3s linear infinite;
          animation-delay: 0s;
        }
        .animate-flow-2 {
          animation: flow-down 3s linear infinite;
          animation-delay: 2s;
        }
        .animate-flow-3 {
          animation: flow-down 3s linear infinite;
          animation-delay: 4s;
        }
        .animate-flow-4 {
          animation: flow-down 3s linear infinite;
          animation-delay: 6s;
        }
        .animate-flow-5 {
          animation: flow-down 3s linear infinite;
          animation-delay: 8s;
        }
        .glow-lime {
          box-shadow: 0 0 15px 1px rgba(190, 242, 100, 0.9);
          width: 1px;
        }
      `}</style>
    </div>
  );
};

export default Background;
