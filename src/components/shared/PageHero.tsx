import { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  bgImage,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
  bgImage?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-28 ${bgImage ? "bg-ink-950" : "bg-white"}`}
    >
      {bgImage ? (
        <>
          <Image src={bgImage} alt={title} fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/75 to-ink-950/50" />
        </>
      ) : (
        <div className="bg-pipe-grid absolute inset-0 opacity-50" />
      )}
      <Container className="relative z-10">
        <Breadcrumbs items={crumbs} light={!!bgImage} />
        {eyebrow && (
          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-flow-500 uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          className={`mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${bgImage ? "text-white" : "text-ink-950"}`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-4 max-w-2xl text-lg leading-relaxed ${bgImage ? "text-ink-100" : "text-ink-600"}`}
          >
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
