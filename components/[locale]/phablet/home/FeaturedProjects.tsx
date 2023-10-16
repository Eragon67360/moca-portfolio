import React from "react";
import Image from "next/image";
import photo1 from "@/public/home/photo1.jpg";
import photo2 from "@/public/home/photo2.png";
import photo3 from "@/public/home/photo3.png";
import photo4 from "@/public/home/photo4.jpg";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";

const FeaturedProjects = () => {
  const images = [
    { src: photo3, alt: "placeholder1" },
    { src: photo3, alt: "placeholder2" },
    { src: photo3, alt: "placeholder3" },
    { src: photo3, alt: "placeholder4" },
  ];

  return (
    <>
      <div id="featuredprojects" className="bg-lightblue dark:bg-darkblue">
        <motion.div
          className="flex flex-col h-full items-center justify-center text-center select-none space-y-12"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="flex flex-col text-secondary text-center pt-16">
            <h2 className="font-bold text-4xl">Featured</h2>
            <h3 className="font-bold text-6xl mt-4">Projects</h3>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="bg-secondary flex flex-col w-[352px] relative h-[352px]"
              >
                {" "}
                <Image
                  src={image.src}
                  alt={image.alt}
                  priority={true}
                  width={252}
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
                  width={252}
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
          <div className="mt-12">
            <a
              href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
              aria-label="See projects"
              target="_blank"
              className="bg-secondary text-falured text-2xl font-bold uppercase px-8 py-3 rounded-full"
            >
              See more
            </a>
          </div>

          <div className="h-24"></div>
        </motion.div>
      </div>
    </>
  );
};

export default FeaturedProjects;
