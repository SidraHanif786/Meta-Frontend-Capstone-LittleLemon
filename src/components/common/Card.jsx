import React from "react";
import Button from "./Button";

const Card = ({ img, name, price, des }) => {
  return (
    <>
      <div className="h-[460px] w-[300px] bg-bg-grey rounded-[20px] drop-shadow-md mb-[20px] ">
        <img
          className="rounded-[20px] w-full h-[200px] object-cover"
          src={img}
          alt="menu"
        />
        <div className="mt-[20px] px-[20px] relative ">
          <div className="flex justify-between">
            <div className="font-markazi text-[25px] font-bold ">{name}</div>
            <div className="text-[#e46e6e] font-bold mt-[6px] ">{price}</div>
          </div>
          <p className="text-[#7e7e7e] text-[15px] mb-[25px] h-[128px]">
            {des}
          </p>
          <Button
            name={"Order"}
            className={
              " bg-t-white rounded-[8px] border-solid border-[1px] border-gray-300 hover:bg-yellow "
            }
          />
        </div>
      </div>
    </>
  );
};

export default Card;
