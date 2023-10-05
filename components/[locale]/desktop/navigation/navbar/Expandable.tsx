"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";
import { FiGlobe } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

const switchLocaleInPathname = (
  currentPathname: string,
  newLocale: string
): string => {
  const locales = ["en", "fr", "de", "es"];
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
  const locale = useLocale();
  const pathname = usePathname()?.toString();
  const router = useRouter();

  const updateLocale = (newLocale: any) => {
    if (pathname) {
      const updatedPathname = switchLocaleInPathname(pathname, newLocale);
      console.log(updatedPathname);
      router.push(updatedPathname);
    }
  };

  const locales = [
    { code: "de", name: language("de") },
    { code: "en", name: language("en") },
    { code: "fr", name: language("fr") },
    { code: "es", name: language("es") },
  ];

  return (
    <div
      className="relative inline-block ml-4 z-20"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <button className="p-2 rounded-full focus:outline-none">
        <FiGlobe
          className="text-black hover:text-black hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-secondary dark:hover:text-secondary"
          size={24}
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 text-gray-800 dark:text-secondary right-0 mt-0 py-2 w-48 bg-secondary dark:bg-falured  rounded-lg shadow-lightBox dark:shadow-darkBox ">
          {locales.map((locale) => (
            <button
              key={locale.code}
              className="block px-4 py-2 hover:bg-primary hover:text-falured dark:hover:text-cinnabar"
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
