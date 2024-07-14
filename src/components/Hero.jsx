import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import heroCar from "../assets/images/heroCar.png";
// import heroBackground from "../assets/images/heroBackground.png";

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

const Hero = () => {
  return (
    <div className="w-full rounded-b-3xl py-5 ps-2 md:ps-9 hero-bg">
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-row items-center gap-2">
          <span className="text-5xl span-text">203,244</span>
          {/* <span className="text-lg text-white whitespace-wrap w-20"> */}
          <p className="inline-block text-lg text-white leading-5 whitespace-wrap w-40">
            Successful checks this year
          </p>
        </div>
        <div className="flex flex-row">
          <div>
            <h1 className="hero-heading w-full md:w-3/4">
              Helping you choose the Right Vehicle
            </h1>
            <span className="hero-span">
              Your Free VIN Check is just a click away!
            </span>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="hidden md:block w-1/3 flex flex-col items-start">
                <div className="flex flex-row gap-2 my-4 w-full">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-field text-gray-400 focus:text-gray-950 pl-1 focus:border-2 focus:border-cyan-500"
                    placeholder="Phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-row gap-2 mb-4 w-full">
                  <Field
                    type="text"
                    id="vin"
                    name="cin"
                    className="form-field text-gray-400 focus:text-gray-950 pl-1 focus:border-2 focus:border-cyan-500"
                    placeholder="VIN"
                  />
                  <ErrorMessage
                    name="vin"
                    component="div"
                    className="text-red-500"
                  />

                  <Field
                    as="select"
                    id="package"
                    name="package"
                    className="form-field text-gray-400 focus:text-gray-950 pl-1 focus:border-2 focus:border-cyan-500"
                  >
                    <option value="" className="text-gray-100">
                      Package
                    </option>
                    <option value="P1">Package 1</option>
                    <option value="P2">Package 2</option>
                    <option value="P3">Package</option>
                  </Field>
                  <ErrorMessage
                    name="package"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-lg border border-1 border-gray-950 contact-btn"
                >
                  Get your report now
                </button>
              </Form>
            </Formik>
          </div>
          <div>
            {/* <img src={heroBackground} alt="" /> */}
            <img
              src={heroCar}
              alt="new audi a4l's"
              className="hidden md:block -mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
