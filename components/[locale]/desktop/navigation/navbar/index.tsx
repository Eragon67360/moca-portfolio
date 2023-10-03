"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "@/components/[locale]/desktop/menu";
import { Language } from "./Language";
import { Logo } from "./Logo";
import { CgMenuGridO } from "react-icons/cg";
import { useLocale, useTranslations } from "next-intl";

const DesktopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const locale = useLocale();

  const navLinks = [
    { href: "/", name: t("home") },
    { href: "/projects", name: t("work") },
    { href: "/about", name: t("about") },
    { href: "/contact", name: t("contact") },
  ];

  const commonClasses =
    "text-base lg:text-lg xl:text-xl uppercase hover:text-cinnabar dark:hover:text-cinnabar transform transition duration-300 hover:scale-110";

  const scrollPercentage = windowHeight
    ? Math.min(scrollY / windowHeight, 1)
    : 0;
  const navbarOpacity = 1 - scrollPercentage;

  return (
    <>
      <nav style={{ opacity: navbarOpacity }}>
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="flex justify-between items-center px-10 py-4 bg-secondary dark:bg-blackbean border border-b-2 border-cinnabar rounded-b-lg ">
          <div className="w-full flex">
            <div className="flex space-x-8 text-2xl font-bold">
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 rounded-full transform transition duration-300 hover:scale-125"
              >
                <CgMenuGridO
                  size={30}
                  className="hover:text-cinnabar text-third dark:text-secondary"
                />
              </button>
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
            <Language />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
