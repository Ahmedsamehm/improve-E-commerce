import React, { memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsContext";
import Loading from "./Loading";
import { CartContext } from "../Contexts/CartContext";
import TostMsg from "./TostMsg";

const ProductDetails = () => {
  const { id } = useParams();
  const { specificProduct, GetSpecificProduct, loading } =
    useContext(ProductsContext);
  const [mainImage, setMainImage] = useState("");
  const { AddToCart, CartLoading, showToast, toastMessage } =
    useContext(CartContext);

  useEffect(() => {
    if (id) {
      GetSpecificProduct(id);
    }
  }, [id, GetSpecificProduct]);

  useEffect(() => {
    if (specificProduct) {
      setMainImage(specificProduct?.imageCover);
    }
  }, [specificProduct]);

  return (
    <div className="container-fluid mx-auto my-3">
      {showToast && <TostMsg message={toastMessage} />}
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-auto p-4 sm:p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#2A2A2A] text-[#E0E0E0] rounded-lg shadow-md">
          <div className="flex flex-col items-center p-10">
            <img
              src={mainImage || specificProduct?.imageCover}
              alt="Main Product"
              className="w-full max-w-xl h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />

            <div className="flex gap-3 mt-4 overflow-x-auto py-2">
              {specificProduct?.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer border-2 border-[#4A90E2] hover:border-[#357ABD] transition-all duration-300"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#E0E0E0]">
              {specificProduct?.title}
            </h1>

            <div className="flex items-center">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="ml-2 text-[#B0B0B0] text-lg">
                {specificProduct?.ratingsAverage} (
                {specificProduct?.ratingsQuantity} reviews)
              </span>
            </div>

            <p className="text-2xl sm:text-3xl font-semibold text-[#E0E0E0]">
              ${specificProduct?.price}
            </p>

            <div>
              <h3 className="text-lg font-medium text-[#E0E0E0]">Color</h3>
              <div className="flex gap-3 mt-2">
                <button
                  className="w-8 h-8 rounded-full border-2 border-[#4A90E2] hover:border-[#357ABD]"
                  style={{ backgroundColor: "black" }}
                ></button>
                <button
                  className="w-8 h-8 rounded-full border-2 border-[#4A90E2] hover:border-[#357ABD]"
                  style={{ backgroundColor: "gray" }}
                ></button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#E0E0E0]">Size</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["XS", "S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border-2 border-[#4A90E2] rounded-md hover:bg-[#357ABD] text-[#E0E0E0] transition-colors duration-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => AddToCart(specificProduct)}
              disabled={CartLoading === true}
              className="w-full bg-[#4A90E2] text-[#E0E0E0] py-3 rounded-lg hover:bg-[#357ABD] transition-colors duration-300 flex items-center justify-center"
            >
              {CartLoading === true ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Add to cart"
              )}
            </button>

            <div>
              <h3 className="text-lg font-medium text-[#E0E0E0]">
                Description
              </h3>
              <p className="text-[#B0B0B0] mt-2 leading-relaxed">
                {specificProduct?.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#E0E0E0]">
                Fabric & Care
              </h3>
              <ul className="list-disc pl-5 mt-2 text-[#B0B0B0] space-y-2">
                <li>Only the best materials</li>
                <li>Ethically and locally made</li>
                <li>Pre-washed and pre-shrunk</li>
                <li>Machine wash cold with similar colors</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProductDetails);
