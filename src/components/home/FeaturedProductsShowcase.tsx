import { FiArrowRight } from "react-icons/fi";

type Product = {
  id: string;
  name: string;
  subtitle?: string;
  image: string; // from /public/images
  tag?: string;
};

const PRODUCTS: Product[] = [
  {
    id: "dh767",
    name: "Power Sprayer",
    subtitle: "DH 767 • High performance",
    image: "/images/dh767.png",
    tag: "Top Pick",
  },
  {
    id: "3wf-3",
    name: "Mist Duster",
    subtitle: "3WF-3 • Efficient coverage",
    image: "/images/3wf-3.png",
    tag: "Popular",
  },
  {
    id: "blue-sprayer",
    name: "Hand Sprayer",
    subtitle: "Portable spraying solution",
    image: "/images/blue-sprayer.png",
  },
  {
    id: "06",
    name: "Battery Sprayer",
    subtitle: "Daily field operations",
    image: "/images/06.png",
  },
  {
    id: "solar-red",
    name: "Solar Electric Fence",
    subtitle: "Portable solar unit",
    image: "/images/solar-red.png",
  },
  {
    id: "solar-set",
    name: "Solar Tube Well",
    subtitle: "Solar pump set",
    image: "/images/solar-set.png",
  },
  {
    id: "green-seeder",
    name: "Seed Planter",
    subtitle: "Fast plantation workflow",
    image: "/images/green-seeder.png",
  },
];

export default function FeaturedProductsShowcase() {
  const hero = PRODUCTS[0];
  const tiles = PRODUCTS.slice(1, 7);

  return (
    <section className="bg-white">
      <div className="container-base py-16 md:py-20">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--dark)]">
              Best Sellers & New Arrivals
            </h2>
            <p className="mt-3 text-[var(--muted)] max-w-2xl">
              Handpicked equipment trusted for agriculture and daily operations.
              Explore the range and find the right fit.
            </p>
          </div>

          <a
            href="/shop"
            className="inline-flex items-center gap-2 font-semibold text-[var(--dark)] hover:text-[var(--primary)] transition mt-4 md:mt-0"
          >
            View all products <FiArrowRight />
          </a>
        </div>

        {/* Desktop / Tablet layout */}
        <div className="mt-10 hidden lg:grid grid-cols-12 gap-6">
          {/* BIG FEATURE */}
          <div className="col-span-5 rounded-3xl border border-[var(--border)] overflow-hidden bg-[var(--bg)] relative">
            {/* accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]" />

            <div className="p-7">
              {hero.tag && (
                <span className="inline-flex rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 px-3 py-1 text-xs font-semibold">
                  {hero.tag}
                </span>
              )}

              <h3 className="mt-4 text-2xl font-bold text-[var(--dark)]">
                {hero.name}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{hero.subtitle}</p>

              <div className="mt-6 flex gap-3">
                <a
                  href={`/shop/${hero.id}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Details <FiArrowRight />
                </a>

                <a
                  href="/shop"
                  className="rounded-[var(--radius)] border border-[var(--border)] px-5 py-3 font-semibold text-[var(--dark)] hover:bg-black/[0.03] transition"
                >
                  Browse Shop
                </a>
              </div>
            </div>

            <div className="px-7 pb-7">
              <div className="relative h-[340px] rounded-2xl bg-white border border-[var(--border)] grid place-items-center overflow-hidden">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="h-[290px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                  loading="lazy"
                />
                {/* subtle glow */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--primary)]/15 blur-3xl" />
              </div>
            </div>
          </div>

          {/* TILE GRID */}
          <div className="col-span-7 grid grid-cols-3 gap-6">
            {tiles.map((p) => (
              <a
                key={p.id}
                href={`/shop/${p.id}`}
                className="group rounded-3xl border border-[var(--border)] bg-white hover:-translate-y-1 hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative bg-[var(--bg)] h-[170px] grid place-items-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[130px] w-auto object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.12)] group-hover:scale-[1.03] transition"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]/70 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-[var(--dark)] leading-tight">
                    {p.name}
                  </h4>
                  {p.subtitle && (
                    <p className="mt-1 text-xs text-[var(--muted)] line-clamp-2">
                      {p.subtitle}
                    </p>
                  )}

                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] opacity-0 group-hover:opacity-100 transition">
                    View <FiArrowRight />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile / Small screens */}
        <div className="mt-8 lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {PRODUCTS.map((p) => (
              <a
                key={p.id}
                href={`/shop/${p.id}`}
                className="snap-start min-w-[240px] rounded-3xl border border-[var(--border)] bg-white overflow-hidden"
              >
                <div className="relative bg-[var(--bg)] h-[170px] grid place-items-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[130px] w-auto object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.12)]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]/70" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[var(--dark)]">{p.name}</h4>
                  {p.subtitle && (
                    <p className="mt-1 text-xs text-[var(--muted)] line-clamp-2">
                      {p.subtitle}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
