'use client'
import React, { useState, useEffect } from "react";

import Image from "next/image";
import phone_white from "@/public/phones/phone_white.png";
import phone_yellow from "@/public/phones/phone_yellow.png";
import phone_blue from "@/public/phones/phone_blue.png";
import phone_red from "@/public/phones/phone_red.png";
import phone_base from "@/public/phones/phone_base.png";

import { motion, AnimatePresence } from "framer-motion";

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const [isTextAnimated, setIsTextAnimated] = useState(false);

  const images = [phone_white, phone_yellow, phone_blue, phone_red];

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
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, isAutoSwitching, nextImage]);

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
              Crafting Experiences Shaping Futures: Your UX Design Partner
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariantsStroke}
            >
              Crafting Experiences Shaping Futures: Your UX Design Partner
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants2}
            >
              Crafting Experiences Shaping Futures: Your UX Design Partner
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants2Stroke}
            >
              Crafting Experiences Shaping Futures: Your UX Design Partner
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 z-10 text-transparent text-stroke whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariants}
            >
              Crafting Experiences Shaping Futures: Your UX Design Partner
            </motion.div>

            <motion.div
              className="fill-text whitespace-nowrap text-5xl font-bold text-falured"
              initial="initial"
              animate={isTextAnimated ? "animated" : "initial"}
              variants={textVariantsStroke}
            >
              Crafting Experiences Shaping Futures: Your UX Design Partner
            </motion.div>
          </motion.div>
        </motion.div>

        
      </div>
      <div className="h-16 flex justify-evenly items">
        <div className="bg-linen dark:bg-blackbean w-1/6"></div>
        <div className="bg-cinnabar w-1/6"></div>
        <div className="bg-linen dark:bg-blackbean w-1/6"> </div>
        <div className="bg-cinnabar w-1/6"></div>
        <div className="bg-linen dark:bg-blackbean w-1/6"></div>
        <div className="bg-blackbean dark:bg-linen w-1/6"></div>
      </div>
    </>
  );
};

export default HomeScreen;
