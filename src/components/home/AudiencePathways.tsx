import Link from "next/link";
import { ArrowRight, HardHat, Ruler, Truck } from "lucide-react";
import Container from "@/components/ui/Container";

const paths = [
  {
    icon: Ruler,
    title: "Specifying a project",
    audience: "Engineers, consultants & municipalities",
    description:
      "Go straight to pressure ratings, standards compliance and installation guidance for every range.",
    href: "/resources",
    cta: "Browse technical resources",
  },
  {
    icon: HardHat,
    title: "Sourcing or installing",
    audience: "Contractors, installers & farmers",
    description:
      "Find the right product for the job, sized and rated correctly, with clear application guidance.",
    href: "/products",
    cta: "Browse the product catalogue",
  },
  {
    icon: Truck,
    title: "Buying or distributing",
    audience: "Distributors, procurement & trade buyers",
    description:
      "Get pricing, availability and your nearest stockist, or request a formal quote for a project.",
    href: "/contact",
    cta: "Talk to sales",
  },
];

export default function AudiencePathways() {
  return (
    <section className="bg-white py-16">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Wherever you're starting from
        </p>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {paths.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group flex flex-col rounded-md border border-ink-200 p-7 transition-all hover:-translate-y-0.5 hover:border-flow-300 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-flow-50 text-flow-600 group-hover:bg-flow-600 group-hover:text-white transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-flow-600">
                {p.audience}
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-brand-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-flow-700">
                {p.cta} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
