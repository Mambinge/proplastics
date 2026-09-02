"use client";

import Link from "next/link";
import { Play } from "lucide-react";

const certificationsAndBrands = [
  { name: "SABS Approved", code: "SANS 966-1", desc: "South African Bureau of Standards" },
  { name: "ISO 9001:2015", code: "Cert #QMS001", desc: "Quality Management Certified" },
  { name: "SAZ Standard", code: "ARS 1461", desc: "Standards Association of Zimbabwe" },
  { name: "PVC-O Certified", code: "Class 500", desc: "Oriented PVC High Pressure" },
  { name: "HDPE PE100", code: "ISO 4427", desc: "High Density Polyethylene" },
  { name: "Marley Pipe Systems", code: "Partner Tech", desc: "Advanced Drainage Technology" },
];

export default function RoccoStyleVendors() {
  return (
    <section className="relative bg-white text-brand-950 py-20 overflow-hidden border-b border-brand-100">
      {/* Subtle background decoration — light spiral-style accent */}
      <div className="absolute inset-0 opacity-[0.04] bg-dot-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-flow-50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-flow-600">
              Technical Standards &amp; Accreditation
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
              We Work with the Best Certified Standards &amp; World-Class Materials
            </h2>
            <p className="mt-4 text-base text-ink-600 leading-relaxed">
              We carefully select raw material polymers and adhere strictly to international manufacturing standards. Every pipe batch undergoes rigorous pressure, impact, and stress testing before leaving our factory floor.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-brand-950 hover:text-flow-600 transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flow-600 text-white group-hover:bg-flow-700 transition-colors">
                  <Play className="h-3.5 w-3.5 fill-white ml-0.5" />
                </span>
                Explore all Certifications &amp; Standards
              </Link>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {certificationsAndBrands.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-md border border-brand-200 bg-brand-50 p-5 transition-all duration-300 hover:border-flow-500 hover:bg-white hover:shadow-lg hover:shadow-flow-100"
                >
                  <div className="h-1 w-8 rounded-full bg-flow-500 mb-4 group-hover:w-12 transition-all" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-flow-600">
                      {item.code}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-brand-950 group-hover:text-flow-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-ink-500 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
