import type { Metadata } from "next";
import { Recycle, Timer, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Proplastics approaches local manufacturing, material longevity and resilient infrastructure across Southern Africa.",
};

const pillars = [
  {
    icon: Building2,
    title: "Local manufacturing",
    description:
      "Producing in-region reduces the transport footprint associated with imported piping systems, while supporting local industrial capacity and jobs.",
  },
  {
    icon: Timer,
    title: "Longevity of materials",
    description:
      "PVC and HDPE piping systems are engineered for multi-decade service life, reducing the frequency of replacement and associated material use.",
  },
  {
    icon: Recycle,
    title: "Resilient infrastructure",
    description:
      "Reliable water, sanitation and irrigation infrastructure underpins public health and food security across the communities we supply.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Reliability is a sustainability strategy."
        description="For piping systems buried underground or run across a farm, the most sustainable product is the one that doesn't need to be replaced. That principle shapes how we manufacture."
        crumbs={[{ label: "Sustainability" }]}
        bgImage="/headers/sustainability.jpg"
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-md border border-ink-200 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                  <p.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-bold text-brand-950">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-600">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-md bg-ink-50 border border-ink-200 p-10 text-ink-950">
            <h2 className="text-2xl font-bold">Our ongoing commitments</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              <li className="rounded-md bg-white border border-ink-200 p-4 text-sm text-ink-600">
                Continued investment in efficient extrusion technology to reduce material waste
                during manufacturing.
              </li>
              <li className="rounded-md bg-white border border-ink-200 p-4 text-sm text-ink-600">
                Supporting water security in agriculture and municipal supply through durable,
                low-maintenance product ranges.
              </li>
              <li className="rounded-md bg-white border border-ink-200 p-4 text-sm text-ink-600">
                Maintaining compliance with SANS, ISO and ASTM standards as a baseline for
                responsible manufacturing.
              </li>
              <li className="rounded-md bg-white border border-ink-200 p-4 text-sm text-ink-600">
                Regional distribution that shortens supply chains and reduces logistics-related
                emissions relative to imported alternatives.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
