import React from "react";
import reportIcon1 from "../assets/images/reportIcon1.png";
import reportIcon2 from "../assets/images/reportIcon2.png";
import reportIcon3 from "../assets/images/reportIcon3.png";
import reportIcon4 from "../assets/images/reportIcon4.png";
import reportIcon5 from "../assets/images/reportIcon5.png";

const Report = () => {
  const reportData = [
    { icon: reportIcon1, description: "Vehicle Specifications" },
    { icon: reportIcon2, description: "Vehicle Valuation" },
    { icon: reportIcon3, description: "Vehicle Usage" },
    { icon: reportIcon4, description: "Service Records" },
    { icon: reportIcon5, description: "Safety Ratings" },
  ];

  return (
    <div className="w-full flex-col items-center pt-10 md:pt-20 px-10">
      <div className="flex flex-col md:flex-row justify-center md:items-center">
        <div className="w-full md:w-1/2">
          <h2 className="report-heading">
            The most comprehensive vehicle report guaranteed
          </h2>
        </div>
        <div className="hidden md:block w-1/2 linear-g border border-0 md:border-l-2">
          <p className="ps-20 report-para">
            Getting the facts right is the first step to buying a car with
            confidence that’s why our comprehensive reports are the most
            advanced Vehicle history records providers, we offer users
            comprehensive, real-time Federal Govt Title, Total Loss Data & more,
            at an affordable price.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around flex-wrap gap-y-2 md:gap-y-2 mt-36 md:mt-16 pl-4 pr-8 py-5 icon-div">
        {reportData.map((data, index) => (
          <div
            key={index}
            className={
              index == 0
                ? "flex flex-col items-center md:items-start gap-3 ps-0 md:ps-3"
                : "flex flex-col items-center md:items-start gap-3 ps-0 md:ps-3 linear-g border border-0 md:border-l-2"
            }
          >
            <div className="icon-bg">
              <img src={data.icon} alt="reportIcon1" className="m-auto " />
            </div>
            <p className="text-xl">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
