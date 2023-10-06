import React from "react";

const colorPattern = ["bg-falured", "bg-linen dark:bg-blackbean"];

const Delimiter = () => {
  return (
    <>
      <div className="h-32 flex justify-evenly items">
        {Array(10)
          .fill(colorPattern)
          .flat()
          .map((color, index) => (
            <div key={index} className={`${color} w-[5%]`}></div>
          ))}
        <div className="bg-blackbean dark:bg-linen w-[5%]"></div>
      </div>
    </>
  );
};

export default Delimiter;
