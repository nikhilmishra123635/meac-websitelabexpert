"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Calendar,
  ChevronRight
} from "lucide-react";
import AndrologyLogo from "@/components/AndrologyLogo";

// DFI Test Sub-navigation links
const dfiTestLinks = [
  { name: "TEST-1", href: "/dfi-test/test-1", desc: "Sperm Chromatin Structure Assay (SCSA)" },
  { name: "TEST-2", href: "/dfi-test/test-2", desc: "Sperm Chromatin Dispersion (HALO Assay)" },
  { name: "TEST-3", href: "/dfi-test/test-3", desc: "TUNEL Fluorometric DNA Break Assay" },
  { name: "TEST-4", href: "/dfi-test/test-4", desc: "COMET Single Cell Gel Electrophoresis" },
];

// Other Tests Sub-navigation links
const otherTestLinks = [
  { name: "TEST-1", href: "/other-tests/test-1", desc: "Automated AI CASA Semen Analysis" },
  { name: "TEST-2", href: "/other-tests/test-2", desc: "Male Reproductive Hormones Profile" },
  { name: "TEST-3", href: "/other-tests/test-3", desc: "Serology Infectious Disease Screen" },
  { name: "TEST-4", href: "/other-tests/test-4", desc: "Constitutional Karyotyping & Genetics" },
  { name: "TEST-5", href: "/other-tests/test-5", desc: "Y-Chromosome AZF Microdeletion PCR" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states for Desktop
  const [dfiOpen, setDfiOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  // Mobile accordion states
  const [mobileDfiOpen, setMobileDfiOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white font-sans">
      {/* Top Header Information Bar */}
      <div className="bg-[#001f7c] text-slate-200 py-2 px-4 text-xs font-medium border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Left Text */}
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-slate-300 font-semibold">
              Innovating Male Health: <span className="text-[#f77f00] font-bold">LabXpert Advanced Andrology & Pathology</span>
            </span>
          </div>

          {/* Right Socials & Contact */}
          <div className="flex items-center space-x-5 ml-auto sm:ml-0">
            <a 
              href="tel:+919987573194" 
              className="flex items-center gap-1.5 hover:text-[#f77f00] transition font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#f77f00]" />
              <span>+91 99875 73194</span>
            </a>
            
            <div className="h-3.5 w-px bg-blue-800 hidden sm:block" />

            <div className="flex items-center space-x-3 text-slate-300">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#f77f00] transition">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#f77f00] transition">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#f77f00] transition">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Desktop & Mobile Header Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo (Transparent SVG without watermark) */}
          <AndrologyLogo showTagline={true} />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-bold text-sm text-slate-700">
            
            {/* HOME */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                pathname === "/" ? "text-[#f58220] bg-orange-50/70" : "hover:text-[#f58220] hover:bg-slate-50"
              }`}
            >
              HOME
            </Link>

            {/* ABOUT US */}
            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                pathname === "/about" ? "text-[#f58220] bg-orange-50/70" : "hover:text-[#f58220] hover:bg-slate-50"
              }`}
            >
              ABOUT US
            </Link>

            {/* DFI TEST DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setDfiOpen(true)}
              onMouseLeave={() => setDfiOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/dfi-test") 
                    ? "text-[#f58220] bg-orange-50/70" 
                    : "hover:text-[#f58220] hover:bg-slate-50"
                }`}
              >
                <span>DFI TEST</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dfiOpen ? "rotate-180 text-[#f58220]" : "text-slate-400"}`} />
              </button>

              <AnimatePresence>
                {dfiOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-64 mt-1 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50"
                  >
                    {dfiTestLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDfiOpen(false)}
                        className="block px-3.5 py-2.5 rounded-xl hover:bg-[#fff6ee] transition group"
                      >
                        <div className="text-sm font-extrabold text-slate-800 group-hover:text-[#f58220] flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#f58220] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OTHER TESTS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setOtherOpen(true)}
              onMouseLeave={() => setOtherOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/other-tests") 
                    ? "text-[#f58220] bg-orange-50/70" 
                    : "hover:text-[#f58220] hover:bg-slate-50"
                }`}
              >
                <span>OTHER TESTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${otherOpen ? "rotate-180 text-[#f58220]" : "text-slate-400"}`} />
              </button>

              <AnimatePresence>
                {otherOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-64 mt-1 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50"
                  >
                    {otherTestLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOtherOpen(false)}
                        className="block px-3.5 py-2.5 rounded-xl hover:bg-[#fff6ee] transition group"
                      >
                        <div className="text-sm font-extrabold text-slate-800 group-hover:text-[#f58220] flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#f58220] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONTACT US */}
            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                pathname === "/contact" ? "text-[#f58220] bg-orange-50/70" : "hover:text-[#f58220] hover:bg-slate-50"
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Right Action Button: Book An Appointment */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact#appointment-form"
              className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#f58220] hover:bg-slate-100 rounded-xl focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl overflow-hidden"
            >
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition ${
                  pathname === "/" ? "bg-[#fff6ee] text-[#f58220]" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                HOME
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition ${
                  pathname === "/about" ? "bg-[#fff6ee] text-[#f58220]" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                ABOUT US
              </Link>

              {/* Mobile DFI Accordion */}
              <div>
                <button
                  onClick={() => setMobileDfiOpen(!mobileDfiOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-50"
                >
                  <span>DFI TEST</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileDfiOpen ? "rotate-180 text-[#f58220]" : ""}`} />
                </button>
                {mobileDfiOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1">
                    {dfiTestLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm font-extrabold text-slate-700 hover:text-[#f58220]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Other Tests Accordion */}
              <div>
                <button
                  onClick={() => setMobileOtherOpen(!mobileOtherOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-50"
                >
                  <span>OTHER TESTS</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileOtherOpen ? "rotate-180 text-[#f58220]" : ""}`} />
                </button>
                {mobileOtherOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1">
                    {otherTestLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm font-extrabold text-slate-700 hover:text-[#f58220]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition ${
                  pathname === "/contact" ? "bg-[#fff6ee] text-[#f58220]" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                CONTACT US
              </Link>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact#appointment-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-base font-black text-white bg-[#f58220] hover:bg-[#dc7013] rounded-xl shadow"
                >
                  <Calendar className="w-5 h-5" />
                  Book An Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
