import AboutHero from "../components/about/AboutHero";
import AboutSolutions from "../components/about/AboutSolutions";
import AboutProcess from "../components/about/AboutProcess";

export default function About() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutSolutions />
      <AboutProcess />
    </div>
  );
}
