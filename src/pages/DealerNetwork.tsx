import { useMemo, useState } from "react";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

type Province =
  | "Western"
  | "Central"
  | "Southern"
  | "North Western"
  | "North Central"
  | "Eastern"
  | "Northern"
  | "Uva"
  | "Sabaragamuwa";

type Dealer = {
  id: string;
  name: string;
  contactName: string;
  city: string;
  province: Province;
  addressLine: string;
  phone: string; // local format e.g. 0777...
  whatsapp?: string; // local format e.g. 0777...
  lat: number;
  lng: number;
};

function toWaNumber(localPhone: string) {
  // 0777680683 -> 94777680683
  return `94${localPhone.replace(/^0/, "")}`;
}

function buildWhatsAppLink(localPhone: string, message: string) {
  const num = toWaNumber(localPhone);
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

function buildGoogleEmbedSrc(lat: number, lng: number, zoom = 10) {
  // No API key needed for basic embed
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

function buildGoogleMapsLink(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

const DEALERS: Dealer[] = [
  {
    id: "d1",
    name: "Green Field Traders",
    contactName: "Mr. Nimal",
    city: "Colombo",
    province: "Western",
    addressLine: "Maradana, Colombo",
    phone: "0777680683",
    whatsapp: "0777680683",
    lat: 6.9271,
    lng: 79.8612,
  },
  {
    id: "d2",
    name: "New Jayalath Agro",
    contactName: "Mr. Jayalath",
    city: "Kurunegala",
    province: "North Western",
    addressLine: "Town Area, Kurunegala",
    phone: "0771234567",
    whatsapp: "0771234567",
    lat: 7.4863,
    lng: 80.3623,
  },
  {
    id: "d3",
    name: "Kandy Agro House",
    contactName: "Mr. Chinthaka",
    city: "Kandy",
    province: "Central",
    addressLine: "Peradeniya Rd, Kandy",
    phone: "0772345678",
    whatsapp: "0772345678",
    lat: 7.2906,
    lng: 80.6337,
  },
  {
    id: "d4",
    name: "Rural Agro Mart",
    contactName: "Ms. Lakshika",
    city: "Anuradhapura",
    province: "North Central",
    addressLine: "Town Area, Anuradhapura",
    phone: "0773456789",
    whatsapp: "0773456789",
    lat: 8.3114,
    lng: 80.4037,
  },
  {
    id: "d5",
    name: "Southern Farm Solutions",
    contactName: "Mr. Indika",
    city: "Galle",
    province: "Southern",
    addressLine: "Galle Town",
    phone: "0774567890",
    whatsapp: "0774567890",
    lat: 6.0535,
    lng: 80.2210,
  },
  {
    id: "d6",
    name: "Eastern Growers",
    contactName: "Mr. Faisal",
    city: "Batticaloa",
    province: "Eastern",
    addressLine: "Main St, Batticaloa",
    phone: "0775678901",
    whatsapp: "0775678901",
    lat: 7.7170,
    lng: 81.7000,
  },
  {
    id: "d7",
    name: "Jaffna Agro Point",
    contactName: "Mr. Suresh",
    city: "Jaffna",
    province: "Northern",
    addressLine: "Hospital Rd, Jaffna",
    phone: "0776789012",
    whatsapp: "0776789012",
    lat: 9.6615,
    lng: 80.0255,
  },
  {
    id: "d8",
    name: "Badulla Agri Center",
    contactName: "Ms. Induni",
    city: "Badulla",
    province: "Uva",
    addressLine: "Badulla Town",
    phone: "0777890123",
    whatsapp: "0777890123",
    lat: 6.9934,
    lng: 81.0550,
  },
];

export default function DealerNetwork() {
  const [activeId, setActiveId] = useState(DEALERS[0]?.id ?? "");

  const active = useMemo(
    () => DEALERS.find((d) => d.id === activeId) ?? DEALERS[0],
    [activeId]
  );

  const embedSrc = useMemo(() => {
    if (!active) return buildGoogleEmbedSrc(7.8731, 80.7718, 7); // Sri Lanka center
    // zoom a bit closer for city pins
    return buildGoogleEmbedSrc(active.lat, active.lng, 12);
  }, [active]);

  const waMsg = useMemo(() => {
    if (!active) return "";
    return [
      "Hi, I’m looking for 3DH Trading products.",
      `Dealer: ${active.name} (${active.city})`,
      "Can you share price + availability + where I can buy?",
    ].join("\n");
  }, [active]);

  return (
    <main className="bg-white">
      <div className="container-base py-10 md:py-14">
        {/* Page header */}
        <div className="max-w-3xl">
          <p className="text-[var(--primary)] font-semibold tracking-widest text-xs uppercase">
            Dealer Network
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[var(--dark)]">
            Find a dealer near you
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            Find authorized 3DH Trading dealers across Sri Lanka. Click a dealer to
            view location and contact details.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left: Dealer list */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {DEALERS.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveId(d.id)}
                    className={[
                      "w-full text-left rounded-[18px] border p-5 transition",
                      isActive
                        ? "border-[var(--primary)] shadow-[0_10px_26px_rgba(0,0,0,0.06)]"
                        : "border-[var(--border)] hover:shadow-sm",
                      "bg-white",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-extrabold text-[var(--dark)]">
                          {d.name}
                        </div>
                        <div className="mt-1 text-sm text-[var(--muted)]">
                          {d.city}, {d.province}
                        </div>
                        <div className="mt-2 text-sm text-[var(--dark)]">
                          {d.contactName}
                        </div>
                      </div>

                      <span
                        className={[
                          "shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border",
                          isActive
                            ? "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20"
                            : "bg-black/5 text-black/60 border-black/10",
                        ].join(" ")}
                      >
                        <FiMapPin />
                        Map
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Real embedded map + info card */}
          <div className="lg:col-span-8">
            <div className="rounded-[22px] border border-[var(--border)] overflow-hidden bg-white">
              {/* Map */}
              <div className="relative h-[420px] md:h-[520px] bg-[var(--bg)]">
                <iframe
                  title="Dealer Map"
                  src={embedSrc}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 border border-black/10 px-4 py-2 text-xs text-[var(--muted)] shadow-sm">
                  Click a dealer card to focus the map
                </div>
              </div>

              {/* Details panel */}
              {active && (
                <div className="p-6 md:p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-xl font-extrabold text-[var(--dark)]">
                        {active.name}
                      </div>
                      <div className="mt-1 text-sm text-[var(--muted)]">
                        {active.addressLine}
                      </div>
                      <div className="mt-1 text-sm text-[var(--muted)]">
                        {active.city}, {active.province}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`tel:${active.phone}`}
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
                      >
                        <FiPhoneCall />
                        Call
                      </a>

                      <a
                        href={buildWhatsAppLink(active.whatsapp ?? active.phone, waMsg)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-extrabold text-white hover:opacity-95 transition"
                        style={{ boxShadow: "0 10px 24px rgba(37, 211, 102, 0.22)" }}
                      >
                        <FaWhatsapp />
                        Buy Now
                      </a>

                      <a
                        href={buildGoogleMapsLink(active.lat, active.lng)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 font-semibold text-[var(--dark)] hover:bg-black/5 transition"
                      >
                        <FiMapPin />
                        View Map
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
