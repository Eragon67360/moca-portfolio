import { useTranslations } from "next-intl";
import React from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const MobileVisitCard = () => {
  const iconSize = `calc(1vw + 1vh)`;
  const t = useTranslations("Contact.VisitCard")
  return (
    <>
      <div className="flex flex-col justify-start space-y-4">
        <div className="pt-4 pl-4 flex justify-start text-xl dark:text-dark_ink ">
          {t('information')}
        </div>

        <div className="flex flex-col py-4 text-sm space-y-2 dark:text-dark_ink">
          <div className="flex space-x-4 pl-4 ">
            <div className="flex items-center">
              <FiMail style={{ fontSize: iconSize }} />
            </div>
            <div className="flex items-center align-middle justify-center">
              <a
                href="mailto:uxmoca@gmail.com"
                className="align-middle justify-center"
                aria-label="Send an email"
              >
                uxmoca@gmail.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <FiPhone style={{ fontSize: iconSize }} />
            </div>
            <div className="flex items-center align-middle justify-center">
              <a href="tel:+33647849308" aria-label="Call a specific number">
                +33 6 47 84 93 08
              </a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <IoLocationOutline style={{ fontSize: iconSize }} />
            </div>
            <div className="flex items-center align-middle justify-center">
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
      </div>
    </>
  );
};

export default MobileVisitCard;
