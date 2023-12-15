import React from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

const DesktopVisitCard = () => {
  const iconSize = `calc(1vw + 1vh)`;
  const t = useTranslations("Contact.VisitCard")
  return (
    <>
      <motion.div
        initial={{ backgroundColor: "#742119", color: "#fff" }}
        animate={{ backgroundColor: "rgba(255, 0, 0, 0)", color: "#000" }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[188px] w-[284px] px-5 py-4 rounded-xl flex flex-col justify-between space-y-8 contact-shadow"
      >
        <div className="flex justify-center text-center text-2xl dark:text-dark_ink">
        {t('information')}
        </div>

        <div className="flex flex-col text-base space-y-2 dark:text-dark_ink">
          <div className="flex space-x-4">
            <div className="flex items-start">
              <FiMail style={{ fontSize: 20 }} />
            </div>
            <div className="flex items-start align-middle justify-center">
              <a
                href="mailto:uxmoca@gmail.com"
                className="align-middle justify-center"
                aria-label="Send an email"
              >
                uxmoca@gmail.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-start">
              <FiPhone style={{ fontSize: 20 }} />
            </div>
            <div className="flex items-start align-middle justify-center">
              <a aria-label="Call a specific number" href="tel:+33647849308">+33 6 47 84 93 08</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-start">
              <IoLocationOutline style={{ fontSize: 20 }} />
            </div>
            <div className="flex items-start align-middle justify-center">
              <a
                href="https://maps.app.goo.gl/66wU2miXSrtcs5mr7"
                target="_blank"
                aria-label="Go to this location"
              >
                Strasbourg, France
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DesktopVisitCard;
