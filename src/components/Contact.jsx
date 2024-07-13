import React from "react";
import contactImage1 from "../assets/images/contactImage1.png";
import contactImage2 from "../assets/images/contactImage2.png";

const Contact = () => {
  return (
    <div className="px-24 py-16 w-full">
      <div className="flex flex-row gap-64 ps-16 contact-div">
        <div className="flex flex-col gap-6 py-16 w-1/2">
          <h3 className="contact-div-heading">
            Make an Informed Decision — Check Your VIN Today
          </h3>
          <p className="contact-div-para">
            Don't wait until it's too late. Check your VIN now and drive away
            with confidence.
          </p>
          <button className="border border-1 border-gray-950 contact-div-btn">
            Check your car
          </button>
        </div>
        <div className="w-1/2 py-0">
          <img
            src={contactImage2}
            alt=""
            className="absolute right-6 mt-12 w-1/3 "
          />
          <img src={contactImage1} alt="" className="h-72 mx-auto mt-20" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
