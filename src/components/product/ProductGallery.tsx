import { useMemo, useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const safe = useMemo(() => (images?.length ? images : ["/images/logo.png"]), [images]);
  const [active, setActive] = useState(safe[0]);

  return (
    <div className="rounded-[22px] border border-[var(--border)] bg-white overflow-hidden">
      <div className="bg-[var(--bg)] p-6">
        <img
          src={active}
          alt="Product"
          className="mx-auto h-[320px] w-auto object-contain drop-shadow-[0_22px_26px_rgba(0,0,0,0.12)]"
        />
      </div>

      {safe.length > 1 && (
        <div className="p-4">
          <div className="flex gap-3 overflow-x-auto">
            {safe.map((img) => (
              <button
                key={img}
                onClick={() => setActive(img)}
                className={[
                  "shrink-0 rounded-[16px] border p-2 bg-white transition",
                  active === img ? "border-[var(--primary)]" : "border-black/10 hover:bg-black/5",
                ].join(" ")}
              >
                <img src={img} alt="thumb" className="h-16 w-20 object-contain" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
