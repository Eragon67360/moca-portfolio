"use client";
import React from "react";
import MobileVisitCard from "@/components/[locale]/mobile/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/mobile/MobileContactForm";

function MobileContact() {
  return (
    <>
      <div className="h-full flex flex-col mb-8 space-y-10 bg-bg-mobile-light dark:bg-bg-mobile-dark bg-no-repeat bg-cover bg-center bg-fixed overflow-y-hidden">
        <MobileContactForm />
        <MobileVisitCard />
      </div>
    </>
  );
}

export default MobileContact;
