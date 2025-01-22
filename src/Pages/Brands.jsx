import React, {
  memo,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import BrandCard from "../Components/BrandCard";
import Skeleton from "../Components/Skeleton";
import Pagination from "../Components/Pagination";
import Model from "../Components/model";
import { BrandContext } from "../Contexts/BrandContext";
import CardBody from "../Components/CardBody";

function Brands() {
  const {
    memoizedBrands,
    loading,
    page,
    setPage,
    totalPages,
    getSpecificBrand,
    specificBrand,
  } = useContext(BrandContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandClick = useCallback(async (id) => {
    await getSpecificBrand(id);
  }, []);

  useEffect(() => {
    if (specificBrand) {
      setIsModalOpen(true);
    }
  }, [specificBrand]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container-fluid mx-auto p-4 sm:p-6 md:p-10 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : memoizedBrands?.map((brand, index) => (
              <CardBody
                key={index}
                value={brand}
                img={brand?.image}
                title={brand?.name}
                onClick={() => handleBrandClick(brand._id)}
              />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />

      {isModalOpen && (
        <Model
          img={specificBrand?.image}
          title={specificBrand?.name}
          value={specificBrand}
          description={specificBrand?.description}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default memo(Brands);
