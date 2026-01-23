import { FiPhoneCall } from "react-icons/fi";

export default function ShopHero() {
  return (
    <section className="bg-white">
      <div className="container-base pt-10 pb-6">
        <div className="rounded-[22px] border border-[var(--border)] bg-[var(--bg)] p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
                Shop
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
                Shop Equipment & Solutions
              </h1>
              <p className="mt-3 text-[var(--muted)] max-w-2xl">
                Search by model or browse categories. If you’re unsure, tell us your use-case
                and we’ll recommend the right item.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:0777680683"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-black/10 bg-white px-5 py-3 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
              >
                <FiPhoneCall />
                Call
              </a>
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-5 py-3"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
