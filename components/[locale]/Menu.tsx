import React, { useState } from "react";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

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
      x:0,
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
        className={isOpen ? "flex fixed z-30 top-0 left-0 w-full h-full bg-black/50 text-white" : "hidden"}
      >
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="flex flex-col justify-center items-center w-1/3 bg-white"
        >
          <button
            className="absolute top-8 left-8 rounded-full bg-gray-700 hover:bg-gray-600"
            onClick={onClose}
          >
            <AiFillCloseCircle size={40} />
          </button>
          <div className="space-y-4 text-center mt-20 text-black text-4xl ">
            <div className="space-y-10">
              <Link
                href="/"
                className="block hover:text-cinnabar"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-cinnabar"
                onClick={onClose}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block hover:text-cinnabar "
                onClick={onClose}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block hover:text-cinnabar"
                onClick={onClose}
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col pt-20 space-y-10">
              <a className="font-impact font-bold ">Social Media</a>
              <a
                className="font-impact font-bold hover:bg-gradient-to-r hover:from-[#67C9D0] hover:via-black hover:to-[#EE1D52] hover:bg-clip-text hover:text-transparent "
                href="https://www.tiktok.com/@cristinaandresrr?lang=en"
                target="_blank"
              >
                Tiktok
              </a>
              <a
                className="font-impact font-bold hover:bg-gradient-to-r hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5] hover:bg-clip-text hover:text-transparent "
                href="https://instagram.com/thomas_msr_67?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              {theme === "light" ? "🌙" : "☀️"}{" "}
              {/* icons representing the themes */}
            </button>
          </div>
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
