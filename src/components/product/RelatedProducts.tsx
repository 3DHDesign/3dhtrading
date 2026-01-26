import type React from "react";
import SlickImport from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Product } from "../../data/products";
import ProductCard from "../shop/ProductCard";

const Slider =
  (SlickImport as unknown as { default?: React.ComponentType<any> }).default ??
  (SlickImport as unknown as React.ComponentType<any>);

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
        "bg-white border border-[var(--border)] shadow-sm",
        "hover:bg-[var(--bg)] transition",
      ].join(" ")}
    >
      {dir === "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}

export default function RelatedProducts({ items }: { items: Product[] }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 550,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  } as const;

  return (
    <section className="bg-white">
    <div className="container py-14">
      {/* ✅ CENTERED HEADING */}
      <div className="mb-10 text-center">
        <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
          More options
        </p>
        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-[var(--dark)]">
          Related Products
        </h3>
      </div>
  
      {/* Slider stays same */}
      <div className="relative mt-8">
        <Slider {...settings}>
          {items.map((p) => (
            <div key={p.id} className="px-3">
              <ProductCard p={p} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
  
  );
}
