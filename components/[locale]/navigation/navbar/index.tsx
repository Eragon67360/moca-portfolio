"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import home from "@/public/HOME.svg";
import work from "@/public/WORK.svg";
import contact from "@/public/CONTACT.svg";

import Menu from "@/components/Menu";
import { Logo } from "./Logo";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light'); 

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
    <div className="flex justify-between items-center p-4 bg-magnolia text-third">
      <div>
        <Logo />
      </div>
      <div className="flex space-x-8 text-2xl font-bold">
        <div className="flex items-center space-x-10">
          <Link href="/" className="hover:text-primary">
            <Image src={home} height={20} alt="home link" />
          </Link>
          <Link href="/work" className="hover:text-primary">
            <Image src={work} height={20} alt="work link" />
          </Link>
          <Link href="/contact" className="hover:text-primary">
            <Image src={contact} height={20} alt="contact link" />
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full  bg-secondary hover:bg-gray-200 hover:text-primary"
        >
          <CgMenuGridO size={30}/>
        </button>
      </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} toggleTheme={toggleTheme} />

    </div>
  );
};

export default Navbar;
