"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Language } from "./Language";
import { Logo } from "./Logo";
import { useLocale, useTranslations } from "next-intl";
import ThemeSwitcher from "@/components/[locale]/ThemeSwitcher";
import Providers from "@/app/[locale]/providers";
import useScrollPosition from "@react-hook/window-scroll";
import { motion } from "framer-motion";

const DesktopNavbar = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}/home`, name: t("home") },
    { href: `/${locale}/about`, name: t("team") },
    { href: `/${locale}/contact`, name: t("contact") },
  ];

  const scrollY = useScrollPosition(60 /*fps*/);
  const [visible, setVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const currentScrollTop = scrollY;
    // Scrolling down
    if (currentScrollTop > lastScrollTop.current) {
      setVisible(false);
    }
    // Scrolling up
    else {
      setVisible(true);
    }

    lastScrollTop.current = currentScrollTop;
  }, [scrollY]);

  const commonClasses =
    "text-base lg:text-lg xl:text-xl uppercase hover:text-cinnabar dark:hover:text-cinnabar transform transition duration-300 hover:scale-110";

  return (
    <>
      {pathname !== `/${locale}` &&
        pathname !== `/${locale}/` &&
        pathname !== `/${locale}/admin` && (
          <nav>
            <motion.div
              animate={{
                y: visible ? 0 : -100,
              }}
              transition={{ ease: "linear", duration: 0.6 }}
              exit={{ y: visible ? -100 : 0 }}
              className="fixed top-0 left-0 w-full z-20 transition-all flex justify-between items-center px-10 py-4 bg-transparent dark:bg-blackbean"
            >
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
            </motion.div>
          </nav>
        )}
    </>
  );
};

export default DesktopNavbar;
