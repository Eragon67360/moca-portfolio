"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/apple-icon.png";

function Admin() {
  const [activeSection, setActiveSection] = useState("bookings"); // Default to the "bookings" section

  return (
    <>
      <div className="flex h-screen bg-linen dark:bg-blackbean pt-16">
        {/* Sidebar */}
        <div className="bg-blackbean w-1/5 p-4">
          <div className="flex items-center space-x-4">
            {" "}
            <Image src={logo} alt="logo" width={60} />{" "}
            <p className="font-bold text-xl text-secondary">UX MOCA</p>
          </div>

          <ul className="mt-8">
            <li
              className={`mb-2 p-2 rounded cursor-pointer select-none text-secondary ${
                activeSection === "bookings"
                  ? "border border-secondary/75"
                  : "hover:text-secondary/75"
              }`}
              onClick={() => setActiveSection("bookings")}
            >
              Bookings
            </li>
            <li
              className={`mb-2 p-2 rounded cursor-pointer select-none text-secondary ${
                activeSection === "analytics"
                  ? "border border-secondary/75"
                  : "hover:text-secondary/75"
              }`}
              onClick={() => setActiveSection("analytics")}
            >
              Analytics
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 w-full">
          <h1 className="text-blackbean text-2xl font-bold mb-4">
            Admin Dashboard
          </h1>
          {activeSection === "bookings" && (
            <div className="bg-white h-full p-4 rounded-xl shadow mb-6">
              <h2 className="text-xl font-bold mb-4">Bookings</h2>
              {/* Your booking data and components go here */}
            </div>
          )}

          {activeSection === "analytics" && (
            <div className="bg-white h-full p-4 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-4">Analytics</h2>
              {/* Your analytics data and components go here */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
