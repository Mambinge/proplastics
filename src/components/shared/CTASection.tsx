import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTASection({
  title = "Need help specifying the right system?",
  description = "Our technical team can help you select products, confirm pressure ratings, and get the right documentation into your hands.",
  primaryHref = "/contact",
  primaryLabel = "Talk to our technical team",
  secondaryHref = "/resources",
  secondaryLabel = "Browse technical resources",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-flow-600 py-16">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-white/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-flow-700 hover:bg-ink-100"
          >
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
