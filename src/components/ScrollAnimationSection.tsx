
"use client";

import { ContainerScroll, WordsRevealContainer } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-6 bg-black rounded-xl border border-techGreen/20 shadow-lg hover:shadow-techGreen/20"
    >
      <div className="p-4 rounded-full bg-techGreen/10 mb-4">
        <Icon className="w-8 h-8 text-techGreen" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export function ScrollAnimationSection() {
  // Mock data for features
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Harness the power of artificial intelligence to transform your business processes.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
      ),
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your specific business needs.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate cloud technologies to enhance your business operations.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>
      ),
    },
  ];

  return (
    <ContainerScroll
      titleComponent={
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            <WordsRevealContainer words="Innovative Solutions for Modern Businesses" />
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our cutting-edge technologies can transform your business operations and drive growth.
          </p>
        </div>
      }
      backgroundColor="#000000"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </ContainerScroll>
  );
}
