"use client";
import React, { useState, useEffect, useRef } from "react";
import DesktopContactForm from "@/components/[locale]/pc/DesktopContactForm";
import DesktopVisitCard from "@/components/[locale]/pc/DesktopVisitCard";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import instagram from "@/public/logos/instagram.png";
import linkedin from "@/public/logos/linkedin.png";
import tiktok from "@/public/logos/tiktok.png";
import { Metadata } from "next";

function DesktopContact() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [elementSize, setElementSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth;
      const height = elementRef.current.offsetHeight;
      setElementSize({ width, height });
    }
  }, []);

  return (
    <>
      <div className="bg-contact-background bg-no-repeat bg-cover bg-center bg-fixed border border-black">
        <AnimatePresence>
          <div className="flex flex-col h-[200vh] space-y-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center mt-24"
            >
              <motion.div
                initial={{ x: 0, textAlign: "center", y: 0 }}
                animate={{
                  x: -800 / 2,
                  textAlign: "right",
                  y: 100,
                }}
                transition={{ duration: 2, delay: 2 }}
                ref={elementRef}
                className="text-[2vw] font-bold text-center absolute z-10 mt-[7.81vh] border"
              >
                User-centric design is
                <span className="uppercase text-cinnabar">the future.</span>
                <br />
                Let&apos;s shape it{" "}
                <span className="uppercase text-cinnabar">together !</span>
              </motion.div>
            </motion.div>

            <div className="flex">
              <div className="w-1/2 flex flex-col ml-[18.35vw] mt-[22.81vh] fixed space-y-8">
                <div className="">
                  <DesktopVisitCard />
                </div>
                <div className="h-[25vh] w-[22.2vw] flex flex-col text-center text-black dark:text-secondary space-y-3 left-[18.35vw] text-xl lg:text-2xl">
                  <p>You can also find us in...</p>
                  <div className="flex w-[22.2vw] justify-evenly">
                    <a
                      href="https://www.linkedin.com/in/thomas-moser67"
                      target="_blank"
                    >
                      <Image src={linkedin} alt="logo linkedin" width={60} />
                    </a>
                    <a
                      href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
                      target="_blank"
                    >
                      <Image src={instagram} alt="logo instagram" width={60} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@cristinaandresrr?lang=en"
                      target="_blank"
                    >
                      <Image src={tiktok} alt="logo tiktok" width={60} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full mr-[15.78vw] items-end justify-end">
                <DesktopContactForm />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default DesktopContact;
