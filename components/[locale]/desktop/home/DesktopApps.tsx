import React from "react";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { PiCompassTool } from "react-icons/pi";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";

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
      title: "SAAS (Software as a Service)",
      subtitle: "Empowering Your Business",
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

  return (
    <>
      <div className="pt-24 px-12 lg:px-12 xl:px-36 2xl:px-96 bg-secondary dark:bg-blackbean flex flex-col">
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
          <div className="grid grid-cols-3 gap-8 mt-9 text-blackbean dark:text-secondary">
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
          <div className="h-24" />
        </motion.div>
      </div>
    </>
  );
};

export default DesktopApps;
