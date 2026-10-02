"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, Microscope, Dna, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const mascots = [
  {
    id: "doctor",
    name: "Dr. Ben (Lead IVD Scientist)",
    role: "Clinical Chemistry & Reagent Specialist",
    image: "/mascot_doctor.jpg",
    speech: "Hello! Welcome to LabXpert! I help pathology labs achieve 99.94% assay repeatability with zero reagent carryover.",
    badge: "AI Assay Hero",
    perks: ["Zero Dead-Volume Waste", "30-Day Onboard Stability", "NIST Traceable Standards"]
  },
  {
    id: "andrology",
    name: "Dr. Sarah (Chief Embryologist)",
    role: "Andrology & CASA Motility Expert",
    image: "/mascot_andrology.jpg",
    speech: "Hi there! I specialize in sperm motility scoring and heated-stage micro-manipulation. Check out our SpermVision 9000 workstation!",
    badge: "Fertility Specialist",
    perks: ["37.0°C Stage Control", "AI CASA Motility Scoring", "DNA Fragmentation Assays"]
  },
  {
    id: "robot",
    name: "Meddy-7 (Lab Assistant Bot)",
    role: "LIS Telemetry & Maintenance Bot",
    image: "/mascot_robot.jpg",
    speech: "BEEP-BOOP! I monitor lab instrument telemetry 24/7 and guarantee 4-hour field engineer dispatch whenever you need help!",
    badge: "24/7 Field SLA",
    perks: ["Bi-directional HL7 LIS", "Real-Time Error Alerts", "<4 Hr Dispatch SLA"]
  }
];

export default function MascotInteractiveCard() {
  const [activeMascotId, setActiveMascotId] = useState("doctor");
  const activeMascot = mascots.find((m) => m.id === activeMascotId) || mascots[0];

  return (
    <div className="w-full py-16 bg-gradient-to-br from-indigo-50/70 via-white to-orange-50/50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[#ef7d00] text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow">
            <Sparkles className="w-3.5 h-3.5" /> Meet Your Lab Companions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Meet the <span className="gradient-text">LabXpert 3D Science Heroes</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Click on our lab cartoon mascots to learn how they optimize clinical chemistry, CASA motility, and LIS automation!
          </p>
        </div>

        {/* Mascot Selector Tabs */}
        <div className="flex justify-center items-center gap-3 mb-8 flex-wrap">
          {mascots.map((m) => {
            const isSelected = m.id === activeMascotId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMascotId(m.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#2b358f] to-[#ef7d00] text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" />
                <span>{m.name.split(" ")[0]} {m.name.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Mascot Interactive Showcase */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMascot.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Mascot 3D Image */}
              <div className="md:col-span-5 flex justify-center relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 group">
                  <img
                    src={activeMascot.image}
                    alt={activeMascot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#ef7d00] text-white text-xs font-black px-3 py-1 rounded-full shadow">
                    {activeMascot.badge}
                  </div>
                </div>
              </div>

              {/* Right Column: Cartoon Speech Bubble & Details */}
              <div className="md:col-span-7 space-y-5">
                
                {/* Comic Speech Bubble */}
                <div className="relative bg-gradient-to-r from-indigo-50 to-orange-50 border-2 border-indigo-200/80 p-5 sm:p-6 rounded-3xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#2b358f] uppercase">
                    <MessageCircle className="w-4 h-4 text-[#ef7d00]" /> {activeMascot.name} Says:
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-slate-800 italic leading-relaxed">
                    "{activeMascot.speech}"
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">{activeMascot.name}</h3>
                  <p className="text-xs font-bold text-[#2b358f] uppercase tracking-wider">{activeMascot.role}</p>
                </div>

                {/* Key Perks */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Mascot Verified Features:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeMascot.perks.map((perk, i) => (
                      <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2b358f] hover:bg-[#1e266d] text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    <span>Explore Associated Instruments</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
