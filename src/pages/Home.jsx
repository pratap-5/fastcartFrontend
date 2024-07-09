import React, { useEffect, useState } from "react";

import Header from "../common/Header";
import ImageCoursal from "../components/ImageCoursal";
import Products from "../components/products/Products";
import useGetProducts from "../hooks/useProducts";

function Home() {
  const { loading, getProducts } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" w-full  h-full  bg-[#e6dfe8]  rounded-t-[50px] p-2">
      <Header />
      <ImageCoursal />
      <Products loading={loading} />
    </div>
  );
}

export default Home;
