"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingDown, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoiCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(1500);
  const [costPerTest, setCostPerTest] = useState(120);

  // LabXpert saves ~35% on reagent consumption + zero calibration waste
  const monthlyCurrentExpenditure = monthlyVolume * costPerTest;
  const monthlyLabXpertCost = monthlyCurrentExpenditure * 0.65;
  const monthlySavings = monthlyCurrentExpenditure - monthlyLabXpertCost;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="w-full py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-[#2b358f] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> Reagent Efficiency ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Calculate Your Lab's <span className="gradient-text-orange">Annual Reagent Savings</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            LabXpert micro-volume fluidic architecture reduces reagent consumption by up to 35% per diagnostic test panel.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-6">
            
            {/* Slider 1: Monthly Test Volume */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-800">
                  Monthly Diagnostic Test Workload:
                </label>
                <span className="text-lg font-black text-[#2b358f] bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100">
                  {monthlyVolume.toLocaleString()} Tests/Month
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={10000}
                step={100}
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2b358f]"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>300 Tests</span>
                <span>5,000 Tests</span>
                <span>10,000+ Tests</span>
              </div>
            </div>

            {/* Slider 2: Current Cost per Test */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-800">
                  Average Current Reagent Cost Per Test:
                </label>
                <span className="text-lg font-black text-[#ef7d00] bg-orange-50 px-3 py-1 rounded-lg border border-orange-100">
                  ₹{costPerTest} / Test
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={500}
                step={10}
                value={costPerTest}
                onChange={(e) => setCostPerTest(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ef7d00]"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>₹30</span>
                <span>₹250</span>
                <span>₹500</span>
              </div>
            </div>

            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero reagent dead-volume waste</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>30-day onboard reagent stability</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Automated multi-point calibration</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Included 2-year warranty & AMC</span>
              </div>
            </div>

          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5">
            <motion.div 
              key={`${monthlyVolume}-${costPerTest}`}
              initial={{ scale: 0.97, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-[#2b358f] via-[#3543b5] to-[#ef7d00] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-200 bg-white/10 px-3 py-1 rounded-full">
                  Estimated Savings Output
                </span>
                <TrendingDown className="w-6 h-6 text-emerald-300" />
              </div>

              <div>
                <span className="text-xs text-slate-200 uppercase font-semibold">
                  Estimated Annual Reagent Cost Savings
                </span>
                <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1">
                  ₹{Math.round(annualSavings).toLocaleString("en-IN")}
                </h3>
                <p className="text-xs text-orange-200 mt-1">
                  (Equivalent to saving ₹{Math.round(monthlySavings).toLocaleString("en-IN")} every month)
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 space-y-2 border border-white/10 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-200">Current Monthly Spend:</span>
                  <span className="font-bold">₹{Math.round(monthlyCurrentExpenditure).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200">LabXpert Monthly Spend:</span>
                  <span className="font-bold text-emerald-300">₹{Math.round(monthlyLabXpertCost).toLocaleString("en-IN")}</span>
                </div>
              </div>

              <Link
                href="/get-in-touch"
                className="w-full py-3.5 px-6 bg-white text-[#2b358f] hover:bg-orange-50 font-black text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 group"
              >
                <span>Request Custom Lab Quote</span>
                <ArrowRight className="w-4 h-4 text-[#ef7d00] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
