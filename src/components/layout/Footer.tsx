import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { productCategories } from "@/data/products";
import { industries } from "@/data/industries";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.49-1.46H16.6V4.14C16.3 4.1 15.3 4 14.13 4c-2.44 0-4.1 1.49-4.1 4.22v2.08H7.4v3h2.63V21h3.47Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.4H3.56V20.4h3.38V8.4ZM5.25 3.6a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.4 20.4h-3.37v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31v6.39H9.17V8.4h3.24v1.64h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18v6.93Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="footer-contact-form" className="bg-ink-200 text-ink-600">
      {/* Main Footer Grid */}
      <Container className="py-16 border-b border-ink-200">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/proplastics-logo.png"
                alt="Proplastics Logo"
                width={180}
                height={44}
                style={{ width: "auto", height: "2.75rem" }}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
              Trusted plastic piping and fluid-handling solutions engineered for African
              conditions — combining technical excellence, regional expertise and modern
              manufacturing.
            </p>
            <p className="mt-4 text-xs text-ink-500">
              Proplastics Limited is listed on the Zimbabwe Stock Exchange.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 hover:bg-flow-50 hover:text-flow-600 transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 hover:bg-flow-50 hover:text-flow-600 transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-950">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {productCategories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`} className="hover:text-flow-600 transition-colors">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-950">Industries</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="hover:text-flow-600 transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-950">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-flow-600 transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-flow-600 transition-colors">Technical Resources</Link></li>
              <li><Link href="/sustainability" className="hover:text-flow-600 transition-colors">Sustainability</Link></li>
              <li><Link href="/investor-centre" className="hover:text-flow-600 transition-colors">Investor Centre</Link></li>
              <li><Link href="/contact" className="hover:text-flow-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-ink-200">
        <Container className="py-5 flex flex-col gap-2 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Proplastics Limited. All rights reserved.</p>
          <p>Manufactured in Zimbabwe · SADC-wide distribution</p>
        </Container>
      </div>
    </footer>
  );
}
