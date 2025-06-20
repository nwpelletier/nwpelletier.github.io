import { useState, useEffect } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export const ScreenSizeProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(screenWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ screenWidth, isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
