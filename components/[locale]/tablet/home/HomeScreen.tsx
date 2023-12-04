"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";
import panda1 from "@/public/tablets/panda1.jpg";
import panda2 from "@/public/tablets/panda2.jpg";
import panda3 from "@/public/tablets/panda3.jpg";

import { useTranslations } from "next-intl";
import Arrow from "@/components/SVG/little_arrow_1";
import { useTheme } from "next-themes";
import { animate, motion } from "framer-motion";

const colorPattern = ["bg-cinnabar dark:bg-falured", "bg-linen"];

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
          {text1} {text2}
        </div>
        <div className="flex h-full items-center justify-center w-full scale-75">
          <div className="flex justify-center items-center">
            <motion.div
              className="absolute"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: -500, scale: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="relative z-10">
                <Image src={tablet_base} alt="base tablet" width={376} />
              </div>
              <div className="absolute top-10 left-0 z-0">
                <Image src={panda1} alt="panda1" width={370} />
              </div>
            </motion.div>

            <motion.div
              className="absolute"
              initial={{ x: 0, scale: 1 }}
              animate={{ x: 500, scale: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="relative z-10">
                <Image src={tablet_base} alt="base tablet" width={376} />
              </div>
              <div className="absolute top-10 left-0 z-0">
                <Image src={panda2} alt="panda1" width={370} />
              </div>
            </motion.div>
            <div className="relative">
              <div className="relative z-10">
                <Image src={tablet_base} alt="base tablet" width={376} />
              </div>
              <div className="absolute top-10 left-0 z-0">
                <Image src={panda3} alt="panda1" width={370} />
              </div>
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
