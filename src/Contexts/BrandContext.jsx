import React, { createContext, useMemo } from "react";
import useBrands from "../Hooks/useBrands";

export const BrandContext = createContext();
export default function BrandContextProvider({ children }) {
  const {
    memoizedBrands,
    brands,
    loading,
    error,
    page,
    setPage,
    totalPages,
    metadata,
    getSpecificBrand,
    specificBrand,
  } = useBrands();

  const value = useMemo(
    () => ({
      memoizedBrands,
      brands,
      loading,
      error,
      page,
      setPage,
      totalPages,
      metadata,
      getSpecificBrand,
      specificBrand,
    }),
    [
      memoizedBrands,
      brands,
      loading,
      error,
      page,
      setPage,
      totalPages,
      metadata,
      getSpecificBrand,
      specificBrand,
    ]
  );

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}
