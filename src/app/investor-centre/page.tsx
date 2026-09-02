import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Investor Centre",
  description:
    "Financial results, SENS announcements and governance information for Proplastics Limited, listed on the Zimbabwe Stock Exchange.",
};

const reports = [
  { title: "Annual Report", period: "Latest financial year", type: "Annual Report" },
  { title: "Interim Financial Results", period: "Latest half-year", type: "Interim Results" },
  { title: "Notice of Annual General Meeting", period: "Latest AGM", type: "AGM Notice" },
];

const announcements = [
  { title: "Cautionary announcement", date: "Placeholder date" },
  { title: "Trading update", date: "Placeholder date" },
  { title: "Board changes announcement", date: "Placeholder date" },
];

export default function InvestorCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Centre"
        title="Financial information for Proplastics Limited shareholders."
        description="Proplastics Limited is listed on the Zimbabwe Stock Exchange. This section will host financial reports, SENS announcements and governance documentation."
        crumbs={[{ label: "Investor Centre" }]}
        bgImage="/headers/investor-centre.jpg"
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-brand-950">Financial reports</h2>
              <div className="mt-5 divide-y divide-ink-100 rounded-md border border-ink-200">
                {reports.map((r) => (
                  <a
                    key={r.title}
                    href="#"
                    className="flex items-center justify-between gap-4 p-5 hover:bg-ink-50"
                  >
                    <div>
                      <p className="font-semibold text-brand-950">{r.title}</p>
                      <p className="mt-0.5 text-xs text-ink-500">{r.period}</p>
                    </div>
                    <FileDown className="h-5 w-5 text-ink-400" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-950">SENS announcements</h2>
              <div className="mt-5 divide-y divide-ink-100 rounded-md border border-ink-200">
                {announcements.map((a) => (
                  <div key={a.title} className="flex items-center justify-between gap-4 p-5">
                    <p className="font-semibold text-brand-950">{a.title}</p>
                    <p className="text-xs text-ink-500">{a.date}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-500">
                This section is a placeholder — replace with live SENS filings and finalised
                reporting periods before launch.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Investor queries"
        description="For shareholder or investor relations queries, contact our company secretariat directly."
        primaryLabel="Contact investor relations"
        secondaryLabel="View technical resources"
      />
    </>
  );
}
