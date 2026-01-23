export default function ContactMap() {
    return (
      <section className="bg-white border-t border-[var(--border)]">
        <div className="container-base py-12">
          <div className="overflow-hidden rounded-[22px] border border-[var(--border)]">
            <iframe
              title="3DH Trading Location"
              src="https://www.google.com/maps?q=12%20Siri%20Dhamma%20Mawatha%20Colombo&output=embed"
              className="h-[380px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  }
  