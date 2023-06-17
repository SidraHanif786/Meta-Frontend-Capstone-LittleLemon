import React from "react";
import Button from "../../common/Button";

const Card = () => {
  return (
    <>
      <div className="h-[450px] w-[300px] bg-bg-grey rounded-[20px] drop-shadow-md ">
        <img
            className="rounded-[20px] w-full h-[200px] object-cover"
          src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pizzas_v269Oq2LM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273890"
          alt="menu"
        />
        <div className="mt-[20px] px-[20px] relative ">
            <div className="flex justify-between">
                <div className="font-markazi text-[25px] font-bold ">Brouschet</div>
                <div className="text-[#e46e6e] font-bold mt-[6px] ">$12.55</div>
            </div>
            <p className="text-[#7e7e7e] text-[15px] mb-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore animi voluptate non adipisci. Fugit maxime incidunt est, excepturi voluptate omnis atque ducimus officia.</p>
            <Button name={'Order'} className={' bg-t-white rounded-[8px] border-solid border-[1px] border-gray-300 hover:bg-yellow '}/>

        </div>
      </div>
    </>
  );
};

export default Card;
