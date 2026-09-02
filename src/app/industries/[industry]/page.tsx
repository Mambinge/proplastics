import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import CategoryIcon from "@/components/ui/CategoryIcon";
import Link from "next/link";
import { getIndustry, industries } from "@/data/industries";
import { getCategory } from "@/data/products";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) return {};
  return { title: ind.name, description: ind.summary };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const ind = getIndustry(industry);
  if (!ind) notFound();

  const relatedCategories = ind.relatedCategories
    .map((slug) => getCategory(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={ind.name}
        description={ind.tagline}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: ind.name }]}
        bgImage="/headers/governance.jpg"
      />

      <section className="bg-white py-16">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-700">{ind.summary}</p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-brand-950">
                <AlertTriangle className="h-5 w-5 text-signal-600" /> Sector challenges
              </h2>
              <ul className="mt-4 space-y-3">
                {ind.challenges.map((c) => (
                  <li key={c} className="rounded-md border border-ink-200 p-4 text-sm text-ink-700">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-brand-950">
                <CheckCircle2 className="h-5 w-5 text-flow-600" /> How Proplastics helps
              </h2>
              <ul className="mt-4 space-y-3">
                {ind.solutions.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-flow-200 bg-flow-50 p-4 text-sm text-flow-900"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-bold text-brand-950">Relevant product ranges</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group flex flex-col rounded-md border border-ink-200 p-6 transition-all hover:-translate-y-0.5 hover:border-flow-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-flow-50 text-flow-600 group-hover:bg-flow-600 group-hover:text-white transition-colors">
                    <CategoryIcon name={cat.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-950">{cat.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{cat.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title={`Have a project in ${ind.name} to specify?`}
        description="Tell us about the project and our technical team will help you select the right products and documentation."
      />
    </>
  );
}
