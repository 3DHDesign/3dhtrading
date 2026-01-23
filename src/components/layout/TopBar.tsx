import { FiClock, FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full border-b border-[var(--border)] bg-white text-[13px]">
      <div className="container-base flex items-center justify-between py-2">
        {/* Left info */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <FiClock className="text-[var(--muted)]" />
            <span>Mon – Fri 8:00 – 18:00h </span>
          </div>

          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-[var(--muted)]" />
            <a
              href="tel:0777680683"
              className="hover:text-[var(--text)] transition-colors"
            >
              077 768 0683
            </a>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <FiMapPin className="text-[var(--muted)]" />
            <span>
              3DH Trading (Pvt) Ltd, No.12 Siri Dhamma Mawatha, Colombo 10.
            </span>
          </div>
        </div>

        {/* Right socials */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
