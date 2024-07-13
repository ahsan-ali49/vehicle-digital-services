import React from "react";
import Hero from "../components/Hero";
import Report from "../components/Report";
import ReportSections from "../components/ReportSections";
import Pricing from "../components/Pricing";

const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <Report />
      <ReportSections />
      <Pricing />
    </>
  );
};

export default HomePage;
