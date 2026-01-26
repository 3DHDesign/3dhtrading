import {
    FiDroplet,
    FiSun,
    FiWind,
    FiTool,
    FiSettings,
    FiArrowRight,
  } from "react-icons/fi";
  
  type Solution = {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
    tags: string[];
  };
  
  const SOLUTIONS: Solution[] = [
    {
      title: "Agricultural Spraying",
      desc: "Mist dusters, sprayers, and accessories designed for efficient crop protection.",
      icon: FiWind,
      tags: ["Mist Dusters", "Sprayers", "Nozzles"],
    },
    {
      title: "Solar & Power",
      desc: "Solar solutions and power systems built for field operations and remote environments.",
      icon: FiSun,
      tags: ["Solar Units", "Controllers", "Battery Systems"],
    },
    {
      title: "Water & Irrigation",
      desc: "Reliable water movement solutions supporting irrigation, farming, and operations.",
      icon: FiDroplet,
      tags: ["Pumps", "Hoses", "Fittings"],
    },
    {
      title: "Seeding & Plantation",
      desc: "Tools and equipment to support plantation workflows and faster field preparation.",
      icon: FiTool,
      tags: ["Seeders", "Planters", "Tools"],
    },
    {
      title: "Industrial & Workshop",
      desc: "Professional-grade equipment for maintenance, workshops, and daily operations.",
      icon: FiSettings,
      tags: ["Air Tools", "Parts", "Maintenance"],
    },
  ];
  
  export default function CoreSolutions() {
    return (
      <section className="bg-[var(--bg)]">
        <div className="container-base py-16 md:py-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              Our Core Solutions
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--dark)]">
              Built for Real-World Agriculture & Industry
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              We organize our offering by solutions, so you can find the right
              equipment faster — with clarity and confidence.
            </p>
          </div>
  
          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s) => {
              const Icon = s.icon;
  
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)]  p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]/70" />
  
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition">
                      <Icon size={22} />
                    </div>
  
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
                      Explore <FiArrowRight />
                    </span>
                  </div>
  
                  {/* Title + desc */}
                  <h3 className="mt-5 text-lg font-semibold text-[var(--dark)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                    {s.desc}
                  </p>
  
                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
  
                  {/* Soft hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--primary)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                </div>
              );
            })}
  
            {/* CTA card (optional but looks premium) */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--dark)] p-6 text-white sm:col-span-2 lg:col-span-1">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--primary)]/45 blur-2xl" />
              <div className="relative">
                <p className="text-white/75 text-xs tracking-widest uppercase">
                  Need guidance?
                </p>
                <h3 className="mt-3 text-xl font-bold">
                  Tell us what you need — we’ll recommend the right solution.
                </h3>
                <p className="mt-3 text-white/75 text-sm">
                  Quick recommendations based on your use case, budget, and field
                  conditions.
                </p>
  
                <button className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--primary)] px-5 py-3 font-semibold hover:opacity-95 transition">
                  Contact Us <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  