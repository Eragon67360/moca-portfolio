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
      <div className="flex flex-col space-y-4 mt-24 mb-8 h-full text-light_ink dark:text-dark_ink text-lg font-bold justify-between">
        <div className="space-y-4 ">
          <Link
            href="/home"
            className="block hover:text-light_primary"
            onClick={onClose}
          >
            {t("home")}
          </Link>
          <hr className="w-full h-[1px] mx-auto bg-gray-800 dark:bg-light_background/80 border-0 rounded" />
          <Link
            href="/about"
            className="block hover:text-light_primary"
            onClick={onClose}
          >
            {t("team")}
          </Link>
          <hr className="w-full h-[1px] mx-auto bg-gray-800 dark:bg-light_background/80 border-0 rounded" />

          <Link
            href="/contact"
            className="block hover:text-light_primary"
            onClick={onClose}
          >
            {t("contact")}
          </Link>
        </div>

        <div className="space-y-6">
          <div className="w-full flex flex-col space-y-3 px-8 pb-2 items-center justify-center">
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
          <div className="flex justify-center items-center">
            <Providers>
              <ThemeSwitcher />
            </Providers>
          </div>
        </div>
      </div>
    </>
  );
};
