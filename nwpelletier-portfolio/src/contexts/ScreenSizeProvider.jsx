import { useState, useEffect } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export const ScreenSizeProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(screenWidth <= 900);
  const [isTablet, setIsTablet] = useState(screenWidth <= 1200);
  const [isDesktop, setIsDesktop] = useState(screenWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 900);
      setIsTablet(window.innerWidth <= 1200 && window.innerWidth > 900);
      setIsDesktop(window.innerWidth > 1200 && window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider
      value={{ screenWidth, isMobile, isTablet, isDesktop }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};
