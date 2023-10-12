"use client";
import React from "react";

import Image from "next/image";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";

import CarouselComponent from "../Carousel";

const colorPattern = ["bg-cinnabar", "bg-linen dark:bg-blackbean"];

const TabletHomeScreen = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center my-12 space-y-24">
        <div className="text-3xl font-bold text-falured text-center px-32">
          Crafting Experiences Shaping Futures: Your UX Design Partner
        </div>
        <div className="flex h-full mx-auto items-center justify-center">
          <CarouselComponent
            key={0}
            items={[
              <Image
                key={0}
                src={tablet_base}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-cinnabar border border-black"
              />,
              <Image
                key={1}
                src={tablet_base}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-lightblue"
              />,
              <Image
                key={2}
                src={tablet_base}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-darkorange"
              />,
              <Image
                key={3}
                src={tablet_base}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-falured"
              />,
              <Image
                key={4}
                src={tablet_base}
                alt="Carousel image"
                className="w-full h-full rounded-2xl object-cover bg-linen"
              />,
            ]}
          />
        </div>
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
