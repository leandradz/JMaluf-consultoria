import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ContactSection,
} from "../../components/sections";

/**
 * Home Page
 * Main landing page composed of multiple sections
 */
function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default Home;
