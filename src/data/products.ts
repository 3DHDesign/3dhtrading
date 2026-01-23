export type ProductCategory =
  | "Sprayers"
  | "Solar & Power"
  | "Water & Irrigation"
  | "Seeding & Plantation"
  | "Industrial & Workshop"
  | "Accessories";

export type ProductSpec = { key: string; value: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  short: string;
  images: string[]; // from public/images/...
  highlights: string[];
  specs: ProductSpec[];
  tags?: string[]; // small chips
  isNew?: boolean;
  isPopular?: boolean;
};

export const CATEGORIES: ProductCategory[] = [
  "Sprayers",
  "Solar & Power",
  "Water & Irrigation",
  "Seeding & Plantation",
  "Industrial & Workshop",
  "Accessories",
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "hand-sprayer-blue",
    name: "Hand Sprayer",
    category: "Sprayers",
    short: "Portable spraying solution for daily farm use.",
    images: ["/images/blue-sprayer.png"],
    highlights: ["Lightweight & easy to carry", "Smooth pumping", "Ideal for small fields"],
    specs: [
      { key: "Use", value: "General spraying" },
      { key: "Support", value: "After-sales available" },
      { key: "Spare parts", value: "Available" },
    ],
    tags: ["Portable", "Farmer choice"],
    isPopular: true,
  },
  {
    id: "p2",
    slug: "battery-sprayer-06",
    name: "Battery Sprayer",
    category: "Sprayers",
    short: "Convenient spraying with battery-powered operation.",
    images: ["/images/06.png"],
    highlights: ["Less manual effort", "Consistent spray output", "Good for medium usage"],
    specs: [
      { key: "Use", value: "Medium-area spraying" },
      { key: "Support", value: "After-sales available" },
      { key: "Spare parts", value: "Available" },
    ],
    tags: ["Battery", "Convenient"],
    isNew: true,
  },
  {
    id: "p3",
    slug: "mist-duster-3wf-3",
    name: "Mist Duster (3WF-3)",
    category: "Sprayers",
    short: "Efficient coverage for plantation and agricultural spraying.",
    images: ["/images/3wf-3.png"],
    highlights: ["Efficient misting", "Reliable engine performance", "Built for field work"],
    specs: [
      { key: "Use", value: "Plantation & field spraying" },
      { key: "Support", value: "After-sales available" },
      { key: "Spare parts", value: "Available" },
    ],
    tags: ["High coverage", "Field use"],
    isPopular: true,
  },
  {
    id: "p4",
    slug: "power-sprayer-dh767",
    name: "Power Sprayer (DH 767)",
    category: "Sprayers",
    short: "High performance sprayer for demanding operations.",
    images: ["/images/dh767.png"],
    highlights: ["High performance", "Stable build", "Suitable for heavy usage"],
    specs: [
      { key: "Use", value: "Heavy-duty spraying" },
      { key: "Support", value: "After-sales available" },
      { key: "Spare parts", value: "Available" },
    ],
    tags: ["Heavy duty", "Pro grade"],
    isPopular: true,
  },
  {
    id: "p5",
    slug: "solar-portable-red",
    name: "Portable Solar Unit",
    category: "Solar & Power",
    short: "Portable solar power for field operations.",
    images: ["/images/solar-red.png"],
    highlights: ["Portable", "Useful for remote areas", "Reliable power support"],
    specs: [
      { key: "Use", value: "Portable power" },
      { key: "Support", value: "After-sales available" },
    ],
    tags: ["Solar", "Portable"],
  },
  {
    id: "p6",
    slug: "solar-pump-set",
    name: "Solar Tube Well Set",
    category: "Solar & Power",
    short: "Solar-driven water solution for agricultural use.",
    images: ["/images/solar-set.png"],
    highlights: ["Solar powered", "Reliable water support", "Field-ready setup"],
    specs: [
      { key: "Use", value: "Water pumping" },
      { key: "Support", value: "After-sales available" },
    ],
    tags: ["Solar", "Water"],
    isPopular: true,
  },
  {
    id: "p7",
    slug: "seed-planter-green",
    name: "Seed Planter",
    category: "Seeding & Plantation",
    short: "Fast plantation workflow support.",
    images: ["/images/green-seeder.png"],
    highlights: ["Faster planting", "Practical for fields", "Simple handling"],
    specs: [
      { key: "Use", value: "Seeding/plantation" },
      { key: "Support", value: "After-sales available" },
    ],
    tags: ["Plantation", "Fast"],
  },
  {
    id: "p8",
    slug: "air-compressor-1",
    name: "Air Compressor",
    category: "Industrial & Workshop",
    short: "Professional-grade workshop equipment.",
    images: ["/images/compressor-1.png"],
    highlights: ["Workshop ready", "Stable build", "Daily operations support"],
    specs: [
      { key: "Use", value: "Workshop / industrial" },
      { key: "Support", value: "After-sales available" },
    ],
    tags: ["Workshop", "Industrial"],
  },
  {
    id: "p9",
    slug: "air-compressor-2",
    name: "Air Compressor (Model 2)",
    category: "Industrial & Workshop",
    short: "Reliable compressor for workshop operations.",
    images: ["/images/compressor-2.png"],
    highlights: ["Reliable performance", "Practical daily use", "Service support available"],
    specs: [
      { key: "Use", value: "Workshop / industrial" },
      { key: "Support", value: "After-sales available" },
    ],
    tags: ["Workshop", "Service"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
