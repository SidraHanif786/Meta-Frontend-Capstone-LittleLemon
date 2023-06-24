import React from "react";
import logo from "../../images/Logo.svg";
import fb from "../../images/facebook.svg";
import insta from "../../images/instagram.svg";
import pinterest from "../../images/pinterest.svg";
import twitter from "../../images/twitter.svg";

import About from "./About";

const Footer = () => {
  return (
    <div className="relative py-[20px] bg-f-grey flex flex-col items-center sm:flex-col sm:justify-center md:flex-row md:justify-between px-[20px] ">
      <img className="absolute top-[10px] left-[20px] h-[50px] " src={logo} alt="logo" />
      <div className="flex flex-col font-roboto items-center pb-[20px] sm:pt-[30px] md:ml-[20%]  ">
        <h1 className="font-markazi text-[22px] font-bold  ">Menu</h1>
        <p >Home</p>
        <p>Menu</p>
        <p>Bookings</p>
        <p>Order</p>
      </div>
      <div className="flex flex-col items-center font-karla pb-[20px]">
        <h1 className="font-markazi text-[22px] font-bold">Contact</h1>
        <p>1234 Oak Street, New York City, New York - 10001</p>
        <p>555-123-4567</p>
        <p>555-123-4567 info@sampleaddress.com</p>
      </div>
      <div>
        <h1 className="font-markazi text-[22px] font-bold">Social Media</h1>
        <div className="flex gap-[5px] h-[20px] ">
          <img src={fb} alt="" />
          <img src={pinterest} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
