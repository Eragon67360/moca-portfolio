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
import panda from "@/public/panda.png";
import { useTranslations } from "next-intl";

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

  return (
    <>
      <div className="relative border">
        <Image src={panda} alt="panda" className="absolute top-0 -right-72" />
      </div>
      <div className="pt-24 bg-secondary dark:bg-blackbean flex flex-col items-center">
        <motion.div
          className="flex flex-col"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="text-5xl text-blackbean dark:text-secondary font-bold text-center">
            Apps, websites & more
          </div>
          <div className="grid grid-cols-2 gap-8 mt-24 text-blackbean dark:text-secondary">
            {cardData.map((card, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-linen dark:bg-falured rounded-xl flex flex-col text-center justify-center items-center space-y-2 w-[256px] h-full p-4">
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
