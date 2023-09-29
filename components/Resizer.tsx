"use client";
import React from "react";
import useDeviceType from "@/hooks/useDeviceType";

interface ResizerProps {
  MobileComponent: React.JSX.Element;
  PhabletComponent: React.JSX.Element;
  TabletComponent: React.JSX.Element;
  DesktopComponent: React.JSX.Element;
  
}

const Resizer: React.FC<ResizerProps> = ({
  DesktopComponent,
  TabletComponent,
  PhabletComponent,
  MobileComponent,
}) => {
  const deviceType = useDeviceType();

  if (deviceType === "mobile") {
    return MobileComponent;
  } else if (deviceType === "phablet") {
    return PhabletComponent;
  } else if (deviceType === "tablet") {
    return TabletComponent;
  } else {
    return DesktopComponent;
  }
};

export default Resizer;
