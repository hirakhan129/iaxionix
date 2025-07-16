
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-techBlack border-t border-techPurple py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-techPurple text-xl font-bold mb-4">iAxionix</h3>
            <p className="text-techGray">
              Transforming ideas into intelligent solutions. Your partner in automation, AI, and design.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-techGray hover:text-techPurple transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-techGray mb-4">iaxionix52@gmail.com</p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-techGray hover:text-techPurple transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-techGray hover:text-techPurple transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-techGray hover:text-techPurple transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-techPurple/20 mt-8 pt-8 text-center text-techGray">
          <p>&copy; {currentYear} iAxionix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
