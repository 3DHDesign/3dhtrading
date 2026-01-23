import type React from "react";
import { FiTarget, FiTool, FiTruck, FiHeadphones, FiShield } from "react-icons/fi";

type Solution = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Sprayers & Mist Dusters",
    desc: "Equipment for efficient crop protection and field operations.",
    Icon: FiTool,
  },
  {
    title: "Solar & Power Solutions",
    desc: "Solar units and power systems for farms and remote use.",
    Icon: FiTarget,
  },
  {
    title: "Water & Irrigation",
    desc: "Pumps, hoses, and fittings for reliable water movement.",
    Icon: FiTruck,
  },
  {
    title: "Seeding & Plantation Tools",
    desc: "Tools supporting planting and faster field preparation.",
    Icon: FiShield,
  },
  {
    title: "Industrial & Workshop Equipment",
    desc: "Compressors and workshop tools built for daily operations.",
    Icon: FiTool,
  },
  {
    title: "Spare Parts & Support",
    desc: "After-sales support to keep your equipment running well.",
    Icon: FiHeadphones,
  },
];

export default function AboutSolutions() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-base">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
            What we do
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--dark)]">
            Solutions organized for real needs
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            We group our offering by solutions so you can choose faster with clarity and confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[var(--border)] bg-white p-6 hover:shadow-sm transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[var(--primary)]/10 grid place-items-center">
                  <Icon className="text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--dark)]">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 h-[2px] w-10 bg-[var(--primary)]/70 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
