import { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import useTostMsg from "./useTostMsg";

export default function useProducts(id) {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [metadata, setMetadata] = useState(null);
  const [specificProduct, setSpecificProduct] = useState(null);
  const { DisplayTostMsg, toastMessage, showToast, setIsLoading, isLoading } =
    useTostMsg();

  const limit = 10;

  const GetProducts = useCallback(async (page = 1) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?limit=${limit}&page=${page}`
      );
      setProducts(data?.data);
      setMetadata(data?.metadata);
      setTotalPages(data?.metadata?.numberOfPages);
    } catch (err) {
      DisplayTostMsg(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const GetSpecificProduct = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );
      setSpecificProduct(data?.data);
    } catch (err) {
      DisplayTostMsg(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    GetProducts(page);
    if (id) {
      GetSpecificProduct(id);
    }
  }, [page, GetProducts, id, GetSpecificProduct]);

  return {
    products,
    toastMessage,
    showToast,
    isLoading,
    page,
    specificProduct,
    setSpecificProduct,
    totalPages,
    metadata,
    GetProducts,
    GetSpecificProduct,
    setPage,
  };
}
