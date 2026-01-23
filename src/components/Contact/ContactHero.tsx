export default function ContactHero() {
    return (
      <section className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-base py-12 md:py-16">
          <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
            Get in Touch With Us
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Tell us your requirement and we’ll guide you to the right solution.
            You can call, visit, or send us a message anytime during working hours.
          </p>
        </div>
      </section>
    );
  }
  