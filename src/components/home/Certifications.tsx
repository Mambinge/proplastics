import Image from "next/image";

const badges = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "SAZ Tested",
  "SABS Compliant",
  "SAPPMA Member",
  "IFPA Member",
];

const certLogos = [
  { src: "/logos/certification-logos-1.png", alt: "Certification Logo 1" },
  { src: "/logos/certification-logos-2.png", alt: "Certification Logo 2" },
  { src: "/logos/certification-logos-3.png", alt: "Certification Logo 3" },
  { src: "/logos/certification-logos-4.png", alt: "Certification Logo 4" },
];

export default function Certifications() {
  return (
    <section className="border-y border-ink-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-ink-400">
          Certified &amp; Standards Compliant
        </p>

        {/* Badge pills */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-ink-200 bg-ink-50 px-4 py-1.5 text-xs font-semibold text-ink-700"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Certification logos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {certLogos.map((logo) => (
            <div key={logo.src} className="relative h-12 w-32">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
