import "./App.css";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "./components/KErrorMessage";

const validationSchema = yup.object({
  name: yup.string().required("First Name is required!"),
  lastname: yup.string().required("lastname is required!"),
  Contact_Number: yup
    .number()
    .min(1000000000, "Not valid Phone Number!")
    .max(9999999999, "Phone Number should be 10 digit!")
    .required("Contact number is required"),
  Password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required("Password is required!"),
  Cpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("Password"), null], "Passwords must match"),

  Gender: yup.string().required("Gender is required!"),
  birthdate: yup.date().required("Birthdate is required!"),
  Income: yup.string().required("Income is required!"),
  about: yup
    .string()
    .min(5, "This field required at least 100 characters")
    .max(500, "too long string!")
    .required(),
  social: yup
    .array()
    .of(
      yup
        .string()
        .min(5, "Too small!")
        .max(10, "Too long!")
        .required("Social Platform is required!")
    )
    .min(1, "Social Platform is required"),
});

const App = () => {
  return (
    <div className="text" style={{ backgroundColor: "lightpink" }}>
      <h1 className="heading">Registration Formik Form</h1>
      <br />
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          lastname: "",
          Gender: "",
          birthdate: "",
          Income: "",
          about: "",
          Password: "",
          Cpassword: "",
          Contact_Number: "",
          social: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>First Name:- </label>
          <Field name="name" type="text" />
          <br />
          <KErrorMessage name="name" />
          <br />
          <label>Last Name:- </label>
          <Field name="lastname" type="text" />
          <br />
          <KErrorMessage name="lastname" />
          <br />
          <label>Contact Number:- </label>
          <Field name="Contact_Number" type="number" />
          <br />
          <KErrorMessage name="Contact_Number" />
          <br />
          <label>Gender:- </label>
          <br /> <br />
          <Field name="Gender" value="Female" type="radio" />
          <label>Female </label>
          <Field name="Gender" value="Male" type="radio" />
          <label>Male</label>
          <Field name="Gender" value="Other" type="radio" />
          <label>Other</label>
          <br />
          <KErrorMessage name="Gender" />
          <br />
          <label>BirthDate:- </label>
          <Field name="birthdate" type="date" />
          <br />
          <KErrorMessage name="birthdate" />
          <label>Income:- </label>
          <Field name="Income" as="select">
            <option value="">Select</option>
            <option value="$1000">Below $1000</option>
            <option value="$1500">Below $1500</option>
            <option value="$2000">Below $2000</option>
            <option value="$2500">Below $2500</option>
            <option value="$3000">Below $3000</option>
          </Field>
          <br />
          <br />
          <label>Why You Want To Join:- </label>
          <Field name="about" as="textarea" />
          <br />
          <KErrorMessage name="about" />
          <br />
          <label>Password:- </label>
          <Field name="Password" type="password" />
          <br />
          <KErrorMessage name="Password" />
          <br />
          <label>Confirm Password:- </label>
          <Field name="Cpassword" type="password" />
          <br />
          <KErrorMessage name="Cpassword" />

          <br />
          <label>Social Platform Id's:- </label>
          <br />
          <KErrorMessage name="social" />
          <br />
          <label>Facebook </label>
          <Field name="social[0]" type="text" />
          <br />
          <KErrorMessage name="social.0" />
          <br />
          <label>Instagram </label>
          <Field name="socia[1]" type="text" />
          <br />
          <KErrorMessage name="social.1" />
          <br />
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
