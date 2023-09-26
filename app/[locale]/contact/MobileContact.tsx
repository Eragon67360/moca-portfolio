import React from "react";
import MobileVisitCard from "@/components/[locale]/phone/MobileVisitCard";
import MobileContactForm from "@/components/[locale]/phone/MobileContactForm";

function MobileContact() {
  return (
    <>
      <div className="flex flex-col space-y-10">
        <MobileContactForm />
        <MobileVisitCard />
      </div>
    </>
  );
}

export default MobileContact;
