import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import contactImage1 from "../assets/images/contactImage1.png";
import contactImage2 from "../assets/images/contactImage2.png";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Must be 8 of more characters")
    .required("Required"),
});

const Contact = () => {
  return (
    <div className="px-4 md:px-24 py-16 w-full flex flex-col gap-20">
      <div className="flex flex-row gap-64 ps-4 md:ps-16 contact-div">
        <div className="flex flex-col gap-4 md:gap-6 py-4 md:py-16 w-full md:w-1/2">
          <h3 className="text-2xl md:text-4xl contact-div-heading">
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
        <div className="hidden md:block w-0 md:w-1/2 py-0">
          <img
            src={contactImage2}
            alt=""
            className="hidden md:block absolute right-6 mt-12 w-1/3 "
          />
          <img
            src={contactImage1}
            alt=""
            className="hidden md:block h-72 mx-auto mt-20"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:gap-40">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h3 className="text-4xl md:text-5xl contact-div-heading-2 w-full md:w-3/4 ">
            Get in Touch — We're Here to Help
          </h3>
          <p className="hidden md:block contact-div-para-2">
            Have a question about our VIN check services? Need assistance with a
            report or looking for more information? Our friendly and
            knowledgeable customer support team is ready to help.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="w-full flex flex-col items-start px-0 md:px-10">
              <div className="flex flex-row flex-wrap gap-y-5 gap-x-10 my-4 w-full">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="focus:outline-gray-950 w-full md:w-1/2 name-form-field"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="focus:outline-gray-950 w-full md:w-5/12 email-form-field"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4 w-full">
                <Field
                  type="text"
                  id="contact"
                  name="contact"
                  className="focus:outline-gray-950 w-full contact-form-field"
                  placeholder="Contact"
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4 w-full">
                <Field
                  type="textarea"
                  id="message"
                  name="message"
                  className="focus:outline-gray-950 w-full message-form-field"
                  placeholder="Message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="text-white mx-auto md:mx-0 contact-form-sbmtbtn"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
