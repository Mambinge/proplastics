"use client";

import Link from "next/link";
import { ArrowRight, Calculator, ShoppingBag } from "lucide-react";

export default function RoccoStyleOrdering() {
  return (
    <section className="bg-white text-ink-900 py-16 border-t border-ink-200 relative overflow-hidden">
      {/* Background Texture overlay */}
      <div className="absolute inset-0 bg-pipe-grid opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: E-Commerce Ordering System */}
          <div className="group relative flex flex-col justify-between rounded-lg border border-ink-200 bg-ink-50 p-8 sm:p-10 shadow-md transition-all duration-300 hover:border-flow-500/50 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShoppingBag className="h-32 w-32 text-flow-600" />
            </div>

            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-flow-50 text-flow-600 mb-6">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-ink-950 tracking-tight">
                Access Proplastics Direct, our E-Commerce order system
              </h3>
              <p className="mt-4 text-sm text-ink-600 leading-relaxed max-w-md">
                Through Proplastics Direct, registered hardware merchants and project contractors are able to log in to check stock availability, generate instant quotes, order online, and track delivery status 24/7.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink-900 border border-ink-300 transition-all hover:bg-flow-600 hover:border-flow-600 hover:text-white group-hover:shadow-lg"
              >
                Proplastics Direct Portal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Technical Calculators */}
          <div className="group relative flex flex-col justify-between rounded-lg border border-ink-200 bg-ink-50 p-8 sm:p-10 shadow-md transition-all duration-300 hover:border-flow-500/50 hover:shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calculator className="h-32 w-32 text-flow-600" />
            </div>

            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-flow-50 text-flow-600 mb-6">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-ink-950 tracking-tight">
                Access our Pipe &amp; Pressure Flow Calculators
              </h3>
              <p className="mt-4 text-sm text-ink-600 leading-relaxed max-w-md">
                For civil engineers, irrigation specialists, and plumbers, use our automated calculator suite to determine optimal pipe wall thickness, SDR ratings, flow velocity, and pressure loss across HDPE and PVC runs.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-xs bg-flow-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-flow-700 active:scale-95"
              >
                Pipe Flow Calculators
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
