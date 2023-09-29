'use client'
import React from "react";
import MobileVisitCard from "@/components/[locale]/mobile/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/mobile/MobileContactForm";
import MobileFooter from "@/components/[locale]/mobile/footer";
import { Search } from "@/components/[locale]/desktop/navigation/navbar/Search";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Language } from "@/components/[locale]/desktop/navigation/navbar/Language";

function MobileContact() {
  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between pt-4 items-center px-4">
          <Search />
          <Image src={logo} alt="logo" width={140}/>
          <Language />
        </div>
        <MobileContactForm />
        <MobileVisitCard />
        <MobileFooter/>
      </div>
    </>
  );
}

export default MobileContact;
