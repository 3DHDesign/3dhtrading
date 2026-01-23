import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";

 

export default function Contact() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
