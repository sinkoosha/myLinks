"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaSignInAlt } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("فرمت ایمیل اشتباه است ")
    .required("پر کردن این فیلد اجباری است "),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://mylinks.ir/api/login/",
        values
      ); // Adjust the API endpoint
      console.log(response.data); // Handle the response accordingly
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 text-gray-100">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">فرم ورود</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email">ایمیل</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">پسورد</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-red-800 text-gray-200 py-2 rounded ${
                  isSubmitting
                    ? "cursor-not-allowed"
                    : "hover:bg-red-800 hover:text-gray-300 shadow"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center p-2">
                    <FaSignInAlt className="animate-spin mr-2" />
                    Loading...
                  </span>
                ) : (
                  <>
                    ورود <FaSignInAlt />
                  </>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
