import React, { useState } from "react";
import useData from "../zustand/useData";
import toast from "react-hot-toast";


function useAddToCart() {

 
  const { backendUrl, setProducts } = useData();
  const [loading, setloading] = useState(false);

  const addToCart = async (productId) => {
    setloading(true);
    try {
      const res = await fetch(`${backendUrl}/api/carts/add_cart`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      toast.success("added to cart");
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, addToCart };
}

export default useAddToCart;
