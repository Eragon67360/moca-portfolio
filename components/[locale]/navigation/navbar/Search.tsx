import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex items-center">
      {isSearchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-gray-300 outline-none"
          autoFocus
        />
      )}
      <button
        className=" ml-4 rounded-full bg-transparent focus:outline-none"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <FiSearch
          className="text-black hover:text-black hover:opacity-60 transform transition duration-300 hover:scale-110 dark:text-secondary dark:hover:text-secondary"
          size={24}
        />
      </button>
    </div>
  );
};
