//Routing
import { Link } from "react-router-dom";

type ProductData = {
  data: any;
  link: string;
};

const Card = ({ data, link }: ProductData) => {
  return (
    <div className=" flex flex-col justify-center items-center p-4 ease-in-out duration-500 hover:scale-[1.2]">
      <Link to={link}>
        <img
          className="bg-white object-contain p-6 h-60 w-60 rounded-lg "
          src={data?.avatar}
          alt="device"
        />
      </Link>
      <div className="text-center lg:w-full xl:text-left flex flex-col justify-between flex-1 mt-4">
        <span className="capitalize px-2  text-lg  ">{data?.name}</span>
        <span className="pb-6 text-sm text-center ">$ {data?.price}</span>
      </div>
    </div>
  );
};

export default Card;
