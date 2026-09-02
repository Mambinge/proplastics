export type Resource = {
  title: string;
  type: "Datasheet" | "Installation Guide" | "Standards & Compliance" | "Certificate";
  categorySlug: string;
  format: "PDF";
  size: string;
};

export const resources: Resource[] = [
  { title: "mPVC Pressure Pipe — Technical Datasheet", type: "Datasheet", categorySlug: "proflo", format: "PDF", size: "1.2 MB" },
  { title: "uPVC Pressure Pipe — Pressure Rating Tables", type: "Datasheet", categorySlug: "proflo", format: "PDF", size: "0.9 MB" },
  { title: "Minetuff Pipe — Technical Datasheet", type: "Datasheet", categorySlug: "proflo", format: "PDF", size: "1.4 MB" },
  { title: "HDPE Poly Pipe — SANS 4427 Datasheet", type: "Datasheet", categorySlug: "proflo", format: "PDF", size: "1.1 MB" },
  { title: "HDPE Poly Pipe — Butt-Welding Installation Guide", type: "Installation Guide", categorySlug: "proflo", format: "PDF", size: "2.6 MB" },
  { title: "Pressure Fittings — Product Range Datasheet", type: "Datasheet", categorySlug: "proflo", format: "PDF", size: "1.3 MB" },
  { title: "cPVC Hot & Cold Water Solution — Chemical Resistance & Temperature Datasheet", type: "Datasheet", categorySlug: "proflo", format: "PDF", size: "1.2 MB" },
  { title: "Sewer Pipe — Installation Guide", type: "Installation Guide", categorySlug: "prodrain", format: "PDF", size: "2.1 MB" },
  { title: "Sewer Fittings — Product Range Datasheet", type: "Datasheet", categorySlug: "prodrain", format: "PDF", size: "1.3 MB" },
  { title: "ProTank Vertical — Installation & Siting Guide", type: "Installation Guide", categorySlug: "protank", format: "PDF", size: "1.9 MB" },
  { title: "ProTank Range — SANS 1731 Certificate", type: "Certificate", categorySlug: "protank", format: "PDF", size: "0.5 MB" },
];

export const resourceTypes = ["Datasheet", "Installation Guide", "Standards & Compliance", "Certificate"] as const;
