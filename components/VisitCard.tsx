import React from "react";
import Image from "next/image";
import logo_white from "@/public/logo_white.png";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const VisitCard = () => {
  return (
    <>
      <div className="h-[160px] w-[240px] rounded-xl bg-falured text-secondary flex flex-col justify-between font-sans contact-shadow">
        <div className="pt-4 flex justify-center">
          <Image src={logo_white} alt="logo white version" />
        </div>

        <div className="flex flex-col py-4">
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <FiMail />
            </div>
            <div className="flex items-center">
              <a href="mailto:uxmoca@gmail.com">uxmoca@gmail.com</a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <FiPhone />
            </div>
            <div className="flex items-center">
              <a href="tel:+33647849308">+33 6 47 84 93 08</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitCard;
