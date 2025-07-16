import { useState, useEffect } from 'react';
import { Menu, X, Diamond } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-2 pt-4">
      <nav 
        className={`max-w-4xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md border border-techGreen/50' : 'bg-black/40 backdrop-blur-sm border border-techGreen/30'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 text-white text-2xl font-bold">
            <Diamond size={28} className="text-techGreen fill-techGreen" />
            <span>TechVision</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-techGreen transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <Button className="bg-techGreen hover:bg-techDarkGreen text-black font-medium">
              Get Consultation <span className="ml-1">→</span>
            </Button>
          </div>

          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-techGreen/30 rounded-b-2xl">
            <div className="flex flex-col items-center py-4">
              {['About', 'Services', 'Pricing', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-techGreen py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="bg-techGreen hover:bg-techDarkGreen text-black font-medium mt-4">
                Get Consultation <span className="ml-1">→</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
