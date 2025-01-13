import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import { Button } from "../components/ui/button";

const Index = () => {
  const [billingType, setBillingType] = useState<"monthly" | "lumpsum">("monthly");

  const features = [
    "What will you get",
    "What will you get",
    "What will you get",
    "What will you get",
    "What will you get",
    "What will you get",
    "What will you get",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Discover Products<br />With the Best Pricing
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Select from best plan, ensuring a perfect match. Need more or less?<br />
            Customize your subscription for a seamless fit!
          </p>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              PRICING PLANS
            </div>
            <h2 className="text-4xl font-bold mb-4">Pricing & Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis enim viverra tortor diam nunc. Vitae at malesuada dolor vitae dolor mi eu sit. Pretium malesuada sit purus donec.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={billingType === "monthly" ? "default" : "outline"}
              onClick={() => setBillingType("monthly")}
              className={billingType === "monthly" ? "bg-[#222226]" : ""}
            >
              Monthly
            </Button>
            <Button
              variant={billingType === "lumpsum" ? "default" : "outline"}
              onClick={() => setBillingType("lumpsum")}
              className={billingType === "lumpsum" ? "bg-[#222226]" : ""}
            >
              Lumpsum
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              description="Best for personal use."
              price={20}
              features={features}
            />
            <PricingCard
              title="Lumpsum"
              description="Best for personal use."
              price={20}
              features={features.slice(0, 5)}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;