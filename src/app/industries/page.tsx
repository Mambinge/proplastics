import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Proplastics products are engineered for water & sanitation, agriculture, infrastructure & construction, and mining & industrial applications across Southern Africa.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        title="Engineered for the sectors that keep Africa running."
        description="Every Proplastics range is developed around real operating conditions in the field — not just laboratory specifications."
        crumbs={[{ label: "Industries" }]}
        bgImage="/headers/governance.jpg"
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col rounded-md border border-ink-200 p-8 transition-all hover:-translate-y-0.5 hover:border-flow-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-brand-950">{ind.name}</h2>
                <p className="mt-2 text-sm font-medium text-flow-700">{ind.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">{ind.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-flow-700">
                  Explore {ind.name} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
