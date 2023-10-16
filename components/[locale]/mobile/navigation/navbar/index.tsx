"use client";
import Menu from "@/components/[locale]/mobile/menu";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { Language } from "@/components/[locale]/desktop/navigation/navbar/Language";
import { Logo } from "@/components/[locale]/desktop/navigation/navbar/Logo";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (menuOpen) {
      setIsVisible(false);
      setMenuOpen(false);
    } else {
      setIsVisible(true);
      setMenuOpen(true);
    }
  };

  return (
    <>
      {pathname !== "/" && (
        <>
          {isVisible && (
            <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          )}
          <div className="flex justify-between p-6">
            <Logo/>
            <Language />
          </div>
          <button
            aria-label="menu"
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-secondary text-falured py-2 px-2 rounded-full shadow-lg hover:text-opacity-75 z-40"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <MdOutlineClose size={32} />
            ) : (
              <CgMenuGridO size={32} />
            )}
          </button>
        </>
      )}
    </>
  );
};

export default MobileNavbar;
