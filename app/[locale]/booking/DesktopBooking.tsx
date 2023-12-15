import React from "react";
import DesktopDateTimePicker from "@/components/[locale]/desktop/DesktopDateTimePicker";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

const DesktopBooking = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center pt-24">
        <div className="py-8 bg-light_primary dark:bg-dark_background w-full flex flex-col justify-center items-center text-dark_ink space-y-4">
          <Image src={logo} alt="Logo" width={80} style={{ height: "auto" }} />
          <h1 className="font-semibold text-xl">Book time with us</h1>
          <h2 className="text-lg">Select a date and time</h2>
        </div>

        <DesktopDateTimePicker />
      </div>
    </>
  );
};

export default DesktopBooking;
