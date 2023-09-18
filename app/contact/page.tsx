"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import VisitCard from "@/components/VisitCard";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

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
      <div
        className="bg-contact-background bg-no-repeat bg-cover bg-center bg-fixed"
        onScroll={handleScroll}
      >
        <AnimatePresence>
          <div className="flex flex-col h-[145vh] space-y-20">
            <motion.div
              initial={{ opacity: 1 }}
              animate={controlSection1}
              className="flex justify-center items-center mt-24 bg-none"
            >
              <motion.p
                initial={{ opacity: 1 }}
                animate={controlSection1}
                className="text-black font-sans text-[34px] font-bold text-center fixed z-0"
              >
                User-centric design is{" "}
                <span className="uppercase text-falured">the future.</span>
                <br />
                Let&apos;s shape it{" "}
                <span className="uppercase text-falured">together !</span>
              </motion.p>
            </motion.div>

            <div className="flex">
              <div className="w-1/2 flex flex-col justify-stretch space-y-16">
                <div className="ml-52 fixed">
                  <VisitCard />
                </div>
                <div className="flex flex-col text-black font-sans ml-52 space-y-3 fixed top-[500px]">
                  <p className=" text-2xl  text-cinnabar">Opening Hours</p>
                  <div className="flex space-x-10">
                    <div>
                      <p>
                        Mon.
                        <br />
                        Tues.
                        <br />
                        Wed.
                        <br />
                        Thurs.
                        <br />
                        Fr.
                        <br />
                      </p>
                    </div>
                    <div>
                      <p>
                        9am - 5pm
                        <br />
                        9am - 5pm
                        <br />
                        9am - 5pm
                        <br />
                        9am - 5pm
                        <br />
                        9am - 4pm
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 items-center">
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
