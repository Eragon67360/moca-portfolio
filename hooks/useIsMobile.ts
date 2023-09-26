"use client";
import { useState, useEffect } from "react";
function useIsMobile() {
  // Default to mobile layout (or you can default to desktop based on your preference)
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check for window object
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isMobile;
}
export default useIsMobile;
