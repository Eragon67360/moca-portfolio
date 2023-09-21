"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";
import { FiGlobe } from "react-icons/fi";

function Expandable({ language }: { language: any }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative inline-block ml-4 z-20"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <button className="p-2 rounded-full focus:outline-none">
        <FiGlobe
          className="text-black hover:text-black hover:opacity-60"
          size={24}
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 right-0 mt-0 py-2  w-48 bg-white  rounded-lg shadow-xl">
          <Link
            href="/"
            locale="de"
            className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-falured"
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {language("de")}
          </Link>
          <Link
            href="/"
            locale="en"
            className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-falured"
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {language("en")}
          </Link>
          <Link
            href="/"
            locale="fr"
            className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-falured"
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {language("fr")}
          </Link>
          <Link
            href="/"
            locale="es"
            className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-falured"
            onClick={() => {
              setIsDropdownOpen(false);
            }}
          >
            {language("es")}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Expandable;
