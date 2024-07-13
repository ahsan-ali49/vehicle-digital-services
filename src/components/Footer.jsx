import React from "react";
import navbarLogo from "../assets/images/navbarLogo.png";

import footer1 from "../assets/images/footer1.png";
import footer2 from "../assets/images/footer2.png";
import footer3 from "../assets/images/footer3.png";
import footer4 from "../assets/images/footer4.png";
import footer5 from "../assets/images/footer5.png";
import footer6 from "../assets/images/footer6.png";
import footer7 from "../assets/images/footer7.png";

const Footer = () => {
  return (
    <div className="p-3">
      <div className="w-full rounded-3xl py-5 px-9 hero-bg">
        <div className="w-full flex flex-col">
          <div className="flex flex-row">
            <div className="w-1/2">
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={navbarLogo} className="h-8" alt="VDS logo" />
                <span className="self-center text-xl text-white whitespace-wrap w-32">
                  Vehicle Digital Services
                </span>
              </a>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <h4 className="text-white text-2xl">Contact Us</h4>
              <div className="flex flex-row gap-x-4">
                <img src={footer1} alt="" />
                <span className="text-white">
                  info@vehicledigitalservices.com
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <img src={footer2} alt="" className="w-6 h-6" />
                <span className="text-white">(209) 555-0104</span>
              </div>
              <div></div>
            </div>
          </div>
          <p className="footer-para mb-8">
            Empower your vehicle purchase with our comprehensive VIN check
            service. Uncover the truth, make informed decisions, and drive away
            with peace of mind.
          </p>
          <div className="flex flex-row justify-between">
            <button className="border border-1 border-gray-950 contact-div-btn">
              Check your car
            </button>
            <div className="flex flex-col">
              <div className="flex flex-row justify-end gap-0 mx-0 px-0">
                <img src={footer3} alt="" />
                <img src={footer4} alt="" />
                <img src={footer5} alt="" />
                <img src={footer6} alt="" />
                <img src={footer7} alt="" />
              </div>
              <div className="flex flex-row gap-4">
                <span className="text-white">Privacy Policy</span>
                <span className="text-white">Terms and Conditions</span>
                <span className="text-white">
                  Copyright 2024 Global Inspection Hub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
