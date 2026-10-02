"use client";

import Link from "next/link";
import { Calendar, CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DfiTest1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-[#1e2468] via-[#262b7e] to-[#353b9e] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <Link href="/dfi-test" className="inline-flex items-center gap-1.5 text-xs text-[#f58220] hover:underline font-bold mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to DFI Test Overview
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            TEST-1 (SCSA Assay)
          </h1>
          <p className="text-slate-200 text-sm sm:text-base">
            Sperm Chromatin Structure Assay evaluating 5,000+ individual cells via acridine orange flow cytometry.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#fff6ee] border border-orange-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Assay Technology</span>
              <h4 className="text-base font-extrabold text-[#1e2468] mt-1">Flow Cytometry (SCSA)</h4>
            </div>
            <div className="p-5 rounded-2xl bg-[#fff6ee] border border-orange-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Recommended Abstinence</span>
              <h4 className="text-base font-extrabold text-[#1e2468] mt-1">2 to 5 Days</h4>
            </div>
            <div className="p-5 rounded-2xl bg-[#fff6ee] border border-orange-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Report Turnaround</span>
              <h4 className="text-base font-extrabold text-[#1e2468] mt-1">24 to 48 Hours</h4>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-extrabold text-[#353b9e]">Clinical Overview of TEST-1 (SCSA)</h2>
            <p>
              The Sperm Chromatin Structure Assay (SCSA) is the gold-standard diagnostic method for quantifying sperm DNA denaturation in response to mild acid treatment. Utilizing acridine orange fluorochrome dye, damaged single-stranded DNA emits red fluorescence, while intact double-stranded DNA emits green fluorescence.
            </p>

            <h3 className="text-xl font-extrabold text-[#1e2468] pt-4">Key Diagnostic Indications:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Unexplained infertility despite normal semen parameters",
                "History of recurrent early pregnancy loss or miscarriage",
                "Multiple failed IVF or ICSI cycles",
                "Assessing effectiveness of oral antioxidant therapies"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f2f3ff] border border-indigo-100 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#f58220] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 flex justify-center">
            <Link
              href="/contact#appointment-form"
              className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold px-8 py-3.5 rounded-xl shadow transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Book TEST-1 Appointment</span>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
