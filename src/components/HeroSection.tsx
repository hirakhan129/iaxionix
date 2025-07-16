
"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { AuroraBackground } from '@/components/ui/aurora-background';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <AuroraBackground>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-6 items-center justify-center"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              Transforming Ideas into Intelligent Solutions
            </h1>
            <p className="text-white text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              Your Partner in Automation, AI, and Design
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center bg-techGreen text-white font-medium px-8 py-3 rounded-md card-hover"
            >
              Explore Services <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
