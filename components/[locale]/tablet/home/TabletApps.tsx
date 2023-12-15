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
import { useTranslations } from "next-intl";
import panda from "@/public/doodles/panda.svg";
import herb from "@/public/doodles/herb.svg";
import herb2 from "@/public/doodles/herb2.svg";
import ArrowComponent from "@/components/SVG/arrow3";
import { useTheme } from "next-themes";

const TabletApps = () => {
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
      <div className="relative flex">
        <div className="absolute -top-16 left-1/2 transform translate-x-[-50%]">
          <ArrowComponent color={color} />
        </div>

        <Image
          src={herb}
          alt="herb"
          className="absolute -bottom-20 right-40"
          width={25}
        />
        <Image
          src={herb2}
          alt="herb"
          className="absolute -bottom-20 right-40 transform translate-x-2"
          width={25}
        />
        <Image
          src={panda}
          alt="panda"
          width={194}
          className="-scale-x-100 absolute -top-24 -right-10"
        />
      </div>
      <div className="pt-[134px] bg-light_background dark:bg-dark_background flex flex-col items-center">
        <motion.div
          className="flex flex-col"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="text-5xl text-light_ink dark:text-dark_ink font-bold text-center">
            Apps, websites & more
          </div>
          <div className="grid grid-cols-2 gap-8 mt-24 text-light_ink dark:text-dark_ink">
            {cardData.map((card, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-light_surface dark:bg-dark_surface rounded-xl flex flex-col text-center justify-center items-center space-y-2 w-[352px] h-full py-9">
                  <card.Icon size={45} />
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-24" />
        </motion.div>
      </div>
    </>
  );
};

export default TabletApps;
