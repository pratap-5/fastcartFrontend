import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { FaTruckFast } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";

function Header() {
  const navigate = useNavigate();
  const {loading,logout}=useLogout()

  const [search, setSearch] = useState("");
  return (
    <header className="   w-full h-[80px]  flex gap-4  items-center justify-between  px-5 bg-slate-900  text-black ">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className=" md:text-4xl text-3xl font-bold  flex text-white "
      >
        DoTasks
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
          placeholder="search tasks"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute right-2  top-0   h-full flex items-center justify-center">
          <FaSearch />
        </button>
      </form>

      <div className="flex gap-2">
        <span
          onClick={() => navigate("/addtask")}
          className="btn  bg-green-700 capitalize"
        >
          Add Task
        </span>
        <span
          onClick={() => {
            logout();
            navigate("/")
          }}
          className="btn  bg-red-700 capitalize"
        >
          {loading?<span className="loading loading-spinner"></span> :"logout"}
        
        </span>
      </div>
    </header>
  );
}

export default Header;
