import React, { useContext, useEffect } from "react";
import { CategoriesContext } from "../Contexts/CategoriesContext";
import CardBody from "../Components/CardBody";
import Model from "../Components/model";

export default function Categories() {
  const { categories, GetSpecificCategory, specificCategory } =
    useContext(CategoriesContext);
  const handleCategoryClick = async (id) => {
    await GetSpecificCategory(id);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    handleCloseModal;
  }, []);

  return (
    <div className="container-fluid mx-auto p-10 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories?.data?.map((category, index) => (
          <CardBody
            key={index}
            value={category}
            img={category?.image}
            title={category?.name}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      <Model
        img={specificCategory?.image}
        title={specificCategory?.name}
        value={specificCategory}
        description={specificCategory?.description}
        onClose={handleCloseModal}
      />
    </div>
  );
}
