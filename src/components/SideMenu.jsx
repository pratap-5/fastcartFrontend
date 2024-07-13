import React, { useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoPersonCircleSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";


function SideMenu() {
  const menu = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const { loading, logout } = useLogout();
  return (
    <>
      <div
        ref={menu}
        className={` pt-5  justify-start   items-center  p-3   gap-4 md:flex-row md:relative md:bg-transparent md:w-auto  
      md:h-auto   bg-[#150619]  fixed  flex top-0 md:left-0  flex-col w-[70%] h-screen transition-left duration-300 z-10
       ${openMenu ? "left-[0] text-white " : "left-[-70%] "}
       `}
      >
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

        <span
          onClick={() => setOpenMenu(!openMenu)}
          className="text-2xl md:hidden "
        >
          <IoIosCloseCircle />
        </span>
      </div>
      <span
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        className="text-2xl md:hidden "
      >
        {openMenu ? <RxCross2 /> : <IoMenu />}
      </span>
    </>
  );
}

export default SideMenu;
