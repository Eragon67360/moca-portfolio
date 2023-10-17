import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";

const MobileApps = () => {
  const cardData = [
    {
      Icon: FiGlobe,
      title: "Websites",
      subtitle: "Catchy text blablabla",
    },
    {
      Icon: AiOutlineMobile,
      title: "Mobile Apps",
      subtitle: "Catchy text blablabla",
    },
    {
      Icon: SiAdobeindesign,
      title: "Design systems",
      subtitle: "Catchy text blablabla",
    },
    {
      Icon: AiOutlineCloudServer,
      title: "SAAS",
      subtitle: "Software as a Service - Empowering Your Business",
    },
    {
      Icon: GiWireframeGlobe,
      title: "Wireframes",
      subtitle: "Catchy text blablabla",
    },
    {
      Icon: MdAlternateEmail,
      title: "Email graphics",
      subtitle: "Catchy text blablabla",
    },
  ];

  return (
    <>
      <div className="pt-24 bg-secondary dark:bg-blackbean flex flex-col items-center">
        <div className="text-4xl text-blackbean dark:text-secondary font-bold text-center">
          Apps, websites & more
        </div>
        <div className="grid grid-cols-1 gap-8 justify-center mt-9 text-blackbean dark:text-secondary">
          {cardData.map((card, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-linen dark:bg-falured rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2 w-[256px] h-[142px]">
                <card.Icon size={45} />
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
