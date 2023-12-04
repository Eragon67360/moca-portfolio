"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";
import CarouselComponent from "../Carousel";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Arrow from "@/components/SVG/little_arrow_1";

const colorPattern = ["bg-cinnabar dark:bg-falured", "bg-linen"];

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
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }


  return (
    <>
      <div className="flex flex-col w-full justify-center items-center py-12 space-y-24 bg-linen dark:bg-falured">
        <div className="text-3xl font-bold text-falured text-center px-32">
          {text1} {text2}
        </div>
        <div className="flex h-full pb-24 mx-auto items-center justify-center">
          <CarouselComponent
            key={0}
            items={[
              <Image
                key={0}
                src={tablet_base}
                width={200}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-cinnabar border border-black"
              />,
              <Image
                key={1}
                src={tablet_base}
                width={200}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-lightblue"
              />,
              <Image
                key={2}
                src={tablet_base}
                width={200}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-darkorange"
              />,
              <Image
                key={3}
                src={tablet_base}
                width={200}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-falured"
              />,
              <Image
                key={4}
                src={tablet_base}
                width={200}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-linen"
              />,
            ]}
          />
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
