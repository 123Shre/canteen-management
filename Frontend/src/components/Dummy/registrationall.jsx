import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import { Navbar1 } from "../All/Navbar";
import { Footer } from "../All/Footer";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required(),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/users/register",
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      );

      // Handle the successful response here.
      // const data = response.data;

      // Return the data
      console.log(response);
      // return data;
    } catch (error) {
      // Handle the error here.
      console.log(error);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md rounded-md shadow-md">
          <h1 className="text-xl font-bold text-center mt-8 mb-4">Sign Up</h1>
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
          >
            <Form className="p-4">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
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
                Sign Up
              </button>
            </Form>
          </Formik>
          <p className="text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
