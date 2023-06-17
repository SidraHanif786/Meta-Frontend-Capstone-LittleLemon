import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState("scrollUp");
  const scrollRef = useRef(window.scrollY);
  // in case of scrollUp , scrollY value will be large.
  // in case of scrollDown , scrollY value will be small.
  
  useEffect(() => {
    const handler = () => {
      const currentDirection = window.scrollY;
      if (currentDirection > scrollRef.current) setScroll("scrollDown");
      else setScroll("scrollUp");
      scrollRef.current = currentDirection;
      return;
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { direction: scroll, scrollY: scrollRef.current };
};
