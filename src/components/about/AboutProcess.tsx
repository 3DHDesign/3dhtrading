import type React from "react";
import { FiCheckCircle, FiTarget, FiTruck, FiHeadphones } from "react-icons/fi";

type Step = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const STEPS: Step[] = [
  {
    title: "Understand your requirement",
    desc: "We review your use case, location, and workload before recommending.",
    Icon: FiCheckCircle,
  },
  {
    title: "Recommend the right model",
    desc: "We suggest equipment based on performance and suitability — not upselling.",
    Icon: FiTarget,
  },
  {
    title: "Reliable supply & delivery",
    desc: "Clear timelines with careful handling and islandwide availability.",
    Icon: FiTruck,
  },
  {
    title: "After-sales support",
    desc: "Guidance, spares, and follow-up when you need it.",
    Icon: FiHeadphones,
  },
];

export default function AboutProcess() {
  return (
    <section className="bg-[var(--bg)] py-14 md:py-20">
      <div className="container-base">
        <div className="max-w-3xl">
          <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
            How we work
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--dark)]">
            Simple process. Strong support.
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            We keep it straightforward — understand your need, recommend the right model,
            supply reliably, and support after delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {STEPS.map(({ title, desc, Icon }, idx) => (
            <div
              key={title}
              className="relative rounded-2xl border border-[var(--border)] bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-[var(--primary)]/10 grid place-items-center">
                  <Icon className="text-[var(--primary)]" />
                </div>
                <div className="text-xs font-bold text-[var(--muted)]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className="mt-4 font-bold text-[var(--dark)]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                {desc}
              </p>

              <div className="mt-5 h-[2px] w-12 bg-[var(--primary)]/70 rounded-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-[22px] border border-[var(--border)] bg-white p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--dark)]">
              Need help choosing the right equipment?
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Tell us your requirement — we’ll recommend suitable options and assist you.
            </p>
          </div>

          <div className="flex gap-3">
            <a href="/shop" className="btn-primary">
              Explore Products
            </a>
            <a
              href="/contact"
              className="rounded-[var(--radius)] border border-black/10 px-5 py-3 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
