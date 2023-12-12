"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";
import carousel1 from "@/public/tablets/portfolio_tablet.png";
import carousel2 from "@/public/tablets/stopviolence_tablet.png";
import carousel3 from "@/public/tablets/moca_tablet.png";

import { useTranslations } from "next-intl";
import Arrow from "@/components/SVG/little_arrow_1";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const colorPattern = ["bg-cinnabar dark:bg-falured", "bg-linen"];
const carouselImages = [carousel1, carousel2, carousel3];

const Tablet = ({ initialPanda }: { initialPanda: any }) => {
  const [currentPanda, setCurrentPanda] = useState(initialPanda);
  const [nextPanda, setNextPanda] = useState(
    (initialPanda + 1) % carouselImages.length
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPanda(nextPanda);
      setNextPanda((nextPanda + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [nextPanda]);

  return (
    <motion.div
      className="relative"
      initial={{ x: 0, scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="z-10">
        <Image src={tablet_base} alt="base tablet" width={376} />
      </div>

      <motion.div
        className="absolute top-0 left-0 -z-10 scale-[.97]"
        key={currentPanda}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={carouselImages[currentPanda]}
          alt={`panda-${currentPanda}`}
          width={370}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 -z-10 scale-[.97]"
        key={nextPanda}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={carouselImages[nextPanda]}
          alt={`panda-${nextPanda}`}
          width={370}
        />
      </motion.div>
    </motion.div>
  );
};

const TabletHomeScreen = () => {
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

  return (
    <>
      <div className="h-[80vh] flex flex-col w-full justify-center items-center bg-linen dark:bg-falured">
        <div className="text-3xl font-bold text-falured text-center px-32 mt-[217px] ">
          {text1} <br /> {text2}
        </div>
        <div className="flex h-full items-center justify-center w-full scale-75">
          <div className="flex justify-center items-center">
            <motion.div
              className="absolute"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: -500, scale: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Tablet initialPanda={0} />
            </motion.div>

            <motion.div
              className="absolute"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: 500, scale: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Tablet initialPanda={1} />
            </motion.div>
            <div className="relative">
              <Tablet initialPanda={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-8 left-1/2 transform translate-x-[-50%]">
          <Arrow color={color} />
        </div>
        <div className="h-48 flex justify-evenly items pt-24 bg-linen dark:bg-falured">
          {Array(8)
            .fill(colorPattern)
            .flat()
            .map((color, index) => (
              <div key={index} className={`${color} w-[6.25%]`}></div>
            ))}
          <div className={`bg-cinnabar dark:bg-falured w-[6.25%]`}></div>
        </div>
      </div>
    </>
  );
};

export default TabletHomeScreen;
