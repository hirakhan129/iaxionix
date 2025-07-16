
import ServiceCard from './ServiceCard';
import { Bot, Code, Database, LineChart, PenTool, Settings } from 'lucide-react';

const services = [
  {
    title: "Automation",
    description: "Streamline processes with cutting-edge automation tools.",
    icon: Settings
  },
  {
    title: "Data Analysis",
    description: "Unlock insights with advanced data analytics.",
    icon: LineChart
  },
  {
    title: "Web Development",
    description: "Build stunning, responsive websites.",
    icon: Code
  },
  {
    title: "Chatbot Development",
    description: "Create intelligent, conversational bots.",
    icon: Bot
  },
  {
    title: "AI Agent Development",
    description: "Develop custom AI solutions for your business.",
    icon: Database
  },
  {
    title: "Graphic Designing",
    description: "Craft visually appealing designs.",
    icon: PenTool
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-techGreen mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
