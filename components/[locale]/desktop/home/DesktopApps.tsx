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
import panda from "@/public/doodles/panda.svg";
import herb from "@/public/doodles/herb.svg";
import herb2 from "@/public/doodles/herb2.svg";

import { useTranslations } from "next-intl";

const DesktopApps = () => {
  const t = useTranslations("Home.Apps");
  const cardData = [
    {
      Icon: FiGlobe,
      title: t("sub1"),
      subtitle: t("content1"),
    },
    {
      Icon: AiOutlineMobile,
      title: t("sub2"),
      subtitle: t("content2"),
    },
    {
      Icon: AiOutlineCloudServer,
      title: t("sub3"),
      subtitle: t("content3"),
    },
    {
      Icon: SiAdobeindesign,
      title: t("sub4"),
      subtitle: t("content4"),
    },

    {
      Icon: PiCompassTool,
      title: t("sub5"),
      subtitle: t("content5"),
    },
    {
      Icon: LiaSwatchbookSolid,
      title: t("sub6"),
      subtitle: t("content6"),
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
          <Image
            src={panda}
            alt="panda"
            width={194}
            className="-scale-x-100 absolute top-8 -right-12"
          />
          <Image
            src={herb}
            alt="herb"
            className="absolute -bottom-52 right-40"
            width={25}
          />
          <Image
            src={herb2}
            alt="herb"
            className="absolute -bottom-52 right-40 transform translate-x-2"
            width={25}
          />
        </div>
        <div className="pt-32 bg-secondary dark:bg-blackbean flex flex-col">
          <motion.div
            className="flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <div className="py-4 text-5xl text-blackbean dark:text-secondary font-bold text-center">
              {t("title")}
            </div>
            <div className="grid grid-cols-3 gap-8 mt-14 text-blackbean dark:text-secondary justify-center mx-auto">
              {cardData.map((card, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-[357px] h-[200px] space-y-2 py-10  bg-linen dark:bg-falured rounded-xl flex flex-col text-center justify-center items-center ">
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
