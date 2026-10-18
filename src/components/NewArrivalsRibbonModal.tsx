"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Microscope, 
  Flame, 
  PhoneCall
} from "lucide-react";
import Link from "next/link";

export interface NewArrivalProduct {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
  throughput: string;
  accuracy: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  link: string;
}

const newArrivalsList: NewArrivalProduct[] = [
  {
    id: "andrology-9000",
    name: "SpermVision 9000 CASA Andrology Workstation",
    category: "Advanced CASA Andrology",
    badge: "🌟 2026 Flagship AI CASA",
    image: "/andrology_workstation.jpg",
    throughput: "120 Samples / Hour",
    accuracy: "99.9% Motility & Count Precision",
    tagline: "Automated Sperm Motility, Kinematics & Morphological Analysis",
    description: "State-of-the-art male fertility workstation featuring anti-vibration heated microscope stage (37°C PID), automated CASA AI motility scoring, and comprehensive morphology analytics.",
    specs: [
      { label: "Stage Heating", value: "37.0°C ± 0.1°C PID" },
      { label: "Optics Module", value: "Digital Inverted High-Res 60fps" },
      { label: "AI Kinematics", value: "VCL, VSL, VAP & Morphology" },
      { label: "Compliance", value: "WHO 6th Edition Guideline" }
    ],
    features: ["CASA AI Algorithm", "Anti-Vibration Heated Stage", "DNA Fragmentation Ready"],
    link: "/product"
  },
  {
    id: "patholyte-8000",
    name: "PathoLyte 8000 Real-Time PCR Analyzer",
    category: "Molecular Diagnostics",
    badge: "⚡ Ultra-Fast 45-Min PCR",
    image: "/molecular_tech.jpg",
    throughput: "32 Samples in 45 Mins",
    accuracy: "Single-Copy Pathogen Sensitivity",
    tagline: "Multiplex Quantitative Real-Time PCR with Microfluidic Cartridges",
    description: "Compact molecular pathology diagnostic instrument utilizing disposable microfluidic cartridges for rapid infectious panel and genetic microdeletion profiling.",
    specs: [
      { label: "Throughput", value: "32 Samples / Run" },
      { label: "Fluorescence", value: "6 High-Sensitivity Channels" },
      { label: "Thermal Ramp", value: "8.0°C / Sec Cycling" },
      { label: "Cartridge System", value: "Pre-Loaded Disposable" }
    ],
    features: ["45-Min Result Speed", "6 Optical Channels", "Zero Carryover Fluidics"],
    link: "/product"
  },
  {
    id: "chem-9000",
    name: "ChemAnalyze 9000 Biochemistry Auto-Analyzer",
    category: "Clinical Chemistry",
    badge: "🔥 High Throughput 1200 T/H",
    image: "/ivd_hero.jpg",
    throughput: "800 - 1200 Tests / Hour",
    accuracy: "0.0001 ABS Photometric Sensitivity",
    tagline: "High-Volume Clinical Chemistry with 24/7 Refrigerated Positions",
    description: "Floor-standing high-capacity chemistry workstation with 100 refrigerated reagent positions, liquid-level clot sensing, and 8-step warm probe cleaning.",
    specs: [
      { label: "Test Speed", value: "1200 T/H (with ISE)" },
      { label: "Reagent Slots", value: "100 Refrigerated (2-8°C)" },
      { label: "Wash System", value: "8-Step Auto Warm Wash" },
      { label: "LIS Protocol", value: "HL7 & ASTM Bi-directional" }
    ],
    features: ["Continuous Loading", "Clot & Level Detection", "Zero-Carryover Probe"],
    link: "/product"
  },
  {
    id: "hemato-500",
    name: "HemaXpert 5-Part Differential Hematology Counter",
    category: "Automated Hematology",
    badge: "🧬 Semiconductor Laser Cytometry",
    image: "/quality_lab.jpg",
    throughput: "60 Samples / Hour",
    accuracy: "Laser Scatter Flow Cytometry",
    tagline: "29-Parameter Complete Blood Count with Abnormal Flagging",
    description: "Precision 5-part differential blood cell counter utilizing semiconductor laser scatter and chemical dye technology with micro-volume aspiration.",
    specs: [
      { label: "Parameters", value: "29 Reportable + 4 Histograms" },
      { label: "Sample Aspiration", value: "20 µL Whole Blood" },
      { label: "Abnormal Flag", value: "Immature Granulocyte Alert" },
      { label: "Display Screen", value: "10.4 Inch HD Touchscreen" }
    ],
    features: ["29 Parameters 5-Part", "Micro-Aspiration 20µL", "Pediatric Sample Ready"],
    link: "/product"
  },
  {
    id: "scsa-rig",
    name: "LabXpert SCSA Sperm DNA Fragmentation Rig",
    category: "Specialized Andrology",
    badge: "🏆 Gold Standard SCSA Assay",
    image: "/mascot_andrology.jpg",
    throughput: "5000+ Sperm Analyzed / Run",
    accuracy: "Acridine Orange Flow Fluorometry",
    tagline: "Single-Cell DNA Fragmentation & Chromatin Integrity Profiling",
    description: "Clinical reference standard for evaluating sperm chromatin structural integrity, delivering objective prognostic guidance for IVF and ICSI outcomes.",
    specs: [
      { label: "Methodology", value: "Acridine Orange Fluorometry" },
      { label: "Evaluated Cells", value: ">5,000 Sperm per Assay" },
      { label: "Reported Metrics", value: "%DFI & High Stainability HDS" },
      { label: "Certification", value: "ISO 13485 & CE-IVD" }
    ],
    features: ["Single-Cell Precision", "Automated DFI Histogram", "Reproductive Prognosis"],
    link: "/dfi-test/test-1"
  }
];

export default function NewArrivalsRibbonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [justClosedAnimation, setJustClosedAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Touch gesture state for mobile swiping
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Screen size detection
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto-open modal on page load after a pleasant brief delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  // Autoplay carousel slides when modal is open and not hovered
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % newArrivalsList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % newArrivalsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + newArrivalsList.length) % newArrivalsList.length);
  };

  const handleClose = () => {
    setIsOpen(false);
    setJustClosedAnimation(true);
    setTimeout(() => {
      setJustClosedAnimation(false);
    }, 2500);
  };

  const handleOpenFromRibbon = () => {
    setIsOpen(true);
  };

  // Touch handlers for fluid swipe on mobile (like Instagram / TikTok / Native App)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (!touchStartRef.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    // Dominant horizontal swipe with min 40px threshold
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const product = newArrivalsList[currentSlide];

  return (
    <>
      {/* ============================================================ */}
      {/* 1. FLOATING RIBBON ON THE RIGHT TOP OF THE SCREEN */}
      {/* ============================================================ */}
      <aside 
        aria-label="New Arrivals Quick Access"
        className="fixed top-24 sm:top-28 lg:top-32 right-0 z-[60] select-none group"
      >
        <button
          onClick={handleOpenFromRibbon}
          className={`
            relative flex items-center gap-1.5 sm:gap-2.5 
            py-2 sm:py-2.5 px-3 sm:px-5 
            rounded-l-2xl 
            bg-gradient-to-r from-[#002eb4] via-[#1a3ecb] to-[#f77f00]
            text-white font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase
            shadow-[0_10px_25px_-5px_rgba(0,46,180,0.4),0_8px_10px_-6px_rgba(247,127,0,0.3)]
            border-l-2 border-t-2 border-b-2 border-white/40
            transition-all duration-300 transform 
            hover:-translate-x-1.5 sm:hover:-translate-x-2 
            hover:shadow-[0_15px_30px_-5px_rgba(247,127,0,0.5)]
            active:scale-95
            ${justClosedAnimation ? "ring-4 ring-orange-400 ring-offset-2 scale-105 sm:scale-110 animate-bounce" : ""}
          `}
          style={{
            boxShadow: justClosedAnimation 
              ? "0 0 35px rgba(247, 127, 0, 0.9), 0 0 15px rgba(0, 46, 180, 0.8)" 
              : undefined
          }}
          title="Click to view New Arrivals Carousel"
        >
          {/* Shimmer sweep animation across the ribbon */}
          <div className="absolute inset-0 rounded-l-2xl overflow-hidden pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          {/* Ribbon Fold triangle for authentic 3D hanging ribbon look */}
          <div className="absolute -bottom-2 right-0 w-2 h-2 bg-[#001b6b] [clip-path:polygon(0_0,100%_0,100%_100%)] pointer-events-none" />

          {/* Glowing dot & Sparkle Icon */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-300" />
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] sm:text-[10px] text-amber-200 font-extrabold tracking-widest flex items-center gap-1">
              {justClosedAnimation ? "SAVED HERE" : "NEW"}
            </span>
            <span className="font-black text-white text-[11px] sm:text-xs md:text-sm drop-shadow-sm flex items-center gap-1 whitespace-nowrap">
              Arrivals
              <span className="bg-white/25 text-white text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-black">
                {newArrivalsList.length}
              </span>
            </span>
          </div>

          {/* Arrow hint */}
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover:-translate-x-0.5 transition-transform shrink-0" />

          {/* Pulse Ripple when collapsed into ribbon */}
          {justClosedAnimation && (
            <span className="absolute inset-0 rounded-l-2xl border-2 border-amber-300 animate-ping pointer-events-none" />
          )}
        </button>
      </aside>

      {/* ============================================================ */}
      {/* 2. NEW ARRIVALS CAROUSEL MODAL (NATIVE APP BOTTOM SHEET ON MOBILE) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-hidden sm:overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            {/* Modal Card: Native App Bottom Sheet on Mobile, Centered Modal on Tablet/Desktop */}
            <motion.div
              initial={
                isMobile
                  ? { y: "100%", opacity: 0 }
                  : { opacity: 0, scale: 0.15, x: 320, y: -220 }
              }
              animate={
                isMobile
                  ? { y: 0, opacity: 1 }
                  : { opacity: 1, scale: 1, x: 0, y: 0 }
              }
              exit={
                isMobile
                  ? { y: "100%", opacity: 0, transition: { duration: 0.28, ease: "easeIn" } }
                  : { opacity: 0, scale: 0.15, x: 340, y: -220, transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] } }
              }
              transition={{ 
                type: "spring", 
                damping: isMobile ? 28 : 26, 
                stiffness: isMobile ? 260 : 280 
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-white rounded-t-[2.25rem] sm:rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] my-0 sm:my-auto"
            >
              {/* Mobile Drag Handle Bar (Native Mobile App Style) */}
              <div 
                onClick={handleClose}
                className="w-full pt-2.5 pb-1 flex justify-center sm:hidden cursor-pointer"
                title="Tap or drag to close"
              >
                <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
              </div>

              {/* Top Gradient Ribbon Accent */}
              <div className="h-1.5 sm:h-2 w-full bg-gradient-to-r from-[#002eb4] via-[#f77f00] to-[#002eb4]" />

              {/* MODAL HEADER */}
              <div className="px-4 sm:px-7 pt-3 pb-2.5 sm:py-3.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/90 shrink-0">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-orange-100 text-[#f77f00] shadow-sm shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-black text-[#002eb4] uppercase tracking-wider truncate">
                        LabXpert Showcase
                      </span>
                      <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs shrink-0">
                        New Arrivals
                      </span>
                    </div>
                    <h2 className="text-sm sm:text-lg font-black text-slate-900 leading-snug truncate">
                      Latest Laboratory Innovations
                    </h2>
                  </div>
                </div>

                {/* Right: Slide counter + Close Button */}
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-600 bg-slate-200/80 px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap">
                    {currentSlide + 1} / {newArrivalsList.length}
                  </span>

                  <button
                    onClick={handleClose}
                    className="flex items-center gap-1 p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-slate-200/80 hover:bg-orange-500 text-slate-700 hover:text-white transition-all shadow-xs active:scale-90"
                    aria-label="Close"
                    title="Close"
                  >
                    <span className="text-xs font-bold hidden md:inline transition-colors">
                      Close
                    </span>
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* MODAL BODY: TOUCH-ENABLED INTERACTIVE CAROUSEL CONTENT */}
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="p-4 sm:p-6 md:p-7 overflow-y-auto overscroll-contain flex-1"
              >
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center"
                    >
                      {/* PRODUCT IMAGE & BADGES (5 cols) */}
                      <div className="md:col-span-5 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group h-44 sm:h-56 md:h-64 w-full">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Top Left Ribbon Tag on Image */}
                          <div className="absolute top-2.5 left-2.5 bg-[#f77f00] text-white text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 uppercase tracking-wide">
                            <Flame className="w-3 h-3 fill-white text-white" />
                            {product.badge}
                          </div>

                          {/* Mobile Swipe Hint Pill */}
                          <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full sm:hidden flex items-center gap-1">
                            Swipe ⇄
                          </div>

                          {/* Bottom Stats Overlay */}
                          <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between text-[11px] sm:text-xs">
                            <span className="text-slate-500 font-medium">Throughput:</span>
                            <span className="font-extrabold text-[#002eb4]">{product.throughput}</span>
                          </div>
                        </div>

                        {/* Secondary verification chip */}
                        <div className="mt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 px-1">
                          <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" /> ISO 13485 Verified
                          </span>
                          <span className="text-slate-400 font-medium">{product.accuracy}</span>
                        </div>
                      </div>

                      {/* PRODUCT DETAILS (7 cols) */}
                      <div className="md:col-span-7 space-y-3 sm:space-y-4">
                        {/* Category & Status */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="bg-[#002eb4] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>
                          <span className="bg-orange-50 text-[#f77f00] text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border border-orange-200 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-[#f77f00]" /> Just Added
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs font-bold text-[#002eb4] mt-0.5">
                            {product.tagline}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {product.description}
                        </p>

                        {/* Technical Specifications Matrix (2x2 Grid) */}
                        <div className="space-y-1 pt-0.5">
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1">
                            <Microscope className="w-3 h-3 text-[#f77f00]" /> Specifications
                          </span>
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                            {product.specs.map((s, idx) => (
                              <div 
                                key={idx} 
                                className="bg-slate-50 px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200/70 flex flex-col"
                              >
                                <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">{s.label}</span>
                                <span className="font-bold text-slate-800 text-[10px] sm:text-[11px] truncate">{s.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                          {product.features.map((feat, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 sm:py-1 rounded-lg font-semibold flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" /> {feat}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons (Thumb Friendly) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                          <Link
                            href="/get-in-touch"
                            onClick={handleClose}
                            className="py-3 px-4 bg-gradient-to-r from-[#002eb4] to-[#f77f00] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition text-center flex items-center justify-center gap-2 group active:scale-95"
                          >
                            <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Request Official Quote
                          </Link>

                          <Link
                            href={product.link}
                            onClick={handleClose}
                            className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5 active:scale-95 text-center"
                          >
                            <span>Explore Catalog</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* MODAL FOOTER: APP-STYLE CONTROLS & THUMBNAILS */}
              <div className="p-3 sm:px-7 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 shrink-0">
                {/* Previous / Next Arrows */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-orange-50 hover:border-orange-300 text-slate-700 hover:text-[#f77f00] shadow-xs transition active:scale-90"
                      aria-label="Previous product"
                      title="Previous Product"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-orange-50 hover:border-orange-300 text-slate-700 hover:text-[#f77f00] shadow-xs transition active:scale-90"
                      aria-label="Next product"
                      title="Next Product"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium ml-1">
                      {currentSlide + 1} / {newArrivalsList.length}
                    </span>
                  </div>

                  {/* Mobile swipe helper text */}
                  <span className="text-[10px] text-slate-400 font-medium sm:hidden">
                    👈 Swipe cards 👉
                  </span>
                </div>

                {/* Horizontal Scrollable Thumbnails / Dots strip */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-0.5 sm:pb-0 w-full sm:w-auto justify-start sm:justify-end">
                  {newArrivalsList.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setDirection(idx > currentSlide ? 1 : -1);
                        setCurrentSlide(idx);
                      }}
                      className={`
                        relative flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95
                        ${currentSlide === idx 
                          ? "bg-[#002eb4] text-white shadow-sm ring-2 ring-orange-400" 
                          : "bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200"
                        }
                      `}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${currentSlide === idx ? "bg-orange-400 animate-pulse" : "bg-slate-400"}`} />
                      <span className="truncate max-w-[70px] sm:max-w-[90px] text-[10px] sm:text-[11px]">
                        {item.name.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
