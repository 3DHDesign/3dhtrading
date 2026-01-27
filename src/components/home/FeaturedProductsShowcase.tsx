// src/components/home/FeaturedProductsShowcase.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { PRODUCTS as ALL_PRODUCTS } from "../../data/products";

type MiniCard = {
  slug: string;
  name: string;
  subtitle?: string;
  image: string;
  tag?: string;
};

function pickImage(images?: string[]) {
  return images?.[0] ?? "/images/placeholder.png";
}

export default function FeaturedProductsShowcase() {
  /* -------------------------
     DATA PREP
  ------------------------- */
  const curated: MiniCard[] = ALL_PRODUCTS.slice(0, 9).map((p) => ({
    slug: p.slug,
    name: p.name,
    subtitle: p.short,
    image: pickImage(p.images),
    tag: p.isPopular ? "Popular" : p.isNew ? "New" : undefined,
  }));

  // FIX: choose how many items should be in the desktop featured slider
  const featuredSlides = curated.slice(0, 6); // desktop slider (3 items)
  const tiles = curated.slice(3, 9); // grid items
  const mobileCards = curated;

  if (!featuredSlides.length) return null;

  /* -------------------------
     DESKTOP SLIDER STATE
  ------------------------- */
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % featuredSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [featuredSlides.length]);

  const goPrev = () =>
    setActive((i) => (i - 1 + featuredSlides.length) % featuredSlides.length);

  const goNext = () => setActive((i) => (i + 1) % featuredSlides.length);

  const hero = featuredSlides[active];

  /* -------------------------
     MOBILE AUTO SLIDER (4s)
  ------------------------- */
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const [ , setMobileIndex] = useState(0);

  useEffect(() => {
    const container = mobileRef.current;
    if (!container) return;
    if (!mobileCards.length) return;

    // min-w-[240px] + gap-4 (16px) => 256px total step
    const step = 240 + 16;

    const interval = setInterval(() => {
      setMobileIndex((prev) => {
        const next = (prev + 1) % mobileCards.length;

        container.scrollTo({
          left: next * step,
          behavior: "smooth",
        });

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [mobileCards.length]);

  /* -------------------------
     RENDER
  ------------------------- */
  return (
    <section>
      <div className="container-base py-16 md:py-20">
        {/* SECTION HEADER */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--text)]">
              Best Sellers & New Arrivals
            </h2>
            <p className="mt-3 text-[var(--muted)] max-w-2xl">
              Handpicked equipment trusted for agriculture and daily operations.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-semibold text-[var(--text)] hover:text-[var(--primary)] transition mt-4 md:mt-0"
          >
            View all products <FiArrowRight />
          </Link>
        </div>

        {/* =========================
            DESKTOP / WEB LAYOUT
        ========================= */}
        <div className="mt-10 hidden lg:grid grid-cols-12 gap-6">
          {/* FEATURED SLIDER */}
          <div className="col-span-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]" />

            {/* Arrows */}
            <div className="absolute right-4 top-4 z-20 flex gap-2">
              <button
                onClick={goPrev}
                className="h-10 w-10 grid place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-white/5 transition"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={goNext}
                className="h-10 w-10 grid place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-white/5 transition"
              >
                <FiArrowRight />
              </button>
            </div>

            {/* Content */}
            <div className="p-7">
              {hero.tag && (
                <span className="inline-flex rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 px-3 py-1 text-xs font-semibold">
                  {hero.tag}
                </span>
              )}

              <h3 className="mt-4 text-2xl font-bold text-[var(--text)]">
                {hero.name}
              </h3>

              {hero.subtitle && (
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-3">
                  {hero.subtitle}
                </p>
              )}

              <div className="mt-6 flex gap-3">
                <Link
                  to={`/shop/${hero.slug}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Details <FiArrowRight />
                </Link>

                <Link
                  to="/shop"
                  className="rounded-full border border-[var(--border)] px-5 py-3 font-semibold hover:bg-white/5 transition"
                >
                  Browse Shop
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="px-7 pb-7">
              <div className="relative h-[340px] rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] grid place-items-center overflow-hidden">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--primary)]/20 blur-3xl" />
                <img
                  key={hero.slug}
                  src={hero.image}
                  alt={hero.name}
                  className="h-[290px] w-auto object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,0.25)] transition"
                />
              </div>

              {/* Dots */}
              <div className="mt-5 flex justify-center gap-2">
                {featuredSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={[
                      "h-2.5 rounded-full transition-all",
                      i === active
                        ? "w-7 bg-[var(--primary)]"
                        : "w-2.5 bg-[var(--border)] hover:bg-[var(--primary)]/40",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* TILE GRID */}
          <div className="col-span-7 grid grid-cols-3 gap-6">
            {tiles.map((p) => (
              <Link
                key={p.slug}
                to={`/shop/${p.slug}`}
                className="group rounded-3xl border border-[var(--border)] hover:-translate-y-1 hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative bg-[var(--surface)] h-[170px] grid place-items-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[130px] object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.12)] group-hover:scale-[1.03] transition"
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]/70 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold leading-tight">{p.name}</h4>
                  {p.subtitle && (
                    <p className="mt-1 text-xs text-[var(--muted)] line-clamp-2">
                      {p.subtitle}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================
            MOBILE SLIDER (AUTO 4s)
        ========================= */}
        <div className="mt-8 lg:hidden">
          <div
            ref={mobileRef}
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
          >
            {mobileCards.map((p) => (
              <Link
                key={p.slug}
                to={`/shop/${p.slug}`}
                className="snap-start min-w-[240px] rounded-3xl border border-[var(--border)] overflow-hidden"
              >
                <div className="bg-[var(--surface)] h-[170px] grid place-items-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[130px] object-contain"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.name}</h4>
                  {p.subtitle && (
                    <p className="mt-1 text-xs text-[var(--muted)] line-clamp-2">
                      {p.subtitle}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
