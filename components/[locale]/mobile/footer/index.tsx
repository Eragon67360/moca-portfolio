import React from "react";
import Logos from "./Logos";
import Contacts from "./Contacts";

const MobileFooter = () => {
  return (
    <>
      <div className="bg-linen flex flex-col p-8 pb-20">
        <div className="flex justify-between">
          <Contacts />
          <Logos />
        </div>
        <div className="flex justify-center text-third">
            <p className="px-2 border-r border-third">Privacy Policy</p>
            <p className="px-2 border-l border-third">Terms of Service</p>

        </div>
      </div>
    </>
  );
};

export default MobileFooter;
