import {
    FiCheckCircle,
    FiTool,
    FiTruck,
    FiUsers,
    FiShield,
    FiMapPin,
  } from "react-icons/fi";
  
  const FEATURES = [
    {
      icon: FiTool,
      title: "Proven Equipment",
      desc: "Carefully selected agricultural and industrial equipment tested for reliability and performance.",
    },
    {
      icon: FiUsers,
      title: "Trusted by Farmers",
      desc: "Used by farmers, traders, and businesses across Sri Lanka for daily operations.",
    },
    {
      icon: FiShield,
      title: "After-Sales Support",
      desc: "We don’t just sell products — we stand by them with service and support.",
    },
    {
      icon: FiTruck,
      title: "Islandwide Supply",
      desc: "Efficient distribution network ensuring timely availability across the island.",
    },
    {
      icon: FiCheckCircle,
      title: "Quality Assurance",
      desc: "Every product meets quality standards before reaching our customers.",
    },
    {
      icon: FiMapPin,
      title: "Local Expertise",
      desc: "Deep understanding of local agricultural and business needs in Sri Lanka.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="section ">
        <div className="container-base">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--dark)]">
              Trusted Trading Partner in Agriculture & Industry
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              At 3DH Trading, we focus on delivering reliable solutions that support
              productivity, efficiency, and long-term value.
            </p>
          </div>
  
          {/* Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-[var(--border)]  p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--dark)]">
                      {item.title}
                    </h3>
                  </div>
  
                  <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  