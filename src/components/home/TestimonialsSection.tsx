import type React from "react";
import SlickImport from "react-slick";
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi";

const Slider =
  (SlickImport as unknown as { default?: React.ComponentType<any> }).default ??
  (SlickImport as unknown as React.ComponentType<any>);

type Testimonial = {
  name: string;
  role: string;
  location?: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nimal Perera",
    role: "Farmer",
    location: "Kurunegala",
    text: "Good guidance before buying. The sprayer works well and delivery was on time.",
  },
  {
    name: "Saman Jayasinghe",
    role: "Agri Supplier",
    location: "Colombo",
    text: "Clear communication and reliable products. Easy process overall.",
  },
  {
    name: "Thilini Fernando",
    role: "Plantation Owner",
    location: "Kegalle",
    text: "Product quality is good and after-sales support is responsive.",
  },
  {
    name: "Ruwan Silva",
    role: "Workshop Owner",
    location: "Gampaha",
    text: "Straightforward service and solid equipment. No unnecessary upselling.",
  },
  {
    name: "Heshan Kumara",
    role: "Farmer",
    location: "Anuradhapura",
    text: "Recommended the correct model for my use. Happy with the performance.",
  },
  {
    name: "Pradeep Silva",
    role: "Trader",
    location: "Matale",
    text: "Reliable supply and good pricing. Communication was smooth.",
  },
];

function Arrow({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-10",
        dir === "left" ? "-left-4" : "-right-4",
        "hidden lg:flex h-10 w-10 items-center justify-center rounded-full",
        " border border-[var(--border)] shadow-sm",
        "hover:bg-[var(--bg)] transition",
      ].join(" ")}
    >
      {dir === "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6">
        <ul className="m-0 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-black/20 hover:bg-black/40 transition" />
    ),
  } as const;

  return (
    <section className="bg-[var(--bg)]">
      <div className="container-base py-16 md:py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--dark)]">
            What our customers say
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Feedback from farmers, suppliers, and businesses who use our products.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-10">
          <Slider {...settings}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="px-3">
                {/* Card */}
                <div
                  className={[
                    "group relative h-full overflow-hidden rounded-3xl",
                    "border border-[var(--border)] ",
                    "p-6",
                    "transition will-change-transform",
                    "hover:-translate-y-1 hover:shadow-lg",
                  ].join(" ")}
                >
                  {/* top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--primary)]/70" />

                  {/* subtle watermark */}
                  <FiMessageSquare
                    className="absolute -right-3 -top-3 text-[var(--primary)]/10"
                    size={70}
                  />

                  {/* text */}
                  <p className="text-sm text-[var(--text)] leading-relaxed line-clamp-4">
                    “{t.text}”
                  </p>

                  {/* footer */}
                  <div className="mt-6">
                    <div className="font-semibold text-[var(--dark)]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      {t.role}
                      {t.location ? ` • ${t.location}` : ""}
                    </div>

                    <div className="mt-4 h-[2px] w-12 bg-[var(--primary)]/60 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* dots fix */}
          <style>{`
            .slick-dots li { margin: 0 !important; }
            .slick-dots li button:before { display: none !important; }
            .slick-dots li.slick-active div { background: var(--primary) !important; }
          `}</style>
        </div>
      </div>
    </section>
  );
}
