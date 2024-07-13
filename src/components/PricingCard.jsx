import React from "react";
import listItemIcon from "../assets/images/listItemIcon.png";

const PricingCard = ({ data }) => {
  return (
    <div className="pricing-card z-10 flex flex-col justify-between">
      <h5 className="card-title text-left">{data.title}</h5>
      <div className="flex items-baseline w-full justify-start text-gray-900 dark:text-white mb-4">
        <span className="card-pricing">{data.price}</span>
      </div>
      <ul role="list" className="feature-list">
        {data.features.map((feature, index) => (
          <li key={index} className="flex flex-row gap-2 text-white">
            <img src={listItemIcon} alt="" className="w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="pc-btn">
        START PROJECT
        {/* <FiArrowUpRight className="inline-block ml-2" /> */}
      </button>
    </div>
  );
};

export default PricingCard;
