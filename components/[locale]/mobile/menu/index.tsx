import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { motion } from "framer-motion";
import { Items } from "./Items";

interface MenuProps {
  isOpen: boolean;
  onClose: ()=>void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  // Variants for the menu animation
  const menuVariants = {
    open: {
      y: 0,
      transition: {
        type: "ease",
      },
    },
    closed: {
      y: "100%",
      transition: {
        type: "ease",
      },
    },
  };

  return (
    <>
      <div
        className={
          isOpen
            ? "flex fixed z-30 top-0 left-0 w-full h-full text-white"
            : "hidden"
        }
      >
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="flex flex-col py-4 px-8 w-full bg-white dark:bg-blackbean"
        >
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" />
            <h1 className="uppercase text-2xl font-bold">Moca</h1>
          </div>
          <Items onClose={onClose}  />
        </motion.div>
      </div>
    </>
  );
};

export default Menu;
