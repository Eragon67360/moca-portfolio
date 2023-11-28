"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "@/components/[locale]/desktop/menu";
import { usePathname } from "next/navigation";
import { Language } from "@/components/[locale]/desktop/navigation/navbar/Language";
import { Logo } from "./Logo";
import { CgMenuGridO } from "react-icons/cg";
import useScrollPosition from "@react-hook/window-scroll";
import { motion } from "framer-motion";

const TabletNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const scrollY = useScrollPosition(60 /*fps*/);
  const [isShrunk, setIsShrunk] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const currentScrollTop = scrollY;

    // Scrolling down
    if (currentScrollTop > lastScrollTop.current) {
      setIsShrunk(false);
    }
    // Scrolling up
    else {
      setIsShrunk(true);
    }

    lastScrollTop.current = currentScrollTop;
  }, [scrollY]);

  return (
    <>
      {pathname !== "/" && (
        <nav>
          <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          <motion.div
            animate={{
              y: isShrunk ? 0 : -100,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ y: isShrunk ? -100 : 0 }}
            className={`fixed top-0 left-0 w-full z-40 flex items-center px-10 dark:bg-blackbean border-b-2 border-x-2 rounded-b-xl transition-all border-cinnabar h-[72px] bg-linen`}
          >
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
              <Language />
            </div>
          </motion.div>
        </nav>
      )}
    </>
  );
};

export default TabletNavbar;
