import { Metadata } from "next";
import React from "react";
import MobileContact from "./MobileContact";
import DesktopContact from "./DesktopContact";
import TabletContact from "./TabletContact";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact",
    description:"Contact UX MOCA directly through our website's contact page. Connect with us easily and efficiently."
  };
};

function Contact(): React.JSX.Element {
  const isMobile = false;

  return (
    <>
      <div className="mobile">
        <MobileContact />
      </div>
      <div className="phablet">
        <TabletContact />
      </div>
      <div className="tablet">
        <TabletContact />
      </div>
      <div className="desktop">
        <DesktopContact />
      </div>
    </>
  );
}

export default Contact;
