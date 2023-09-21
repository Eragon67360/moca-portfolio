import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import instagram from "@/public/logos/instagram.png";
import linkedin from "@/public/logos/linkedin.png";
import tiktok from "@/public/logos/tiktok.png";
import { link } from "fs";

export const Items = ({
  onClose,
  theme,
  toggleTheme,
}: {
  onClose: () => void;
  theme: string;
  toggleTheme: () => void;
}) => {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className="flex flex-col space-y-4 my-24 h-full text-black text-2xl font-bold justify-between">
        <div className="space-y-4 ">
          <Link
            href="/"
            className="block hover:text-cinnabar"
            onClick={onClose}
          >
            {t("home")}
          </Link>
          <hr className="w-full h-0.5 mx-auto bg-gray-800 border-0 rounded" />
          <Link
            href="/about"
            className="block hover:text-cinnabar"
            onClick={onClose}
          >
            {t("about")}
          </Link>
          <hr className="w-full h-0.5 mx-auto bg-gray-800 border-0 rounded" />
          <Link
            href="/projects"
            className="block hover:text-cinnabar "
            onClick={onClose}
          >
            {t("work")}
          </Link>
          <hr className="w-full h-0.5 mx-auto bg-gray-800 border-0 rounded" />
          <Link
            href="/contact"
            className="block hover:text-cinnabar"
            onClick={onClose}
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex flex-col pb-2 space-y-10 items-center font-sans">
          <p className="font-semibold text-4xl">Social Media</p>
          <div className="flex space-x-4 justify-between px-8 w-full">
            <a
              className="space-y-3 items-center flex flex-col hover:bg-gradient-to-r hover:from-[#67C9D0] hover:via-black hover:to-[#EE1D52] hover:bg-clip-text hover:text-transparent"
              href="https://www.tiktok.com/@cristinaandresrr?lang=en"
              target="_blank"
            >
              <Image src={tiktok} alt="logo tiktok" width={50} />
              <p className="uppercase text-center">Tiktok</p>
            </a>
            <a
              className="space-y-3 items-center flex flex-col hover:bg-gradient-to-r hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] hover:bg-clip-text hover:text-transparent"
              href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <Image src={instagram} alt="logo instagram" width={50} />
              <p className="uppercase text-center">Instagram</p>
            </a>
            <a
              className="space-y-3 items-center flex flex-col hover:bg-gradient-to-r hover:from-slate-400 hover:to-[#2867b2] hover:bg-clip-text hover:text-transparent"
              href="https://www.linkedin.com/in/thomas-moser67"
              target="_blank"
            >
              <Image src={linkedin} alt="logo linkedin" width={50} />

              <p className="uppercase">Linkedin</p>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
          >
            {theme === "light" ? "🌙" : "☀️"}{" "}
            {/* icons representing the themes */}
          </button>
        </div>
      </div>
    </>
  );
};