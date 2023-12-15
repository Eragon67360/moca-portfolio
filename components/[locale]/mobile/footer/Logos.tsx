import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTiktok } from "react-icons/io5";

const Logos = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-transparent hover:bg-light_background transition-all p-2 text-light_secondary dark:text-dark_ink dark:hover:text-light_secondary">
          <a
            href="https://www.linkedin.com/in/thomas-moser67"
            target="_blank"
            aria-label="Go to LinkedIn"
          >
            <TfiLinkedin size={18} />
          </a>
        </div>
        <div className="rounded-full bg-transparent hover:bg-light_background transition-all p-2 text-light_secondary dark:text-dark_ink dark:hover:text-light_secondary">
          <a
            href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            aria-label="Go to Instagram"
          >
            <AiOutlineInstagram size={18} />
          </a>
        </div>
        <div className="rounded-full bg-transparent hover:bg-light_background transition-all p-2 text-light_secondary dark:text-dark_ink dark:hover:text-light_secondary">
          <a
            href="https://www.tiktok.com/@cristinaandresrr?lang=en"
            target="_blank"
            aria-label="Go to TikTok"
          >
            <IoLogoTiktok size={18} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Logos;
