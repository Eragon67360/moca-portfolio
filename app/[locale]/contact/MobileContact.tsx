'use client'
import React from "react";
import MobileVisitCard from "@/components/[locale]/mobile/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/mobile/MobileContactForm";
import { Search } from "@/components/[locale]/desktop/navigation/navbar/Search";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Language } from "@/components/[locale]/desktop/navigation/navbar/Language";

function MobileContact() {
  return (
    <>
      <div className="flex flex-col space-y-10 pb-20">
        <div className="flex justify-between pt-4 items-center px-4">
          <Search />
          <Image src={logo} alt="logo" width={200}/>
          <Language />
        </div>
        <MobileContactForm />
        <MobileVisitCard />
      </div>
    </>
  );
}

export default MobileContact;
