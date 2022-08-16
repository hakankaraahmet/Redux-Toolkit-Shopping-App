import React, { useEffect, useState } from "react";
//Routing
import { Link } from "react-router-dom";
//Redux
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchProducts } from "../../features/productSlice";
import Card from "../../components/Card";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state?.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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


console.log(products)
  
  return (
    <div className="pt-12 w-full">
      <div className="flex justify-between flex-col lg:flex-row  ">
        <input
          className="px-6 py-3 w-full lg:w-2/5 rounded-lg text-xs outline-none text-gray-500  tracking-wider "
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />
        <div className=" w-full lg:w-2/6 px-6 py-3 text-gray-500 bg-white mt-8 lg:mt-0 rounded-lg">
          Filtering Activity
        </div>
      </div>
      <div className="grid gap-8  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-12">
        {filteredDevices?.map((item: any) => (
          <Card key={item?.id} data={item} link={`/detailPage/${item?._id}`} />
        ))}
      </div>
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
