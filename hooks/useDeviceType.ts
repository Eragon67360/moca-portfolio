"use client";
import { useState, useEffect } from "react";

function useDeviceType() {
  const getDeviceType = (width:number) => {
    if (width <= 768) return 'mobile';
    if (width > 768 && width <= 1024) return 'tablet';
    return 'desktop';
  };

  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    // Now we use window inside useEffect, ensuring this code runs client-side after mounting
    setDeviceType(getDeviceType(window.innerWidth));

    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
}
export default useDeviceType;
