"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Truck, 
  GraduationCap, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  Award,
  Zap
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Annual Maintenance (AMC & CMC)",
    desc: "Comprehensive warranty packages covering preventive maintenance, spare parts replacement, and zero-cost emergency engineer calls.",
    icon: Wrench,
    badge: "24/7 Hotline",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Optical & Fluidic Calibration",
    desc: "NIST-traceable spectrophotometer calibration, optical filter alignment, and micropipette volumetric verifications.",
    icon: ShieldCheck,
    badge: "ISO 17025 Compliant",
    color: "from-[#ef7d00] to-orange-500"
  },
  {
    title: "Just-In-Time Reagent Supply",
    desc: "Temperature-controlled cold-chain logistics delivering fresh diagnostic reagent kits directly to your laboratory doorstep.",
    icon: Truck,
    badge: "Cold-Chain Fleet",
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "LabXpert Technician Academy",
    desc: "Certified hands-on training courses for lab technicians, pathologists, and embryologists on instrument operation & LIS sync.",
    icon: GraduationCap,
    badge: "Certified Program",
    color: "from-purple-600 to-indigo-600"
  }
];

export default function ServicePage() {
  const [region, setRegion] = useState("metro");
  const [severity, setSeverity] = useState("critical");

  const getSlaTime = () => {
    if (severity === "critical") {
      return region === "metro" ? "2 - 4 Hours Guaranteed Dispatch" : "4 - 8 Hours Guaranteed Dispatch";
    }
    return region === "metro" ? "Same Day Technician Visit" : "Within 24 Hours Guaranteed";
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      {/* HEADER HERO */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-indigo-50/80 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-[#2b358f] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" /> Field Technical Engineering & Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            LabXpert <span className="gradient-text">Laboratory Services</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Ensuring 100% uptime for your pathology analyzers and andrology workstations with nationwide 24/7 field engineering and cold-chain reagent logistics.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#ef7d00] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Complete Lifecycle Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              End-to-End <span className="gradient-text-orange">IVD Service Portfolio</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, i) => {
              const IconComponent = srv.icon;
              return (
                <div 
                  key={i}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300 space-y-4 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${srv.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="bg-white text-[#2b358f] border border-indigo-100 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      href="/get-in-touch"
                      className="text-xs font-bold text-[#2b358f] hover:text-[#ef7d00] transition flex items-center gap-1"
                    >
                      Book Service Request <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE MAINTENANCE SLA CALCULATOR */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-[#2b358f] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" /> Rapid Response SLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Check Guaranteed <span className="gradient-text">Technician Dispatch SLA</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Select your lab location and breakdown severity to check guaranteed on-site arrival time.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-xl bg-white space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Region Select */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                  1. Laboratory Location Zone:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setRegion("metro")}
                    className={`p-3.5 rounded-xl font-bold text-xs transition border-2 ${
                      region === "metro" ? "bg-[#2b358f] text-white border-transparent shadow" : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Metro / Capital Region
                  </button>
                  <button
                    onClick={() => setRegion("tier2")}
                    className={`p-3.5 rounded-xl font-bold text-xs transition border-2 ${
                      region === "tier2" ? "bg-[#2b358f] text-white border-transparent shadow" : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Tier-2 / Regional Hub
                  </button>
                </div>
              </div>

              {/* Severity Select */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                  2. Breakdown Urgency:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSeverity("critical")}
                    className={`p-3.5 rounded-xl font-bold text-xs transition border-2 ${
                      severity === "critical" ? "bg-[#ef7d00] text-white border-transparent shadow" : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Critical Analyzer Down
                  </button>
                  <button
                    onClick={() => setSeverity("routine")}
                    className={`p-3.5 rounded-xl font-bold text-xs transition border-2 ${
                      severity === "routine" ? "bg-[#ef7d00] text-white border-transparent shadow" : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    Routine Calibration / AMC
                  </button>
                </div>
              </div>

            </div>

            {/* SLA Output Box */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-orange-400 shrink-0" />
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Guaranteed Response SLA</span>
                  <h4 className="text-xl sm:text-2xl font-black text-white">{getSlaTime()}</h4>
                </div>
              </div>

              <Link
                href="/get-in-touch#hotline"
                className="px-6 py-3 bg-[#ef7d00] hover:bg-orange-600 text-white font-extrabold text-xs rounded-xl shadow transition whitespace-nowrap"
              >
                Call Emergency Field Desk
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* TRAINING ACADEMY BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2b358f] to-[#ef7d00] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-orange-200">
                <GraduationCap className="w-4 h-4" /> LabXpert Academy
              </span>
              <h3 className="text-3xl font-black">
                Upskill Your Lab Technicians & Embryologists
              </h3>
              <p className="text-slate-100 text-sm leading-relaxed">
                Join our certified hands-on training modules covering CASA sperm analysis software, biochemistry assay troubleshooting, and NABL audit documentation.
              </p>
            </div>

            <Link
              href="/get-in-touch"
              className="px-8 py-4 bg-white text-[#2b358f] font-black text-sm rounded-2xl shadow-lg hover:bg-orange-50 transition whitespace-nowrap"
            >
              Enroll Technicians Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
