import { Metadata } from "next";
import React, { useState } from "react";
import DesktopTeam from "./DesktopTeam";
import TabletTeam from "./TabletTeam";
import PhabletTeam from "./PhabletTeam";
import MobileTeam from "./MobileTeam";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
    description: `Discover the talented team behind UX MOCA's website. Meet our skilled members and explore their expertise.`,
  };
};

export default function About() {
  return (
    <>
      <div className="mobile">
        <MobileTeam />
      </div>
      <div className="phablet">
        <PhabletTeam />
      </div>
      <div className="tablet">
        <TabletTeam />
      </div>
      <div className="desktop">
        <DesktopTeam />
      </div>
    </>
  );
}
