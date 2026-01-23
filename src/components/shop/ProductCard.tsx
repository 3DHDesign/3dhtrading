import { Link } from "react-router-dom";
import type { Product } from "../../data/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group rounded-[20px] border border-[var(--border)] bg-white overflow-hidden hover:shadow-sm transition">
      <Link to={`/shop/${p.slug}`} className="block">
        <div className="relative bg-[var(--bg)] p-5">
          {/* subtle corner accent */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--primary)]/10" />
          <img
            src={p.images[0]}
            alt={p.name}
            className="mx-auto h-[190px] w-auto object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.10)] group-hover:scale-[1.02] transition"
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-[var(--dark)]">{p.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
                {p.short}
              </p>
            </div>

            {(p.isNew || p.isPopular) && (
              <span
                className={[
                  "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold border",
                  p.isNew
                    ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/10"
                    : "border-black/10 text-black/70 bg-black/5",
                ].join(" ")}
              >
                {p.isNew ? "New" : "Popular"}
              </span>
            )}
          </div>

          {/* chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {(p.tags ?? []).slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* actions */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <span className="btn-primary text-center py-3">View Details</span>
            <a
              href="/contact"
              className="rounded-[var(--radius)] border border-black/10 py-3 text-center font-semibold text-[var(--dark)] hover:bg-black/5 transition"
              onClick={(e) => e.preventDefault()}
            >
              Get Quote
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}
