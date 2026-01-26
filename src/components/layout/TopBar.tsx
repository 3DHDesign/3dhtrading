import { FiClock, FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={[
        "fixed top-0 left-0 z-[60] w-full border-b border-[var(--border)]  text-[13px] transition-transform duration-200",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      style={{ height: 40 }} // matches TOPBAR_H
    >
      <div className="container-base flex h-full items-center justify-between py-2">
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
