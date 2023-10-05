"use client";
import React from "react";
import MobileVisitCard from "@/components/[locale]/mobile/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/mobile/MobileContactForm";
import Image from "next/image";
import logo from "@/public/logo_black.png";
import { Language } from "@/components/[locale]/desktop/navigation/navbar/Language";

function MobileContact() {
  return (
    <>
      <div className="flex flex-col space-y-10 bg-bg-mobile-light dark:bg-bg-mobile-dark bg-no-repeat bg-cover bg-center bg-fixed overflow-y-hidden">
        <div className="flex justify-between pt-4 items-center px-4">
          <Image src={logo} alt="logo" width={140} />
          <Language />
        </div>
        <MobileContactForm />
        <MobileVisitCard />
      </div>
    </>
  );
}

export default MobileContact;
