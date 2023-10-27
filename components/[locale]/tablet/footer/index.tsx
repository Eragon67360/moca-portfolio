"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Logos from "./Logos";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TabletFooter = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <div className="flex bg-linen dark:bg-blackbean text-sm justify-between p-12 border-t-2 dark:border-secondary/50 border-third/50">
          <div className="flex justify-center items-center space-x-4 w-1/2">
            <Image src={logo} alt="logo" width={160} />
            <p>UX MOCA is headquartered in Strasbourg, France.</p>
          </div>
          <div className="flex space-x-3">
            <div className="flex flex-col space-y-2">
              <Link href={"/home"} className="hover:text-cinnabar">
                Home
              </Link>
              <Link href={"/about"} className="hover:text-cinnabar">
                Team
              </Link>
              <a
                href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
                target="_blank"
                className="hover:text-cinnabar"
              >
                Featured work
              </a>
              <Link href={"/contact"} className="hover:text-cinnabar">
                Contact
              </Link>
            </div>
            <div className="flex flex-col justify-between">
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
        </div>
      )}
    </>
  );
};

export default TabletFooter;
