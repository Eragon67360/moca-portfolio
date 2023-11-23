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
  const [isShrunk, setIsShrunk] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const currentScrollTop = scrollY;

    // Scrolling down
    if (currentScrollTop > lastScrollTop.current) {
      setIsShrunk(false);
    }
    // Scrolling up
    else {
      setIsShrunk(true);
    }

    lastScrollTop.current = currentScrollTop;
  }, [scrollY]);

  const commonClasses =
    "lg:text-xl xl:text-2xl text-base uppercase hover:text-cinnabar dark:hover:text-cinnabar transform transition transition-all duration-300 hover:scale-110";

  return (
    <>
      {pathname !== "/" &&
        pathname !== "/admin" &&
        pathname !== `/${locale}` &&
        pathname !== `/${locale}/` &&
        pathname !== `/${locale}/admin` && (
          <nav>
            <motion.div
              animate={{
                y: isShrunk ? 0 : -100,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              exit={{ y: isShrunk ? -100 : 0 }}
              className={`fixed top-0 left-0 w-full z-40 flex items-center px-10 dark:bg-blackbean border-b-2 border-x-2 rounded-b-xl transition-all border-cinnabar h-[72px] bg-linen`}
            >
              <div className="flex w-full justify-between items-center">
                <div className="w-full flex">
                  <div className={`flex space-x-8 font-bold `}>
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
                <div
                  className={`flex space-x-4 w-full justify-end transition-all`}
                >
                  <Providers>
                    <ThemeSwitcher />
                  </Providers>
                  <Language />
                </div>
              </div>
            </motion.div>
          </nav>
        )}
    </>
  );
};

export default DesktopNavbar;
