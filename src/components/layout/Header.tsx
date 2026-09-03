"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { productCategories } from "@/data/products";
import { industries } from "@/data/industries";

const companyLinks = [
  { label: "About Proplastics", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investor Centre", href: "/investor-centre" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;
  const navLinkClass = transparent
    ? "flex items-center gap-1 text-sm font-semibold text-white hover:text-white/80"
    : "flex items-center gap-1 text-sm font-semibold text-brand-950 hover:text-flow-600";

  return (
    <header
      className={`z-50 inset-x-0 top-0 transition-colors duration-300 ${isHome ? "fixed" : "sticky"} ${
        transparent ? "bg-transparent" : "bg-white/95 backdrop-blur border-b border-ink-100"
      }`}
    >
      <div className="hidden lg:block bg-flow-600 text-white">
        <Container className="flex items-center justify-between py-2 text-xs">
          <p className="tracking-wide">ZSE-listed manufacturer · Zimbabwe &amp; regional distribution</p>
          <div className="flex items-center gap-5">
            <a href="tel:+263242621651" className="flex items-center gap-1.5 hover:text-white/80">
              <Phone className="h-3.5 w-3.5" /> +263 242 621651-5
            </a>
            <Link href="/contact" className="hover:text-white/80">
              Find a distributor
            </Link>
          </div>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/proplastics-logo.png"
            alt="Proplastics Logo"
            width={180}
            height={44}
            style={{ width: "auto", height: "2.75rem" }}
            className={`object-contain transition-all duration-300 ${transparent ? "brightness-0 invert" : ""}`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="group relative py-8">
            <button className={navLinkClass}>
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-md border border-ink-100 bg-white p-6 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="rounded-sm p-2 hover:bg-brand-50"
                  >
                    <p className="text-sm font-semibold text-brand-950">{cat.name}</p>
                    <p className="mt-0.5 text-xs text-ink-500 line-clamp-1">{cat.summary}</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/products"
                className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-flow-600 hover:text-flow-700"
              >
                View all products →
              </Link>
            </div>
          </div>

          <div className="group relative py-8">
            <button className={navLinkClass}>
              Industries <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-md border border-ink-100 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="block rounded-sm p-2.5 text-sm font-medium text-brand-950 hover:bg-brand-50"
                >
                  {ind.name}
                </Link>
              ))}
              <Link
                href="/industries"
                className="mt-1 block rounded-sm p-2.5 text-xs font-semibold uppercase tracking-wide text-flow-600 hover:bg-brand-50"
              >
                View all industries →
              </Link>
            </div>
          </div>

          <Link
            href="/resources"
            className={transparent ? "text-sm font-semibold text-white hover:text-white/80" : "text-sm font-semibold text-brand-950 hover:text-flow-600"}
          >
            Technical Resources
          </Link>

          <div className="group relative py-8">
            <button className={navLinkClass}>
              Company <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 rounded-md border border-ink-100 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {companyLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-sm p-2.5 text-sm font-medium text-brand-950 hover:bg-brand-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-signal-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-signal-600"
          >
            Contact Us
          </Link>
        </div>

        <button
          className={`lg:hidden ${transparent ? "text-white" : "text-brand-950"}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <Container className="flex flex-col gap-1 py-4">
            <details className="group border-b border-ink-100 py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-brand-950">
                Products
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col gap-1 pb-2 pl-2">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="py-1.5 text-sm text-ink-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </details>

            <details className="group border-b border-ink-100 py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-brand-950">
                Industries
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col gap-1 pb-2 pl-2">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="py-1.5 text-sm text-ink-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/resources"
              className="border-b border-ink-100 py-3 text-sm font-semibold text-brand-950"
              onClick={() => setMobileOpen(false)}
            >
              Technical Resources
            </Link>

            {companyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-ink-100 py-3 text-sm font-semibold text-brand-950"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-sm bg-signal-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-signal-600"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
