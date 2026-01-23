import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloat() {
  return (
    <a
    href="https://wa.me/94777680683?text=Hello%20I%20am%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-[999]
        h-14 w-14 rounded-full
        bg-[#25D366] text-white
        grid place-items-center
        shadow-lg shadow-black/20
        hover:scale-105 hover:shadow-xl
        transition
      "
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
