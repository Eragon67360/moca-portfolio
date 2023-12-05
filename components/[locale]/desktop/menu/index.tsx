import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { Items } from "./Items";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  // Variants for the menu animation
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "ease",
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "ease",
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

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={
          isOpen
            ? "flex fixed z-50 top-0 left-0 w-full h-full bg-[#999999]/80 text-white"
            : "hidden"
        }
      >
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="flex flex-col py-4 px-8 w-[360px] bg-white dark:bg-blackbean"
        >
          <button
            className="absolute top-8 left-8 rounded-full bg-gray-700 hover:bg-gray-600"
            onClick={onClose}
          >
            <AiFillCloseCircle size={40} />
          </button>
          <Items onClose={onClose} />
        </motion.div>
        <motion.div
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={backgroundVariants}
          className="bg-black/50 w-3/4"
        ></motion.div>
      </div>
    </>
  );
};

export default Menu;
