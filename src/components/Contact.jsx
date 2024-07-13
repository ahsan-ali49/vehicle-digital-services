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
    <div className="px-24 py-16 w-full flex flex-col gap-20">
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
      <div className="flex flex-row gap-40">
        <div className="flex flex-col gap-4 w-1/2">
          <h3 className="contact-div-heading-2 w-3/4 ">
            Get in Touch — We're Here to Help
          </h3>
          <p className="contact-div-para-2">
            Have a question about our VIN check services? Need assistance with a
            report or looking for more information? Our friendly and
            knowledgeable customer support team is ready to help.
          </p>
        </div>
        <div className="w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="w-1/3 flex flex-col items-start">
              <div className="flex flex-row gap-2 my-4 w-full">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="focus:outline-gray-950 name-form-field"
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
                  className="focus:outline-gray-950 email-form-field"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4 lg:w-full">
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
              <div className="mb-4 lg:w-full">
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
              <button type="submit" className="text-white contact-form-sbmtbtn">
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
