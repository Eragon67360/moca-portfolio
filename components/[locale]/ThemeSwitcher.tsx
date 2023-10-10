"use client";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import {Tooltip} from "@nextui-org/react";
import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-center items-center">
        <Tooltip content="Switch theme">
        <button name="theme"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          {theme === "light" ? (
            <BsMoon
              className="text-black hover:text-black hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-secondary dark:hover:text-secondary"
              size={30}
            />
          ) : (
            <BsSun
              className="text-black hover:text-black hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-secondary dark:hover:text-secondary"
              size={30}
            />
          )}
        </button></Tooltip>
      </div>
    </>
  );
};

export default ThemeSwitcher;
