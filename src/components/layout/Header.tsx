import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavItem = { label: string; to: string };

const NAV: NavItem[] = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SHOP", to: "/shop" },
  {label: "Dealer Network", to: "/dealers" },
  { label: "CONTACT US", to: "/contact" },
];

export default function Header({ topOffset = 0 }: { topOffset?: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed left-0 z-[55] w-full bg-white transition-all",
        scrolled ? "shadow-md" : "shadow-none",
      ].join(" ")}
      style={{ top: topOffset }}
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all",
          scrolled ? "py-4" : "py-6",
        ].join(" ")}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="3DH Trading"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm font-semibold tracking-[0.18em] transition-colors",
                  isActive ? "text-black" : "text-black/70 hover:text-black",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-black/80 hover:text-black hover:bg-black/5 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-200",
          open ? "max-h-96 border-t border-black/10" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-4 py-4 flex flex-col gap-3">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "rounded-lg px-3 py-3 text-sm font-semibold tracking-[0.18em] transition",
                  isActive
                    ? "bg-black text-white"
                    : "text-black/70 hover:text-black hover:bg-black/5",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
