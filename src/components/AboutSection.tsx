
const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-techDarkPurple/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Who <span className="text-techPurple">We Are</span>
          </h2>
          
          <p className="text-lg mb-8 leading-relaxed">
            We're a team of innovators specializing in AI, automation, and design, dedicated to delivering top-tier solutions. Our mission is to bridge the gap between cutting-edge technology and practical business applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-morphism p-6 rounded-[15px]">
              <h3 className="text-techPurple text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-techGray">To empower businesses with intelligent technological solutions that drive growth and innovation.</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-[15px]">
              <h3 className="text-techPurple text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-techGray">To be the leading agency in creating sustainable and intelligent digital ecosystems.</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-[15px]">
              <h3 className="text-techPurple text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-techGray">Innovation, integrity, collaboration, and excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
