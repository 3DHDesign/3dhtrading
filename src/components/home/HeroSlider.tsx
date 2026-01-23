import type React from "react";
import SlickImport from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ✅ FIX: normalize react-slick export for Vite + TS */
const Slider =
  (SlickImport as unknown as { default?: React.ComponentType<any> }).default ??
  (SlickImport as unknown as React.ComponentType<any>);

type HeroProduct = {
  src: string;
  alt: string;
  side: "left" | "right";
  className?: string;
};

type HeroSlide = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  bg: string; // stable Unsplash URL
  products: HeroProduct[]; // exactly 2 products
};

function Arrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      className={[
        "absolute top-1/2 z-20 -translate-y-1/2",
        direction === "left" ? "left-3" : "right-3",
        "rounded-full bg-white/15 p-3 text-white backdrop-blur",
        "hover:bg-white/25 transition",
        "hidden md:block", // ✅ keep arrows desktop only
      ].join(" ")}
    >
      {direction === "left" ? (
        <FiChevronLeft size={22} />
      ) : (
        <FiChevronRight size={22} />
      )}
    </button>
  );
}

export default function HeroSlider() {
  const slides: HeroSlide[] = [
    {
      id: "sprayers",
      kicker: "INTRODUCING",
      title: "HIGH QUALITY",
      subtitle: "Mist Dusters and Sprayers",
      bg: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1920&q=80",
      products: [
        { src: "/images/3wf-3.png", alt: "3WF-3", side: "left" },
        { src: "/images/dh767.png", alt: "DH 767", side: "right" },
      ],
    },
    {
      id: "solar",
      kicker: "INTRODUCING",
      title: "HIGH QUALITY",
      subtitle: "Solar & Water Solutions",
      bg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
      products: [
        { src: "/images/solar-set.png", alt: "Solar Pump Set", side: "left" },
        { src: "/images/solar-red.png", alt: "Portable Solar Unit", side: "right" },
      ],
    },
    {
      id: "seeder",
      kicker: "INTRODUCING",
      title: "HIGH QUALITY",
      subtitle: "Sprayers and Seeders",
      bg: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80",
      products: [
        { src: "/images/blue-sprayer.png", alt: "Sprayer", side: "left" },
        { src: "/images/green-seeder.png", alt: "Seeder", side: "right" },
      ],
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-0 right-0">
        <ul className="m-0 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2.5 w-2.5 rounded-full bg-white/40 hover:bg-white/80 transition" />
    ),
  } as const;

  return (
    <section className="w-full">
      <div className="container-wide py-6">
        <div className="relative overflow-hidden rounded-[22px] border border-[var(--border)]">
          <Slider {...settings}>
            {slides.map((s) => (
              <div key={s.id}>
                {/* ✅ Desktop height preserved */}
                <div className="relative min-h-[520px] md:min-h-[440px]">
                  {/* Background */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${s.bg}')` }}
                    />

                    {/* overlay for readability */}
                    <div className="absolute inset-0 bg-black/35 md:bg-black/30" />

                    {/* ✅ Desktop pink blobs ONLY (preserve old look) */}
                    <div className="hidden md:block absolute -left-28 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[var(--primary)]/70" />
                    <div className="hidden md:block absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[var(--primary)]/55" />

                    {/* ✅ Mobile: gradient + slight blur (only mobile changes) */}
                    <div className="absolute inset-0 md:hidden backdrop-blur-[2px]" />
                    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[var(--primary)]/35 via-black/30 to-black/55" />
                  </div>

                  {/* ✅ DESKTOP PRODUCTS (same style as before) */}
                  <div className="absolute inset-0 pointer-events-none hidden md:block">
                    {s.products
                      .filter((p) => p.side === "left")
                      .map((p) => (
                        <img
                          key={p.src}
                          src={p.src}
                          alt={p.alt}
                          className={[
                            "absolute left-10 bottom-6",
                            "w-[240px] lg:w-[290px]",
                            "drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]",
                            p.className ?? "",
                          ].join(" ")}
                        />
                      ))}

                    {s.products
                      .filter((p) => p.side === "right")
                      .map((p) => (
                        <img
                          key={p.src}
                          src={p.src}
                          alt={p.alt}
                          className={[
                            "absolute right-10 bottom-6",
                            "w-[240px] lg:w-[290px]",
                            "drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]",
                            p.className ?? "",
                          ].join(" ")}
                        />
                      ))}
                  </div>

                  {/* ✅ DESKTOP TEXT CENTER (preserved) */}
                  <div className="relative z-10 hidden md:flex flex-col items-center justify-center px-4 py-16 text-center">
                    <p className="text-white/90 tracking-[0.22em] text-sm">
                      {s.kicker}
                    </p>

                    <h1 className="mt-3 text-white font-extrabold tracking-wide text-6xl lg:text-7xl">
                      {s.title}
                    </h1>

                    <p className="mt-3 text-[#ffd54a] font-semibold text-2xl">
                      {s.subtitle}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                      <button className="btn-primary">Shop Now</button>
                      <button className="rounded-[var(--radius)] border border-white/35 px-5 py-3 text-white font-semibold hover:bg-white/10 transition">
                        View Products
                      </button>
                    </div>
                  </div>

                  {/* ✅ MOBILE LAYOUT (only mobile changed) */}
                  <div className="relative z-10 md:hidden px-4 pt-10 pb-14">
                    <p className="text-white/90 tracking-[0.22em] text-xs text-center">
                      {s.kicker}
                    </p>

                    <h1 className="mt-3 text-white font-extrabold text-4xl leading-[1.05] text-center">
                      {s.title}
                    </h1>

                    <p className="mt-3 text-[#ffd54a] font-semibold text-base text-center">
                      {s.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <button className="btn-primary">Shop Now</button>
                      <button className="rounded-[var(--radius)] border border-white/40 px-5 py-3 text-white hover:bg-white/10 transition">
                        View Products
                      </button>
                    </div>

                    {/* Mobile product cards */}
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {s.products.map((p) => (
                        <div
                          key={p.src}
                          className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-3"
                        >
                          <img
                            src={p.src}
                            alt={p.alt}
                            className="mx-auto h-[150px] w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* slick dots fixes */}
          <style>{`
            .slick-dots li { margin: 0 !important; }
            .slick-dots li button:before { display: none !important; }
            .slick-dots li.slick-active div { background: #fff !important; }
          `}</style>
        </div>
      </div>
    </section>
  );
}
