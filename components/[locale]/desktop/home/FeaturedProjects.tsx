import React from "react";
import Image from "next/image";
import portfolio1 from "@/public/featured/portfolio_th_1.png";
import portfolio2 from "@/public/featured/portfolio_th_2.png";
import stopviolence1 from "@/public/featured/stop_violence_1.jpg";
import stopviolence2 from "@/public/featured/stop_violence_2.jpg";
import pipas1 from "@/public/featured/pipas_1.png";
import pipas2 from "@/public/featured/pipas_2.svg";
import pipas3 from "@/public/featured/pipas_3.svg";
import ares1 from "@/public/featured/ares_1.jpg";
import ares2 from "@/public/featured/ares_2.jpg";
import ares3 from "@/public/featured/ares_3.svg";
import ares4 from "@/public/featured/ares_4.svg";

import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";
import { useTheme } from "next-themes";
import ArrowComponent from "@/components/SVG/arrow3";
import { useTranslations } from "next-intl";

const FeaturedProjects = () => {
  const images = [
    {
      src1: portfolio1,
      alt1: "placeholder1",
      width1: 400,
      top: "50px",
      left: "30px",
      src2: portfolio2,
      alt2: "placeholder1",
      width2: 400,
      bottom: "50px",
      right: "30px",
    },
    {
      src1: stopviolence1,
      alt1: "placeholder1",
      width1: 200,
      top: "0px",
      left: "80px",
      src2: stopviolence2,
      alt2: "placeholder1",
      width2: 200,
      bottom: "0px",
      right: "80px",
    },

    {
      src1: pipas1,
      alt1: "placeholder1",
      width1: 380,
      src2: pipas2,
      alt2: "placeholder2",
      width2: 260,
      src3: pipas3,
      alt3: "placeholder3",
      width3: 280,
    },
    {
      src1: ares1,
      alt1: "placeholder1",
      width1: 360,
      top: "0px",
      left: "0px",

      src2: ares2,
      alt2: "placeholder1",
      width2: 363,
      bottom: "0px",
      right: "0px",

      src3: ares3,
      alt3: "placeholder1",
      width3: 132,
      top3: "50%",
      left3: "50%",

      src4: ares4,
      alt4: "placeholder1",
      width4: 40,
      bottom4: "0px",
      left4: "40px",
    },
  ];

  const { resolvedTheme } = useTheme();
  const t = useTranslations("Home.FeaturedProjects");

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
      <div id="featuredprojects" className="bg-lightblue dark:bg-darkblue">
        <motion.div
          className="flex flex-col h-full items-center justify-center text-center select-none"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="flex flex-col text-secondary text-center pt-24">
            <h2 className="font-bold text-4xl">{t("title")}</h2>
            <h3 className="font-bold text-6xl mt-4">{t("subtitle")}</h3>
            <div className="mt-12">
              <a
                href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
                aria-label="See projects"
                target="_blank"
                className="bg-secondary text-falured text-2xl font-bold uppercase px-8 py-3 rounded-full"
              >
                {t("button")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 justify-center mt-10">
            <div
              key={0}
              className="bg-linen flex flex-col w-[494px] relative h-[494px]"
            >
              <Image
                src={images[0].src1}
                alt={images[0].alt1}
                width={images[0].width1}
                priority={true}
                style={{
                  height: "auto",
                  position: "absolute",
                  top: images[0].top,
                  left: images[0].left,
                }}
              />
              <Image
                src={images[0].src2}
                alt={images[0].alt2}
                priority={true}
                width={images[0].width2}
                style={{
                  height: "auto",
                  position: "absolute",
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#fff",
                  bottom: images[0].bottom,
                  right: images[0].right,
                  zIndex: 1,
                }}
              />
            </div>

            <div
              key={1}
              className="bg-linen flex flex-col w-[494px] relative h-[494px]"
            >
              <Image
                src={images[1].src1}
                alt={images[1].alt1}
                width={images[1].width1}
                priority={true}
                style={{
                  height: "auto",
                  position: "absolute",
                  top: images[1].top,
                  left: images[1].left,
                }}
              />
              <Image
                src={images[1].src2}
                alt={images[1].alt2}
                priority={true}
                width={images[1].width2}
                style={{
                  height: "auto",
                  position: "absolute",
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#fff",
                  bottom: images[1].bottom,
                  right: images[1].right,
                  zIndex: 1,
                }}
              />
            </div>

            <div
              key={2}
              className="bg-linen flex w-[494px] relative h-[494px]"
            >
              <div className="flex flex-col w-full items-center py-4">
                <Image
                  src={images[2].src3}
                  alt={""}
                  priority={true}
                  width={images[2].width2}
                  style={{
                    height: "auto",
                  }}
                />
                <Image
                  src={images[2].src2}
                  alt={images[2].alt2}
                  priority={true}
                  width={images[2].width2}
                  style={{
                    height: "auto",
                  }}
                />
              </div>
              <div className="flex">
                <Image
                  src={images[2].src1}
                  alt={images[2].alt1}
                  priority={true}
                  width={images[2].width1}
                  style={{
                    height: "auto",
                  }}
                />
              </div>
            </div>

            <div
              key={3}
              className="bg-linen flex flex-col w-[494px] relative h-[494px]"
            >
              <Image
                src={images[3].src1}
                alt={images[3].alt1}
                width={images[3].width1}
                priority={true}
                style={{
                  height: "auto",
                  position: "absolute",
                  top: images[3].top,
                  left: images[3].left,
                }}
              />
              <Image
                src={images[3].src2}
                alt={images[3].alt2}
                priority={true}
                width={images[3].width2}
                style={{
                  height: "auto",
                  position: "absolute",
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#fff",
                  bottom: images[3].bottom,
                  right: images[3].right,
                  zIndex: 1,
                }}
              />

              <Image
                src={images[3].src3}
                alt={""}
                width={images[3].width3}
                priority={true}
                style={{
                  height: "auto",
                  position: "absolute",
                  top: images[3].top3,
                  left: images[3].left3,
                  marginTop: "-75px",
                  marginLeft:"-75px"
                }}
              />
              <Image
                src={images[3].src4}
                alt={""}
                width={images[3].width4}
                priority={true}
                style={{
                  height: "auto",
                  position: "absolute",
                  bottom: images[3].bottom4,
                  left: images[3].left4,
                }}
              />
            </div>
          </div>

          <div className="h-24"></div>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 -top-16 z-10">
          <ArrowComponent color={color} />
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
