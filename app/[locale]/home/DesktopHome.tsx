"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import AnimatedTextCharacter from "@/components/AnimatedText";
import ArcText from "@/components/ArcText";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import Link from "next/link";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import DesktopApps from "@/components/[locale]/desktop/DesktopApps";
import UXSolutions from "@/components/[locale]/desktop/UXSolutions";
import Pricings from "@/components/[locale]/desktop/Pricings";

function DesktopHome() {
  const letterVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const placeholderText = [
    { type: "heading1", text: "Crafting Experiences, Shaping Futures:" },
    {
      type: "heading2",
      text: "Your UX Design Partner",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="h-[87.5vh] bg-linen">
          <div className=" flex h-full justify-center items-center text-center select-none font-bold text-5xl text-blackbean space-y-6">
            <div className="flex flex-col font-bold text-5xl text-center  items-center">
              <AnimatedTextCharacter
                text="Crafting Experiences, Shaping Futures:"
                color={"#310F0D"}
              />
              <AnimatedTextCharacter
                text="Your UX Design Partner"
                color={"#742119"}
              />
            </div>
          </div>
        </div>
        <div className="h-[10vh] bg-cinnabar flex justify-evenly items-center ">
          <Link
            href="#pricings"
            className="flex flex-col h-full w-full items-center"
          >
            <ArcText text={"Scroll to pricings  Scroll to pricings  "} />

            <div className="h-full" />
          </Link>
          <Image className="z-10" src={logo} alt="logo" width={200} />

          <Link
            href={"#featuredprojects"}
            passHref
            className="flex flex-col h-full w-full items-center"
          >
            <ArcText text={"Scroll to featured projects  "} />

            <div className="h-full" />
          </Link>
        </div>

        <UXSolutions />

        <div
          id="featuredprojects"
          className="bg-lightblue flex flex-col items-center justify-center space-y-24"
        >
          <div className="flex flex-col text-secondary text-center pt-16">
            <h1 className="font-bold text-4xl">Featured</h1>
            <h1 className="font-bold text-6xl mt-4">Projects</h1>
            <div className="mt-12">
              <button className="bg-secondary text-falured text-2xl font-bold uppercase px-8 py-3 rounded-full">
                See more
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            <div className="bg-secondary flex flex-col w-[500px]">
              <Image src={logo} alt="placeholder" width={200} />
              <Image src={logo} alt="placeholder" width={200} />
            </div>
            <div className="bg-secondary flex flex-col w-[500px]">
              <Image src={logo} alt="placeholder" width={200} />
              <Image src={logo} alt="placeholder" width={200} />
            </div>
            <div className="bg-secondary flex flex-col w-[500px]">
              <Image src={logo} alt="placeholder" width={200} />
              <Image src={logo} alt="placeholder" width={200} />
            </div>
            <div className="bg-secondary flex flex-col w-[500px]">
              <Image src={logo} alt="placeholder" width={200} />
              <Image src={logo} alt="placeholder" width={200} />
            </div>
          </div>

          <div className="h-24"></div>
        </div>

        <div className="pt-24 bg-secondary dark:bg-blackbean flex flex-col items-center">
          <div className="text-5xl text-blackbean dark:text-secondary font-bold text-center">
            Apps, websites & more
          </div>
          <DesktopApps />
          <div className="h-24" />
        </div>

        <div
          id="pricings"
          className="pt-24 bg-linen flex flex-col items-center"
        >
          <div className="text-5xl text-blackbean font-bold text-center">
            Plans
          </div>
          <Pricings />
          <div className="h-24" />
        </div>
      </div>
    </>
  );
}

export default DesktopHome;
