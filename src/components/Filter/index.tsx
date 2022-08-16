import React, { useEffect } from "react";
//Redux
import { getCategories } from "../../features/categorySlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type FilterProps = {
  handleFilter: (e: any) => void;
  category: any;
};

const Filter = ({ handleFilter, category }: FilterProps) => {
  const { categories } = useAppSelector((state) => state?.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log("categories", categories);
  return (
    <select
      value={category}
      onChange={(e) => handleFilter(e)}
      className="w-full rounded-lg text-sm  tracking-wider text-gray-500 outline-none cursor-pointer"
    >
      <option value="All">Categories</option>
      {categories?.map((category: any) => (
        <option key={category?.id} value={category?.name}>
          {category?.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
