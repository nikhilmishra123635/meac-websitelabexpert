"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Dna, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ChevronDown, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  FileCheck2
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

// Carousel items for Our Male Infertility Tests
const maleInfertilityTests = [
  {
    title: "TEST-1 (SCSA Assay)",
    category: "Gold Standard DFI",
    image: "/molecular_tech.jpg",
    desc: "Sperm Chromatin Structure Assay assessing 5000+ sperm cells for DNA strand breaks.",
    href: "/dfi-test/test-1"
  },
  {
    title: "TEST-1 (AI Semen Analysis)",
    category: "CASA Technology",
    image: "/andrology_workstation.jpg",
    desc: "Automated computer-assisted sperm analysis for exact velocity, motility and morphology scoring.",
    href: "/other-tests/test-1"
  },
  {
    title: "TEST-2 (Hormones Profile)",
    category: "Endocrine Panel",
    image: "/quality_lab.jpg",
    desc: "Serum testing for FSH, LH, Serum Testosterone, and Prolactin hormonal balance.",
    href: "/other-tests/test-2"
  },
  {
    title: "TEST-3 (Serology Screen)",
    category: "Infectious Panel",
    image: "/ivd_hero.jpg",
    desc: "Comprehensive serological screening for viral and bacterial infectious markers.",
    href: "/other-tests/test-3"
  },
  {
    title: "TEST-4 (Karyotyping)",
    category: "Genetics Panel",
    image: "/mascot_andrology.jpg",
    desc: "Constitutional chromosomal analysis for structural and numerical anomalies.",
    href: "/other-tests/test-4"
  },
  {
    title: "TEST-5 (Y-Microdeletion)",
    category: "Molecular Genetics",
    image: "/mascot_doctor.jpg",
    desc: "Multiplex PCR assay for AZFa, AZFb, and AZFc microdeletion mapping.",
    href: "/other-tests/test-5"
  }
];

// FAQ items
const faqList = [
  {
    q: "What is a Sperm DNA Fragmentation Test (DFI)?",
    a: "A Sperm DNA Fragmentation Index (DFI) test measures the proportion of sperm cells containing broken or damaged DNA strands. Higher fragmentation correlates with reduced fertility, poor blastocyst development, and higher risk of early pregnancy loss."
  },
  {
    q: "What is considered a normal DFI score?",
    a: "DFI values under 15% indicate excellent fertility potential. 15% to 25% is good/acceptable fertility potential. 25% to 30% indicates fair to moderate fragmentation, while DFI >30% represents severe DNA fragmentation."
  },
  {
    q: "How does DFI differ from a standard semen analysis?",
    a: "Standard semen analysis evaluates microscopic parameters like sperm count, motility, and shape. DFI evaluates the hidden genetic integrity inside the sperm nucleus, which cannot be seen under an ordinary light microscope."
  },
  {
    q: "What abstinence period is required prior to testing?",
    a: "An abstinence period of 2 to 5 days is recommended for optimal DFI test accuracy. Longer or shorter abstinence periods can skew fragmentation percentages."
  },
  {
    q: "Can high sperm DNA fragmentation be treated or improved?",
    a: "Yes. High DFI can often be reduced through lifestyle modifications, antioxidant therapy, treating underlying varicoceles, clearing genital infections, and avoiding excessive heat or toxin exposure."
  },
  {
    q: "Who should get tested for Sperm DNA Fragmentation?",
    a: "Couples with unexplained infertility, recurrent miscarriages, failed IUI/IVF/ICSI cycles, advanced paternal age (>40 years), varicocele, or lifestyle risk factors (smoking, high heat, chemical exposure)."
  }
];

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? maleInfertilityTests.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev >= maleInfertilityTests.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#f58220] selection:text-white">
      <Navbar />

      {/* HERO CAROUSEL SECTION */}
      <HeroCarousel />

      {/* SECTION 1: ABOUT DFI TEST */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-[#353b9e] font-extrabold text-xs uppercase tracking-wider bg-[#f2f3ff] px-3.5 py-1 rounded-full">
                <Dna className="w-4 h-4 text-[#f58220]" /> Diagnostic Overview
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#353b9e] tracking-tight">
                About DFI Test
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                The Sperm DNA Fragmentation Index (DFI) test evaluates the genetic intactness of sperm cells. While a standard semen analysis measures count, motility, and morphology, it cannot identify DNA strand breaks packaged within the sperm head.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Damaged sperm DNA can impair fertilization, compromise blastocyst formation, and cause recurrent early pregnancy loss. Evaluating DFI provides clinicians with crucial insights for targeted treatment protocols.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[#f58220] shrink-0" />
                  <span className="text-sm font-bold text-slate-800">5,000+ Sperm Evaluated</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-[#f58220] shrink-0" />
                  <span className="text-sm font-bold text-slate-800">Gold Standard SCSA Assay</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-br from-indigo-100 to-orange-50 p-2">
                <img
                  src="/molecular_tech.jpg"
                  alt="DNA Fragmentation Test"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY DFI TEST? */}
      <section className="py-16 sm:py-24 bg-[#fff6ee]/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white p-2">
                <img
                  src="/andrology_workstation.jpg"
                  alt="Why DFI Test Laboratory"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 text-[#353b9e] font-extrabold text-xs uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-indigo-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#f58220]" /> Clinical Necessity
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#353b9e] tracking-tight">
                Why DFI Test?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Conventional semen analysis can miss hidden genetic damage in up to 15-20% of infertile men who have normal semen parameters. Sperm with damaged DNA can still fertilize an egg, but often fails to sustain a healthy pregnancy.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Performing a DFI test eliminates guesswork. It guides doctors whether to pursue natural conception, antioxidant therapy, IUI, or advanced IVF/ICSI with sperm selection techniques.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHO SHOULD HAVE A SPERM DNA FRAGMENTATION SCREENING? */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#353b9e] tracking-tight">
                Who Should Have a Sperm DNA Fragmentation Screening?
              </h2>
              <p className="text-slate-600 text-base">
                Clinical recommendations advise sperm DNA fragmentation screening for individuals and couples experiencing:
              </p>

              <div className="space-y-3">
                {[
                  "Unexplained infertility of more than 1 to 2 years duration",
                  "Recurrent early pregnancy loss or unexplained miscarriages",
                  "Multiple failed IUI, IVF, or ICSI treatment cycles",
                  "Poor embryo development or low blastocyst yield in IVF",
                  "Advanced paternal age (men over 40 years of age)",
                  "Presence of varicocele, genital infection, or chronic illness",
                  "Exposure to environmental toxins, radiation, or high heat",
                  "Unfavorable lifestyle habits (smoking, obesity, chronic stress)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#f2f3ff] border border-indigo-100">
                    <CheckCircle2 className="w-5 h-5 text-[#f58220] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 p-2">
                <img
                  src="/quality_lab.jpg"
                  alt="Sperm Fertilisation Screening"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: DETAILED KNOWLEDGE CARDS & NORMAL VALUES TABLE */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#353b9e] font-extrabold text-xs uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-indigo-200 shadow-sm">
              Clinical Guidelines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2468]">
              Understanding Sperm DFI Normal Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Reference ranges established by clinical chromatin structure assays (SCSA).
            </p>
          </div>

          {/* DFI Reference Values Table Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg max-w-4xl mx-auto overflow-hidden">
            <h3 className="text-xl font-bold text-[#353b9e] mb-4 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-[#f58220]" /> DFI Reference Thresholds
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f2f3ff] border-b border-indigo-200 text-xs font-extrabold text-[#1e2468] uppercase">
                    <th className="py-3.5 px-4">DFI Percentage</th>
                    <th className="py-3.5 px-4">Fertility Potential Category</th>
                    <th className="py-3.5 px-4">Clinical Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-emerald-700">&lt; 15% DFI</td>
                    <td className="py-3.5 px-4"><span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">Excellent</span></td>
                    <td className="py-3.5 px-4">High fertility potential; natural conception favorable.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-blue-700">15% – 25% DFI</td>
                    <td className="py-3.5 px-4"><span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full">Good / Fair</span></td>
                    <td className="py-3.5 px-4">Good fertility potential; minor lifestyle adjustments or oral antioxidants.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-amber-600">25% – 30% DFI</td>
                    <td className="py-3.5 px-4"><span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">Moderate</span></td>
                    <td className="py-3.5 px-4">Moderate fertility reduction; targeted therapy or IUI / IVF suggested.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-rose-600">&gt; 30% DFI</td>
                    <td className="py-3.5 px-4"><span className="bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-1 rounded-full">Severe</span></td>
                    <td className="py-3.5 px-4">High fragmentation; ICSI with specialized sperm selection recommended.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 hover:border-[#f58220] transition">
              <h4 className="font-extrabold text-base text-[#353b9e]">Difference: Semen Analysis vs DFI</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Semen analysis inspects sperm numbers and swimming speed. DFI inspects internal DNA strands inside the head nucleus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 hover:border-[#f58220] transition">
              <h4 className="font-extrabold text-base text-[#353b9e]">Causes of High DNA Fragmentation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Oxidative stress, varicocele, testicular heat exposure, high fever, smoking, air pollution, and genital infections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 hover:border-[#f58220] transition">
              <h4 className="font-extrabold text-base text-[#353b9e]">How to Improve Sperm DNA Quality</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dietary antioxidants (Vitamin C, E, CoQ10, Zinc), varicocele repair, lifestyle modifications, and short abstinence.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR MALE INFERTILITY TESTS CAROUSEL */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#353b9e] font-extrabold text-xs uppercase tracking-wider bg-[#f2f3ff] px-3.5 py-1 rounded-full">
                Diagnostic Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2468] mt-2">
                Our Male Infertility Tests
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#f58220] hover:text-white hover:border-[#f58220] transition"
                aria-label="Previous Test"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#f58220] hover:text-white hover:border-[#f58220] transition"
                aria-label="Next Test"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maleInfertilityTests.slice(carouselIndex, carouselIndex + 3).map((test, idx) => (
              <motion.div
                key={test.title + idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <img src={test.image} alt={test.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#f58220] text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                    {test.category}
                  </span>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-lg text-[#1e2468]">{test.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{test.desc}</p>
                  </div>
                  <Link
                    href={test.href}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#f58220] hover:text-[#dc7013] pt-2"
                  >
                    <span>View Test Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2468]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to common queries regarding male fertility diagnostics and sperm DNA testing.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 hover:text-[#f58220] transition gap-4"
                  >
                    <span className="text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f58220]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: HAVE A QUESTION? ASK US BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff6ee] rounded-3xl p-6 sm:p-8 border-2 border-orange-200/80 shadow-lg flex flex-col sm:flex-row items-center gap-6">
            
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#f58220] shrink-0 shadow-md">
              <img
                src="/mascot_doctor.jpg"
                alt="Dr. Tara Mahendran"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#353b9e]">
                Have a question? Ask us!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you have any questions regarding the tests we offer, specific abstinence regimes or any other services, please use this form to reach out. Our dedicated team of Scientists is here to provide you with accurate and helpful answers.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition"
                >
                  <span>Send Us Your Question</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: YOUR JOURNEY TO PARENTHOOD STARTS HERE */}
      <section className="py-16 bg-[#1e2468] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your Journey to Parenthood Starts Here
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
            Book an appointment with LabXpert today for precise male fertility diagnostic evaluations.
          </p>
          <div>
            <Link
              href="/contact#appointment-form"
              className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition duration-200"
            >
              <Calendar className="w-5 h-5" />
              <span>Book An Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
