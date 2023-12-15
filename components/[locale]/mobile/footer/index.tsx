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
          <div className="flex bg-light_surface dark:bg-dark_background justify-between px-[32px] py-6 border-t-2 dark:border-dark_ink/50 border-light_ink/50">
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
                <Link href={"/home"} className="hover:text-light_primary">
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
                <Link href={"/privacy"} className="hover:text-light_primary">
                  Privacy Policy
                </Link>
                <Link href={"/"} className="hover:text-light_primary">
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
