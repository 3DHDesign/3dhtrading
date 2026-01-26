// src/components/product/ProductSummary.tsx
import { useMemo, useState } from "react";
import {
  FiPhoneCall,
  FiMessageCircle,
  FiCheckCircle,
  FiTag,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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
    rounded-2xl bg-[#25D366] px-6 py-3.5
    font-semibold text-white
    shadow-[0_10px_24px_rgba(37,211,102,0.35)]
    hover:bg-[#1EBE5D]
    active:scale-[0.99]
    transition
  "
  aria-label="Buy now on WhatsApp"
  title="Buy now on WhatsApp"
>
  <FaWhatsapp className="text-xl" />
  <span>Buy Now</span>
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
    
    </div>
  );
}
