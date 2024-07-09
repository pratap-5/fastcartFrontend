import React from "react";

import { FaStar } from "react-icons/fa";
import { MdCurrencyRupee, MdLocalOffer } from "react-icons/md";

function RightDetails({
  companyName,
  productName,
  sizes,
  colors,
  offers,
  price,
  discount,
}) {
  return (
    <div className="basis-[100%] md:basis-[60%]  p-1  shadow-2xl ">
      <h2 className="text-xl capitalize">{companyName}</h2>
      <h3 className="text-xl capitalize text-black font-semibold">
        {productName}
      </h3>
      <div className="flex flex-col gap-2 ">
        <p className="text-green-600 ">
          ₹{price - price * (discount.slice(0, 2) / 100)}{" "}
        </p>
        <span className="flex gap-2 items-center justify-start">
          <p className="text-2xl text-black flex items-center font-semibold">
            ₹{price - price * (discount.slice(0, 2) / 100)}
          </p>
          <p className=" line-through flex items-center ">₹{price}</p>
          <p className="text-green-600"> {discount}off</p>
        </span>

        <span className="flex gap-2 ">
          <p className=" px-1 rounded-2xl  flex items-center text-black bg-green-500  ">
            4.1 <FaStar />
          </p>
          <p className="font-semibold">1233 ratings and 203 reviews </p>
        </span>
      </div>

      <div className="flex flex-col gap-1 m-3  text-black text-[18px]">
        <Colors colors={colors} />
        <Sizes sizes={sizes} />
      </div>

      <DiscountOffer offers={offers} />
    </div>
  );
}

export default RightDetails;

const Colors = ({ colors }) => {
  return (
    <div className="flex gap-2  flex-col sm:flex-row flex-warp">
      <h1 className="capitalize ">available colors :</h1>
      {colors.map((color, ind) => (
        <div key={ind} className="flex items-center gap-[2px]  ">
          <p className="font-semibold  text-black">{color}</p>
          <span
            className={`w-[20px]  border h-[20px]   bg-[${color.trim()}]   `}
          ></span>
        </div>
      ))}
    </div>
  );
};

const Sizes = ({ sizes }) => {
  return (
    <div className="flex gap-2 flex-col sm:flex-row ">
      <h1 className="capitalize">available size :</h1>
      {sizes.map((size, ind) => (
        <p key={ind} className="font-semibold  text-black">
          {size}
        </p>
      ))}
    </div>
  );
};

const DiscountOffer = ({ offers }) => {
  return (
    <div className=" flex flex-col gap-1 mt-3">
      <h1 className="text-[18px] capitalize text-[green] font-semibold">
        available-offers
      </h1>

      {offers.map((offer, ind) => (
        <p key={ind} className="flex  items-center text-black ">
          <span>
            <MdLocalOffer />
          </span>

          {offer}
        </p>
      ))}
    </div>
  );
};
