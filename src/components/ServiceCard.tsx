
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="glass-morphism rounded-[15px] p-6 card-hover h-full flex flex-col justify-between">
      <div>
        <div className="bg-techGreen/10 p-3 rounded-full w-fit mb-4">
          <Icon className="text-techGreen w-8 h-8" />
        </div>
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
        <p className="text-techGray mb-6">{description}</p>
      </div>
      <button className="bg-techGreen/20 hover:bg-techGreen text-techGreen hover:text-white transition-colors duration-300 font-medium py-2 px-4 rounded-md border border-techGreen/50 mt-auto w-full">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
