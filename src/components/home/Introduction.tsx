import Link from "next/link";
import SocialFeed from "@/components/home/SocialFeed";

export default function Introduction() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-flow-600">
              Who We Are
            </p>
            <h2 className="mb-6 text-3xl font-bold text-brand-950 lg:text-4xl">
              Building Africa&apos;s Infrastructure,{" "}
              <span className="text-flow-600">One Pipe at a Time.</span>
            </h2>
            <p className="leading-relaxed text-ink-600">
              Proplastics Limited is Zimbabwe&apos;s only listed plastic pipe
              and fittings manufacturer. With over 60 years of manufacturing
              excellence, we provide engineered piping solutions trusted by
              municipalities, farmers, contractors, and mining operations across
              Southern Africa. Our products are manufactured to international
              standards and designed for the demanding conditions of African
              infrastructure.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-signal-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-signal-600"
            >
              Discover Our Story →
            </Link>
          </div>

          {/* Right column */}
          <SocialFeed />
        </div>
      </div>
    </section>
  );
}
