'use client'
import React from "react";
import useIsMobile from "@/hooks/useIsMobile";

interface ResizerProps {
  MobileComponent: React.JSX.Element;
  DesktopComponent: React.JSX.Element;
}

const Resizer: React.FC<ResizerProps> = ({ MobileComponent, DesktopComponent }) => {
  const isMobile = useIsMobile();

  return <>{isMobile ? MobileComponent : DesktopComponent}</>;
}

export default Resizer;
