
interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
}

const PortfolioCard = ({ title, description, image }: PortfolioCardProps) => {
  return (
    <div className="glass-morphism rounded-[15px] overflow-hidden card-hover">
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
        <p className="text-techGray mb-6">{description}</p>
        <button className="bg-techGreen/20 hover:bg-techGreen text-techGreen hover:text-white transition-colors duration-300 font-medium py-2 px-4 rounded-md border border-techGreen/50 w-full">
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
