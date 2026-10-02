"use client";

import Link from "next/link";
import { TestTube2, Calendar, CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OtherTest3Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-[#1e293b] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <Link href="/other-tests" className="inline-flex items-center gap-1.5 text-xs text-[#76b928] hover:underline font-bold mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Other Tests Overview
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Test-3: Serology Blood Test
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Infectious disease screening panel required prior to ART procedures, IUI/IVF cycles, and cryopreservation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#f8faf7] border border-emerald-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Assay Technology</span>
              <h4 className="text-base font-extrabold text-[#1e293b] mt-1">ECLIA & Rapid Serology</h4>
            </div>
            <div className="p-5 rounded-2xl bg-[#f8faf7] border border-emerald-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Sample Type</span>
              <h4 className="text-base font-extrabold text-[#1e293b] mt-1">Venous Blood Sample</h4>
            </div>
            <div className="p-5 rounded-2xl bg-[#f8faf7] border border-emerald-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Report Turnaround</span>
              <h4 className="text-base font-extrabold text-[#1e293b] mt-1">Same Day (4 Hours)</h4>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-extrabold text-[#68a623]">Clinical Overview of Test-3 (Serology Blood Panel)</h2>
            <p>
              Serological screening detects active or previous viral and bacterial infections. Safety compliance mandates serology screening before performing any assisted reproductive technology (ART) interventions or semen cryopreservation.
            </p>

            <h3 className="text-xl font-extrabold text-[#1e293b] pt-4">Screened Markers:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "HIV I & II Antibodies + p24 Antigen",
                "Hepatitis B Surface Antigen (HBsAg)",
                "Hepatitis C Virus Antibodies (Anti-HCV)",
                "VDRL / Syphilis Treponemal Serology"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f8faf7] border border-emerald-100 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#68a623] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 flex justify-center">
            <Link
              href="/contact#appointment-form"
              className="inline-flex items-center gap-2 bg-[#68a623] hover:bg-[#558c1b] text-white font-extrabold px-8 py-3.5 rounded-xl shadow transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Test-3 Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
