"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "@/components/[locale]/ThemeSwitcher";
import Providers from "@/app/[locale]/providers";

export const Items = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className="flex flex-col space-y-4 my-24 h-full text-black dark:text-secondary text-2xl font-bold justify-between">
        <div className="space-y-4 ">
          <Link
            href="/"
            className="block hover:text-cinnabar"
            onClick={onClose}
          >
            {t("home")}
          </Link>
          <hr className="w-full h-0.5 mx-auto bg-gray-800 dark:bg-secondary/80 border-0 rounded" />
          <Link
            href="/about"
            className="block hover:text-cinnabar"
            onClick={onClose}
          >
            {t("about")}
          </Link>
          <hr className="w-full h-0.5 mx-auto bg-gray-800 dark:bg-secondary/80 border-0 rounded" />
          <Link
            href="/projects"
            className="block hover:text-cinnabar "
            onClick={onClose}
          >
            {t("work")}
          </Link>
          <hr className="w-full h-0.5 mx-auto bg-gray-800 dark:bg-secondary/80 border-0 rounded" />
          <Link
            href="/contact"
            className="block hover:text-cinnabar"
            onClick={onClose}
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex flex-col pb-2 space-y-10 items-center">
          <p className="font-semibold text-4xl">Social Media</p>
          <div className="flex flex-wrap gap-4 px-8 w-full justify-center">
            <a
              className="space-y-3 items-center flex flex-col hover:bg-gradient-to-r hover:from-[#67C9D0] hover:via-black hover:to-[#EE1D52] hover:bg-clip-text hover:text-transparent"
              href="https://www.tiktok.com/@cristinaandresrr?lang=en"
              target="_blank"
            >
              <p className="uppercase text-center">Tiktok</p>
            </a>
            <a
              className="space-y-3 items-center flex flex-col hover:bg-gradient-to-r hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] hover:bg-clip-text hover:text-transparent"
              href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <p className="uppercase text-center">Instagram</p>
            </a>
            <a
              className="space-y-3 items-center flex flex-col hover:bg-gradient-to-r hover:from-slate-400 hover:to-[#2867b2] hover:bg-clip-text hover:text-transparent"
              href="https://www.linkedin.com/in/thomas-moser67"
              target="_blank"
            >
              <p className="uppercase">Linkedin</p>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Providers>
            <ThemeSwitcher />
          </Providers>
        </div>
      </div>
    </>
  );
};
