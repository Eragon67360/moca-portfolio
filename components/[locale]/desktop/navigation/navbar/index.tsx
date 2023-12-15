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
    "lg:text-xl xl:text-2xl text-base uppercase hover:text-light_primary dark:hover:text-light_primary transform transition transition-all duration-300 hover:scale-110";

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
              className={`fixed top-0 left-0 w-full z-40 flex items-center px-10 dark:bg-dark_background border-b-2 border-x-2 rounded-b-xl transition-all border-light_primary h-[72px] bg-light_surface`}
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
                                ? "text-light_primary"
                                : "text-light_ink dark:text-dark_ink"
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
