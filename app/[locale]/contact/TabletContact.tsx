"use client";
import React, { useRef } from "react";

import TabletContactForm from "@/components/[locale]/tablet/TabletContactForm";
import TabletVisitCard from "@/components/[locale]/tablet/TabletVisitCard";
import useWindowHeight from "@/hooks/useWindowHeight";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import instagram from "@/public/logos/instagram.png";
import linkedin from "@/public/logos/linkedin.png";
import tiktok from "@/public/logos/tiktok.png";

function TabletContact() {
  let windowHeight = useWindowHeight();
  if (windowHeight == 0) {
    windowHeight = 800;
  }

  const elementRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="bg-contact-background bg-no-repeat bg-cover bg-center bg-fixed">
        <div className=" flex flex-col items-center my-[67px]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-center"
            >
              User-centric design is{" "}
              <span className="uppercase text-falured dark:text-cinnabar">
                the future.
              </span>
              <br />
              Let&apos;s shape it{" "}
              <span className="uppercase text-falured dark:text-cinnabar">
                together !
              </span>
            </motion.div>
            <motion.div
              initial={{ y: windowHeight }}
              animate={{
                y: 0,
              }}
              transition={{ duration: 2, delay: 1 }}
              ref={elementRef}
              className="flex flex-col space-y-8 mt-[67px]"
            >
              <TabletContactForm />
              <TabletVisitCard />
              <div className="py-4 w-full flex flex-col text-center bg-secondary dark:bg-falured space-y-3 text-xl shadow-lightBox rounded-2xl">
                <p>You can also find us in...</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/thomas-moser67"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="logo linkedin"
                      width={45}
                      className="hover:opacity-90"
                    />
                  </a>
                  <a
                    href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                  >
                    <Image
                      src={instagram}
                      alt="logo instagram"
                      width={45}
                      className="hover:opacity-90"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@cristinaandresrr?lang=en"
                    target="_blank"
                  >
                    <Image
                      src={tiktok}
                      alt="logo tiktok"
                      width={45}
                      className="hover:opacity-90"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default TabletContact;
