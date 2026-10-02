"use client";

import { useEffect, useRef } from "react";

export default function AnimatedLabCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create 40 floating microfluidic particles & DNA bubbles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 8 + 3,
      color: Math.random() > 0.5 ? "rgba(239, 125, 0, 0.4)" : "rgba(43, 53, 143, 0.35)",
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8 - 0.3,
      pulse: Math.random() * Math.PI * 2,
    }));

    let dnaAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw animated subtle floating DNA strands in background
      dnaAngle += 0.015;
      const dnaCenterX = width > 768 ? width * 0.85 : width * 0.9;
      const dnaPoints = 18;
      const dnaSpacing = height / (dnaPoints - 2);

      for (let i = 0; i < dnaPoints; i++) {
        const y = i * dnaSpacing;
        const sinVal = Math.sin(dnaAngle + i * 0.35);
        const x1 = dnaCenterX + sinVal * 45;
        const x2 = dnaCenterX - sinVal * 45;

        // Connecting rungs
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 + Math.abs(sinVal) * 0.08})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node 1 (Orange)
        ctx.beginPath();
        ctx.arc(x1, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(239, 125, 0, 0.6)";
        ctx.fill();

        // Node 2 (Blue)
        ctx.beginPath();
        ctx.arc(x2, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(43, 53, 143, 0.6)";
        ctx.fill();
      }

      // 2. Draw floating microfluidic bubbles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentRadius = p.radius + Math.sin(p.pulse) * 1.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Add glossy shine to bubble
        ctx.beginPath();
        ctx.arc(p.x - currentRadius * 0.3, p.y - currentRadius * 0.3, Math.max(0.5, currentRadius * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
