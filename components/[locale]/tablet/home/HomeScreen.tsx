"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import phone_white from "@/public/phones/phone_white.png";
import phone_yellow from "@/public/phones/phone_yellow.png";
import phone_blue from "@/public/phones/phone_blue.png";
import phone_red from "@/public/phones/phone_red.png";
import phone_base from "@/public/phones/phone_base.png";

import { motion, AnimatePresence } from "framer-motion";

const colorPattern = ["bg-cinnabar", "bg-linen dark:bg-blackbean"];

const TabletHomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [phone_white, phone_yellow, phone_blue, phone_red];

  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 5000);
    return () => clearTimeout(timer);
  }, [nextImage]);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center my-12 space-y-12">
        <div className="text-3xl font-bold text-falured text-center px-32">
          Crafting Experiences Shaping Futures: Your UX Design Partner
        </div>
        <div className="relative w-[187px] h-[377px] z-10 img-shadow ">
          <Image
            src={phone_base}
            alt="Phone Placeholder"
            className="absolute w-full h-full top-0 left-0"
          />
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInOut}
              transition={{ duration: 2 }}
              className="absolute w-full h-full top-0 left-0 right-0 bottom-0 scale-x-[92%] scale-y-[96.4%]"
            >
              <Image
                src={images[currentImageIndex]}
                alt="Phone Content"
                fill={true}
                className="absolute w-full h-full top-0 left-0"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="h-16 flex justify-evenly items mt-12">
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
