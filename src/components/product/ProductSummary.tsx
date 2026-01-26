// src/components/product/ProductSummary.tsx
import { useMemo, useState } from "react";
import {
  FiPhoneCall,
  FiMessageCircle,
  FiCheckCircle,
  FiTag,
} from "react-icons/fi";

type Product = {
  slug: string;
  name: string;
  category: string;
  shortCategory?: string; // optional label if you have it
  tagline?: string; // optional short subtitle
  highlights?: string[]; // optional bullet points
  sku?: string; // optional
};

export default function ProductSummary({ p }: { p: Product }) {
  const [qty, setQty] = useState(1);
  const [useCase, setUseCase] = useState("");
  const [district, setDistrict] = useState("");
  const [delivery, setDelivery] = useState<"Colombo" | "Kurunegala" | "Other">(
    "Colombo"
  );

  const phone = "0777680683";

  // If you want different numbers per branch later:
  // const branchPhones = { Colombo: "0777680683", Kurunegala: "07xxxxxxxx" };

  const waMessage = useMemo(() => {
    const lines = [
      `Hi 3DH Trading, I’d like to buy / request a quote.`,
      ``,
      `Product: ${p.name}`,
      `Qty: ${qty}`,
      `Category: ${p.category}`,
      delivery ? `Preferred branch: ${delivery}` : "",
      district ? `District/Area: ${district}` : "",
      useCase ? `Use case: ${useCase}` : "",
      ``,
      `Please send price + availability + delivery details.`,
    ].filter(Boolean);

    return lines.join("\n");
  }, [p.name, p.category, qty, useCase, district, delivery]);

  const waLink = useMemo(() => {
    // WhatsApp wa.me works best with country code. Sri Lanka = 94 (remove leading 0)
    // 0777680683 -> 94777680683
    const waNumber = `94${phone.replace(/^0/, "")}`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  }, [waMessage, phone]);

  const label = p.shortCategory ?? p.category;
  const tagline =
    p.tagline ?? "Efficient coverage built for real-world field operations.";
  const bullets =
    p.highlights ?? [
      "Efficient performance for daily use",
      "Reliable build quality",
      "Guidance & after-sales support",
    ];

  return (
    <div className="rounded-[22px] border border-[var(--border)] bg-white p-6 md:p-8">
      {/* Top label */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold text-[var(--dark)]">
          <FiTag className="text-[var(--primary)]" />
          <span className="uppercase tracking-widest">{label}</span>
        </div>

        {p.sku ? (
          <div className="text-xs text-[var(--muted)]">
            SKU: <span className="font-semibold text-[var(--dark)]">{p.sku}</span>
          </div>
        ) : null}
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--dark)] leading-tight">
        {p.name}
      </h1>
      <p className="mt-3 text-[var(--muted)] text-base md:text-lg">{tagline}</p>

      {/* Bullet points */}
      <ul className="mt-5 space-y-2.5">
        {bullets.slice(0, 3).map((b, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[var(--text)]">
            <FiCheckCircle className="mt-0.5 text-[var(--primary)]" />
            <span className="text-sm md:text-[15px] leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            rounded-2xl bg-[var(--primary)] px-6 py-3.5
            font-semibold text-white
            shadow-[0_10px_24px_rgba(236,0,140,0.25)]
            hover:opacity-95 active:scale-[0.99] transition
          "
        >
          <FiMessageCircle className="text-lg" />
          Buy Now (WhatsApp)
        </a>

        <a
          href={`tel:${phone}`}
          className="
            inline-flex items-center justify-center gap-2
            rounded-2xl border border-[var(--border)] bg-white px-6 py-3.5
            font-semibold text-[var(--dark)]
            hover:bg-black/5 active:scale-[0.99] transition
          "
        >
          <FiPhoneCall className="text-lg" />
          Call Now
        </a>
      </div>

      {/* Trust row */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Reply within working hours
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          Price + delivery info on WhatsApp
        </span>
      </div>

      {/* Quick order details */}
      <div className="mt-6 rounded-2xl border border-[var(--border)] bg-gradient-to-b from-white to-[var(--bg)] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-bold text-[var(--dark)]">Need help choosing?</div>
            <div className="mt-1 text-sm text-[var(--muted)]">
              Share your crop / area / usage — we’ll recommend the correct model.
            </div>
          </div>

          {/* Qty */}
          <div className="shrink-0">
            <div className="text-xs font-semibold text-[var(--muted)] mb-2 text-right">
              Quantity
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-10 w-10 rounded-xl border border-[var(--border)] bg-white hover:bg-black/5 transition"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <div className="h-10 min-w-12 rounded-xl border border-[var(--border)] bg-white grid place-items-center font-semibold text-[var(--dark)]">
                {qty}
              </div>

              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="h-10 w-10 rounded-xl border border-[var(--border)] bg-white hover:bg-black/5 transition"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {/* Branch */}
          <div>
            <label className="text-xs font-semibold text-[var(--muted)]">
              Preferred branch
            </label>
            <select
              value={delivery}
              onChange={(e) =>
                setDelivery(e.target.value as "Colombo" | "Kurunegala" | "Other")
              }
              className="
                mt-2 w-full rounded-xl border border-[var(--border)]
                bg-white px-4 py-3 text-sm text-[var(--dark)]
                outline-none focus:border-[var(--primary)]
                focus:ring-4 focus:ring-[var(--primary)]/10
              "
            >
              <option value="Colombo">Colombo</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label className="text-xs font-semibold text-[var(--muted)]">
              District / Area
            </label>
            <input
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Eg: Kurunegala, Dambulla..."
              className="
                mt-2 w-full rounded-xl border border-[var(--border)]
                bg-white px-4 py-3 text-sm text-[var(--dark)]
                placeholder:text-black/35
                outline-none focus:border-[var(--primary)]
                focus:ring-4 focus:ring-[var(--primary)]/10
              "
            />
          </div>

          {/* Use case */}
          <div>
            <label className="text-xs font-semibold text-[var(--muted)]">
              Use case
            </label>
            <input
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              placeholder="Eg: Paddy, vegetables, plantation..."
              className="
                mt-2 w-full rounded-xl border border-[var(--border)]
                bg-white px-4 py-3 text-sm text-[var(--dark)]
                placeholder:text-black/35
                outline-none focus:border-[var(--primary)]
                focus:ring-4 focus:ring-[var(--primary)]/10
              "
            />
          </div>
        </div>

        {/* Mobile-friendly quick send */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl bg-[var(--dark)] px-5 py-3
              font-semibold text-white
              hover:opacity-95 transition
            "
          >
            <FiMessageCircle />
            Send Details on WhatsApp
          </a>

          <a
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-2xl border border-[var(--border)]
              bg-white px-5 py-3 font-semibold text-[var(--dark)]
              hover:bg-black/5 transition
            "
          >
            Request Quote Form
          </a>
        </div>

        {/* Preview only on desktop (avoid clutter) */}
        <div className="mt-4 hidden md:block rounded-xl border border-[var(--border)] bg-white p-3 text-xs text-[var(--muted)] whitespace-pre-line">
          {waMessage}
        </div>
      </div>
    </div>
  );
}
