import React from "react";
import reportSectionImage from "../assets/images/reportSectionImage.png";

import reportSectionIcon1 from "../assets/images/reportSectionIcon1.png";
import reportSectionIcon2 from "../assets/images/reportSectionIcon2.png";
import reportSectionIcon3 from "../assets/images/reportSectionIcon3.png";
import reportSectionIcon4 from "../assets/images/reportSectionIcon4.png";

import reportArrow1 from "../assets/images/reportArrow1.png";
import reportArrow2 from "../assets/images/reportArrow2.png";

const ReportSections = () => {
  const reportData = [
    { icon: reportSectionIcon1, description: "Technical Data" },
    { icon: reportSectionIcon2, description: "Damage Check" },
    { icon: reportSectionIcon3, description: "Ownership History" },
    { icon: reportSectionIcon4, description: "Odometer Check" },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-0 pt-20 px-4">
      <h2 className="text-3xl md:text-5xl report-section-heading">
        Our Report Checks For
      </h2>
      <img src={reportSectionImage} alt="car's" className="-mb-8" />
      <div className="flex flex-row justify-around flex-wrap gap-y-2 md:gap-y-0 mt-4 md:mt-0 w-full">
        {reportData.map((data, index) =>
          index < 2 ? (
            <div
              key={index}
              className="w-2/3 md:w-1/4 flex flex-row items-center justify-start md:justify-center gap-4 ps-0"
            >
              {/* <img src={reportArrow1} alt="arrow" className="absolute" /> */}
              <div className="icon-bg">
                <img src={data.icon} alt="reportIcon1" className="m-auto" />
                <img
                  src={reportArrow1}
                  alt="arrow"
                  className="hidden md:block absolute left-48 -mt-44 w-72"
                />
                <img
                  src={reportArrow1}
                  alt="arrow"
                  className="hidden md:block absolute left-1/3 ml-10 -mt-44 w-72"
                />
              </div>
              {/* <img src={reportArrow1} alt="arrow" className="absolute" /> */}
              <p className="text-xl">{data.description}</p>
              {/* <img src={reportArrow1} alt="arrow" className="absolute" /> */}
            </div>
          ) : (
            <div
              key={index}
              className="w-2/3 md:w-1/4 flex flex-row-reverse md:flex-row items-center justify-end md:justify-around gap-3 md:gap-0 ps-0"
            >
              <p className="text-xl">{data.description}</p>
              <img
                src={reportArrow2}
                alt="arrow"
                className="hidden md:block absolute right-48 -mt-52 mb-0 w-80"
              />
              <img
                src={reportArrow2}
                alt="arrow"
                className="hidden md:block absolute left-1/2 -ml-12 -mt-40 mb-3 w-64"
              />
              <div className="icon-bg">
                <img src={data.icon} alt="reportIcon1" className="m-auto" />
              </div>
            </div>
          )
        )}
        {/* <img src={reportArrow1} alt="arrow" className="absolute" /> */}
      </div>
      {/* <img src={reportArrow1} alt="arrow" className="absolute" /> */}
    </div>
  );
};

export default ReportSections;
