"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/headers/hero.jpg",
    eyebrow: "60+ Years of Manufacturing Excellence",
    title: "Shaping Africa's Piping Infrastructure",
    description:
      "Zimbabwe's only listed pipe manufacturer, delivering SANS and ISO 9001 certified pipe systems for water, sanitation, mining and agriculture across the region.",
    cta: { label: "View Our Products", href: "/products" },
  },
  {
    id: 2,
    image: "/brands/proflo.jpg",
    eyebrow: "SANS & ISO Certified Pressure Systems",
    title: "Proflo — Pressure Systems Built to Last",
    description:
      "mPVC, uPVC, HDPE and cPVC pressure pipe, backed by a full range of matched fittings, hoses and pumps for water reticulation and industrial process lines.",
    cta: { label: "Explore Proflo", href: "/products/proflo" },
  },
  {
    id: 3,
    image: "/brands/prodrain.jpg",
    eyebrow: "SWV & SD Sewer Systems",
    title: "Prodrain — Reliable Drainage for Every Site",
    description:
      "Non-pressure sewer, soil, waste and vent systems engineered for structural strength and long service life in below-ground networks.",
    cta: { label: "Explore Prodrain", href: "/products/prodrain" },
  },
];

export default function RoccoStyleHero() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  const slide = slides[index];

  return (
    <section className="bg-ink-950">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950">
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/90" />

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:left-8"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-8"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Centered content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-16">
          <h1 className="font-display max-w-4xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-flow-400 sm:text-base">
            {slide.eyebrow}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {slide.description}
          </p>

          <Link
            href={slide.cta.href}
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-flow-400"
          >
            {slide.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Dot / dash pagination */}
        <div className="relative z-10 mb-8 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-flow-500" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
