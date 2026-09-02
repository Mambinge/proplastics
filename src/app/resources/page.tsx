import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import { resources } from "@/data/resources";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "Datasheets, pressure ratings, installation guides and compliance certificates for every Proplastics product range — open and downloadable.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Resources"
        title="The technical library, open to everyone who specifies."
        description="Datasheets, pressure ratings, standards compliance and installation guidance — no gatekeeping, no sales form required to browse."
        crumbs={[{ label: "Technical Resources" }]}
        bgImage="/headers/products.jpg"
      />

      <section className="bg-white py-16">
        <Container>
          <ResourceLibrary resources={resources} categories={productCategories} />
        </Container>
      </section>

      <CTASection
        title="Need a document that isn't listed?"
        description="Reach out to our technical team — we can supply CAD drawings, custom fabrication specs, and additional compliance paperwork on request."
      />
    </>
  );
}
