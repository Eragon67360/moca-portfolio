"use client";
import React from "react";
import DesktopContactForm from "@/components/[locale]/desktop/DesktopContactForm";
import DesktopVisitCard from "@/components/[locale]/desktop/DesktopVisitCard";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import instagram from "@/public/logos/instagram.png";
import linkedin from "@/public/logos/linkedin.png";
import tiktok from "@/public/logos/tiktok.png";
import { useTranslations } from "next-intl";

function DesktopContact() {

  const t = useTranslations("Contact.MainPage")
  return (
    <>
      <div className="bg-contact-background bg-no-repeat bg-cover bg-center bg-fixed">
        <AnimatePresence>
          <div className="flex flex-col h-[200vh] space-y-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center mt-24"
            >
              <div className="text-[2vw] font-bold text-center absolute z-10 mt-[7.81vh] ml-2">
                {t('title1')}{" "}
                <span className="uppercase text-cinnabar">{t('title2')}</span>
                <br />
                {t('title3')}{" "}
                <span className="uppercase text-cinnabar">{t('title4')}</span>
              </div>
            </motion.div>

            <div className="flex">
              <div className="w-1/2 flex flex-col ml-[18.35vw] mt-[22.81vh] fixed space-y-12">
                <div className="">
                  <DesktopVisitCard />
                </div>
                <div className="h-[25vh] w-[22.2vw] flex space-y-3 left-[18.35vw] text-xl justify-start">
                  <div className="flex flex-col space-y-3">
                    <p className="text-left">{t('find')}</p>
                    <div className="flex w-full justify-center space-x-8">
                      <a
                        href="https://www.linkedin.com/in/thomas-moser67"
                        target="_blank"
                      >
                        <Image src={linkedin} alt="logo linkedin" width={45} />
                      </a>
                      <a
                        href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
                        target="_blank"
                      >
                        <Image
                          src={instagram}
                          alt="logo instagram"
                          width={45}
                        />
                      </a>
                      <a
                        href="https://www.tiktok.com/@cristinaandresrr?lang=en"
                        target="_blank"
                      >
                        <Image src={tiktok} alt="logo tiktok" width={45} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full mr-20 lg:mr-52 items-end justify-end">
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
