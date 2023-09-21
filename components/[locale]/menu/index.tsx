import React, { useState } from "react";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { Items } from "./Items";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme: string;
  toggleTheme: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, theme, toggleTheme }) => {
  // Variants for the menu animation
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "ease",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const backgroundVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={backgroundVariants}
        className={
          isOpen
            ? "flex fixed z-30 top-0 left-0 w-full h-full bg-black/50 text-white"
            : "hidden"
        }
      >
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="flex flex-col py-4 px-8 w-1/3 bg-white"
        >
          <button
            className="absolute top-8 left-8 rounded-full bg-gray-700 hover:bg-gray-600"
            onClick={onClose}
          >
            <AiFillCloseCircle size={40} />
          </button>
          <Items onClose={onClose} toggleTheme={toggleTheme} theme={theme} />
        </motion.div>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={backgroundVariants}
          className="bg-black/50 w-2/3"
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Menu;