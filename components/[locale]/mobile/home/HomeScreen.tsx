"use client";
import React, { useState, useEffect, useRef } from "react";

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
  const doubledText1 = `${text1} ${text1}`;
  const text2 = t("HomeScreen.banner_2");
  const doubledText2 = `${text2} ${text2}`;

  const sentenceRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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

  const scrollVariants = {
    animate: {
      x: [-560, window.innerWidth], // Start outside the screen and end fully inside
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          duration: 10, // Duration for one loop
          ease: "linear", // Linear animation for smooth scrolling
        },
      },
    },
  };
  const scrollVariants2 = {
    animate: {
      x: [-560 - 200, window.innerWidth - 200], // Start outside the screen and end fully inside
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          duration: 10, // Duration for one loop
          ease: "linear", // Linear animation for smooth scrolling
        },
      },
    },
  };

  const scrollVariantsInverse = {
    animate: {
      x: [window.innerWidth, 560], // Start outside the screen and end fully inside
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          duration: 10, // Duration for one loop
          ease: "linear", // Linear animation for smooth scrolling
        },
      },
    },
  };

  useEffect(() => {
    if (sentenceRef.current) {
      setWidth(sentenceRef.current.offsetWidth);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAutoSwitching) {
        setIsAutoSwitching(true);
      }
      nextImage();
      setIsTextAnimated(!isTextAnimated);
      setIsFront(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, isAutoSwitching, isTextAnimated, nextImage]); // Re-run the effect if currentImageIndex or handleImageClick changes

  return (
    <>
      <div className="h-[80vh] flex relative w-full justify-center items-center my-12 overflow-x-hidden">
        <div className="relative w-[187px] h-[377px] z-10">
          <Image
            src={phone_base}
            alt="Phone Placeholder"
            priority={true}
            className="absolute w-full h-full top-0 left-0"
          />
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInOut}
              transition={{ duration: 2, delay: 2 }}
              className="absolute w-full h-full top-0 left-0 right-0 bottom-0 scale-x-[92%] scale-y-[96.4%] cursor-pointer"
            >
              <Image
                src={images[currentImageIndex]}
                alt="Phone Content"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold"
              ref={sentenceRef}
              initial="initial"
              animate="animate"
              variants={scrollVariants}
            >
              {doubledText1} {doubledText2}
            </motion.div>

            <motion.div
              className={
                isFront
                  ? "fill-text whitespace-nowrap text-5xl font-bold"
                  : "whitespace-nowrap text-5xl font-bold text-transparent bg-none"
              }
              ref={sentenceRef}
              initial="initial"
              animate="animate"
              variants={scrollVariants}
            >
              {doubledText1} {doubledText2}
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate="animate"
              variants={scrollVariantsInverse}
            >
              {text1} {text2}
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate="animate"
              variants={scrollVariantsInverse}
            >
              {text1} {text2}
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              ref={sentenceRef}
              initial="initial"
              animate="animate"
              variants={scrollVariants2}
            >
              {doubledText1} {doubledText2}
            </motion.div>

            <motion.div
              className={
                isFront
                  ? "fill-text whitespace-nowrap text-5xl font-bold"
                  : "whitespace-nowrap text-5xl font-bold text-transparent bg-none"
              }
              ref={sentenceRef}
              initial="initial"
              animate="animate"
              variants={scrollVariants2}
            >
              {doubledText1} {doubledText2}
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
