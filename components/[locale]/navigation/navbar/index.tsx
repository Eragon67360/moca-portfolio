'use client'
import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

function Navbar(): React.JSX.Element {
  return (
    <>
      <div className="w-full h-24 bg-white top-0">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full p-12">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-black text-xl uppercase font-semibold">
              <li>
                <Link href="/home">
                  <p className="hover:text-primary">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <p className="hover:text-primary">Work</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="hover:text-primary">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;