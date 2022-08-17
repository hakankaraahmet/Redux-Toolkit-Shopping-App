import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../features/productSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
const DetailPage = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { selectedProduct } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(itemId));
  }, [itemId,dispatch]);

  return (
    <div className="flex flex-col xl:px-20 max-w-6xl mx-auto mt-12 divide-y divide-black text-left">
      <div className="flex flex-col sm:flex-row gap-x-8 pb-10">
        <img
          className="bg-white w-60 p-6 rounded shadow-xl"
          src={selectedProduct?.product?.avatar}
          alt="device"
        />

        <div className="flex flex-col justify-between pt-4 sm:pt-0">
          <div>
            <p className="text-3xl  font-semibold capitalize">
              {selectedProduct?.product?.name}
            </p>
            <span>{selectedProduct?.product?.category}</span>
          </div>
          <p className="text-xl font-semibold">
            $ {selectedProduct?.product?.price}
          </p>
        </div>
      </div>

      <div>
        <h4 className=" pt-6 pb-2 text-xl">Description</h4>
        <p className="text-gray-500 capitalize">
          {selectedProduct?.product?.description}
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
