"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const otherTestsList = [
  {
    id: "test-1",
    name: "TEST-1 (AI Semen Analysis)",
    category: "Motility & Morphometrics",
    desc: "Computer-assisted semen analysis providing objective automated measurement of sperm concentration, progressive motility, VCL, VSL, VAP velocity vectors, and Strict Kruger morphology.",
    href: "/other-tests/test-1"
  },
  {
    id: "test-2",
    name: "TEST-2 (Hormones Profile)",
    category: "Endocrine Evaluation",
    desc: "Comprehensive serum hormone immunoassay panel analyzing Follicle Stimulating Hormone (FSH), Luteinizing Hormone (LH), Total Testosterone, and Prolactin.",
    href: "/other-tests/test-2"
  },
  {
    id: "test-3",
    name: "TEST-3 (Serology Blood)",
    category: "Infectious Disease Screening",
    desc: "Diagnostic blood panel screening for infectious disease markers prior to assisted reproductive technology (ART) treatments and cryopreservation.",
    href: "/other-tests/test-3"
  },
  {
    id: "test-4",
    name: "TEST-4 (Karyotyping)",
    category: "Cytogenetics",
    desc: "Constitutional chromosomal analysis identifying numerical and structural chromosome aberrations (such as Klinefelter 47,XXY or balanced translocations).",
    href: "/other-tests/test-4"
  },
  {
    id: "test-5",
    name: "TEST-5 (Y-Microdeletion)",
    category: "Molecular Genetics (AZF)",
    desc: "Multiplex PCR molecular assay screening for microdeletions in the AZFa, AZFb, and AZFc regions of the Y chromosome.",
    href: "/other-tests/test-5"
  }
];

export default function OtherTestsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#1e2468] via-[#262b7e] to-[#353b9e] text-white py-20 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="bg-[#f58220] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
            Male Diagnostic Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Comprehensive Male Fertility Diagnostics
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our specialized diagnostic evaluations designed to pinpoint male factor infertility and guide clinical management.
          </p>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#353b9e]">
              Diagnostic Test Suite
            </h2>
            <p className="text-slate-600 text-sm">
              Select any test below to inspect clinical protocols, indications, and sample requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTestsList.map((test) => (
              <div
                key={test.id}
                className="bg-[#fff6ee]/50 p-8 rounded-3xl border border-orange-100 hover:border-[#f58220] hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-extrabold text-white bg-[#f58220] px-3 py-1 rounded-full inline-block">
                    {test.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#1e2468]">{test.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{test.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    href={test.href}
                    className="inline-flex items-center gap-1 text-sm font-extrabold text-[#f58220] hover:text-[#dc7013]"
                  >
                    <span>Inspect Test Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
