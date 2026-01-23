import { Link } from "react-router-dom";
import { FiPhoneCall, FiMapPin, FiClock, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* small top accent so footer is visible on white pages */}
      <div className="h-[3px] w-full bg-[var(--primary)]" />

      <div className="border-t border-black/10">
        {/* Main */}
        <div className="container-base py-14">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link to="/" className="flex items-center gap-3 w-fit">
                <img
                  src="/images/logo.png"
                  alt="3DH Trading"
                  className="h-11 w-auto object-contain"
                />
               
              </Link>

              <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                Supplying practical, reliable equipment for agriculture, plantations,
                and industrial operations — backed by guidance and after-sales support.
              </p>

              {/* Social */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="h-9 w-9 grid place-items-center rounded-full border border-black/10 text-[var(--dark)] hover:bg-black/5 transition"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-9 w-9 grid place-items-center rounded-full border border-black/10 text-[var(--dark)] hover:bg-black/5 transition"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-9 w-9 grid place-items-center rounded-full border border-black/10 text-[var(--dark)] hover:bg-black/5 transition"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="font-semibold text-[var(--dark)]">Quick Links</h4>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <Link to="/" className="hover:text-[var(--dark)] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[var(--dark)] transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-[var(--dark)] transition">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[var(--dark)] transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="md:col-span-3">
              <h4 className="font-semibold text-[var(--dark)]">Solutions</h4>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <Link to="/shop" className="hover:text-[var(--dark)] transition">
                    Sprayers & Mist Dusters
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-[var(--dark)] transition">
                    Solar & Power Systems
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-[var(--dark)] transition">
                    Pumps & Irrigation
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-[var(--dark)] transition">
                    Tools & Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="font-semibold text-[var(--dark)]">Contact</h4>

              <div className="mt-4 space-y-4 text-sm text-[var(--muted)]">
                <div className="flex gap-3">
                  <FiMapPin className="mt-0.5 text-[var(--primary)]" />
                  <p>
                    No.12 Siri Dhamma Mawatha, <br />
                    Colombo 10, Sri Lanka
                  </p>
                </div>

                <div className="flex gap-3">
                  <FiPhoneCall className="text-[var(--primary)]" />
                  <a href="tel:0777680683" className="hover:text-[var(--dark)] transition">
                    0777 680 683
                  </a>
                </div>

                <div className="flex gap-3">
                  <FiMail className="text-[var(--primary)]" />
                  <a
                    href="mailto:info@3dhtrading.lk"
                    className="hover:text-[var(--dark)] transition"
                  >
                    info@3dhtrading.lk
                  </a>
                </div>

                <div className="flex gap-3">
                  <FiClock className="text-[var(--primary)]" />
                  <p>Mon – Sat: 8:00 – 18:00</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-[var(--radius)] bg-[var(--primary)] px-5 py-3 font-semibold text-white hover:opacity-90 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/5">
          <div className="container-base py-5 flex flex-col gap-2 md:flex-row md:justify-between text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} 3DH Trading (Pvt) Ltd</p>
            <p>Designed & Developed by 3DH Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
