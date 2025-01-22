import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAuth from "./useAuth";

const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [specificBrand, setSpecificBrand] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [metadata, setMetadata] = useState(null);
  const { userToken } = useAuth();

  const memoizedBrands = useMemo(() => {
    return brands?.data || [];
  }, [brands]);

  const getBrands = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/brands?limit=10&page=${page}`
      );
      setBrands(data);
      setMetadata(data?.metadata);
      setTotalPages(data?.metadata?.numberOfPages);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getSpecificBrand = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/brands/${id}`
      );
      setSpecificBrand(data?.data);
    } catch (err) {
      setError(err);
    } finally {
    }
  }, []);

  useEffect(() => {
    getBrands(page);
  }, [page, getBrands]);

  return {
    memoizedBrands,
    loading,
    brands,
    error,
    page,
    setPage,
    totalPages,
    metadata,
    getSpecificBrand,
    specificBrand,
  };
};

export default useBrands;
