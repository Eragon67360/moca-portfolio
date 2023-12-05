import React from "react";
import { Carousel } from "./Carousel";
import AnimatedTextCharacter from "@/components/AnimatedText";

const DesktopHomeScreen = () => {
  return (
    <>
      <div className="h-[90vh] bg-linen dark:bg-falured pt-[110px] lg:pt-[120px] xl:pt-[140px] 2xl:pt-[190px]  overflow-x-hidden transition-all">
        <div className="flex flex-col h-full items-center text-center select-none text-blackbean">
          <div className="flex flex-col font-bold text-3xl xl:text-4xl 2xl:text-5xl text-center items-center">
            <AnimatedTextCharacter />
          </div>

          <div className="relative mt-24 w-[504px]">
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
