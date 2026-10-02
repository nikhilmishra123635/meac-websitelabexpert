"use client";

import Link from "next/link";
import { FileText, Calendar, ArrowRight, Dna, Microscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "Understanding Sperm DNA Fragmentation (DFI) in Unexplained Infertility",
    date: "September 24, 2026",
    category: "Diagnostic Research",
    desc: "How SCSA flow-cytometric evaluation pinpoints hidden genetic damage in men with normal semen analysis parameters.",
    image: "/molecular_tech.jpg"
  },
  {
    title: "AI-Powered Computer Assisted Semen Analysis (CASA) vs Manual Sperm Scoring",
    date: "September 15, 2026",
    category: "Andrology Innovation",
    desc: "Eliminating subjective inter-observer variation in sperm motility and strict Kruger morphology scoring.",
    image: "/andrology_workstation.jpg"
  },
  {
    title: "The Role of Oral Antioxidants in Reducing Sperm DNA Fragmentation Index",
    date: "August 28, 2026",
    category: "Therapeutic Insights",
    desc: "Clinical trials evaluating CoQ10, Vitamin C, Vitamin E, and Zinc supplementation on paternal oxidative stress.",
    image: "/quality_lab.jpg"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-[#1e293b] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="bg-[#68a623] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Scientific Publications
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            News & Articles
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Latest insights, research breakthroughs, and clinical guidelines in male reproductive diagnostics.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item) => (
              <div key={item.title} className="bg-[#f8faf7] rounded-3xl overflow-hidden border border-emerald-100 hover:shadow-xl transition flex flex-col justify-between">
                <div>
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#68a623] uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-lg font-extrabold text-[#1e293b]">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-200/60 mt-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#68a623]" /> {item.date}</span>
                  <Link href="/contact" className="text-[#68a623] font-bold hover:underline flex items-center gap-1">Read Article <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
