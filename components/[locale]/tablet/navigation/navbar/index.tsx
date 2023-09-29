"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "@/components/[locale]/desktop/menu";

import { Language } from "@/components/[locale]/desktop/navigation/navbar/Language";
import { Logo } from "./Logo";
import { CgMenuGridO } from "react-icons/cg";
import { Search } from "@/components/[locale]/desktop/navigation/navbar/Search";

const TabletNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav>
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="flex justify-between items-center px-10 py-4 bg-secondary dark:bg-blackbean border border-b-2 border-cinnabar dark:border-falured rounded-b-lg ">
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
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <div className="flex space-x-4 w-full justify-end">
            <Search />
            <Language />
          </div>
        </div>
      </nav>
    </>
  );
};

export default TabletNavbar;
