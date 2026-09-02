import { Clock, Settings, ShieldCheck, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: Clock,
    number: "60+ Years",
    label: "Industry Experience",
  },
  {
    icon: Settings,
    number: "500+",
    label: "Products in Range",
  },
  {
    icon: ShieldCheck,
    number: "60 Years",
    label: "Pipe Guarantee",
  },
  {
    icon: Award,
    number: "12 Years",
    label: "Product Guarantee",
  },
  {
    icon: MapPin,
    number: "5",
    label: "Branches in Zimbabwe",
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-gradient-to-r from-flow-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-flow-50">
                <stat.icon className="h-6 w-6 text-flow-600" />
              </div>
              <p className="font-display text-3xl font-extrabold text-brand-950">
                {stat.number}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-ink-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
