import React from "react";
import { Title } from "./Title";
import { Data } from "./Data";
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <div className="h-[400px] bg-third w-screen flex items-center justify-evenly">
      <div className="flex flex-col space-y-4">
        <Title />
        <Data/>
      </div>
      <Logo/>
    </div>
  );
};

export default Footer;
