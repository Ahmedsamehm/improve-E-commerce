import React, { useContext, useState } from "react";
import delivery from "../assets/undraw_delivery-address_409g.svg";
import Inputs from "../Components/Inputs";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CartContext } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const { CheckOut, cart, toastMessage, showToast, isLoading } =
    useContext(CartContext);
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      details: "cairo",
      phone: "0100000000",
      city: "egy",
    },
    validationSchema: Yup.object({
      details: Yup.string().required("Address is required"),
      phone: Yup.string().required("Phone is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: async (values) => {
      if (!cart?.cartId) {
        console.error("cartId is undefined");
        return;
      }

      try {
        await CheckOut(values, cart?.cartId, Navigate);
      } catch (error) {
        console.error("Failed to checkout:", error);
      }
    },
  });

  return (
    <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="min-h-screen flex justify-center items-center">
        <div className="card lg:card-side bg-[#2A2A2A] shadow-sm w-full max-w-7xl p-10 ">
          <figure className="w-full lg:w-1/2">
            <img
              src={delivery}
              alt="Album"
              className="w-full h-64 lg:h-auto object-cover"
            />
          </figure>
          <div className="card-body w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
            <h2 className="card-title text-2xl sm:text-3xl lg:text-4xl">
              Checkout
            </h2>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">
              Please enter your details to complete the order.
            </p>

            {/* Input Fields */}
            <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
              {/* Phone Input */}
              <div className="form-control">
                <Inputs
                  type="tel"
                  labelName="Phone"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-600">{formik.errors.phone}</p>
                )}
              </div>

              {/* Address Input */}
              <div className="form-control">
                <Inputs
                  type="text"
                  labelName="Address"
                  placeholder="Enter your address"
                  name="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.details && formik.errors.details && (
                  <p className="text-red-600">{formik.errors.details}</p>
                )}
              </div>

              {/* City Input */}
              <div className="form-control">
                <Inputs
                  type="text"
                  labelName="City"
                  placeholder="Enter your city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="text-red-600">{formik.errors.city}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-end mt-6">
                {isLoading ? (
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm sm:btn-md bg-[#4A90E2] border-none hover:bg-[#357ABD] text-[#E0E0E0]"
                    disabled
                  >
                    <span className="loading loading-spinner"></span>
                    Processing...
                  </button>
                ) : (
                  <button
                    onClick={CheckOut}
                    type="submit"
                    className="btn btn-primary text-sm sm:text-base lg:text-lg bg-[#4A90E2] border-none hover:bg-[#357ABD]"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        {showToast && <TostMsg message={toastMessage} />}
      </div>
    </div>
  );
}
