"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedDnaHelixProps {
  className?: string;
  width?: number;
  height?: number;
  speed?: number;
  interactive?: boolean;
  hovered?: boolean;
}

export default function AnimatedDnaHelix({
  className = "",
  width,
  height,
  speed = 0.04,
  interactive = true,
  hovered = false,
}: AnimatedDnaHelixProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [internalHovered, setInternalHovered] = useState(false);
  const [hasDocked, setHasDocked] = useState(false);
  const [dimensions, setDimensions] = useState({ w: width || 90, h: height || 55 });

  const isHovered = hovered || internalHovered;

  // Measure container dimensions
  useEffect(() => {
    if (width && height) {
      setDimensions({ w: width, h: height });
      return;
    }

    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ w: Math.round(rect.width), h: Math.round(rect.height) });
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const w = dimensions.w;
    const h = dimensions.h;

    // High-DPI crisp rendering
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 2, 3) : 2;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
    ctx.scale(dpr, dpr);

    const numPoints = 14;
    // Radius proportional to height
    const helixRadius = Math.max(8, h * 0.28);
    // Slight arch tilt matching original logo swoosh
    const tiltAngle = -0.28;

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Speed up on hover
      const currentSpeed = isHovered ? speed * 1.8 : speed;
      angle += currentSpeed;

      const centerX = w * 0.5;
      const centerY = h * 0.52;
      const length = w * 0.9;
      const startX = centerX - length / 2;

      interface RenderElement {
        type: "rung" | "node1" | "node2";
        z: number;
        render: () => void;
      }

      const elements: RenderElement[] = [];
      const strand1Points: { x: number; y: number; z: number }[] = [];
      const strand2Points: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1);
        const rawX = startX + t * length;
        // Natural curve arch of the DNA helix over the letter L
        const archY = Math.sin(t * Math.PI) * -(h * 0.18);
        const rawY = centerY + archY;

        const cosTilt = Math.cos(tiltAngle);
        const sinTilt = Math.sin(tiltAngle);
        const dx = rawX - centerX;
        const dy = rawY - centerY;

        const rotatedX = centerX + (dx * cosTilt - dy * sinTilt);
        const rotatedY = centerY + (dx * sinTilt + dy * cosTilt);

        // 3D rotation angle
        const phi = angle + t * Math.PI * 3.4;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        // Normal perpendicular vector
        const perpX = -sinTilt;
        const perpY = cosTilt;

        const x1 = rotatedX + perpX * cosPhi * helixRadius;
        const y1 = rotatedY + perpY * cosPhi * helixRadius;
        const z1 = sinPhi * helixRadius;

        const x2 = rotatedX - perpX * cosPhi * helixRadius;
        const y2 = rotatedY - perpY * cosPhi * helixRadius;
        const z2 = -sinPhi * helixRadius;

        strand1Points.push({ x: x1, y: y1, z: z1 });
        strand2Points.push({ x: x2, y: y2, z: z2 });

        // Base-pair ladder rung
        const avgZ = (z1 + z2) / 2;
        elements.push({
          type: "rung",
          z: avgZ - 1,
          render: () => {
            const alpha = 0.45 + ((avgZ + helixRadius) / (2 * helixRadius)) * 0.5;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            const grad = ctx.createLinearGradient(x1, y1, x2, y2);
            grad.addColorStop(0, `rgba(239, 125, 0, ${alpha})`);
            grad.addColorStop(0.5, `rgba(255, 190, 0, ${alpha * 0.95})`);
            grad.addColorStop(1, `rgba(249, 115, 22, ${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(1.5, 2.2 + ((avgZ + helixRadius) / (2 * helixRadius)) * 1.4);
            ctx.stroke();

            // Center nucleotide bond glow dot
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            ctx.beginPath();
            ctx.arc(midX, midY, Math.max(1.2, 1.8), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
            ctx.fill();
          },
        });

        // Strand 1 Nucleotide Node (Vibrant Orange)
        elements.push({
          type: "node1",
          z: z1,
          render: () => {
            const depthFactor = (z1 + helixRadius) / (2 * helixRadius);
            const radius = Math.max(2, 2.4 + depthFactor * 2.2);
            const alpha = 0.55 + depthFactor * 0.45;

            if (depthFactor > 0.6) {
              ctx.shadowColor = "rgba(247, 127, 0, 0.85)";
              ctx.shadowBlur = 7;
            } else {
              ctx.shadowBlur = 0;
            }

            ctx.beginPath();
            ctx.arc(x1, y1, radius, 0, Math.PI * 2);
            const nodeGrad = ctx.createRadialGradient(
              x1 - radius * 0.3,
              y1 - radius * 0.3,
              0.5,
              x1,
              y1,
              radius
            );
            nodeGrad.addColorStop(0, "#ffffff");
            nodeGrad.addColorStop(0.3, "#f97316");
            nodeGrad.addColorStop(1, "#c2410c");
            ctx.fillStyle = nodeGrad;
            ctx.globalAlpha = alpha;
            ctx.fill();
            ctx.globalAlpha = 1.0;
            ctx.shadowBlur = 0;
          },
        });

        // Strand 2 Nucleotide Node (Golden Amber)
        elements.push({
          type: "node2",
          z: z2,
          render: () => {
            const depthFactor = (z2 + helixRadius) / (2 * helixRadius);
            const radius = Math.max(2, 2.2 + depthFactor * 2.0);
            const alpha = 0.55 + depthFactor * 0.45;

            if (depthFactor > 0.6) {
              ctx.shadowColor = "rgba(255, 180, 0, 0.85)";
              ctx.shadowBlur = 7;
            } else {
              ctx.shadowBlur = 0;
            }

            ctx.beginPath();
            ctx.arc(x2, y2, radius, 0, Math.PI * 2);
            const nodeGrad = ctx.createRadialGradient(
              x2 - radius * 0.3,
              y2 - radius * 0.3,
              0.5,
              x2,
              y2,
              radius
            );
            nodeGrad.addColorStop(0, "#ffffff");
            nodeGrad.addColorStop(0.3, "#fbbf24");
            nodeGrad.addColorStop(1, "#d97706");
            ctx.fillStyle = nodeGrad;
            ctx.globalAlpha = alpha;
            ctx.fill();
            ctx.globalAlpha = 1.0;
            ctx.shadowBlur = 0;
          },
        });
      }

      // Continuous ribbon strand lines
      const drawStrand = (pts: { x: number; y: number }[], c1: string, c2: string) => {
        if (pts.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          const xc = (pts[i - 1].x + pts[i].x) / 2;
          const yc = (pts[i - 1].y + pts[i].y) / 2;
          ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, xc, yc);
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, c1);
        grad.addColorStop(1, c2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = Math.max(2.2, 3.2);
        ctx.lineCap = "round";
        ctx.stroke();
      };

      drawStrand(strand1Points, "rgba(239, 125, 0, 0.4)", "rgba(249, 115, 22, 0.5)");
      drawStrand(strand2Points, "rgba(251, 146, 60, 0.4)", "rgba(245, 158, 11, 0.5)");

      // Z-sorting: back to front rendering
      elements.sort((a, b) => a.z - b.z);
      elements.forEach((el) => el.render());

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, speed, isHovered]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => interactive && setInternalHovered(true)}
      onMouseLeave={() => interactive && setInternalHovered(false)}
      className={`relative select-none pointer-events-auto ${className}`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
      title="3D Rotating DNA Double Helix"
    >
      {/* Entrance Animation: "DNA ghumta hua aye and logo pr lge aakr ek animation ki form me proper" */}
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 2.4, 
          rotate: -45, 
          x: -55, 
          y: -40 
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0, 
          x: 0, 
          y: 0 
        }}
        transition={{ 
          type: "spring", 
          damping: 16, 
          stiffness: 110, 
          duration: 1.4,
          delay: 0.2
        }}
        onAnimationComplete={() => setHasDocked(true)}
        className="w-full h-full relative"
      >
        <canvas
          ref={canvasRef}
          style={{ width: `${dimensions.w}px`, height: `${dimensions.h}px` }}
          className="block w-full h-full"
        />

        {/* Docking flash aura when DNA arrives and locks onto the logo */}
        {hasDocked && (
          <motion.span
            initial={{ opacity: 0.9, scale: 0.7 }}
            animate={{ opacity: 0, scale: 1.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-orange-400 pointer-events-none"
          />
        )}
      </motion.div>
    </div>
  );
}
