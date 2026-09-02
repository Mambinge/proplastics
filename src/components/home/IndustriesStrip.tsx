import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

export default function IndustriesStrip() {
  return (
    <section className="bg-ink-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Purpose-built for the sectors that keep Africa running."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col justify-between rounded-md border border-ink-200 bg-white p-6 shadow-sm transition-colors hover:border-flow-500/50 hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-ink-950">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{ind.tagline}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-flow-600 group-hover:text-flow-700">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
