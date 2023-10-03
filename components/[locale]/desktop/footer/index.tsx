import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Logos from "./Logos";
const DesktopFooter = () => {
  return (
    <>
      <div className="flex bg-linen dark:bg-blackbean justify-between p-12 border">
        <div className="flex justify-center items-center space-x-4">
          <Image src={logo} alt="logo" />
          <p >UX MOCA is headquartered in Strasbourg, France.</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex flex-col justify-between">
            <p>Home</p>
            <p>Featured work</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
            <Logos />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFooter;
