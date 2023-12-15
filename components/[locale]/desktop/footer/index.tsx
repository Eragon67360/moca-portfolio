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
          <div className="h-[180PX] flex flex-col bg-light_surface dark:bg-dark_background justify-between px-[129px] pt-11 pb-7 border-t-2 dark:border-dark_ink/50 border-light_ink/50">
            <div className="flex justify-between">
              <div className="justify-start items-start flex">
                <Image src={logo} alt="logo" width={115} />
              </div>
              <div className="flex space-x-6 pt-1">
                <div className="flex space-x-6 text-xs">
                  <Link href={"/home"} className="hover:text-light_primary text-xs">
                    Home
                  </Link>
                  <a
                    href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
                    target="_blank"
                    className="hover:text-light_primary"
                  >
                    Featured work
                  </a>
                  <Link href={"/about"} className="hover:text-light_primary">
                    Team
                  </Link>

                  <Link href={"/contact"} className="hover:text-light_primary">
                    Contact
                  </Link>
                </div>
                <div className="flex space-x-6 text-xs">
                  <Link href={"/privacy"} className="hover:text-light_primary">
                    Privacy Policy
                  </Link>
                  <Link href={"/"} className="hover:text-light_primary">
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
