import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import useData from "../../zustand/useData";
import useAddToCart from "../../hooks/useAddToCart";
import { Navigate, useNavigate } from "react-router-dom";

function LeftDetails({ productId, imageArray }) {

  const navigate=useNavigate()
  const [imageInd, setImageInd] = useState(0);
  const { backendUrl } = useData();
  const { loading, addToCart } = useAddToCart();
  return (
    <div className=" basis-[100%] md:basis-[40%] shadow-2xl flex flex-col  gap-2 items-center p-1 ">
      <div className="flex items-center justify-start gap-2 p-1 w-full h-[80px] ">
        {imageArray.map((url, ind) => (
          <Image
            backendUrl={backendUrl}
            url={url}
            setImageInd={setImageInd}
            ind={ind}
            key={ind}
            imageInd={imageInd}
          />
        ))}
      </div>
      <figure className=" p-2  bg-[#ccc] rounded-md w-full h-[350px]  md:h-[70%] flex items-center justify-center overflow-hidden">
        <img
          className="rounded-md object  h-full max-w-full"
          src={`${backendUrl}/images/${imageArray[imageInd]}`}
          alt=" shoe"
        />
      </figure>

      <div className=" flex-1   flex items-center justify-center gap-1  w-full    p-1 ">
        <button
          className="btn h-10 md:h-16 hover:bg-slate-500 text-[14px] md:text-xl border-none flex-1 capitalize"
          onClick={() => {
            addToCart(productId);
          }}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <>
              add to cart <FaCartArrowDown />
            </>
          )}
        </button>
        <button 
        onClick={()=>{
         navigate(`/payment/${productId}`)
        }}
        className="btn h-10 md:h-16 hover:bg-orange-700 bg-orange-600 text-white text-[14px] md:text-xl border-none flex-1  capitalize">
          buy now <AiFillThunderbolt />
        
        </button>
      </div>
    </div>
  );
}

export default LeftDetails;

const Image = ({ backendUrl, url, setImageInd, ind, imageInd }) => {
  return (
    <figure
      onMouseEnter={() => setImageInd(ind)}
      className={`w-[100px] max-w-full   transition-all duration-100 h-[70px] bg-[#ccc] overflow-hidden  flex justify-center  items-center rounded-md p-[2px]  shadow-xl  ${
        imageInd == ind ? "border-[2px] border-blue-700 " : ""
      }`}
    >
      <img
        loading="lazy"
        className="object  rounded-md  h-full"
        src={`${backendUrl}/images/${url}`}
        alt=""
      />
    </figure>
  );
};
