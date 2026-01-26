import AboutHero from "../components/about/AboutHero";
import AboutSolutions from "../components/about/AboutSolutions";
import AboutProcess from "../components/about/AboutProcess";
import OurTeamSection from "../components/about/OurTeamSection";

export default function About() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutSolutions />
      <AboutProcess />
      <OurTeamSection />
    </div>
  );
}
