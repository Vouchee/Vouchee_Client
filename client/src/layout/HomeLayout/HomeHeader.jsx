import React from "react";

import { FaSearch } from "react-icons/fa";

import { Logo } from "../../assets/img";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="flex items-center justify-between bg-primary">
      <Link to="/">
        <img src={Logo} alt="logo" className="p-4" />
      </Link>
      <div className="">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 w-full">
            <FaSearch />
          </div>
          <input
            type="search"
            className="block w-full p outline-none rounded-md px-8 py-2 items-center"
            placeholder="Tìm kiếm voucher..."
          />
        </div>
      </div>
      <Link to={"/auth/login"} className="bg-white p-2 px-8 rounded-2xl m-2">
        Đăng nhập
      </Link>
    </div>
  );
};

export default HomeHeader;
