import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const cardsData = [
    {
      title: "Basic",
      price: "$34.00",
      features: [
        "1 vehicle report",
        "DMV title history",
        "Safety recall status",
        "Vehicle specification",
        "Accident information",
        "Online listing history",
        "No expiry",
      ],
    },
    {
      title: "Silver",
      price: "$55.00",
      features: [
        "2 vehicle report",
        "DMV title history",
        "Safety recall status",
        "Vehicle specification",
        "Accident information",
        "Online listing history",
        "No expiry",
      ],
    },
    {
      title: "Gold",
      price: "$78.00",
      features: [
        "3 vehicle report",
        "DMV title history",
        "Safety recall status",
        "Vehicle specification",
        "Accident information",
        "Online listing history",
        "No expiry",
      ],
    },
  ];
  return (
    <div className="w-full flex-col items-center mt-10 pt-20 hero-bg">
      <h2 className="pricing-heading">Pricing Options For Every Need</h2>
      <div className="flex flex-row justify-center items-center py-12">
        {cardsData.map((data, index) => (
          <PricingCard key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
