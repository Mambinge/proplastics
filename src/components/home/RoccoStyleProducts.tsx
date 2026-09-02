"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Download } from "lucide-react";
import { productCategories } from "@/data/products";

const categoryImages: Record<string, string> = {
  proflo: "/brands/proflo.jpg",
  irrigation: "/brands/procpvc.jpg",
  protank: "/brands/protank.jpg",
  prodrain: "/brands/prodrain.jpg",
};

const productCards = productCategories.map((cat) => ({
  title: cat.name,
  image: categoryImages[cat.slug] ?? "/headers/hero.jpg",
  link: `/products/${cat.slug}`,
  tags: cat.products.slice(0, 5).map((p) => p.name),
}));

export default function RoccoStyleProducts() {
  return (
    <section className="bg-brand-50 py-24 text-brand-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Header & Intro Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {/* Tag Pill */}
            <div className="mb-6 inline-block rounded-md bg-flow-600 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-md">
              Products &amp; Systems
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
              We offer quality piping systems and service at competitive prices
            </h2>

            <p className="mt-5 text-base text-ink-600 leading-relaxed">
              We work very closely with civil contractors, engineers, and hardware dealers to deliver certified plastic pipe systems engineered specifically for African climate and soil conditions. Our technical team offers on-site fusion welding guidance and ongoing project support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-950 hover:text-flow-600 transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flow-600 text-white group-hover:bg-flow-700 transition-colors">
                  <Play className="h-3.5 w-3.5 fill-white ml-0.5" />
                </span>
                Explore all Products
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-brand-200">
              <a
                href="/resources"
                className="inline-flex items-center gap-3 rounded-xs bg-flow-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-flow-700 active:scale-95"
              >
                <Download className="h-4 w-4 text-white" />
                Our 2026 Pipe &amp; Fittings Brochure
              </a>
            </div>
          </div>

          {/* Right Column: 4 Category Feature Cards matching Rocco's home-products_list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.link}
                className="group flex flex-col overflow-hidden rounded-lg border border-ink-200 bg-white shadow-md min-h-[380px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-flow-500/40"
              >
                {/* Background Image */}
                <div className="relative h-48 shrink-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Badge / Arrow */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-ink-900 shadow-sm group-hover:bg-flow-600 group-hover:text-white transition-colors">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>

                {/* Content with Stacked Tag Pills */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <h3 className="font-display text-xl font-bold text-ink-950 group-hover:text-flow-600 transition-colors mb-3">
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-xs bg-ink-100 px-2.5 py-1 text-[11px] font-semibold text-ink-700 group-hover:bg-flow-50 group-hover:text-flow-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
