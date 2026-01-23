import { FiCheckCircle } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="pt-10 md:pt-14">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Left */}
          <div className="lg:col-span-6">
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              About 3DH Trading
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-[var(--dark)] leading-tight">
              A Practical Trading Partner for Agriculture & Industry in Sri Lanka
            </h1>

            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              3DH Trading (Pvt) Ltd supplies reliable agricultural and industrial equipment
              designed for real-world use. We focus on guiding customers to the right
              solutions — not just selling products.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Guidance before purchase",
                "Islandwide supply & availability",
                "After-sales support & spares",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-2 rounded-2xl border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3"
                >
                  <FiCheckCircle className="mt-0.5 text-[var(--primary)]" />
                  <span className="text-sm text-[var(--text)]">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--bg)]">
              <div
                className="h-[280px] sm:h-[340px] md:h-[420px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-white/85 backdrop-blur border border-white/40 p-4">
                  <p className="text-xs font-semibold text-[var(--primary)] tracking-widest uppercase">
                    Real-world reliability
                  </p>
                  <p className="mt-1 text-sm text-[var(--text)]">
                    Built for farms, plantations, workshops, and day-to-day field use.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
