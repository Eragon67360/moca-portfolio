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
import Pricings from "@/components/[locale]/desktop/Pricings";

function DesktopHome() {
  const text = `Crafting Experiences, Shaping Futures: Your UX Design Partner`;

  const sectionARef = useRef(null);
  const sectionBRef = useRef(null);
  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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

        <div className="">
          <div className="bg-white dark:bg-blackbean flex flex-col h-full pt-40 pb-40 justify-start items-center text-center select-none  space-y-6">
            <p className="font-bold text-5xl text-blackbean dark:text-secondary">
              Our Tailored UX Solutions
            </p>
            <div className="flex justify-evenly pt-14 space-x-10 mx-24">
              <div className="flex flex-col text-centerjustify-start items-center space-y-4 px-8">
                <AiOutlineFundProjectionScreen size={50} />
                <h1 className="font-semibold text-2xl">New Project</h1>
                <p>
                  Complete new design from zero, just tell us what you need and
                  we will work hard to make it real.
                </p>
              </div>
              <div className="flex flex-col text-centerjustify-start items-center space-y-4 px-8">
                <AiOutlineFundProjectionScreen size={50} />
                <h1 className="font-semibold text-2xl">Redesign</h1>
                <p>
                  If you wan to give a more fresh look to your website or mobile
                  application this is what you need.
                  <br />
                  <br />
                  We will make sure to give you a website that suits new
                  tendances but still follows your brand identity
                </p>
              </div>
              <div className="flex flex-col text-centerjustify-start items-center space-y-4 px-8">
                <AiOutlineFundProjectionScreen size={50} />
                <h1 className="font-semibold text-2xl">Follow-up</h1>
                <p>
                  Updates, improvements and changes of an already existing
                  website or mobile application.
                  <br />
                  <br />
                  You can ask for an especific change or subscripte to our plans
                  to get your website always updated!
                </p>
              </div>
            </div>

            <Image src={logo} alt="tail" />

            <div className="text-blackbean flex flex-col rounded-2xl border-4 border-falured mx-80 p-8 space-y-5 bg-linen">
              <h1 className="text-4xl font-bold">
                Design is not just what it looks like; design is how it works
              </h1>
              <h2 className="text-2xl font-semibold">Steve Jobs</h2>
            </div>
          </div>
        </div>

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
          <div className="text-5xl text-blackbean dark:text-secondary font-bold text-center">Apps, websites & more</div>
          <DesktopApps/>
          <div className="h-24"/>
        </div>

        <div
          id="pricings"
          className="pt-24 bg-linen flex flex-col items-center"
        >
          <div className="text-5xl text-blackbean font-bold text-center">Plans</div>
          <Pricings/>
          <div className="h-24"/>
        </div>
      </div>
    </>
  );
}

export default DesktopHome;
