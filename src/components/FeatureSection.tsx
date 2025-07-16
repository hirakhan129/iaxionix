
import { cn } from "@/lib/utils";
import {
  Bot,
  Code,
  Database,
  Heart,
  LineChart,
  PenTool,
  Settings,
  Cpu,
} from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      title: "Automation",
      description: "Streamline processes with cutting-edge automation tools.",
      icon: <Settings className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "Data Analysis",
      description: "Unlock insights with advanced data analytics.",
      icon: <LineChart className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "Web Development",
      description: "Build stunning, responsive websites.",
      icon: <Code className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "Chatbot Development",
      description: "Create intelligent, conversational bots.",
      icon: <Bot className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "AI Agent Development",
      description: "Develop custom AI solutions for your business.",
      icon: <Database className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "Graphic Designing",
      description: "Craft visually appealing designs.",
      icon: <PenTool className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "AI Integration",
      description: "Integrate AI capabilities into your existing systems.",
      icon: <Cpu className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "Client Satisfaction",
      description: "We prioritize your satisfaction in every project.",
      icon: <Heart className="w-6 h-6 text-techGreen" />,
    },
  ];
  
  return (
    <section id="services" className="section-spacing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-techGreen mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border-techGreen/30 p-8 hover:shadow-[0_0_15px_rgba(50,205,50,0.3)] transition-all duration-300 border-l border-t"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-techGray mb-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
