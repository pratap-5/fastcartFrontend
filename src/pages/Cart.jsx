import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Item from "../components/Item";
import useGetCart from "../hooks/useGetCart";
import useData from "../zustand/useData";

function Cart() {
  const { carts } = useData();
  const { loading, getCart } = useGetCart();
  useEffect(() => {
    getCart();
  }, []);

  const cartList = carts.map((cart, ind) => {
    const cartproduct = cart.productId;
    return (
      <Item
        key={ind}
        id={cartproduct._id}
        name={cartproduct.productName}
        price={cartproduct.productPrice}
        imageUrl={cartproduct.productImages[0]}
        discount={cartproduct.productDiscount}
      />
    );
  });
  return (
    <div className=" w-full  h-full min-h-screen  bg-[#e6dfe8]  rounded-t-[50px] p-2">
      <Header />
      <div className=" grid  md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4   p-2   ">
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>{cartList}</>
        )}
      </div>
    </div>
  );
}

export default Cart;
