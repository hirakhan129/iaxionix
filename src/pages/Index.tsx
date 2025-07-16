
import Navbar from '@/components/Navbar';
import NewHeroSection from '@/components/NewHeroSection';
// import { ScrollAnimationSection } from '@/components/ScrollAnimationSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { CTADemo } from '@/components/CTADemo';
import { FeatureSectionWithHover } from '@/components/FeatureSectionWithHover';

const Index = () => {
  return (
    <div className="min-h-screen bg-techBlack">
      <Navbar />
      <NewHeroSection />
      {/* ScrollAnimationSection is temporarily disabled
      <ScrollAnimationSection />
      */}
      <FeatureSectionWithHover />
      {/* Services section commented out as requested
      <ServicesSection />
      <AlternativeServicesSection />
      */}
      <AboutSection />
      <CTADemo />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
