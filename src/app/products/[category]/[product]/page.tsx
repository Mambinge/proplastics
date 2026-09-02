import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FileDown, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ProductCard from "@/components/products/ProductCard";
import CTASection from "@/components/shared/CTASection";
import { getProduct, productCategories, getCategory } from "@/data/products";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return productCategories.flatMap((c) =>
    c.products.map((p) => ({ category: c.slug, product: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const found = getProduct(category, product);
  if (!found) return {};
  return { title: found.product.name, description: found.product.summary };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category, product } = await params;
  const found = getProduct(category, product);
  if (!found || !found.category) notFound();

  const { category: cat, product: prod } = found;
  const relatedIndustries = industries.filter((i) => prod.industries.includes(i.slug));
  const otherProducts = cat!.products.filter((p) => p.slug !== prod.slug).slice(0, 3);

  const specs = [
    { label: "Size range", value: prod.sizeRange },
    { label: "Material", value: prod.material },
    { label: "Pressure class", value: prod.pressureClass },
    { label: "SDR", value: prod.sdr },
    { label: "Standard length", value: prod.standardLength },
    { label: "Joint type", value: prod.jointType },
    { label: "Colour", value: prod.colour },
    { label: "Standard", value: prod.standard },
    { label: "Product family", value: cat!.name },
  ].filter((s): s is { label: string; value: string } => Boolean(s.value));

  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: cat!.name, href: `/products/${cat!.slug}` },
              { label: prod.name },
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flow-600">
                {cat!.name}
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                {prod.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">{prod.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {prod.applications.map((a) => (
                  <Badge key={a}>{a}</Badge>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 rounded-md border border-ink-200 p-6 sm:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.label}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {s.label}
                    </p>
                    <p className="mt-1 font-semibold text-brand-950">{s.value}</p>
                  </div>
                ))}
              </div>

              {prod.features && prod.features.length > 0 && (
                <div className="mt-10">
                  <p className="text-sm font-semibold text-brand-950">Features &amp; benefits</p>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {prod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flow-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {prod.rangeItems && prod.rangeItems.length > 0 && (
                <div className="mt-10">
                  <p className="text-sm font-semibold text-brand-950">Range includes</p>
                  <div className="mt-3 overflow-x-auto rounded-md border border-ink-200">
                    <table className="w-full text-left text-sm">
                      <tbody>
                        {prod.rangeItems.map((r, idx) => (
                          <tr key={r.name} className={idx % 2 === 0 ? "bg-white" : "bg-ink-50"}>
                            <td className="whitespace-nowrap px-4 py-2.5 font-semibold text-brand-950">{r.name}</td>
                            <td className="px-4 py-2.5 text-ink-600">{r.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {relatedIndustries.length > 0 && (
                <div className="mt-10">
                  <p className="text-sm font-semibold text-brand-950">Used across</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {relatedIndustries.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/industries/${i.slug}`}
                        className="rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 hover:border-flow-300 hover:text-flow-700"
                      >
                        {i.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="h-fit rounded-md border border-ink-200 bg-ink-50 p-6">
              <p className="text-sm font-bold text-brand-950">Technical documentation</p>
              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 hover:border-flow-300"
                >
                  Datasheet (PDF) <FileDown className="h-4 w-4 text-flow-600" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 hover:border-flow-300"
                >
                  Installation guide (PDF) <FileDown className="h-4 w-4 text-flow-600" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 hover:border-flow-300"
                >
                  Compliance certificate (PDF) <FileDown className="h-4 w-4 text-flow-600" />
                </a>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-flow-600 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-flow-700"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>

          {otherProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-xl font-bold text-brand-950">More from {cat!.name}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {otherProducts.map((p) => (
                  <ProductCard key={p.slug} categorySlug={cat!.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
