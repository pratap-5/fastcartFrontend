import React, { useState } from "react";
import useData from "../zustand/useData";

function useGetProduct() {
  const { backendUrl, setProductDetails } = useData();
  const [loading, setloading] = useState(false);

  const getProductDetails = async (productId) => {
    setloading(true);
    try {
      const res = await fetch(
        `${backendUrl}/api/products/get_details/${productId}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setProductDetails(data.product);

    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, getProductDetails };
}

export default useGetProduct;
