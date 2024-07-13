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
    <div className="w-full flex-col items-center pt-20 px-10">
      <div className="flex flex-row justify-center items-center">
        <div className="w-1/2">
          <h2 className="report-heading">
            The most comprehensive vehicle report guaranteed
          </h2>
        </div>
        <div className="w-1/2 linear-g">
          <p className="ps-20 report-para">
            Getting the facts right is the first step to buying a car with
            confidence that’s why our comprehensive reports are the most
            advanced Vehicle history records providers, we offer users
            comprehensive, real-time Federal Govt Title, Total Loss Data & more,
            at an affordable price.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around mt-16 pl-4 pr-8 py-5 icon-div">
        {reportData.map((data, index) => (
          <div
            key={index}
            className={
              index == 0
                ? "flex flex-col items-start gap-3 ps-3"
                : "flex flex-col items-start gap-3 ps-3 linear-g"
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
