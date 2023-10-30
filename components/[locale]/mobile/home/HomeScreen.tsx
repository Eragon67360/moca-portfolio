"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import phone_white from "@/public/phones/phone_white.png";
import phone_yellow from "@/public/phones/phone_yellow.png";
import phone_blue from "@/public/phones/phone_blue.png";
import phone_red from "@/public/phones/phone_red.png";
import phone_base from "@/public/phones/phone_base.png";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Arrow from "@/components/SVG/little_arrow_1";

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const [isTextAnimated, setIsTextAnimated] = useState(false);

  const t = useTranslations("Home");
  const text1 = t("HomeScreen.banner_1");
  const text2 = t("HomeScreen.banner_2");

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

  const images = [phone_white, phone_yellow, phone_blue, phone_red];
  const colorPattern = [
    "bg-cinnabar dark:bg-linen",
    "bg-linen dark:bg-falured",
  ];

  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const zIndexVariants = {
    front: {
      zIndex: 20,
    },
    back: {
      zIndex: 0,
    },
  };

  const textVariants = {
    initial: {
      x: 560,
      opacity: 0,
      transition: {
        duration: 6,
      },
    },
    animated: {
      x: -560,

      opacity: 1,
      transition: {
        duration: 6,
      },
    },
  };
  const textVariantsStroke = {
    initial: {
      x: 560,
      opacity: 1,
      transition: {
        duration: 6,
      },
    },
    animated: {
      x: -560,
      opacity: 0,
      transition: {
        duration: 6,
      },
    },
  };
  const textVariants2 = {
    initial: {
      x: -500,
      opacity: 0,
      transition: {
        duration: 6,
      },
    },
    animated: {
      x: 560,
      opacity: 1,
      transition: {
        duration: 6,
      },
    },
  };
  const textVariants2Stroke = {
    initial: {
      x: -500,
      opacity: 1,
      transition: {
        duration: 6,
      },
    },
    animated: {
      x: 560,
      opacity: 0,
      transition: {
        duration: 6,
      },
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  const handleImageClick = () => {
    if (!isAutoSwitching) {
      setIsAutoSwitching(true);
    }
    nextImage();
    setIsTextAnimated(!isTextAnimated);
    setIsFront(false);
  };

  useEffect(() => {
    if (isAutoSwitching) {
      const timer = setTimeout(() => {
        nextImage();
        setIsTextAnimated(!isTextAnimated);
        setIsFront(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, isAutoSwitching, isTextAnimated, nextImage]);

  return (
    <>
      <div className="flex relative w-full justify-center items-center my-12 overflow-x-hidden">
        <div className="relative w-[187px] h-[377px] z-10">
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
              className="absolute w-full h-full top-0 left-0 right-0 bottom-0 scale-x-[92%] scale-y-[96.4%] cursor-pointer"
              onClick={handleImageClick}
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

        <motion.div
          variants={zIndexVariants}
          initial="front"
          animate={isFront ? "front" : "back"}
          className="flex flex-col absolute top-22 left-0 z-20 w-full text-center justify-center items-center space-y-8 select-none"
        >
          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants}
            >
              {text1} {text2}
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariantsStroke}
            >
              {text1} {text2}
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants2}
            >
              {text1} {text2}
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants2Stroke}
            >
              {text1} {text2}
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants}
            >
              {text1} {text2}
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariantsStroke}
            >
              {text1} {text2}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute -top-20 left-1/2 transform translate-x-[-50%] scale-[.5]">
          <Arrow color={color} />
        </div>
        <div className="h-16 flex justify-evenly">
          {Array(5)
            .fill(colorPattern)
            .flat()
            .map((color, index) => (
              <div key={index} className={`${color} w-[10%]`}></div>
            ))}
          <div className="bg-cinnabar dark:bg-linen w-[10%]"></div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
