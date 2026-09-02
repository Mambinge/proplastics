import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target, HeartHandshake, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import AboutSubNav from "@/components/about/AboutSubNav";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Proplastics Limited is a Zimbabwean plastic pipes and fittings manufacturer listed on the Zimbabwe Stock Exchange, with decades of manufacturing history.",
};

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the recognized leader in the provision of world-class plastic piping systems in Southern Africa.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver engineered plastic piping solutions that reliably build our continent's vital infrastructure.",
  },
  {
    icon: HeartHandshake,
    title: "Values",
    description:
      "Integrity, Innovation, Customer Focus, Safety, and Environmental Stewardship guide every decision we make.",
  },
];

const clientSectors = [
  "Municipalities & Water Utilities",
  "Commercial & Emerging Farmers",
  "Contractors & Developers",
  "Mining & Industrial Operations",
  "Distributors & Merchants",
];

const milestones = [
  {
    year: "1965",
    title: "Manufacturing begins",
    description:
      "Proplastics begins operations in Zimbabwe, laying the foundation for local plastic pipe manufacturing.",
  },
  {
    year: "1970s",
    title: "Capacity expansion",
    description:
      "The company expands its manufacturing capacity and product range under the ownership of major regional industrial groups.",
  },
  {
    year: "1994",
    title: "Investment in technology",
    description:
      "Continued investment in extrusion technology and quality systems strengthens Proplastics' manufacturing capability.",
  },
  {
    year: "2012",
    title: "Operational modernisation",
    description:
      "Proplastics modernises its operations and manufacturing base ahead of formalising its public market listing.",
  },
  {
    year: "2015",
    title: "Listed on the Zimbabwe Stock Exchange",
    description:
      "Proplastics is listed on the ZSE, becoming the country's only listed plastic pipes and fittings manufacturer.",
  },
  {
    year: "2020+",
    title: "Looking ahead",
    description:
      "Proplastics continues to grow its regional manufacturing and distribution footprint across Zimbabwe and the SADC region.",
  },
];

const isoCertifications = [
  { code: "ISO 9001", label: "Quality Management" },
  { code: "ISO 14001", label: "Environmental Management" },
  { code: "ISO 45001", label: "Occupational Health & Safety" },
];

const boardMembers = [
  {
    name: "Mr. Gregory Sebborn",
    role: "Non-Executive Board Chairman",
    image: "/corporate/Chairman-Gregory Sebborn.jpg",
    bio: "Gregory served as Managing Director of the Zimbabwe and Southern African operations of the Rennies Group of Companies.",
  },
  {
    name: "Mr. Herbert S. Mashanyare",
    role: "Non-Executive Director",
    image: "/corporate/Non Executive Director - Herbert Mashanyare.jpg",
    bio: "Herbert is a former mining executive and until recently was an Executive Director for Mimosa Mines in Zimbabwe.",
  },
  {
    name: "Mrs. Sandra Roberts",
    role: "Non-Executive Director",
    image: "/corporate/Non Executive Director - Sandra Roberts.jpg",
    bio: "Sandra is a proven Agribusiness Specialist and Project Manager with over twenty years of experience in commercial crop production.",
  },
  {
    name: "Mr. Paddy Tongai Zhanda (Jnr)",
    role: "Non-Executive Director",
    image: "/corporate/Non Executive Director - Paddy T Zhanda Jnr.jpg",
    bio: "Paddy holds a Bachelor of Commerce in Accounting Science from the University of South Africa and completed his Articles.",
  },
  {
    name: "Mr. Canada Malunga",
    role: "Non-Executive Director",
    image: "/corporate/Non Executive Director - Canada Malunga.jpg",
    bio: "Canada holds a Master's in Business Administration and Bachelor of Laws degrees and is a Chartered Accountant (Zimbabwe).",
  },
  {
    name: "Mr. Paschal Changunda",
    role: "Chief Executive Officer",
    image: "/corporate/CEO -Pascal Changunda.jpg",
    bio: "Paschal is a qualified Chartered Accountant (Zimbabwe) and holds a Masters Degree in Business Leadership (MBL).",
  },
  {
    name: "Mr. Benny Tichaona Deda",
    role: "Non-Executive Director",
    image: "/corporate/Non Executive Director - Benny T Deda.jpg",
    bio: "Benny holds an MBA from Edinburgh Heriot-Watt Business School and is a qualified Chartered Management Accountant.",
  },
  {
    name: "Mrs. Thembiwe Chikosi Mazingi",
    role: "Non-Executive Director",
    image: "/corporate/Non Executive Director - Non Executive Director.jpg",
    bio: "Thembiwe holds a Master's in Business Administration and a Bachelor of Laws degree from the University of Zimbabwe.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Proplastics"
        title="About Proplastics"
        description="Discover who we are, our rich heritage of manufacturing excellence, and the governance principles that guide every decision we make."
        crumbs={[{ label: "About Us" }]}
        bgImage="/headers/about.png"
      />

      <AboutSubNav />

      {/* Overview */}
      <section id="overview" className="scroll-mt-40 bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flow-600">
                Overview
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-950 lg:text-4xl">
                Who are we?
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Proplastics Limited is Zimbabwe&apos;s only listed plastic pipe and fittings
                manufacturer, with a manufacturing heritage spanning more than 60 years. We
                design, extrude and mould piping systems for the water, agriculture, construction
                and mining sectors, supplying customers across Zimbabwe and the wider SADC region.
              </p>
              <p className="mt-4 leading-relaxed text-ink-600">
                As a company listed on the Zimbabwe Stock Exchange, we operate under rigorous
                corporate governance, technical standards and quality assurance — building
                infrastructure engineered to perform for decades, not years.
              </p>
            </div>
            <div className="relative h-72 w-full overflow-hidden rounded-xl lg:h-96">
              <Image
                src="/headers/hero.jpg"
                alt="Proplastics manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Vision / Mission / Values */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-md border border-ink-200 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-bold text-brand-950">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Clients */}
          <div className="mt-16 border-t border-ink-100 pt-16">
            <h2 className="text-2xl font-bold tracking-tight text-brand-950">Our Clients</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-600">
              From municipalities and utilities to farmers, contractors and mining operations,
              Proplastics supplies engineered piping systems to a broad base of clients across
              Southern Africa. Our technical team works closely with specifiers, consultants and
              distributors to ensure the right product is selected, supplied and supported for
              every application.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {clientSectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-ink-200 bg-ink-50 px-4 py-1.5 text-xs font-semibold text-ink-700"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* History */}
      <section id="history" className="scroll-mt-40 bg-ink-50 py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flow-600">
            Our Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-950">Our History</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-600">
            From a regional industrial subsidiary to a listed manufacturer, Proplastics has grown
            alongside Zimbabwe&apos;s infrastructure needs.
          </p>

          <div className="mt-12 space-y-8 border-l-2 border-flow-200 pl-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full border-2 border-flow-500 bg-white" />
                <p className="text-xs font-semibold uppercase tracking-wide text-flow-600">
                  {m.year}
                </p>
                <h3 className="mt-1 text-lg font-bold text-brand-950">{m.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-600">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Corporate Governance */}
      <section id="governance" className="scroll-mt-40 bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flow-600">
                Corporate Governance
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-950 lg:text-4xl">
                Corporate Governance
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-600">
                As a company listed on the Zimbabwe Stock Exchange, Proplastics is governed by an
                experienced board and a framework of policies covering financial reporting, risk
                management and regulatory compliance. Our governance structure ensures
                accountability to shareholders, regulators and the communities in which we
                operate.
              </p>
            </div>
            <div className="relative h-72 w-full overflow-hidden rounded-xl lg:h-80">
              <Image
                src="/headers/governance.jpg"
                alt="Proplastics boardroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-brand-950">
              Board of Directors
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-600">
              Providing expert strategic oversight to ensure sustainable corporate growth and
              investor alignment.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink-100 transition-shadow hover:shadow-md"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-ink-100">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover object-[50%_20%] grayscale transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-sm font-bold uppercase leading-tight text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-flow-500">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="line-clamp-3 text-sm leading-relaxed text-ink-600">
                      {member.bio}
                    </p>
                    <button className="mt-3 text-xs font-bold uppercase tracking-wide text-flow-600 hover:text-flow-700">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ISO Certifications */}
          <div className="mt-16 border-t border-ink-100 pt-16">
            <h3 className="text-2xl font-bold tracking-tight text-brand-950">
              ISO Certifications
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-600">
              Our manufacturing operations are certified to internationally recognised standards
              of quality, environmental and safety management.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {isoCertifications.map((cert) => (
                <div
                  key={cert.code}
                  className="flex items-center gap-4 rounded-md border border-ink-200 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-950">{cert.code}</p>
                    <p className="text-sm text-ink-600">{cert.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
