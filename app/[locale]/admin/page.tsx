"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/apple-icon.png";
import { motion } from "framer-motion";
import { Analytics } from "./Analytics";

function Admin() {
  const [activeSection, setActiveSection] = useState("bookings"); // Default to the "bookings" section

  return (
    <>
      <div className="flex h-screen bg-third">
        {/* Sidebar */}
        <div className="bg-blackbean  w-1/5 py-4">
          <div className="flex items-center space-x-4 mx-4">
            {" "}
            <Image src={logo} alt="logo" width={60} />{" "}
            <p className="font-bold text-xl text-secondary">UX MOCA</p>
          </div>

          <ul className="mt-8">
            <li
              className={`mb-2 p-2 w-fullrounded cursor-pointer select-none text-secondary ${
                activeSection === "bookings"
                  ? "bg-amber-900"
                  : "hover:text-secondary/75"
              }`}
              onClick={() => setActiveSection("bookings")}
            >
              Bookings
            </li>
            <li
              className={`mb-2 p-2 rounded cursor-pointer select-none text-secondary ${
                activeSection === "analytics"
                  ? "bg-amber-900"
                  : "hover:text-secondary/75"
              }`}
              onClick={() => setActiveSection("analytics")}
            >
              Analytics
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-10 h-full w-full py-10">
          <h1 className="text-[#ededed] text-2xl font-bold mb-4">
            Admin Dashboard
          </h1>
          {activeSection === "bookings" && (
            <div className="bg-[#111111] p-4 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-4 text-[#ededed]">Bookings</h2>
              {/* Your booking data and components go here */}
            </div>
          )}

          {activeSection === "analytics" && (
            <div className="bg-[#111111] h-[85vh] max-h-full p-4 rounded-xl border border-gray-800">
              <h2 className="text-xl font-bold mb-4 text-[#ededed]">Analytics</h2>
              <Analytics />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
