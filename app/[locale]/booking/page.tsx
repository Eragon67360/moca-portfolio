import React from "react";
import Resizer from "@/components/Resizer";
import MobileBooking from "./MobileBooking";
import DesktopBooking from "./DesktopBooking";
import PhabletBooking from "./PhabletBooking";
import TabletBooking from "./TabletBooking";

function Booking(): React.JSX.Element {
  return (
    <>
      <Resizer
        MobileComponent={<MobileBooking />}
        PhabletComponent={<PhabletBooking />}
        TabletComponent={<TabletBooking />}
        DesktopComponent={<DesktopBooking />}
      />
    </>
  );
}

export default Booking;
