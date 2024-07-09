import { useState } from "react";
import useData from "../zustand/useData";

const useGetProducts = () => {
  const { backendUrl, setProducts } = useData();
  const [loading, setloading] = useState(false);

  const getProducts = async () => {
    setloading(true);
    try {
      const res = await fetch(`${backendUrl}/api/products/get_product`, {
        credentials: "include",
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, getProducts };
};

export default useGetProducts;
