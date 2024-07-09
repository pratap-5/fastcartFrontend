import React from "react";
import Product from "./Product";

function Products({loading}) {
  return (
    <div className="w-full  h-auto flex flex-col  justify-center items-center ">
      {loading ? (
        <span className="loading loading-dots"></span>
      ) : (
        <>
         
          <Product productType={"mobile"} />
          <Product productType={"laptop"} />
          <Product productType={"ladis tshirt"} />
          <Product productType={"men tshirt"} />
        </>
      )}
    </div>
  );
}

export default Products;
