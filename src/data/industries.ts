export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  relatedCategories: string[];
};

export const industries: Industry[] = [
  {
    slug: "water-sanitation",
    name: "Water & Sanitation",
    tagline: "Reliable conveyance for the water Africa depends on.",
    summary:
      "From municipal reticulation to rural boreholes, our Proflo and Prodrain ranges are engineered to move water safely and hold pressure over decades of service.",
    challenges: [
      "Aging municipal networks needing durable replacement pipe",
      "Borehole and groundwater schemes in remote areas",
      "Sewer and waste networks requiring long-term structural integrity",
    ],
    solutions: [
      "Pressure-rated uPVC and mPVC reticulation pipe",
      "Submersible pumps engineered for borehole and groundwater supply",
      "Sewer, soil, waste and vent systems built to standard",
    ],
    relatedCategories: ["proflo", "prodrain", "protank"],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    tagline: "Built for irrigation across every terrain and season.",
    summary:
      "Commercial farms and smallholders alike rely on our Irrigation range for drip, sprinkler and pivot systems, and Protank for reliable on-farm water storage.",
    challenges: [
      "Variable terrain and long pipe runs to the field",
      "UV exposure and seasonal temperature swings",
      "Need for flexible, low-maintenance storage and distribution",
    ],
    solutions: [
      "HDPE lateral pipe, drip kits, pivots and sprinklers for every field layout",
      "ProTank storage tanks for irrigation reserves",
      "Pumps matched to borehole and bulk transfer requirements",
    ],
    relatedCategories: ["irrigation", "protank", "proflo"],
  },
  {
    slug: "infrastructure-construction",
    name: "Infrastructure & Construction",
    tagline: "Foundational piping for the buildings and roads we share.",
    summary:
      "Contractors and developers specify our Proflo pressure range and Prodrain soil-waste-vent systems for projects that need to pass inspection and last the life of the structure.",
    challenges: [
      "Compliance with plumbing and drainage standards on site",
      "Coordinating multiple trades against a fixed build programme",
      "Material performance across in-ground and above-ground use",
    ],
    solutions: [
      "Pressure fittings and cPVC hot & cold water solutions for complex site runs",
      "Soil, waste and vent (SWV) systems for residential and commercial builds",
      "Subsoil and stormwater drainage fittings for below-ground networks",
    ],
    relatedCategories: ["proflo", "prodrain"],
  },
  {
    slug: "mining-industrial",
    name: "Mining & Industrial",
    tagline: "Engineered to handle abrasive, high-demand environments.",
    summary:
      "Minetuff and heavy-duty ranges are built for the pressures, abrasion and chemical exposure typical of mining and industrial process environments.",
    challenges: [
      "Abrasive slurry and tailings conveyance",
      "High-pressure dewatering and process lines",
      "Harsh, remote sites with limited maintenance access",
    ],
    solutions: [
      "Minetuff heavy-duty pipe for slurry and dewatering",
      "cPVC hot & cold water solution for elevated-temperature chemical process lines",
      "Reinforced hoses for dragline, suction and process fluid transfer",
    ],
    relatedCategories: ["proflo"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
