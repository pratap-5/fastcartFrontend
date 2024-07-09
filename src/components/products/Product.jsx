import React from "react";
import ProductItem from "./ProductItem";
import useData from "../../zustand/useData";

function Product({ productType }) {
  const { products, backendUrl } = useData();
  const productList = products.filter((element) => {
    return element.productType.trim().includes(productType);
  });

  return (
    <div className="w-full h-full shadow-3xl ">
      <h1 className="capitalize text-xl sm:text-3xl   text-black font-bold mb-2">
        {productType}
      </h1>

      <div className="flex  items-start justify-start gap-5 p-2 overflow-x-auto">
        {productList.map((element, ind) => (
          <ProductItem
            key={ind}
            id={element._id}
            imgPath={`${backendUrl}/images/${element.productImages[0]}`}
            name={element.productName}
            price={element.productPrice}
            discount={element.productDiscount}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
