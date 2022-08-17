import React, { useEffect, useState } from "react";
//Routing
import { Link } from "react-router-dom";
//Redux
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchProducts } from "../../features/productSlice";
import Card from "../../components/Card";
import Filter from "../../components/Filter";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state?.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilter = (e: any) => {
    setCategory(e.target.value);
  };


  const filteredDevices = products?.filter(
    (product: any) =>
      (product.category === category || category === "All") &&
      (inputValue === ""
        ? product
        : product.name.toLowerCase().includes(inputValue.toLowerCase()))
  );

  
  return (
    <div className="w-full pt-12">
      <div className="flex flex-col justify-between lg:flex-row ">
        <input
          className="w-full px-6 py-3 text-sm tracking-wider text-gray-500 rounded-lg outline-none lg:w-2/5 "
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />
        <div className="w-full px-6 py-3 mt-8 text-gray-500 bg-white rounded-lg lg:w-2/6 lg:mt-0">
        <Filter handleFilter={handleFilter} category={category} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 xl:grid-cols-4">
        {filteredDevices?.map((item: any) => (
          <Card key={item?.id} data={item} link={`/detailPage/${item?._id}`} />
        ))}
      </div>
      <Link to="addPage">
        <img
          className="fixed w-12 bottom-20 right-10 lg:right-16 lg:w-16 hover:cursor-pointer hover:scale-[1.2]"
          src="/images/addIcon.svg"
          alt="Add"
        />
      </Link>
    </div>
  );
};

export default Home;
