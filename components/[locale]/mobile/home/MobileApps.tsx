import React from "react";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { PiCompassTool } from "react-icons/pi";
import { GrCloudSoftware } from "react-icons/gr";

import { useTranslations } from "next-intl";

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

  return (
    <>
      <div className="pt-24 bg-secondary dark:bg-blackbean flex flex-col items-center">
        <div className="text-4xl text-blackbean dark:text-secondary font-bold text-center">
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
