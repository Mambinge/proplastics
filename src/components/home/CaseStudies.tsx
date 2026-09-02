"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "FlowGuard cPVC has completely solved hot water scaling issues in our high-rise luxury apartment builds. It is extremely fast to weld and leak-proof.",
    rating: 4,
    name: "Shyam Patel",
    role: "Plumbing Contractor",
    company: "Patel Residential Systems",
  },
  {
    quote:
      "Slurry disposal requires highly abrasive-resistant piping. Proplastics' HDPE continuous pipes have reduced our tailing line maintenance costs by over 40%.",
    rating: 5,
    name: "Ruan van der Merwe",
    role: "Mining Operations Director",
    company: "Great Dyke Platinum Group",
  },
  {
    quote:
      "Proplastics sewer and storm-water pipes have been our go-to for major municipal roadworks. The quality standards and SAZ certifications give our clients complete peace of mind.",
    rating: 5,
    name: "Eng. Tinashe Moyo",
    role: "Senior Civil Engineer",
    company: "Infrabuild Zimbabwe",
  },
  {
    quote:
      "Proplastics pipes have been the backbone of our irrigation system for over 20 years. Exceptional durability and reliability.",
    rating: 5,
    name: "T. Moyo",
    role: "Farm Manager",
    company: "Mashonaland West",
  },
  {
    quote:
      "ProTank storage tanks transformed how we manage water on our property. Built to last and incredibly easy to install.",
    rating: 4,
    name: "R. Mutasa",
    role: "Property Developer",
    company: "Harare",
  },
];

export default function CaseStudies() {
  const [start, setStart] = useState(0);
  const visible = testimonials.slice(start, start + 3);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flow-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-flow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-flow-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-flow-600">
            <MessageSquare className="h-3.5 w-3.5" />
            Customer Feedback
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-brand-950 lg:text-4xl">
            What Our Clients <span className="text-flow-600">Say</span>
          </h2>
          <p className="mt-3 text-ink-500">
            Trusted by leading contractors, engineers, and farmers across Zimbabwe and the
            Southern African region.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {visible.map((t, i) => (
            <div
              key={start + i}
              className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-ink-200 bg-white p-7"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={
                      s < t.rating
                        ? "h-4 w-4 fill-flow-500 text-flow-500"
                        : "h-4 w-4 fill-none text-ink-200"
                    }
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="relative z-10 flex-1 text-sm italic leading-relaxed text-ink-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="relative z-10 border-t border-ink-100 pt-4">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-950">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {t.role}, <span className="font-semibold text-ink-600">{t.company}</span>
                </p>
              </div>

              {/* Decorative quote mark */}
              <Quote className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 text-flow-50" />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
            aria-label="Previous testimonials"
            className="rounded-full border border-ink-200 p-2 transition-colors hover:bg-ink-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5 text-ink-600" />
          </button>
          <button
            onClick={() =>
              setStart((s) =>
                s + 3 >= testimonials.length ? s : s + 1
              )
            }
            disabled={start + 3 >= testimonials.length}
            aria-label="Next testimonials"
            className="rounded-full border border-ink-200 p-2 transition-colors hover:bg-ink-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5 text-ink-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
