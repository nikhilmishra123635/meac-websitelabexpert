"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, 
  Award, 
  HeartHandshake, 
  ChevronRight, 
  ChevronLeft, 
  Calendar,
  Microscope
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const maleInfertilityTests = [
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
    title: "TEST-1 (SCSA Assay)",
    category: "Gold Standard DFI",
    image: "/molecular_tech.jpg",
    desc: "Sperm Chromatin Structure Assay evaluating 5000+ sperm cells for DNA strand integrity.",
    href: "/dfi-test/test-1"
  }
];

export default function AboutPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? maleInfertilityTests.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev >= maleInfertilityTests.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#f58220] selection:text-white">
      <Navbar />

      {/* HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-b from-[#1e2468] via-[#262b7e] to-[#353b9e] text-white py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            About Our Male Fertility Diagnostics Centre
          </motion.h1>
          <p className="text-slate-200 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Comprehensive Center for Male Diagnostics
          </p>
        </div>
      </section>

      {/* SECTION 1: COMPREHENSIVE CENTER FOR MALE DIAGNOSTICS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#353b9e] tracking-tight">
                Comprehensive Center for Male Diagnostics
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                LabXpert is a dedicated reference lab specializing in male reproductive wellness and diagnostics. Our lab is equipped with state-of-the-art flow cytometry, CASA motility workstations, and certified clinical protocols.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We believe every couple deserves accurate diagnostic clarity. By delivering reliable, high-precision evaluations like the Sperm Chromatin Structure Assay (SCSA), we empower fertility specialists to customize effective treatment plans.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 p-2">
                <img
                  src="/quality_lab.jpg"
                  alt="Male Diagnostics Laboratory"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 4 FEATURE CARDS */}
      <section className="py-16 sm:py-20 bg-[#f2f3ff] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#fff6ee] flex items-center justify-center text-[#f58220]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#353b9e] tracking-wider uppercase">
                State-Of-The-Art Facility
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Equipped with cutting-edge flow cytometers, climate-controlled specimen handling chambers, and high-resolution digital imaging systems for rigorous diagnostic accuracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#fff6ee] flex items-center justify-center text-[#f58220]">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#353b9e] tracking-wider uppercase">
                Comprehensive Services
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Offering a complete panel of male fertility assessments including DFI (SCSA), AI Semen Analysis, Reproductive Hormones, Karyotyping, and Y-Microdeletion genetics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#fff6ee] flex items-center justify-center text-[#f58220]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#353b9e] tracking-wider uppercase">
                Expertise You Can Trust
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Led by Scientific Director Dr. Tara Mahendran with over 15 years of specialized expertise in clinical genetics and reproductive andrology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#fff6ee] flex items-center justify-center text-[#f58220]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#353b9e] tracking-wider uppercase">
                Our Commitment To You
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ensuring patient confidentiality, empathetic guidance, transparent reporting, and prompt turnaround times for every diagnostic report.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT DR. TARA MAHENDRAN */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#f58220] shrink-0 shadow-xl">
              <img
                src="/mascot_doctor.jpg"
                alt="Dr. Tara Mahendran"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-center md:text-left flex-1">
              <h2 className="text-3xl font-extrabold text-[#353b9e]">
                About Dr. Tara Mahendran
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dr. Tara Mahendran serves as the Scientific Director of LabXpert in Jaipur. With advanced degrees in Medical Genetics and Reproductive Physiology, she has pioneered standard operating procedures for SCSA sperm DNA fragmentation assays across India.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Her ongoing research focuses on reducing paternal oxidative stress and establishing standardized reference thresholds for assisted reproductive treatments.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[#f58220] hover:text-[#dc7013] font-bold text-sm"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: HIGHLIGHTS OF SCSA TEST STATS STRIP */}
      <section className="py-16 bg-[#1e2468] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Highlights of SCSA Test
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl sm:text-5xl font-black text-[#f58220]">2012</span>
              <p className="text-xs sm:text-sm text-slate-300 uppercase tracking-wider font-semibold">Year Established</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl sm:text-5xl font-black text-[#f58220]">32,000+</span>
              <p className="text-xs sm:text-sm text-slate-300 uppercase tracking-wider font-semibold">Tests Conducted</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl sm:text-5xl font-black text-[#f58220]">200+</span>
              <p className="text-xs sm:text-sm text-slate-300 uppercase tracking-wider font-semibold">Test Centers</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl sm:text-5xl font-black text-[#f58220]">57</span>
              <p className="text-xs sm:text-sm text-slate-300 uppercase tracking-wider font-semibold">Cities Covered</p>
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

      {/* SECTION 6: HAVE A QUESTION? ASK US BANNER */}
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

      {/* SECTION 7: YOUR JOURNEY TO PARENTHOOD STARTS HERE */}
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
