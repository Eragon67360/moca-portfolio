import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SlMagicWand } from "react-icons/sl";
import { BsArrowRepeat } from "react-icons/bs";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";
import ArrowComponent from "@/components/SVG/arrow2";
import { useTheme } from "next-themes";
import tail from "@/public/doodles/tail.png";
import { useTranslations } from "next-intl";

const UXSolutions = () => {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("Home.UXSolutions");

  const features = [
    {
      icon: <AiOutlineFundProjectionScreen size={50} />,
      title: t("new_title"),
      content: [t("new_content1"),t("new_content2"),],
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
      <div className="bg-white dark:bg-dark_background pt-32 pb-40 justify-start items-center text-center">
        <motion.div
          className="flex flex-col h-full items-center text-center select-none"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <p className="font-bold text-5xl text-light_ink dark:text-dark_ink select-none">
            {t("title")}
          </p>

          <div className="flex justify-center pt-14 space-x-8 mt-14">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col text-center justify-start items-center space-y-4 px-8 w-[362px]"
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

          <div className="relative w-full">
            <div className="absolute -left-4 -top-20">
              <Image src={tail} alt="tail" width={240} />
            </div>
          </div>

          <Image src={logo} alt="logo" width={96} className="mt-16" />

          <div className="w-full flex px-16 mt-10 justify-center">
            <div className="flex flex-col w-[1152px] rounded-2xl p-8 space-y-8 border-4 border-light_primary bg-light_surface dark:bg-dark_surface text-light_ink dark:text-dark_ink">
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
