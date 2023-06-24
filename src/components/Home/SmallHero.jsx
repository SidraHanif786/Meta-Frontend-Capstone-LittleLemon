import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";

const SmallHero = () => {
  return (
    <>
      <Container className={"h-[300px] !p-0 !m-0"}>
        <img
          className="absolute object-cover h-[300px] w-full"
          src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pizzas_v269Oq2LM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273890"
          alt="little lemon"
        />
        <div className="absolute right-[10%] top-[20px] w-[80%] bg-[#00000080] rounded-[20px] px-[30px] pb-[30px] ">
          <h1
            className={`text-center text-yellow font-markazi text-[60px] font-extrabold `}>
            Little Lemon
          </h1>
          <p className=" text-center font-karla text-t-white mb-[10px] text-[28px] font-semibold ">
            Chicago
          </p>
          <p className="text-center text-t-white leading-5 text-[15px] font-roboto mb-[20px]">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button
            name={"Reserve a Table"}
            className={"bg-yellow hover:bg-black hover:text-t-white !px-[34%] md:ml-[10%] sm:ml-[5%]"}
          />
        </div>
      </Container>
    </>
  );
};

export default SmallHero;
