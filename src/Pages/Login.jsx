import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { AuthContext } from "../Contexts/AuthContext";

import Inputs from "../Components/Inputs";
import TostMsg from "../Components/TostMsg";

export default function Login() {
  const Navigate = useNavigate();
  const { LoginUser, toastMessage, showToast, isLoading } =
    useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await LoginUser(values, Navigate);
    },
  });

  return (
    <div className="container-fluid mx-auto bg-[#1A1A1A] text-[#E0E0E0]">
      {showToast && <TostMsg message={toastMessage} />}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-4">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6 text-xl">Login to keep shopping with us</p>
          </div>
          <div className="card bg-[#2A2A2A] w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={formik.handleSubmit} className="card-body">
              <div className="form-control space-y-3">
                <Inputs
                  labelName="Email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="form-control space-y-3">
                <Inputs
                  labelName="Password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
              <label className="label">
                <Link href="" className="label-text-alt">
                  Don't have an account
                  <span
                    className="link link-hover mx-1"
                    onClick={() => Navigate("/Register")}
                  >
                    Register
                  </span>
                  ?
                </Link>
              </label>

              <div className="form-control mt-6">
                {!isLoading ? (
                  <button
                    type="submit"
                    className="btn btn-primary bg-[#4A90E2] border-none hover:bg-[#357ABD]"
                  >
                    Login
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
