import HeroSlider from "../components/home/HeroSlider";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProductsShowcase from "../components/home/FeaturedProductsShowcase";
import CTASection from "../components/home/CTASection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import HomeVideoSection from "../components/home/HomeVideoSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhyChooseUs />
      <HomeVideoSection/>
      <FeaturedProductsShowcase />
      <CTASection />
      <TestimonialsSection />
    </>
  );
}
