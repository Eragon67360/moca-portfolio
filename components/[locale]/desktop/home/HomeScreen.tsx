
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import paw from "@/public/home/paw.png";
import photo1 from "@/public/home/photo1.jpg";
import photo2 from "@/public/home/photo2.png";
import photo3 from "@/public/home/photo3.png";
import photo4 from "@/public/home/photo4.jpg";

import AnimatedTextCharacter from "@/components/AnimatedText";
import { motion, AnimatePresence } from "framer-motion";

const DesktopHomeScreen = () => {
  const images = [photo4, photo4, photo4, photo4];
  const [currentIdx, setCurrentIdx] = useState(0);
  const prevIdx = useRef(currentIdx);

  useEffect(() => {
    const interval = setInterval(() => {
      prevIdx.current = currentIdx;
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIdx, images.length]);

  const direction =
    currentIdx - prevIdx.current >= 1 || currentIdx - prevIdx.current < -1
      ? 1
      : -1;

  const variants = {
    initial: () => ({ opacity: 0, x: 1000 * direction, y: -200, scale: 0.2 }),
    enter: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: () => ({ opacity: 0, x: -1000 * direction, y: -200, scale: 0.2 }),
  };

  return (
    <>
      <div className="h-[90vh] bg-linen dark:bg-falured pt-[190px] overflow-x-hidden">
        <div className="flex flex-col h-full items-center text-center select-none text-blackbean">
          <div className="flex flex-col font-bold text-5xl text-center items-center">
            <AnimatedTextCharacter />
          </div>

          <div className="relative w-1/3 mt-16">
            <AnimatePresence custom={currentIdx}>
              <motion.div
                key={currentIdx}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants}
                custom={currentIdx}
                className="w-full absolute top-0"
                transition={{ duration: 2.5 }}
              >
                <Image src={images[currentIdx]} alt="displayed" width={550}/>
              </motion.div>
            </AnimatePresence>
            <Image
              src={paw}
              alt="logo"
              className="absolute -top-8 -left-16 z-10 w-24 h-24"
            />
            <span className="absolute top-4 -left-9 z-20 text-white text-xs transform -rotate-[18deg]">
              Featured <br /> projects
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopHomeScreen;
