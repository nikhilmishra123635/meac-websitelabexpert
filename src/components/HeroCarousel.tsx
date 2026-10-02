"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Dna, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/andrology_workstation.jpg",
  "/molecular_tech.jpg",
  "/quality_lab.jpg",
  "/ivd_hero.jpg"
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt="LabXpert Facility"
              fill
              priority={currentIndex === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Beautiful Gradient Overlays for readability and aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] via-[#0b1238aa] to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1238] via-transparent to-transparent z-10" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-left w-full">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#f58220]"
          >
            <Dna className="w-4 h-4 animate-pulse text-[#f58220]" />
            <span>Advanced Andrology & Pathology Reference Lab</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg"
          >
            Advanced Andrology <br className="hidden sm:block" />
            <span className="text-[#f58220]">& Pathology Lab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed drop-shadow-md max-w-2xl"
          >
            Our certified reference lab delivers clinical accuracy for guided healthcare and advanced pathology diagnostics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact#appointment-form"
              className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(245,130,32,0.4)] hover:shadow-[0_0_30px_rgba(245,130,32,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-4 sm:left-8 flex gap-3 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-10 bg-[#f58220]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
