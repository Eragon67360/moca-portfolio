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
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-1/3 h-full bg-tekhelet text-white p-4"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <button
        className="absolute top-8 right-8 rounded-full bg-gray-700 hover:bg-gray-600"
        onClick={onClose}
      >
        <AiFillCloseCircle size={40} />
      </button>
      <div className="space-y-4 text-center mt-20">
        <Link
          href="/"
          className="block hover:text-gray-300 hover:bg-primary/70 text-4xl"
        >
          Home
        </Link>
        <Link href="/work" className="block hover:text-gray-300 text-4xl">
          Work
        </Link>
        <Link href="/contact" className="block hover:text-gray-300 text-4xl">
          Contact
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          {theme === "light" ? "🌙" : "☀️"}{" "}
          {/* icons representing the themes */}
        </button>
      </div>
    </motion.div>
  );
};

export default Menu;
