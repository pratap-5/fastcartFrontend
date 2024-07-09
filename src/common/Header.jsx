import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

import { FaShoppingCart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

function Header() {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const { loading, logout } = useLogout();

  const [search, setSearch] = useState("");
  return (
    <header className="   w-full h-[80px]  flex gap-4  items-center justify-between  px-5  text-black ">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className=" md:text-4xl text-3xl font-bold  flex "
      >
        Fastcart
        <span className="flex justify-center items-center">
          <FaTruckFast />
        </span>
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${search}`);
        }}
        className="md:w-[600px]  w-[300px]  h-[50px] relative   "
      >
        <input
          className=" outline-none  input bg-[#eee]  w-full h-full px-2 rounded-2xl "
          value={search}
          type="text"
          placeholder="search your item"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute right-2  top-0   h-full flex items-center justify-center">
          <FaSearch />
        </button>
      </form>

      <div className=" md:flex justify-center items-center gap-4  hidden ">
        {authUser ? (
          <span className="  cursor-pointer hover:text-[#3b3b3b]  text-[30px]">
            <IoPersonCircleSharp />
          </span>
        ) : (
          ""
        )}

        <span
          onClick={() => {
            navigate("/cart");
          }}
          className="  cursor-pointer hover:text-[#3b3b3b] relative text-[30px]"
        >
          <FaShoppingCart />{" "}
          <span className="  absolute bg-orange-600  w-[13px] h-[13px] rounded-full top-0 right-0 text-center flex justify-center items-center text-[10px] font-bold  text-black">
            1
          </span>
        </span>

        {authUser ? (
          <button
            onClick={() => {
              if (logout()) navigate("/");
            }}
            className=" btn  "
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "logout"
            )}
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="  btn "
          >
            login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
