import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <Link to="/" className="text-2xl font-bold mb-8 md:mb-0">
            Logo
          </Link>
          
          <div className="flex flex-wrap gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Copyright © 2024 Zehenify. All Rights Reserved
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium">Get the freshest news from us</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address..."
                className="min-w-[240px]"
              />
              <Button variant="default" className="bg-[#222226] hover:bg-[#2a2a35]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;