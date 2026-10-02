"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedLabCanvas from "@/components/AnimatedLabCanvas";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Building2,
  ChevronDown,
  Microscope,
  TestTube,
  Wrench,
  DollarSign,
  Search,
  Bot,
  ShieldCheck,
  Zap,
  PhoneCall,
  UserCheck
} from "lucide-react";
import confetti from "canvas-confetti";
import Link from "next/link";

const demoCenters = [
  {
    id: "delhi",
    city: "New Delhi (Global HQ & Demo Lab)",
    address: "LabXpert Tech Park, Tower B, Medical Hub, Okhla Phase III, New Delhi - 110020",
    phone: "+91 (800) 483-7378",
    email: "delhi.demo@labxpert-ivd.com",
    manager: "Dr. Rajesh Varma (Demo Lead)",
    timing: "Mon - Sat: 9:00 AM - 7:00 PM",
    badge: "Full Instrument Demo Suite"
  },
  {
    id: "mumbai",
    city: "Mumbai (Andrology & IVF Experience Hub)",
    address: "BioMed Hub, 4th Floor, BKC Financial District, Mumbai - 400051",
    phone: "+91 (800) 483-7379",
    email: "mumbai.andrology@labxpert-ivd.com",
    manager: "Dr. Ananya Sharma (CASA Specialist)",
    timing: "Mon - Sat: 9:30 AM - 6:30 PM",
    badge: "CASA Motility Lab"
  },
  {
    id: "bengaluru",
    city: "Bengaluru (Molecular PCR & Tech Center)",
    address: "Electronic City Phase 1, Near Biotech Park, Bengaluru - 560100",
    phone: "+91 (800) 483-7380",
    email: "bengaluru.pcr@labxpert-ivd.com",
    manager: "Er. Karthik N. (LIS Tech Lead)",
    timing: "Mon - Sat: 9:00 AM - 7:00 PM",
    badge: "Molecular Genomics Center"
  }
];

const faqs = [
  {
    q: "What is the warranty period for LabXpert analyzers?",
    a: "All LabXpert diagnostic instruments come standard with a 2-Year Comprehensive Warranty covering optical sensors, electronic boards, and fluidic pumps, extendable via our AMC/CMC programs.",
    cat: "warranty"
  },
  {
    q: "Are LabXpert reagents compatible with other open biochemistry analyzers?",
    a: "Yes! LabXpert liquid-stable reagents are formulation-matched for both LabXpert closed systems and third-party open clinical chemistry auto-analyzers.",
    cat: "reagents"
  },
  {
    q: "How long does installation and technician training take?",
    a: "Standard installation and LIS integration take 1 to 2 business days. On-site staff training is completed concurrently by our application specialists.",
    cat: "installation"
  },
  {
    q: "Can we request a free reagent trial pack before purchasing?",
    a: "Yes! Qualified pathology laboratories can request a free 100-test evaluation reagent kit by selecting 'Free Reagent Trial' in our inquiry station.",
    cat: "reagents"
  },
  {
    q: "What is the emergency engineer dispatch SLA?",
    a: "We guarantee a 2 to 4 hour technician dispatch for metro locations and within 8 hours for regional diagnostic centers.",
    cat: "service"
  }
];

export default function GetInTouchPage() {
  const [inquiryType, setInquiryType] = useState("demo");
  const [urgency, setUrgency] = useState("normal");
  const [activeCenter, setActiveCenter] = useState("delhi");
  const [faqSearch, setFaqSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    labName: "",
    city: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const currentCenter = demoCenters.find(c => c.id === activeCenter) || demoCenters[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ef7d00] selection:text-white">
      <Navbar />

      {/* UNIQUE HERO HEADER WITH MASCOT & ANIMATED CANVAS */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-indigo-50/90 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        
        {/* Floating Lab Particles Canvas */}
        <AnimatedLabCanvas />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Text & Mascot Speech */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-orange-200 shadow-md">
                <Bot className="w-4 h-4 text-[#ef7d00] animate-bounce" />
                <span className="text-xs font-black text-[#2b358f] uppercase tracking-wider">
                  Meddy-7 & Dr. Ben Contact Terminal
                </span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Connect With <span className="gradient-text">LabXpert IVD Experts</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Whether you need an on-site equipment demo, a free reagent trial pack, or an emergency technician visit, our team is ready 24/7!
              </p>

              {/* Cartoon Speech Callout */}
              <div className="glass-panel p-4 rounded-2xl border-2 border-indigo-200 bg-white/95 shadow-md max-w-lg inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ef7d00] shrink-0">
                  <img src="/mascot_robot.jpg" alt="Meddy 7 Bot" className="w-full h-full object-cover" />
                </div>
                <div className="text-left text-xs font-semibold text-slate-800">
                  <span className="font-bold text-[#2b358f] block">Meddy-7 Assistant Bot Says:</span>
                  "BEEP-BOOP! Select your inquiry type below for priority routing to our senior pathologists!"
                </div>
              </div>

            </div>

            {/* Right: Mascot Cartoon Avatar Cards */}
            <div className="lg:col-span-5 flex justify-center gap-4">
              <div className="relative w-44 h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 transform -rotate-3 hover:rotate-0 transition">
                <img src="/mascot_doctor.jpg" alt="Dr Ben" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 text-[10px] font-black text-[#2b358f] px-2 py-1 rounded-lg text-center shadow">
                  Dr. Ben (Reagents)
                </div>
              </div>

              <div className="relative w-44 h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 transform rotate-3 hover:rotate-0 transition">
                <img src="/mascot_andrology.jpg" alt="Dr Sarah" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 text-[10px] font-black text-[#ef7d00] px-2 py-1 rounded-lg text-center shadow">
                  Dr. Sarah (Andrology)
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE INQUIRY TERMINAL & FORM SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#ef7d00] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Station
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              LabXpert <span className="gradient-text-orange">Diagnostic Request Terminal</span>
            </h2>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-2 border-slate-200/90 shadow-2xl bg-gradient-to-br from-white via-indigo-50/20 to-orange-50/20 space-y-8">
            
            {/* STEP 1: VISUAL INQUIRY CATEGORY SELECTOR */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-[#2b358f] text-white flex items-center justify-center text-xs">1</span>
                Select Your Laboratory Request Type:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "demo", title: "Book On-Site Demo", desc: "Test SpermVision 9000 or ChemAnalyze at your lab", icon: Microscope, color: "border-[#2b358f]" },
                  { id: "reagents", title: "Free Reagent Trial", desc: "Request free 100-test diagnostic trial kit", icon: TestTube, color: "border-[#ef7d00]" },
                  { id: "quote", title: "Instrument Price Quote", desc: "Get custom pricing with warranty & AMC options", icon: DollarSign, color: "border-indigo-600" },
                  { id: "service", title: "Emergency SLA Support", desc: "24/7 technician dispatch for critical equipment", icon: Wrench, color: "border-emerald-600" },
                ].map((type) => {
                  const IconComponent = type.icon;
                  const isSelected = inquiryType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id)}
                      className={`p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                        isSelected
                          ? `bg-white ${type.color} shadow-xl scale-[1.03] ring-2 ring-[#ef7d00]/30`
                          : "bg-slate-50 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2.5 rounded-xl ${isSelected ? "bg-[#2b358f] text-white" : "bg-slate-200 text-slate-700"}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-[#ef7d00]" />}
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-base">{type.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: URGENCY TOGGLE */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-[#ef7d00] text-white flex items-center justify-center text-xs">2</span>
                Timeline / Urgency Level:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "normal", label: "Planning (1-3 Months)", badge: "Standard Routing" },
                  { id: "urgent", label: "Urgent (Purchase in 2 Weeks)", badge: "Priority Callback" },
                  { id: "critical", label: "Emergency Dispatch (Today)", badge: "2-4 Hr SLA Response" },
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setUrgency(u.id)}
                    className={`p-3.5 rounded-xl font-bold text-xs transition border-2 flex items-center justify-between ${
                      urgency === u.id
                        ? "bg-[#2b358f] text-white border-transparent shadow"
                        : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    <span>{u.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      urgency === u.id ? "bg-[#ef7d00] text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {u.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3: FORM INPUTS */}
            {submitted ? (
              <div className="text-center py-12 space-y-4 bg-white rounded-2xl border border-emerald-200 p-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Request Dispatched to LabXpert Team!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. A dedicated specialist from our team has been assigned and will reach out to <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", labName: "", city: "", message: "" });
                  }}
                  className="px-6 py-2.5 bg-[#2b358f] text-white font-bold text-xs rounded-xl shadow transition"
                >
                  Submit New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Dr. / Pathologist Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Rajesh Varma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f] bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Official Lab Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@apexlabs.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f] bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Laboratory Name</label>
                    <input
                      type="text"
                      value={formData.labName}
                      onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                      placeholder="Apex Clinical Reference Lab"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f] bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">City / Location</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="New Delhi / Mumbai"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f] bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Specific Requirements or Test Volume</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g., We perform ~100 biochemistry tests daily and need pricing for ChemAnalyze 800 + reagent supply."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f] bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#2b358f] via-[#3543b5] to-[#ef7d00] hover:from-[#1e266d] hover:to-[#d66d00] text-white font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Dispatch Request to LabXpert Specialists
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* INTERACTIVE DEMO CENTERS & EXPERIENCE HUBS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-[#2b358f] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> Regional Experience Hubs
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Visit a LabXpert Demo Experience Center
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Schedule a hands-on live trial of our SpermVision 9000 & ChemAnalyze instruments at our regional experience hubs.
            </p>
          </div>

          {/* Center Tabs */}
          <div className="flex justify-center gap-2 flex-wrap">
            {demoCenters.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCenter(c.id)}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-xs transition ${
                  activeCenter === c.id
                    ? "bg-[#2b358f] text-white shadow"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {c.city.split(" ")[0]} Hub
              </button>
            ))}
          </div>

          {/* Active Center Card */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div className="space-y-4">
              <span className="bg-[#ef7d00] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow">
                {currentCenter.badge}
              </span>
              <h3 className="text-2xl font-black text-slate-900">{currentCenter.city}</h3>
              
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#ef7d00] shrink-0 mt-0.5" />
                  <span>{currentCenter.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#2b358f] shrink-0" />
                  <span className="font-bold text-slate-900">{currentCenter.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Center Manager: {currentCenter.manager}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{currentCenter.timing}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${currentCenter.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2b358f] text-white font-bold text-xs rounded-xl shadow hover:bg-[#1e266d] transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Demo Center Directly
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img src="/quality_lab.jpg" alt="Demo Lab Center" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-xs font-bold">LabXpert Certified Cleanroom Demo Suite</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEARCHABLE FAQ SECTION */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#ef7d00] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Quick Answers
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Frequently Asked Diagnostic Questions
            </h2>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto pt-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search FAQs about warranty, reagents, SLA..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#2b358f]"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#ef7d00] transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 border-t border-slate-200 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
