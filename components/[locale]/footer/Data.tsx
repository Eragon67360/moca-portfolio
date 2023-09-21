import React from "react";
import { TiMail } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";

export const Data = () => {
  return (
    <div className="flex flex-col text-secondary text-base">
      <div className="flex items-center p-6">
        <a href="mailto:contact@curefab.com">
          <TiMail size={40} />
        </a>

        <a href="mailto:contact@curefab.com" className="ml-6">
          contact@curefab.com
        </a>
      </div>
      <div className="flex items-center p-6">
        <a href="tel:+49 (89) 7879 7938-0">
          <FiPhone size={40} />
        </a>

        <a href="tel:+49 (89) 7879 7938-0" className="ml-6">
          +49 (89) 7879 7938-0
        </a>
      </div>
      <div className="flex items-center p-6">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Landshuter+Allee+12,+80636+M%C3%BCnchen,+Germany/"
        >
          <MdOutlineLocationOn size={40} />
        </a>

        <a
          target="_blank"
          href="https://www.google.com/maps/place/Landshuter+Allee+12,+80636+M%C3%BCnchen,+Germany/"
          className="ml-6"
        >
          Landshuter Allee 12, 80637 München
        </a>
      </div>
      <div className="mt-4">
        <Link href={'/disclaimer'}>Haftungsausschluss (Disclaimer)</Link>
      </div>
    </div>
  );
};
