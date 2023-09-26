"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
        className="p-2 rounded-full bg-falured hover:bg-falured/60"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;