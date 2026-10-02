"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2
} from "lucide-react";
import confetti from "canvas-confetti";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "DFI TEST-1 (SCSA)",
    city: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
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
            Contact Us for Male Fertility Tests
          </motion.h1>
          <p className="text-slate-200 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Comprehensive Center for Male Diagnostics
          </p>
        </div>
      </section>

      {/* MAIN CONTACT & BOOKING FORM SECTION */}
      <section id="appointment-form" className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Reach Out To Us */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-extrabold text-[#1e2468] tracking-tight">
                  Reach out to us
                </h2>
                <p className="text-sm text-slate-600">
                  Our scientific staff and laboratory counselors are available to assist you with test scheduling, sample collection guidelines, and diagnostic enquiries.
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff6ee] border border-orange-100">
                <div className="w-10 h-10 rounded-xl bg-[#f58220] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-[#1e2468]">Lab Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Vikramaditya Marg, Mansarovar Sector 7, Agarwal Farm, Jhalana Chhod, Mansarovar, Jaipur, Rajasthan 302020
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff6ee] border border-orange-100">
                <div className="w-10 h-10 rounded-xl bg-[#f58220] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-[#1e2468]">Phone Hotline</h4>
                  <a href="tel:+919987573194" className="text-xs sm:text-sm text-[#f58220] font-bold hover:underline">
                    +91 99875 73194
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff6ee] border border-orange-100">
                <div className="w-10 h-10 rounded-xl bg-[#f58220] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-[#1e2468]">Email Support</h4>
                  <a href="mailto:info@labexpert.com" className="text-xs sm:text-sm text-[#f58220] font-bold hover:underline">
                    info@labexpert.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-5 rounded-2xl bg-[#1e2468] text-white space-y-3 shadow-lg">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#f58220] flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Office Hours
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <div className="flex items-center justify-between border-b border-indigo-900 pb-2">
                    <span>Monday – Friday:</span>
                    <span className="font-bold text-white">9:00 – 17:30</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span>Saturday:</span>
                    <span className="font-bold text-white">9:00 – 13:30</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Book An Appointment Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#353b9e]">
                    Book An Appointment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out your details below to schedule your diagnostic test or request information.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 bg-[#fff6ee] rounded-2xl border border-orange-200 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#f58220] text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-[#1e2468]">Appointment Request Received!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                      Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our patient coordinator will contact you shortly on <span className="font-bold text-slate-900">{formData.phone || formData.email}</span> to confirm your slot and provide abstinence instructions.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-[#f58220] text-white font-bold text-xs rounded-xl shadow hover:bg-[#dc7013] transition"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#f58220] focus:ring-2 focus:ring-orange-200 outline-none text-sm transition"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#f58220] focus:ring-2 focus:ring-orange-200 outline-none text-sm transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 Mobile number"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#f58220] focus:ring-2 focus:ring-orange-200 outline-none text-sm transition"
                        />
                      </div>
                    </div>

                    {/* General Enquiry */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        General Enquiry / Selected Test <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#f58220] focus:ring-2 focus:ring-orange-200 outline-none text-sm font-medium bg-white transition"
                      >
                        <option value="DFI TEST-1 (SCSA)">DFI TEST-1 (SCSA Assay)</option>
                        <option value="DFI TEST-2 (HALO)">DFI TEST-2 (HALO Assay)</option>
                        <option value="DFI TEST-3 (TUNEL)">DFI TEST-3 (TUNEL Assay)</option>
                        <option value="DFI TEST-4 (COMET)">DFI TEST-4 (COMET Assay)</option>
                        <option value="OTHER TEST-1 (AI Semen)">OTHER TEST-1 (AI Semen Analysis)</option>
                        <option value="OTHER TEST-2 (Hormones)">OTHER TEST-2 (Hormones Profile)</option>
                        <option value="OTHER TEST-3 (Serology)">OTHER TEST-3 (Serology Blood Screen)</option>
                        <option value="OTHER TEST-4 (Karyotyping)">OTHER TEST-4 (Karyotyping Genetics)</option>
                        <option value="OTHER TEST-5 (Y-Microdeletion)">OTHER TEST-5 (Y-Chromosome Microdeletion)</option>
                        <option value="General Enquiry">General Consultation / Other Enquiry</option>
                      </select>
                    </div>

                    {/* City or Location */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City or Location <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Jaipur, New Delhi, Mumbai..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#f58220] focus:ring-2 focus:ring-orange-200 outline-none text-sm transition"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify preferred date, time, or specific clinical questions..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#f58220] focus:ring-2 focus:ring-orange-200 outline-none text-sm transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit</span>
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: HAVE A QUESTION? ASK US BANNER */}
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
                <a
                  href="#appointment-form"
                  className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition"
                >
                  <span>Send Us Your Question</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: YOUR JOURNEY TO PARENTHOOD STARTS HERE */}
      <section className="py-16 bg-[#1e2468] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your Journey to Parenthood Starts Here
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
            Book an appointment with LabXpert today for precise male fertility diagnostic evaluations.
          </p>
          <div>
            <a
              href="#appointment-form"
              className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#dc7013] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition duration-200"
            >
              <Calendar className="w-5 h-5" />
              <span>Book An Appointment</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
