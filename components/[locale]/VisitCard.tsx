import React from "react";
import Image from "next/image";
import logo_white from "@/public/logo_white.png";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const VisitCard = () => {
  const iconSize = `calc(1vw + 1vh)`;
  return (
    <>
      <div className="h-[25vh] w-[22.2vw] rounded-xl bg-falured text-secondary flex flex-col justify-between contact-shadow ">
        <div className="pt-4 flex justify-center text-[1.88vw]">
          Contact information
        </div>

        <div className="flex flex-col py-4">
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <FiMail style={{fontSize: iconSize}}/>
            </div>
            <div className="flex items-center font-adaptive16 align-middle justify-center">
              <a href="mailto:uxmoca@gmail.com" className="align-middle justify-center">uxmoca@gmail.com</a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <FiPhone style={{fontSize: iconSize}}/>
            </div>
            <div className="flex items-center font-adaptive16 align-middle justify-center">
              <a href="tel:+33647849308">+33 6 47 84 93 08</a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <IoLocationOutline style={{fontSize: iconSize}}/>
            </div>
            <div className="flex items-center font-adaptive16 align-middle justify-center">
              <a
                href="https://maps.app.goo.gl/66wU2miXSrtcs5mr7"
                target="_blank"
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

export default VisitCard;
