import { FiSearch } from "react-icons/fi";
import type { ProductCategory } from "../../data/products";
import { CATEGORIES } from "../../data/products";

type Props = {
  query: string;
  setQuery: (v: string) => void;
  category: ProductCategory | "All";
  setCategory: (v: ProductCategory | "All") => void;
  sort: "Popular" | "New" | "A-Z";
  setSort: (v: "Popular" | "New" | "A-Z") => void;
};

export default function ShopFilters({
  query,
  setQuery,
  category,
  setCategory,
  sort,
  setSort,
}: Props) {
  return (
    <div className="container-base">
      <div className="rounded-[18px] border border-[var(--border)] bg-white p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="flex items-center gap-3 rounded-[14px] border border-black/10 bg-[var(--bg)] px-4 py-3 lg:w-[420px]">
            <FiSearch className="text-black/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name or model..."
              className="w-full bg-transparent outline-none text-[var(--dark)] placeholder:text-black/40"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <div className="text-sm text-[var(--muted)]">Sort:</div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Props["sort"])}
              className="rounded-[12px] border border-black/10 bg-white px-3 py-2 text-sm"
            >
              <option value="Popular">Popular</option>
              <option value="New">New</option>
              <option value="A-Z">A-Z</option>
            </select>
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("All")}
            className={[
              "rounded-full px-4 py-2 text-sm border transition",
              category === "All"
                ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                : "bg-white border-black/10 text-[var(--dark)] hover:bg-black/5",
            ].join(" ")}
          >
            All
          </button>

          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={[
                "rounded-full px-4 py-2 text-sm border transition",
                category === c
                  ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                  : "bg-white border-black/10 text-[var(--dark)] hover:bg-black/5",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
