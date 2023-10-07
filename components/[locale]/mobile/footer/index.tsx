import React from "react";
import Logos from "./Logos";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <>
      <div className="bg-linen dark:bg-blackbean flex flex-col p-8 pb-20 border-t-2 border-blackbean/50 dark:border-secondary/50 space-y-7">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-start space-x-4">
            <div className="w-full">
              <Image src={logo} alt="logo" width={141} />
            </div>
            <p className="text-xs w-full">
              UX MOCA is headquartered in Strasbourg, France.
            </p>
          </div>
        </div>

        <div className="flex space-x-3 justify-between">
          <div className="flex flex-col space-y-2">
            <Link href={"/home"} className="hover:text-cinnabar">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-cinnabar">
              Team
            </Link>
            <Link href={"/contact"} className="hover:text-cinnabar">
              Contact
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <Link href={"/privacy"} className="hover:text-cinnabar">
              Privacy Policy
            </Link>
            <Link href={"/"} className="hover:text-cinnabar">
              Terms of Service
            </Link>
          </div>
          <Logos />
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
