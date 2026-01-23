import { NavLink } from "react-router-dom";

type NavItem = { label: string; to: string };

const NAV: NavItem[] = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ", to: "/about" },
  { label: "SHOP", to: "/shop" },
  { label: "CONTACT US", to: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        {/* Logo area */}
        <div className="flex items-center gap-3">
          {/* Left logo (from public/image/...) */}
          <img
            src="images/logo.png"
            alt="3DH Trading"
            className="h-12 w-auto object-contain"
          />

          
        </div>

        {/* Nav */}
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

        {/* Optional: mobile menu placeholder */}
        <div className="md:hidden">
          {/* you can add a hamburger later */}
        </div>
      </div>
    </header>
  );
}
