"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  Award,
  ExternalLink,
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
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open modal on page load after a pleasant brief delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
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
    // Trigger the vibrant indicator on the ribbon so user sees it "tucked into the ribbon"
    setJustClosedAnimation(true);
    setTimeout(() => {
      setJustClosedAnimation(false);
    }, 2500);
  };

  const handleOpenFromRibbon = () => {
    setIsOpen(true);
  };

  const product = newArrivalsList[currentSlide];

  return (
    <>
      {/* ============================================================ */}
      {/* 1. FLOATING RIBBON ON THE RIGHT TOP OF THE SCREEN */}
      {/* ============================================================ */}
      <aside 
        aria-label="New Arrivals Quick Access"
        className="fixed top-28 sm:top-32 right-0 z-[60] select-none group"
      >
        <button
          onClick={handleOpenFromRibbon}
          className={`
            relative flex items-center gap-2.5 
            py-2.5 px-4 sm:px-5 
            rounded-l-2xl 
            bg-gradient-to-r from-[#002eb4] via-[#1a3ecb] to-[#f77f00]
            text-white font-bold text-xs sm:text-sm tracking-wider uppercase
            shadow-[0_10px_25px_-5px_rgba(0,46,180,0.4),0_8px_10px_-6px_rgba(247,127,0,0.3)]
            border-l-2 border-t-2 border-b-2 border-white/40
            transition-all duration-300 transform 
            hover:-translate-x-2 hover:shadow-[0_15px_30px_-5px_rgba(247,127,0,0.5)]
            active:scale-95
            ${justClosedAnimation ? "ring-4 ring-orange-400 ring-offset-2 scale-110 animate-bounce" : ""}
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
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300" />
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10px] text-amber-200 font-extrabold tracking-widest flex items-center gap-1">
              {justClosedAnimation ? "SAVED HERE" : "JUST ARRIVED"}
            </span>
            <span className="font-black text-white text-xs sm:text-sm drop-shadow-sm flex items-center gap-1">
              New Arrivals
              <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">
                {newArrivalsList.length}
              </span>
            </span>
          </div>

          {/* Little arrow hint */}
          <ChevronLeft className="w-4 h-4 text-white/90 group-hover:-translate-x-0.5 transition-transform" />

          {/* Pulse Ripple when collapsed into ribbon */}
          {justClosedAnimation && (
            <span className="absolute inset-0 rounded-l-2xl border-2 border-amber-300 animate-ping pointer-events-none" />
          )}
        </button>
      </aside>

      {/* ============================================================ */}
      {/* 2. NEW ARRIVALS CAROUSEL MODAL (POPS UP ON LOAD & RIBBON CLICK) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            {/* Modal Card with spring animation folding to/from ribbon */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.15, 
                x: 320, 
                y: -220 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                y: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.15, 
                x: 340, 
                y: -220,
                transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] }
              }}
              transition={{ 
                type: "spring", 
                damping: 26, 
                stiffness: 280 
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-100 relative overflow-hidden my-auto max-h-[92vh] flex flex-col"
            >
              {/* Top Gradient Ribbon Accent */}
              <div className="h-2 w-full bg-gradient-to-r from-[#002eb4] via-[#f77f00] to-[#002eb4]" />

              {/* MODAL HEADER */}
              <div className="px-5 sm:px-7 pt-4 pb-3 flex items-center justify-between border-b border-slate-100 bg-slate-50/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-orange-100 text-[#f77f00] shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#002eb4] uppercase tracking-wider">
                        LabXpert Showcase
                      </span>
                      <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        New Arrivals
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                      Latest Laboratory & Andrology Diagnostic Systems
                    </h2>
                  </div>
                </div>

                {/* Right: Slide counter + Close Button */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-full hidden sm:inline-block">
                    {currentSlide + 1} of {newArrivalsList.length}
                  </span>

                  <button
                    onClick={handleClose}
                    className="group relative flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-full bg-slate-200/80 hover:bg-orange-500 text-slate-700 hover:text-white transition-all shadow-xs"
                    aria-label="Close to ribbon"
                    title="Close and tuck into top-right ribbon"
                  >
                    <span className="text-xs font-bold hidden sm:inline group-hover:text-white transition-colors">
                      Close to Ribbon
                    </span>
                    <X className="w-4 h-4 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* MODAL BODY: INTERACTIVE CAROUSEL CONTENT */}
              <div className="p-5 sm:p-7 overflow-y-auto flex-1">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                    >
                      {/* PRODUCT IMAGE & BADGES (5 cols) */}
                      <div className="md:col-span-5 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group aspect-[4/3] sm:aspect-square md:aspect-[4/3] max-h-72">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Top Left Ribbon Tag on Image */}
                          <div className="absolute top-3 left-3 bg-[#f77f00] text-white text-xs font-black px-3 py-1 rounded-lg shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                            <Flame className="w-3.5 h-3.5 fill-white text-white" />
                            {product.badge}
                          </div>

                          {/* Bottom Stats Overlay */}
                          <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-medium">Throughput:</span>
                            <span className="font-extrabold text-[#002eb4]">{product.throughput}</span>
                          </div>
                        </div>

                        {/* Secondary verification chip */}
                        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 px-1">
                          <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> ISO 13485 & CE Ready
                          </span>
                          <span className="text-slate-400 font-medium">Lab-Grade Precision</span>
                        </div>
                      </div>

                      {/* PRODUCT DETAILS (7 cols) */}
                      <div className="md:col-span-7 space-y-4">
                        {/* Category & Status */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-[#002eb4] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>
                          <span className="bg-orange-50 text-[#f77f00] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-orange-200 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-[#f77f00]" /> Just Added to Fleet
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-xs font-bold text-[#002eb4] mt-1">
                            {product.tagline}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Technical Specifications Matrix */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1">
                            <Microscope className="w-3.5 h-3.5 text-[#f77f00]" /> Technical Specifications
                          </span>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {product.specs.map((s, idx) => (
                              <div 
                                key={idx} 
                                className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/70 flex flex-col"
                              >
                                <span className="text-[10px] text-slate-400 font-medium">{s.label}</span>
                                <span className="font-bold text-slate-800 text-[11px] truncate">{s.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {product.features.map((feat, idx) => (
                            <span 
                              key={idx} 
                              className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {feat}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                          <Link
                            href="/get-in-touch"
                            onClick={handleClose}
                            className="flex-1 min-w-[170px] py-2.5 px-4 bg-gradient-to-r from-[#002eb4] to-[#f77f00] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition text-center flex items-center justify-center gap-2 group"
                          >
                            <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Request Official Quotation
                          </Link>

                          <Link
                            href={product.link}
                            onClick={handleClose}
                            className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-1.5"
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

              {/* MODAL FOOTER: CAROUSEL CONTROLS & THUMBNAIL SELECTOR */}
              <div className="p-4 sm:px-7 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Previous / Next Arrows */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-orange-50 hover:border-orange-300 text-slate-700 hover:text-[#f77f00] shadow-xs transition active:scale-95"
                      aria-label="Previous product"
                      title="Previous Product"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-orange-50 hover:border-orange-300 text-slate-700 hover:text-[#f77f00] shadow-xs transition active:scale-95"
                      aria-label="Next product"
                      title="Next Product"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <span className="text-xs text-slate-500 font-medium ml-1">
                      {currentSlide + 1} / {newArrivalsList.length}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 italic sm:hidden">
                    Swipe or tap thumbnail
                  </span>
                </div>

                {/* Mini Thumbnails / Dots strip */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
                  {newArrivalsList.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setDirection(idx > currentSlide ? 1 : -1);
                        setCurrentSlide(idx);
                      }}
                      className={`
                        relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all
                        ${currentSlide === idx 
                          ? "bg-[#002eb4] text-white shadow-sm ring-2 ring-orange-400" 
                          : "bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200"
                        }
                      `}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === idx ? "bg-orange-400 animate-pulse" : "bg-slate-400"}`} />
                      <span className="truncate max-w-[80px] sm:max-w-[100px] text-[11px]">
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
