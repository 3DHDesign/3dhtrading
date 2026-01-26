import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="">
      <div className="container-base pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=2200&q=80"
              alt="Agriculture"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* overlays */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid gap-8 p-7 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-white/80 text-xs uppercase tracking-[0.22em]">
                Need the right equipment fast?
              </p>
              <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Get a Quick Recommendation & Quotation
              </h3>
              <p className="mt-4 text-white/80 max-w-2xl">
                Tell us your use case — we’ll recommend the best product options
                for your field conditions, budget, and availability.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:opacity-95 transition"
                >
                  Visit Shop <FiArrowRight />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/15 transition"
                >
                  Contact Us <FiPhoneCall />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                <span>
                  <span className="text-white font-semibold">Response:</span>{" "}
                  Within working hours
                </span>
                <span>
                  <span className="text-white font-semibold">Support:</span>{" "}
                  After-sales assistance
                </span>
                <span>
                  <span className="text-white font-semibold">Coverage:</span>{" "}
                  Islandwide
                </span>
              </div>
            </div>

            {/* Right mini card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6">
                <p className="text-white/80 text-sm">Call us</p>
                <p className="mt-2 text-white text-2xl font-extrabold tracking-tight">
                  0777 680 683
                </p>
                <p className="mt-2 text-white/75 text-sm">
                  Mon–Fri: 8:00–18:00 • Sun: 8:00–14:00
                </p>

                <a
                  href="tel:0777680683"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius)] bg-[var(--primary)] text-white px-5 py-3 font-semibold hover:bg-white/90 transition"
                >
                  Call Now <FiPhoneCall />
                </a>

                <div className="mt-4 text-xs text-white/70">
                  Prefer WhatsApp? We can add it next.
                </div>
              </div>
            </div>
          </div>

          {/* bottom accent */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--primary)]" />
        </div>
      </div>
    </section>
  );
}
