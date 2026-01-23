export default function ContactForm() {
    return (
      <section className="bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="container-base py-14">
          <div className="grid gap-10 lg:grid-cols-12">
  
            {/* Text */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">
                Send us a Message
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Share your requirement and contact details.  
                Our team will get back to you with guidance or a quotation.
              </p>
            </div>
  
            {/* Form */}
            <form className="lg:col-span-7 rounded-[22px] border border-[var(--border)] bg-white p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Your Name"
                  className="w-full rounded-[14px] border border-black/10 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
                <input
                  placeholder="Phone Number"
                  className="w-full rounded-[14px] border border-black/10 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
              </div>
  
              <input
                placeholder="Email Address"
                className="mt-4 w-full rounded-[14px] border border-black/10 px-4 py-3 outline-none focus:border-[var(--primary)]"
              />
  
              <textarea
                placeholder="Tell us what you are looking for..."
                rows={4}
                className="mt-4 w-full rounded-[14px] border border-black/10 px-4 py-3 outline-none focus:border-[var(--primary)]"
              />
  
              <button
                type="submit"
                className="btn-primary mt-6 w-full py-3"
              >
                Send Message
              </button>
            </form>
  
          </div>
        </div>
      </section>
    );
  }
  