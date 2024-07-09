import React from "react";
import { useNavigate } from "react-router-dom";
import useData from "../../zustand/useData";

function ProductItem({ name, imgPath, price, discount, id }) {
  if (discount.length < 3) {
    discount = "0" + discount;
  }
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/details/${id}`);
      }}
      className="card bg-base-100 min-w-40 md:min-w-[400px] md:w-[450px] shadow-xl md:h-[400px]   h-[200px]  hover:bg-slate-800 "
    >
      <figure className="md:h-[300px] w-full  h-[150px]">
        <img
          className="object w-full  mix-blend-screen  "
          src={imgPath}
          alt="Shoes"
        />
      </figure>
      <div className=" p-2  flex  flex-col gap-0 basis-[60%]">
        <h2 className="card-title md:text-3xl text-[16px] font-bold capitalize  ">
          {name}
        </h2>
        <p className=" text-[13px]  text-green-600 md:text-[20px]">₹ {price}</p>
        <p className=" text-[13px] md:text-[20px]"> discount :{discount}</p>
        <div className="card-actions justify-center md:justify-end ">
          <button
            onClick={() => {
              navigate(`/details/${id}`);
            }}
            className=" px-3 w-full md:w-auto  py-1 md:px-5 md:py-3  hover:bg-slate-100 bg-[#a8a8ac] font-semibold text-black rounded-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
