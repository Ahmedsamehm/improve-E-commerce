import React, { useContext, useMemo } from "react";
import HeroSection from "../Components/HeroSection";
import Card from "../Components/Card";
import Skeleton from "../Components/Skeleton";
import { ProductsContext } from "../Contexts/ProductsContext";
import Pagination from "../Components/Pagination";
import useFav from "../Hooks/useFav";
import Loading from "../Components/Loading";

export default function Home() {
  const { products, loading, error, page, setPage, totalPages, metadata } =
    useContext(ProductsContext);
  const { HandleFav, getWishlist } = useFav();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="overflow-x-hidden bg-[#1A1A1A] text-[#E0E0E0]">
      <HeroSection />
      <div className="container-fluid mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : products?.map((product) => (
                <Card
                  key={product._id}
                  product={product}
                  HandleFav={HandleFav}
                  getWishlist={getWishlist}
                />
              ))}
        </div>

        {/* Pagination */}
        <div className="">
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            metadata={metadata}
          />
        </div>
      </div>
    </div>
  );
}
