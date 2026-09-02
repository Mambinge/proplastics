import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryIcon from "@/components/ui/CategoryIcon";
import { productCategories } from "@/data/products";

export default function ProductPillars() {
  return (
    <section className="bg-ink-50 py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Product Ranges"
            title="A structured taxonomy, built around how you actually specify."
            description="Browse by product type, filter by industry or application, and get straight to the datasheet you need."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-flow-700 hover:text-flow-800"
          >
            View full catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group flex flex-col rounded-md border border-ink-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-flow-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-flow-50 text-flow-600 group-hover:bg-flow-600 group-hover:text-white transition-colors">
                <CategoryIcon name={cat.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-950">{cat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{cat.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-flow-700">
                {cat.products.length} product lines <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
