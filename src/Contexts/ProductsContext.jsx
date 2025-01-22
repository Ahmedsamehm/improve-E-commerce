import React, { createContext, useCallback, useMemo, useState } from "react";
import useProducts from "../Hooks/useProducts";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const {
    products,
    loading,
    error,
    page,
    setPage,
    totalPages,
    metadata,
    GetProducts,
    GetSpecificProduct,
    setSpecificProduct,
    specificProduct,
    toastMessage,
    showToast,

    isLoading,
  } = useProducts();

  const value = useMemo(
    () => ({
      products,
      loading,
      error,
      page,
      setPage,
      totalPages,
      metadata,
      GetProducts,
      GetSpecificProduct,
      setSpecificProduct,
      specificProduct,
      toastMessage,
      showToast,

      isLoading,
    }),
    [
      products,
      loading,
      error,
      page,
      setPage,
      totalPages,
      metadata,
      GetProducts,
      GetSpecificProduct,
      setSpecificProduct,
      specificProduct,
      toastMessage,
      showToast,

      isLoading,
    ]
  );
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
