"use client";

import { useMemo, useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function ProductFilter({
  categorySlug,
  products,
  industryOptions,
}: {
  categorySlug: string;
  products: Product[];
  industryOptions: { slug: string; name: string }[];
}) {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.industries.includes(active))),
    [active, products]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === "all"
              ? "bg-flow-600 text-white"
              : "bg-ink-100 text-ink-600 hover:bg-ink-200"
          }`}
        >
          All industries
        </button>
        {industryOptions.map((ind) => (
          <button
            key={ind.slug}
            onClick={() => setActive(ind.slug)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === ind.slug
                ? "bg-flow-600 text-white"
                : "bg-ink-100 text-ink-600 hover:bg-ink-200"
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-ink-500">
        Showing {filtered.length} of {products.length} product lines
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} categorySlug={categorySlug} product={product} />
        ))}
      </div>
    </div>
  );
}
