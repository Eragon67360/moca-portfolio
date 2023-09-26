"use client";
import Menu from "@/components/[locale]/menu";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
    <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <button
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-secondary text-falured py-2 px-2 rounded-full shadow-lg hover:text-opacity-75"
        onClick={() => setMenuOpen(true)}
      >
        <CgMenuGridO size={32} />
      </button>
    </>
  );
};

export default MobileNavbar;
