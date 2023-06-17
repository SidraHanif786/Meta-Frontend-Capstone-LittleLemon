import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const getSize = () => ({
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth,
  });

  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
