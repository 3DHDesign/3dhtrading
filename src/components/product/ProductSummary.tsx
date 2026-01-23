import { FiPhoneCall } from "react-icons/fi";
import type { Product } from "../../data/products";

export default function ProductSummary({ p }: { p: Product }) {
  return (
    <div className="rounded-[22px] border border-[var(--border)] bg-white p-6 md:p-7">
      <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
        {p.category}
      </p>

      <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
        {p.name}
      </h1>

      <p className="mt-3 text-[var(--muted)] leading-relaxed">
        {p.short}
      </p>

      <div className="mt-6 space-y-3">
        {p.highlights.slice(0, 5).map((h) => (
          <div key={h} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" />
            <p className="text-sm text-[var(--text)]">{h}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <a href="/contact" className="btn-primary py-3 text-center">
          Request Quote
        </a>
        <a
          href="tel:0777680683"
          className="inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-black/10 bg-white py-3 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
        >
          <FiPhoneCall />
          Call Now
        </a>
      </div>

      <div className="mt-5 rounded-[18px] border border-black/10 bg-[var(--bg)] p-4">
        <div className="text-sm font-semibold text-[var(--dark)]">
          Need help choosing?
        </div>
        <div className="mt-1 text-sm text-[var(--muted)]">
          Tell us your crop / area / usage — we’ll recommend the correct model.
        </div>
      </div>
    </div>
  );
}
