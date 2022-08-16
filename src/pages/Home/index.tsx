import React from "react";
//Routing
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-12 w-full">
      <div className="flex justify-between flex-col lg:flex-row  ">
        <input
          className="px-6 py-3 w-full lg:w-2/5 rounded-lg text-xs outline-none text-gray-500  tracking-wider "
          type="text"
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />
        <div className=" w-full lg:w-2/6 px-6 py-3 text-gray-500 bg-white mt-8 lg:mt-0 rounded-lg">
          Filtering Activity
        </div>
      </div>
      <div className="">Here i will map filtered devices</div>
      <Link to="add-item">
        <img
          className="fixed bottom-20 right-10 lg:right-32 w-12 lg:w-16 hover:cursor-pointer"
          src="/images/addIcon.svg"
          alt="Add"
        />
      </Link>
    </div>
  );
};

export default Home;
