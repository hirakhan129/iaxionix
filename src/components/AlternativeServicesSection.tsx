
import { FeatureSection } from './FeatureSection';

const AlternativeServicesSection = () => {
  return (
    <section id="alt-services" className="section-spacing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-techGreen mx-auto"></div>
          <p className="text-techGray mt-4 max-w-2xl mx-auto">
            Discover our comprehensive range of cutting-edge services designed to transform your business
          </p>
        </div>
        
        <FeatureSection />
      </div>
    </section>
  );
};

export default AlternativeServicesSection;
