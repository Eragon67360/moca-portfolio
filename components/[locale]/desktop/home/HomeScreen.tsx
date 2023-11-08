import React from "react";
import { Carousel } from "./Carousel";
import AnimatedTextCharacter from "@/components/AnimatedText";

const DesktopHomeScreen = () => {

  return (
    <>
      <div className="h-[90vh] bg-linen dark:bg-falured pt-[190px] overflow-x-hidden">
        <div className="flex flex-col h-full items-center text-center select-none text-blackbean">
          <div className="flex flex-col font-bold text-5xl text-center items-center">
            <AnimatedTextCharacter />
          </div>

          <div className="relative w-1/3 mt-16">
            <Carousel />

            <div className="absolute -top-10 -left-14 z-10 w-24 h-24 rounded-full bg-cinnabar" />
            <span className="absolute -top-4 -left-11 z-20 text-white font-bold transform -rotate-[18deg]">
              Featured <br /> projects
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopHomeScreen;
