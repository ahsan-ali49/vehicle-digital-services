import React from "react";
import listItemIcon from "../assets/images/listItemIcon.png";
import cardTitleIcon from "../assets/images/cardTitleIcon.png";

const PricingCard = ({ data, index }) => {
  return (
    <div
      className={
        index == 1
          ? "pricing-card z-10 flex flex-col justify-between"
          : "pricing-card-secondary z-10 flex flex-col justify-between"
      }
    >
      <div className="flex flex-row justify-between">
        <h5 className="card-title text-left">{data.title}</h5>
        {index == 1 ? <img src={cardTitleIcon} alt="" /> : null}
      </div>

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
      <button
        type="button"
        className={index == 1 ? "pc-btn" : "pc-btn-secondary text-white"}
      >
        Get your report now
        {/* <FiArrowUpRight className="inline-block ml-2" /> */}
      </button>
    </div>
  );
};

export default PricingCard;
