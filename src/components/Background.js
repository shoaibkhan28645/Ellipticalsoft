import React from 'react';

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Vertical lines - full height */}
      <div className="absolute inset-0 flex justify-between">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-gray-100" />
        ))}
      </div>
      
      {/* Horizontal lines - not full width */}
      <div className="absolute inset-0 flex flex-col justify-between items-center">
        {/* Top horizontal line */}
        <div className="w-[85%] h-px bg-gray-100" />
        
        {/* Bottom horizontal line */}
        <div className="w-[85%] h-px bg-gray-100" />
      </div>
    </div>
  );
}