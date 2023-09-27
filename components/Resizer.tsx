"use client";
import React from "react";
import useDeviceType from "@/hooks/useDeviceType";

interface ResizerProps {
  DesktopComponent: React.JSX.Element;
  MobileComponent: React.JSX.Element;
  TabletComponent: React.JSX.Element;
}

const Resizer: React.FC<ResizerProps> = ({
  DesktopComponent,
  TabletComponent,
  MobileComponent,
}) => {
  const deviceType = useDeviceType();

  if (deviceType === "mobile") {
    return MobileComponent;
  } else if (deviceType === "tablet") {
    return TabletComponent;
  } else {
    return DesktopComponent;
  }
};

export default Resizer;
