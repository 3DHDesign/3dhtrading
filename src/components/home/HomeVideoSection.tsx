import { FiArrowRight, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {
  youtubeId?: string; // you can pass later
};

export default function HomeVideoSection({ youtubeId = "ysz5S6PUM-U" }: Props) {
  // default is a safe placeholder video id — replace anytime
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&controls=1`;

  return (
    <section className="bg-white">
      <div className="container-wide py-14 md:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: content */}
          <div className="lg:col-span-5">
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              Watch & Understand
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[var(--dark)] leading-tight">
              Real equipment. Real-world use.
              <span className="block text-[var(--text)] font-bold">
                Built for Sri Lankan agriculture & industry.
              </span>
            </h2>

            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              We supply reliable solutions and guide you to the right equipment based on
              your actual usage — from sprayers and seeders to solar, pumps, and workshop tools.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                Explore Products <FiArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-[var(--radius)] border border-black/10 px-5 py-3 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
              >
                Get a Quote
              </Link>
            </div>

            {/* quick bullets */}
            <div className="mt-8 grid gap-3 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                Guidance before you buy
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                After-sales support & parts
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                Trusted by farmers & workshops
              </div>
            </div>
          </div>

          {/* RIGHT: video */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-[var(--bg)] shadow-sm">
              {/* top accent */}
              <div className="h-[4px] w-full bg-[var(--primary)]" />

              {/* Responsive video wrapper */}
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={src}
                  title="3DH Trading video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* subtle overlay label (looks premium) */}
              <div className="pointer-events-none absolute left-5 top-6 hidden md:flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[var(--dark)] backdrop-blur">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--primary)] text-white">
                  <FiPlay size={14} />
                </span>
                Quick introduction
              </div>

              {/* bottom note */}
              <div className="flex items-center justify-between gap-3 px-5 py-4 text-xs md:text-sm text-[var(--muted)]">
                <span>Replace the YouTube video anytime (just change the ID).</span>
                <span className="hidden md:inline">HD • Mobile-friendly</span>
              </div>
            </div>

            {/* small trust strip */}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Fast guidance", v: "Help choosing models" },
                { k: "Reliable supply", v: "Stocks & ordering" },
                { k: "Support", v: "After-sales service" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-black/10 bg-white p-4"
                >
                  <div className="font-bold text-[var(--dark)]">{x.k}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{x.v}</div>
                  <div className="mt-3 h-[2px] w-10 rounded-full bg-[var(--primary)]/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
