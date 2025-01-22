import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import TostMsg from "../Components/TostMsg";
import Inputs from "../Components/Inputs";

export default function Register() {
  const { RegisterUser, toastMessage, isLoading, showToast } =
    useContext(AuthContext);

  const Navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number")
      .required("Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await RegisterUser(values, Navigate);
    },
  });

  return (
    <div className="container-fluid mx-auto bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-4">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6 text-xl">Join us to keep shopping with us</p>
          </div>
          <div className="card bg-[#2A2A2A] w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={formik.handleSubmit} className="card-body">
              <div className="form-control">
                <Inputs
                  labelName="Name"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <Inputs
                  labelName="Email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <Inputs
                  labelName="Password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <Inputs
                  labelName="Re-Password"
                  placeholder="Re-Password"
                  type="password"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.rePassword}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <Inputs
                  labelName="Phone"
                  placeholder="Phone"
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>

              <label className="label">
                <Link href="" className="label-text-alt">
                  You have an account already?
                  <span
                    className="link link-hover mx-1"
                    onClick={() => Navigate("/Login")}
                  >
                    Login
                  </span>
                </Link>
              </label>

              <div className="form-control mt-6">
                {!isLoading ? (
                  <button
                    type="submit"
                    className="btn btn-primary bg-[#4A90E2] border-none hover:bg-[#357ABD]"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary bg-[#4A90E2] border-none hover:bg-[#357ABD]"
                    disabled
                  >
                    <span className="loading loading-spinner"></span>
                  </button>
                )}

                {showToast && <TostMsg message={toastMessage} />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
