import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import BigHero from "./BigHero";
import SmallHero from "./SmallHero";

const Hero = () => {
  const { screenWidth } = useWindowSize();
  return <>{screenWidth > 770 ? <BigHero /> : <SmallHero />}</>;
};

export default Hero;
