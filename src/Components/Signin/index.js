import React, { useState } from "react";
import { firebase } from "../../firebase";

import { CircularProgress } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { showSuccessToast, showErrorToast } from "../Utils/tools";

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);

  //console.log("**props", props);
  const formik = useFormik({
    initialValues: {
      email: "ryan.timm@gmail.com", //temporary hardcode values
      password: "testing123",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("The Email is required"),
      password: Yup.string().required("The Password is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    },
  });
  const submitForm = (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        showSuccessToast("Welcome Back !!");
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        showErrorToast(error.message);
      });
  };
  return (
    <>
      {!props.user ? (
        <div className="container">
          <div className="signin_wrapper" style={{ margin: "100px" }}>
            <form onSubmit={formik.handleSubmit}>
              <h2>Please Login</h2>
              <input
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error_label">{formik.errors.email}</div>
              ) : null}
              <input
                placeholder="enter your password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error_label">{formik.errors.password}</div>
              ) : null}
              {loading ? (
                <CircularProgress color="secondary" className="progress" />
              ) : (
                <button type="submit">Login</button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <Redirect to={"/dashboard"} />
      )}
    </>
  );
};

export default SignIn;