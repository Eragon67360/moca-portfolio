import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTiktok } from "react-icons/io5";

const Logos = () => {
  return (
    <>
      <div className="flex flex-col pt-4 pr-4 h-full items-center space-y-3">
        <div className="rounded-full bg-secondary p-3 text-falured">
          <a href="https://www.linkedin.com/in/thomas-moser67" target="_blank">
            <TfiLinkedin style={{ fontSize: 30 }} />
          </a>
        </div>
        <div className="rounded-full bg-secondary p-3 text-falured">
          <a
            href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <AiOutlineInstagram style={{ fontSize: 30 }} />
          </a>
        </div>
        <div className="rounded-full bg-secondary p-3 text-falured">
          <a
            href="https://www.tiktok.com/@cristinaandresrr?lang=en"
            target="_blank"
          >
            <IoLogoTiktok style={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Logos;
