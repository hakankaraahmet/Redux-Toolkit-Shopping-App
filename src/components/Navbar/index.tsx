import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center text-gray-700 px-6 py-3 italic font-bold text-xl rounded-lg shadow-xl">
      <Link to="/">
        <span>UPayments Store</span>
      </Link>
      <Link to="/">
        <span>Register</span>
      </Link>
    </div>
  );
};

export default Navbar;
