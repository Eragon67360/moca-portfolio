import React from "react";
import Arrow from "./SVG/arrow1";
import { useTheme } from "next-themes";

const colorPattern = ["bg-cinnabar dark:bg-linen", "bg-linen dark:bg-falured"];

const Delimiter = () => {
  const { resolvedTheme } = useTheme();

  let color;

  switch (resolvedTheme) {
    case "light":
      color = "#231F20";
      break;
    case "dark":
      color = "#fff";
      break;
    default:
      color = "#231F20";
      break;
  }
  return (
    <>
      <div className="relative">
        <div className="absolute -top-8 left-[42%]">
          <Arrow color={color} />
        </div>
        <div className="h-32 flex justify-evenly">
          {Array(10)
            .fill(colorPattern)
            .flat()
            .map((color, index) => (
              <div key={index} className={`${color} w-[5%]`}></div>
            ))}
          <div className="bg-cinnabar dark:bg-linen w-[5%]"></div>
        </div>
      </div>
    </>
  );
};

export default Delimiter;
