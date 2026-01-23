import { FiMapPin, FiPhoneCall, FiMail, FiClock } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <section className="bg-white">
      <div className="container-base py-12">
        <div className="grid gap-6 md:grid-cols-4">

          {/* Address */}
          <div className="rounded-[18px] border border-[var(--border)] p-6">
            <FiMapPin className="text-[var(--primary)] text-xl" />
            <h3 className="mt-3 font-semibold text-[var(--dark)]">Address</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              3DH Trading (Pvt) Ltd<br />
              12 Siri Dhamma Mawatha,<br />
              Colombo 01000, Sri Lanka
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-[18px] border border-[var(--border)] p-6">
            <FiPhoneCall className="text-[var(--primary)] text-xl" />
            <h3 className="mt-3 font-semibold text-[var(--dark)]">Phone</h3>
            <a
              href="tel:0777680683"
              className="mt-2 block text-sm font-semibold text-[var(--dark)] hover:underline"
            >
              0777 680 683
            </a>
          </div>

          {/* Email */}
          <div className="rounded-[18px] border border-[var(--border)] p-6">
            <FiMail className="text-[var(--primary)] text-xl" />
            <h3 className="mt-3 font-semibold text-[var(--dark)]">Email</h3>
            <a
              href="mailto:info@3dhtrading.lk"
              className="mt-2 block text-sm text-[var(--muted)] hover:underline"
            >
              info@3dhtrading.lk
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-[18px] border border-[var(--border)] p-6">
            <FiClock className="text-[var(--primary)] text-xl" />
            <h3 className="mt-3 font-semibold text-[var(--dark)]">Working Hours</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Mon – Sat: 8:00 – 18:00
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
