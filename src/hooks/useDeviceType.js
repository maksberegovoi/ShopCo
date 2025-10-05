import { useEffect, useState } from "react";

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const calculateDeviceType = () => {
      const width = window.innerWidth;
      return {
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      };
    };

    const handleResize = () => {
      setDeviceType(calculateDeviceType());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};
