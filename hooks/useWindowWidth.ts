"use client";
import { useState, useEffect } from "react";

function useWindowWidth() {
  // Initialize with a default value or 0.
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial Width.
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
