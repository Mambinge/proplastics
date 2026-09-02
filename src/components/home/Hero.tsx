import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/headers/hero.jpg"
        alt="Proplastics manufacturing facility"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Light overlay for text legibility */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Pipe-grid texture overlay */}
      <div className="bg-pipe-grid absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-flow-600">
          Zimbabwe&apos;s Only Listed Plastic Pipe Manufacturer
        </p>

        <h1 className="font-display mb-6 text-5xl font-extrabold leading-tight text-ink-950 md:text-6xl lg:text-7xl">
          Zimbabwe&apos;s Leading{" "}
          <span className="text-flow-600">Pipe Systems</span> Manufacturer
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-ink-600 md:text-xl">
          Pipe systems that last – Solutions for Africa
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="rounded-sm bg-signal-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-signal-600 hover:shadow-lg hover:shadow-signal-500/30 active:scale-95"
          >
            Explore Products
          </Link>
          <a
            href="https://wa.me/263787121723?text=I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-emerald-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
}
