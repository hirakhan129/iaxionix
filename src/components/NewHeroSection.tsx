
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewHeroSection = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center bg-techBlack">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 pt-16 lg:pt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Tech Solutions for Your Digital Growth
          </h1>
          
          <p className="text-gray-300 my-6 md:my-8 text-lg md:text-xl max-w-xl">
            We specialize in comprehensive tech services including automation, data analysis, web development, SEO optimization, and graphic design. Transform your business with our tailored digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button 
              className="bg-techPurple hover:bg-techPurple/90 text-white font-medium text-lg px-8 py-6"
              size="lg"
            >
              Free Consultancy
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg"
              size="lg"
            >
              Explore More <ArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>
        
        {/* Right content - circular image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            {/* Circular image with border */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-techPurple/30 shadow-lg">
              <img 
                src="/lovable-uploads/9d7a6fe4-ec64-46a9-bbee-59fe576280e6.png" 
                alt="Business planning and strategy session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full mix-blend-overlay"></div>
            </div>
            {/* Purple glow effect */}
            <div className="absolute -inset-4 bg-techPurple/20 rounded-full blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHeroSection;
