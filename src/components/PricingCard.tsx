import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
}

const PricingCard = ({ title, description, price, features }: PricingCardProps) => {
  return (
    <div className="bg-[#F1F0FB] rounded-3xl p-8 text-gray-800 flex flex-col h-full border border-gray-200">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600 ml-2">/per month</span>
        </div>
      </div>
      
      <div className="flex-grow">
        <p className="font-medium mb-4">What will you get</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-blue-600" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button variant="default" className="mt-8 w-full bg-[#222226] hover:bg-[#2a2a30] text-white">
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;