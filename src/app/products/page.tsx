import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CategoryIcon from "@/components/ui/CategoryIcon";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full Proplastics product taxonomy — Proflo, Irrigation, Protank and Prodrain — with datasheets for every range.",
};

export default function ProductsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title="Every range, structured the way you specify."
        description="Four core product brands — Proflo, Irrigation, Protank and Prodrain — cover water reticulation, irrigation, storage and drainage applications, each backed by full technical documentation."
        crumbs={[{ label: "Products" }]}
        bgImage="/headers/products.jpg"
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group flex flex-col rounded-md border border-ink-200 p-8 transition-all hover:-translate-y-0.5 hover:border-flow-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-flow-50 text-flow-600 group-hover:bg-flow-600 group-hover:text-white transition-colors">
                    <CategoryIcon name={cat.icon} className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600">
                    {cat.products.length} product lines
                  </span>
                </div>
                <h2 className="mt-6 text-xl font-bold text-brand-950">{cat.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{cat.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.applications.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-flow-50 px-3 py-1 text-xs font-medium text-flow-700"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-flow-700">
                  View range <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Can't find the exact specification you need?"
        description="Our technical team can confirm pressure ratings, sizing and standards compliance, or fabricate a custom fitting for your project."
      />
    </>
  );
}
