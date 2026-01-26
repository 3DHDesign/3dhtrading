export function buildWhatsAppLink(phone: string, message: string) {
    const cleanPhone = phone.replace(/[^\d]/g, ""); // keep digits only
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
  