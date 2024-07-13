import React from "react";
import Report from "../components/Report";
import ReportSections from "../components/ReportSections";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Report />
      <ReportSections />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;
