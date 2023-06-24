import React from "react";
import Container from "../common/Container";
import A from "../../images/MarioAndAdrianA.jpg";
import B from "../../images/MarioAndAdrianB.jpg";

const About = () => {
  return (
    <Container className={"flex relative pb-[200px]"}>
      <div className="w-[53%] ">
        <h1 className="font-markazi text-[32px] font-bold ">Little Lemon</h1>
        <p className="font-karla mb-[40px]">Chicago</p>
        <p className="font-roboto  ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="pb-[50px] ">
        <img className="absolute right-[10%] w-[20%] sm:h-[calc(20%_+_80px)] md:h-[calc(20%_+_150px)] " src={B} alt="cookA" />
        <img
          className="absolute right-[25%] top-[200px] w-[20%] sm:h-[calc(20%_+_80px)] md:h-[calc(20%_+_150px)] sm:top-[120px] "
          src={A}
          alt="cookB"
        />
      </div>
    </Container>
  );
};

export default About;
