"use client";

import Link from "next/link";
import { Dna, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subTests = [
  {
    id: "test-1",
    name: "TEST-1 (SCSA Assay)",
    desc: "Flow-cytometric Sperm Chromatin Structure Assay evaluating thousands of cells for double and single stranded DNA breaks.",
    href: "/dfi-test/test-1"
  },
  {
    id: "test-2",
    name: "TEST-2 (HALO Assay)",
    desc: "Sperm Chromatin Dispersion (SCD) technique measuring nuclear halo size under brightfield microscopy.",
    href: "/dfi-test/test-2"
  },
  {
    id: "test-3",
    name: "TEST-3 (TUNEL Assay)",
    desc: "Direct fluorometric terminal deoxynucleotidyl transferase dUTP nick end labeling for precise DNA strand break counts.",
    href: "/dfi-test/test-3"
  },
  {
    id: "test-4",
    name: "TEST-4 (COMET Assay)",
    desc: "Single cell gel electrophoresis measuring DNA fragmentation density per individual sperm cell.",
    href: "/dfi-test/test-4"
  }
];

export default function DfiTestPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1e2468] via-[#262b7e] to-[#353b9e] text-white py-20 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="bg-[#f58220] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Comprehensive Diagnostic Suite
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Sperm DNA Fragmentation (DFI) Tests
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our specialized range of Sperm DNA Fragmentation assays engineered for fertility centers, IVF clinics, and diagnostic reference labs.
          </p>
        </div>
      </section>

      {/* Sub-tests Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#353b9e]">
              Available DFI Diagnostic Methods
            </h2>
            <p className="text-slate-600 text-sm">
              Select any test below to inspect clinical protocols, sample requirements, and reference ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subTests.map((test) => (
              <div
                key={test.id}
                className="bg-[#fff6ee]/60 p-8 rounded-3xl border border-orange-100 hover:border-[#f58220] hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f58220] text-white flex items-center justify-center font-bold shadow-md">
                    <Dna className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1e2468]">{test.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{test.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">2-5 Days Abstinence Required</span>
                  <Link
                    href={test.href}
                    className="inline-flex items-center gap-1 text-sm font-extrabold text-[#f58220] hover:text-[#dc7013]"
                  >
                    <span>View Protocol</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#1e2468] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold">Need Help Selecting a DFI Assay?</h2>
          <p className="text-slate-200 text-sm">Consult our scientific team for sample collection kits and clinical interpretation guidance.</p>
          <Link
            href="/contact#appointment-form"
            className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold px-6 py-3 rounded-xl transition"
          >
            <Calendar className="w-4 h-4" />
            Book DFI Test Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
