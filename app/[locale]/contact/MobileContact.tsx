"use client";
import React from "react";
import MobileVisitCard from "@/components/[locale]/mobile/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/mobile/MobileContactForm";

function MobileContact() {
  return (
    <>
      <div className="flex flex-col space-y-10 bg-bg-mobile-light dark:bg-bg-mobile-dark bg-no-repeat bg-cover bg-center bg-fixed overflow-y-hidden">
        <MobileContactForm />
        <MobileVisitCard />
      </div>
    </>
  );
}

export default MobileContact;
