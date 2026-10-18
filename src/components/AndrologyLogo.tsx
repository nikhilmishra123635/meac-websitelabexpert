"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AndrologyLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AndrologyLogo({ className = "", showTagline = true }: AndrologyLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasDocked, setHasDocked] = useState(false);

  return (
    <Link 
      href="/" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center select-none group relative ${className}`}
      aria-label="LabXpert Advanced Andrology & Pathology"
    >
      <div 
        className="relative inline-flex items-center"
        style={{ perspective: "1000px" }}
      >
        {/* Official High-Resolution Transparent Base Logo Text (1024x441) */}
        <img
          src="/logo_text_only.png"
          alt="LabXpert Advanced Andrology & Pathology"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* 
          Official DNA Graphic Overlay
          Exact coordinates within the 1024x441 image bounds:
          x: 94..343 (left: 9.18%, width: 24.41%)
          y: 71..230 (top: 16.10%, height: 36.28%)
        */}
        <div 
          className="absolute pointer-events-none"
          style={{
            left: "9.18%",
            top: "16.10%",
            width: "24.41%",
            height: "36.28%",
            perspective: "800px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Entrance Animation: "DNA ghumta hua aye and logo pr lge aakr ek animation ki form me proper" */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 2.3, 
              rotateY: -720, 
              rotateZ: -35,
              x: -55, 
              y: -35 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0, 
              rotateZ: 0,
              x: 0, 
              y: 0 
            }}
            transition={{ 
              type: "spring", 
              damping: 17, 
              stiffness: 115, 
              duration: 1.4,
              delay: 0.2
            }}
            onAnimationComplete={() => setHasDocked(true)}
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Continuous 3D Rotating DNA Helix (GIF style) */}
            <motion.div
              animate={
                isHovered
                  ? {
                      rotateY: [0, 360],
                      scale: [1, 1.08, 1],
                    }
                  : {
                      rotateY: [0, 180, 360],
                    }
              }
              transition={{
                duration: isHovered ? 2.2 : 5.5,
                repeat: Infinity,
                ease: isHovered ? "linear" : "easeInOut",
              }}
              className="w-full h-full flex items-center justify-center relative"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                filter: isHovered 
                  ? "drop-shadow(0 0 10px rgba(247, 127, 0, 0.95)) drop-shadow(0 0 18px rgba(255, 170, 0, 0.6))"
                  : "drop-shadow(0 0 3px rgba(247, 127, 0, 0.35))",
                transition: "filter 0.3s ease",
              }}
            >
              <img
                src="/logo_dna_cropped.png"
                alt="DNA Strand"
                className="w-full h-full object-contain"
                style={{
                  backfaceVisibility: "visible",
                }}
              />

              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full opacity-60">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
            </motion.div>

            {/* Celebratory Landing / Docking Pulse Ring */}
            {hasDocked && (
              <motion.span
                initial={{ opacity: 0.9, scale: 0.7 }}
                animate={{ opacity: 0, scale: 1.7 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-orange-400 pointer-events-none"
              />
            )}
          </motion.div>
        </div>
      </div>
    </Link>
  );
}
