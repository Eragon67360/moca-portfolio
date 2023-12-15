"use client";
import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

const switchLocaleInPathname = (
  currentPathname: string,
  newLocale: string
): string => {
  const locales = ["en", "fr", "de"];//, "es"
  const defaultLocale = "en";

  const replaced = currentPathname.replace(
    new RegExp(`\/(${locales.join("|")})\/`),
    `/${newLocale}/`
  );

  if (replaced !== currentPathname) {
    return replaced;
  } else if (
    currentPathname === "/" ||
    currentPathname.startsWith("/some-static-path")
  ) {
    return `/${newLocale}${currentPathname}`;
  } else {
    return currentPathname.startsWith("/")
      ? `/${newLocale}${currentPathname}`
      : `/${newLocale}/${currentPathname}`;
  }
};

function Expandable({ language }: { language: any }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname()?.toString();
  const router = useRouter();

  const updateLocale = (newLocale: any) => {
    if (pathname) {
      const updatedPathname = switchLocaleInPathname(pathname, newLocale);
      router.push(updatedPathname);
    }
  };

  const locales = [
    { code: "de", name: language("de") },
    { code: "en", name: language("en") },
    { code: "fr", name: language("fr") },
    // { code: "es", name: language("es") },
  ];

  return (
    <div
      className="relative inline-block ml-4 z-20"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <button
        aria-label="language"
        className="p-2 rounded-full focus:outline-none"
      >
        <FiGlobe
          className="text-light_ink hover:text-light_ink hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-dark_ink dark:hover:text-dark_ink"
          size={24}
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 text-gray-800 dark:text-dark_ink right-0 mt-0 py-2 w-48 bg-light_background dark:bg-dark_surface  rounded-lg shadow-lightBox dark:shadow-darkBox ">
          {locales.map((locale) => (
            <button
              key={locale.code}
              className="block px-4 py-2 hover:bg-primary hover:text-light_secondary dark:hover:text-light_primary"
              onClick={() => {
                updateLocale(locale.code);
                setIsDropdownOpen(false);
              }}
            >
              {locale.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Expandable;
