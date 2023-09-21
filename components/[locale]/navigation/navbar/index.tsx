"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Menu from "@/components/[locale]/Menu";
import { Language } from "./Language";
import { Logo } from "./Logo";
import { CgMenuGridO } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { Search } from "./Search";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const t = useTranslations('Navigation');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const scrollPercentage = windowHeight
    ? Math.min(scrollY / windowHeight, 1)
    : 0;
  const navbarOpacity = 1 - scrollPercentage;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      // apply dark theme styles
    } else {
      setTheme("light");
      // apply light theme styles
    }
  };
  return (
    <>
      <nav style={{ opacity: navbarOpacity }}>
        <Menu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="flex justify-between items-center px-10 py-4 bg-linen  text-third">
          <div className="w-full flex">
            <div className="flex space-x-8 text-2xl font-bold">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full hover:bg-gray-200 hover:text-blackbean"
              >
                <CgMenuGridO size={30} />
              </button>
              <div className="flex items-center space-x-[1.3vw]">
                <Link
                  href="/"
                  className="text-[1.2vw] font-sans uppercase hover:text-cinnabar"
                >
                  {t('home')}
                </Link>
                <Link
                  href="/projects"
                  className="text-[1.2vw] font-sans uppercase hover:text-cinnabar"
                >
                  {t('work')}
                </Link>
                <Link
                  href="/about"
                  className="text-[1.2vw] font-sans uppercase hover:text-cinnabar"
                >
                  {t('about')}
                </Link>
                <Link
                  href="/contact"
                  className="text-[1.2vw] font-sans uppercase hover:text-cinnabar"
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <div className="flex space-x-4 w-full justify-end">
            <Language/>
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
