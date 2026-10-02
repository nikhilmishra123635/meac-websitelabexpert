"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Microscope, 
  Dna, 
  FlaskConical, 
  TestTube, 
  CheckCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

interface Recommendation {
  title: string;
  category: string;
  throughput: string;
  description: string;
  image: string;
  features: string[];
}

const recommendationsMap: Record<string, Recommendation> = {
  andrology: {
    title: "LabXpert SpermVision 9000 Andrology Workstation",
    category: "Advanced Andrology & Embryology",
    throughput: "Up to 120 samples/hour with automated CASA AI motility analysis",
    description: "Integrated anti-vibration heating table with high-resolution digital optics and real-time DNA fragmentation assessment.",
    image: "/andrology_workstation.jpg",
    features: ["CASA AI Sperm Analysis", "Heated Stage 37°C Precision", "Anti-Vibration Table Included"]
  },
  chemistry: {
    title: "LabXpert ChemAnalyze 9000 Auto-Analyzer",
    category: "Clinical Chemistry & Immunodiagnostics",
    throughput: "800 Tests/Hour (Continuous Loading)",
    description: "Fully automated benchtop clinical chemistry analyzer with zero reagent carryover and micro-volume fluidics.",
    image: "/ivd_hero.jpg",
    features: ["800 Tests/Hour Throughput", "Zero Carryover Fluidic Probes", "24/7 Refrigerated Reagent Tray"]
  },
  molecular: {
    title: "PathoLyte 8000 Real-Time PCR Analyzer",
    category: "Molecular Pathology & Genetics",
    throughput: "32 Sample Multiplex Extraction & Amplification",
    description: "Rapid molecular diagnostic unit providing sample-to-result pathology detection in under 45 minutes.",
    image: "/molecular_tech.jpg",
    features: ["Sample-to-Result in 45 Mins", "Multiplex 6-Channel Optics", "Pre-loaded Reagent Cartridges"]
  },
  multispecialty: {
    title: "LabXpert Total Laboratory Suite (Combo)",
    category: "Full Pathology & Andrology Package",
    throughput: "1500+ Tests/Day Integrated Operations",
    description: "Complete turnkey IVD lab setup combining ChemAnalyze 9000, SpermVision 9000, and automated hematology counter.",
    image: "/quality_lab.jpg",
    features: ["Turnkey LIS Integration", "Full Installation & Calibration", "Dedicated On-site Field Technician"]
  }
};

export default function EquipmentSelectorWizard() {
  const [step, setStep] = useState(1);
  const [specialty, setSpecialty] = useState("");
  const [throughput, setThroughput] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState<Recommendation | null>(null);

  const handleSelectSpecialty = (val: string) => {
    setSpecialty(val);
    setStep(2);
  };

  const handleSelectThroughput = (val: string) => {
    setThroughput(val);
    setStep(3);
  };

  const handleSelectBudget = (val: string) => {
    setBudget(val);
    // Generate recommendation
    const recKey = specialty || "chemistry";
    setResult(recommendationsMap[recKey] || recommendationsMap.chemistry);
    setStep(4);
  };

  const resetWizard = () => {
    setStep(1);
    setSpecialty("");
    setThroughput("");
    setBudget("");
    setResult(null);
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#ef7d00] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Finder
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Find the Perfect <span className="gradient-text">LabXpert IVD Analyzer</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Answer 3 quick questions about your laboratory's daily test volume and specialty to get tailored instrument & reagent recommendations.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 relative overflow-hidden">
          
          {/* Progress Indicator Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200/80">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center gap-2">
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step === num 
                      ? "bg-gradient-to-r from-[#2b358f] to-[#ef7d00] text-white shadow-md scale-110" 
                      : step > num 
                      ? "bg-emerald-500 text-white" 
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > num ? <CheckCircle className="w-5 h-5" /> : num}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-slate-600">
                  {num === 1 ? "Specialty" : num === 2 ? "Volume" : num === 3 ? "Goal" : "Recommendation"}
                </span>
                {num < 4 && <div className="w-8 sm:w-12 h-0.5 bg-slate-200 hidden sm:block" />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Select Specialty */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  1. What is your primary laboratory specialty?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "andrology", title: "Andrology & Semen Analysis", icon: Microscope, desc: "Sperm motility, concentration & morphology diagnostics" },
                    { id: "chemistry", title: "Clinical Chemistry", icon: TestTube, desc: "Serum biochemistry, liver & renal panel assays" },
                    { id: "molecular", title: "Molecular Pathology (PCR)", icon: Dna, desc: "Infectious disease DNA/RNA pathogen testing" },
                    { id: "multispecialty", title: "Multispecialty Pathology", icon: FlaskConical, desc: "Comprehensive high-throughput laboratory operations" },
                  ].map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectSpecialty(item.id)}
                        className="p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#ef7d00] hover:shadow-lg transition-all text-left group flex items-start gap-4"
                      >
                        <div className="p-3 rounded-xl bg-indigo-50 text-[#2b358f] group-hover:bg-[#ef7d00] group-hover:text-white transition">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-[#2b358f]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Throughput */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  2. What is your estimated daily sample workload?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "low", label: "< 50 Samples / Day", badge: "Small / Specialized Clinic" },
                    { id: "medium", label: "50 - 300 Samples / Day", badge: "Mid-sized Diagnostic Lab" },
                    { id: "high", label: "300 - 1000+ Samples / Day", badge: "High-Volume Referral Lab" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectThroughput(item.id)}
                      className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#2b358f] hover:shadow-lg transition-all text-center group"
                    >
                      <Zap className="w-8 h-8 text-[#ef7d00] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="block font-extrabold text-slate-900 text-lg">
                        {item.label}
                      </span>
                      <span className="inline-block mt-2 text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  3. What is your primary objective for this upgrade?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "speed", label: "Maximize Speed & Throughput", desc: "Reduce turnaround time for patients" },
                    { id: "cost", label: "Reduce Reagent & Test Costs", desc: "Lower cost per test with open/closed reagents" },
                    { id: "precision", label: "ISO Accreditation & Accuracy", desc: "Ensure 99.9% repeatability and zero downtime" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectBudget(item.id)}
                      className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#ef7d00] hover:shadow-lg transition-all text-center group"
                    >
                      <ShieldCheck className="w-8 h-8 text-[#2b358f] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="block font-bold text-slate-900 text-base">
                        {item.label}
                      </span>
                      <span className="block text-xs text-slate-500 mt-2">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Recommendation Result */}
            {step === 4 && result && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center gap-3 text-emerald-800 text-sm font-semibold">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  Optimal LabXpert Instrument Match Found Based on Your Requirements!
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={result.image} 
                      alt={result.title}
                      className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#2b358f] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {result.category}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-slate-900">
                      {result.title}
                    </h4>
                    <p className="text-sm font-semibold text-[#ef7d00]">
                      ⚡ Workload Capability: {result.throughput}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {result.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Key Highlights:</p>
                      {result.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <Link
                        href="/product"
                        className="px-5 py-2.5 bg-[#2b358f] hover:bg-[#1e266d] text-white font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2"
                      >
                        View Full Specs & Models <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={resetWizard}
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-4 h-4" /> Restart Wizard
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
