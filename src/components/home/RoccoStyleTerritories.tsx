"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Truck, ShieldCheck, Globe } from "lucide-react";

export default function RoccoStyleTerritories() {
  return (
    <section className="relative bg-white py-24 text-brand-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Map Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-ink-900 p-8 shadow-2xl border border-ink-200">
              <Image
                src="/headers/about.png"
                alt="Proplastics Regional Logistics and Factory Map"
                width={600}
                height={400}
                className="w-full h-auto object-cover opacity-50 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />

              {/* Overlay Badges */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white border border-white/20">
                  <MapPin className="h-4 w-4 text-flow-400" />
                  Harare Head Office &amp; Main Plant
                </div>
                <div className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white border border-white/20">
                  <Truck className="h-4 w-4 text-flow-400" />
                  Bulawayo, Gweru, Mutare Hubs
                </div>
                <div className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white border border-white/20">
                  <Globe className="h-4 w-4 text-flow-400" />
                  SADC Export Network
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-flow-600">
              Logistics &amp; Operational Excellence
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-950 tracking-tight leading-tight">
              Our sales territory extends through{" "}
              <span className="font-serif italic font-normal text-flow-600">Multiple Regions</span>
            </h2>
            
            <p className="mt-6 text-base text-ink-600 leading-relaxed">
              Proplastics maintains an extensive logistics fleet to provide consistent, reliable service to our customers. The company is committed to the principles of Lean Manufacturing to continuous improvement, operational performance, and customer satisfaction.
            </p>
            
            <p className="mt-4 text-base text-ink-600 leading-relaxed">
              Our sales territory extends throughout Zimbabwe (Harare, Bulawayo, Gweru, Mutare) and adjacent regional export markets in Zambia, Mozambique, Malawi, Botswana, DRC, and the SADC economic zone.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xs bg-flow-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-flow-700 active:scale-95"
              >
                View Sales &amp; Branch Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
