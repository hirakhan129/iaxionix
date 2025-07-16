
import { cn } from "@/lib/utils";
import {
  Bot,
  Code,
  Database,
  LineChart,
  PenTool,
  Settings,
} from "lucide-react";

export function FeatureSectionWithHover() {
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
      title: "SEO Development",
      description: "Boost your online visibility and search rankings.",
      icon: <Bot className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "AI Solutions",
      description: "Develop custom AI solutions for your business.",
      icon: <Database className="w-6 h-6 text-techGreen" />,
    },
    {
      title: "Graphic Designing",
      description: "Craft visually appealing designs.",
      icon: <PenTool className="w-6 h-6 text-techGreen" />,
    },
  ];
  
  return (
    <section id="services" className="section-spacing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-techGreen mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-techGreen/30 py-10 relative group/feature",
        (index === 0 || index === 3) && "lg:border-l",
        index < 6 && "lg:border-b"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-techGreen/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-techGreen/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-techGreen">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-techGreen/30 group-hover/feature:bg-techGreen transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-techGray max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
