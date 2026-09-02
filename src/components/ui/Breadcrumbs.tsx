import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[];
  light?: boolean;
}) {
  const base = light ? "text-ink-300" : "text-ink-500";
  const current = light ? "text-white" : "text-ink-800";
  const hover = light ? "hover:text-white" : "hover:text-flow-600";
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-sm ${base}`}>
      <Link href="/" className={hover}>
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
          {item.href ? (
            <Link href={item.href} className={hover}>
              {item.label}
            </Link>
          ) : (
            <span className={`font-medium ${current}`}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
