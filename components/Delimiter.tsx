import React from "react";
import Arrow from "./SVG/arrow1";
import { useTheme } from "next-themes";

const colorPattern = ["bg-light_primary dark:bg-light_surface", "bg-light_surface dark:bg-dark_surface"];

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
        <div className="absolute -top-8 left-1/2 transform translate-x-[-50%]">
          <Arrow color={color} />
        </div>
        <div className="h-32 flex justify-evenly">
          {Array(10)
            .fill(colorPattern)
            .flat()
            .map((color, index) => (
              <div key={index} className={`${color} w-[5%]`}></div>
            ))}
          <div className="bg-light_primary dark:bg-light_surface w-[5%]"></div>
        </div>
      </div>
    </>
  );
};

export default Delimiter;
