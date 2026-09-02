export type Product = {
  slug: string;
  name: string;
  summary: string;
  sizeRange: string;
  standard: string;
  industries: string[];
  applications: string[];
  material?: string;
  pressureClass?: string;
  sdr?: string;
  standardLength?: string;
  jointType?: string;
  colour?: string;
  features?: string[];
  rangeItems?: { name: string; note: string }[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  shortName: string;
  icon: "pipe" | "droplets" | "wrench" | "container" | "flask" | "drain";
  summary: string;
  applications: string[];
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "proflo",
    name: "Proflo",
    shortName: "Proflo",
    icon: "pipe",
    summary:
      "Proplastics' core pressure-pipe and fitting brand — mPVC, uPVC, HDPE and cPVC systems engineered for potable water reticulation, hot & cold plumbing and industrial process lines, backed by a matched range of fittings, hoses and pumps.",
    applications: ["Water reticulation", "Hot & cold plumbing", "Pressure systems", "Mining conveyance"],
    products: [
      {
        slug: "mpvc-pressure-pipe",
        name: "mPVC Pressure Pipe",
        summary:
          "Impact-modified PVC (mPVC) pressure pipe delivering durable, ductile pipe systems for potable water distribution, irrigation, municipal reticulation, ducting and infrastructure networks. As an end-to-end solutions provider, Proplastics supports every installation with matched fittings, valves, bends, tees and pumps.",
        sizeRange: "20mm – 500mm",
        standard: "SANS 966-2",
        material: "mPVC",
        pressureClass: "PN6 – PN16 (PN20 – PN25 available on demand)",
        standardLength: "6 m",
        jointType: "Solvent Weld / Rubber Ring",
        colour: "Light Blue",
        industries: ["water-sanitation", "agriculture", "mining-industrial", "infrastructure-construction"],
        applications: ["Water reticulation"],
        features: ["Higher impact resistance", "UV protection", "Improved flexibility", "Excellent pressure performance", "Long service life"],
      },
      {
        slug: "upvc-pressure-pipe",
        name: "uPVC Pressure Pipe",
        summary:
          "Rigid, lightweight, corrosion-resistant uPVC pressure pipe for water supply, plumbing, irrigation and infrastructure projects. Commonly specified for smaller-bore installations, uPVC can also be supplied for medium to larger bore pipes where project requirements call for it.",
        sizeRange: "20mm – 500mm",
        standard: "SANS 966-1",
        material: "uPVC",
        pressureClass: "PN4 – PN16 (PN20 – PN25 available on demand)",
        standardLength: "6 m",
        jointType: "Solvent Weld / Rubber Ring",
        colour: "Dark Blue",
        industries: ["water-sanitation", "agriculture", "mining-industrial", "infrastructure-construction"],
        applications: ["Water reticulation"],
        features: ["Rigid", "Corrosion resistant", "Lightweight", "Smooth bore"],
      },
      {
        slug: "pressure-fittings",
        name: "Pressure Fittings",
        summary:
          "Solvent-weld and threaded fittings rated to match mPVC and uPVC pressure pipe ranges — bends, tees, couplers and valves selected to suit each application.",
        sizeRange: "20mm – 315mm",
        standard: "SANS 966",
        industries: ["water-sanitation", "infrastructure-construction"],
        applications: ["Pressure systems"],
      },
      {
        slug: "hdpe-poly-pipe",
        name: "HDPE Poly Pipe",
        summary:
          "Versatile, high-strength PE100 piping for above-ground and below-ground water, irrigation, mining, industrial, cable ducting, borehole installation and pump-connection applications. Joined by compression couplings, butt welding or flanged connections for reliable, leak-resistant performance.",
        sizeRange: "20mm – 400mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "PE100",
        pressureClass: "PN10 – PN16",
        sdr: "SDR11 – SDR17",
        standardLength: "6 m",
        jointType: "Compression couplings, Butt welding",
        colour: "Black",
        industries: ["agriculture", "mining-industrial", "infrastructure-construction", "water-sanitation"],
        applications: ["Water reticulation"],
        features: ["Flexible", "Leak free", "Corrosion resistant", "High impact resistance", "Excellent fatigue resistance"],
      },
      {
        slug: "cpvc-hot-cold-water",
        name: "cPVC Hot & Cold Water Solution",
        summary:
          "Lead-free, environmentally responsible cPVC pipe and fitting system for hot and cold-water plumbing in residential, commercial and industrial systems. Chemically inert in water service, with tested service life beyond 50 years.",
        sizeRange: "15mm – 32mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "cPVC",
        pressureClass: "12 – 16 Bar",
        standardLength: "100 m",
        jointType: "Solvent Cement / Threaded",
        colour: "White",
        industries: ["infrastructure-construction", "mining-industrial"],
        applications: ["Hot & cold plumbing"],
        features: [
          "Higher temperature resistance",
          "Corrosion resistant",
          "Excellent chemical resistance",
          "Long service life",
          "Smooth internal bore",
          "Suitable for hot and cold water distribution",
          "Reduced maintenance",
        ],
      },
      {
        slug: "hoses",
        name: "Hoses",
        summary:
          "Reinforced garden hoses, durable mine hoses and reinforced mining hoses for safe, flexible water delivery across homes, gardens, building sites, irrigation points, industrial operations and mining environments — used for water transfer, dust suppression, wash-down duties, dewatering support, compressed-air lines and slurry or abrasive fluid handling.",
        sizeRange: "15mm, 20mm, 25mm",
        standard: "Proplastics technical specification",
        industries: ["agriculture", "mining-industrial"],
        applications: ["Mining conveyance"],
        features: ["Abrasion resistant", "Flexible and easy to handle", "Compatible hose joiners and above-ground sprinklers available"],
      },
      {
        slug: "minetuff-pipe",
        name: "Minetuff Pipe",
        summary:
          "Heavy-duty mPVC pressure pipe designed for harsh mining and industrial conditions, including dewatering, slurry handling, water conveyance and vertical pipe installations. Knock-on shoulders and grip profile improve anchoring and handling in vertical applications.",
        sizeRange: "75mm – 110mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "mPVC",
        pressureClass: "PN16",
        standardLength: "6 m",
        jointType: "Flanged Joint System",
        colour: "Light Blue",
        industries: ["mining-industrial"],
        applications: ["Mining conveyance"],
        features: ["Designed for mining", "Abrasion resistant", "Chemical resistant", "High pressure", "Long service life"],
      },
      {
        slug: "pumps",
        name: "Pumps",
        summary:
          "Complete pump solutions spanning pivot irrigation pumps, submersible pumps, booster pumps, well pumps and water transfer systems for potable water movement, irrigation, mine dewatering and slurry management. Our technical team assists with pump selection and sizing based on flow rate, head, pressure and site conditions, with access to trusted models including KSB, Stanley, Doyin and Grundfos.",
        sizeRange: "Sized to flow rate, head and application",
        standard: "Manufacturer specification (KSB, Stanley, Doyin, Grundfos)",
        industries: ["agriculture", "water-sanitation", "mining-industrial"],
        applications: ["Water reticulation"],
      },
    ],
  },
  {
    slug: "irrigation",
    name: "Irrigation",
    shortName: "Irrigation",
    icon: "droplets",
    summary:
      "Complete irrigation systems — lateral pipe, drip kits, pivots and sprinklers — engineered for African terrain, water pressures and seasonal extremes.",
    applications: ["Drip irrigation", "Sprinkler irrigation", "Centre-pivot irrigation", "Above-ground irrigation"],
    products: [
      {
        slug: "hdpe-lateral-pipes",
        name: "HDPE Lateral Pipes",
        summary:
          "Flexible above-ground HDPE lateral pipe for areas with sufficient water supply — ideal for replacing theft-targeted aluminium pipe, supporting movable irrigation layouts and covering field sections centre pivots can't reach. A decoupling system allows quick connection and relocation.",
        sizeRange: "50mm, 75mm, 110mm",
        standard: "Proplastics technical specification",
        industries: ["agriculture"],
        applications: ["Above-ground irrigation"],
        features: ["Decoupling system for quick connection & relocation", "Theft-resistant alternative to aluminium pipe", "Supports movable irrigation layouts"],
      },
      {
        slug: "drip-kits",
        name: "Drip Kits",
        summary:
          "Official Metzer irrigation distributor, offering cost-effective drip irrigation kits for smallholders, gardens, horticulture, nurseries, greenhouses and commercial farming — helping conserve water, improve crop targeting and reduce labour.",
        sizeRange: "Kits sized to plot area and budget",
        standard: "Metzer irrigation systems",
        industries: ["agriculture"],
        applications: ["Drip irrigation"],
      },
      {
        slug: "pivots",
        name: "Pivots",
        summary:
          "Centre-pivot, towable and stationary pivot irrigation systems supported through the Proplastics Design Centre — an end-to-end service covering system layout, pump and pipework consideration, mechanical components and installation guidance.",
        sizeRange: "Designed to field layout",
        standard: "Design Centre specification",
        industries: ["agriculture"],
        applications: ["Centre-pivot irrigation"],
      },
      {
        slug: "sprinklers",
        name: "Sprinklers",
        summary:
          "Above-ground sprinkler systems supplied alongside the HDPE lateral pipe and hose ranges, with compatible hose joiners for a practical, cost-conscious field irrigation solution.",
        sizeRange: "Sized to hose/lateral diameter",
        standard: "Proplastics technical specification",
        industries: ["agriculture"],
        applications: ["Sprinkler irrigation"],
      },
    ],
  },
  {
    slug: "protank",
    name: "Protank",
    shortName: "Protank",
    icon: "container",
    summary:
      "Rotationally moulded polyethylene tanks, fittings and septic solutions for domestic, agricultural and industrial water storage, built for African climates.",
    applications: ["Domestic storage", "Farm reserves", "Wastewater containment"],
    products: [
      {
        slug: "protank-water-tanks",
        name: "ProTank Water Tanks",
        summary:
          "Safe, durable water storage for homes, farms, businesses, institutions and development-partner projects. Built from food-grade, UV-stabilised, algae-resistant LLDPE with a 12-year warranty, supplied with fittings for plug-and-play installation and supported with gauge monitoring, tank stands, submersible and booster pumps.",
        sizeRange: "500L – 10,000L",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "LLDPE",
        pressureClass: "6 Bar",
        colour: "Army Green (also available in grey, blue and sand)",
        industries: ["water-sanitation", "agriculture", "infrastructure-construction"],
        applications: ["Domestic storage", "Farm reserves"],
        features: [
          "UV stabilised",
          "Food-grade inner layer",
          "One-piece moulded construction",
          "Corrosion free",
          "Maintenance free",
          "Multi-layer durability",
          "Suitable for rainwater harvesting",
          "12-year warranty",
          "Keeps water cooler for longer",
          "Reduces algae growth",
        ],
      },
      {
        slug: "septic-tanks",
        name: "Septic Tanks",
        summary:
          "Complete plug-and-play septic tank and fittings solution for safe, efficient sanitation — each tank supplied with all fittings included, and interconnectable for larger capacity on high-demand sites. Suitable for new sites, event areas, developing areas, septic tank replacement and bio-digester use, with complete drainage only required every 5–12 years.",
        sizeRange: "3,000L (interconnectable for larger capacity)",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "LLDPE",
        colour: "Black",
        industries: ["water-sanitation", "infrastructure-construction"],
        applications: ["Wastewater containment"],
        features: ["Heavy-duty polyethylene construction", "Corrosion resistant", "Leak-proof one-piece design", "Underground installation", "Easy transportation", "Low maintenance"],
      },
      {
        slug: "septic-tank-fittings",
        name: "Septic Tank Fittings",
        summary:
          "Complete fitting range for Proplastics septic tanks — double sockets, SY42 connections, inspection caps, vent pipes, junctions, elbows, couplers, reducers, end caps, rubber seals and inspection chambers — compatible with all Proplastics septic tanks.",
        sizeRange: "110mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        industries: ["water-sanitation"],
        applications: ["Wastewater containment"],
        features: ["Leak-proof connections", "Corrosion resistant", "High impact strength", "Easy installation", "Long service life", "Compatible with all Proplastics septic tanks"],
        rangeItems: [
          { name: "110mm Double Socket", note: "Joins sewer pipes" },
          { name: "110mm SY42 Fitting", note: "Septic tank connection" },
          { name: "Inspection Caps", note: "Maintenance access" },
          { name: "Vent Pipes", note: "Ventilation of the system" },
          { name: "Junction Fittings", note: "Branch connections" },
          { name: "Elbows", note: "Directional changes" },
          { name: "Couplers", note: "Pipe joining" },
          { name: "Reducers", note: "Connecting different pipe sizes" },
          { name: "End Caps", note: "Sealing pipe ends" },
          { name: "Rubber Seals", note: "Leak-proof joints" },
          { name: "Inspection Chambers", note: "Access for maintenance" },
        ],
      },
      {
        slug: "water-tank-fittings",
        name: "Water Tank Fittings",
        summary:
          "Comprehensive range of water tank fittings for secure connections, efficient flow and reliable performance — designed to make installation simple and maximise the efficiency and lifespan of any Proplastics water storage system.",
        sizeRange: "Sized to tank outlet",
        standard: "Proplastics technical specification",
        industries: ["water-sanitation", "agriculture"],
        applications: ["Domestic storage", "Farm reserves"],
        features: ["Leak-proof connections", "Corrosion resistant", "UV stabilised", "Easy to install", "Durable, long service life"],
        rangeItems: [
          { name: "Tank Outlet Connectors", note: "Connects the tank to the pipework" },
          { name: "Ball Valves", note: "Water flow control" },
          { name: "Float Valves", note: "Automatic water level control" },
          { name: "Overflow Setting", note: "Prevents tank overflow" },
          { name: "Tank Adaptors", note: "Connecting tanks to pipelines" },
          { name: "Threaded Adaptors", note: "Secure threaded connections" },
          { name: "Tank Caps & Lids", note: "Protects stored water from contamination" },
          { name: "Tank Washers & Seals", note: "Leak-proof sealing" },
          { name: "Tank Outlet Elbows", note: "Directional pipe connections" },
          { name: "Tank Tees", note: "Branch connections" },
          { name: "Tank Reducers", note: "Connecting different pipe sizes" },
          { name: "Drain Valves", note: "Tank maintenance and cleaning" },
        ],
      },
    ],
  },
  {
    slug: "prodrain",
    name: "Prodrain",
    shortName: "Prodrain",
    icon: "drain",
    summary:
      "Proplastics sewer pipes are available in SWV (soil, waste & vent) and SD (soil drainage) options to suit above-ground and below-ground wastewater applications — manufactured from high-quality uPVC for reliable gravity sewer conveyance in residential, commercial, industrial and municipal networks.",
    applications: ["Sewer & drainage"],
    products: [
      {
        slug: "swv-pipe",
        name: "Soil, Waste & Vent (SWV) Pipe",
        summary:
          "Reliable drainage and ventilation pipe for residential, commercial and industrial building systems. Proper venting releases gases, maintains air pressure balance, prevents trap siphoning and supports safe, hygienic operation.",
        sizeRange: "50mm – 100mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "uPVC",
        standardLength: "6 m",
        jointType: "Fittings",
        colour: "White",
        industries: ["water-sanitation", "infrastructure-construction"],
        applications: ["Sewer & drainage"],
        features: ["Lightweight", "Easy installation", "Corrosion resistant", "Leak resistant"],
      },
      {
        slug: "sd-pipe",
        name: "Soil & Drainage (SD) Pipe",
        summary:
          "Technically sound below-ground waste reticulation pipe ensuring hygienic separation and safe conveyance of wastewater — designed for long-term structural performance, secure joint integrity and resistance to corrosion and underground seepage.",
        sizeRange: "110mm – 500mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        material: "PVC-U / PE100 / LDPE",
        sdr: "SDR51 – SDR34",
        standardLength: "6 m",
        jointType: "Solvent Weld / Rubber Ring",
        colour: "Brown",
        industries: ["water-sanitation", "infrastructure-construction"],
        applications: ["Sewer & drainage"],
        features: ["Chemical resistant", "Smooth flow", "High impact strength"],
      },
      {
        slug: "sewer-fittings",
        name: "Sewer Fittings",
        summary:
          "Total solutions provider for Soil, Waste & Vent (SWV) and Soil Drainage (SD) systems, supplying pipes and fittings from 50mm to 500mm to suit engineered drainage layouts — UV-treated white fittings for above-ground SWV, sand-coloured fittings for underground SD networks, with custom-fabricated options available.",
        sizeRange: "50mm – 500mm",
        standard: "Relevant ISO, SABS & Zimbabwean standards",
        industries: ["water-sanitation", "infrastructure-construction"],
        applications: ["Sewer & drainage"],
        features: ["Manufactured to match SWV and SD pipe systems", "Custom-fabricated options available", "Locally manufactured and available in Zimbabwe"],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  return product ? { category, product } : undefined;
}

export function allProducts() {
  return productCategories.flatMap((c) =>
    c.products.map((p) => ({ ...p, categorySlug: c.slug, categoryName: c.name }))
  );
}
