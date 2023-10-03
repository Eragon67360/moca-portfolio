import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTiktok } from "react-icons/io5";

const Logos = () => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="rounded-full bg-secondary p-2 text-falured">
          <a href="https://www.linkedin.com/in/thomas-moser67" target="_blank">
            <TfiLinkedin style={{ fontSize: 20 }} />
          </a>
        </div>
        <div className="rounded-full bg-secondary p-2 text-falured">
          <a
            href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <AiOutlineInstagram style={{ fontSize: 20 }} />
          </a>
        </div>
        <div className="rounded-full bg-secondary p-2 text-falured">
          <a
            href="https://www.tiktok.com/@cristinaandresrr?lang=en"
            target="_blank"
          >
            <IoLogoTiktok style={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Logos;
