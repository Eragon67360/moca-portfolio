import React from "react";
import MobileVisitCard from "@/components/[locale]/mobile/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/mobile/MobileContactForm";

function MobileContact() {
  return (
    <>
      <div className="flex flex-col space-y-10 pb-20">
        <MobileContactForm />
        <MobileVisitCard />
      </div>
    </>
  );
}

export default MobileContact;
