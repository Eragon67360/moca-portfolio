"use client";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { PiCompassTool } from "react-icons/pi";
import { GrCloudSoftware } from "react-icons/gr";

import { useTranslations } from "next-intl";
import Image from "next/image";
import panda from "@/public/doodles/panda.png";
import herb from "@/public/doodles/herb.svg";
import herb2 from "@/public/doodles/herb2.svg";
import ArrowComponent from "@/components/SVG/arrow3";
import { useTheme } from "next-themes";

const MobileApps = () => {
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
      Icon: GrCloudSoftware,
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
        <div className="absolute -top-16 left-1/2 transform translate-x-[-50%] scale-[.6]">
          <ArrowComponent color={color} />
        </div>

        <Image
          src={herb}
          alt="herb"
          className="absolute -bottom-12 right-20"
          width={16}
        />
        <Image
          src={herb2}
          alt="herb"
          className="absolute -bottom-12 right-20 transform translate-x-1"
          width={12}
        />
        <Image
          src={panda}
          alt="panda"
          width={112}
          style={{width: "auto", height: "auto" }}
          className="-scale-x-100 absolute -bottom-12 -right-0"
        />
      </div>
      <div className="pt-[52px] bg-secondary dark:bg-blackbean flex flex-col items-center">
        <div className="text-[34px] px-[70px] text-blackbean dark:text-secondary font-bold text-center">
          {t("title")}
        </div>
        <div className="grid grid-cols-1 gap-8 justify-center mt-9 text-blackbean dark:text-secondary">
          {cardData.map((card, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-linen dark:bg-falured rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2 w-[256px] h-full">
                <card.Icon size={32} />
                <h1 className="text-2xl font-semibold">{card.title}</h1>
                <h2>{card.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="h-24" />
      </div>
    </>
  );
};

export default MobileApps;
