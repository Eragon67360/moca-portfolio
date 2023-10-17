import React from "react";
import Image from "next/image";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { PiCompassTool } from "react-icons/pi";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";

import { useTheme } from "next-themes";
import ArrowComponent from "@/components/SVG/arrow4";
import panda from '@/public/doodles/panda.svg'

const DesktopApps = () => {
  const cardData = [
    {
      Icon: FiGlobe,
      title: "Websites",
      subtitle: "Elevate Your Online Presence",
    },
    {
      Icon: AiOutlineMobile,
      title: "Mobile Apps",
      subtitle: "Apps That Shine Bright",
    },
    {
      Icon: AiOutlineCloudServer,
      title: "SAAS",
      subtitle: "Software as a Service - Empowering Your Business",
    },
    {
      Icon: SiAdobeindesign,
      title: "Design systems",
      subtitle: "Designing for Tomorrow",
    },

    {
      Icon: PiCompassTool,
      title: "Graphics",
      subtitle: "Graphics That Speak Volumes",
    },
    {
      Icon: LiaSwatchbookSolid,
      title: "Logos & Branding",
      subtitle: "Unforgettable Logos, Stronger Brands",
    },
  ];

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
      <div className="overflow-x-hidden">
        <div className="relative">
          <Image src={panda} alt="panda" width={194} className="-scale-x-100 absolute top-8 -right-12" />
        </div>
        <div className="mt-32 px-12 lg:px-12 xl:px-36 2xl:px-96 bg-secondary dark:bg-blackbean flex flex-col">
          <motion.div
            className="flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <div className="py-4 text-5xl text-blackbean dark:text-secondary font-bold text-center">
              Apps, websites & more
            </div>
            <div className="grid grid-cols-3 gap-8 mt-14 text-blackbean dark:text-secondary">
              {cardData.map((card, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full h-full space-y-2 py-10  bg-linen dark:bg-falured rounded-xl flex flex-col text-center justify-center items-center ">
                    <card.Icon size={45} />
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-36" />
          </motion.div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-1/4 -top-16 z-10">
          <ArrowComponent color={color} />
        </div>
      </div>
    </>
  );
};

export default DesktopApps;
