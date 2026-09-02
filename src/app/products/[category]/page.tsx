import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import Container from "@/components/ui/Container";
import ProductFilter from "@/components/products/ProductFilter";
import { getCategory, productCategories } from "@/data/products";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return { title: cat.name, description: cat.summary };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const usedIndustrySlugs = Array.from(new Set(cat.products.flatMap((p) => p.industries)));
  const industryOptions = industries
    .filter((i) => usedIndustrySlugs.includes(i.slug))
    .map((i) => ({ slug: i.slug, name: i.name }));

  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title={cat.name}
        description={cat.summary}
        crumbs={[{ label: "Products", href: "/products" }, { label: cat.name }]}
        bgImage="/headers/products.jpg"
      />

      <section className="bg-white py-16">
        <Container>
          <ProductFilter categorySlug={cat.slug} products={cat.products} industryOptions={industryOptions} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
