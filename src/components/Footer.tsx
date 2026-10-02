"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import AndrologyLogo from "@/components/AndrologyLogo";

export default function Footer() {
  return (
    <footer className="bg-[#1e2468] text-slate-200 pt-16 pb-8 border-t-4 border-[#f58220] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-indigo-900/60">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="bg-white px-3 py-2 rounded-xl inline-block shadow-md">
              <AndrologyLogo showTagline={false} />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              LabXpert Advanced Andrology & Pathology, where clinical excellence meets innovation in male reproductive wellness. Our center is a beacon of comprehensive diagnostic services.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-1 text-[#f58220] hover:text-white text-xs font-bold transition group"
            >
              <span>Read More</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wide border-l-3 border-[#f58220] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#f58220] transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f58220] transition">About Us</Link>
              </li>
              <li>
                <Link href="/dfi-test" className="hover:text-[#f58220] transition">DFI Test Overview</Link>
              </li>
              <li>
                <Link href="/other-tests" className="hover:text-[#f58220] transition">Other Diagnostic Tests</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f58220] transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tests */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wide border-l-3 border-[#f58220] pl-3">
              Diagnostic Tests
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li>
                <Link href="/dfi-test/test-1" className="hover:text-[#f58220] transition">DFI TEST-1 (SCSA)</Link>
              </li>
              <li>
                <Link href="/dfi-test/test-2" className="hover:text-[#f58220] transition">DFI TEST-2 (HALO)</Link>
              </li>
              <li>
                <Link href="/other-tests/test-1" className="hover:text-[#f58220] transition">OTHER TEST-1 (AI Semen)</Link>
              </li>
              <li>
                <Link href="/other-tests/test-2" className="hover:text-[#f58220] transition">OTHER TEST-2 (Hormones)</Link>
              </li>
              <li>
                <Link href="/other-tests/test-3" className="hover:text-[#f58220] transition">OTHER TEST-3 (Serology)</Link>
              </li>
              <li>
                <Link href="/other-tests/test-4" className="hover:text-[#f58220] transition">OTHER TEST-4 (Karyotyping)</Link>
              </li>
              <li>
                <Link href="/other-tests/test-5" className="hover:text-[#f58220] transition">OTHER TEST-5 (Y-Microdeletion)</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wide border-l-3 border-[#f58220] pl-3">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f58220] shrink-0 mt-1" />
                <span>Vikramaditya Marg, Mansarovar Sector 7, Agarwal Farm, Jhalana Chhod, Mansarovar, Jaipur, Rajasthan 302020</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f58220] shrink-0" />
                <a href="tel:+919987573194" className="hover:text-[#f58220] transition">+91 99875 73194</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f58220] shrink-0" />
                <a href="mailto:info@labexpert.com" className="hover:text-[#f58220] transition">info@labexpert.com</a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-indigo-900/80 flex items-center justify-center text-slate-300 hover:bg-[#f58220] hover:text-white transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-indigo-900/80 flex items-center justify-center text-slate-300 hover:bg-[#f58220] hover:text-white transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-indigo-900/80 flex items-center justify-center text-slate-300 hover:bg-[#f58220] hover:text-white transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>Copyright © 2026 All rights reserved. LabXpert Advanced Andrology & Pathology.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-white transition">Privacy Policy</Link>
            <span className="text-indigo-800">|</span>
            <Link href="/contact" className="hover:text-white transition">Terms and Conditions</Link>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/919987573194"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </footer>
  );
}
