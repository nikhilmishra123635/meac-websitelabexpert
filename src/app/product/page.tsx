"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductModal, { ProductItem } from "@/components/ProductModal";
import { 
  Search, 
  Filter, 
  Microscope, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

const productCatalog: ProductItem[] = [
  {
    id: "andrology-9000",
    name: "SpermVision 9000 CASA Andrology Workstation",
    category: "andrology",
    categoryLabel: "Advanced Andrology",
    image: "/andrology_workstation.jpg",
    throughput: "120 Samples / Hour (AI CASA)",
    accuracy: "99.9% Motility & Sperm Count Precision",
    description: "State-of-the-art male fertility workstation featuring anti-vibration heated microscope stage (37°C), automated CASA AI motility scoring, and morphological assessment.",
    specs: [
      { label: "Stage Heating", value: "37.0°C ± 0.1°C PID Controlled" },
      { label: "Microscope Optics", value: "Digital Inverted Trinocular High-Res" },
      { label: "CASA AI Module", value: "Motility, Velocity VCL/VSL/VAP, Morphology" },
      { label: "Vibration Control", value: "Integrated Passive Air-Cushion Table" },
      { label: "LIS Connectivity", value: "HL7 & ASTM Bi-directional Protocol" },
      { label: "Warranty", value: "2 Years Full Replacement + AMC" }
    ],
    features: ["CASA AI Algorithm", "Integrated Anti-Vibration Stage", "DNA Fragmentation Ready"]
  },
  {
    id: "chem-9000",
    name: "ChemAnalyze 9000 Automated Biochemistry Analyzer",
    category: "chemistry",
    categoryLabel: "Clinical Chemistry",
    image: "/ivd_hero.jpg",
    throughput: "800 Tests / Hour (1200 with ISE)",
    accuracy: "0.0001 ABS Photometric Sensitivity",
    description: "Floor-standing high-throughput clinical chemistry auto-analyzer with 24/7 refrigerated reagent positions, micro-volume sampling, and zero-carryover probe washer.",
    specs: [
      { label: "Test Throughput", value: "800 Photometric Tests/Hr" },
      { label: "Reagent Positions", value: "100 Refrigerated (2-8°C)" },
      { label: "Sample Probe", value: "Liquid Level & Clot Detection" },
      { label: "Washing Station", value: "8-Step Auto Warm Wash" },
      { label: "Light Source", value: "Halogen Lamp 12 Wavelengths (340-800nm)" },
      { label: "Power Supply", value: "220V 50Hz Uninterrupted" }
    ],
    features: ["800 Tests/Hr Speed", "24/7 Refrigerated Tray", "Zero Carryover Fluidics"]
  },
  {
    id: "patholyte-8000",
    name: "PathoLyte 8000 Real-Time PCR Analyzer",
    category: "molecular",
    categoryLabel: "Molecular PCR",
    image: "/molecular_tech.jpg",
    throughput: "32 Multiplex Samples in 45 Mins",
    accuracy: "Single Copy Pathogen Sensitivity",
    description: "Compact molecular pathology diagnostic instrument utilizing microfluidic diagnostic cartridges for rapid infectious panel nucleic acid amplification.",
    specs: [
      { label: "Sample Capacity", value: "32 Samples / Run" },
      { label: "Optical Channels", value: "6 High-Sensitivity Fluorescence Channels" },
      { label: "Turnaround Time", value: "45 Minutes Sample-to-Result" },
      { label: "Cartridge Format", value: "Self-Contained Disposable Microfluidic" },
      { label: "Thermal Ramp Rate", value: "8.0°C / Sec Heating & Cooling" },
      { label: "Software", value: "Auto Ct Call & Genotype Report" }
    ],
    features: ["45-Min Result Speed", "6 Optical Channels", "Pre-loaded Cartridges"]
  },
  {
    id: "reagent-series",
    name: "LabXpert ISO Certified Liquid Stable Reagent Kits",
    category: "reagents",
    categoryLabel: "Diagnostic Assays",
    image: "/quality_lab.jpg",
    throughput: "Compatible with Open & Closed Analyzers",
    accuracy: "NIST Traceable Standards",
    description: "Comprehensive panel of diagnostic reagents including Lipid Profile, Renal Function, Liver Enzymes, Electrolytes, and Specialized Hormone Assays.",
    specs: [
      { label: "Onboard Stability", value: "30 Days at 2-8°C" },
      { label: "Linear Range", value: "Ultra-wide Linear Calibration" },
      { label: "Shelf Life", value: "18 Months Unopened" },
      { label: "Interference Guard", value: "Bilirubin & Lipid Clearing Additives" },
      { label: "Traceability", value: "NIST & IFCC Standardized" },
      { label: "Packaging", value: "Barcoded Ready-to-Use Bottles" }
    ],
    features: ["30-Day Onboard Stability", "NIST Standardized", "Barcoded Cartridges"]
  },
  {
    id: "hemato-500",
    name: "HemaXpert 5-Part Differential Hematology Counter",
    category: "hematology",
    categoryLabel: "Automated Hematology",
    image: "/ivd_hero.jpg",
    throughput: "60 Samples / Hour",
    accuracy: "Laser Flow Cytometry Precision",
    description: "Advanced 5-part differential blood cell counter utilizing semiconductor laser scatter and chemical dye technology for abnormal cell flagging.",
    specs: [
      { label: "Parameters", value: "29 Reportable + 4 Research Histograms" },
      { label: "Aspiration Volume", value: "20 µL Whole Blood / Capillary" },
      { label: "Sample Throughput", value: "60 Tests / Hour" },
      { label: "Flagging System", value: "Immature Granulocyte & Blast Alert" },
      { label: "Display", value: "10.4 Inch Touchscreen Interface" },
      { label: "LIS Integration", value: "LAN / USB / RS232" }
    ],
    features: ["29 Parameters 5-Part", "Low Aspiration 20µL", "Laser Cytometry"]
  },
  {
    id: "rapid-kit",
    name: "Rapid Diagnostic Immunofluorescent Test Strips",
    category: "rapid",
    categoryLabel: "Rapid Diagnostics",
    image: "/quality_lab.jpg",
    throughput: "15 Minute Quantitative Results",
    accuracy: "98.7% Clinical Correlation",
    description: "Quantitative immunofluorescent cassette test reader for Cardiac Markers (Troponin I, NT-proBNP), Cardiac Panels, Thyroid, and Inflammatory Markers (hs-CRP, PCT).",
    specs: [
      { label: "Test Time", value: "10 - 15 Minutes Quantitative" },
      { label: "Sample Types", value: "Whole Blood, Serum, Plasma" },
      { label: "Assay Menu", value: "TnI, CK-MB, Myo, D-Dimer, PCT, CRP, T3/T4/TSH" },
      { label: "Reader Capacity", value: "Built-in Thermal Printer & Memory" },
      { label: "Calibration", value: "RFID Card Calibration Chip" },
      { label: "Storage", value: "Room Temperature 2-30°C" }
    ],
    features: ["15-Min Quantitative", "Cardiac & Thyroid Panel", "RFID Chip Calibrated"]
  }
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = productCatalog.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      {/* HEADER HERO */}
      <section className="relative py-16 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#ef7d00] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Microscope className="w-3.5 h-3.5" /> High-Throughput Equipment & Assays
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            LabXpert <span className="gradient-text">IVD Product Catalog</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Browse our complete range of certified clinical chemistry analyzers, CASA andrology workstations, real-time PCR platforms, and diagnostic reagents.
          </p>
        </div>
      </section>

      {/* SEARCH & CATEGORY FILTER BAR */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-[73px] z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by analyzer name, test panel..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b358f]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
              {[
                { id: "all", label: "All Portfolio" },
                { id: "andrology", label: "Andrology" },
                { id: "chemistry", label: "Clinical Chemistry" },
                { id: "molecular", label: "Molecular PCR" },
                { id: "reagents", label: "Reagents" },
                { id: "hematology", label: "Hematology" },
                { id: "rapid", label: "Rapid Kits" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-[#2b358f] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Filter className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-bold text-slate-700">No matching instruments found</h3>
              <p className="text-xs text-slate-500">Try adjusting your search or category filter criteria.</p>
              <button
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="px-4 py-2 bg-[#2b358f] text-white font-bold text-xs rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-56 bg-slate-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#2b358f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow">
                        {product.categoryLabel}
                      </span>
                      <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#ef7d00] text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-200">
                        {product.throughput}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-[#2b358f] transition">
                        {product.name}
                      </h3>
                      <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> {product.accuracy}
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-1 pt-2">
                        {product.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition text-center"
                    >
                      View Specs
                    </button>
                    <Link
                      href="/get-in-touch"
                      className="flex-1 py-2.5 px-3 bg-[#2b358f] hover:bg-[#1e266d] text-white font-bold text-xs rounded-xl shadow transition text-center flex items-center justify-center gap-1"
                    >
                      Request Quote <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* PRODUCT DETAIL MODAL */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      <Footer />
    </div>
  );
}
