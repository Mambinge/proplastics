import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

export default function ProductCard({
  categorySlug,
  product,
}: {
  categorySlug: string;
  product: Product;
}) {
  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="group flex flex-col rounded-md border border-ink-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-flow-300 hover:shadow-lg"
    >
      <h3 className="text-lg font-bold text-brand-950">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{product.summary}</p>
      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-ink-100 pt-4 text-xs">
        <div>
          <dt className="font-semibold uppercase tracking-wide text-ink-400">Size range</dt>
          <dd className="mt-1 text-ink-700">{product.sizeRange}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-wide text-ink-400">Standard</dt>
          <dd className="mt-1 text-ink-700">{product.standard}</dd>
        </div>
      </dl>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-flow-700">
        View specifications <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
