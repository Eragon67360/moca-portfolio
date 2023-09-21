"use client";

import React, { useRef, useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import VisitCard from "@/components/[locale]/VisitCard";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import image_background from '@/public/contact_background.png'

function Contact(): React.JSX.Element {
  const controlSection1 = useAnimation();
  const [y, setY] = useState<number>(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = (event.target as Element).scrollTop;
    setY(scrollTop);
  };

  useEffect(() => {
    controlSection1.start({ opacity: 1 - y / 500, scale: 1 - y / 1000 });
  }, [y, controlSection1]);

  return (
    <>
      <div className="bg-contact-background bg-no-repeat bg-cover bg-center bg-fixed">
        <AnimatePresence>
          <div className="flex flex-col h-[150vh] space-y-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex justify-center items-center mt-24"
            >
              <p className="text-black text-[2vw] font-bold text-center absolute z-10 mt-[7.81vh]">
                User-centric design is{" "}
                <span className="uppercase text-falured">the future.</span>
                <br />
                Let&apos;s shape it{" "}
                <span className="uppercase text-falured">together !</span>
              </p>
            </motion.div>

            <div className="flex">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="w-1/2 flex flex-col ml-[18.35vw] mt-[22.81vh] fixed space-y-8"
              >
                <div className="">
                  <VisitCard />
                </div>
                <div className="flex flex-col text-black space-y-3 left-[18.35vw] text-[1.88vw]">
                  <p>You can also find us in...</p>
                  <div className="flex w-[22.2vw] justify-evenly">
                    <FiLinkedin />
                    <FiInstagram />
                    <FaTiktok />
                  </div>
                </div>
              </motion.div>
              <div className="flex w-full mr-[15.78vw] items-end justify-end">
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Contact;
