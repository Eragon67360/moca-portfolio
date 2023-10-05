"use client";
import Menu from "@/components/[locale]/mobile/menu";
import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
      {isVisible && <Menu isOpen={menuOpen} onClose={()=>setMenuOpen(false)} />}
      <button
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-secondary text-falured py-2 px-2 rounded-full shadow-lg hover:text-opacity-75 z-40"
        onClick={toggleMenu}
      >
        {menuOpen ? <MdOutlineClose size={32} /> : <GrProjects size={32} />}
      </button>
    </>
  );
};

export default MobileNavbar;
