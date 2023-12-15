"use client";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import { Tooltip } from "@nextui-org/react";
import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-center items-center">
        <Tooltip content="Switch theme">
          <button
            aria-label="theme"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "light" ? (
              <BsMoon
                className="text-light_ink hover:text-light_ink hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-dark_ink dark:hover:text-dark_ink"
                size={24}
              />
            ) : (
              <BsSun
                className="text-light_ink hover:text-light_ink hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-dark_ink dark:hover:text-dark_ink"
                size={24}
              />
            )}
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default ThemeSwitcher;
