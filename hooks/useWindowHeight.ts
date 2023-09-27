"use client";
import { useState, useEffect } from "react";

function useWindowHeight() {
  // Initialize with a default value or 0.
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial height.
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowHeight;
}

export default useWindowHeight;
