import React, { createContext, useMemo } from "react";
import useCategories from "../Hooks/useCategories";

export const CategoriesContext = createContext();
export default function CategoriesContextProvider({ children }) {
  const { categories, GetSpecificCategory, specificCategory } = useCategories();

  const value = useMemo(
    () => ({
      categories,
      GetSpecificCategory,
      specificCategory,
    }),
    [categories, GetSpecificCategory, specificCategory]
  );
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
