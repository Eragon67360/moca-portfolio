import React from "react";
import DateTimePicker from "@/components/[locale]/DateTimePicker";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

const DesktopBooking = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="py-8 bg-cinnabar dark:bg-blackbean w-full flex flex-col justify-center items-center text-secondary space-y-4">
          <Image src={logo} alt="Logo" />
          <h1 className="font-semibold text-xl">Book time with us</h1>
          <h2 className="text-lg">Select a date and time</h2>
        </div>

        <DateTimePicker />
      </div>
    </>
  );
};

export default DesktopBooking;
