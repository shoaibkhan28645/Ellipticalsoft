"use client";

import { useEffect, useRef } from "react";

const RhythmicPulseGrid = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    
    // Responsive sizing
    const updateCanvasSize = () => {
      const containerWidth = container.offsetWidth;
      const size = Math.min(containerWidth, 550);
      canvas.width = size;
      canvas.height = size;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let time = 0;
    let animationFrameId = null;
    const lineCount = 20;
    const lineSpacing = canvas.height / (lineCount + 1);
    const verticalLineCount = 20;
    const verticalLineSpacing = canvas.width / (verticalLineCount + 1);

    // Three patterns representing simplicity, patience, and humility
    const dotPatterns = [];
    for (let i = 0; i < 3; i++) {
      const pattern = [];
      const frequency = 0.5 + i * 0.3; // Each virtue moves at its own pace
      const amplitude = 100 + i * 50; // Each finds its own space

      for (let j = 0; j < 15; j++) {
        pattern.push({
          baseX: canvas.width / 2,
          baseY: (j + 1) * (canvas.height / 16),
          frequency: frequency,
          amplitude: amplitude,
          phase: j * 0.2,
        });
      }
      dotPatterns.push(pattern);
    }

    const animate = () => {
      // FIXED: Properly clear the canvas instead of using transparent fill
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.0045; // Further reduced to 56.25% of original speed

      // Draw dot patterns
      dotPatterns.forEach((pattern, patternIndex) => {
        pattern.forEach((dot) => {
          const x =
            dot.baseX +
            Math.sin(time * dot.frequency + dot.phase) * dot.amplitude;
          const y = dot.baseY;

          // Find nearest line and snap to it
          const nearestLine = Math.round(y / lineSpacing) * lineSpacing;

          const sizeMultiplier =
            1 + Math.sin(time * 1.5 + patternIndex + dot.phase) * 0.3; // Reduced to 75% pulse speed
          const size = 3 * sizeMultiplier;

          ctx.fillStyle = `rgba(40, 40, 40, ${
            0.6 + Math.sin(time * 1.125 + dot.phase) * 0.3
          })`; // Reduced to 75% opacity pulse speed
          ctx.beginPath();
          ctx.arc(x, nearestLine, size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      dotPatterns.length = 0;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default RhythmicPulseGrid;
