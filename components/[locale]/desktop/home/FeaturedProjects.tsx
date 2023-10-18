import React from "react";
import Image from "next/image";
import photo1 from "@/public/home/photo1.jpg";
import photo2 from "@/public/home/photo2.png";
import photo3 from "@/public/home/photo3.png";
import photo4 from "@/public/home/photo4.jpg";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";
import { useTheme } from "next-themes";
import ArrowComponent from "@/components/SVG/arrow3";
import { useTranslations } from "next-intl";

const FeaturedProjects = () => {
  const images = [
    { src: photo3, alt: "placeholder1" },
    { src: photo3, alt: "placeholder2" },
    { src: photo3, alt: "placeholder3" },
    { src: photo3, alt: "placeholder4" },
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
            <h2 className="font-bold text-4xl">{t('title')}</h2>
            <h3 className="font-bold text-6xl mt-4">{t('subtitle')}</h3>
            <div className="mt-12">
              <a
                href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
                aria-label="See projects"
                target="_blank"
                className="bg-secondary text-falured text-2xl font-bold uppercase px-8 py-3 rounded-full"
              >
                {t('button')}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 justify-center mt-10">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="bg-secondary flex flex-col w-[500px] relative h-[500px]"
              >
                {" "}
                {/* Adjust height as needed */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  priority={true}
                  style={{
                    height: "auto",
                    position: "absolute",
                    top: "50px",
                    left: "30px",
                  }}
                />
                <Image
                  src={image.src}
                  alt={image.alt}
                  priority={true}
                  width={350}
                  style={{
                    height: "auto",
                    position: "absolute",
                    bottom: "50px",
                    right: "30px",
                    zIndex: 1,
                  }}
                />
              </div>
            ))}
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
