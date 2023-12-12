"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";
import carousel1 from "@/public/tablets/portfolio_tablet.png";
import carousel2 from "@/public/tablets/stopviolence_tablet.png";
import carousel3 from "@/public/tablets/moca_tablet.png";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Arrow from "@/components/SVG/little_arrow_1";
import { motion } from "framer-motion";

const colorPattern = ["bg-cinnabar dark:bg-falured", "bg-linen"];
const carouselImages = [carousel1, carousel2, carousel3];

const Phablet = ({ initialPanda }: { initialPanda: any }) => {
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
        <Image src={tablet_base} alt="base tablet" width={340} />
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
          width={336}
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
          width={336}
        />
      </motion.div>
    </motion.div>
  );
};

const PhabletHomeScreen = () => {
  const t = useTranslations("Home");
  const text1 = t("HomeScreen.banner_1");
  const text2 = t("HomeScreen.banner_2");

  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="h-[88vh] flex flex-col w-full justify-center items-center py-12 space-y-24 bg-linen dark:bg-falured">
        <div className="text-[28px] px-8 font-bold text-falured text-center mt-[196px] ">
          {text1} <br />
          {text2}
        </div>
        <div className="flex h-full items-center justify-center w-full scale-75">
          <div className="flex justify-center items-center">
            <motion.div
              className="absolute"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: -420, scale: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Phablet initialPanda={0} />
            </motion.div>

            <motion.div
              className="absolute"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: 420, scale: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Phablet initialPanda={1} />
            </motion.div>
            <div className="relative">
              <Phablet initialPanda={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-8 left-1/2 transform translate-x-[-50%] scale-[.8]">
          <Arrow color={color} />
        </div>
        <div className="h-40 flex justify-evenly items pt-24 bg-linen dark:bg-falured">
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

export default PhabletHomeScreen;
