import React from "react";
import Container from "../../common/Container";
import Button from "../../common/Button";

const BigHero = () => {
  return (
    <>
      <Container className="bg-grey h-[430px] pl-[14%]">
        <div className="w-[27%] mt-[40px] mr-[10px] ">
          <h1
            className={`text-yellow font-markazi text-[68px] font-extrabold leading-10 `}>
            Little Lemon
          </h1>
          <p className="font-karla text-t-white mb-[30px] mt-[10px] text-[28px] font-semibold ">
            Chicago
          </p>
          <p className="text-t-white leading-5 text-[15px] font-roboto ">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className="mt-[25px]">
            <Button name={"Reserve a Table"} />
          </div>
        </div>
        <img
          className="object-cover h-[380px] w-[450px] absolute top-[25px] right-[10%] rounded-[20px] "
          src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pizzas_v269Oq2LM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273890"
          alt="little lemon"
        />
      </Container>
    </>
  );
};

export default BigHero;
