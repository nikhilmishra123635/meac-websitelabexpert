"use client";

import { motion } from "framer-motion";
import { Microscope, Award, CheckCircle, ShieldAlert, Sparkles, Building2 } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Partner Labs Powered",
    value: "550+",
    subtext: "Across Pathology & Andrology Centers",
    icon: Building2,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    label: "Diagnostic Precision",
    value: "99.94%",
    subtext: "ISO 13485 Verified Accuracy",
    icon: CheckCircle,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 3,
    label: "IVD Instruments & Assays",
    value: "65+",
    subtext: "Clinical Chemistry, PCR & Workstations",
    icon: Microscope,
    color: "from-indigo-600 to-[#2b358f]",
  },
  {
    id: 4,
    label: "Engineer Dispatch SLA",
    value: "< 4 Hrs",
    subtext: "24/7 Nationwide Field Support",
    icon: Award,
    color: "from-[#ef7d00] to-orange-600",
  },
];

export default function LiveStatsCounter() {
  return (
    <div className="w-full py-8 bg-gradient-to-r from-slate-50 via-indigo-50/50 to-orange-50/40 border-y border-slate-200/80 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-slate-200/70 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <Sparkles className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h4 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                  {stat.value}
                </h4>
                <p className="text-sm font-bold text-[#2b358f] mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {stat.subtext}
                </p>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-orange-500/5 rounded-full blur-xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
