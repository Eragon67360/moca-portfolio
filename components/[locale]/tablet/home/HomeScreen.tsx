"use client";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";

import { motion, AnimatePresence, useAnimation } from "framer-motion";

const colorPattern = ["bg-cinnabar", "bg-linen dark:bg-blackbean"];

const TabletHomeScreen = () => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [tablet_base, tablet_base, tablet_base];
  const bg = ["cinnabar", "lightblue", "darkorange"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      console.log(activeIndex);
    }, 2000);

    return () => clearInterval(interval); // Clear the interval on unmounting
  }, [activeIndex, images.length]);

  useEffect(() => {
    // Update the x position based on the active image index
    controls.start({ x: -(activeIndex * 100) + "%" });
  }, [activeIndex, controls]);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center my-12 space-y-24">
        <div className="text-3xl font-bold text-falured text-center px-32">
          Crafting Experiences Shaping Futures: Your UX Design Partner
        </div>

        <motion.div className="flex rounded-2xl items-center justify-center">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className={`flex-shrink-0 mx-8 ${
                index === 0 || index === images.length - 1
                  ? "transform scale-75"
                  : ""
              }`}
            >
              <motion.div animate={controls}>
                <Image
                  src={imageSrc}
                  alt={`Carousel Image ${index}`}
                  className={`w-full h-[376px] rounded-2xl object-cover bg-${bg[index]}`}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-16 flex justify-evenly items mt-24">
        {Array(7)
          .fill(colorPattern)
          .flat()
          .map((color, index) => (
            <div key={index} className={`${color} w-[6.25%]`}></div>
          ))}
        <div className={`bg-cinnabar w-[6.25%]`}></div>
        <div className={`bg-blackbean dark:bg-linen w-[6.25%]`}></div>
      </div>
    </>
  );
};

export default TabletHomeScreen;
