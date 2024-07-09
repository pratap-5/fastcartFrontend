import React, { useState } from "react";
import Header from "../common/Header";
import { useNavigate, useParams } from "react-router-dom";
import useOrder from "../hooks/useOrder";

const PaymentPage = () => {
  const { loading, makeOrder } = useOrder();

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const { productId } = useParams();

  

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (makeOrder(amount, productId, cardNumber)) navigate("/");
  };

  return (
    <div className="w-full  h-screen  bg-[#e6dfe8]  rounded-t-[50px] p-2 ">
      <Header />
      <div className="flex items-center justify-center  ">
        <div className="   p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center">Payment Page</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="name"
                className="  input input-ghost w-full px-3 py-2 mt-1  bg-slate-200  rounded-md focus:ring-blue-500 "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className=" input input-ghost w-full px-3 py-2 mt-1  bg-slate-200  rounded-md focus:ring-blue-500 "
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  className=" input input-ghost w-full px-3 py-2 mt-1  bg-slate-200  rounded-md focus:ring-blue-500 "
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className=" input input-ghost w-full px-3 py-2 mt-1  bg-slate-200  rounded-md focus:ring-blue-500 "
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className=" input input-ghost w-full px-3 py-2 mt-1  bg-slate-200  rounded-md focus:ring-blue-500 "
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className=" btn    w-full py-2 text-white 0 rounded-md 0 focus:outline-none  focus:ring-offset-2"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                " Pay Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
