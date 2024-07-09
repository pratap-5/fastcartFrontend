import React, { useEffect, useState } from "react";
import Header from "../common/Header";

import LeftDetails from "../components/products/LeftDetails";
import RightDetails from "../components/products/RightDetails";

import { useParams } from "react-router-dom";
import useData from "../zustand/useData";
import useGetProduct from "../hooks/useGetProduct";

function ProductDetails() {
  const { productId } = useParams();
  const { productDetails } = useData();
  const { loading, getProductDetails } = useGetProduct();

  useEffect(() => {
    getProductDetails(productId);
  }, []);

  const offers = [
    " Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transactionon order of ₹200 and aboveT&C",
    "   Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
    "   Bank Offer10% off up to ₹1,500 on BOBCARD Transactions, on orders of ₹7,500 and aboveT&C",
    " Special PriceGet extra 40% off (price inclusive of cashback/coupon)T&C",
  ];

  return (
    <div className="w-full  relative h-full  min-h-screen bg-[#e6dfe8]  rounded-t-[50px] p-2">
      <Header />

      {loading && !productDetails.product ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <div className="w-full  md:h-[650px]   gap-1 flex  flex-col md:flex-row">
          <LeftDetails
            productId={productId}
            imageArray={productDetails?.productImages || []}
          />
          <RightDetails
            companyName={productDetails?.companyName || ""}
            productName={productDetails?.productName || ""}
            sizes={productDetails?.productSizes || []}
            colors={productDetails?.productColors || []}
            offers={offers}
            price={productDetails?.productPrice || ""}
            discount={productDetails?.productDiscount || ""}
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
