import React from "react";
import Logos from "./Logos";
import Image from "next/image";
import logo from "@/public/logo.svg";

const MobileFooter = () => {
  return (
    <>
      <div className="bg-linen dark:bg-blackbean flex flex-col p-8 pb-20 border-t-2 border-blackbean/50 dark:border-secondary/50 space-y-7">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <Image src={logo} alt="logo" width={141} />
            </div>
            <p className="text-xs w-full">
              UX MOCA is headquartered in Strasbourg, France.
            </p>
          </div>
        </div>

        <div className="flex space-x-3 justify-between">
          <div className="flex space-x-3">
            <div className="flex flex-col">
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
            </div>
          </div>
          <Logos />
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
