import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar1 } from "../All/Navbar";
import { Footer } from "../All/Footer";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required(),
  });

  const handleSubmit = async (values) => {
    const resp = await axios.post("http://localhost:3001/users/login", {
      email: values.email,
      password: values.password,
    });

    if (resp.status === "ok") {
      alert(resp.message);
      setIsLoggedIn(() => true);
      navigate("/dashboard", { replace: true });
    } else {
      alert("failed");
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="flex items-center justify-center relative top-[-30px] min-h-screen">
        <div className="w-full max-w-md rounded shadow-md">
          <h1 className="text-xl font-bold text-center mt-8 mb-4">Sign In</h1>
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            <Form className="p-4">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 mt-4"
              >
                Sign In
              </button>
            </Form>
          </Formik>
          <p className="text-center mt-4">
            Don't have an account?
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
