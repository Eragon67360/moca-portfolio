"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Logos from "./Logos";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
import line from '@/public/doodles/line.png'

const DesktopFooter = () => {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <>
      {pathname !== `/${locale}` &&
        pathname !== `/${locale}/` &&
        pathname !== `/${locale}/admin` && (
          <div className="h-[180PX] flex flex-col bg-linen dark:bg-blackbean justify-between px-[129px] pt-11 pb-7 border-t-2 dark:border-secondary/50 border-third/50">
            <div className="flex justify-between">
              <div className="justify-start items-start flex">
                <Image src={logo} alt="logo" width={115} />
              </div>
              <div className="flex space-x-6 pt-1">
                <div className="flex space-x-6 text-xs">
                  <Link href={"/home"} className="hover:text-cinnabar text-xs">
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
                </div>
                <div className="flex space-x-6 text-xs">
                  <Link href={"/privacy"} className="hover:text-cinnabar">
                    Privacy Policy
                  </Link>
                  <Link href={"/"} className="hover:text-cinnabar">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>

            <Image src={line} alt="separator" className="w-full mt-9" />
            <div className="flex justify-between">
              <p className="text-xs pt-4">
                UX MOCA is headquartered in Strasbourg, France.
              </p>
              <div className="pt-[10px]">
                <Logos />
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default DesktopFooter;
