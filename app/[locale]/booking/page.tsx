import React from "react";
import { Metadata } from "next";
import MobileBooking from "./MobileBooking";
import DesktopBooking from "./DesktopBooking";
import PhabletBooking from "./PhabletBooking";
import TabletBooking from "./TabletBooking";

export const generateMetadata = (): Metadata => {
  return {
    title:'Booking',
    description: "Booking page to book a call with UX MOCA",
  };
};


function Booking(): React.JSX.Element {
  return (
    <>
      <div className="mobile">
        <MobileBooking />
      </div>
      <div className="phablet">
        <PhabletBooking />
      </div>
      <div className="tablet">
        <TabletBooking />
      </div>
      <div className="desktop">
        <DesktopBooking />
      </div>
    </>
  );
}

export default Booking;
