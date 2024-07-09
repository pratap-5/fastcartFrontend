import React from "react";
import useData from "../zustand/useData";
import { useNavigate } from "react-router-dom";

function Item({ id, imageUrl, name, price, discount }) {
  if (discount.length < 3) {
    discount = "0" + discount;
  }
  const { backendUrl } = useData();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/details/${id}`);
      }}
      className="card card-side bg-[#ccc] shadow-xl p-1  hover:bg-slate-300"
    >
      <figure>
        <img
          className="h-full rounded-2xl"
          src={`${backendUrl}/images/${imageUrl}`}
          alt="product"
        />
      </figure>
      <div className="card-body  p-2  text-black justify-between gap-0 text-xl capitalize">
        <div>
          <h2 className="card-title gap-0  text-3xl  ">{name}</h2>
          <div className=" md:visible hidden divider"></div>
          <hr className="bg-black" />
          <p>₹{price - price * (discount.slice(0, 2) / 100)}</p>
          <p className="line-through">discount:₹{price}</p>
          <p>discount:{discount}</p>
        </div>

        <div className="card-actions justify-end  ">
          <button
            onClick={() => {
              navigate(`/details/${id}`);
            }}
            className="btn btn-primary capitalize w-[100px]  text-[12px] hover:bg-slate-400"
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
