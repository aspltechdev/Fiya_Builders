import Hero from "../admin/pages/HeroManagement";
import AboutSection from "../components/About/About";
import ConsultationCTA from "../components/ConsultationCTA/ConsultationCTA";
import GallerySection from "../components/Gallery/GallerySection";
import HeroSection from "../components/Hero/Hero";
import ProcessSection from "../components/Process/ProcessSection";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import ServicesSection from "../components/Services/ServicesSection";
import StatsSection from "../components/Stats/StatsSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import WhyChooseUs from "../components/Whychooseus/WhyChooseUs";
import SocialWall from "./SocialWall";

const Home = () => {
  return (
    <main>
 <HeroSection/>
 <AboutSection/>
 <ServicesSection/>
<FeaturedProjects/>
<WhyChooseUs/>
<ProcessSection/>
<StatsSection/>
<GallerySection/>
<TestimonialsSection/>
<SocialWall/>
<ConsultationCTA/>
    </main>
  );
};

export default Home;