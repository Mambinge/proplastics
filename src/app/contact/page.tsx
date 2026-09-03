import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/contact/ContactForm";
import BranchLocator from "@/components/contact/BranchLocator";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Proplastics for technical specification support, sales enquiries, distributor information or investor relations.",
};

const channels = [
  { icon: Phone, label: "Phone", value: "+263 242 621651-5" },
  { icon: Mail, label: "Sales Enquiries", value: "sales@proplastics.co.zw" },
  { icon: Mail, label: "Billing & Accounts", value: "billing@proplastics.co.zw" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri, 8:00 – 17:00" },
  { icon: MapPin, label: "Head Office", value: "5 Spurn Road, New Ardbennie, Harare" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        description="We're here to help. Reach out to us for enquiries, support, or to learn more about our piping solutions."
        crumbs={[{ label: "Contact Us" }]}
        bgImage="/headers/contact.png"
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-xl font-bold text-brand-950">Get in touch</h2>
              <div className="mt-6 space-y-5">
                {channels.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-flow-50 text-flow-600">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        {c.label}
                      </p>
                      <p className="mt-0.5 font-semibold text-brand-950">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <WhatsAppButton
                  label="Chat with us on WhatsApp"
                  message="Hi Proplastics, I'd like to make an enquiry."
                  className="w-full"
                />
              </div>

              <div className="mt-6 rounded-md border border-ink-200 bg-ink-50 p-6">
                <p className="text-sm font-bold text-brand-950">Looking for a distributor?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Proplastics products are distributed through hardware and building supply
                  partners across Zimbabwe and the wider SADC region. Send us your location and
                  we&apos;ll point you to the nearest stockist.
                </p>
              </div>
            </div>

            <div className="rounded-md border border-ink-200 p-8">
              <h2 className="text-xl font-bold text-brand-950">Send an enquiry</h2>
              <p className="mt-2 text-sm text-ink-600">
                Fields marked required help us route your enquiry faster.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16">
        <Container>
          <h2 className="text-xl font-bold text-brand-950">Our branches</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-600">
            Select a branch to view its location on the map.
          </p>
          <div className="mt-6">
            <BranchLocator />
          </div>
        </Container>
      </section>

      <CTASection
        title="Prefer to speak with our technical team directly?"
        description="For urgent specification queries, call our head office or reach us on WhatsApp."
        secondaryLabel="View technical resources"
      />
    </>
  );
}
