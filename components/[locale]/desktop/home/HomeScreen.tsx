import AnimatedTextCharacter from "@/components/AnimatedText";
import React from "react";
import Image from "next/image";
import paw from "@/public/home/paw.png";
import photo1 from "@/public/home/photo1.jpg";

const DesktopHomeScreen = () => {
  return (
    <>
      <div className="h-[100vh] bg-linen dark:bg-falured">
        <div className="flex flex-col h-full justify-center items-center text-center select-none text-blackbean">
          <div className="flex flex-col font-bold text-5xl text-center items-center">
            <AnimatedTextCharacter />
          </div>

          <div className="relative w-1/3 mt-16 border">
            <Image src={photo1} alt="photo1" className="w-full" />
            <Image
              src={paw}
              alt="logo"
              className="absolute -top-8 -left-16 z-10 w-24 h-24"
            />
            <span className="absolute top-4 -left-9 z-20 text-white text-xs transform -rotate-[18deg]">
              Featured <br /> projects
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopHomeScreen;
