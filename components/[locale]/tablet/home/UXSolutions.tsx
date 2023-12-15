import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SlMagicWand } from "react-icons/sl";
import { BsArrowRepeat } from "react-icons/bs";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import tail from "@/public/doodles/tail.png";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";
import { useTranslations } from "next-intl";

const UXSolutions = () => {
  const t = useTranslations("Home.UXSolutions");

  const features = [
    {
      icon: <AiOutlineFundProjectionScreen size={50} />,
      title: t("new_title"),
      content: [t("new_content1"), t("new_content2")],
    },
    {
      icon: <SlMagicWand size={50} />,
      title: t("redesign_title"),
      content: [t("redesign_content1"), t("redesign_content2")],
    },
    {
      icon: <BsArrowRepeat size={50} />,
      title: t("followup_title"),
      content: [t("followup_content1"), t("followup_content2")],
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-dark_background pt-40 pb-40 justify-start select-none ">
        <motion.div
          className="flex flex-col h-full select-none space-y-12"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <p className="font-bold text-5xl text-light_ink dark:text-dark_ink text-center">
            {t("title")}
          </p>

          <div className="flex flex-col pt-14 mx-24 text-center space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col text-center justify-start items-center space-y-4 px-8 w-full"
              >
                {feature.icon}
                <h2 className="font-semibold text-2xl">{feature.title}</h2>
                <p>
                  {feature.content.map((text, idx) => (
                    <React.Fragment key={idx}>
                      {text}{" "}
                      {idx < feature.content.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full relative">
            <Image
              src={tail}
              alt="tail"
              width={210}
              className="absolute -top-24 -left-6"
            />
          </div>

          <div className="text-light_ink dark:text-dark_ink mt-12 mx-32 flex flex-col rounded-2xl border-4 border-light_primary dark:border-light_primary p-8 space-y-8 bg-light_surface dark:bg-dark_surface text-center">
            <h2 className="text-3xl font-bold">
              Design is not just what it looks like;
              <br /> design is how it works
            </h2>
            <h2 className="text-2xl font-semibold">Steve Jobs</h2>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default UXSolutions;
