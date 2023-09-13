"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import home from "@/public/HOME.svg";
import work from "@/public/WORK.svg";
import contact from "@/public/CONTACT.svg";

import Menu from "@/components/[locale]/Menu";
import { Logo } from "./Logo";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

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
        <div className="flex justify-between items-center p-4 bg-linen  text-third">
          <div>
            <Logo />
          </div>
          <div className="flex space-x-8 text-2xl font-bold">
            <div className="flex items-center space-x-10">
              <Link href="/" className="hover:text-tekhelet">
                <Image src={home} height={20} alt="home link" />
              </Link>
              <Link href="/work" className="hover:text-tekhelet">
                <Image src={work} height={20} alt="work link" />
              </Link>
              <Link href="/contact" className="hover:text-tekhelet">
                <Image src={contact} height={20} alt="contact link" />
              </Link>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 hover:text-tekhelet"
            >
              <CgMenuGridO size={30} />
            </button>
          </div>

          <Menu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
