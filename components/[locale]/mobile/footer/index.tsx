"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Logos from "./Logos";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";

const MobileFooter = () => {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <>
      {pathname !== `/${locale}` &&
        pathname !== `/${locale}/` &&
        pathname !== `/${locale}/admin` && (
          <div className="flex bg-linen dark:bg-blackbean justify-between px-[32px] py-6 border-t-2 dark:border-secondary/50 border-third/50">
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col space-y-[10px]">
                <div className="justify-start items-start flex">
                  <Image src={logo} alt="logo" width={141} />
                </div>
                <p className="text-xs w-[184px]">
                  UX MOCA is headquartered in Strasbourg, France.
                </p>
              </div>

              <Logos />
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col space-y-2 text-[11px]">
                <Link href={"/home"} className="hover:text-cinnabar">
                  Home
                </Link>
                <a
                  href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
                  target="_blank"
                  className="hover:text-cinnabar"
                >
                  Featured work
                </a>
                <Link href={"/about"} className="hover:text-cinnabar">
                  Team
                </Link>

                <Link href={"/contact"} className="hover:text-cinnabar">
                  Contact
                </Link>
                <Link href={"/privacy"} className="hover:text-cinnabar">
                  Privacy Policy
                </Link>
                <Link href={"/"} className="hover:text-cinnabar">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default MobileFooter;
