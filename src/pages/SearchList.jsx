import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Header from "../common/Header";
import { useNavigate, useParams } from "react-router-dom";
import useData from "../zustand/useData";
import useSearch from "../hooks/useSearch";

function SearchList() {
  const { searchItem } = useParams();

  const { loading, getSearchList } = useSearch();

  const { searchList } = useData();

  useEffect(() => {
    getSearchList(searchItem);
  }, [searchItem]);

  return (
    <div className=" w-full  h-auto min-h-screen  bg-[#e6dfe8]  rounded-t-[50px] p-1">
      <Header />
      <div className=" grid  md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4   p-2 ">
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            {searchList.map((searcedProduct, ind) => (
              <Item
                key={ind}
                id={searcedProduct._id}
                name={searcedProduct.productName}
                price={searcedProduct.productPrice}
                imageUrl={searcedProduct.productImages[0]}
                discount={searcedProduct.productDiscount}
              />
            ))}
          </>
        )}
        {searchList.length > 0 ? "" : "no searches found"}
      </div>
    </div>
  );
}

export default SearchList;
