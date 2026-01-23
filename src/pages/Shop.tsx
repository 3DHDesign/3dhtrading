import { useMemo, useState } from "react";
import ShopHero from "../components/shop/ShopHero";
import ShopFilters from "../components/shop/ShopFilters";
import ProductGrid from "../components/shop/ProductGrid";
import { PRODUCTS, type ProductCategory } from "../data/products";

export default function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [sort, setSort] = useState<"Popular" | "New" | "A-Z">("Popular");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (category !== "All") list = list.filter((p) => p.category === category);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sort === "Popular") {
      list.sort((a, b) => Number(Boolean(b.isPopular)) - Number(Boolean(a.isPopular)));
    } else if (sort === "New") {
      list.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [query, category, sort]);

  return (
    <main>
      <ShopHero />
      <div className="pb-2">
        <ShopFilters
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
      </div>

      <ProductGrid items={filtered} />

      {/* Bottom help strip */}
      <section className="bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="container-base py-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-[var(--dark)]">
              Not sure what to pick?
            </h3>
            <p className="mt-1 text-[var(--muted)]">
              Tell us your use-case — we’ll recommend the right product.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="btn-primary px-6 py-3 text-center">
              Get Recommendation
            </a>
            <a
              href="tel:0777680683"
              className="rounded-[var(--radius)] border border-black/10 bg-white px-6 py-3 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
