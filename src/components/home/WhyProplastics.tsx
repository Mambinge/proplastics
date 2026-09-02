import { Factory, MapPinned, ShieldCheck, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "60+ Years of Manufacturing Excellence",
    description:
      "Zimbabwe's only listed plastic pipe and fittings manufacturer, with decades of extrusion and moulding expertise behind every product line.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered for African Conditions",
    description:
      "Every range is designed and tested for the pressures, terrain and climate of Southern Africa — built to perform for decades, not years.",
  },
  {
    icon: MapPinned,
    title: "Proudly African, Regionally Reliable",
    description:
      "Manufactured locally in Harare and distributed through branches and export markets across Zimbabwe and the SADC region.",
  },
  {
    icon: Wrench,
    title: "Technical Support, Not Just Supply",
    description:
      "Our technical team works alongside engineers, consultants and contractors from specification through to installation.",
  },
];

export default function WhyProplastics() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-flow-600">
            Why Proplastics
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-950 lg:text-4xl">
            A trusted African industrial leader, built for the long term.
          </h2>
          <p className="leading-relaxed text-ink-600">
            We combine technical excellence, regional manufacturing and modern quality systems
            to deliver piping and fluid-handling solutions that infrastructure, agriculture and
            industry across the region can depend on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-ink-200 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-brand-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
