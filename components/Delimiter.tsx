import React from "react";
import arrow1 from "@/public/arrows/arrow1.svg";
import Image from "next/image";

const colorPattern = ["bg-cinnabar", "bg-linen dark:bg-blackbean"];

const Delimiter = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute -top-8 left-1/2">
          <Image src={arrow1} alt="arrow" width={200} />
        </div>
        <div className="h-32 flex justify-evenly items">
          {Array(10)
            .fill(colorPattern)
            .flat()
            .map((color, index) => (
              <div key={index} className={`${color} w-[5%]`}></div>
            ))}
          <div className="bg-blackbean dark:bg-linen w-[5%]"></div>
        </div>
      </div>
    </>
  );
};

export default Delimiter;
