"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ShieldCheck, Download, Mail, Zap, Microscope, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image: string;
  throughput: string;
  accuracy: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
}

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="space-y-6">
            
            {/* Header Tag */}
            <div className="flex items-center gap-2">
              <span className="bg-[#2b358f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 13485 Verified
              </span>
            </div>

            {/* Title & Image Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-[#ef7d00]">
                  {product.throughput}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs font-bold text-[#2b358f]">
                  Analytical Precision Rating: {product.accuracy}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {product.features.map((feat, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Specifications Table */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-[#ef7d00]" /> Instrument Technical Specifications
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {product.specs.map((spec, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">{spec.label}:</span>
                    <span className="font-bold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200">
              <Link
                href="/get-in-touch"
                onClick={onClose}
                className="flex-1 min-w-[200px] py-3 px-6 bg-gradient-to-r from-[#2b358f] to-[#ef7d00] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Request Official Quotation
              </Link>
              <button
                onClick={() => alert(`Brochure for ${product.name} downloaded successfully!`)}
                className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" /> Download PDF Brochure
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
