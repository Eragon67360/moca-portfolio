import { Metadata } from "next";
import React from "react";
import dynamic from 'next/dynamic';
import MobileContact from "./MobileContact";
import DesktopContact from "./DesktopContact";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact",
  };
};

// Dynamically import the component, and disable server-side rendering for it
const Resizer = dynamic(() => import('@/components/Resizer'), {
  ssr: false
});

function Contact(): React.JSX.Element {
  const isMobile = false;

  return (
    <>
      <Resizer
        MobileComponent={<MobileContact />}
        DesktopComponent={<DesktopContact />}
      />
    </>
  );
}

export default Contact;
