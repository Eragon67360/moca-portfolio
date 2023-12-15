"use client";
import React, { useRef } from "react";

import PhabletContactForm from "@/components/[locale]/phablet/contact/PhabletContactForm";
import PhabletVisitCard from "@/components/[locale]/phablet/contact/PhabletVisitCard";
import useWindowHeight from "@/hooks/useWindowHeight";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import instagram from "@/public/logos/instagram.png";
import linkedin from "@/public/logos/linkedin.png";
import tiktok from "@/public/logos/tiktok.png";
import { useTranslations } from "next-intl";

function PhabletContact() {
  let windowHeight = useWindowHeight();
  if (windowHeight == 0) {
    windowHeight = 800;
  }

  const elementRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("Contact.MainPage");

  return (
    <>
      <div className="bg-contact-background dark:bg-contact-background_dark bg-no-repeat bg-cover bg-center bg-fixed">
        <div className=" flex flex-col items-center mt-[138px] pb-[67px]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1 }}
              className="text-2xl font-bold text-center"
            >
              {t("title1")}{" "}
              <span className="uppercase text-light_secondary dark:text-light_primary">
                {t("title2")}
              </span>
              <br />
              {t("title3")}{" "}
              <span className="uppercase text-light_secondary dark:text-light_primary">
                {t("title4")}
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
              <PhabletContactForm />
              <PhabletVisitCard />
              <div className="py-4 w-full flex flex-col text-center bg-light_background dark:bg-dark_surface space-y-3 text-xl shadow-lightBox rounded-2xl">
                <p>{t("find")}</p>
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

export default PhabletContact;
