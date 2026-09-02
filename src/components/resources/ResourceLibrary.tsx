"use client";

import { useMemo, useState } from "react";
import { FileText, FileDown } from "lucide-react";
import { Resource } from "@/data/resources";
import { ProductCategory } from "@/data/products";

export default function ResourceLibrary({
  resources,
  categories,
}: {
  resources: Resource[];
  categories: ProductCategory[];
}) {
  const [category, setCategory] = useState<string>("all");
  const [type, setType] = useState<string>("all");

  const types = useMemo(() => Array.from(new Set(resources.map((r) => r.type))), [resources]);

  const filtered = useMemo(
    () =>
      resources.filter(
        (r) =>
          (category === "all" || r.categorySlug === category) && (type === "all" || r.type === type)
      ),
    [resources, category, type]
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === "all" ? "bg-flow-600 text-white" : "bg-ink-100 text-ink-600 hover:bg-ink-200"
            }`}
          >
            All ranges
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === c.slug
                  ? "bg-flow-600 text-white"
                  : "bg-ink-100 text-ink-600 hover:bg-ink-200"
              }`}
            >
              {c.shortName}
            </button>
          ))}
        </div>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-md border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700"
        >
          <option value="all">All document types</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-ink-500">
        Showing {filtered.length} of {resources.length} documents
      </p>

      <div className="mt-6 divide-y divide-ink-100 rounded-md border border-ink-200 bg-white">
        {filtered.map((r) => (
          <a
            key={r.title}
            href="#"
            className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-ink-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-brand-950">{r.title}</p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {r.type} · {r.format} · {r.size}
                </p>
              </div>
            </div>
            <FileDown className="h-5 w-5 shrink-0 text-ink-400" />
          </a>
        ))}
        {filtered.length === 0 && (
          <p className="p-8 text-center text-sm text-ink-500">
            No documents match this filter yet — contact our technical team directly.
          </p>
        )}
      </div>
    </div>
  );
}
