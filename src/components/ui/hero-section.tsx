
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      id="home"
      className={cn(
        "w-full min-h-screen flex flex-col items-center justify-center bg-techBlack relative z-10",
        className
      )}
    >
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-6 animate-shimmer items-center justify-center rounded-full border border-techGreen px-3 py-1 text-xs font-medium text-techGreen"
          >
            <span className="text-xs text-techGreen">
              Welcome to TechSolutions
            </span>
            <span className="ml-1 inline-flex h-2 w-2 rounded-full bg-techGreen"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Transforming Ideas into{" "}
            <span className="text-techGreen">Intelligent Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-gray-400 md:text-xl"
          >
            Leverage cutting-edge technology to unlock your business potential. We specialize in automation, AI, and design.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto flex w-full max-w-sm items-center space-x-2 pt-4"
        >
          <Button asChild className="bg-techGreen text-white hover:bg-techGreen/90 w-full">
            <a href="#services">
              Explore Our Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-1 pt-8"
        >
          <Star className="h-4 w-4 fill-techGreen text-techGreen" />
          <Star className="h-4 w-4 fill-techGreen text-techGreen" />
          <Star className="h-4 w-4 fill-techGreen text-techGreen" />
          <Star className="h-4 w-4 fill-techGreen text-techGreen" />
          <Star className="h-4 w-4 fill-techGreen text-techGreen" />
          <span className="text-sm text-gray-400 ml-2">
            Trusted by over 1,000+ clients worldwide
          </span>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-techBlack">
        <div className="absolute h-full w-full bg-[radial-gradient(#32CD32_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </section>
  );
}
