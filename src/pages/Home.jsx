import React from "react";
import Hero from "../components/Home/Hero";
import Menu from "../components/Home/Menu";
import About from "../components/Home/About";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
};

export default Home;
