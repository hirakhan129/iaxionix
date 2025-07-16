
import PortfolioCard from './PortfolioCard';

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Financial Dashboard",
    description: "Interactive data visualization dashboard for real-time financial analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "AI Chatbot Assistant",
    description: "Intelligent virtual assistant for customer support with natural language processing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-spacing bg-techBlack/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-techGreen mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
