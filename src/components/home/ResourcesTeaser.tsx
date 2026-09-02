import Link from "next/link";
import { ArrowRight, FileText, HardHat, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: FileText,
    title: "Datasheets & Pressure Ratings",
    description: "Full specifications, dimensions and pressure-rating tables for every product line.",
  },
  {
    icon: HardHat,
    title: "Installation Guides",
    description: "Step-by-step guidance for jointing, welding, laying and commissioning.",
  },
  {
    icon: ShieldCheck,
    title: "Standards & Certificates",
    description: "SANS, ISO and ASTM compliance documentation for procurement and audit.",
  },
];

export default function ResourcesTeaser() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Technical Resources"
              title="Everything an engineer needs to specify with confidence."
              description="No sales gatekeeping — our full technical library is open and downloadable, built for the way consultants and contractors actually work."
            />
            <Link
              href="/resources"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-flow-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-flow-700"
            >
              Browse the resource library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-md border border-ink-200 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-brand-950">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
