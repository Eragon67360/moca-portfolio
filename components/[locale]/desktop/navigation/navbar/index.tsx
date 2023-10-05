"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Language } from "./Language";
import { Logo } from "./Logo";
import { useLocale, useTranslations } from "next-intl";
import ThemeSwitcher from "@/components/[locale]/ThemeSwitcher";
import Providers from "@/app/[locale]/providers";

const DesktopNavbar = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}/`, name: t("home") },
    { href: `/${locale}/projects`, name: t("work") },
    { href: `/${locale}/about`, name: t("about") },
    { href: `/${locale}/contact`, name: t("contact") },
  ];

  const commonClasses =
    "text-base lg:text-lg xl:text-xl uppercase hover:text-cinnabar dark:hover:text-cinnabar transform transition duration-300 hover:scale-110";

  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-10 py-4 bg-secondary dark:bg-blackbean border border-b-2 border-cinnabar rounded-b-lg ">
          <div className="w-full flex">
            <div className="flex space-x-8 text-2xl font-bold">
              <div className="flex items-center space-x-[1.3vw]">
                {navLinks.map((link) => {
                  const isActive = pathname === "/" + locale + link.href;

                  return (
                    <Link
                      key={link.name}
                      locale={locale}
                      href={link.href}
                      className={`${commonClasses} ${
                        isActive
                          ? "text-cinnabar"
                          : "text-black dark:text-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <div className="flex space-x-4 w-full justify-end">
            <Providers>
              <ThemeSwitcher />
            </Providers>
            <Language />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
