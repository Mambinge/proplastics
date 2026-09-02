import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-signal-500 text-white hover:bg-signal-600",
  secondary: "bg-flow-600 text-white hover:bg-flow-700",
  outline: "border border-ink-300 text-ink-900 hover:bg-ink-50",
  ghost: "border border-brand-200 text-brand-900 hover:bg-brand-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
