import { useState } from "react";
import type { Product } from "../../data/products";

type Tab = "Specifications" | "Applications" | "Support";

export default function ProductTabs({ p }: { p: Product }) {
  const [tab, setTab] = useState<Tab>("Specifications");

  const tabs: Tab[] = ["Specifications", "Applications", "Support"];

  return (
    <div className="rounded-[22px] border border-[var(--border)] bg-white p-6 md:p-7">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={[
              "rounded-full px-4 py-2 text-sm border transition",
              tab === t
                ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                : "bg-white border-black/10 text-[var(--dark)] hover:bg-black/5",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "Specifications" && (
          <div className="grid gap-3">
            {p.specs.map((s) => (
              <div
                key={s.key}
                className="flex items-center justify-between gap-4 rounded-[16px] border border-black/10 bg-[var(--bg)] px-4 py-3"
              >
                <div className="text-sm font-semibold text-[var(--dark)]">{s.key}</div>
                <div className="text-sm text-[var(--muted)] text-right">{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Applications" && (
          <div className="text-sm text-[var(--muted)] leading-relaxed">
            Typical use-cases include agriculture, plantation work, and daily operations.
            If you share your use-case, we can recommend the correct model.
          </div>
        )}

        {tab === "Support" && (
          <div className="text-sm text-[var(--muted)] leading-relaxed space-y-3">
            <p>We provide guidance before buying and support after purchase.</p>
            <ul className="list-disc pl-5">
              <li>Model recommendation based on your usage</li>
              <li>After-sales service support</li>
              <li>Spare parts availability (model dependent)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
