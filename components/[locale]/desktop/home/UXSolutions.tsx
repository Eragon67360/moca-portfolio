import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SlMagicWand } from "react-icons/sl";
import { BsArrowRepeat } from "react-icons/bs";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";
import ArrowComponent from "@/components/SVG/arrow2";
import TailComponent from "@/components/SVG/tail";
import { useTheme } from "next-themes";
import tail from '@/public/doodles/tail.png'

const UXSolutions = () => {
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
      <div className="bg-white dark:bg-blackbean pt-32 pb-40 justify-start items-center text-center select-none ">
        <motion.div
          className="flex flex-col h-full items-center text-center select-none"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <p className="font-bold text-5xl text-blackbean dark:text-secondary">
            Our Tailored UX Solutions
          </p>

          <div className="flex justify-evenly pt-14 space-x-8 mx-16 mt-14">
            <div className="flex flex-col text-center justify-start items-center space-y-4 px-8">
              <AiOutlineFundProjectionScreen size={50} />
              <h2 className="font-semibold text-2xl">New Project</h2>
              <p>
                Complete new design from zero, just tell us what you need and we
                will work hard to make it real.
              </p>
            </div>
            <div className="flex flex-col text-center justify-start items-center space-y-4 px-8">
              <SlMagicWand size={50} />
              <h2 className="font-semibold text-2xl">Redesign</h2>
              <p>
                If you wan to give a more fresh look to your website or mobile
                application this is what you need.
                <br />
                <br />
                We will make sure to give you a website that suits new tendances
                but still follows your brand identity
              </p>
            </div>
            <div className="flex flex-col text-center justify-start items-center space-y-4 px-8">
              <BsArrowRepeat size={50} />
              <h2 className="font-semibold text-2xl">Follow-up</h2>
              <p>
                Updates, improvements and changes of an already existing website
                or mobile application.
                <br />
                <br />
                You can ask for an especific change or subscripte to our plans
                to get your website always updated!
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute -left-4 -top-20">
             <Image src={tail} alt="tail" width={240}/>
            </div>
          </div>

          <Image src={logo} alt="logo" width={96} className="mt-16" />

          <div className="w-full px-16 mt-10">
            <div className="flex flex-col w-full rounded-2xl p-8 space-y-8 border-4 border-cinnabar bg-linen dark:bg-falured text-blackbean dark:text-white">
              <h2 className="text-4xl font-bold">
                Design is not just what it looks like;
                <br /> design is how it works
              </h2>
              <h2 className="text-2xl font-semibold">Steve Jobs</h2>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute right-1/3 -bottom-16">
          <ArrowComponent color={color} />
        </div>
      </div>
    </>
  );
};

export default UXSolutions;
