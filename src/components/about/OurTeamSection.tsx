type TeamMember = {
    name: string;
    role: string;
    image?: string; // optional
  };
  
  const TEAM: TeamMember[] = [
    {
      name: "Mr. Shamal Rodrigo",
      role: "Director",
      image: "/images/team-1.jpg",
    },
    {
      name: "Mr. Dinuk Wijeyeratne",
      role: "Director",
      image: "/images/team-2.png",
    },
    {
      name: "Mr. Chinthaka",
      role: "Operations Manager",
      // no image → placeholder
    },
    {
      name: "Mr. Indika",
      role: "Technical Support",
      // no image → placeholder
    },
    {
      name: "Mr. Lakshika",
      role: "Administration",
      // no image → placeholder
    },
  ];
  
  // simple professional placeholder (initial-based)
  function Placeholder({ name }: { name: string }) {
    const initial = name.charAt(0).toUpperCase();
  
    return (
      <div className="h-full w-full flex items-center justify-center rounded-2xl bg-[var(--bg)] text-[var(--primary)] text-4xl font-bold">
        {initial}
      </div>
    );
  }
  
  export default function OurTeamSection() {
    return (
      <section className="bg-white">
        <div className="container-base py-16 md:py-20">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
              Our Team
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--dark)]">
              People behind 3DH Trading
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              A dedicated team with industry knowledge, technical expertise, and a
              strong understanding of Sri Lankan agriculture and industrial needs.
            </p>
          </div>
  
          {/* Team grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[var(--border)] bg-white overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="relative h-[460px] bg-[var(--bg)] p-4">
                  <div className="h-full w-full rounded-2xl overflow-hidden bg-white border border-[var(--border)]">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <Placeholder name={m.name} />
                    )}
                  </div>
                </div>
  
                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[var(--dark)]">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {m.role}
                  </p>
  
                  {/* subtle accent */}
                  <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[var(--primary)]/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  